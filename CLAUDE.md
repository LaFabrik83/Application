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
| URL production | `application-lafabrik.netlify.app` |
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
└── fiche-entreprise/
    ├── index.html          ← Fiche entreprise partenaire (formulaire multi-étapes)
    └── grille-data.js      ← Grilles de compétences RNCP par formation
```

---

## Les 3 outils — état et fonctionnalités

### 1. Test d'entrée (`test-entree/`)
- 35 questions adaptées à 19 formations (niveaux 3 à 7) — structure : 10 FR + 10 CG + 10 EN + 5 Pro
- Minuterie 15 minutes avec auto-soumission
- À la soumission : enregistrement localStorage + envoi webhook GAS
- GAS enregistre dans Google Sheets, crée une note HubSpot et crée une tâche "Appeler" échéance J+2 à 9h
- Webhook GAS actuel : `AKfycbyTy3TyPESi3Xy-Q8yTCXjkNhXiCR5M86gNA9Sv4yoWhNJv9S1QIJgBznrRlV4IfcAyYg`
- ⚠️ La tâche HubSpot utilise l'API Engagements v1 (pas v3 tasks — scope non disponible sur ce plan)
- Lien candidat partageable avec formation et infos pré-remplies
- Tableau de bord interne : filtres par niveau, statuts (retenu / non retenu / en attente), modal détail, export CSV
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
- Formulaire multi-étapes : informations entreprise, maître d'apprentissage, formations souhaitées, grille de compétences
- Auto-complétion SIRET via API entreprise
- Envoi par webhook Google Apps Script
- Webhook GAS actuel : `AKfycbyZ89dDC0U3PCQWFJtORJ_8a1Ev8_-jpbOgIDKLxBC9X5-pcc38PdgOVk6v7ejVsld0uw`
- Import `shared.css`
- ⚠️ `grille-data.js` doit toujours être commité avec `index.html`

---

## Dette technique connue

| Priorité | Problème | Fichier(s) concerné(s) |
|---|---|---|
| Moyenne | `fiche-entreprise/index.html` très volumineux (323 Ko) | `fiche-entreprise/index.html` |
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
