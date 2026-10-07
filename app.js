
// --- Fenêtre "À propos" ---
const aboutBtn = document.getElementById('aboutBtn');
const aboutModal = document.getElementById('aboutModal');
const aboutClose = document.getElementById('aboutClose');
function openAbout(){ if(aboutModal) aboutModal.classList.add('open'); }
function closeAbout(){ if(aboutModal) aboutModal.classList.remove('open'); }
if(aboutBtn) aboutBtn.addEventListener('click', openAbout);
if(aboutClose) aboutClose.addEventListener('click', closeAbout);
if(aboutModal) aboutModal.addEventListener('click', (e)=>{ if(e.target===aboutModal) closeAbout(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeAbout(); });

// --- Fenêtre "Mentions légales" ---
const legalBtn = document.getElementById('legalBtn');
const legalModal = document.getElementById('legalModal');
const legalClose = document.getElementById('legalClose');
function openLegal(){ if(legalModal) legalModal.classList.add('open'); }
function closeLegal(){ if(legalModal) legalModal.classList.remove('open'); }
if(legalBtn) legalBtn.addEventListener('click', openLegal);
if(legalClose) legalClose.addEventListener('click', closeLegal);
if(legalModal) legalModal.addEventListener('click', (e)=>{ if(e.target===legalModal) closeLegal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeLegal(); });

const cats={
 BOOST:{icon:'⚡',label:'Se réveiller',desc:'Retrouver de l’énergie'},MOVE:{icon:'🔥',label:'Bouger',desc:'Mettre le corps en mouvement'},FOCUS:{icon:'🎯',label:'Se concentrer',desc:'Mobiliser son attention'},RESET:{icon:'🌿',label:"S’étirer",desc:'Délier et mobiliser le corps'},RELAX:{icon:'🌙',label:'Se calmer',desc:'Respirerr et relâcher'}
};
const P=(phase,name,seconds,icon,instruction,seated,video,audio=null)=>({phase,name,seconds,icon,instruction,seated,video,audio});
const sessions=[
{cat:'BOOST',title:'Début de journée',tag:'Énergie immédiate',intensity:2,steps:[P('MISE EN ROUTE','Marche tranquille',20,'🚶','Debout derrière ta chaise. Marche tranquillement sur place.','Marche assis en alternant les pieds.','videos/debut-de-journee-01-marche-tranquille.mp4','audio/debut-de-journee-01-marche-tranquille.mp3'),P('ACTIVATION','Marche active',40,'⚡','Accélère. Les bras accompagnent le mouvement.','Pieds et bras dynamiques.','videos/debut-de-journee-02-marche-active.mp4','audio/debut-de-journee-02-marche-active.mp3'),P('ACTIVATION','Talons-fesses',40,'🦵','Alterne les talons vers l’arrière. Reste léger et droit.','Talons alternés vers l’avant.','videos/debut-de-journee-03-talons-fesses.mp4','audio/debut-de-journee-03-talons-fesses.mp3'),P('JAMBES','Squats',40,'⬇️','Recule légèrement le bassin et remonte. Va à ton rythme.','Extensions alternées des jambes.','videos/debut-de-journee-04-squats.mp4','audio/debut-de-journee-04-squats.mp3'),P('CARDIO','Genoux alternés',40,'🔥','Monte un genou puis l’autre. Trouve ton rythme.','Genoux alternés assis.','videos/debut-de-journee-05-genoux-alternes.mp4','audio/debut-de-journee-05-genoux-alternes.mp3'),P('CARDIO','Boxe',30,'🥊','Droite, gauche. Les coups restent contrôlés. Accélère progressivement.','Même mouvement assis.','videos/debut-de-journee-06-boxe.mp4','audio/debut-de-journee-06-boxe.mp3'),P('CHALLENGE','30 secondes',30,'🎯','Combien de montées de genoux peux-tu réaliser proprement ?','Même défi assis.','videos/debut-de-journee-07-30-secondes.mp4','audio/synchro.mp3'),P('RESET','Respirer',60,'🌬️','Ralentis. Inspire… expire lentement. Relâche les épaules.','Identique assis.','videos/debut-de-journee-08-respirer.mp4','audio/debut-de-journee-08-respirer.mp3')]},
{cat:'BOOST',title:'Début d’après-midi',tag:'Relancer sans s’épuiser',intensity:2,steps:[P('MOBILITÉ','Grandir',30,'↕️','Monte les bras. Grandis-toi. Relâche.','Identique assis.','videos/debut-dapres-midi-01-grandir.mp4','audio/debut-dapres-midi-01-grandir.mp3'),P('ACTIVATION','Pas droite-gauche',40,'↔️','Droite. Centre. Gauche. Centre.','Tapote alternativement les pieds.','videos/debut-dapres-midi-02-pas-droite-gauche.mp4','audio/debut-dapres-midi-02-pas-droite-gauche.mp3'),P('ACTIVATION','Montée sur pointes',40,'🦶','Monte sur les pointes puis redescends doucement.','Talons levés puis reposés.','videos/debut-dapres-midi-03-montee-sur-pointes.mp4','audio/debut-dapres-midi-03-montee-sur-pointes.mp3'),P('COORDINATION','Coude-genou croisé',40,'✕','Coude droit, genou gauche. Puis inverse.','Identique assis.','videos/debut-dapres-midi-04-coude-genou-croise.mp4','audio/debut-dapres-midi-04-coude-genou-croise.mp3'),P('CARDIO','Marche turbo',40,'🚶','Marche vite. Bras actifs. Encore un peu plus vite.','Pieds et bras rapides.','videos/debut-dapres-midi-05-marche-turbo.mp4','audio/debut-dapres-midi-05-marche-turbo.mp3'),P('JAMBES','Squat + bras',40,'🙌','Descends légèrement. Remonte en levant les bras.','Bras hauts + extension de jambes.','videos/debut-dapres-midi-06-squat-bras.mp4','audio/debut-dapres-midi-06-squat-bras.mp3'),P('CHALLENGE','Classe synchro',30,'🎯','Toute la classe peut-elle tenir le même rythme ?','Identique assis.','videos/debut-dapres-midi-07-classe-synchro.mp4','audio/debut-dapres-midi-07-classe-synchro.mp3'),P('RESET','Respirer',40,'🌬️','Inspire trois secondes. Souffle lentement.','Identique assis.','videos/debut-dapres-midi-08-respirer.mp4','audio/debut-dapres-midi-08-respirer.mp3')]},
{cat:'MOVE',title:'Après être resté assis',tag:'Tout le corps en 5 min',intensity:3,steps:[P('MOBILITÉ','Cercles d’épaules',30,'🔄','Grands cercles vers l’arrière.','Identique assis.','videos/apres-etre-reste-assis-01-cercles-depaules.mp4','audio/apres-etre-reste-assis-01-cercles-depaules.mp3'),P('JAMBES','Demi-squats',40,'⬇️','Descends légèrement et remonte. Mouvement fluide.','Extensions alternées.','videos/apres-etre-reste-assis-02-demi-squats.mp4','audio/apres-etre-reste-assis-02-demi-squats.mp3'),P('HAUT DU CORPS','Poussées devant',40,'🙌','Pousse les deux mains devant toi puis ramène.','Identique assis.','videos/apres-etre-reste-assis-03-poussees-devant.mp4','audio/apres-etre-reste-assis-03-poussees-devant.mp3'),P('CARDIO','Genoux alternés',40,'🔥','Genou droit, gauche. Accélère progressivement.','Genoux alternés assis.','videos/apres-etre-reste-assis-04-genoux-alternes.mp4','audio/apres-etre-reste-assis-04-genoux-alternes.mp3'),P('JAMBES','Squat + pointes',40,'⬆️','Un squat puis monte sur la pointe des pieds.','Extensions + pointes.','videos/apres-etre-reste-assis-05-squat-pointes.mp4','audio/apres-etre-reste-assis-05-squat-pointes.mp3'),P('COMBO','Deux genoux + squat',50,'🔁','Deux genoux puis un squat. Recommence.','Deux genoux puis deux extensions.','videos/apres-etre-reste-assis-06-deux-genoux-squat.mp4','audio/apres-etre-reste-assis-06-deux-genoux-squat.mp3'),P('CHALLENGE','Tous ensemble !',30,'🤝','Toute la classe en même temps ! Restez parfaitement synchronisés !','Alterne genou droit → genou gauche, tous ensemble et en rythme.','videos/apres-etre-reste-assis-07-tous-ensemble.mp4','audio/apres-etre-reste-assis-07-tous-ensemble.mp3'),P('RESET','Marche douce',30,'🌬️','Marche doucement. Relâche les bras. Respirer.','Pieds doux + respiration.','videos/apres-etre-reste-assis-08-marche-douce.mp4','audio/apres-etre-reste-assis-08-marche-douce.mp3')]},
{cat:'MOVE',title:'Besoin de se défouler',tag:'Dynamique et défoulant',intensity:3,steps:[P('ÉCHAUFFEMENT','Petites flexions',30,'🦵','Fléchis légèrement les genoux et va toucher tes tibias avec les mains. Remonte et recommence en rythme.','Incline légèrement le buste et va toucher tes tibias avec les mains, puis redresse-toi.','videos/besoin-de-se-defouler-01-petites-flexions.mp4','audio/besoin-de-se-defouler-01-petites-flexions.mp3'),P('TECHNIQUE','Directs',30,'👊','Droite. Gauche. Droite. Gauche.','Identique assis.','videos/besoin-de-se-defouler-02-directs.mp4','audio/besoin-de-se-defouler-02-directs.mp3'),P('TECHNIQUE','Double direct',40,'🥊','Droite-gauche… les deux','Identique assis.','videos/besoin-de-se-defouler-03-double-direct.mp4','audio/besoin-de-se-defouler-03-double-direct.mp3'),P('COORDINATION','Direct droit + esquive',40,'↙️','Direct droit puis légère flexion.','Direct droit puis légère inclinaison.','videos/besoin-de-se-defouler-04-direct-esquive.mp4','audio/besoin-de-se-defouler-04-direct-esquive.mp3'),P('TECHNIQUE','Uppercuts',40,'⬆️','Alterne les bras de bas en haut. Sans forcer.','Identique assis.','videos/besoin-de-se-defouler-05-uppercuts.mp4','audio/besoin-de-se-defouler-05-uppercuts.mp3'),P('COMBO','Droite-gauche-esquive',50,'🔥','Enchaîne : droite, gauche, esquive.','Même combo assis.','videos/besoin-de-se-defouler-06-droite-gauche-droite-esquive.mp4','audio/besoin-de-se-defouler-06-droite-gauche-droite-esquive.mp3'),P('CHALLENGE','Classe synchro',30,'🎯','Toute la classe ensemble. Ne perdez pas le rythme !','Identique assis.','videos/besoin-de-se-defouler-07-classe-synchro.mp4','audio/synchro.mp3'),P('RESET','Relâche et respire',40,'🌬️','Inspire tranquillement. Souffle profondément','Identique assis.','videos/besoin-de-se-defouler-08-relache.mp4','audio/besoin-de-se-defouler-08-relache.mp3')]},
{cat:'FOCUS',title:'Avant un exercice',tag:'Coordination & attention',intensity:2,steps:[P('COORDINATION','Même côté',30,'✋','Main droite sur genou droit. Puis gauche.','Identique assis.','videos/avant-un-exercice-01-meme-cote.mp4','audio/avant-un-exercice-01-meme-cote.mp3'),P('COORDINATION','Croisé main-genou',40,'✕','Main droite sur genou gauche. Puis inverse.','Identique assis.','videos/avant-un-exercice-02-croise-main-genou.mp4','audio/avant-un-exercice-02-croise-main-genou.mp3'),P('COORDINATION','Coude vers genou opposé',40,'🧠','Coude droit vers genou gauche. Puis coude gauche vers genou droit.','Identique assis.','videos/avant-un-exercice-03-coude-genou-oppose.mp4','audio/avant-un-exercice-03-coude-genou-oppose.mp3'),P('RYTHME','Coude et Genou opposés puis CLAP',40,'👏','Coude droit vers genou gauche. Inverse. CLAP','Identique assis.','videos/avant-un-exercice-04-deux-croises-clap.mp4','audio/avant-un-exercice-04-deux-croises-clap.mp3'),P('RYTHME','Trois marches + clap',40,'🚶','Trois marches sur place puis clap.','Trois tapotements puis clap.','videos/avant-un-exercice-05-trois-marches-clap.mp4','audio/avant-un-exercice-05-trois-marches-clap.mp3'),P('SÉQUENCE','Croisé-croisé-clap-pause',50,'🎯','Enchaîne sans perdre la séquence.','Identique assis.','videos/avant-un-exercice-06-croise-croise-clap-pause.mp4','audio/avant-un-exercice-06-croise-croise-clap-pause.mp3'),P('CHALLENGE','Sans erreur',30,'🧠','Tiens 30 secondes. Si tu te trompes, reprends immédiatement.','Identique assis.','videos/avant-un-exercice-07-sans-erreur.mp4','audio/avant-un-exercice-07-sans-erreur.mp3'),P('RESET','Regard fixe',30,'👁️','Fixe un point et ralentis ta respiration.','Identique assis.','videos/avant-un-exercice-08-regard-fixe.mp4','audio/avant-un-exercice-08-regard-fixe.mp3')]},
{cat:'RESET',title:'Relâcher les tensions',tag:'Après une longue période assise',intensity:1,steps:[P('MOBILITÉ','Cercles épaules',40,'🔄','Lentement vers l’arrière.','Identique assis.','videos/relacher-les-tensions-01-cercles-epaules.mp4','audio/relacher-les-tensions-01-cercles-epaules.mp3'),P('OUVERTURE','Ouvrir la poitrine',40,'↔️','Ouvre les bras. Rapproche doucement les omoplates.','Identique assis.','videos/relacher-les-tensions-02-ouvrir-la-poitrine.mp4','audio/relacher-les-tensions-02-ouvrir-la-poitrine.mp3'),P('ÉTIREMENT','Bras haut',40,'🙌','Grandis-toi vers le plafond.','Identique assis.','videos/relacher-les-tensions-03-bras-haut.mp4','audio/relacher-les-tensions-03-bras-haut.mp3'),P('MOBILITÉ','Rotation du buste',40,'🌿','Droite… centre… gauche.','Identique assis.','videos/relacher-les-tensions-04-rotation-du-buste.mp4','audio/relacher-les-tensions-04-rotation-du-buste.mp3'),P('DOS','Dos rond / dos long',40,'↕️','Arrondis légèrement. Puis redresse-toi.','Identique assis.','videos/relacher-les-tensions-05-dos-rond-dos-long.mp4','audio/relacher-les-tensions-05-dos-rond-dos-long.mp3'),P('GLOBAL','Cou-Tête',50,'🌿','Penche légèrement la tête, sans forcer.','Identique assis.','videos/relacher-les-tensions-06-mobilite-generale.mp4','audio/relacher-les-tensions-06-mobilite-generale.mp3'),P('RESET','Respiration',50,'🌬️','Inspire en grandissant. Expire en relâchant.','Identique assis.','videos/relacher-les-tensions-07-respiration.mp4','audio/relacher-les-tensions-07-respiration.mp3')]},
{cat:'RESET',title:'Besoin de bouger un peu',tag:'Mobilité douce',intensity:1,steps:[P('MAINS','Poignets',35,'🤲','Cercles de poignets dans les deux sens.','Identique assis.','videos/besoin-de-bouger-un-peu-01-poignets.mp4','audio/besoin-de-bouger-un-peu-01-poignets.mp3'),P('BRAS','Coudes',35,'💪','Plie et tends doucement les bras.','Identique assis.','videos/besoin-de-bouger-un-peu-02-coudes.mp4','audio/besoin-de-bouger-un-peu-02-coudes.mp3'),P('ÉPAULES','Épaules',35,'🔄','Grands cercles, sans forcer.','Identique assis.','videos/besoin-de-bouger-un-peu-03-epaules.mp4','audio/besoin-de-bouger-un-peu-03-epaules.mp3'),P('TRONC','Buste',35,'🌿','Tourne doucement à droite et à gauche.','Identique assis.','videos/besoin-de-bouger-un-peu-04-buste.mp4','audio/besoin-de-bouger-un-peu-04-buste.mp3'),P('JAMBES','Genoux',35,'🦵','Plie et tends légèrement les jambes.','Extensions alternées.','videos/besoin-de-bouger-un-peu-05-genoux.mp4','audio/besoin-de-bouger-un-peu-05-genoux.mp3'),P('PIEDS','Chevilles',35,'🦶','Pointes puis talons.','Identique assis.','videos/besoin-de-bouger-un-peu-06-chevilles.mp4','audio/besoin-de-bouger-un-peu-06-chevilles.mp3'),P('GLOBAL','Corps entier',45,'🙌','Grandis-toi puis relâche tout le corps.','Identique assis.','videos/besoin-de-bouger-un-peu-07-corps-entier.mp4','audio/besoin-de-bouger-un-peu-07-corps-entier.mp3'),P('RESET','Respiration',45,'🌬️','Inspire par le nez, souffle doucement.','Identique assis.','videos/besoin-de-bouger-un-peu-08-respiration.mp4','audio/besoin-de-bouger-un-peu-08-respiration.mp3')]},
{cat:'RELAX',title:'Respirer',tag:'Faire redescendre la pression',intensity:1,steps:[P('INSTALLATION','Position confortable',30,'🧘','Dos droit, Épaules relâchées, regard devant','Les 2 pieds au sol, dos droit, regard devant','videos/respirer-01-position-confortable.mp4','audio/respirer-01-position-confortable.mp3'),P('SOUFFLE','Inspire 3 sec.\nExpire 4 sec.',40,'🌬️','Inspire 3 secondes. Expire 4 secondes.','Identique assis.','videos/respirer-02-inspire-3-sec-expire-4-sec.mp4','audio/respirer-02-inspire-3-sec-expire-4-sec.mp3'),P('RELÂCHEMENT','Monter / relâcher épaules',40,'🌿','Monte les épaules à l’inspiration. Relâche à l’expiration.','Identique assis.','videos/respirer-03-monter-relacher-epaules.mp4','audio/respirer-03-monter-relacher-epaules.mp3'),P('MOBILITÉ','Lever / baisser les bras',40,'🙌','Inspire en montant les bras doucement et expire en descendant les bras lentement.','Identique assis.','videos/respirer-04-lever-baisser-les-bras.mp4','audio/respirer-04-lever-baisser-les-bras.mp3'),P('SOUFFLE','Expiration longue',50,'🌬️','Inspire naturellement. Allonge doucement l’expiration.','Identique assis.','videos/respirer-05-expiration-longue.mp4','audio/respirer-05-expiration-longue.mp3'),P('NUQUE','Mobilité douce',40,'👀','Penche légèrement la tête, sans forcer.','Identique assis.','videos/respirer-06-mobilite-douce.mp4','audio/respirer-06-mobilite-douce.mp3'),P('RESET','4 respirations lentes',60,'🧘','Quatre respirations tranquilles.','Identique assis.','videos/respirer-07-4-respirations-lentes.mp4','audio/respirer-07-4-respirations-lentes.mp3')]},
{cat:'FOCUS',title:'Avant une évaluation',tag:'Apaiser le stress · respirer · se recentrer',intensity:1,steps:[
P('S’ANCRER','Points de contact',40,'🪑','Sens tes appuis.','Sens tes appuis sur la chaise.','videos/avant-une-evaluation-01-points-de-contact.mp4','audio/avant-une-evaluation-01-points-de-contact.mp3'),
P('RESPIRER','Carré respiratoire',50,'◻️','Inspire · pause · expire · pause.','Même respiration, sans forcer.','videos/avant-une-evaluation-02-carre-respiratoire.mp4','audio/avant-une-evaluation-02-carre-respiratoire.mp3'),
P('RELÂCHER','Mains',35,'🤲','Serre… puis relâche.','Même mouvement.','videos/avant-une-evaluation-03-mains.mp4','audio/avant-une-evaluation-03-mains.mp3'),
P('RELÂCHER','Épaules',40,'🌿','Monte… puis relâche.','Même mouvement.','videos/avant-une-evaluation-04-epaules.mp4','audio/avant-une-evaluation-04-epaules.mp3'),
P('S’ANCRER','Corps immobile',40,'🧘','Sens ton corps immobile.','Sens chaise, dos, mains, pieds.','videos/avant-une-evaluation-05-corps-immobile.mp4','audio/avant-une-evaluation-05-corps-immobile.mp3'),
P('SE RECENTRER','Un point',45,'👁️','Fixe un point.','Mains relâchées.','videos/avant-une-evaluation-06-un-point.mp4','audio/avant-une-evaluation-06-un-point.mp3'),
P('RESPIRER','Souffle calme',50,'🌬️','Respirer naturellement.','Posture confortable.','videos/avant-une-evaluation-07-souffle-calme.mp4','audio/avant-une-evaluation-07-souffle-calme.mp3')]},
{cat:'RELAX',title:'Retour de récréation',tag:"MON DÉFI : après l'exercice de respiration, mon nombre de battements cardiaque est-il plus bas ?",intensity:1,steps:[
P('APPRENDRE','Prendre son pouls',30,'❤️','Pose doucement 2 doigts sur un seul côté du cou, sous la mâchoire. Cherche tes pulsations cardiaques','','videos/retour-de-recreation-01-prendre-son-pouls.mp4','audio/retour-de-recreation-01-prendre-son-pouls.mp3'),
P('MESURER','1re mesure – 30 s',30,'⏱️','Compte chaque pulsation cardiaque pendant 30 secondes.','','videos/retour-de-recreation-02-1re-mesure-30-s.mp4','audio/retour-de-recreation-02-1re-mesure-30-s.mp3'),
P('MÉMORISER','Mon repère de départ',15,'🧠','Retiens ton nombre de pulsations cardiaques.','','videos/retour-de-recreation-03-mon-repere-de-depart.mp4','audio/retour-de-recreation-03-mon-repere-de-depart.mp3'),
P('RESPIRER','Respiration lente',180,'🌬️','Inspire lentement… Expire encore plus lentement. Relâche les épaules.','','videos/retour-de-recreation-04-respiration-lente.mp4','audio/retour-de-recreation-04-respiration-lente.mp3'),
P('MESURER','2e mesure – 30 s',30,'⏱️','Reprends ton pouls de la même façon. Compte les pulsations cardiaques pendant 30 secondes.','','videos/retour-de-recreation-05-2e-mesure-30-s.mp4','audio/retour-de-recreation-05-2e-mesure-30-s.mp3'),
P('COMPARER','Mon défi',15,'🎯','Compare avec ton premier nombre. Ton pouls a-t-il diminué ?','','videos/retour-de-recreation-06-mon-defi.mp4','audio/retour-de-recreation-06-mon-defi.mp3')]},
{cat:'RELAX',title:'Fin de journée',tag:'Délier, relâcher et terminer calmement',intensity:1,steps:[
P('MOBILITÉ','Poignets',35,'🤲','Bouge doucement les poignets.','Même mouvement.','videos/fin-de-journee-01-poignets.mp4','audio/fin-de-journee-01-poignets.mp3'),
P('RELÂCHEMENT','Épaules',40,'🔄','Fais rouler les épaules.','Même mouvement.','videos/fin-de-journee-02-epaules.mp4','audio/fin-de-journee-02-epaules.mp3'),
P('OUVERTURE','Poitrine',40,'↔️','Ouvre… puis relâche.','Sans cambrer.','videos/fin-de-journee-03-poitrine.mp4','audio/fin-de-journee-03-poitrine.mp3'),
P('MOBILITÉ','Rotation',40,'🌿','Tourne doucement le buste.','Amplitude confortable.','videos/fin-de-journee-04-rotation.mp4','audio/fin-de-journee-04-rotation.mp3'),
P('ÉTIREMENT','Grandir',35,'🙌','Grandis-toi… relâche.','Même mouvement.','videos/fin-de-journee-05-grandir.mp4','audio/fin-de-journee-05-grandir.mp3'),
P('DÉTENTE','Genoux',40,'🦵','Mobilise tes genoux en faisant des petits cercles.','Lève une jambe et fais des petits cercles avec ton pied. Change de jambe.','videos/fin-de-journee-06-mains-et-bras.mp4','audio/fin-de-journee-06-mains-et-bras.mp3'),
P('MOBILITÉ','Chevilles',40,'🦶',"Mobilise tes chevilles, l'une après l'autre.",'Même chose.','videos/fin-de-journee-07-respiration-calme.mp4','audio/fin-de-journee-07-respiration-calme.mp3'),
P('FIN','Respiration',30,'🌬️','Relâche tes épaules et respire calmement.','Posture confortable.','videos/fin-de-journee-08-immobilite.mp4','audio/fin-de-journee-08-immobilite.mp3')]},
{cat:'BOOST',title:'Express Réveil – 2′',tag:'2 minutes pour se réveiller et se remettre en action',intensity:2,express:true,steps:[P('ACTIVATION','Marche active',30,'⚡','Accélère. Les bras accompagnent le mouvement.','Pieds et bras dynamiques.','videos/debut-de-journee-02-marche-active.mp4','audio/debut-de-journee-02-marche-active.mp3'),P('JAMBES','Squats',30,'⬇️','Recule légèrement le bassin et remonte. Va à ton rythme.','Extensions alternées des jambes.','videos/debut-de-journee-04-squats.mp4','audio/debut-de-journee-04-squats.mp3'),P('CARDIO','Genoux alternés',30,'🔥','Monte un genou puis l’autre. Trouve ton rythme.','Genoux alternés assis.','videos/debut-de-journee-05-genoux-alternes.mp4','audio/debut-de-journee-05-genoux-alternes.mp3'),P('RESET','Respirer',30,'🌬️','Ralentis. Inspire… expire lentement. Relâche les épaules.','Identique assis.','videos/debut-de-journee-08-respirer.mp4','audio/debut-de-journee-08-respirer.mp3')]},
{cat:'MOVE',title:'Express Bouger – 2′',tag:'2 minutes pour rompre rapidement un temps assis',intensity:2,express:true,steps:[P('MOBILITÉ','Cercles d’épaules',30,'🔄','Grands cercles vers l’arrière.','Identique assis.','videos/apres-etre-reste-assis-01-cercles-depaules.mp4','audio/apres-etre-reste-assis-01-cercles-depaules.mp3'),P('JAMBES','Demi-squats',30,'⬇️','Descends légèrement et remonte. Mouvement fluide.','Extensions alternées.','videos/apres-etre-reste-assis-02-demi-squats.mp4','audio/apres-etre-reste-assis-02-demi-squats.mp3'),P('CARDIO','Genoux alternés',30,'🔥','Genou droit, gauche. Accélère progressivement.','Genoux alternés assis.','videos/apres-etre-reste-assis-04-genoux-alternes.mp4','audio/apres-etre-reste-assis-04-genoux-alternes.mp3'),P('RESET','Marche douce',30,'🌬️','Marche doucement. Relâche les bras. Respire.','Pieds doux + respiration.','videos/apres-etre-reste-assis-08-marche-douce.mp4','audio/apres-etre-reste-assis-08-marche-douce.mp3')]},
{cat:'FOCUS',title:'Express Focus – 2′',tag:'2 minutes pour mobiliser coordination et attention',intensity:2,express:true,steps:[P('COORDINATION','Même côté',30,'✋','Main droite sur genou droit. Puis gauche.','Identique assis.','videos/avant-un-exercice-01-meme-cote.mp4','audio/avant-un-exercice-01-meme-cote.mp3'),P('COORDINATION','Croisé main-genou',30,'✕','Main droite sur genou gauche. Puis inverse.','Identique assis.','videos/avant-un-exercice-02-croise-main-genou.mp4','audio/avant-un-exercice-02-croise-main-genou.mp3'),P('COORDINATION','Coude vers genou opposé',30,'🧠','Coude droit vers genou gauche. Puis coude gauche vers genou droit.','Identique assis.','videos/avant-un-exercice-03-coude-genou-oppose.mp4','audio/avant-un-exercice-03-coude-genou-oppose.mp3'),P('RESET','Regard fixe',30,'👁️','Fixe un point et ralentis ta respiration.','Identique assis.','videos/avant-un-exercice-08-regard-fixe.mp4','audio/avant-un-exercice-08-regard-fixe.mp3')]},
{cat:'RESET',title:'Express Détente – 2′',tag:'2 minutes pour relâcher les principales tensions',intensity:1,express:true,steps:[P('MOBILITÉ','Cercles épaules',30,'🔄','Lentement vers l’arrière.','Identique assis.','videos/relacher-les-tensions-01-cercles-epaules.mp4','audio/relacher-les-tensions-01-cercles-epaules.mp3'),P('OUVERTURE','Ouvrir la poitrine',30,'↔️','Ouvre les bras. Rapproche doucement les omoplates.','Identique assis.','videos/relacher-les-tensions-02-ouvrir-la-poitrine.mp4','audio/relacher-les-tensions-02-ouvrir-la-poitrine.mp3'),P('MOBILITÉ','Rotation du buste',30,'🌿','Droite… centre… gauche.','Identique assis.','videos/relacher-les-tensions-04-rotation-du-buste.mp4','audio/relacher-les-tensions-04-rotation-du-buste.mp3'),P('RESET','Respiration',30,'🌬️','Inspire en grandissant. Expire en relâchant.','Identique assis.','videos/relacher-les-tensions-07-respiration.mp4','audio/relacher-les-tensions-07-respiration.mp3')]},
{cat:'RELAX',title:'Express Calme – 2′',tag:'2 minutes pour respirer et revenir au calme',intensity:1,express:true,steps:[P('INSTALLATION','Position confortable',30,'🧘','Dos droit, épaules relâchées, regard devant.','Les 2 pieds au sol, dos droit, regard devant.','videos/respirer-01-position-confortable.mp4','audio/respirer-01-position-confortable.mp3'),P('SOUFFLE','Inspire 3 sec. / Expire 4 sec.',30,'🌬️','Inspire 3 secondes. Expire 4 secondes.','Identique assis.','videos/respirer-02-inspire-3-sec-expire-4-sec.mp4','audio/respirer-02-inspire-3-sec-expire-4-sec.mp3'),P('RELÂCHEMENT','Monter / relâcher épaules',30,'🌿','Monte les épaules à l’inspiration. Relâche à l’expiration.','Identique assis.','videos/respirer-03-monter-relacher-epaules.mp4','audio/respirer-03-monter-relacher-epaules.mp3'),P('RESET','4 respirations lentes',30,'🧘','Quatre respirations tranquilles.','Identique assis.','videos/respirer-07-4-respirations-lentes.mp4','audio/respirer-07-4-respirations-lentes.mp3')]}


];

let soundEnabled=true;
let filter='ALL', currentIndex=null, stepIndex=0, remaining=0, totalRemaining=300, interval=null, running=false, countdownRunning=false, finishing=false;
let surpriseSeen=new Set(), surpriseTimer=null, freezeCountdownTimer=null;
const $=id=>document.getElementById(id);
const MEDIA_VERSION='v23u-20260922-echauffement-synchro';
function freshMediaUrl(src){
  if(!src) return src;
  const sep=src.includes('?')?'&':'?';
  return `${src}${sep}v=${MEDIA_VERSION}`;
}
function updateSoundUI(){
  ['sessionSoundToggle'].forEach(id=>{
    const b=$(id); if(!b) return;
    b.textContent=soundEnabled ? '🔊 Son' : '🔇 Son coupé';
    b.setAttribute('aria-pressed', String(soundEnabled));
  });
}
function toggleSound(){
  soundEnabled = !soundEnabled;
  if(!soundEnabled){
    // Coupe immédiatement la piste en cours.
    resetAudio();
  }else{
    // Le son est réactivé. Si une étape tourne, sa consigne repart immédiatement.
    if(currentIndex !== null && sessionStarted && running){
      setTimeout(()=>playStepAudio(), 0);
    }
  }
  updateSoundUI();
}
function renderFilters(){
  const order=['BOOST','MOVE','FOCUS','RESET','RELAX'];
  const extra={BOOST:'Pour bien commencer la journée',MOVE:'Pour oxygéner le cerveau',FOCUS:'Pour être plus attentif',RESET:'Pour relâcher les tensions corporelles',RELAX:'Pour se recentrer sur les tâches scolaires'};
  $('filters').innerHTML=order.map(k=>`<button class="filter ${filter===k?'active':''}" data-cat="${k}" type="button"><span class="filter-icon">${cats[k].icon}</span><b>${cats[k].label}</b><small>${extra[k]}</small></button>`).join('');
  document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{filter=btn.dataset.cat;renderFilters();renderSessions();$('sessionHeading').innerHTML=`${cats[filter].label}<small class="choose-under">(Choisir une pause)</small>`;setTimeout(()=>$('sessions').scrollIntoView({behavior:'smooth',block:'start'}),60);});
}
function renderSessions(){
  const list=sessions.map((s,i)=>({s,i})).filter(x=>filter==='ALL'||x.s.cat===filter);
  $('sessions').innerHTML=list.map(({s,i})=>`<button class="session cat-${s.cat}${s.express?' session-express':' session-reference'}" type="button" data-i="${i}"><div class="cat">${cats[s.cat].icon} ${cats[s.cat].label}</div><h3>${s.title}</h3><p>${s.tag}</p>${s.steps.every(st=>st.seated && st.seated.trim())?'<div class="seated-badge" title="Tous les exercices disposent d’une adaptation en position assise">🪑 <span>Adaptation assise possible</span></div>':''}<div class="meta"><span class="duration-badge">${s.express?'EXPRESS · 2 min':'★ FORMAT RECOMMANDÉ · 5 min'}</span><span>Intensité ${'●'.repeat(s.intensity)}${'○'.repeat(3-s.intensity)}</span></div></button>`).join('');
  document.querySelectorAll('.session').forEach(btn=>btn.onclick=()=>openSession(Number(btn.dataset.i)));
}
function audioPathFor(step){
  if(!step) return null;
  if(step.audio) return step.audio;
  if(!step.video) return null;
  return step.video.replace(/^videos\//,'audio/').replace(/\.mp4$/i,'.mp3');
}

// Un seul lecteur audio pour toute la pause. Le premier clic sur « Démarrer »
// l'autorise dans Safari/Chrome, puis le même lecteur est réutilisé pour toutes
// les consignes, y compris depart.mp3 et fin.mp3.
function appAudio(){ return $('cueAudio'); }
function resetAudio(){
  const a=appAudio(); a.muted=false; if(!a) return;
  a.pause(); a.onended=null; a.onerror=null;
  try{a.currentTime=0;}catch(e){}
  a.removeAttribute('src'); a.load();
}
function playAudio(src,onDone){
  if(!soundEnabled){if(onDone)onDone();return;}
  const a=appAudio();
  if(!a || !src){onDone?.();return;}
  let done=false, retried=false;
  const finish=()=>{
    if(done)return; done=true;
    a.onended=null; a.onerror=null;
    onDone?.();
  };
  const tryPlay=(url, allowRetry)=>{
    a.pause();
    a.onended=finish;
    a.onerror=()=>{
      if(allowRetry && !retried){
        retried=true;
        tryPlay(src, false); // secours : URL directe, sans paramètre de version
      }else finish();
    };
    a.src=url;
    try{a.currentTime=0;}catch(e){}
    const promise=a.play();
    if(promise && typeof promise.catch==='function'){
      promise.catch(()=>{
        if(allowRetry && !retried){
          retried=true;
          tryPlay(src, false);
        }else finish();
      });
    }
  };
  // Premier essai avec cache-busting ; second essai automatique avec le chemin brut.
  tryPlay(freshMediaUrl(src), true);
}
function playStepAudio(){
  if(currentIndex===null) return;
  playAudio(audioPathFor(sessions[currentIndex].steps[stepIndex]));
}
function pauseStepAudio(){ const a=appAudio(); if(a) a.pause(); }
function resumeStepAudio(){
  const a=appAudio(); if(!a || !a.getAttribute('src')) return;
  if(a.currentTime>0 && (!Number.isFinite(a.duration) || a.currentTime<a.duration)) a.play().catch(()=>{});
}
function stopStepAudio(){
  const a=appAudio(); if(!a) return;
  a.pause(); try{a.currentTime=0;}catch(e){}
}

let sessionStarted=false;
function openSession(i){
  document.body.classList.add('pause-prestart');
  enterFullscreen();
  
  stop(); resetAudio(); finishing=false; countdownRunning=false; sessionStarted=false;
  currentIndex=i; stepIndex=0; totalRemaining=sessions[i].steps.reduce((n,st)=>n+st.seconds,0); surpriseSeen=new Set(); clearSurprise();
  $('home').classList.add('hidden'); $('finish').classList.remove('open'); $('player').classList.add('open'); $('demo').classList.add('prestart');
  let s=sessions[i]; $('playerCat').textContent=`${cats[s.cat].icon} ${cats[s.cat].label}`; $('playerTitle').textContent=s.title;
  const isPulsePrestart=s.title==='Retour de récréation';
  document.body.classList.toggle('pulse-prestart',isPulsePrestart);
  const missionTexts={
    'Début de journée':'MISSION RÉVEIL — Restez attentifs : rythme, miroir et synchro peuvent surgir !',
    'Début d’après-midi':'MISSION ÉNERGIE — Réveillez la classe ensemble sans vous épuiser.',
    'Après être resté assis':'MISSION MOUVEMENT — Restez attentifs… des surprises peuvent surgir pendant la pause !',
    'Besoin de se défouler':'MISSION DÉFOULOIR — Bougez, restez attentifs… le rythme peut changer à tout moment !',
    'Avant un exercice':'MISSION CERVEAU — Coordination, clap et synchro : restez concentrés !',
    'Relâcher les tensions':'MISSION ZÉRO TENSION — Bougez lentement et relâchez progressivement le corps.',
    'Besoin de bouger un peu':'MISSION DISCRÈTE — Bougez ensemble en faisant le moins de bruit possible.',
    'Respirer':'MISSION CALME — Ralentissez progressivement et terminez ensemble dans le calme.',
    'Avant une évaluation':'MISSION CALME & FOCUS — Respirez, ralentissez et gardez votre attention.',
    'Retour de récréation':'MISSION PULSATIONS — Observez votre corps : votre pouls sera-t-il plus bas à la fin ?',
    'Fin de journée':'MISSION DÉCONNEXION — Ralentissez ensemble jusqu’à une respiration calme.',
    'Express Réveil – 2′':'MISSION EXPRESS — Réveillez le corps en 2 minutes : un MIROIR peut surgir !',
    'Express Bouger – 2′':'MISSION EXPRESS — Deux minutes pour bouger ensemble : restez synchronisés !',
    'Express Focus – 2′':'MISSION EXPRESS — Coordination et attention : toute la classe au même rythme !',
    'Express Détente – 2′':'MISSION EXPRESS — Deux minutes pour ralentir et relâcher les tensions.',
    'Express Calme – 2′':'MISSION EXPRESS — Deux minutes pour ralentir la respiration et revenir au calme.'
  };
  document.body.classList.add('playful-prestart');
  const mission=$('playfulMission');
  if(mission){const mt=mission.querySelector('span');if(mt) mt.textContent=missionTexts[s.title]||'MISSION DE LA CLASSE — Réussissez la pause ensemble !';}
  const prestartPauseLabel=$('prestartPauseLabel');
  if(prestartPauseLabel) prestartPauseLabel.textContent=s.express?"PAUSE 2'…":"PAUSE 5'…";
  const prestartReadyLabel=$('prestartReadyLabel');
  if(prestartReadyLabel) prestartReadyLabel.textContent='PRÊT ?';
  const pulseExtras=$('prestartPulseExtras');
  if(pulseExtras) pulseExtras.hidden=!isPulsePrestart;
  const challenge=$('sessionChallenge');
  if(challenge){
    challenge.hidden=true;
    challenge.textContent='';
  }

  $('start').hidden=false;$('pause').hidden=true;$('next').hidden=true;$('start').textContent='▶ Démarrer';
  loadStep();
  playAudio(s.express?'audio/depart-2-minutes.mp3?v=25d':'audio/depart.mp3');
  window.scrollTo({top:0,behavior:'smooth'});
}
function loadStep(){
  let s=sessions[currentIndex].steps[stepIndex]; remaining=s.seconds;
  $('phaseLabel').textContent=s.phase; $('moveName').textContent=s.name; $('moveIcon').textContent=s.icon;
  $('instruction').textContent=(sessions[currentIndex].title==='Retour de récréation'?'':'🧍 DEBOUT : ')+s.instruction;
  const si=$('seatedInstruction');
  if(si){si.hidden=!(s.seated&&s.seated.trim());si.textContent=s.seated?'🪑 ASSIS : '+s.seated:'';}
  loadVideo(s.video); renderTimeline(); updateTimes();
}
function loadVideo(src){
  const v=$('demoVideo'), d=$('demo');
  d.classList.remove('has-video');
  v.pause(); v.onloadeddata=null; v.onerror=null; v.removeAttribute('src'); v.load();
  if(!src) return;
  v.src=freshMediaUrl(src);
  v.onloadeddata=()=>{
    d.classList.add('has-video');
    // La vidéo ne démarre jamais à l'ouverture de la fiche.
    if(sessionStarted && running) v.play().catch(()=>{});
  };
  v.onerror=()=>{d.classList.remove('has-video');v.pause();};
  v.load();
}
function renderTimeline(){let steps=sessions[currentIndex].steps;$('timeline').innerHTML=steps.map((_,i)=>`<span class="${i<stepIndex?'done':i===stepIndex?'current':''}"></span>`).join('');}
function fmt(n){n=Math.max(0,n);return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
function updateTimes(){const duration=sessions[currentIndex]?sessions[currentIndex].steps.reduce((n,st)=>n+st.seconds,0):300;$('phaseTime').textContent=fmt(remaining);$('total').textContent=fmt(totalRemaining);$('progressBar').style.width=(duration?((duration-totalRemaining)/duration*100):0)+'%';}

function runCountdown(){
  if(countdownRunning)return;countdownRunning=true;
  const overlay=$('countdown'), num=$('countNum'), go=$('countGo');
  overlay.classList.add('open'); go.hidden=true; num.hidden=false;
  const values=['3','2','1'];let i=0;
  const next=()=>{
    if(i<values.length){num.textContent=values[i];i++;setTimeout(next,850);}
    else{num.hidden=true;go.hidden=false;setTimeout(()=>{
      overlay.classList.remove('open');countdownRunning=false;sessionStarted=true;
      startSessionClock();
      $('demoVideo').play().catch(()=>{});
      playStepAudio();
    },850);}
  };next();
}
function start(){
  document.body.classList.remove('pause-prestart');
  document.body.classList.remove('pulse-prestart');
  
  if(running||countdownRunning)return;
  enterFullscreen();
  $('demo').classList.remove('prestart');
  sessionStarted=true;
  $('next').hidden=false;
  startSessionClock();
  $('demoVideo').play().catch(()=>{});
  playStepAudio();
}
function isPlayfulPrototype(){return currentIndex!==null;}
function clearSurprise(){
  if(surpriseTimer){clearTimeout(surpriseTimer);surpriseTimer=null;}
  if(freezeCountdownTimer){clearInterval(freezeCountdownTimer);freezeCountdownTimer=null;}
  const o=$('surpriseOverlay'); if(o){o.classList.remove('show','boost','freeze','mirror','turbo','synchro','inverse','clap','slow','silence','challenge');}
  const b=$('surpriseActive'); if(b){b.hidden=true;b.textContent='';b.className='surprise-active';}
}
function showSurprise(key,icon,title,text,kind,duration){
  if(surpriseSeen.has(key))return;
  surpriseSeen.add(key);
  const o=$('surpriseOverlay'), b=$('surpriseActive');
  if(kind==='freeze'){
    if(b){b.hidden=true;b.textContent='';}
    // Le FREEZE fige réellement la démonstration vidéo, puis la relance automatiquement.
    const v=$('demoVideo');
    const videoWasPlaying=!!(v && !v.paused && !v.ended);
    if(v) v.pause();
    // Lecteur séparé pour les sons de surprise : n'altère pas le lecteur principal des consignes.
    const fa=$('cueAudio');
    if(soundEnabled && fa){
      try{fa.pause();fa.currentTime=0;}catch(e){}
      fa.src=freshMediaUrl('audio/freeze-compte-rebours.mp3');
      fa.play().catch(()=>{ fa.src='audio/freeze-compte-rebours.mp3'; fa.play().catch(()=>{}); });
    }
    // 5 secondes pour entendre/lire la consigne, puis 5 secondes de FREEZE décomptées.
    if(o){o.className='surprise-overlay show freeze';o.innerHTML=`<div class="surprise-icon">🧊</div><strong>FREEZE !</strong><span>Tout le monde immobile pendant 5 secondes !</span>`;}
    surpriseTimer=setTimeout(()=>{
      surpriseTimer=null;
      let n=5;
      const render=()=>{if(o){o.className='surprise-overlay show freeze';o.innerHTML=`<div class="surprise-icon">🧊</div><strong>FREEZE !</strong><span>Tout le monde immobile pendant 5 secondes !</span><div class="freeze-countdown">${n}</div>`;}};
      render();
      freezeCountdownTimer=setInterval(()=>{
        n--;
        if(n>=1){render();}
        else{
          clearInterval(freezeCountdownTimer);freezeCountdownTimer=null;
          if(o)o.classList.remove('show');
          if(videoWasPlaying && v && sessionStarted && running) v.play().catch(()=>{});
        }
      },1000);
    },5000);
    return;
  }
  // BOOST et MIROIR disposent eux aussi de leur son générique dédié.
  const surpriseAudio={boost:'audio/boost.mp3',mirror:'audio/miroir.mp3',turbo:'audio/turbo.mp3',synchro:'audio/synchro.mp3'}[kind];
  const sa=$('cueAudio');
  if(soundEnabled && surpriseAudio && sa){
    try{sa.pause();sa.currentTime=0;}catch(e){}
    sa.src=freshMediaUrl(surpriseAudio);
    sa.play().catch(()=>{sa.src=surpriseAudio;sa.play().catch(()=>{});});
  }
  if(o){o.className=`surprise-overlay show ${kind}`;o.innerHTML=`<div class="surprise-icon">${icon}</div><strong>${title}</strong><span>${text}</span>`;surpriseTimer=setTimeout(()=>o.classList.remove('show'),3200);}
  if(b){b.hidden=false;b.className=`surprise-active ${kind}`;b.textContent=`${icon} ${title} — ${text}`;setTimeout(()=>{b.hidden=true;b.textContent='';},duration*1000);}
}
function checkPlayfulSurprises(){
 if(!isPlayfulPrototype()||!sessionStarted||!running)return;
 const title=sessions[currentIndex].title, st=sessions[currentIndex].steps[stepIndex], elapsed=st.seconds-remaining;
 const E=(key,icon,label,text,kind,dur)=>showSurprise(key,icon,label,text,kind,dur);
 if(title==='Début de journée'){
  if(stepIndex===3&&elapsed>=15)E('matin-mirror','🪞','MIROIR','Suivez exactement la vidéo.','mirror',15);
  if(stepIndex===4&&elapsed>=15)E('matin-boost','🔥','BOOST 15 s','Un peu plus vite, en restant précis !','boost',15);
  if(stepIndex===6&&elapsed>=1)E('matin-synchro','🤝','SYNCHRO','Toute la classe au même rythme !','synchro',20);
 }
 if(title==='Début d’après-midi'){
  if(stepIndex===2&&elapsed>=15)E('aprem-mirror','🪞','MIROIR','Suivez exactement la vidéo.','mirror',15);
  if(stepIndex===4&&elapsed>=15)E('aprem-boost','⚡','BOOST 15 s','Relancez le rythme !','boost',15);
  if(stepIndex===6&&elapsed>=1)E('aprem-synchro','🤝','SYNCHRO','Toute la classe ensemble !','synchro',20);
 }
 if(title==='Après être resté assis'){
  if(stepIndex===1&&elapsed>=15)E('assis-mirror','🪞','MIROIR','Suivez exactement la vidéo.','mirror',15);
  if(stepIndex===2&&elapsed>=20)E('assis-boost','🔥','BOOST 20 s','On accélère !','boost',20);
  if(stepIndex===5&&elapsed>=25)E('assis-freeze','🧊','FREEZE !','Tout le monde immobile pendant 5 secondes !','freeze',10);
 }
 if(title==='Besoin de se défouler'){
  if(stepIndex===2&&elapsed>=15)E('defouler-boost','🔥','BOOST 20 s','On accélère !','boost',20);
  if(stepIndex===3&&elapsed>=20)E('defouler-freeze','🧊','FREEZE !','Tout le monde immobile pendant 5 secondes !','freeze',10);
  if(stepIndex===5&&elapsed>=15)E('defouler-turbo','⚡','TURBO 15 s','Accélère tes mouvements tout en restant précis !','turbo',15);
  if(stepIndex===6&&elapsed>=1)E('defouler-synchro','🎯','SYNCHRO 30 s','Toute la classe ensemble, exactement au même rythme !','synchro',28);
 }
 if(title==='Avant un exercice'){
  if(stepIndex===1&&elapsed>=15)E('exo-synchro-croise','🤝','SYNCHRO','Toute la classe au même rythme !','synchro',15);
  if(stepIndex===6&&elapsed>=1)E('exo-synchro','🤝','SYNCHRO','Toute la classe au même rythme, sans erreur !','synchro',20);
 }
 if(title==='Relâcher les tensions'){
  if(stepIndex===1&&elapsed>=15)E('tensions-mirror','🪞','MIROIR LENT','Suivez la vidéo le plus doucement possible.','mirror',15);
  if(stepIndex===4&&elapsed>=15)E('tensions-slow','🐢','RALENTI','Encore plus lentement… sans forcer.','slow',15);
  if(stepIndex===6&&elapsed>=15)E('tensions-release','🌿','ZÉRO TENSION','À chaque expiration, relâchez un peu plus.','challenge',20);
 }
 if(title==='Besoin de bouger un peu'){
  if(stepIndex===1&&elapsed>=12)E('bouger-silence','🤫','SILENCE','Continuez sans faire de bruit.','silence',18);
  if(stepIndex===3&&elapsed>=12)E('bouger-mirror','🪞','MIROIR','Suivez exactement la vidéo.','mirror',15);
  if(stepIndex===6&&elapsed>=12)E('bouger-synchro','🤝','SYNCHRO','Toute la classe bouge ensemble, en silence !','synchro',20);
 }
 if(title==='Respirer'){
  if(stepIndex===1&&elapsed>=12)E('respire-slow','🐢','RALENTI','Laissez la respiration ralentir.','slow',18);
  if(stepIndex===3&&elapsed>=12)E('respire-synchro','🌬️','SYNCHRO','Montez et baissez les bras au même rythme.','synchro',18);
  if(stepIndex===6&&elapsed>=10)E('respire-silence','🤫','SILENCE','Quatre respirations lentes, tous ensemble.','silence',25);
 }
 if(title==='Avant une évaluation'){
  if(stepIndex===1&&elapsed>=8)E('eval-square','◻️','DÉFI RÉGULARITÉ','Suivez le carré sans accélérer ni ralentir.','challenge',25);
  if(stepIndex===4&&elapsed>=12)E('eval-still','🤫','IMMOBILE','Gardez le corps calme et le regard posé.','silence',18);
  if(stepIndex===6&&elapsed>=10)E('eval-focus','🎯','FOCUS','Une respiration après l’autre.','challenge',22);
 }
 if(title==='Retour de récréation'){
  if(stepIndex===1&&elapsed>=1)E('pulse-one','❤️','PREMIER REPÈRE','Comptez précisément vos pulsations.','challenge',22);
  if(stepIndex===3&&elapsed>=45)E('pulse-slow','🐢','RALENTI','Allongez doucement l’expiration.','slow',25);
  if(stepIndex===4&&elapsed>=1)E('pulse-two','❤️','DEUXIÈME REPÈRE','Même méthode : comptez vos pulsations.','challenge',22);
 }
 if(title==='Express Réveil – 2′'){
  if(stepIndex===1&&elapsed>=8)E('express-reveil-mirror','🪞','MIROIR','Suivez exactement les squats de la vidéo.','mirror',12);
 }
 if(title==='Express Bouger – 2′'){
  if(stepIndex===2&&elapsed>=8)E('express-bouger-synchro','🤝','SYNCHRO','Toute la classe au même rythme !','synchro',15);
 }
 if(title==='Express Focus – 2′'){
  if(stepIndex===1&&elapsed>=8)E('express-focus-synchro','🤝','SYNCHRO','Même rythme, même coordination, tous ensemble !','synchro',15);
 }
 if(title==='Express Détente – 2′'){
  if(stepIndex===2&&elapsed>=8)E('express-detente-slow','🐢','RALENTI','Ralentissez encore le mouvement, sans forcer.','slow',15);
 }
 if(title==='Express Calme – 2′'){
  if(stepIndex===3&&elapsed>=5)E('express-calme-silence','🤫','SILENCE','Terminez ensemble par des respirations lentes.','silence',20);
 }
 if(title==='Fin de journée'){
  if(stepIndex===1&&elapsed>=12)E('fin-slow','🐢','RALENTI','Faites le mouvement encore plus lentement.','slow',18);
  if(stepIndex===4&&elapsed>=12)E('fin-silence','🤫','SILENCE','Continuez sans aucun bruit.','silence',18);
  if(stepIndex===7&&elapsed>=5)E('fin-synchro','🌬️','SYNCHRO','Terminez par une respiration calme, tous ensemble.','synchro',20);
 }
}
function startSessionClock(){
  if(running)return;running=true;$('start').hidden=true;$('pause').hidden=false;$('pause').textContent='⏸ Pause';
  interval=setInterval(()=>{remaining--;totalRemaining--;updateTimes();checkPlayfulSurprises();if(remaining<=0)nextStep();},1000);
}
function stop(){if(interval)clearInterval(interval);interval=null;running=false;}
function pause(){
  if(running){stop();$('demoVideo').pause();pauseStepAudio();$('pause').textContent='▶ Reprendre';}
  else{startSessionClock();$('demoVideo').play().catch(()=>{});resumeStepAudio();$('pause').textContent='⏸ Pause';}
}
function nextStep(){
  let was=running;stop(); stopStepAudio(); clearSurprise();
  // Si l'utilisateur avance manuellement, le chrono général saute aussi le temps restant de l'étape.
  if(remaining>0){
    totalRemaining=Math.max(0,totalRemaining-remaining);
    remaining=0;
    updateTimes();
  }
  if(stepIndex<sessions[currentIndex].steps.length-1){
    stepIndex++;loadStep();
    if(was){startSessionClock();$('demoVideo').play().catch(()=>{});playStepAudio();}
  } else finishSession();
}
function finishSession(){
  if(finishing)return;finishing=true;
  stop(); clearSurprise(); $('demoVideo').pause(); stopStepAudio();
  exitFullscreen();
  const isPulse=currentIndex!==null && sessions[currentIndex].title==='Retour de récréation';
  const finish=$('finish'), finishText=$('finishText'), pulseAlt=$('pulseAlt');
  finish.classList.toggle('pulse-result',isPulse);
  if(isPulse){
    finish.querySelector('h2').textContent='RÉUSSI ! Mon pouls a diminué.';
    finishText.textContent='';
    finishText.hidden=true;
    pulseAlt.hidden=false;
    pulseAlt.textContent="IDENTIQUE OU PLUS ÉLEVÉ ? Ce n'est pas grave : j'ai appris à observer mon corps.";
  }else{
    finish.querySelector('h2').textContent='On reprend le cours !';
    finishText.hidden=false;
    finishText.textContent=(sessions[currentIndex]?.express?'2 minutes de pause express. La classe peut reprendre le cours.':'5 minutes de mouvement. La classe peut reprendre le cours.');
    pulseAlt.hidden=true;
    pulseAlt.textContent='';
  }
  $('player').classList.remove('open');finish.classList.add('open');
  window.scrollTo({top:0,behavior:'smooth'});
  playAudio('audio/fin.mp3',()=>{finishing=false;});
}
function goHome(){
  document.body.classList.remove('pause-prestart');
  
  stop(); resetAudio(); finishing=false;countdownRunning=false;sessionStarted=false;$('countdown').classList.remove('open');exitFullscreen();
  const v=$('demoVideo');v.pause();v.removeAttribute('src');v.load();
  $('player').classList.remove('open');$('finish').classList.remove('open');$('home').classList.remove('hidden');$('demo').classList.remove('prestart');$('start').hidden=false;$('pause').hidden=true;$('next').hidden=true;currentIndex=null;window.scrollTo({top:0,behavior:'smooth'});
}
function enterFullscreen(){
  const panel=$('projectionPanel');
  if(panel) panel.classList.add('projector-mode');
}
function exitFullscreen(){
  const panel=$('projectionPanel');
  if(panel) panel.classList.remove('projector-mode');
}

$('back').onclick=goHome;$('finishBtn').onclick=goHome;$('homeDuringSession').onclick=goHome;$('start').onclick=start;$('pause').onclick=pause;$('next').onclick=nextStep;
renderFilters();renderSessions();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}

updateSoundUI();


updateSoundUI();

updateSoundUI();

if($('sessionSoundToggle')) $('sessionSoundToggle').addEventListener('click', toggleSound);
updateSoundUI();


// V25h — Bouger & Apprendre · Mathématiques 6e · lecture 100 % automatique
const mathQuiz=[
 {q:'7 × 8 = ?',a:['54','56','64'],ok:1},
 {q:'125 + 75 = ?',a:['200','190','180'],ok:0},
 {q:'La moitié de 90 est…',a:['40','45','50'],ok:1},
 {q:'6 × 9 = ?',a:['54','48','56'],ok:0},
 {q:'300 ÷ 6 = ?',a:['40','60','50'],ok:2}
];
const mathMoves=[
 {label:"🙌 Bras en l'air",video:'videos/besoin-de-se-defouler-02-directs.mp4'},
 {label:'🪑 Demi-squats',video:'videos/apres-etre-reste-assis-02-demi-squats.mp4'},
 {label:'🦵 Genoux alternés',video:'videos/apres-etre-reste-assis-04-genoux-alternes.mp4'}
];
let mathI=0,mathTimer=null,mathTimeout=null;
function mathClear(){clearInterval(mathTimer);clearTimeout(mathTimeout);document.querySelectorAll('#mathProto video').forEach(v=>v.pause());}
function mathPlayVisible(){document.querySelectorAll('#mathProto .math-stage:not([hidden]) video').forEach(v=>v.play().catch(()=>{}));}
function mathShow(id){['mathIntro','mathQuestion','mathResult','mathFinish'].forEach(x=>{const e=document.getElementById(x);if(e)e.hidden=x!==id;});setTimeout(mathPlayVisible,30);}
function countdown(id,seconds,onDone,onTick){let n=seconds;const e=document.getElementById(id);if(e)e.textContent=n;if(onTick)onTick(n,seconds);clearInterval(mathTimer);mathTimer=setInterval(()=>{n--;if(e)e.textContent=Math.max(0,n);if(onTick)onTick(Math.max(0,n),seconds);if(n<=0){clearInterval(mathTimer);onDone();}},1000);}
function openMathProto(){mathClear();document.body.classList.add('math-mode');document.getElementById('home').hidden=true;document.getElementById('mathProto').hidden=false;mathI=0;document.getElementById('mathProgress').textContent='1 / 5';mathShow('mathIntro');window.scrollTo(0,0);mathPlayAudio('audio/maths-consigne.mp3');}
function closeMathProto(){mathClear();document.body.classList.remove('math-mode');document.getElementById('mathProto').hidden=true;document.getElementById('home').hidden=false;window.scrollTo(0,0);}
function mathPlayAudio(src){try{const a=new Audio(src);a.play().catch(()=>{});}catch(e){}}
function mathLoad(){mathClear();const x=mathQuiz[mathI];document.getElementById('mathNum').textContent=mathI+1;document.getElementById('mathProgress').textContent=(mathI+1)+' / '+mathQuiz.length;document.getElementById('mathQ').textContent=x.q;['mathA','mathB','mathC'].forEach((id,i)=>document.getElementById(id).textContent=x.a[i]);mathShow('mathQuestion');countdown('mathQuestionCount',15,mathReveal,(n,total)=>{const f=document.getElementById('mathClockFill');if(f)f.style.width=(n/total*100)+'%';});}
function mathReveal(){mathClear();const x=mathQuiz[mathI],m=mathMoves[x.ok];document.getElementById('mathCorrect').textContent='✓ '+x.a[x.ok]+' !';const v=document.getElementById('mathVideo');v.src=m.video;v.currentTime=0;mathShow('mathResult');countdown('mathCountdown',10,()=>{if(++mathI>=mathQuiz.length)mathFinish();else mathLoad();});}
function mathFinish(){mathClear();mathPlayAudio('audio/maths-defi-termine.mp3');document.getElementById('mathProgress').textContent='5 / 5';mathShow('mathFinish');countdown('mathFinishCount',8,closeMathProto);}
function mathAdvanceFromResult(){mathClear();if(++mathI>=mathQuiz.length)mathFinish();else mathLoad();}
document.addEventListener('DOMContentLoaded',()=>{const b=document.getElementById('mathProtoBtn');if(b)b.onclick=openMathProto;const back=document.getElementById('mathBack');if(back)back.onclick=closeMathProto;const start=document.getElementById('mathStart');if(start)start.onclick=mathLoad;const skip=document.getElementById('mathSkip');if(skip)skip.onclick=mathReveal;const resultSkip=document.getElementById('mathResultSkip');if(resultSkip)resultSkip.onclick=mathAdvanceFromResult;});
