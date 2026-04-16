# CLAUDE.md — La Fabrik / Espace Collaborateurs
> Mémoire permanente du projet. Mis à jour à chaque évolution significative.

---

## Qui je suis / Qui est Benjamin

Benjamin est **responsable admissions au CFA La Fabrik** à Fréjus. Il est novice en développement : il prend les décisions, je les exécute et le conseille. Toutes mes explications doivent être accessibles, sans jargon inutile. Je lui présente des options, jamais des décisions imposées.

---

## Notre façon de travailler

1. **Lire avant d'agir** — Je lis toujours les fichiers concernés avant toute modification.
2. **Expliquer avant de toucher** — Avant chaque modification, j'explique CE QUE je vais faire et POURQUOI. J'attends une validation explicite de Benjamin avant d'agir.
3. **Un plan complet d'abord** — Je ne modifie jamais plusieurs fichiers sans avoir présenté un plan complet et obtenu l'accord de Benjamin.
4. **Modifications directes** — Je fais les changements directement dans les fichiers. Jamais de blocs de code à copier-coller.
5. **Commit local, push différé** — On commit après chaque étape validée (en local uniquement). Le `git push` vers GitHub (et donc le déploiement Netlify) n'est fait qu'une fois tout testé et approuvé par Benjamin. Je propose le message de commit et j'attends sa validation avant d'exécuter.
6. **Proactivité** — Je signale ce qui peut être amélioré, en présentant des options avec leur impact estimé.
7. **Langue** — Je m'exprime UNIQUEMENT en français, dans tous les contextes : code, commentaires, messages Git, explications. Aucune exception.

---

## Stack technique

| Couche | Outil |
|---|---|
| Hébergement | Netlify (déploiement auto depuis GitHub, < 1 min) |
| Source | GitHub — repo : `LaFabrik83/Application` |
| URL production | `lafabrik.netlify.app` |
| CRM | HubSpot |
| Tableur | Google Sheets |
| Backend léger | Google Apps Script (webhooks) |
| Frontend | HTML/CSS/JS vanilla, zéro framework |

**Contrainte absolue : hébergement 100 % gratuit. Pas de backend, pas de base de données externe.**

---

## Charte graphique

| Élément | Valeur |
|---|---|
| Teal (principal) | `#2EB3AF` |
| Teal foncé | `#1A8A86` |
| Teal clair | `#E6F7F7` |
| Noir | `#232121` |
| Or | `#B19500` |
| Or foncé | `#8F8016` |
| Or clair | `#F5F0D0` |
| Fond global | `#F2FAFA` |
| Bordures | `#D4E8E8` |
| Texte muet | `#5A5A5A` |
| Typographie titres | Bebas Neue (Google Fonts) |
| Typographie corps | Open Sans (Google Fonts) |

Toutes ces valeurs sont centralisées dans `shared.css` en variables CSS (`:root`).

---

## Conventions de code JS

- **`var` uniquement** — pas de `const`, pas de `let`
- **Pas de template literals** (`` ` `` ) — concaténation classique avec `+`
- **Apostrophes françaises échappées** dans les strings JS : `l\'entreprise`
- Vanilla JS pur, pas de jQuery, pas de framework

---

## Contraintes techniques spécifiques

- Les appels vers Google Apps Script utilisent `mode: 'no-cors'` et `Content-Type: text/plain`
- Le Sheet ID Google contient des **O majuscules** (pas des zéros `0`) — ne pas modifier
- Les fichiers HTML sont auto-suffisants : CSS embarqué dans `<style>`, JS embarqué dans `<script>` (sauf exceptions comme `grille-data.js`)
- `shared.css` est le seul fichier CSS externe, importé par tous les outils via `<link rel="stylesheet" href="../shared.css">` (ou `href="shared.css"` depuis la racine)

---

## Structure du projet

```
/
├── index.html              ← Page d'accueil / hub des outils
├── shared.css              ← Styles et variables partagés (charte graphique)
├── CLAUDE.md               ← Ce fichier
├── test-entree/
│   └── index.html          ← Test d'entrée candidats (35 questions, 19 formations)
├── previsionnel/
│   └── index.html          ← Prévisionnel financier contrat d'apprentissage (grille 2026)
├── login.html              ← Page de connexion (mot de passe unique, auth localStorage)
└── fiche-entreprise/
    ├── index.html          ← Fiche entreprise partenaire (formulaire multi-étapes)
    ├── historique.html     ← Historique des fiches soumises (tableau de bord protégé)
    └── grille-data.js      ← Grilles de compétences RNCP par formation
```

---

## Sécurité / Authentification

- `login.html` : page de connexion avec mot de passe unique (`Fabrik2026`)
- Auth stockée en `localStorage` : clé `lafabrik_auth = "true"`
- Pages **protégées** (redirigent vers `login.html` si non connecté) : `index.html`, `previsionnel/index.html`, `fiche-entreprise/historique.html`
- Pages **libres** (partagées avec l'extérieur) : `test-entree/index.html`, `fiche-entreprise/index.html`
- Bouton "Déconnexion" dans le header des pages protégées

---

## Les 3 outils — état et fonctionnalités

### 1. Test d'entrée (`test-entree/`)
- 35 questions adaptées à 19 formations (niveaux 3 à 7) — structure : 10 FR + 10 CG + 10 EN + 5 Pro
- Minuterie 15 minutes avec auto-soumission
- Écran de fin candidat : message bienveillant "Bravo, c'est dans la boîte !" avec mention 48h
- À la soumission : enregistrement localStorage + envoi webhook GAS
- GAS enregistre dans Google Sheets (16 colonnes), crée une note HubSpot et une tâche "Appeler" J+2 à 9h
- Webhook GAS actuel : `AKfycbx8VlKbgeZib6lFESH6xxaDYUACWUsZg8iZrkPfE63o3HKwXBfXphg_VU-s1z5mMKjvxg`
- ⚠️ La tâche HubSpot utilise l'API Engagements v1 (pas v3 tasks — scope non disponible sur ce plan)
- Lien candidat partageable avec formation et infos pré-remplies
- Lien test à distance : bouton "📤 Envoyer le test au candidat" génère un lien Netlify pré-rempli (`?nom=&prenom=&email=&formation=&direct=1`)
- Candidat arrive sur page d'accueil personnalisée (prénom + formation) puis passe directement au test — aucun accès à la plateforme collaborateurs
- Tableau de bord **Kanban** : 3 colonnes (⏳ En attente / ✅ Retenus / ❌ Non retenus), cartes avec avatar, score coloré, boutons ✓/✗ rapides
- Tableau de bord : recherche par nom/email/formation, filtres par niveau
- Tableau de bord : statut synchronisé vers Google Sheets à chaque changement
- **Vue Archives dédiée** : bouton "📦 Archives" ouvre un écran séparé avec tableau (nom, formation, score, date), recherche, ↩ Restaurer, Voir détail
- Modal détail : 3 boutons — 📧 Envoyer résultats (mailto: chaleureux), 🖨 Imprimer/PDF, 📦 Archiver (archive + ferme)
- Google Sheet : 16 colonnes — ID, Prénom, Nom, Email, Formation, Niveau, Date, Score %, Score FR, Score CG, Score EN, Score Pro, Score Total, Durée, Statut, Détail des réponses
- GAS entièrement réécrit : `doPost` (soumission + mise à jour statut), `doGet` (expose données JSON), note HubSpot enrichie (pictogrammes + lien Sheet), tâche "Appeler" J+2 à 9h
- Correction scores multi-postes : `loadFromSheet()` accepte les deux formats de clés GAS (`score_pct` ET `Score %`, etc.) — **à valider en production après push Netlify**
- Import `shared.css`

### 2. Prévisionnel apprentissage (`previsionnel/`)
- Calcul automatique des salaires bruts/nets, charges patronales, aides — grille SMIC 2026
- Carte synthèse (3 métriques clés) visible à l'écran et dans le PDF
- Tableau récapitulatif multi-années (évolution salaire et coût sur toute la durée du contrat)
- PDF généré via Blob URL avec auto-print, footer CFA La Fabrik, sauts de page contrôlés
- Lien partageable avec paramètres pré-remplis
- ⚠️ Fichier très volumineux — modifier via Python/sed, pas l'outil Edit
- Import `shared.css`

### 3. Fiche entreprise (`fiche-entreprise/`)
- Formulaire 6 étapes : apprenti → entreprise → maître d'apprentissage → grille d'adéquation → signature → récapitulatif
- Auto-complétion SIRET via API entreprise
- Lien partageable pré-rempli (apprenti, formation, dates)
- **Formation OBLIGATOIRE** (étape 1 — champ requis avec validation)
- **Grille d'adéquation OBLIGATOIRE** (étape 4 — secteur + toutes compétences notées + 3 questions certification) — décision légale : sans grille, pas de contrat
- `validerGrille()` : vérifie que chaque compétence a un niveau ★ avant de passer à l'étape 5 — alerte avec liste des compétences manquantes
- `goToAdequation()` : si pas de formation → alerte + retour étape 1 ; sinon toujours afficher la grille (jamais de saut vers étape 6)
- Encart d'intro grille : explication des niveaux ★★★/★★/★ visible par l'entreprise avant le tableau
- **Sauvegarde automatique brouillon** : `localStorage` — sauvegarde à chaque étape, restauration au rechargement avec bannière + bouton "Effacer et recommencer"
- À la soumission : enregistrement Google Sheets + email récapitulatif vers contrat@fabrikfrejus.fr et info@fabrikfrejus.fr + note HubSpot sur la fiche du maître d'apprentissage
- Webhook GAS actuel : `AKfycbyoAgfsxlwhT81iD9Jc_JLerCIy_hAHcENsVCtfglwvf0_4Hpbr9VdS0LVwwWAQsFSRVw`
- Google Sheet dédié : `1b-JPcMWXhHh1IsMCW0hHTNYKL1TaBsbEzW6iMegVdPk`
- Google Sheet — 32 colonnes : Date, Apprenti, Formation, Debut, Fin, Entreprise, SIRET, Adresse, Code APE, Effectif, Dirigeant, Tel Dirigeant, Tel Entreprise, Email Entreprise, Saisie CERFA, OPCO, Convention, IDCC, Caisse Retraite, Nb Contrats, Maitre, DN MA, Tel MA, Tel Fixe MA, Email MA, Emploi MA, Experience MA, Diplome MA, Lieu MA, SMS MA, Signataire, Grille
- Email : 2 fichiers HTML joints — `Fiche_NomEnt_NomApp.html` et `Grille_NomForm_NomEnt.html` + signature PNG — ouvrir dans navigateur + Cmd+P pour PDF
- GAS : `construireFiche()` + `construireGrille()` — grille style Word avec logo, rowspans, cases cochées ☑/☐, certifications, zone signature Doriane JURAD
- 3 PDFs disponibles (étape 6 + écran succès) : PDF Entreprise, PDF École, **PDF Grille signée**
- `printVersion()` : Blob URL + auto-print + vraie signature injectée (remplace les cases vides)
- `printGrille()` : PDF autonome avec secteurs, tableau compétences (étoiles colorées), attestations OUI/NON, signature réelle
- Import `shared.css`
- ⚠️ `grille-data.js` doit toujours être commité avec `index.html`
- ⚠️ Fichier très volumineux (~350 Ko) — modifier via sed/Bash ou Edit avec chaînes précises

---

## Dette technique connue

| Priorité | Problème | Fichier(s) concerné(s) |
|---|---|---|
| Moyenne | `fiche-entreprise/index.html` très volumineux (~350 Ko) | `fiche-entreprise/index.html` |
| Basse | Année 2026 codée en dur dans le header de l'accueil | `index.html` |

---

## Historique des décisions importantes

- **2026-04** : `shared.css` créé pour centraliser la charte graphique commune
- **2026-04** : Lien de test partageable ajouté (paramètre URL formation pré-sélectionnée)
- **2026-04** : Envoi webhook Google Apps Script dans la fiche entreprise
- **2026-04** : `grille-data.js` externalisé depuis `fiche-entreprise/index.html` (grilles RNCP)
- **2026-04** : Harmonisation charte graphique sur tous les outils (favicon, logo réel, icônes SVG, header teal uniforme)
- **2026-04** : Prévisionnel — contrat pro supprimé, carte synthèse, tableau multi-années, PDF Blob avec auto-print
- **2026-04** : Test d'entrée — tâche HubSpot automatique à J+2 via API Engagements v1 (tâche "Appeler" avec score et formation)
- **2026-04** : Test d'entrée — tableau de bord cross-poste via Google Sheets (doGet GAS), sync statut, archivage, recherche, actions rapides, impression PDF
- **2026-04** : Test d'entrée — refonte tableau de bord en Kanban 3 colonnes + vue Archives dédiée
- **2026-04** : Test d'entrée — lien candidat à distance avec page d'accueil personnalisée (direct=1)
- **2026-04** : Test d'entrée — GAS entièrement réécrit (doPost/doGet/statut/note HubSpot enrichie/tâche J+2)
- **2026-04** : Test d'entrée — modal détail simplifié : email résultats (mailto:), PDF, archiver
- **2026-04** : Fiche entreprise — GAS complet créé (Sheets + emails automatiques + HubSpot)
- **2026-04** : Fiche entreprise — grille d'adéquation rendue obligatoire (légalement requise pour établir le contrat)
- **2026-04** : Fiche entreprise — `printGrille()` ajouté : PDF grille remplie + signature réelle (Blob URL)
- **2026-04** : Fiche entreprise — `printVersion()` converti en Blob URL, signature injectée dans les PDFs
- **2026-04** : Fiche entreprise — bouton "Modifier" étape 6 corrigé (redirige vers étape 1, pas étape 3)
- **2026-04** : Fiche entreprise — GAS 2 fichiers HTML joints (fiche + grille) via `Utilities.newBlob` (pas de DocumentApp)
- **2026-04** : Fiche entreprise — `tel_entreprise` ajouté au payload et au Sheet (colonne manquante corrigée)
- **2026-04** : Fiche entreprise — validation grille obligatoire avant signature (`validerGrille()`)
- **2026-04** : Fiche entreprise — sauvegarde brouillon localStorage avec restauration automatique et bannière
- **2026-04** : Sécurisation espace collaborateurs — `login.html` + auth localStorage (index + prévisionnel + historique protégés ; test + fiche libres)
- **2026-04** : Fiche entreprise — `historique.html` : tableau de bord des fiches soumises (stats, recherche, modal détail, export CSV) via GAS `doGet`
- **2026-04** : GAS fiche entreprise — ajout `doGet` pour exposer les données du Sheet en JSON
- **2026-04** : Déploiement Netlify pro — nouveau compte `lafabrik.netlify.app` connecté à `LaFabrik83/Application`

---

## Résumé session 2026-04-16 — À lire en priorité

### Ce qui a été fait
- Test d'entrée — bugs corrigés (timer, guards null, questions dupliquées niv5)
- Test d'entrée — lien candidat à distance avec page d'accueil personnalisée
- Test d'entrée — tableau de bord Kanban (3 colonnes)
- Test d'entrée — vue Archives dédiée (tableau + restauration)
- Test d'entrée — modal détail simplifié (3 boutons : email résultats, PDF, archiver)
- Test d'entrée — GAS entièrement réécrit et redéployé (nouveau webhook mis à jour dans le code)
- Test d'entrée — note HubSpot enrichie avec pictogrammes + lien Google Sheets
- Test d'entrée — token HubSpot ajouté dans le GAS ✅
- 5 commits en attente de push vers Netlify (branche main)

### Ce qui reste à faire (PRIORITÉ 1)
1. **Push vers Netlify** — `git push origin main` — déclenche le déploiement auto
2. **Valider les scores multi-postes** — tester sur un second appareil via `lafabrik.netlify.app`

### Ce qui peut attendre
- Configurer SSH pour ne plus avoir besoin de token GitHub
- Supprimer l'ancien compte Netlify test
- `fiche-entreprise/index.html` très volumineux (~350 Ko) — dette technique basse priorité
- **Token HubSpot** dans `gas-fiche-entreprise.gs` : vérifier si `TON_TOKEN_ICI` a bien été remplacé (notes HubSpot fiche entreprise)
