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
- Écran de fin candidat : message bienveillant "Bravo, c'est dans la boîte !" avec mention 48h
- À la soumission : enregistrement localStorage + envoi webhook GAS
- GAS enregistre dans Google Sheets (16 colonnes), crée une note HubSpot et une tâche "Appeler" J+2 à 9h
- Webhook GAS actuel : `AKfycbyLZYGOGMUOtmbdV3sYvFwiAxHlGBxw8gsZ7JlJfIXvhze5ccZtesuqL4Yasq--tBWHGA`
- ⚠️ La tâche HubSpot utilise l'API Engagements v1 (pas v3 tasks — scope non disponible sur ce plan)
- Lien candidat partageable avec formation et infos pré-remplies
- Tableau de bord cross-poste : données lues depuis Google Sheets au chargement (visible sur tous les postes)
- Tableau de bord : recherche par nom/email/formation, filtres par niveau, actions rapides ✓/✗ sur chaque ligne
- Tableau de bord : statut synchronisé vers Google Sheets à chaque changement
- Tableau de bord : archivage candidat (disparaît de la vue principale, reste dans le Sheet), toggle "Voir archivés"
- Tableau de bord : modal détail, impression PDF complète (Blob URL + auto-print), export CSV
- Google Sheet : 16 colonnes — ID, Prénom, Nom, Email, Formation, Niveau, Date, Score %, Score FR, Score CG, Score EN, Score Pro, Score Total, Durée, Statut, Détail des réponses
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
- Formulaire 6 étapes : entreprise → apprenti → maître d'apprentissage → grille d'adéquation → signature → récapitulatif
- Auto-complétion SIRET via API entreprise
- Lien partageable pré-rempli (apprenti, formation, dates)
- **Formation OBLIGATOIRE** (étape 1 — champ requis avec validation)
- **Grille d'adéquation OBLIGATOIRE** (étape 4 — secteur + toutes compétences notées + 3 questions certification) — décision légale : sans grille, pas de contrat
- `goToAdequation()` : si pas de formation → alerte + retour étape 1 ; sinon toujours afficher la grille (jamais de saut vers étape 6)
- À la soumission : enregistrement Google Sheets + email récapitulatif vers contrat@fabrikfrejus.fr et info@fabrikfrejus.fr + note HubSpot sur la fiche du maître d'apprentissage
- Webhook GAS actuel : `AKfycbw9aFQNbZOCci4oNvs8zLdqEko4qQYpOtOje0E49BKZ5cEZQqCaXFJJ4EZNcKbqL0JR`
- Google Sheet dédié : `1b-JPcMWXhHh1IsMCW0hHTNYKL1TaBsbEzW6iMegVdPk`
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
- **2026-04** : Fiche entreprise — GAS complet créé (Sheets + emails automatiques + HubSpot)
- **2026-04** : Fiche entreprise — grille d'adéquation rendue obligatoire (légalement requise pour établir le contrat)
- **2026-04** : Fiche entreprise — `printGrille()` ajouté : PDF grille remplie + signature réelle (Blob URL)
- **2026-04** : Fiche entreprise — `printVersion()` converti en Blob URL, signature injectée dans les PDFs
- **2026-04** : Fiche entreprise — bouton "Modifier" étape 6 corrigé (redirige vers étape 1, pas étape 3)
