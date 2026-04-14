// ============================================================
// GAS - Fiche Entreprise La Fabrik
// A deployer dans Google Apps Script
// ============================================================

var SHEET_ID = "1b-JPcMWXhHh1IsMCW0hHTNYKL1TaBsbEzW6iMegVdPk";
var HUBSPOT_TOKEN = "TON_NOUVEAU_TOKEN_ICI";

function doPost(e) {
  try {
    var p = JSON.parse(e.postData.contents);
    enregistrerSheet(p);
    envoyerEmail(p);
    creerNote(p);
  } catch(err) {
    Logger.log(err);
  }
  return ContentService.createTextOutput("OK");
}

function enregistrerSheet(p) {
  var sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  sh.appendRow([
    new Date(), p.apprenti||"", p.formation||"", p.debut||"", p.fin||"",
    p.entreprise||"", p.siret||"", p.adresse||"", p.dirigeant||"",
    p.tel_dirigeant||"", p.email_entreprise||"", p.saisie||"",
    p.opco||"", p.convention||"", p.maitre||"", p.email_ma||"",
    p.tel_ma||"", p.signataire||"", p.grille ? "Oui" : "Non"
  ]);
}

function envoyerEmail(p) {
  var grille = null;
  try { if (p.grille) grille = JSON.parse(p.grille); } catch(x) {}
  var sujet = "Nouvelle fiche entreprise - " + (p.apprenti||"Apprenti") + " - " + (p.formation||"Formation");
  var options = { htmlBody: buildHtml(p, grille), name: "CFA La Fabrik" };
  if (p.signature && p.signature.indexOf("base64,") > -1) {
    try {
      var bytes = Utilities.base64Decode(p.signature.split("base64,")[1]);
      options.attachments = [Utilities.newBlob(bytes, "image/png", "signature.png")];
    } catch(x) {}
  }
  MailApp.sendEmail("contrat@fabrikfrejus.fr,info@fabrikfrejus.fr", sujet, "", options);
}

function buildHtml(p, g) {
  var css = "<style>"
    + "body{font-family:Arial,sans-serif;font-size:13px;color:#232121;background:#f2f2f2;margin:0;padding:16px}"
    + ".w{max-width:700px;margin:0 auto;background:white;border-radius:8px;overflow:hidden}"
    + ".hdr{background:#2EB3AF;padding:16px 22px;color:white}"
    + ".hdr h1{margin:0;font-size:17px}"
    + ".hdr p{margin:4px 0 0;font-size:11px;opacity:.85}"
    + ".bd{padding:18px 22px}"
    + ".sec{margin-bottom:14px}"
    + ".st{font-size:10px;font-weight:700;text-transform:uppercase;color:#2EB3AF;margin-bottom:5px;padding-bottom:3px;border-bottom:2px solid #E6F7F7}"
    + ".row{display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #f5f5f5;font-size:12px}"
    + ".lb{color:#888;width:42%}"
    + ".vl{font-weight:600;width:56%;text-align:right}"
    + "table{width:100%;border-collapse:collapse;font-size:11px;margin-top:6px}"
    + "th{background:#2EB3AF;color:white;padding:4px 6px;text-align:left;font-size:10px}"
    + "td{padding:4px 6px;border-bottom:1px solid #f0f6f5;vertical-align:top}"
    + ".bc{background:#f5fafa;font-weight:700;font-size:10px;color:#1A8A86;text-align:center;border-right:2px solid #2EB3AF}"
    + ".r3{color:#2EB3AF;font-weight:700}"
    + ".r2{color:#B19500;font-weight:700}"
    + ".r1{color:#e84545;font-weight:700}"
    + ".ftr{background:#232121;padding:10px 22px;text-align:center;font-size:10px;color:rgba(255,255,255,.4)}"
    + "</style>";

  var d = new Date().toLocaleDateString("fr-FR");
  var h = "<!DOCTYPE html><html><head><meta charset=UTF-8>" + css + "</head><body><div class=w>";
  h += "<div class=hdr><h1>Fiche Entreprise - Contrat Apprentissage</h1>";
  h += "<p>" + (p.apprenti||"?") + " - " + (p.formation||"?") + " - " + d + "</p></div>";
  h += "<div class=bd>";
  h += sec("Apprenti et Formation",
    rw("Nom prenom", p.apprenti) + rw("Formation", p.formation) +
    rw("Debut", p.debut) + rw("Fin", p.fin));
  h += sec("Entreprise",
    rw("Raison sociale", p.entreprise) + rw("SIRET", p.siret) +
    rw("Adresse", p.adresse) + rw("Telephone", p.tel_entreprise) +
    rw("Email", p.email_entreprise) + rw("Dirigeant", p.dirigeant) +
    rw("Tel dirigeant", p.tel_dirigeant));
  h += sec("Contrat et OPCO",
    rw("Saisie", p.saisie) + rw("OPCO", p.opco) + rw("Convention", p.convention));
  h += sec("Maitre apprentissage",
    rw("Nom prenom", p.maitre) + rw("Email", p.email_ma) +
    rw("Tel", p.tel_ma) + rw("Signataire", p.signataire));
  if (g) { h += buildGrille(g); }
  h += "</div>";
  h += "<div class=ftr>CFA La Fabrik - 153 rue Andre Citroen, 83600 Frejus - contrat@fabrikfrejus.fr</div>";
  h += "</div></body></html>";
  return h;
}

function buildGrille(g) {
  var h = "<div class=sec><div class=st>Grille adequation - " + g.formation_titre + "</div>";
  if (g.secteurs && g.secteurs.length) {
    h += "<p style='font-size:11px;margin:5px 0'><b>Secteurs :</b> " + g.secteurs.join(" | ") + "</p>";
  }
  if (g.competences && g.competences.length) {
    h += "<table><thead><tr><th style='width:85px'>Bloc</th><th>Competence</th><th style='width:50px;text-align:center'>Niveau</th><th style='width:110px'>Commentaire</th></tr></thead><tbody>";
    var lastBloc = "";
    for (var i = 0; i < g.competences.length; i++) {
      var c = g.competences[i];
      var niv = "-";
      if (c.niveau === "***") { niv = "<span class=r3>&#9733;&#9733;&#9733;</span>"; }
      else if (c.niveau === "**") { niv = "<span class=r2>&#9733;&#9733;</span>"; }
      else if (c.niveau === "*") { niv = "<span class=r1>&#9733;</span>"; }
      h += "<tr>";
      if (c.bloc !== lastBloc) {
        var nb = 0;
        for (var j = 0; j < g.competences.length; j++) {
          if (g.competences[j].bloc === c.bloc) nb++;
        }
        h += "<td class=bc rowspan=" + nb + ">" + c.bloc + "</td>";
        lastBloc = c.bloc;
      }
      h += "<td>" + c.competence + "</td>";
      h += "<td style='text-align:center'>" + niv + "</td>";
      h += "<td style='font-size:10px;color:#888'>" + (c.commentaire||"") + "</td>";
      h += "</tr>";
    }
    h += "</tbody></table>";
  }
  var qs = [
    ["q1", "L entreprise releve du secteur cible du referentiel"],
    ["q2", "Le maitre est en capacite de former et evaluer aux competences"],
    ["q3", "Conventionnement tierce entreprise si competences non couvertes (art. R6223-10)"]
  ];
  h += "<table style='margin-top:8px'><tbody>";
  for (var k = 0; k < qs.length; k++) {
    var qid = qs[k][0];
    var qlabel = qs[k][1];
    var rep = g.certification[qid] || "-";
    var cls = "";
    if (rep === "OUI") { cls = "r3"; }
    else if (rep === "NON") { cls = "r1"; }
    h += "<tr><td style='font-size:11px;padding:4px 6px;border-bottom:1px solid #f0f0f0'>" + qlabel;
    if (qid === "q3" && g.certification.q3_complement) {
      h += "<br><i style='color:#888;font-size:10px'>" + g.certification.q3_complement + "</i>";
    }
    h += "</td><td style='padding:4px 6px;border-bottom:1px solid #f0f0f0'><span class=" + cls + ">" + rep + "</span></td></tr>";
  }
  h += "</tbody></table>";
  h += "<p style='font-size:10px;color:#aaa;margin-top:6px'><i>Signature jointe en piece jointe : signature.png</i></p>";
  h += "</div>";
  return h;
}

function sec(titre, contenu) {
  return "<div class=sec><div class=st>" + titre + "</div>" + contenu + "</div>";
}

function rw(lb, vl) {
  return "<div class=row><span class=lb>" + lb + "</span><span class=vl>" + (vl||"-") + "</span></div>";
}

function creerNote(p) {
  if (!p.email_ma) return;
  var url = "https://api.hubapi.com/contacts/v1/contact/email/" + encodeURIComponent(p.email_ma) + "/profile";
  var r = UrlFetchApp.fetch(url, {
    method: "GET",
    headers: { "Authorization": "Bearer " + HUBSPOT_TOKEN },
    muteHttpExceptions: true
  });
  if (r.getResponseCode() !== 200) return;
  var vid = JSON.parse(r.getContentText()).vid;
  if (!vid) return;
  var note = "Fiche entreprise recue.\nApprenti : " + (p.apprenti||"-")
    + "\nFormation : " + (p.formation||"-")
    + "\nEntreprise : " + (p.entreprise||"-")
    + "\nGrille : " + (p.grille ? "Oui" : "Non");
  UrlFetchApp.fetch("https://api.hubapi.com/engagements/v1/engagements", {
    method: "POST",
    headers: { "Authorization": "Bearer " + HUBSPOT_TOKEN, "Content-Type": "application/json" },
    payload: JSON.stringify({
      engagement: { active: true, type: "NOTE", timestamp: new Date().getTime() },
      associations: { contactIds: [vid] },
      metadata: { body: note }
    }),
    muteHttpExceptions: true
  });
}
