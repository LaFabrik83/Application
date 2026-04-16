// ============================================================
//  GAS — Test d'entrée CFA La Fabrik
//  À déployer sur : script.google.com
//  Déploiement : Application Web > Tout le monde (anonyme)
// ============================================================

var SHEET_ID    = "1Oa29bZXQAfOvPHJq8IOD7SHzrXl-DxzB2La5cYRB_FM";
var SHEET_URL   = "https://docs.google.com/spreadsheets/d/1Oa29bZXQAfOvPHJq8IOD7SHzrXl-DxzB2La5cYRB_FM/edit";
var HUBSPOT_TOKEN = "TON_TOKEN_ICI"; // <-- Remplacer par ton vrai token HubSpot

// ============================================================
//  POINT D'ENTRÉE POST — reçoit les données du formulaire
// ============================================================
function doPost(e) {
  try {
    var p = JSON.parse(e.postData.contents);

    // Mise à jour du statut depuis le tableau de bord
    if (p.action === "updateStatus") {
      mettreAJourStatut(p.id, p.statut);
      return ContentService.createTextOutput(JSON.stringify({ok: true}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Nouvelle soumission de test
    enregistrerDansSheet(p);
    creerNoteHubSpot(p);
    creerTacheHubSpot(p);

    return ContentService.createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    Logger.log(err);
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
//  POINT D'ENTRÉE GET — expose les données pour le tableau de bord
// ============================================================
function doGet(e) {
  try {
    var sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    var rows = sh.getDataRange().getValues();
    var result = [];

    for (var i = 1; i < rows.length; i++) {
      var r = rows[i];
      if (!r[0]) continue; // Ignorer les lignes vides
      result.push({
        id:           String(r[0]),
        prenom:       r[1]  || "",
        nom:          r[2]  || "",
        email:        r[3]  || "",
        formation:    r[4]  || "",
        niveau:       r[5]  || "",
        date:         r[6]  || "",
        score_pct:    r[7]  || "0",
        score_fr:     r[8]  || "0",
        score_cg:     r[9]  || "0",
        score_en:     r[10] || "0",
        score_pro:    r[11] || "0",
        score_total:  r[12] || "0",
        duree:        r[13] || "",
        statut:       r[14] || "En attente",
        detail:       r[15] || ""
      });
    }

    return ContentService.createTextOutput(JSON.stringify({results: result}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    Logger.log(err);
    return ContentService.createTextOutput(JSON.stringify({results: [], error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
//  ENREGISTREMENT DANS GOOGLE SHEETS
// ============================================================
function enregistrerDansSheet(p) {
  var sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];

  // Créer les en-têtes si le sheet est vide
  if (sh.getLastRow() === 0) {
    sh.appendRow([
      "ID", "Prénom", "Nom", "Email", "Formation", "Niveau",
      "Date", "Score %", "Score FR", "Score CG", "Score EN",
      "Score Pro", "Score Total", "Durée", "Statut", "Détail des réponses"
    ]);
  }

  sh.appendRow([
    p.id,
    p.prenom,
    p.nom,
    p.email,
    p.formation,
    p.niveau,
    p.date,
    p.score_pct,
    p.score_fr,
    p.score_cg,
    p.score_en,
    p.score_pro,
    p.score_total,
    p.duree        || "—",
    p.statut       || "En attente",
    p.detail_reponses || ""
  ]);
}

// ============================================================
//  MISE À JOUR DU STATUT (depuis le tableau de bord)
// ============================================================
function mettreAJourStatut(id, statut) {
  var sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  var data = sh.getDataRange().getValues();
  var labelStatut = statut === "Retenu"     ? "Retenu"
                  : statut === "Non retenu" ? "Non retenu"
                  : statut === "Archive"    ? "Archivé"
                  : "En attente";

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sh.getRange(i + 1, 15).setValue(labelStatut); // Colonne 15 = Statut
      break;
    }
  }
}

// ============================================================
//  RECHERCHE CONTACT HUBSPOT PAR EMAIL
// ============================================================
function trouverContactHubSpot(email) {
  var url = "https://api.hubapi.com/crm/v3/objects/contacts/search";
  var resp = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: {"Authorization": "Bearer " + HUBSPOT_TOKEN},
    payload: JSON.stringify({
      filterGroups: [{filters: [{propertyName: "email", operator: "EQ", value: email}]}],
      properties: ["email", "firstname", "lastname"]
    }),
    muteHttpExceptions: true
  });
  var data = JSON.parse(resp.getContentText());
  if (data.results && data.results.length > 0) return data.results[0].id;
  return null;
}

// ============================================================
//  CRÉATION DE LA NOTE HUBSPOT
// ============================================================
function creerNoteHubSpot(p) {
  var vid = trouverContactHubSpot(p.email);
  if (!vid) return; // Contact introuvable dans HubSpot

  var ligne = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
  var dureeStr = (p.duree && p.duree !== "\u2014") ? "  |  \u23F1 " + p.duree : "";

  var note = "\uD83C\uDF93 TEST D'ENTREE \u2014 CFA LA FABRIK\n"
    + ligne + "\n"
    + "\uD83D\uDC64 " + p.prenom + " " + p.nom.toUpperCase() + "\n"
    + "\uD83D\uDCDA " + p.formation + " (" + p.niveau + ")\n"
    + "\uD83D\uDCC5 " + p.date + dureeStr + "\n\n"
    + "\uD83D\uDCCA RESULTATS\n"
    + ligne + "\n"
    + "  \uD83D\uDD35 Score global  : " + p.score_pct + " %\n"
    + "  \uD83D\uDCDD Fran\u00E7ais      : " + p.score_fr + "\n"
    + "  \uD83C\uDF0D Culture G.    : " + p.score_cg + "\n"
    + "  \uD83C\uDDEC\uD83C\uDDE7 Anglais       : " + p.score_en + "\n"
    + "  \uD83D\uDCBC Pro           : " + p.score_pro + "\n"
    + ligne + "\n\n"
    + "\uD83D\uDD17 Google Sheets : " + SHEET_URL;

  UrlFetchApp.fetch("https://api.hubapi.com/engagements/v1/engagements", {
    method: "post",
    contentType: "application/json",
    headers: {"Authorization": "Bearer " + HUBSPOT_TOKEN},
    payload: JSON.stringify({
      engagement:   {active: true, type: "NOTE", timestamp: new Date().getTime()},
      associations: {contactIds: [parseInt(vid)]},
      metadata:     {body: note}
    }),
    muteHttpExceptions: true
  });
}

// ============================================================
//  CRÉATION DE LA TÂCHE HUBSPOT (J+2 à 9h — "Appeler")
// ============================================================
function creerTacheHubSpot(p) {
  var vid = trouverContactHubSpot(p.email);
  if (!vid) return;

  var echeance = new Date();
  echeance.setDate(echeance.getDate() + 2);
  echeance.setHours(9, 0, 0, 0);

  var sujet = "Appeler " + p.prenom + " " + p.nom
    + " \u2014 " + p.formation
    + " \u2014 Score : " + p.score_pct + "%";

  UrlFetchApp.fetch("https://api.hubapi.com/engagements/v1/engagements", {
    method: "post",
    contentType: "application/json",
    headers: {"Authorization": "Bearer " + HUBSPOT_TOKEN},
    payload: JSON.stringify({
      engagement:   {active: true, type: "TASK", timestamp: new Date().getTime()},
      associations: {contactIds: [parseInt(vid)]},
      metadata: {
        body:      sujet,
        subject:   sujet,
        status:    "NOT_STARTED",
        taskType:  "CALL",
        timestamp: echeance.getTime()
      }
    }),
    muteHttpExceptions: true
  });
}
