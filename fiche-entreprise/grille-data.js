var GRILLES = {

  // ─────────────────────────────────────────────
  // BAC PRO COIFFURE
  // ─────────────────────────────────────────────
  'BAC_COIF': {
    titre: 'Bac Pro Métiers de la Coiffure',
    rncp: 'RNCP40707',
    secteurs: [
      { label: 'Salons de coiffure, salons itinérants, entreprises de coiffure à domicile, entreprises liées au secteur de la coiffure' },
      { label: 'Barbershop' },
      { label: 'Spectacle et mode' },
      { label: 'Établissements et institutions diverses avec des activités de coiffure intégrées (centre d\'esthétique, de thalassothérapie, établissements de tourisme et de loisirs, de soins, de cure, de convalescence, de réadaptation, d\'hébergement pour personnes âgées).', last: true }
    ],
    blocs: [
      {
        label: 'Conception et réalisation de prestations de coiffure',
        competences: [
          {
            label: 'Élaboration d\'un diagnostic en vue du service',
            taches: [
              'Réalisation d\'un diagnostic pour choisir les services'
            ]
          },
          {
            label: 'Mise en œuvre de techniques d\'hygiène et de soins capillaires',
            taches: [
              'Réalisation d\'un shampooing',
              'Réalisation d\'un soin capillaire'
            ]
          },
          {
            label: 'Conception et réalisation d\'une coupe personnalisée femme et homme',
            taches: [
              'Choix et adaptation de la coupe',
              'Réalisation d\'une coupe femme',
              'Réalisation d\'une coupe homme'
            ]
          },
          {
            label: 'Conception et réalisation d\'une modification personnalisée de la couleur',
            taches: [
              'Choix et adaptation de techniques et de produits de modification de la couleur en fonction du résultat attendu',
              'Réalisation de la coloration et d\'effets de couleur'
            ]
          },
          {
            label: 'Conception et réalisation personnalisées d\'une mise en forme temporaire ou durable et d\'un coiffage',
            taches: [
              'Adaptation de la mise en forme au résultat attendu',
              'Réalisation d\'une mise en forme temporaire',
              'Modification durable de la forme naturelle par enroulage',
              'Réalisation d\'un coiffage'
            ]
          }
        ]
      },
      {
        label: 'Relation avec la clientèle et vente de services et de produits',
        competences: [
          {
            label: 'Accueil de la clientèle, identification de ses attentes et de ses besoins',
            taches: [
              'Création d\'une relation client',
              'Identification des attentes et des besoins du ou de la client(e)'
            ]
          },
          {
            label: 'Conseil et vente de services ou de produits capillaires, matériels et accessoires',
            taches: [
              'Choix des services et/ou des produits',
              'Conseil à la clientèle',
              'Proposition d\'un devis',
              'Réalisation de la vente et de l\'encaissement'
            ]
          },
          {
            label: 'Suivi, développement et fidélisation de la clientèle',
            taches: [
              'Mise en œuvre d\'une action de fidélisation',
              'Incrémentation d\'un fichier clientèle numérique',
              'Suivi et exploitation du fichier clientèle',
              'Gestion de la prise de rendez-vous',
              'Évaluation de la satisfaction du ou de la client(e)'
            ]
          },
          {
            label: 'Promotion des prestations, des produits et des matériels',
            taches: [
              'Valorisation des prestations, des produits et des matériels',
              'Promotion des produits, prestations ou matériels',
              'Animation des lieux de vente et d\'actions de promotion'
            ]
          }
        ]
      },
      {
        label: 'Pilotage d\'une entreprise de coiffure',
        competences: [
          {
            label: 'Organisation de l\'activité des personnels',
            taches: [
              'Organisation et gestion des plannings des collaborateurs (trices)',
              'Adaptation de l\'organisation à l\'activité quotidienne'
            ]
          },
          {
            label: 'Suivi et accompagnement de l\'équipe',
            taches: [
              'Mobilisation des différents moyens pour motiver le personnel',
              'Participation à l\'information et à la formation des collaborateurs (trices)',
              'Participation au recrutement du personnel'
            ]
          },
          {
            label: 'Aménagement et gestion des espaces d\'une entreprise de coiffure',
            taches: [
              'Aménagement et organisation des différents espaces professionnels',
              'Gestion des produits et du matériel',
              'Gestion des équipements'
            ]
          },
          {
            label: 'Gestion administrative, économique et financière d\'une entreprise de coiffure',
            taches: [
              'Participation à la stratégie de développement de l\'entreprise',
              'Calcul des coûts - Élaboration des prix',
              'Réalisation d\'opérations comptables, de démarches administratives',
              'Démarche de projet de reprise ou de création d\'entreprise'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BAC PRO MCV
  // ─────────────────────────────────────────────
  'BAC_MCV': {
    titre: 'Bac Pro Métiers du Commerce et de la Vente',
    rncp: '',
    secteurs: [
      { label: 'Entreprise à finalité commerciale' },
      { label: 'Entreprise disposant d\'un service commercial' },
      { label: 'Autre : spécifiez…', libre: true }
    ],
    blocs: [
      {
        label: 'N°1 - Conseiller et vendre',
        competences: [
          {
            label: 'Assurer la veille commerciale',
            taches: [
              'Rechercher, hiérarchiser, exploiter et actualiser en continu les informations sur l\'entreprise et son marché / Maîtriser la technologie des produits / Sélectionner les outils de recherche d\'information les plus adaptés'
            ]
          },
          {
            label: 'Réaliser la vente dans un cadre omnicanal',
            taches: [
              'Intégrer l\'omnicanal dans le processus de vente / Prendre contact avec le client / S\'adapter au contexte commercial et au comportement du client / Découvrir, analyser et identifier le(s) besoin(s) du client, sa (ses) motivation(s) et ses freins éventuels / Découvrir, analyser et reformuler les besoins du client / Présenter l\'entreprise et/ou ses produits el/ou ses services / Conseiller le client en proposant la solution adaptée / Argumenter / Réaliser une démonstration le cas échéant / Répondre aux objections du client / Proposer les produits el/ou les services associés / Délecter les opportunités de vente(s)additionnelle(s) et les concrétiser / S\'assurer de la disponibilité du produit / Formaliser l\'accord du client'
            ]
          },
          {
            label: 'Assurer l\'exécution de la vente',
            taches: [
              'Mettre en place les modalités de règlement et de livraison / Rassurer le client sur son choix / Prendre congé'
            ]
          }
        ]
      },
      {
        label: 'N°2 - Suivre les ventes',
        competences: [
          {
            label: 'Assurer le suivi de la commande du produit et/ou du service',
            taches: [
              'Suivre l\'évolution de la commande et éventuellement du règlement / Informer le client des délais et des modalités de mise à disposition'
            ]
          },
          {
            label: 'Mettre en œuvre le ou les services associés',
            taches: [
              'Sélectionner le cas échéant le prestataire le plus adapté / Collecter et transmettre les informations au service de l\'entreprise ou aux prestataires concernés / Suivre l\'exécution du ou des service(s) associé(s) et en rendre compte / Effectuer le cas échéant les relances'
            ]
          },
          {
            label: 'Traiter les retours et les réclamations du client',
            taches: [
              'Identifier le(s) problème(s) rencontré(s) par le client / Proposer une solution adaptée en tenant compte des procédures de l\'entreprise et de la règlementation'
            ]
          },
          {
            label: 'S\'assurer de la satisfaction du client',
            taches: [
              'Collecter les informations de satisfaction auprès des clients / Mesurer et analyser la satisfaction du client / Transmettre les informations sur la satisfaction du client / Exploiter les informations recueillies à des fins d\'amélioration / Proposer des éléments de nature à améliorer la satisfaction client'
            ]
          }
        ]
      },
      {
        label: 'N°3 - Fidéliser la clientèle et développer la relation client',
        competences: [
          {
            label: 'Traiter et exploiter l\'information ou le contact client',
            taches: [
              'Traiter les messages el/ou les demandes des clients / Recueillir, extraire, exploiter, synthétiser les données de sources internes, de sources externes / Rendre compte des données appropriées / Proposer des actions de fidélisation el/ou de développement de la relation client en adéquation avec les données recueillies et l\'orientation commerciale de l\'entreprise'
            ]
          },
          {
            label: 'Contribuer à des actions de fidélisation de la clientèle et de développement de la relation client',
            taches: [
              'Sélectionner et mettre en œuvre les outils de fidélisation et/ou de développement de la relation client de l\'entreprise / Concourir à la préparation et à l\'organisation d\'évènements el/ou d\'opérations de fidélisation/ développement de la relation client / Participer à la mise en œuvre des évènements el/ou opérations de fidélisation/ développement de la relation client / Effectuer des ventes au rebond / Réaliser les opérations de suivi post évènement / Mobiliser les outils d\'internet et les réseaux sociaux'
            ]
          },
          {
            label: 'Évaluer les actions de fidélisation et de développement de la relation client',
            taches: [
              'Enrichir et actualiser le SIC / Mesurer et analyser les résultats / Rendre compte des actions et des résultats par écrit et/ou à l\'oral / Proposer des axes d\'amélioration'
            ]
          }
        ]
      },
      {
        label: 'N°4 - Animer et gérer l\'espace commercial (Option A)',
        competences: [
          {
            label: 'Assurer les opérations préalables à la vente',
            taches: [
              'Établir les commandes des produits auprès de la centrale d\'achats et/ou des fournisseurs indépendants sélectionnés avec la hiérarchie, en tenant compte des contraintes / Préparer les commandes des clients issues de l\'omnicanal / Veiller à la gestion rigoureuse des stocks et au réapprovisionnement en tenant compte des règles de sécurité et d\'hygiène / Réceptionner, contrôler et stocker les marchandises (quantitatif et qualitatif) / Respecter les règles de valorisation des déchets et réduire le gaspillage / Effectuer les relances et préparer les retours fournisseurs / Établir le prix en fonction de variables commerciales données / Étiqueter les produits et les sécuriser / Enrichir et exploiter le système d\'information commercial / Comparer les résultats aux objectifs fixés et proposer des actions correctrices / Participer aux opérations d\'inventaire / Identifier les invendus / Lutter contre la démarque / Gérer les retours et les échanges des clients'
            ]
          },
          {
            label: 'Rendre l\'unité commerciale attractive et fonctionnelle',
            taches: [
              'S\'assurer de la disponibilité et de la qualité des produits / Implanter les produits selon une logique commerciale el/ou d\'entreprise / Vérifier l\'étiquetage, le balisage et la mise en valeur des produits / S\'assurer de la bonne tenue et de la propreté du rayon / Accueillir, informer et orienter le client dans l\'unité commerciale et à l\'extérieur / Mettre en place la signalétique / Participer à l\'agencement de la surface de vente / Aménager la vitrine et/ou le rayon / Mettre en scène l\'offre et en optimiser la visibilité / Veiller au respect des règles d\'hygiène et de sécurité / Valoriser l\'offre sur les sites marchands et les réseaux sociaux'
            ]
          },
          {
            label: 'Développer la clientèle',
            taches: [
              'Proposer des actions commerciales génératrices de trafic dans l\'unité commerciale / Sélectionner les gammes de produits à mettre en avant en lien avec la stratégie de l\'unité commerciale / Participer à la planification et à l\'organisation des actions de promotion des marchandises / Démarcher une nouvelle clientèle / Communiquer sur l\'événement / Recourir aux sites marchands et aux réseaux sociaux / Inciter à l\'achat par une action commerciale, le cas échéant interactive / Générer des contacts positifs/utiles / Participer à l\'évaluation et à l\'analyse des performances des actions commerciales'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BACHELOR BANQUE & ASSURANCE MAJ 2026
  // ─────────────────────────────────────────────
  'BAC6_BNQ': {
    titre: 'Bachelor Banque & Assurance (MAJ 2026)',
    rncp: '',
    secteurs: [
      { label: 'Les établissements de crédit (banques commerciales, coopératives et mutualistes)' },
      { label: 'Les cabinets de courtage' },
      { label: 'Les compagnies d\'assurance' },
      { label: 'Autre : spécifiez…', libre: true }
    ],
    blocs: [
      {
        label: 'N°1 Établir et développer une relation client en contexte omnicanal',
        competences: [
          {
            label: 'Gestion de la relation client (Particuliers et entreprise)',
            taches: [
              'Accueil du client',
              'Développement de la relation client',
              'Gestion des demandes client via le canal de communication choisi (web, mail, téléphone, etc…)',
              'Conseil client adaptés au profil client',
              'Arrêt des termes d\'un contrat',
              'Gestion des réclamations et litiges',
              'Gestion des procédures contentieuses'
            ]
          }
        ]
      },
      {
        label: 'N°2 Commercialiser les produits et services bancaires ou d\'assurance dans le cadre d\'une relation personnalisée',
        competences: [
          {
            label: 'Développement des offres banque/assurance (agence ou en ligne)',
            taches: [
              'Développement des offres banque/assurance (agence ou en ligne)',
              'Diagnostic de la situation client (entreprise ou particulier)',
              'Apport de solutions bancaires ou d\'assurance',
              'Réalisation d\'acte de vente et de contrats',
              'Reporting de ses activités auprès du responsable d\'agence'
            ]
          },
          {
            label: 'Actions d\'optimisation financière (prêts, placement, gestion de patrimoine)',
            taches: [
              'Analyse de la situation financière d\'un client particulier ou d\'une entreprise',
              'Contrôle des comptes bancaires',
              'Montage de dossier de financement (prêts immobiliers, crédits personnels, rachat de crédits…)',
              'Conseil en gestion de patrimoine'
            ]
          }
        ]
      },
      {
        label: 'N°3 Assurer la gestion de son portefeuille client en intégrant une politique de prévention des risques bancaires',
        competences: [
          {
            label: 'Gestion des risques bancaires et assurantiels',
            taches: [
              'Évaluation du profil risque du client',
              'Respect des normes et réglementations en vigueur (RGPD, MIF2, IPID, lutte contre le terrorisme et blanchiment)',
              'Action de prévention en matière de cybersécurité'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BP COIFFURE
  // ─────────────────────────────────────────────
  'BP_COIF': {
    titre: 'BP Coiffure',
    rncp: '',
    secteurs: [
      { label: 'Salons de coiffure, salons itinérants, entreprises de coiffure à domicile, entreprises liées au secteur de la coiffure' },
      { label: 'Barbershop' },
      { label: 'Spectacle et mode' },
      { label: 'Établissements et institutions diverses avec des activités de coiffure intégrées (centre d\'esthétique, de thalassothérapie, établissements de tourisme et de loisirs, de soins, de cure, de convalescence, de réadaptation, d\'hébergement pour personnes âgées).', last: true }
    ],
    blocs: [
      {
        label: 'Accueil : prise en charge et relation – suivi clientèle',
        competences: [
          {
            label: 'Accueil de la clientèle',
            taches: [
              'Accueil et suivi de la qualité de l\'accueil du client',
              'Validation des attentes et des besoins du client',
              'Proposition de service adapté à l\'attente du client : technique, temps, résultat attendu, prix…'
            ]
          },
          {
            label: 'Suivi du client durant le déroulement de la prestation',
            taches: [
              'Information du client sur les différentes phases de la prestation',
              'Suivi de l\'enchaînement des différentes phases de la prestation du client',
              'Consultation et mise à jour de la fiche technique du client',
              'Offre de services de confort',
              'Vérification de la conformité de la procédure et de la satisfaction du client'
            ]
          },
          {
            label: 'Encaissement et prise de congé',
            taches: [
              'Établissement ou mise à jour de la fiche de suivi du client',
              'Facturation des produits et des services',
              'Vérification du paiement',
              'Outils de fidélisation et de développement de la clientèle',
              'Prise de congés'
            ]
          },
          {
            label: 'Conseil clientèle – valorisation des services et suivi beauté',
            taches: [
              'Évaluation des attentes, des motivations et des besoins du client',
              'Proposition personnalisée de soins et produits adaptés pour la mise en valeur de la prestation réalisée et son entretien',
              'Proposition de vente d\'accessoires et de matériels de coiffure',
              'Conseils de coupe, de coiffage et d\'entretien de postiches et de perruques'
            ]
          },
          {
            label: 'Fidélisation et développement de la clientèle',
            taches: [
              'Création et exploitation du fichier clients',
              'Choix et mise en œuvre d\'actions de fidélisation'
            ]
          },
          {
            label: 'Présentation des produits et des services',
            taches: [
              'Organisation et mise en valeur des espaces de vente'
            ]
          },
          {
            label: 'Vente des produits et de services',
            taches: [
              'Recherche ciblée de services et de leur clientèle',
              'Promotion, lancement de nouveaux services, de nouveaux produits'
            ]
          }
        ]
      },
      {
        label: 'Conception, réalisation de techniques',
        competences: [
          {
            label: 'Conception de nouvelles coiffures',
            taches: [
              'Recherche et mise au point de techniques personnalisées : Coupe / Coiffage / Modification de la couleur et de la forme',
              'Mise en valeur de la chevelure avec prise en compte de la tendance en fonction de la clientèle'
            ]
          },
          {
            label: 'Présentation des techniques à la clientèle',
            taches: [
              'Explication de la coupe, du coiffage, de la modification de la couleur et de la forme auprès de la clientèle'
            ]
          },
          {
            label: 'Mise en œuvre des techniques sur la clientèle',
            taches: [
              'Technique de soins du cuir chevelu et des cheveux',
              'Création et réalisation de coupes personnalisées sur modèles masculin et féminin',
              'Modification temporaire ou permanente de la couleur : éclaircissement et/ou coloration, sur chevelure entière et/ou partielle',
              'Modification durable et personnalisée de la forme du cheveu (avec utilisation de produits chimiques) par apport ou réduction de la forme ou de volume (frisage et défrisage) sur repousses et/ou longueurs pour toute coiffure, sur chevelure entière et/ou partielle',
              'Réalisation de coiffage tout type de cheveux, toute longueur',
              'Réalisation de coiffure élaborée sur cheveux longs, avec points d\'attache, chignons, coiffure évènementielle ou de circonstance',
              'Pose de postiche',
              'Adaptation de postiches et de perruques par coupe, coiffage et entretien',
              'Taille et rasage du système pilo-facial et entretien'
            ]
          }
        ]
      },
      {
        label: 'Animation et gestion des personnels',
        competences: [
          {
            label: 'Recrutement',
            taches: [
              'Rédaction et diffusion de l\'offre de recrutement'
            ]
          },
          {
            label: 'Planification de l\'activité des personnels',
            taches: [
              'Définition des postes de travail',
              'Attribution des activités en fonction des compétences, des motivations et des objectifs du personnel',
              'Planification de l\'activité journalière, hebdomadaire, des congés'
            ]
          },
          {
            label: 'Animation',
            taches: [
              'Encadrement du personnel sur les techniques à mettre en œuvre et les produits',
              'Transmission et explication des techniques et argumentation des effets : Formation à la gestion optimale du temps de réalisation de la prestation au regard de la qualité et du résultat attendu / Evaluation du travail du personnel prenant en compte la gestion optimale de la prestation : rapport temps / coût / qualité / résultat',
              'Identification des besoins en personnels : repérage des besoins et des difficultés des personnels et proposition de pistes de progrès / Evaluation des besoins en formation / Information et formation des personnels : professionnels de l\'entreprise et jeunes en formation / Compte rendu des difficultés rencontrées et proposition de pistes de progrès'
            ]
          }
        ]
      },
      {
        label: 'Gestion administrative et financière développement de l\'entreprise',
        competences: [
          {
            label: 'Gestion des produits, des matériels',
            taches: [
              'Essai de nouveaux produits en vue de leur référencement ou non au sein de l\'entreprise',
              'Détermination des stocks nécessaires à l\'activité du salon',
              'Suivi du stock, déclenchement du réassortiment, établissement des commandes',
              'Traitement des livraisons non conformes'
            ]
          },
          {
            label: 'Contrôle et suivi de la maintenance',
            taches: [
              'Suivi du cahier des charges relatif à la maintenance et à la sécurité',
              'Veille juridique et technique relative à l\'hygiène et à la sécurité'
            ]
          },
          {
            label: 'Gestion comptable et financière',
            taches: [
              'Evaluation des charges, calcul des coûts de revient des produits et des services',
              'Contrôle de la caisse',
              'Suivi de la trésorerie',
              'Renseignement des documents administratifs, comptables, fiscaux et bancaires relatifs aux achats, aux ventes, aux personnels, aux mouvements d\'argent,…',
              'Renseignement de document liés aux personnels',
              'Recherche d\'experts répondant aux besoins identifiés d\'ordre juridique, social et financier',
              'Prise de contact, démarches administratives auprès des organismes habilités'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BTS BANQUE
  // ─────────────────────────────────────────────
  'BTS_BANQUE': {
    titre: 'BTS Banque',
    rncp: '',
    secteurs: [
      { label: 'Agences bancaires et financières physiques' },
      { label: 'Centres bancaires et financiers à distance' },
      { label: 'Prestataires de services bancaires, financiers et assurantiels' },
      { label: 'Autres : précisez…', libre: true }
    ],
    blocs: [
      {
        label: 'N°1 – Accompagnement du parcours du client de services bancaires et financiers',
        competences: [
          {
            label: 'Accompagnement du parcours client',
            taches: [
              'Organiser et animer des espaces dédiés à l\'accueil',
              'Application du protocole d\'accueil adapté au canal de communication et à la situation du client.',
              'Utilisation d\'un registre de langage conforme aux usages de la profession.',
              'Adoption d\'une posture adaptée à la clientèle bancaire.',
              'Respect du secret bancaire.',
              'Maîtrise des applications métier et outils numériques professionnels.',
              'Fiabilité des Informations clients.',
              'Prise de RDV qualifiés.'
            ]
          },
          {
            label: 'Orientation du client vers le bon interlocuteur interne ou externe',
            taches: [
              'Réalisation des opérations courantes.',
              'Argumentation d\'un refus d\'opération.',
              'Gestion des dysfonctionnements.',
              'Prise en charge du client par des interlocuteurs internes et externes.',
              'Accroches relatives aux offres complémentaires'
            ]
          },
          {
            label: 'Traitement des alertes au quotidien',
            taches: [
              'Application des mesures de suivi des situations à risques.',
              'Application des mesures de lutte contre la fraude.',
              'Application des mesures de lutte contre le blanchiment des capitaux et le financement du terrorisme.'
            ]
          },
          {
            label: 'Accompagnement des usages numériques',
            taches: [
              'Prise en compte des clients vulnérables ou en situation d\'illectronisme.',
              'Application du protocole de sécurité numérique de l\'établissement.',
              'Équipement des clients en services à distance'
            ]
          }
        ]
      },
      {
        label: 'N°2 - Développement commercial',
        competences: [
          {
            label: 'Préparation de la vente-conseil',
            taches: [
              'Fixation d\'objectifs cohérents avec la situation du client, le fonctionnement du compte et les préconisations de l\'établissement.',
              'Réalisation d\'une fiche de préparation d\'entretien adaptée à la situation et à l\'univers de produits et services.'
            ]
          },
          {
            label: 'Mise en œuvre d\'actions commerciales',
            taches: [
              'Sélection et traitement des informations commerciales pertinentes.',
              'Actions favorisant le développement du portefeuille client.'
            ]
          },
          {
            label: 'Conduite de la vente-conseil',
            taches: [
              'Prise de contact conforme aux pratiques de l\'établissement.',
              'Conduite d\'un plan de découverte complet.',
              'Reformulation et synthèse hiérarchisée des besoins.',
              'Argumentation commerciale personnalisée adaptée à l\'univers de produits et services.',
              'Concrétisation de la vente dans le respect de la réglementation et de la déontologie.'
            ]
          },
          {
            label: 'Consolidation de la relation client',
            taches: [
              'Réalisation de comptes rendus conformes aux exigences de l\'établissement.',
              'Respect des conditions de mise en œuvre d\'un contrat.',
              'Réponse aux demandes de la clientèle dans les délais.',
              'Élaboration d\'un plan de relances personnalisées.',
              'Administration de questionnaires de satisfaction client.',
              'Mesure de la satisfaction du client, incitation au parrainage et aux recommandations.'
            ]
          },
          {
            label: 'L\'utilisation du système d\'information commercial',
            taches: [
              'Sélectionner, traiter et hiérarchiser les informations pertinentes en fonction du type d\'action'
            ]
          },
          {
            label: 'La participation à la gestion du risque au quotidien',
            taches: [
              'Apprécier le risque lié aux relations entre un client et sa banque',
              'Prendre les mesures appropriées de prévention et de gestion du risque client',
              'Transmettre les dossiers aux services spécialisés'
            ]
          }
        ]
      },
      {
        label: 'N°3 - Conseil et expertise en solutions bancaires et financières',
        competences: [
          {
            label: 'Ouverture et suivi des comptes bancaires',
            taches: [
              'Exploitation d\'informations pertinentes sur la situation du client.',
              'Ouverture de comptes adaptés à la situation du client.',
              'Suivi du fonctionnement du compte.',
              'Mise en place des produits et services liés au compte.',
              'Respect de la réglementation applicable aux comptes.'
            ]
          },
          {
            label: 'Mise à disposition et suivi des moyens de paiement',
            taches: [
              'Adéquation entre le moyen de paiement et la situation du client.',
              'Prévention des risques liés aux moyens de paiement.',
              'Gestion des incidents liés à l\'utilisation des moyens de paiement.'
            ]
          },
          {
            label: 'Élaboration d\'une solution d\'épargne',
            taches: [
              'Mobilisation des instruments d\'épargne en fonction du profil du client.',
              'Application des règles fiscales.'
            ]
          },
          {
            label: 'Élaboration d\'une solution d\'assurance',
            taches: [
              'Prise en compte des éléments constitutifs du contrat d\'assurance.',
              'Identification des produits d\'assurance adaptés à la situation du client.'
            ]
          },
          {
            label: 'Élaboration d\'une solution de financement',
            taches: [
              'Adaptation du mode de financement aux besoins du client.',
              'Évaluation globale du risque client.',
              'Prise en compte des éléments constitutifs du financement des assurances et des garanties appropriées.',
              'Suivi des étapes du crédit et des alertes.'
            ]
          }
        ]
      },
      {
        label: 'N°4 - Veille organisationnelle, juridique, économique et sectorielle',
        competences: [
          {
            label: 'Information des clients sur le système financier français, européen et international',
            taches: [
              'Prise en compte de l\'organisation et du rôle du système financier dans l\'exercice des missions.',
              'Prise en compte de la réglementation prudentielle.',
              'Contribution à la politique de prévention des risques.'
            ]
          },
          {
            label: 'Suivi de l\'évolution du marché bancaire, de l\'assurance et de la finance',
            taches: [
              'Distinction des différentes catégories d\'établissements.',
              'Prise en compte des évolutions technologiques du secteur.',
              'Réalisation d\'un diagnostic de l\'environnement.',
              'Justification des choix stratégiques des acteurs du marché.',
              'Respect du protocole de cybersécurité.',
              'Prise en compte de la politique sociétale et environnementale de l\'établissement.'
            ]
          },
          {
            label: 'Intégration d\'un collectif de travail',
            taches: [
              'Distinction des différents statuts juridiques',
              'Identification de la place des acteurs de l\'établissement dans le processus de décision.',
              'Analyse des indicateurs financiers et non financiers de l\'établissement.'
            ]
          },
          {
            label: 'Exercice de l\'activité dans le cadre juridique propre au système financier',
            taches: [
              'Prise de décisions conformes à la déontologie et à la prévention des risques.',
              'Respect des obligations liées au contrat et à la déontologie.',
              'Analyse de la situation juridique du client.',
              'Analyse des conditions de validité, des clauses et des effets juridiques d\'un contrat.'
            ]
          },
          {
            label: 'Réalisation d\'une veille économique et sociale',
            taches: [
              'Analyse des effets de l\'évolution des indicateurs économiques et sociaux sur l\'activité du secteur financier.',
              'Analyse des effets des décisions prises par l\'État et les institutions sur l\'activité du secteur financier.'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BTS COMMUNICATION
  // ─────────────────────────────────────────────
  'BTS_COM': {
    titre: 'BTS Communication',
    rncp: '',
    secteurs: [
      { label: 'Entreprise, association ou organisation publique : administration centrale ou déconcentrée, collectivité locale, établissement public ayant un service communication' },
      { label: 'Entreprise, association ou organisation publique : administration centrale ou déconcentrée, collectivité locale, établissement public, dans les petites structures il peut être seul à exercer cette fonction.' },
      { label: 'Régie de communication, une agence de communication, de publicité ou d\'évènementiel.' },
      { label: 'Autres : précisez…', libre: true }
    ],
    blocs: [
      {
        label: 'N°1 – Contribution à l\'élaboration et au pilotage de la stratégie de communication',
        competences: [
          {
            label: 'Prise en charge de la demande de l\'annonceur',
            taches: [
              'Identification et formulation du besoin de l\'annonceur',
              'Analyse des caractéristiques de l\'annonceur (identité, valeurs,…)',
              'Analyse de l\'environnement au moyen d\'une veille appropriée',
              'Élaboration d\'un diagnostic structuré',
              'Formulation du problème de communication de l\'annonceur'
            ]
          },
          {
            label: 'Élaboration du plan de communication dans un environnement digitalisé',
            taches: [
              'Détermination du positionnement de communication',
              'Identification des objectifs et des cibles de communication de l\'annonceur',
              'Détermination des moyens de communication appropriés',
              'Formalisation du plan de communication'
            ]
          },
          {
            label: 'Pilotage du plan de communication',
            taches: [
              'Recensement des ressources disponibles',
              'Détermination du besoin d\'externalisation',
              'Identification des acteurs à associer',
              'Allocation des ressources à mobiliser',
              'Définition des indicateurs de performance',
              'Analyse des résultats et ajustements'
            ]
          }
        ]
      },
      {
        label: 'N°2 - Conception et mise en œuvre de solutions de communication',
        competences: [
          {
            label: 'Veille créative et technologique au service de la demande',
            taches: [
              'Mise en œuvre d\'une démarche de veille créative et technologique',
              'Prise en compte du plan de communication et du cahier des charges',
              'Exploitation des résultats de la veille pour répondre à la demande, en procédant à des recherches complémentaires'
            ]
          },
          {
            label: 'Création de contenus et de solutions de communication',
            taches: [
              'Réalisation du travail conceptuel préparatoire',
              'Mise en œuvre des techniques rédactionnelles adaptées aux supports, aux objectifs et aux cibles',
              'Mobilisation d\'outils et mise en œuvre de techniques de conception dans un environnement digital'
            ]
          },
          {
            label: 'Production et diffusion des solutions de communication',
            taches: [
              'Organisation, planification et coordination des activités, en lien avec les différents intervenants',
              'Production de solution de communication',
              'Diffusion et gestion de contenus numériques sur les réseaux sociaux et sur internet'
            ]
          },
          {
            label: 'Achats et relations avec des prestataires',
            taches: [
              'Rédaction de la demande technique',
              'Recherche, évaluation et sélection de prestataires',
              'Négociation avec les prestataires',
              'Achats de prestations'
            ]
          },
          {
            label: 'Contrôle et évaluation des solutions de communication',
            taches: [
              'Contrôle de la qualité et de la conformité de la production',
              'Evaluation de l\'efficacité des solutions mises en oeuvre',
              'Ajustement des contenus et solutions de communication'
            ]
          }
        ]
      },
      {
        label: 'N°3 – Accompagnement du développement de solutions média et digitales innovantes',
        competences: [
          {
            label: 'Collecte, analyse et diffusion d\'informations sur les évolutions de l\'écosystème média et digital',
            taches: [
              'Exploitation d\'études',
              'Veille sur les acteurs et les innovations dans le domaine des médias et du digital',
              'Identification des évolutions culturelles, sociétales et règlementaires',
              'Élaboration et diffusion de synthèse opérationnelles'
            ]
          },
          {
            label: 'Construction et positionnement d\'une offre média et digitale innovante',
            taches: [
              'Analyse des offres existantes, des attentes du marché et de l\'univers concurrentiel',
              'Intégration des solutions innovantes',
              'Adaptation et construction de l\'offre',
              'Positionnement de l\'offre'
            ]
          },
          {
            label: 'Accompagnement des équipes commerciales dans la valorisation de solutions média et digitales innovantes',
            taches: [
              'Analyse du portefeuille annonceurs et développement commercial',
              'Élaboration d\'argumentaires',
              'Conception et réalisation des supports de communication d\'aide à la vente'
            ]
          },
          {
            label: 'Conseil aux annonceurs dans la mise en œuvre de solutions média et digitales innovantes',
            taches: [
              'Analyse d\'une problématique média ou digitale de l\'annonceur',
              'Propositions de solutions innovantes stratégiques, créatives ou techniques dans un environnement média et digital',
              'Suivi de la relation client et accompagnement au changement',
              'Évaluation des performances'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BTS GPME
  // ─────────────────────────────────────────────
  'BTS_GPME': {
    titre: 'BTS Gestion de la PME',
    rncp: '',
    secteurs: [
      { label: 'PME de 5 à 50 salariés, polyvalence dans le poste requise' },
      { label: 'Entreprise de plus de 50 salariés structurées en centres de responsabilité ou de profit (agences, filiales de petite taille, succursales)' },
      { label: 'Des associations, dont le fonctionnement et les contingences seraient proches de ceux de la PME' },
      { label: 'Éventuellement, des organismes publics sous les mêmes conditions', last: true }
    ],
    blocs: [
      {
        label: 'N°1 – Gérer la relation avec les clients et les fournisseurs de la PME',
        competences: [
          {
            label: 'Recherche de clientèle et contact',
            taches: [
              'Organisation de la prospection et prospection clientèle',
              'Détection, analyse et suivi des appels d\'offres',
              'Communication avec les acteurs internes, avec les prospects, les clients et les pouvoir adjudicateurs'
            ]
          },
          {
            label: 'Administration des ventes de la PME',
            taches: [
              'Préparation de propositions commerciales',
              'Préparation de contrats commerciaux (commandes, contrats de maintenance, garanties complémentaires, contrats de sous-traitance, etc…)'
            ]
          },
          {
            label: 'Maintien et développement de la relation avec les clients de la PME',
            taches: [
              'Accueil, information et conseils',
              'Traitement et suivi des réclamations',
              'Communication pour développer la relation client'
            ]
          },
          {
            label: 'Recherche et choix des fournisseurs de la PME',
            taches: [
              'Étude des projets d\'achats et des investissements',
              'Recherche des fournisseurs',
              'Comparaison des offres, sélection et qualification des fournisseurs',
              'Mise à jour du système d\'information fournisseurs',
              'Communication avec des acteurs internes et avec les fournisseurs'
            ]
          },
          {
            label: 'Suivi et contrôle des opérations d\'achats et d\'investissement de la PME',
            taches: [
              'Préparation de la négociation des contrats',
              'Passation et suivi des commandes',
              'Acquisition et suivi des immobilisations',
              'Contrôle des achats et des règlements',
              'Évaluation des fournisseurs',
              'Communication écrite et orale avec des acteurs internes, les fournisseurs et les partenaires financiers'
            ]
          },
          {
            label: 'Suivi comptable des opérations avec les clients et les fournisseurs de la PME',
            taches: [
              'Contrôle de l\'enregistrement des opérations avec les clients et les fournisseurs de la PME',
              'Suivi des relations avec les banques',
              'Suivi de la trésorerie des comptes de tiers, des encaissements et des décaissements',
              'Préparation et contrôle de la déclaration de TVA',
              'Évaluation et suivi des risques liés aux échanges internationaux'
            ]
          }
        ]
      },
      {
        label: 'N°2 – Participer à la gestion des risques de la PME',
        competences: [
          {
            label: 'Conduite d\'une veille',
            taches: [
              'Mise en place d\'une veille',
              'Qualification de l\'information',
              'Mise en évidence des risques éventuels',
              'Alerte des responsables de la PME',
              'Synthèse et diffusion de l\'information',
              'Mise à jour des pratiques et des procédures'
            ]
          },
          {
            label: 'Participation à la mise en place d\'un travail en mode projet au sein de la PME',
            taches: [
              'Identification du besoin en termes d\'organisation Conduite d\'une analyse fonctionnelle interne et externe Élaboration du cahier des charges et planification des tâches à réaliser',
              'Organisation et conduite de réunions avec les acteurs du projet',
              'Suivi du projet'
            ]
          },
          {
            label: 'Mise en œuvre d\'une démarche de gestion des risques de la PME',
            taches: [
              'Identification des risques Conduite d\'une veille relative à la règlementation et à la certification Identification des obligations légales Analyse, évaluation des risques et alertes éventuelles des dirigeants de la PME Proposition d\'actions correctrices Mise en œuvre, diffusion et suivi des actions validées'
            ]
          },
          {
            label: 'Participation à la gestion des risques financiers de la PME',
            taches: [
              'Identification des échéances à court et moyen terme',
              'Suivi des flux de trésorerie Évaluation des risques financiers à court et moyen terme',
              'Alerte des responsables de la PME',
              'Proposition de solutions Mise en œuvre et suivi des actions validées'
            ]
          },
          {
            label: 'Participation à la gestion des risques non financiers de la PME',
            taches: [
              'Gestion des risques liés à la santé, à l\'hygiène et à la sécurité au travail',
              'Gestion des risques liés à la protection des personnes, des biens et des droits Gestion des risques environnementaux Gestion des risques informatiques et des risques liés aux données'
            ]
          },
          {
            label: 'Mise en place d\'une démarche qualité au sein de la PME',
            taches: [
              'Analyse de l\'existant',
              'Formalisation, diffusion, contrôle et amélioration des procédures Participation à la mise en place de procédures de gestion des connaissances Veille sur la certification Mise en œuvre et suivi de la démarche de certification'
            ]
          }
        ]
      },
      {
        label: 'N°3 – Gérer le personnel et contribuer à la gestion des ressources humaines de la PME',
        competences: [
          {
            label: 'Gestion administrative du personnel de la PME',
            taches: [
              'Suivi des formalités et procédures d\'embauche et de départ',
              'Organisation et suivi des dossiers du personnel Gestion du temps de travail, des absences et des congés',
              'Préparation et contrôle des éléments de la paie',
              'Réalisation des déclarations sociales Mise en place des modalités de représentation du personnel et de négociation au sein de l\'entreprise',
              'Communication avec la direction, les salariés, les instances représentatives du personnel de la PME, les spécialistes de gestion du personnel et l\'administration'
            ]
          },
          {
            label: 'Participation à la gestion des ressources humaines de la PME',
            taches: [
              'Aide au recrutement Intégration des nouveaux membres Préparation et suivi des actions de formation Préparation et mise en place de l\'évaluation des personnels Préparation et suivi de tableaux de bord sociaux Communication avec la direction et les salariés de la PME, les organismes de formation, les organismes paritaires collecteurs, les prestataires externes du recrutement'
            ]
          },
          {
            label: 'Contribution à la cohésion interne de la PME',
            taches: [
              'Contribution à la qualité des relations interpersonnelles',
              'Contribution à la mise en place d\'un travail collaboratif'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BTS MCO
  // ─────────────────────────────────────────────
  'BTS_MCO': {
    titre: 'BTS Management Commercial Opérationnel',
    rncp: '',
    secteurs: [
      { label: 'Entreprises de distribution des secteurs alimentaires ou spécialisés (s\'adressent aussi bien à une clientèle de particuliers que de professionnels)' },
      { label: 'Unités commerciales d\'entreprises de production' },
      { label: 'Entreprises de commerce électronique' },
      { label: 'Entreprises de prestation de services' },
      { label: 'Associations à but lucratif dont l\'objet repose sur la distribution de produits et/ou de services' },
      { label: 'Autres : précisez', libre: true }
    ],
    blocs: [
      {
        label: 'N°1 - Développer la relation client et assurer la vente conseil',
        competences: [
          {
            label: 'Assurer la veille informationnelle',
            taches: [
              'Rechercher et mettre à jour l\'information Mobiliser les ressources numériques Sélectionner / Hiérarchiser l\'information Analyser l\'information Exploiter l\'information pour la prise de décision'
            ]
          },
          {
            label: 'Réaliser et exploiter des études commerciales',
            taches: [
              'Construire une méthodologie Recueillir les données Exploiter les résultats'
            ]
          },
          {
            label: 'Vendre dans un contexte omnicanal',
            taches: [
              'Préparer la vente Accueillir le client / Conseiller Argumenter / Conclure la vente'
            ]
          },
          {
            label: 'Entretenir la relation client',
            taches: [
              'Suivre les évolutions des attentes du client Évaluer l\'expérience client Accompagner le client. Fidéliser la clientèle Accroitre la « valeur client »'
            ]
          }
        ]
      },
      {
        label: 'N°2 - Animer et dynamiser l\'offre commerciale',
        competences: [
          {
            label: 'Élaborer et adapter en continu l\'offre de produits et de services',
            taches: [
              'Analyser la demande Analyser l\'offre existante Construire et/ou adapter l\'offre de l\'unité commerciale'
            ]
          },
          {
            label: 'Organiser l\'espace commercial',
            taches: [
              'Agencer l\'espace commercial Garantir la disponibilité de l\'offre Maintenir un espace commercial opérationnel et attractif Respecter les préconisations de l\'enseigne, la réglementation, les règles d\'hygiène et de sécurité'
            ]
          },
          {
            label: 'Développer les performances de l\'espace commercial',
            taches: [
              'Mettre en valeur les produits Optimiser l\'implantation de l\'offre Proposer et organiser des animations commerciales Proposer et organiser des opérations promotionnelles'
            ]
          },
          {
            label: 'Concevoir et mettre en place la communication commerciale',
            taches: [
              'Concevoir et mettre en œuvre la communication sur le lieu de vente Concevoir et mettre en œuvre la communication commerciale externe Exploiter les réseaux sociaux, les applications et tout autre outil numérique au service de la communication commerciale'
            ]
          },
          {
            label: 'Évaluer l\'action commerciale',
            taches: [
              'Analyser l\'impact des actions mises en œuvre Proposer des axes d\'amélioration ou de développement'
            ]
          }
        ]
      },
      {
        label: 'N°3 - Assurer la gestion opérationnelle',
        competences: [
          {
            label: 'Gérer les opérations courantes',
            taches: [
              'Garantir les approvisionnements Gérer les stocks Suivre les règlements et la trésorerie Fixer les prix. Gérer les risques'
            ]
          },
          {
            label: 'Prévoir et budgétiser l\'activité',
            taches: [
              'Fixer des objectifs commerciaux Élaborer des budgets Participer aux décisions d\'investissement'
            ]
          },
          {
            label: 'Analyser les performances',
            taches: [
              'Concevoir et analyser un tableau de bord Analyser la rentabilité de l\'activité Exploiter et enrichir le système d\'information commercial Proposer des mesures correctrices',
              'Rendre compte'
            ]
          }
        ]
      },
      {
        label: 'N°4 - Manager l\'équipe commerciale',
        competences: [
          {
            label: 'Organiser le travail de l\'équipe commerciale',
            taches: [
              'Recenser les ressources disponibles et les besoins Répartir les tâches Réaliser les plannings Respecter la législation.'
            ]
          },
          {
            label: 'Recruter des collaborateurs',
            taches: [
              'Évaluer les besoins en compétences et en personnel Participer au recrutement Conduire un entretien de recrutement Intégrer les nouveaux arrivants'
            ]
          },
          {
            label: 'Animer l\'équipe commerciale',
            taches: [
              'Transmettre et expliquer les informations Conduire une réunion Conduire un entretien Favoriser l\'implication des collaborateurs Accompagner et motiver l\'équipe Repérer les besoins en formation Participer à la formation des collaborateurs Gérer les conflits et les situations de crise Prévenir et gérer les risques psycho-sociaux'
            ]
          },
          {
            label: 'Évaluer les performances de l\'équipe commerciale',
            taches: [
              'Concevoir et analyser un tableau de bord de suivi d\'équipe',
              'Mesurer et analyser les performances individuelles et collectives',
              'Proposer des actions d\'accompagnement'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // BTS NDRC
  // ─────────────────────────────────────────────
  'BTS_NDRC': {
    titre: 'BTS Négociation et Digitalisation de la Relation Client',
    rncp: '',
    secteurs: [
      { label: 'Entreprise artisanale …proposant des biens ou des prestations de services, quelle que soit sa taille, dès lors qu\'elle met en œuvre une démarche commerciale' },
      { label: 'Entreprise commerciale' },
      { label: 'Entreprise industrielle' },
      { label: 'Association' },
      { label: 'Organisation publique', last: true }
    ],
    blocs: [
      {
        label: 'N°1 - Relation client et négociation-vente',
        competences: [
          {
            label: 'Cibler et prospecter la clientèle',
            taches: [
              'Analyser un portefeuille clients',
              'Identifier des cibles de clientèle',
              'Mettre en œuvre et évaluer une démarche de prospection',
              'Développer des réseaux professionnels'
            ]
          },
          {
            label: 'Négocier et accompagner la relation client',
            taches: [
              'Négocier et vendre une solution adaptée au client',
              'Créer et maintenir une relation durable'
            ]
          },
          {
            label: 'Organiser et animer un événement commercial',
            taches: [
              'Organiser un événement commercial',
              'Animer un événement commercial',
              'Exploiter un événement commercial'
            ]
          },
          {
            label: 'Exploiter et mutualiser l\'information commerciale',
            taches: [
              'Remonter, valoriser et partager l\'information commerciale',
              'Collaborer à l\'interne en vue de développer l\'expertise commerciale'
            ]
          }
        ]
      },
      {
        label: 'N°2 - Relation client à distance et digitalisation',
        competences: [
          {
            label: 'Maîtriser la relation client omnicanale',
            taches: [
              'Créer et entretenir la relation client à distance',
              'Apprécier la performance commerciale à partir d\'indicateurs d\'activité',
              'Encadrer et animer une équipe de téléacteurs'
            ]
          },
          {
            label: 'Animer la relation client digitale',
            taches: [
              'Produire, publier et assurer la visibilité des contenus digitaux',
              'Impulser, entretenir et réguler une dynamique e-relationnelle'
            ]
          },
          {
            label: 'Développer la relation client en e-commerce',
            taches: [
              'Dynamiser un site de e-commerce',
              'Faciliter et sécuriser la relation commerciale',
              'Diagnostiquer l\'activité de e-commerce'
            ]
          }
        ]
      },
      {
        label: 'N°3 - Relation client et animation de réseaux',
        competences: [
          {
            label: 'Implanter et promouvoir l\'offre chez des distributeurs',
            taches: [
              'Valoriser l\'offre sur le lieu de vente',
              'Développer la présence dans le réseau de distributeurs'
            ]
          },
          {
            label: 'Développer et piloter un réseau de partenaires',
            taches: [
              'Participer au développement d\'un réseau de partenaires',
              'Mobiliser un réseau de partenaires et évaluer les performances'
            ]
          },
          {
            label: 'Créer et animer un réseau de vente directe',
            taches: [
              'Prospecter, organiser des rencontres et vendre en réunion',
              'Recruter et former des vendeurs à domicile indépendants',
              'Impulser une dynamique de réseau'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CAP AEPE
  // ─────────────────────────────────────────────
  'CAP_AEPE': {
    titre: 'CAP Accompagnant Éducatif Petite Enfance',
    rncp: '',
    secteurs: [
      { label: 'École maternelle ou accueil collectif de mineurs' },
      { label: 'Établissement ou services d\'accueil collectifs des enfants de moins de 6 ans' },
      { label: 'Garde d\'enfant à domicile / Assistant maternel' },
      { label: 'Autre : précisez…', libre: true }
    ],
    blocs: [
      {
        label: 'Accompagner l\'enfant dans ses découvertes et ses apprentissages',
        competences: [
          {
            label: 'Mise en œuvre des conditions favorables au jeu libre et à l\'expérimentation',
            taches: [
              'Observation des acquis et des aptitudes de l\'enfant',
              'Identification des désirs de l\'enfant',
              'Adaptation et aménagement d\'un environnement favorable au jeu libre et à l\'expérimentation'
            ]
          },
          {
            label: 'Mise en œuvre d\'activités d\'accueil',
            taches: [
              'Observation des acquis et des aptitudes de l\'enfant',
              'Recueil des souhaits de l\'enfant',
              'Identification des ressources mobilisables et des contraintes',
              'Sélection d\'activités ludiques, à l\'intérieur ou à l\'extérieur du milieu d\'accueil',
              'Adaptation et installation de l\'activité',
              'Animation de l\'activité',
              'Remise en place des espaces et rangement du matériel'
            ]
          }
        ]
      },
      {
        label: 'Prendre soin et accompagner l\'enfant dans les activités de la vie quotidienne',
        competences: [
          {
            label: 'Réalisation des soins du quotidien et accompagnement de l\'enfant dans les apprentissages',
            taches: [
              'Écoute et observation des expressions corporelles de l\'enfant',
              'Préparation, installation de l\'espace des soins du quotidien de l\'enfant et remise en état',
              'Réalisation des soins pour : L\'hygiène et le confort / L\'alimentation / Le repos',
              'Accompagnement de l\'apprentissage des gestes du quotidien',
              'Repérage des signes d\'altération de la santé et du comportement : maladie, malaise, maltraitance'
            ]
          },
          {
            label: 'Application des protocoles liés à la santé de l\'enfant',
            taches: [
              'Participation à l\'application du protocole d\'accueil individualisé (PAI) : Prise de connaissance des adaptations à apporter dans la prise en charge de l\'enfant / Vérification de l\'adéquation des conditions d\'accueil et des mesures mentionnées dans le PAI',
              'Participation à l\'application des protocoles d\'urgence : Réalisation des gestes de premiers secours / Transmission aux personnes / services compétents'
            ]
          }
        ]
      },
      {
        label: 'Inscrire son action dans le réseau des relations enfants-parents-professionnels',
        competences: [
          {
            label: 'Accueil de l\'enfant et de sa famille',
            taches: [
              'Participation à l\'arrivée et au départ des enfants',
              'Échange d\'informations avec la famille',
              'Transmission d\'informations par oral et/ou écrit pour assurer la continuité de la prise en charge de l\'enfant'
            ]
          },
          {
            label: 'Partage d\'informations avec l\'équipe et les autres professionnels',
            taches: [
              'Identification de sa fonction dans un réseau, un établissement, un service, une équipe',
              'Identification et sollicitation des professionnels ressources',
              'Partage d\'informations issues des observations',
              'Transmission d\'informations par oral et par écrit pour assurer la continuité de la prise en charge de l\'enfant',
              'Participation à une réunion de travail',
              'Participation à une analyse de pratique',
              'Contribution à la professionnalisation d\'un stagiaire CAP AEPE'
            ]
          }
        ]
      },
      {
        label: 'Exercer son activité en école maternelle',
        competences: [
          {
            label: 'Assistante pédagogique aux personnels enseignant',
            taches: [
              'Installation des ateliers, remise en état des lieux après les activités pédagogiques',
              'Aide à la réalisation de l\'activité d\'un atelier',
              'Préparation et installation matérielle des supports pédagogiques',
              'Animation et surveillance d\'un atelier sous la responsabilité de l\'enseignant en sa présence',
              'Participation à l\'instauration des habitudes et règles de vie de classe',
              'Participation à l\'accompagnement des enfants dans leurs sorties sur le temps scolaire',
              'Participation à la surveillance de la récréation sous la responsabilité de l\'enseignant en sa présence'
            ]
          },
          {
            label: 'Activités de remise en état des matériels et des locaux',
            taches: [
              'Participations aux travaux collectifs de l\'école : rangement de la bibliothèque, préparation de fêtes, gestion des réserves de matériel…',
              'Nettoyage quotidien des locaux, des sanitaires',
              'Participation à l\'entretien des locaux pendant les vacances scolaires'
            ]
          }
        ]
      },
      {
        label: 'Exercer son activité en AEJE et en ACM',
        competences: [
          {
            label: 'Participation à la mise en œuvre du projet d\'établissement et du projet pédagogique',
            taches: [
              'Prise de connaissance du projet',
              'Participation aux échanges lors des réunions de travail',
              'Participation au suivi du projet d\'accueil',
              'Proposition d\'adaptations'
            ]
          }
        ]
      },
      {
        label: 'Exercer son activité à son domicile, celui des parents ou en maison d\'assistants maternels',
        competences: [
          {
            label: 'Négociation du cadre de l\'accueil : organisationnel et convention',
            taches: [
              'Identification des attentes des parents et échange sur les habitudes de l\'enfant',
              'Présentation des ressources mobilisables : le logement, son équipement, les lieux ressources,…',
              'Présentation des activités envisagées',
              'Rédaction du projet d\'accueil',
              'Renseignement du contrat de travail avec les parents employeurs',
              'Élaboration d\'un planning d\'accueil mensuel prévisionnel et réel'
            ]
          },
          {
            label: 'Sécurisation des espaces de vie de l\'enfant',
            taches: [
              'Identification des dangers',
              'Repérage des risques',
              'Mise en place des moyens de protection et de sécurité'
            ]
          },
          {
            label: 'Entretien du logement et des espaces réservés à l\'enfant',
            taches: [
              'Entretien du logement, des équipements et des matériels'
            ]
          },
          {
            label: 'Élaboration des repas',
            taches: [
              'Élaboration de menus équilibrés adaptés aux enfants',
              'Approvisionnement, entreposage des denrées et des plats préparés',
              'Productions culinaires'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CAP COIFFURE
  // ─────────────────────────────────────────────
  'CAP_COIF': {
    titre: 'CAP Métiers de la Coiffure',
    rncp: '',
    secteurs: [
      { label: 'Salons de coiffure, salons itinérants, entreprises de coiffure à domicile, entreprises liées au secteur de la coiffure' },
      { label: 'Barbershop' },
      { label: 'Spectacle et mode' },
      { label: 'Établissements et institutions diverses avec des activités de coiffure intégrées (centre d\'esthétique, de thalassothérapie, établissements de tourisme et de loisirs, de soins, de cure, de convalescence, de réadaptation, d\'hébergement pour personnes âgées).', last: true }
    ],
    blocs: [
      {
        label: 'Réalisation de prestations de coiffure',
        competences: [
          {
            label: 'Tâches communes',
            taches: [
              'Préparation, gestion et remise en état des postes de travail',
              'Entretien des matériels (outils, appareils), du linge, des équipements et des espaces de travail',
              'Mise en œuvre de la démarche respectueuse de l\'environnement retenue dans l\'entreprise',
              'Auto-évaluation de la qualité de la réalisation (contrôle et appréciation pertinente de son travail)'
            ]
          },
          {
            label: 'Élaborer un diagnostique',
            taches: [
              'Réalisation d\'un diagnostic : identification des caractéristiques du cheveu et du cuir chevelu Formalisation du diagnostic : orale ou écrite'
            ]
          },
          {
            label: 'Mise en œuvre d\'une technique de d\'hygiène et de soin capillaires',
            taches: [
              'Réaliser un shampooing Réaliser un soin - Choix du produits + dosage - Gestuelle adaptée au produit choisi - Temps de réalisation respecté - Rinçage suffisant & efficace - Démêlage - Chevelure propre - Protocole adapté au regard du diagnostic posé'
            ]
          },
          {
            label: 'Réaliser des techniques de base de coiffure : Réaliser une coupe femme',
            taches: [
              'Techniques sur cheveux humides ou secs en prenant en compte la nature, les implantations, la forme du crâne et la longueur des cheveux - Utilisation maitrisée des différents outils de coupe - Coupe conforme à la demande : forme, longueurs, fondu de nuque et tour d\'oreille, effets de matières - Progression logique pour la technique de coupe retenue - Remédiation aux éventuels écarts entre le résultat obtenu et le résultat attendu'
            ]
          },
          {
            label: 'Réaliser des techniques de base de coiffure : Réaliser une coupe homme',
            taches: [
              'Techniques sur cheveux humides ou secs en prenant en compte la nature, les implantations, la forme du crâne et la longueur des cheveux - Utilisation maitrisée des différents outils de coupe - Coupe conforme à la demande : forme, longueurs, fondu de nuque et tour d\'oreille, effets de matières - Progression logique pour la technique de coupe retenue - Remédiation aux éventuels écarts entre le résultat obtenu et le résultat attendu'
            ]
          },
          {
            label: 'Réalisation des techniques de base de coiffure : Réaliser une coloration',
            taches: [
              'Application précise et soignée des différents types de produits colorants, éclaircissants - Protocole respecté selon la notice (dosage, application, temps de pause, rinçage,...) - Utilisation rationnelle des produits - Choix et utilisation judicieux des matériels (outils, appareils) en fonction des techniques mises en œuvre et du résultat attendu - Résultat conforme à la demande Contrôles effectués lors de la réalisation et corrections efficaces Attitude adaptée en présence d\'une réaction au produit de modification de la couleur'
            ]
          },
          {
            label: 'Réalisation des techniques de base de coiffure : Réaliser un effet de couleur',
            taches: [
              'Application précise et soignée des différents types de produits colorants, éclaircissants - Protocole respecté selon la notice (dosage, application, temps de pause, rinçage,...) - Utilisation rationnelle des produits - Choix et utilisation judicieux des matériels (outils, appareils) en fonction des techniques mises en œuvre et du résultat attendu - Résultat conforme à la demande - Contrôles effectués lors de la réalisation et corrections efficaces - Attitude adaptée en présence d\'une réaction au produit de modification de la couleur'
            ]
          },
          {
            label: 'Réalisation des techniques de base de coiffure : Réaliser une mise en forme temporaire (aux doigts, brushing, mise en plis sur rouleaux, aux fers)',
            taches: [
              'Choix de la technique adapté au résultat attendu',
              'Choix pertinent des produits et des matériels',
              'Utilisation rationnelle des produits de construction',
              'Techniques de mise en forme maitrisées, sur cheveux humides ou secs, prenant en compte la nature, les implantations et la longueur des cheveux',
              'Résultat conforme aux attentes',
              'Réactions adaptées aux situations inattendues'
            ]
          },
          {
            label: 'Réalisation des techniques de base de coiffure : Réaliser une mise en forme durable par enroulage (méthode indirecte)',
            taches: [
              'Choix du montage adapté au résultat attendu - Choix pertinent des matériels - Montage et enroulage maitrisés - Application précise et soignée des produits - Protocole adapté au regard du diagnostic posé et des notices de produits - Résultat conforme à la demande - Contrôles effectués lors de la réalisation et corrections efficaces - Attitude adaptée en présence d\'une réaction au produit'
            ]
          },
          {
            label: 'Réalisation des techniques de base de coiffure : Réaliser un coiffage (orienter les mèches, lisser, crêper, tresser)',
            taches: [
              'Choix judicieux de la ou des techniques - Techniques de coiffage maitrisées - Choix et utilisation des produits de finition et des outils, pertinents - Volumes équilibrés - Finitions soignées - Coiffage adapté au résultat attendu - Contrôle effectués lors de la réalisation et correction efficaces'
            ]
          },
          {
            label: 'Environnement professionnel',
            taches: [
              'Espaces d\'un salon de coiffure (différents espaces, principaux équipements, mise en relation des principaux matériaux et revêtements avec leur entretien) - Confort des lieux de travail (confort thermique, sonore, lumineux, olfactif) + Indiquer l\'impact du confort sur la clientèle et sur le professionnel + Proposer pour une situation donnée des améliorations - Gestes professionnels en faveur du développement durable (identification des polluants, déchets,...) - Gestes de secours (comportements face à une situation d\'urgence en salon)'
            ]
          }
        ]
      },
      {
        label: 'Établir une relation avec la clientèle et participer à l\'activité de l\'entreprise',
        competences: [
          {
            label: 'Accueillir la clientèle et gérer la prise de rendez-vous – Créer la relation client',
            taches: [
              'Accueil et prise de contact',
              'Attitude professionnelle adaptée (langage, posture, savoir-être, tenue vestimentaire)',
              'Communication adaptée et efficace'
            ]
          },
          {
            label: 'Accueillir la clientèle et gérer la prise de rendez-vous – Recueillir les attentes du (de la) client(e)',
            taches: [
              'Questionnement pertinent',
              'Écoute active',
              'Reformulation adaptée et efficace'
            ]
          },
          {
            label: 'Accueillir la clientèle et gérer la prise de rendez-vous – Prendre un RDV',
            taches: [
              'Prise en compte correcte de la demande (identifier les données à renseigner sur le planning)',
              'Planning renseigné en tenant compte des différents paramètres (temps alloués à chaque prestation)',
              'Utilisation des outils numériques et des logiciels professionnels maîtrisés (identifier les différentes prises de rdv : physique, téléphonique, en ligne)'
            ]
          },
          {
            label: 'Accueillir la clientèle et gérer la prise de rendez-vous – Actualiser le fichier clientèle',
            taches: [
              'Fiche client renseignée avec exactitude et précision',
              'Utilisation des outils numériques et des logiciels professionnels maitrisés'
            ]
          },
          {
            label: 'Conseiller et vendre des services, des matériels, des produits capillaires – Formuler un conseil',
            taches: [
              'Sélection de services, matériels, produits en réponse à la demande - Présentation et argumentaire adaptés'
            ]
          },
          {
            label: 'Conseiller et vendre des services, des matériels, des produits capillaires – Réaliser la vente',
            taches: [
              'Repérage des freins à l\'achat - Réponse argumentée aux objections - Annonce argumentée du prix - Acte de vente conclu - Acte de fidélisation effectué - Prise de congé'
            ]
          },
          {
            label: 'Conseiller et vendre des services, des matériels, des produits capillaires – Réaliser l\'encaissement',
            taches: [
              'Facture complète et exacte - Encaissement exact - Utilisation des outils numériques et des logiciels professionnels maitrisée'
            ]
          },
          {
            label: 'Contribuer à l\'activité de l\'entreprise – Exercer son activité au sein de l\'entreprise',
            taches: [
              'Identification de sa fonction dans l\'entreprise et dans une équipe de travail - Intégration dans une équipe par une communication et une posture adaptée - Recensement des sources professionnelles diversifiées (salons professionnels, site internet, réseaux sociaux, presse,...)'
            ]
          },
          {
            label: 'Contribuer à l\'activité de l\'entreprise – Valoriser des produits et matériels dans différents espaces',
            taches: [
              'Présentation harmonieuse, attractive, conforme à l\'image de l\'entreprise, de la marque, au thème - Règlementation en matière d\'étiquetage respectée - Supports publicitaires exploitées pour promouvoir un produit, une prestation'
            ]
          },
          {
            label: 'Contribuer à l\'activité de l\'entreprise – Participer à la gestion des stocks',
            taches: [
              'Identification pertinente des besoins - Signalement des besoins effectués - Réception et stockage maîtrisés - Utilisation pertinente de logiciels de gestion de stock'
            ]
          }
        ]
      },
      {
        label: 'Savoirs associés aux compétences',
        competences: [
          {
            label: 'Comportement professionnel',
            taches: [
              'présentation physique - tenue professionnelle - langage verbal et non verbal - confort de la vente'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // MASTERE MANAGER D'AFFAIRES
  // ─────────────────────────────────────────────
  'MST_MA': {
    titre: 'Mastère Manager d\'Affaires',
    rncp: '',
    secteurs: [
      { label: 'Tous les secteurs ayant besoin de développer la vente de produits et services', last: true }
    ],
    blocs: [
      {
        label: 'Définir et mettre en oeuvre une stratégie commerciale durable en fonction des objectifs de rentabilité économiques fixés par le comité de direction',
        competences: [
          {
            label: 'Réaliser une étude du marché en mettant en place une démarche de veille pour anticiper les évolutions du secteur et du marché afin de détecter les facteurs clés de succès (FCS) et les opportunités de croissance pour l\'entreprise.',
            taches: [
              'Analyser un marché en menant une veille stratégique efficace pour identifier les opportunités et risques.'
            ]
          },
          {
            label: 'Déterminer les avantages concurrentiels à valoriser, en construisant une analyse interne de l\'entreprise et une carte perceptuelle (ou mapping concurrentiel) des concurrents directs et indirects pour proposer des orientations commerciales positionnant l\'entreprise dans les tendances actuelles du marché',
            taches: [
              'Évaluer la position concurrentielle de l\'entreprise et identifier ses avantages stratégiques.'
            ]
          },
          {
            label: 'Définir le public-cible inclusif en utilisant les techniques de l\'Ideal Customer Profile (ICP) pour garantir que la future offre commerciale trouvera sa place sur le marché en obtenant un fort potentiel de rentabilité',
            taches: [
              'Définir un public-cible pertinent en s\'appuyant sur des méthodes de segmentation et d\'analyse client.'
            ]
          },
          {
            label: 'Fixer des objectifs quantitatifs et qualitatifs durables en tenant compte des forces et faiblesses de l\'entreprise et des opportunités et menaces du marché pour élaborer, en collaboration avec le service marketing, la stratégie commerciale.',
            taches: [
              'Construire une stratégie commerciale alignée avec les tendances du marché et les objectifs de l\'entreprise.'
            ]
          },
          {
            label: 'Décliner la stratégie commerciale en un plan d\'action commercial (PAC) omnicanal inclusif, traduisant en résultats concrets les orientations à moyen et long terme de la stratégie pour construire, en accord avec le service marketing et communication, avec une feuille de route, respectueuse de la RSE, de la législation et des contraintes de l\'entreprise.',
            taches: [
              'Traduire cette stratégie en un plan d\'action commercial opérationnel et omnicanal.'
            ]
          },
          {
            label: 'Élaborer le budget du plan d\'action commercial en calculant, à l\'aide d\'un tableur, l\'investissement financier marketing et commercial annuel préconisé dans le plan d\'action pour calculer les ratios de rentabilité (seuil et point mort) afin de réaliser les arbitrages jusqu\'à ce que l\'équilibre entre la satisfaction des objectifs de la stratégie et les moyens engagés soit trouvé.',
            taches: [
              'Élaborer un budget prévisionnel réaliste et calculer la rentabilité des actions commerciales.'
            ]
          },
          {
            label: 'Argumenter les éléments du budget et les ratios de rentabilité auprès de la direction générale en préparant un support de présentation adapté aux diversités pour obtenir une validation par les dirigeants et les actionnaires.',
            taches: [
              'Présenter et défendre les choix stratégiques et budgétaires devant une direction.'
            ]
          }
        ]
      },
      {
        label: 'Développer l\'activité commerciale par la conquête et la fidélisation client en s\'appuyant sur les processus de transformation digitale mis en place par l\'entreprise',
        competences: [
          {
            label: 'Construire un plan de prospection commerciale en décidant des différentes techniques et canaux de prospection à utiliser au regard des objectifs fixés et des personae ciblés pour permettre aux équipes d\'être efficace et de gagner du temps dans la conquête de nouveaux clients tout en respectant la législation et les contraintes de l\'entreprise.',
            taches: [
              'Déployer une stratégie commerciale et en assurer le suivi opérationnel'
            ]
          },
          {
            label: 'Mesurer la performance de la stratégie de prospection en mettant en place un processus de suivi (indicateurs, fréquence, outils de remontée automatisée de l\'information, etc.) pour vérifier la pertinence de la stratégie mise en place et connaître le coût d\'acquisition d\'un nouveau client.',
            taches: [
              'Définir et suivre les indicateurs de performance commerciale'
            ]
          },
          {
            label: 'Chiffrer, en concertation avec la hiérarchie et l\'équipe-métier dédiée, les propositions aux appels d\'offres sélectionnées en amont, pour rédiger les réponses et constituer un dossier conforme au cahier des charges du donneur d\'ordre.',
            taches: [
              'Structurer et animer une équipe commerciale en développant l\'intelligence collective'
            ]
          },
          {
            label: 'Valoriser le portefeuille clients actuel en réalisant une cartographie des clients actuels en s\'appuyant sur les données du CRM pour déterminer les priorités commerciales et mettre en place des actions de fidélisation destinées aux clients à forte valeur ajoutée afin de développer les ventes actuelles.',
            taches: [
              'Mettre en place des outils et process pour optimiser l\'efficacité commerciale'
            ]
          },
          {
            label: 'Communiquer régulièrement de façon individualisée avec les clients en adaptant le message aux spécificités des canaux et supports choisis (physique, à distance, numérique, etc.) pour créer une expérience client personnalisée, augmenter le CLV et réduire le taux d\'attrition.',
            taches: [
              'Communiquer régulièrement de façon individualisée avec les clients en adaptant le message aux spécificités des canaux et supports choisis'
            ]
          },
          {
            label: 'Comprendre les besoins, les enjeux et les acteurs impliqués dans le projet d\'achat du prospect en utilisant les techniques d\'écoute active, en prenant en compte les situations de handicap et en instaurant un climat de confiance pour coconstruire (avec le prospect et l\'équipe) une offre adaptée au projet B2B ou B2C.',
            taches: [
              'Accompagner les équipes dans l\'atteinte des objectifs et la montée en compétences'
            ]
          },
          {
            label: 'Négocier, en français et/ou en anglais, avec les différentes parties concernées, les solutions techniques, financières et/ou logistiques complexes en s\'appuyant sur les éléments de l\'USP préparés en amont pour traiter de façon inclusive les objections des différents interlocuteurs dans une position de conseil afin de trouver une solution préservant les intérêts de chacune des parties.',
            taches: [
              'Anticiper les risques et ajuster les actions en fonction des résultats et de l\'environnement'
            ]
          },
          {
            label: 'Conclure la négociation par une transaction respectueuse des intérêts des deux parties et du triptyque (QCD) Qualité-Coût-Délai, en utilisant une technique de closing adaptée à la situation pour obtenir un accord définitif de la part du client et des recommandations actives de clients potentiels.',
            taches: [
              'Conclure la négociation par une transaction respectueuse des intérêts des deux parties et du triptyque (QCD) Qualité-Coût-Délai'
            ]
          }
        ]
      },
      {
        label: 'Manager une équipe de collaborateurs et un réseau de partenaires',
        competences: [
          {
            label: 'Informer les équipes internes et externes sur l\'importance des affaires en cours et sur les stratégies à employer en expliquant et en organisant la contribution individuelle de chacun pour atteindre les objectifs fixés dans le respect des engagements sociaux et sociétaux attendus.',
            taches: [
              'Déployer une stratégie de management et de coordination d\'équipe.'
            ]
          },
          {
            label: 'Mettre en oeuvre des techniques inclusives d\'animation d\'équipes internes et externes, adaptées au contexte d\'entreprise (mobiliser, encourager, en face à face, à distance, en hybride) pour développer le sentiment d\'appartenance et détecter les signaux annonciateurs de tensions.',
            taches: [
              'Animer et mobiliser des équipes internes et externes.'
            ]
          },
          {
            label: 'Suivre le travail des équipes et des partenaires en mettant en place des outils et des méthodes de travail collaboratif tels que messagerie instantanée, organisation de visioconférences, calendrier partagé, stockage et partage de données pour détecter les écarts de résultats afin de proposer des actions correctives.',
            taches: [
              'Assurer un suivi opérationnel et ajuster les actions en fonction des résultats.'
            ]
          },
          {
            label: 'Solutionner les conflits entre collaborateurs en se positionnant comme médiateur ou arbitre pour trouver un accord acceptable et durable pour chacun des protagonistes.',
            taches: [
              'Gérer et résoudre les conflits de manière efficace.'
            ]
          },
          {
            label: 'Participer à la mise en oeuvre de la démarche de Gestion des Emplois et Parcours Professionnels (GEPP) au sein de l\'entreprise en cartographiant les besoins nécessaires à la réalisation de l\'affaire pour vérifier au cours d\'un entretien les compétences et les aspirations des collaborateurs afin de fixer les actions de recrutement et de formation.',
            taches: [
              'Mettre en place des dispositifs RH favorisant la montée en compétences et l\'intégration des talents.'
            ]
          },
          {
            label: 'Rédiger une fiche de poste inclusive en définissant les compétences nécessaires à la réalisation de l\'affaire pour recruter un candidat ou rechercher un partenaire externe en adéquation avec le besoin, l\'organisation, la stratégie et les valeurs de l\'entreprise.',
            taches: [
              'Piloter la performance managériale et ajuster les pratiques en fonction des besoins.'
            ]
          }
        ]
      },
      {
        label: 'Piloter l\'activité d\'un centre de profit',
        competences: [
          {
            label: 'Organiser la coordination et la coopération des différents intervenants internes et externes en lien avec l\'activité (spécialistes juridique, technique, commercial, logistique, marketing, etc.) en utilisant la méthode du Lean Management pour améliorer la performance de l\'entreprise en éliminant les coûts superflus et en limitant le gaspillage des ressources.',
            taches: [
              'Élaborer une stratégie de gestion d\'équipe commerciale et de management opérationnel.'
            ]
          },
          {
            label: 'Superviser la rédaction, l\'obtention et la mise à disposition de l\'ensemble des documents et actes administratifs obligatoires à la bonne réalisation du projet (demandes d\'autorisation, déclarations, contrats, etc.) pour être en conformité légale et fiscale avec les impératifs de l\'activité.',
            taches: [
              'Piloter l\'activité commerciale à l\'aide d\'indicateurs de performance.'
            ]
          },
          {
            label: 'Élaborer un processus de gestion des litiges (client, fournisseurs, partenaires, etc.) respectant le cadre réglementaire et les process de l\'entreprise pour participer à l\'instruction, au suivi et à la résolution des contentieux afin de préserver la satisfaction client, les risques d\'impayés et la rentabilité de l\'activité.',
            taches: [
              'Définir et mettre en oeuvre des stratégies de motivation et d\'animation d\'équipe.'
            ]
          },
          {
            label: 'Concevoir des outils de pilotage et de suivi (tableaux de bord) en choisissant les indicateurs de la performance intégrant les notions de Qualité-coût/rentabilité-délai et les engagements sociaux et sociétaux pour vérifier l\'harmonisation de la stratégie et des activités opérationnelles mises en œuvre et leur efficacité.',
            taches: [
              'Superviser et coordonner les actions commerciales.'
            ]
          },
          {
            label: 'Synthétiser, en utilisant des outils de bureautique, les données des résultats et les conditions dans lesquelles ils ont été réalisés en rédigeant un rapport d\'activité pour évaluer la rentabilité de son activité et prendre des décisions éclairées permettant d\'améliorer la croissance.',
            taches: [
              'Maîtriser les outils de reporting et d\'analyse des résultats.'
            ]
          },
          {
            label: 'Rédiger un plan de gestion de crise en déterminant les crises les plus susceptibles de nuire à l\'activité et leur impact commercial, social, sociétal pour préparer l\'équipe et réduire au maximum les dommages à long terme causés à l\'activité.',
            taches: [
              'Conduire des projets commerciaux et accompagner le changement.'
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // TP ASSISTANT COMMERCIAL
  // ─────────────────────────────────────────────
  'TP_AC': {
    titre: 'TP Assistant Commercial',
    rncp: '',
    secteurs: [
      { label: 'Entreprises commerciales de toutes tailles (TPE, PME, ETI, grands groupes) dans tous les secteurs d\'activité.' },
      { label: 'Associations' },
      { label: 'Collectivités ou coopératives', last: true }
    ],
    blocs: [
      {
        label: 'Administrer les ventes et assurer le suivi de la supply chain',
        competences: [
          {
            label: 'Gérer l\'administration des ventes',
            taches: ['Gérer l\'administration des ventes']
          },
          {
            label: 'Suivre les opérations de la supply chain',
            taches: ['Suivre les opérations de la supply chain']
          },
          {
            label: 'Suivre la relation clientèle en français et en anglais',
            taches: ['Suivre la relation clientèle en français et en anglais']
          },
          {
            label: 'Prévenir et gérer les impayés',
            taches: ['Prévenir et gérer les impayés']
          }
        ]
      },
      {
        label: 'Contribuer au déploiement de la stratégie commerciale de l\'entreprise',
        competences: [
          {
            label: 'Réaliser des actions de fidélisation de la clientèle',
            taches: ['Réaliser des actions de fidélisation de la clientèle']
          },
          {
            label: 'Traiter les données chiffrées de l\'activité commerciale',
            taches: ['Traiter les données chiffrées de l\'activité commerciale']
          },
          {
            label: 'Organiser une action commerciale',
            taches: ['Organiser une action commerciale']
          },
          {
            label: 'Assurer l\'accueil d\'une manifestation commerciale en français et en anglais',
            taches: ['Assurer l\'accueil d\'une manifestation commerciale en français et en anglais']
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // TP CONSEILLER COMMERCIAL
  // ─────────────────────────────────────────────
  'TP_CC': {
    titre: 'TP Conseiller Commercial',
    rncp: '',
    secteurs: [
      { label: 'Tous les secteurs d\'activité qui nécessitent des commerciaux pour leur développement', last: true }
    ],
    blocs: [
      {
        label: 'Prospecter un secteur de vente',
        competences: [
          {
            label: 'Assurer une veille professionnelle et commerciale',
            taches: ['Assurer une veille professionnelle et commerciale']
          },
          {
            label: 'Mettre en œuvre un plan d\'actions commerciales et organiser son activité',
            taches: ['Mettre en œuvre un plan d\'actions commerciales et organiser son activité']
          },
          {
            label: 'Mettre en œuvre la démarche de prospection',
            taches: ['Mettre en œuvre la démarche de prospection']
          },
          {
            label: 'Analyser ses performances commerciales et en rendre compte',
            taches: ['Analyser ses performances commerciales et en rendre compte']
          }
        ]
      },
      {
        label: 'Accompagner le client et lui proposer des produits et des services',
        competences: [
          {
            label: 'Représenter l\'entreprise et contribuer à la valorisation de son image',
            taches: ['Représenter l\'entreprise et contribuer à la valorisation de son image']
          },
          {
            label: 'Conseiller le client en conduisant l\'entretien de vente',
            taches: ['Conseiller le client en conduisant l\'entretien de vente']
          },
          {
            label: 'Assurer le suivi de ses ventes',
            taches: ['Assurer le suivi de ses ventes']
          },
          {
            label: 'Fidéliser en consolidant l\'expérience client',
            taches: ['Fidéliser en consolidant l\'expérience client']
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // TP FORMATEUR PROFESSIONNEL D'ADULTES
  // ─────────────────────────────────────────────
  'TP_FPA': {
    titre: 'TP Formateur Professionnel d\'Adultes',
    rncp: '',
    secteurs: [
      { label: 'Organismes de formation publics ou privés dans le champ de la qualification ou de l\'insertion' },
      { label: 'Services de formation en entreprise, tous secteurs confondus', last: true }
    ],
    blocs: [
      {
        label: 'Concevoir et préparer la formation',
        competences: [
          {
            label: 'Elaborer la progression pédagogique d\'une formation multimodale à partir d\'une demande',
            taches: ['Elaborer la progression pédagogique d\'une formation multimodale à partir d\'une demande']
          },
          {
            label: 'Concevoir un scénario pédagogique et d\'accompagnement en intégrant la multimodalité',
            taches: ['Concevoir un scénario pédagogique et d\'accompagnement en intégrant la multimodalité']
          },
          {
            label: 'Concevoir des activités d\'apprentissage et d\'évaluation en intégrant la multimodalité',
            taches: ['Concevoir des activités d\'apprentissage et d\'évaluation en intégrant la multimodalité']
          }
        ]
      },
      {
        label: 'Animer une formation et évaluer les acquis des apprenants',
        competences: [
          {
            label: 'Animer une formation et faciliter les apprentissages selon les différentes modalités',
            taches: ['Animer une formation et faciliter les apprentissages selon les différentes modalités']
          },
          {
            label: 'Evaluer les acquis de formation des apprenants',
            taches: ['Evaluer les acquis de formation des apprenants']
          },
          {
            label: 'Remédier aux difficultés individuelles d\'apprentissage',
            taches: ['Remédier aux difficultés individuelles d\'apprentissage']
          }
        ]
      },
      {
        label: 'Accompagner les apprenants en formation',
        competences: [
          {
            label: 'Accompagner les apprenants dans leur parcours de formation',
            taches: ['Accompagner les apprenants dans leur parcours de formation']
          },
          {
            label: 'Accueillir un apprenant en formation et co-construire son parcours',
            taches: ['Accueillir un apprenant en formation et co-construire son parcours']
          },
          {
            label: 'Tutorer les apprenants à distance',
            taches: ['Tutorer les apprenants à distance']
          },
          {
            label: 'Accompagner le développement professionnel des apprenants',
            taches: ['Accompagner le développement professionnel des apprenants']
          }
        ]
      },
      {
        label: 'Inscrire sa pratique professionnelle dans une démarche de qualité et de responsabilité sociale des entreprises',
        competences: [
          {
            label: 'Respecter et faire respecter la réglementation en vigueur en formation et dans sa spécialité',
            taches: ['Respecter et faire respecter la réglementation en vigueur en formation et dans sa spécialité']
          },
          {
            label: 'Réaliser une veille pour maintenir son expertise de formateur et de professionnel dans sa spécialité',
            taches: ['Réaliser une veille pour maintenir son expertise de formateur et de professionnel dans sa spécialité']
          },
          {
            label: 'Analyser ses pratiques professionnelles',
            taches: ['Analyser ses pratiques professionnelles']
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // TP RESPONSABLE D'ÉTABLISSEMENT MARCHAND
  // ─────────────────────────────────────────────
  'BAC6_REM': {
    titre: 'TP Responsable d\'Établissement Marchand',
    rncp: '',
    secteurs: [
      { label: 'Grandes et moyennes surfaces alimentaires ou spécialisées' },
      { label: 'Boutiques' },
      { label: 'Négoces interentreprises' },
      { label: 'Autre établissement marchand', last: true }
    ],
    blocs: [
      {
        label: 'Coordonner et améliorer l\'activité commerciale de l\'établissement marchand',
        competences: [
          {
            label: 'Gérer la chaîne d\'approvisionnement de l\'établissement marchand',
            taches: ['Gérer la chaîne d\'approvisionnement de l\'établissement marchand']
          },
          {
            label: 'Piloter l\'offre commerciale de l\'établissement marchand',
            taches: ['Piloter l\'offre commerciale de l\'établissement marchand']
          },
          {
            label: 'Bâtir et développer l\'expérience client',
            taches: ['Bâtir et développer l\'expérience client']
          }
        ]
      },
      {
        label: 'Contribuer aux orientations stratégiques de l\'enseigne et optimiser la performance économique de l\'établissement marchand',
        competences: [
          {
            label: 'Contribuer aux orientations stratégiques de l\'enseigne',
            taches: ['Contribuer aux orientations stratégiques de l\'enseigne']
          },
          {
            label: 'Etablir et présenter les prévisionnels de l\'établissement marchand',
            taches: ['Etablir et présenter les prévisionnels de l\'établissement marchand']
          },
          {
            label: 'Analyser les performances de l\'établissement marchand et définir les actions correctives',
            taches: ['Analyser les performances de l\'établissement marchand et définir les actions correctives']
          }
        ]
      },
      {
        label: 'Manager les salariés de l\'établissement marchand',
        competences: [
          {
            label: 'Piloter les processus de recrutement et d\'intégration des salariés de l\'établissement marchand',
            taches: ['Piloter les processus de recrutement et d\'intégration des salariés de l\'établissement marchand']
          },
          {
            label: 'Optimiser la performance collective des équipes et la performance individuelle des salariés de l\'établissement marchand',
            taches: ['Optimiser la performance collective des équipes et la performance individuelle des salariés de l\'établissement marchand']
          },
          {
            label: 'Manager l\'activité quotidienne de l\'établissement marchand et favoriser la cohésion des équipes',
            taches: ['Manager l\'activité quotidienne de l\'établissement marchand et favoriser la cohésion des équipes']
          },
          {
            label: 'Mobiliser les équipes dans la gestion des projets de l\'établissement marchand',
            taches: ['Mobiliser les équipes dans la gestion des projets de l\'établissement marchand']
          }
        ]
      }
    ]
  }

};
