PAUSE 5' — Version 5 · projection en classe
Bouger. Respirer. Apprendre.

PRINCIPALES FONCTIONS
- 10 pauses actives de 5 minutes
- 5 besoins : Se réveiller, Bouger, Se concentrer, S'étirer, Se calmer
- lancement 3 · 2 · 1 · C'EST PARTI !
- grand affichage vidéo + consignes, conçu pour vidéoprojecteur / tableau blanc
- passage en plein écran au démarrage de la séance (selon autorisation du navigateur)
- bouton Plein écran disponible à tout moment
- aucune synthèse vocale
- fichiers audio MP3 personnels possibles dans le dossier audio/
- vidéos MP4 en boucle dans le dossier videos/
- compteur local de pauses
- PWA installable et cache hors ligne

VIDÉOS
Déposer les fichiers MP4 dans le dossier videos/ en conservant les noms prévus dans app.js.
La vidéo utilise object-fit: contain afin que le corps entier reste visible lors de la projection.

AUDIO
Les fichiers audio sont facultatifs.
Pour associer un fichier son à une vidéo, utiliser le même nom :
  videos/marche.mp4 -> audio/marche.mp3
  videos/squats.mp4 -> audio/squats.mp3
Le MP3 est lu une fois au début du mouvement. En l'absence de fichier, la séance reste silencieuse.

PLEIN ÉCRAN
Le bouton Démarrer demande automatiquement l'affichage plein écran du panneau de séance.
Si le navigateur refuse, utiliser le bouton « Plein écran » en haut de la page de séance.
La touche Échap permet généralement de quitter le plein écran.

HORS LIGNE
Les fichiers principaux sont mis en cache au premier chargement. Les vidéos et audios sont ensuite mis en cache au fur et à mesure de leur utilisation.

V8 : compatibilité Chrome/Safari améliorée pour la projection, logo officiel fourni par l'utilisateur, sous-titre sous Sophie Cheyrou supprimé, mode projection homogène sans API plein écran native.


V9 : flèche visible sur Se calmer, bouton ⏹ Accueil dans chaque pause, animation douce de la photo d’accueil, cache v9.


V11 : photo d'accueil fixe, ajout du logo Collège Actif, nouvelle icône colorée, cache v11.


V12 : accueil rapproché du visuel validé, photo fixe avec fondu graphique, logo officiel Académie de Paris, crédit Sophie Cheyrou sur deux lignes, phrase d'accroche, bénéfices et bouton À propos. L'icône n'est pas redessinée dans cette version. Préchargement de la vidéo suivante non activé à ce stade.

V13 : photo d'accueil recentrée, phrase d'accroche repositionnée dans un cartouche plus lisible, logo Collège Actif ajouté à côté du logo Académie de Paris, cache v13.

V14 : remplacement uniquement du bandeau d'accueil V13 par le NOUVEAU BANDEAU fourni. Aucun autre élément fonctionnel ou graphique modifié.

V15 — AUDIO
- Ajout des sons communs audio/depart.mp3 et audio/fin.mp3.
- La pause « Se réveiller — Début de journée » utilise des associations audio explicites.
- Le challenge utilise audio/challenge-genoux.mp3 même si sa vidéo reste videos/genoux.mp4.
- Une consigne audio est lue une seule fois au début de chaque étape.
- Pause/Reprendre met également la consigne audio en pause/reprise si elle est encore en cours.
- Les autres pauses restent compatibles avec la convention automatique video.mp4 -> audio/video.mp3 pour les futurs fichiers.
- Cache PWA : pause5-v15.

V16 : correction audio robuste et répétable, vidéo démarrant uniquement après Démarrer, depart/fin/challenge corrigés, cache média corrigé, À propos actualisé.

V17 : depart.mp3 au clic sur une pause d'accueil ; Démarrer lance immédiatement vidéo, timer et consigne ; fin.mp3 joue sur l'écran final ; crédit Sophie retiré du bandeau d'accueil.

V18 : écran d'attente 'PAUSE 5’… EN PLACE !' avant démarrage pour toutes les pauses ; la vidéo est préchargée mais masquée afin de démarrer immédiatement au clic. Pause 2 : audio/droite-gauche.mp3, audio/challenge-rythme.mp3 et audio/sophro.mp3 explicitement associés. Écran final : 'On reprend le cours !'. Cache v18.

V19 :
- association explicite vidéo/audio pour toutes les étapes des 10 pauses ;
- une même vidéo ou un même son peut être réutilisé dans plusieurs exercices ;
- correction Full Body : combo-genoux-squat.mp3 et challenge-fullbody.mp3 ;
- badge ♿ « Adaptable en position assise » sur chaque pause ;
- bouton « Étape suivante » masqué avant Démarrer, puis visible dès le premier exercice ;
- cache v19.

V19a — correction accessibilité :
La mention ♿ n'est plus affichée sur toutes les pauses.
Elle est réservée aux pauses dont l'ensemble peut être adapté en position assise :
Boxing Break ; Droite / Gauche ; Code secret ; Dos & épaules ;
Déverrouillage ; Respire ; Reset mental.
Pas de badge pour Début de journée, Début d'après-midi et Full Body,
car ces pauses comportent notamment des squats ou des mouvements debout qui
ne doivent pas être présentés comme réalisables à l'identique en position assise.

V20
- adaptation assise réelle affichée en parallèle de la consigne debout ;
- bouton global Son / Son coupé ;
- bibliothèque média : chaque étape possède ses chemins vidéo et audio explicites, permettant toute réutilisation ;
- 3 nouvelles pauses : Avant une évaluation, Retour de récréation, Fin de journée ;
- rubrique « Pourquoi une pause active ? » dans À propos ;
- cache v20.

V21
- À propos raccourci : suppression du paragraphe scientifique long afin que la conception reste visible.
- « Avant une évaluation » recentrée sur l’apaisement : ancrage, points de contact,
  respiration en carré, relâchement musculaire, focalisation et respiration calme.
- « Retour de récréation » entièrement calme et compatible assis :
  observation du pouls au début et à la fin, ancrage, expiration prolongée,
  relâchement des épaules, respiration en carré et recentrage.
- Le pouls est présenté comme une observation personnelle, jamais comme un test ou une compétition.
- Cache v21.

V22
- consignes projetées fortement raccourcies pour les 3 pauses bien-être ;
- logique « l’écran montre, la voix guide » ;
- bouton Son également disponible pendant la pause ;
- préparation d’un démarrage spécifique aux pauses calmes ;
- guide complet audio/vidéo et textes d’enregistrement inclus.

V22a : bouton Son flottant pendant toute pause ; paragraphe scientifique supprimé ; À propos défilable ; crédit Sophie Cheyrou corrigé ; cache v22a.

V22b : un seul bouton Son ; aucun chevauchement avec À propos ; bouton visible pendant toutes les étapes ; réactivation du son rejoue immédiatement l’audio de l’étape en cours ; cache v22b.

V22c — correctif Son reconstruit
- UN SEUL bouton Son, uniquement dans l’en-tête, à côté de À propos.
- Le bouton ne devient plus flottant : aucune superposition possible.
- Clic 1 : coupe immédiatement l’audio.
- Clic 2 : réactive le son et relance immédiatement la consigne de l’étape si elle est en cours.
- Un seul gestionnaire de clic est enregistré.
- Cache renommé pause5-v22c-20260915 pour forcer la mise à jour du service worker.

V22e : suppression du Son près de À propos ; seul Son près du chronomètre ; DEBOUT et ASSIS dans deux encadrés identiques, même police/taille/style ; cache v22e.

V22f
- remplacement du pictogramme fauteuil roulant par une chaise 🪑 pour ASSIS ;
- ajout du pictogramme personne debout 🧍 devant DEBOUT ;
- pictogrammes harmonisés dans les consignes et sur le badge d’adaptation assise ;
- cache v22f-20260915.

V22h — correction de V22g
- reconstruite directement depuis V22f pour préserver toute la mise en forme ;
- icône yoga de la carte « Se calmer » remplacée par 🌙 ;
- bandeau bénéfices supprimé proprement ;
- après choix d’une famille : nom de la famille seul, puis « (Choisir une pause) » en petit dessous ;
- sous-titres des 5 cartes V22 strictement conservés ;
- badge d’adaptation assise avec chaise 🪑 ;
- cache V22h.

V22i : textes À propos et catégories actualisés ; S’apaiser/Respirer ; écran PRÊT ? ; responsive iPhone/tablette/ordinateur renforcé.

V22j — noms des pauses reformulés par situations de classe : Après être resté assis ; Besoin de se défouler ; Avant de se concentrer ; Entre deux activités ; Relâcher les tensions ; Besoin de bouger un peu. Contenus, médias et fichiers audio/vidéo inchangés.
