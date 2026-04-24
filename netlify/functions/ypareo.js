const https = require("https");

const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NzYzNzY4MDAsImNsdCI6IjM3MDA5MzQwLTQ5RjYtNDUxQy05MzlFLURBRDQ5RjU5OTU5RiJ9.saRQg1gAbuggzBoxZPJf17HVf4M72ddLMuTlrMwXsrw";
const BASE_HOST = "fabriktetedaffiche.ymag.cloud";
const BASE_PATH = "/index.php";

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "fr-FR,fr;q=0.9",
  "Connection": "keep-alive",
  "Referer": "https://fabriktetedaffiche.ymag.cloud/",
  "Origin": "https://fabriktetedaffiche.ymag.cloud",
  "Authorization": `Bearer ${API_TOKEN}`,
  "X-Auth-Token": API_TOKEN,
};

function ypareoGet(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: BASE_HOST,
      path: BASE_PATH + path,
      method: "GET",
      headers: HEADERS,
      rejectUnauthorized: false,
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => {
        try { resolve({ data: JSON.parse(data), status: res.statusCode }); }
        catch { resolve({ data: null, status: res.statusCode, error: data.slice(0, 100) }); }
      });
    });
    req.on("error", (e) => resolve({ data: null, status: 0, error: e.message }));
    req.setTimeout(12000, () => { req.destroy(); resolve({ data: null, status: 0, error: "timeout" }); });
    req.end();
  });
}

function toList(raw) {
  if (Array.isArray(raw)) return raw;
  if (raw && typeof raw === "object") {
    for (const key of ["apprenants", "data", "items", "results", "contenu", "liste"]) {
      if (Array.isArray(raw[key])) return raw[key];
    }
    const vals = Object.values(raw);
    if (vals.length && typeof vals[0] === "object") return vals;
  }
  return [];
}

async function getGroupesMap() {
  const mapping = {};
  const { data } = await ypareoGet("/r/v1/formation-longue/groupes");
  if (!data) return mapping;

  const groupes = toList(data);
  await Promise.all(groupes.map(async (groupe) => {
    if (typeof groupe !== "object") return;
    const codeGroupe = groupe.codeGroupe || groupe.id || "";
    const libelle = (groupe.libelleGroupe || groupe.libelle || groupe.nomGroupe || "").trim();
    if (!codeGroupe || !libelle) return;

    const { data: apData } = await ypareoGet(`/r/v1/groupes/${codeGroupe}/apprenants`);
    if (!apData) return;
    for (const ap of toList(apData)) {
      if (typeof ap !== "object") continue;
      const codeAp = String(ap.codeApprenant || ap.id || "");
      if (codeAp) mapping[codeAp] = libelle;
    }
  }));
  return mapping;
}

function normalize(raw, groupesMap) {
  groupesMap = groupesMap || {};
  return toList(raw).reduce((acc, item) => {
    if (typeof item !== "object") return acc;
    const prenom = (item.prenomApprenant || item.prenom || item.firstName || "").trim();
    const nom    = (item.nomApprenant || item.nom || item.lastName || "").trim();
    const uid    = String(item.codeApprenant || item.id || item.idApprenant || "");
    const email  = (item.email || item.mail || item.emailApprenant || "").trim();
    let classe   = (item.libelleGroupe || item.libelleFormation || item.nomFormation || item.formation || "").trim();
    if (!classe && uid) classe = groupesMap[uid] || "";
    if (prenom || nom) acc.push({ ypareo_id: uid, prenom, nom, classe, email });
    return acc;
  }, []);
}

exports.handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  try {
    const groupesMap = await getGroupesMap();
    const { data, status } = await ypareoGet("/r/v1/formation-longue/apprenants");
    if (!data) {
      return { statusCode: 502, headers: corsHeaders, body: JSON.stringify({ ok: false, error: `Ypareo HTTP ${status}` }) };
    }
    const apprenants = normalize(data, groupesMap);
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ ok: true, apprenants, count: apprenants.length }),
    };
  } catch (e) {
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ ok: false, error: e.message }) };
  }
};
