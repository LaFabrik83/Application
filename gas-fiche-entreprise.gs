var SHEET_ID = "1b-JPcMWXhHh1IsMCW0hHTNYKL1TaBsbEzW6iMegVdPk";
var HUBSPOT_TOKEN = "TON_TOKEN_ICI";
var LOGO_URL = "https://application-lafabrik.netlify.app/logo.png";

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

  var date = new Date().toLocaleDateString("fr-FR");
  var nomEnt = (p.entreprise||"entreprise").replace(/\s/g,"_").replace(/[^a-zA-Z0-9_]/g,"");
  var nomApp = (p.apprenti||"apprenti").replace(/\s/g,"_").replace(/[^a-zA-Z0-9_]/g,"");
  var nomForm = grille ? (grille.formation_titre||p.formation||"formation").replace(/\s/g,"_").replace(/[^a-zA-Z0-9_]/g,"") : (p.formation||"formation").replace(/\s/g,"_");

  var sujet = "Fiche entreprise - " + (p.apprenti||"Apprenti") + " - " + (p.formation||"Formation");

  var corps = "Bonjour,\n\nNouvelle fiche entreprise soumise le " + date + ".\n\n"
    + "Apprenti  : " + (p.apprenti||"-") + "\n"
    + "Formation : " + (p.formation||"-") + "\n"
    + "Entreprise: " + (p.entreprise||"-") + "\n"
    + "SIRET     : " + (p.siret||"-") + "\n"
    + "Maitre MA : " + (p.maitre||"-") + "\n\n"
    + "Deux fichiers sont joints :\n"
    + "1. Fiche entreprise (informations generales)\n"
    + "2. Grille d'adequation (a ouvrir dans le navigateur puis Cmd+P pour PDF)\n\n"
    + "CFA La Fabrik - contrat@fabrikfrejus.fr";

  var attachments = [];

  var ficheHtml = construireFiche(p, date);
  attachments.push(Utilities.newBlob(ficheHtml, "text/html", "Fiche_" + nomEnt + "_" + nomApp + ".html"));

  if (grille) {
    var grilleHtml = construireGrille(p, grille, date);
    attachments.push(Utilities.newBlob(grilleHtml, "text/html", "Grille_" + nomForm + "_" + nomEnt + ".html"));
  }

  if (p.signature && p.signature.indexOf("base64,") > -1) {
    try {
      var bytes = Utilities.base64Decode(p.signature.split("base64,")[1]);
      attachments.push(Utilities.newBlob(bytes, "image/png", "signature_ma.png"));
    } catch(x) {}
  }

  MailApp.sendEmail(
    "contrat@fabrikfrejus.fr,info@fabrikfrejus.fr",
    sujet, corps,
    { attachments: attachments, name: "CFA La Fabrik" }
  );
}

// ─── FICHIER 1 : FICHE ENTREPRISE ────────────────────────────────────────────

function construireFiche(p, date) {
  var h = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">";
  h += "<style>";
  h += "body{font-family:Arial,sans-serif;font-size:11px;color:#232121;margin:0;padding:15mm;}";
  h += ".hdr{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #2EB3AF;padding-bottom:10px;margin-bottom:16px;}";
  h += ".hdr-logo{width:52px;height:52px;border-radius:8px;object-fit:contain;}";
  h += ".hdr-mid{flex:1;padding:0 14px;}";
  h += ".hdr-mid h1{font-size:15px;font-weight:700;color:#232121;margin:0 0 2px;}";
  h += ".hdr-mid p{font-size:11px;color:#2EB3AF;margin:0;}";
  h += ".hdr-right{text-align:right;font-size:10px;color:#888;line-height:1.7;}";
  h += ".sec{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#2EB3AF;margin:12px 0 5px;padding-bottom:3px;border-bottom:1px solid #E6F7F7;}";
  h += ".row{display:flex;padding:3px 0;border-bottom:1px solid #f5f5f5;font-size:11px;}";
  h += ".lb{color:#888;width:45%;}";
  h += ".vl{font-weight:600;width:55%;}";
  h += ".ftr{margin-top:16px;padding-top:8px;border-top:1px solid #D4E8E8;display:flex;justify-content:space-between;font-size:9px;color:#aaa;}";
  h += "@media print{body{padding:10mm;} @page{margin:8mm;}}";
  h += "</style></head><body>";

  h += "<div class=\"hdr\">";
  h += "<img class=\"hdr-logo\" src=\"" + LOGO_URL + "\" alt=\"La Fabrik\">";
  h += "<div class=\"hdr-mid\"><h1>Fiche Entreprise &mdash; Contrat Apprentissage</h1>";
  h += "<p>" + (p.apprenti||"?") + " &mdash; " + (p.formation||"?") + "</p></div>";
  h += "<div class=\"hdr-right\">CFA La Fabrik<br>04 22 54 26 03<br>contrat@fabrikfrejus.fr<br><strong>" + date + "</strong></div>";
  h += "</div>";

  h += "<div class=\"sec\">Apprenti(e) et Formation</div>";
  h += rl("Nom et prenom", p.apprenti) + rl("Formation", p.formation) + rl("Debut de contrat", p.debut) + rl("Fin de contrat", p.fin);

  h += "<div class=\"sec\">Entreprise</div>";
  h += rl("Raison sociale", p.entreprise) + rl("SIRET", p.siret) + rl("Adresse", p.adresse);
  h += rl("Telephone", p.tel_entreprise) + rl("Email", p.email_entreprise);
  h += rl("Dirigeant", p.dirigeant) + rl("Tel. dirigeant", p.tel_dirigeant);

  h += "<div class=\"sec\">Contrat et OPCO</div>";
  h += rl("Saisie du contrat", p.saisie) + rl("OPCO", p.opco) + rl("Convention collective", p.convention);

  h += "<div class=\"sec\">Maitre d'apprentissage</div>";
  h += rl("Nom et prenom", p.maitre) + rl("Email", p.email_ma);
  h += rl("Telephone", p.tel_ma) + rl("Signataire", p.signataire);

  if (p.signature && p.signature.indexOf("base64,") > -1) {
    h += "<div class=\"sec\">Signature</div>";
    h += "<img src=\"" + p.signature + "\" style=\"max-width:220px;max-height:70px;display:block;margin-top:4px;\">";
  }

  h += "<div class=\"ftr\"><span>CFA La Fabrik &mdash; 153 rue Andre Citroen, ZI La Palud, 83600 Frejus</span><span>Document genere le " + date + "</span></div>";
  h += "</body></html>";
  return h;
}

function rl(lb, vl) {
  return "<div class=\"row\"><span class=\"lb\">" + lb + "</span><span class=\"vl\">" + (vl||"&mdash;") + "</span></div>";
}

// ─── FICHIER 2 : GRILLE D'ADEQUATION ─────────────────────────────────────────

function construireGrille(p, g, date) {
  var h = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">";
  h += "<style>";
  h += "body{font-family:Arial,sans-serif;font-size:10px;color:#232121;margin:0;padding:12mm;}";
  h += ".hdr{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #2EB3AF;padding-bottom:10px;margin-bottom:14px;}";
  h += ".hdr-logo{width:50px;height:50px;border-radius:8px;object-fit:contain;}";
  h += ".hdr-mid{flex:1;padding:0 14px;}";
  h += ".hdr-mid h1{font-size:14px;font-weight:700;color:#232121;margin:0 0 2px;}";
  h += ".hdr-mid p{font-size:10px;color:#2EB3AF;margin:0;}";
  h += ".hdr-right{text-align:right;font-size:9px;color:#888;line-height:1.7;}";
  h += ".ctrl-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#232121;background:#f0fafa;border-left:4px solid #2EB3AF;padding:5px 8px;margin:14px 0 6px;}";
  h += ".legende{font-size:9px;color:#555;line-height:1.7;margin-bottom:8px;padding:6px 8px;background:#fafafa;border:1px solid #e0e0e0;border-radius:3px;}";
  h += ".stag{display:inline-block;background:#E6F7F7;border:1px solid #9FD8D6;border-radius:3px;padding:2px 8px;font-size:9px;color:#1A8A86;margin:2px 3px 2px 0;}";
  h += "table{width:100%;border-collapse:collapse;font-size:9px;margin-bottom:12px;}";
  h += "th{background:#2EB3AF;color:white;padding:5px 6px;text-align:center;font-size:8px;text-transform:uppercase;letter-spacing:.3px;border:1px solid #1A8A86;}";
  h += "th.left{text-align:left;}";
  h += "td{padding:4px 6px;border:1px solid #d0e8e6;vertical-align:middle;}";
  h += ".td-bloc{background:#e8f7f6;font-weight:700;font-size:8px;color:#1A8A86;text-align:center;border-right:2px solid #2EB3AF;}";
  h += ".td-comp{font-weight:600;font-size:9px;background:#f5fafa;}";
  h += ".td-tache{font-size:9px;padding-left:10px;}";
  h += ".td-check{text-align:center;font-size:13px;width:28px;}";
  h += ".td-comment{font-size:9px;color:#555;width:130px;}";
  h += ".td-ent{font-size:8px;font-weight:700;text-align:center;background:#f0fafa;color:#2EB3AF;}";
  h += ".cert-table{width:100%;border-collapse:collapse;font-size:10px;margin-bottom:12px;}";
  h += ".cert-table th{background:#232121;color:white;padding:5px 8px;text-align:left;font-size:8px;text-transform:uppercase;}";
  h += ".cert-table td{padding:5px 8px;border:1px solid #d0e0de;vertical-align:top;}";
  h += ".oui{color:#2EB3AF;font-weight:700;font-size:12px;}";
  h += ".non{color:#e84545;font-weight:700;font-size:12px;}";
  h += ".sign-wrap{display:flex;gap:16px;margin-top:16px;}";
  h += ".sign-box{flex:1;border:1px solid #D4E8E8;border-radius:4px;padding:10px;min-height:70px;}";
  h += ".sign-label{font-size:8px;color:#888;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;font-weight:700;}";
  h += ".ftr{margin-top:14px;padding-top:8px;border-top:1px solid #D4E8E8;display:flex;justify-content:space-between;font-size:8px;color:#aaa;}";
  h += "@media print{body{padding:8mm;} @page{margin:6mm;} .ctrl-title{page-break-before:auto;}}";
  h += "</style></head><body>";

  // En-tete
  h += "<div class=\"hdr\">";
  h += "<img class=\"hdr-logo\" src=\"" + LOGO_URL + "\" alt=\"La Fabrik\">";
  h += "<div class=\"hdr-mid\"><h1>Grille d'adequation &mdash; Contrat Apprentissage</h1>";
  h += "<p>" + (g.formation_titre||"") + "</p></div>";
  h += "<div class=\"hdr-right\">CFA La Fabrik<br>04 22 54 26 03<br>contrat@fabrikfrejus.fr<br><strong>" + date + "</strong></div>";
  h += "</div>";

  // 1er controle : secteurs
  h += "<div class=\"ctrl-title\">1er contr&#244;le &mdash; Secteur d'activit&#233; de l'entreprise</div>";
  if (g.secteurs && g.secteurs.length > 0) {
    h += "<div style=\"margin-bottom:8px;\">";
    for (var s = 0; s < g.secteurs.length; s++) {
      h += "<span class=\"stag\">&#10003; " + g.secteurs[s] + "</span>";
    }
    h += "</div>";
  } else {
    h += "<p style=\"color:#aaa;font-size:9px;\">Aucun secteur coch&#233;</p>";
  }

  // 2eme controle : competences
  h += "<div class=\"ctrl-title\">2&#232;me contr&#244;le &mdash; Comp&#233;tences mises en &#339;uvre au sein de l'entreprise</div>";
  h += "<div class=\"legende\">";
  h += "<strong>L&#233;gende :</strong> ";
  h += "<strong>&#9733;&#9733;&#9733;</strong> Les missions confi&#233;es &#224; l'apprenti permettront de d&#233;velopper cette comp&#233;tence &nbsp;|&nbsp; ";
  h += "<strong>&#9733;&#9733;</strong> L'entreprise peut proposer des activit&#233;s en dehors des missions courantes pour d&#233;velopper cette comp&#233;tence &nbsp;|&nbsp; ";
  h += "<strong>&#9733;</strong> Aucune mission propos&#233;e ne permet la construction de cette comp&#233;tence";
  h += "</div>";

  if (g.competences && g.competences.length > 0) {
    h += "<table>";
    h += "<thead><tr>";
    h += "<th class=\"left\" style=\"width:14%\">Blocs de comp&#233;tences</th>";
    h += "<th class=\"left\" style=\"width:18%\">Comp&#233;tences</th>";
    h += "<th class=\"left\">Sous-comp&#233;tences</th>";
    h += "<th colspan=\"3\" style=\"width:90px\">Entreprise : " + (p.entreprise||"") + "</th>";
    h += "<th style=\"width:110px\">Commentaires</th>";
    h += "</tr>";
    h += "<tr style=\"background:#1A8A86;\">";
    h += "<th></th><th></th><th></th>";
    h += "<th style=\"width:28px;\">&#9733;&#9733;&#9733;</th>";
    h += "<th style=\"width:28px;\">&#9733;&#9733;</th>";
    h += "<th style=\"width:28px;\">&#9733;</th>";
    h += "<th></th></tr>";
    h += "</thead><tbody>";

    // Calculer les rowspans par bloc et par competence
    var blocsRows = {};
    var compRows = {};
    for (var i = 0; i < g.competences.length; i++) {
      var c = g.competences[i];
      var nbRows = (c.taches && c.taches.length > 0) ? c.taches.length : 1;
      compRows[i] = nbRows;
      if (!blocsRows[c.bloc]) blocsRows[c.bloc] = 0;
      blocsRows[c.bloc] += nbRows;
    }

    var lastBloc = "";
    var lastBlocRendered = false;
    for (var i = 0; i < g.competences.length; i++) {
      var c = g.competences[i];
      var niv = c.niveau || "";
      var hasTaches = c.taches && c.taches.length > 0;
      var nbLignes = hasTaches ? c.taches.length : 1;

      if (hasTaches) {
        for (var t = 0; t < c.taches.length; t++) {
          h += "<tr>";
          // Cellule bloc (seulement sur la 1ere ligne du 1er competence du bloc)
          if (c.bloc !== lastBloc && t === 0) {
            h += "<td class=\"td-bloc\" rowspan=\"" + blocsRows[c.bloc] + "\">" + c.bloc + "</td>";
            lastBloc = c.bloc;
          } else if (c.bloc !== lastBloc && t === 0) {
            h += "<td class=\"td-bloc\" rowspan=\"" + blocsRows[c.bloc] + "\">" + c.bloc + "</td>";
            lastBloc = c.bloc;
          }
          // Cellule competence (seulement sur la 1ere tache)
          if (t === 0) {
            h += "<td class=\"td-comp\" rowspan=\"" + nbLignes + "\">" + c.competence + "</td>";
          }
          // Tache
          h += "<td class=\"td-tache\">" + c.taches[t] + "</td>";
          // Niveaux
          h += "<td class=\"td-check\">" + (niv === "***" ? "&#9745;" : "&#9744;") + "</td>";
          h += "<td class=\"td-check\">" + (niv === "**" ? "&#9745;" : "&#9744;") + "</td>";
          h += "<td class=\"td-check\">" + (niv === "*" ? "&#9745;" : "&#9744;") + "</td>";
          // Commentaire (seulement sur la 1ere tache, rowspan)
          if (t === 0) {
            h += "<td class=\"td-comment\" rowspan=\"" + nbLignes + "\">" + (c.commentaire||"") + "</td>";
          }
          h += "</tr>";
        }
      } else {
        // Competence sans taches
        h += "<tr>";
        if (c.bloc !== lastBloc) {
          h += "<td class=\"td-bloc\" rowspan=\"" + blocsRows[c.bloc] + "\">" + c.bloc + "</td>";
          lastBloc = c.bloc;
        }
        h += "<td class=\"td-comp\" colspan=\"2\">" + c.competence + "</td>";
        h += "<td class=\"td-check\">" + (niv === "***" ? "&#9745;" : "&#9744;") + "</td>";
        h += "<td class=\"td-check\">" + (niv === "**" ? "&#9745;" : "&#9744;") + "</td>";
        h += "<td class=\"td-check\">" + (niv === "*" ? "&#9745;" : "&#9744;") + "</td>";
        h += "<td class=\"td-comment\">" + (c.commentaire||"") + "</td>";
        h += "</tr>";
      }
    }
    h += "</tbody></table>";
  }

  // 3eme controle : certifications
  h += "<div class=\"ctrl-title\">3&#232;me contr&#244;le &mdash; Certifications des parties prenantes</div>";
  var certQs = [
    ["q1", "L'entreprise rel&#232;ve du secteur cible du r&#233;f&#233;rentiel du dipl&#244;me"],
    ["q2", "Le ma&#238;tre d'apprentissage que l'employeur a d&#233;sign&#233; est en capacit&#233; de former et d'&#233;valuer aux comp&#233;tences r&#233;f&#233;renc&#233;es dans la grille"],
    ["q3", "Si le tableau indique des blocs et/ou des comp&#233;tences non mises en &#339;uvre dans l'entreprise, l'entreprise consent &#224; recourir au conventionnement avec une tierce entreprise dans le cadre du Code du travail (articles R6223-10 &#224; R6223-16)"]
  ];
  h += "<table class=\"cert-table\"><thead><tr>";
  h += "<th style=\"width:75%\">Certification</th>";
  h += "<th style=\"width:8%\">OUI</th>";
  h += "<th style=\"width:8%\">NON</th>";
  h += "<th>Compl&#233;ments</th>";
  h += "</tr></thead><tbody>";
  for (var k = 0; k < certQs.length; k++) {
    var qid = certQs[k][0];
    var qlabel = certQs[k][1];
    var rep = (g.certification && g.certification[qid]) ? g.certification[qid] : "";
    h += "<tr>";
    h += "<td>" + qlabel + "</td>";
    h += "<td style=\"text-align:center;font-size:14px;\">" + (rep === "OUI" ? "<span class=\"oui\">&#9745;</span>" : "&#9744;") + "</td>";
    h += "<td style=\"text-align:center;font-size:14px;\">" + (rep === "NON" ? "<span class=\"non\">&#9745;</span>" : "&#9744;") + "</td>";
    var complement = "";
    if (qid === "q3" && g.certification && g.certification.q3_complement) {
      complement = g.certification.q3_complement;
    }
    h += "<td style=\"font-size:9px;color:#555;\">" + complement + "</td>";
    h += "</tr>";
  }
  h += "</tbody></table>";

  // Zone signature
  h += "<div class=\"sign-wrap\">";
  h += "<div class=\"sign-box\">";
  h += "<div class=\"sign-label\">Signature et cachet de l'entreprise d'accueil</div>";
  if (p.signature && p.signature.indexOf("base64,") > -1) {
    h += "<img src=\"" + p.signature + "\" style=\"max-width:200px;max-height:65px;display:block;margin-top:4px;\">";
    if (p.signataire) { h += "<div style=\"font-size:9px;margin-top:4px;\">" + p.signataire + "</div>"; }
  } else {
    h += "<div style=\"font-size:9px;color:#aaa;margin-top:4px;\">Signature en piece jointe (signature_ma.png)</div>";
  }
  h += "</div>";
  h += "<div class=\"sign-box\"><div class=\"sign-label\">Signature responsable qualit&#233; CFA La Fabrik</div>";
  h += "<div style=\"font-size:9px;color:#555;margin-top:4px;\">Doriane JURAD</div></div>";
  h += "</div>";

  h += "<div class=\"ftr\"><span>CFA La Fabrik &mdash; 153 rue Andre Citroen, ZI La Palud, 83600 Frejus</span><span>Grille d'adequation &mdash; " + date + "</span></div>";
  h += "</body></html>";
  return h;
}

// ─── NOTE HUBSPOT ─────────────────────────────────────────────────────────────

function creerNote(p) {
  if (!p.email_ma) return;
  var url = "https://api.hubapi.com/contacts/v1/contact/email/" + encodeURIComponent(p.email_ma) + "/profile";
  var r = UrlFetchApp.fetch(url, { method: "GET", headers: { "Authorization": "Bearer " + HUBSPOT_TOKEN }, muteHttpExceptions: true });
  if (r.getResponseCode() !== 200) return;
  var vid = JSON.parse(r.getContentText()).vid;
  if (!vid) return;
  var note = "Fiche entreprise recue.\nApprenti : " + (p.apprenti||"-") + "\nFormation : " + (p.formation||"-") + "\nEntreprise : " + (p.entreprise||"-") + "\nGrille : " + (p.grille ? "Oui" : "Non");
  UrlFetchApp.fetch("https://api.hubapi.com/engagements/v1/engagements", {
    method: "POST",
    headers: { "Authorization": "Bearer " + HUBSPOT_TOKEN, "Content-Type": "application/json" },
    payload: JSON.stringify({ engagement: { active: true, type: "NOTE", timestamp: new Date().getTime() }, associations: { contactIds: [vid] }, metadata: { body: note } }),
    muteHttpExceptions: true
  });
}
