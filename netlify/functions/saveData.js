const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }

  try {
    const { key, data } = JSON.parse(event.body || "{}");
    if (!key || data === undefined) {
      return { statusCode: 400, headers: cors, body: JSON.stringify({ ok: false, error: "key et data requis" }) };
    }

    const store = getStore("fabrik-points");
    await store.set(key, JSON.stringify(data));

    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ ok: false, error: e.message }) };
  }
};
