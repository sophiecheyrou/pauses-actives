
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

const cats={
 BOOST:{icon:'⚡',label:'Se réveiller',desc:'Retrouver de l’énergie'},MOVE:{icon:'🔥',label:'Bouger',desc:'Mettre le corps en mouvement'},FOCUS:{icon:'🎯',label:'Se concentrer',desc:'Mobiliser son attention'},RESET:{icon:'🌿',label:"S’étirer",desc:'Délier et mobiliser le corps'},RELAX:{icon:'🧘',label:'Se calmer',desc:'Respirer et relâcher'}
};
const P=(phase,name,seconds,icon,instruction,seated,video,audio=null)=>({phase,name,seconds,icon,instruction,seated,video,audio});
const sessions=[
{cat:'BOOST',title:'Début de journée',tag:'Énergie immédiate',intensity:2,steps:[P('MISE EN ROUTE','Marche tranquille',20,'🚶','Debout derrière ta chaise. Marche tranquillement sur place.','Marche assis en alternant les pieds.','videos/marche.mp4','audio/marche.mp3'),P('ACTIVATION','Marche active',40,'⚡','Accélère. Les bras accompagnent le mouvement.','Pieds et bras dynamiques.','videos/marche-active.mp4','audio/marche-active.mp3'),P('ACTIVATION','Talons-fesses',40,'🦵','Alterne les talons vers l’arrière. Reste léger et droit.','Talons alternés vers l’avant.','videos/talons-fesses.mp4','audio/talons-fesses.mp3'),P('JAMBES','Squats',40,'⬇️','Recule légèrement le bassin et remonte. Va à ton rythme.','Extensions alternées des jambes.','videos/squats.mp4','audio/squats.mp3'),P('CARDIO','Genoux alternés',40,'🔥','Monte un genou puis l’autre. Trouve ton rythme.','Genoux alternés assis.','videos/genoux.mp4','audio/genoux.mp3'),P('CARDIO','Boxe',60,'🥊','Droite, gauche. Les coups restent contrôlés. Accélère progressivement.','Même mouvement assis.','videos/boxe.mp4','audio/boxe.mp3'),P('CHALLENGE','30 secondes',30,'🎯','Combien de montées de genoux peux-tu réaliser proprement ?','Même défi assis.','videos/genoux.mp4','audio/challenge-genoux.mp3'),P('RESET','Respire',30,'🌬️','Ralentis. Inspire… expire lentement. Relâche les épaules.','Identique assis.','videos/respire.mp4','audio/respire.mp3')]},
{cat:'BOOST',title:'Début d’après-midi',tag:'Relancer sans s’épuiser',intensity:2,steps:[P('MOBILITÉ','Grandir',30,'↕️','Monte les bras. Grandis-toi. Relâche.','Identique assis.','videos/grandir.mp4','audio/grandir.mp3'),P('ACTIVATION','Pas droite-gauche',40,'↔️','Droite. Centre. Gauche. Centre.','Tapote alternativement les pieds.','videos/pas-lateraux.mp4','audio/droite-gauche.mp3'),P('ACTIVATION','Montée sur pointes',40,'🦶','Monte sur les pointes puis redescends doucement.','Talons levés puis reposés.','videos/pointes.mp4','audio/pointes.mp3'),P('COORDINATION','Coude-genou croisé',40,'✕','Coude droit, genou gauche. Puis inverse.','Identique assis.','videos/coude-genou.mp4','audio/coude-genou.mp3'),P('CARDIO','Marche turbo',50,'🚶','Marche vite. Bras actifs. Encore un peu plus vite.','Pieds et bras rapides.','videos/marche-turbo.mp4','audio/marche-turbo.mp3'),P('JAMBES','Squat + bras',50,'🙌','Descends légèrement. Remonte en levant les bras.','Bras hauts + extension de jambes.','videos/squat-bras.mp4','audio/squat-bras.mp3'),P('CHALLENGE','Classe synchro',25,'🎯','Toute la classe peut-elle tenir le même rythme ?','Identique assis.','videos/synchro.mp4','audio/challenge-rythme.mp3'),P('RESET','Respire',25,'🌬️','Inspire trois secondes. Souffle lentement.','Identique assis.','videos/respire.mp4','audio/sophro.mp3')]},
{cat:'MOVE',title:'Full Body',tag:'Tout le corps en 5 min',intensity:3,steps:[P('MOBILITÉ','Cercles d’épaules',30,'🔄','Grands cercles vers l’arrière.','Identique assis.','videos/epaules.mp4','audio/epaules.mp3'),P('JAMBES','Demi-squats',40,'⬇️','Descends légèrement et remonte. Mouvement fluide.','Extensions alternées.','videos/demi-squats.mp4','audio/demi-squats.mp3'),P('HAUT DU CORPS','Poussées devant',40,'🙌','Pousse les deux mains devant toi puis ramène.','Identique assis.','videos/poussees.mp4','audio/poussees.mp3'),P('CARDIO','Genoux alternés',40,'🔥','Genou droit, gauche. Accélère progressivement.','Genoux alternés assis.','videos/genoux.mp4','audio/genoux.mp3'),P('JAMBES','Squat + pointes',40,'⬆️','Un squat puis monte sur la pointe des pieds.','Extensions + pointes.','videos/squat-pointes.mp4','audio/squat-pointes.mp3'),P('COMBO','Deux genoux + squat',50,'🔁','Deux genoux puis un squat. Recommence.','Deux genoux puis deux extensions.','videos/combo.mp4','audio/combo-genoux-squat.mp3'),P('CHALLENGE','Sans arrêter',30,'⏱️','Tiens 30 secondes en gardant un mouvement propre.','Même défi assis.','videos/challenge.mp4','audio/challenge-fullbody.mp3'),P('RESET','Marche douce',30,'🌬️','Marche doucement. Relâche les bras. Respire.','Pieds doux + respiration.','videos/respire.mp4','audio/marche-douce.mp3')]},
{cat:'MOVE',title:'Boxing Break',tag:'Dynamique et défoulant',intensity:3,steps:[P('GARDE','Mise en garde',30,'🥊','Pieds stables. Mains devant. Épaules relâchées.','Dos droit, mains en garde.','videos/garde.mp4','audio/garde.mp3'),P('TECHNIQUE','Directs',40,'👊','Droite. Gauche. Droite. Gauche.','Identique assis.','videos/directs.mp4','audio/directs.mp3'),P('TECHNIQUE','Double direct',40,'🥊','Droite-gauche… pause… droite-gauche.','Identique assis.','videos/double-direct.mp4','audio/double-direct.mp3'),P('COORDINATION','Direct + esquive',40,'↙️','Deux directs puis légère flexion.','Deux directs puis légère inclinaison.','videos/esquive.mp4','audio/direct-esquive.mp3'),P('TECHNIQUE','Uppercuts',40,'⬆️','Alterne les bras de bas en haut. Sans forcer.','Identique assis.','videos/uppercuts.mp4','audio/uppercuts.mp3'),P('COMBO','Droite-gauche-droite-esquive',50,'🔥','Enchaîne : droite, gauche, droite, esquive.','Même combo assis.','videos/combo-boxe.mp4','audio/combo-boxe.mp3'),P('CHALLENGE','Classe synchro',30,'🎯','Toute la classe ensemble. Ne perdez pas le rythme !','Identique assis.','videos/synchro-boxe.mp4','audio/challenge-boxe.mp3'),P('RESET','Relâche',30,'🌬️','Ouvre les mains. Secoue les bras. Inspire. Souffle.','Identique assis.','videos/respire.mp4','audio/respire-boxe.mp3')]},
{cat:'FOCUS',title:'Droite / Gauche',tag:'Coordination & attention',intensity:2,steps:[P('COORDINATION','Même côté',30,'✋','Main droite sur genou droit. Puis gauche.','Identique assis.','videos/meme-cote.mp4','audio/main-genou.mp3'),P('COORDINATION','Croisé main-genou',40,'✕','Main droite sur genou gauche. Puis inverse.','Identique assis.','videos/croise.mp4','audio/main-genou-croise.mp3'),P('COORDINATION','Coude-genou opposé',40,'🧠','Coude droit vers genou gauche. Puis inverse.','Identique assis.','videos/coude-genou.mp4','audio/coude-genou-croise.mp3'),P('RYTHME','Deux croisés + clap',40,'👏','Deux touches croisées puis un clap.','Identique assis.','videos/croise-clap.mp4','audio/croise-clap.mp3'),P('RYTHME','Trois marches + clap',40,'🚶','Trois marches sur place puis clap.','Trois tapotements puis clap.','videos/marche-clap.mp4','audio/marche-clap.mp3'),P('SÉQUENCE','Croisé-croisé-clap-pause',50,'🎯','Enchaîne sans perdre la séquence.','Identique assis.','videos/sequence.mp4','audio/sequence-croisee.mp3'),P('CHALLENGE','Sans erreur',30,'🧠','Tiens 30 secondes. Si tu te trompes, reprends immédiatement.','Identique assis.','videos/sequence.mp4','audio/challenge-erreur.mp3'),P('RESET','Regard fixe',30,'👁️','Fixe un point et ralentis ta respiration.','Identique assis.','videos/regard.mp4','audio/focus-respire.mp3')]},
{cat:'FOCUS',title:'Code secret',tag:'Bouger + mémoriser',intensity:2,steps:[P('APPRENTISSAGE','Apprends le code',30,'🔐','1 = bras haut · 2 = clap · 3 = genou · 4 = croisé.','Identique assis.','videos/code.mp4','audio/code-intro.mp3'),P('SÉQUENCE','1 – 2 – 1 – 2',30,'1️⃣','Mémorise puis réalise la séquence.','Identique assis.','videos/code.mp4','audio/code-1212.mp3'),P('SÉQUENCE','3 – 2 – 3 – 2',30,'3️⃣','Mémorise puis réalise la séquence.','Identique assis.','videos/code.mp4','audio/code-3232.mp3'),P('SÉQUENCE','1 – 3 – 2',40,'🧠','Regarde 5 secondes puis continue sans regarder.','Identique assis.','videos/code.mp4','audio/code-132.mp3'),P('SÉQUENCE','4 – 2 – 1 – 3',40,'🔐','Nouvelle séquence. Garde le rythme.','Identique assis.','videos/code.mp4','audio/code-4213.mp3'),P('SÉQUENCE','2 – 4 – 3 – 1 – 2',50,'🎯','Mémorise et répète.','Identique assis.','videos/code.mp4','audio/code-24312.mp3'),P('CHALLENGE','1 – 4 – 2 – 3 – 3 – 1',50,'🔥','Défi final : retiens toute la suite.','Identique assis.','videos/code.mp4','audio/code-final.mp3'),P('RESET','Respiration',30,'🌬️','Relâche les bras et respire calmement.','Identique assis.','videos/respire.mp4','audio/code-respire.mp3')]},
{cat:'RESET',title:'Dos & épaules',tag:'Après une longue période assise',intensity:1,steps:[P('MOBILITÉ','Cercles épaules',40,'🔄','Lentement vers l’arrière.','Identique assis.','videos/epaules.mp4','audio/cercles-epaules.mp3'),P('OUVERTURE','Ouvrir la poitrine',40,'↔️','Ouvre les bras. Rapproche doucement les omoplates.','Identique assis.','videos/poitrine.mp4','audio/ouvrir-poitrine.mp3'),P('ÉTIREMENT','Bras haut',40,'🙌','Grandis-toi vers le plafond.','Identique assis.','videos/grandir.mp4','audio/bras-haut.mp3'),P('MOBILITÉ','Rotation du buste',40,'🌿','Droite… centre… gauche.','Identique assis.','videos/rotation.mp4','audio/rotation-buste.mp3'),P('DOS','Dos rond / dos long',40,'↕️','Arrondis légèrement. Puis redresse-toi.','Identique assis.','videos/dos.mp4','audio/dos-rond-grand.mp3'),P('GLOBAL','Mobilité générale',50,'🌿','Bras haut, bras ouverts, relâche.','Identique assis.','videos/mobilite.mp4','audio/mobilite.mp3'),P('RESET','Respiration',50,'🌬️','Inspire en grandissant. Expire en relâchant.','Identique assis.','videos/respire.mp4','audio/respire-etirement.mp3')]},
{cat:'RESET',title:'Déverrouillage',tag:'Mobilité douce',intensity:1,steps:[P('MAINS','Poignets',35,'🤲','Cercles de poignets dans les deux sens.','Identique assis.','videos/poignets.mp4','audio/poignets.mp3'),P('BRAS','Coudes',35,'💪','Plie et tends doucement les bras.','Identique assis.','videos/coudes.mp4','audio/coudes.mp3'),P('ÉPAULES','Épaules',35,'🔄','Grands cercles, sans forcer.','Identique assis.','videos/epaules.mp4','audio/epaules-mobilite.mp3'),P('TRONC','Buste',35,'🌿','Tourne doucement à droite et à gauche.','Identique assis.','videos/rotation.mp4','audio/buste.mp3'),P('JAMBES','Genoux',35,'🦵','Plie et tends légèrement les jambes.','Extensions alternées.','videos/genoux-doux.mp4','audio/genoux-mobilite.mp3'),P('PIEDS','Chevilles',35,'🦶','Pointes puis talons.','Identique assis.','videos/chevilles.mp4','audio/chevilles.mp3'),P('GLOBAL','Corps entier',45,'🙌','Grandis-toi puis relâche tout le corps.','Identique assis.','videos/mobilite.mp4','audio/corps-entier.mp3'),P('RESET','Respiration',45,'🌬️','Inspire par le nez, souffle doucement.','Identique assis.','videos/respire.mp4','audio/respire-deverrouillage.mp3')]},
{cat:'RELAX',title:'Respire',tag:'Faire redescendre la pression',intensity:1,steps:[P('INSTALLATION','Position confortable',30,'🧘','Pieds au sol. Épaules basses. Regard devant.','Pieds au sol, dos confortable.','videos/posture.mp4','audio/position-calme.mp3'),P('SOUFFLE','Inspire 3 / expire 4',40,'🌬️','Inspire 3 secondes. Expire 4 secondes.','Identique assis.','videos/respire.mp4','audio/respiration-3-4.mp3'),P('RELÂCHEMENT','Monter / relâcher épaules',40,'🌿','Monte les épaules à l’inspiration. Relâche à l’expiration.','Identique assis.','videos/epaules-relax.mp4','audio/epaules-relache.mp3'),P('MOBILITÉ','Lever / baisser les bras',40,'🙌','Monte et descends les bras très lentement.','Identique assis.','videos/bras-lents.mp4','audio/bras-respiration.mp3'),P('NUQUE','Mobilité douce',40,'👀','Tourne très légèrement la tête, sans forcer.','Identique assis.','videos/nuque.mp4','audio/nuque.mp3'),P('SOUFFLE','Expiration longue',50,'🌬️','Inspire naturellement. Allonge doucement l’expiration.','Identique assis.','videos/respire.mp4','audio/expiration-longue.mp3'),P('RESET','4 respirations lentes',40,'🧘','Quatre respirations tranquilles.','Identique assis.','videos/respire.mp4','audio/quatre-respirations.mp3'),P('REPRISE','Silence & reprise',20,'👁️','Une dernière respiration. Regarde devant toi.','Identique assis.','videos/regard.mp4','audio/silence-reprise.mp3')]},
{cat:'RELAX',title:'Reset mental',tag:'Relâcher & repartir',intensity:1,steps:[P('DÉTENTE','Secouer mains et bras',30,'🤲','Secoue doucement les mains et les avant-bras.','Identique assis.','videos/secouer.mp4','audio/secoue-mains.mp3'),P('RELÂCHEMENT','Épaules',40,'↕️','Monte les épaules puis relâche-les.','Identique assis.','videos/epaules-relax.mp4','audio/relache-epaules.mp3'),P('ÉTIREMENT','S’étirer vers le haut',40,'🙌','Grandis-toi vers le plafond. Respire normalement.','Identique assis.','videos/grandir.mp4','audio/etire-haut.mp3'),P('SOUFFLE','Ouvrir / refermer',40,'🌬️','Inspire en ouvrant les bras. Expire en les refermant.','Identique assis.','videos/ouvrir-fermer.mp4','audio/ouvre-ferme.mp3'),P('TENSION / DÉTENTE','Poings 3 secondes',40,'✊','Serre doucement les poings 3 secondes puis relâche.','Identique assis.','videos/poings.mp4','audio/poings.mp3'),P('TENSION / DÉTENTE','Épaules 3 secondes',40,'🌿','Monte légèrement les épaules 3 secondes puis relâche.','Identique assis.','videos/epaules-relax.mp4','audio/tension-epaules.mp3'),P('RESET','Respiration calme',40,'🌬️','Laisse la respiration ralentir.','Identique assis.','videos/respire.mp4','audio/respiration-calme.mp3'),P('REPRISE','Immobilité',30,'🧘','Reste immobile. Une dernière respiration. On reprend.','Identique assis.','videos/posture.mp4','audio/retour-calme.mp3')]}
,
{cat:'FOCUS',title:'Avant une évaluation',tag:'Apaiser le stress · respirer · se recentrer',intensity:1,steps:[
P('S’ANCRER','Points de contact',40,'🪑','Sens tes appuis.','Sens tes appuis sur la chaise.','videos/posture.mp4','audio/position-calme.mp3'),
P('RESPIRER','Carré respiratoire',50,'◻️','Inspire · pause · expire · pause.','Même respiration, sans forcer.','videos/respire.mp4','audio/respiration-3-4.mp3'),
P('RELÂCHER','Mains',35,'🤲','Serre… puis relâche.','Même mouvement.','videos/poings.mp4','audio/poings.mp3'),
P('RELÂCHER','Épaules',40,'🌿','Monte… puis relâche.','Même mouvement.','videos/epaules-relax.mp4','audio/tension-epaules.mp3'),
P('S’ANCRER','Corps immobile',40,'🧘','Sens ton corps immobile.','Sens chaise, dos, mains, pieds.','videos/posture.mp4','audio/retour-calme.mp3'),
P('SE RECENTRER','Un point',45,'👁️','Fixe un point.','Mains relâchées.','videos/regard.mp4','audio/focus-respire.mp3'),
P('RESPIRER','Souffle calme',50,'🌬️','Respire naturellement.','Posture confortable.','videos/respire.mp4','audio/respiration-calme.mp3')]},
{cat:'RELAX',title:'Retour de récréation',tag:'Faire redescendre l’activation · observer son rythme · se recentrer',intensity:1,steps:[
P('OBSERVER','Mon rythme au départ',40,'❤️','Compte 15 secondes.','Assis, reste calme.','videos/posture.mp4','audio/position-calme.mp3'),
P('S’INSTALLER','Points de contact',35,'🪑','Sens tes appuis.','Sens la chaise et tes appuis.','videos/posture.mp4','audio/retour-calme.mp3'),
P('RESPIRER','Souffle long',50,'🌬️','Souffle plus longtemps.','Épaules relâchées.','videos/respire.mp4','audio/expiration-longue.mp3'),
P('RELÂCHER','Épaules',40,'🌿','Monte… puis relâche.','Même mouvement.','videos/epaules-relax.mp4','audio/epaules-relache.mp3'),
P('RESPIRER','Carré respiratoire',45,'◻️','Inspire · pause · expire · pause.','Même respiration, sans forcer.','videos/respire.mp4','audio/respiration-3-4.mp3'),
P('SE RECENTRER','Regard calme',40,'👁️','Fixe un point.','Mains posées.','videos/regard.mp4','audio/focus-respire.mp3'),
P('OBSERVER','Mon rythme maintenant',50,'❤️','Compte 15 secondes.','Compare simplement.','videos/posture.mp4','audio/silence-reprise.mp3')]},
{cat:'RELAX',title:'Fin de journée',tag:'Délier, relâcher et terminer calmement',intensity:1,steps:[
P('MOBILITÉ','Poignets',35,'🤲','Bouge doucement les poignets.','Même mouvement.','videos/poignets.mp4','audio/poignets.mp3'),
P('RELÂCHEMENT','Épaules',40,'🔄','Fais rouler les épaules.','Même mouvement.','videos/epaules.mp4','audio/cercles-epaules.mp3'),
P('OUVERTURE','Poitrine',40,'↔️','Ouvre… puis relâche.','Sans cambrer.','videos/poitrine.mp4','audio/ouvrir-poitrine.mp3'),
P('MOBILITÉ','Rotation',40,'🌿','Tourne doucement le buste.','Amplitude confortable.','videos/rotation.mp4','audio/rotation-buste.mp3'),
P('ÉTIREMENT','Grandir',35,'🙌','Grandis-toi… relâche.','Même mouvement.','videos/grandir.mp4','audio/etire-haut.mp3'),
P('DÉTENTE','Mains et bras',40,'🤲','Secoue doucement les mains.','Même mouvement.','videos/secouer.mp4','audio/secoue-mains.mp3'),
P('SOUFFLE','Respiration calme',40,'🌬️','Respire lentement.','Épaules relâchées.','videos/respire.mp4','audio/respiration-calme.mp3'),
P('FIN','Immobilité',30,'🧘','Reste immobile.','Posture confortable.','videos/posture.mp4','audio/retour-calme.mp3')]}

];

let soundEnabled=true;
let filter='ALL', currentIndex=null, stepIndex=0, remaining=0, totalRemaining=300, interval=null, running=false, countdownRunning=false, finishing=false;
const $=id=>document.getElementById(id);
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
  const extra={BOOST:'Pour bien commencer ou relancer l’énergie',MOVE:'Pour se dynamiser et faire monter l’énergie',FOCUS:'Pour retrouver son calme et être plus attentif',RESET:'Pour relâcher les tensions et mobiliser le corps',RELAX:'Pour se recentrer et aborder la suite sereinement'};
  $('filters').innerHTML=order.map(k=>`<button class="filter ${filter===k?'active':''}" data-cat="${k}" type="button"><span class="filter-icon">${cats[k].icon}</span><b>${cats[k].label}</b><small>${extra[k]}</small></button>`).join('');
  document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{filter=btn.dataset.cat;renderFilters();renderSessions();$('sessionHeading').textContent=`${cats[filter].label} · choisir une pause`;setTimeout(()=>$('sessions').scrollIntoView({behavior:'smooth',block:'start'}),60);});
}
function renderSessions(){
  const list=sessions.map((s,i)=>({s,i})).filter(x=>filter==='ALL'||x.s.cat===filter);
  $('sessions').innerHTML=list.map(({s,i})=>`<button class="session cat-${s.cat}" type="button" data-i="${i}"><div class="cat">${cats[s.cat].icon} ${cats[s.cat].label}</div><h3>${s.title}</h3><p>${s.tag}</p>${s.steps.every(st=>st.seated && st.seated.trim())?'<div class="seated-badge" title="Tous les exercices disposent d’une adaptation en position assise">🪑 <span>Adaptation assise possible</span></div>':''}<div class="meta"><span>5 minutes</span><span>Intensité ${'●'.repeat(s.intensity)}${'○'.repeat(3-s.intensity)}</span></div></button>`).join('');
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
  let done=false;
  const finish=()=>{
    if(done)return; done=true;
    a.onended=null; a.onerror=null;
    onDone?.();
  };
  a.pause();
  a.onended=finish; a.onerror=finish;
  a.src=src;
  try{a.currentTime=0;}catch(e){}
  // Important : ne pas appeler load() entre le clic et play() dans Safari.
  const promise=a.play();
  if(promise && typeof promise.catch==='function') promise.catch(finish);
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
  
  stop(); resetAudio(); finishing=false; countdownRunning=false; sessionStarted=false;
  currentIndex=i; stepIndex=0; totalRemaining=300;
  $('home').classList.add('hidden'); $('finish').classList.remove('open'); $('player').classList.add('open'); $('demo').classList.add('prestart');
  let s=sessions[i]; $('playerCat').textContent=`${cats[s.cat].icon} ${cats[s.cat].label}`; $('playerTitle').textContent=s.title;
  $('start').hidden=false;$('pause').hidden=true;$('next').hidden=true;$('start').textContent='▶ Démarrer';
  loadStep();
  playAudio('audio/depart.mp3');
  window.scrollTo({top:0,behavior:'smooth'});
}
function loadStep(){
  let s=sessions[currentIndex].steps[stepIndex]; remaining=s.seconds;
  $('phaseLabel').textContent=s.phase; $('moveName').textContent=s.name; $('moveIcon').textContent=s.icon;
  $('instruction').textContent='🧍 DEBOUT : '+s.instruction;
  const si=$('seatedInstruction');
  if(si){si.hidden=!(s.seated&&s.seated.trim());si.textContent=s.seated?'🪑 ASSIS : '+s.seated:'';}
  loadVideo(s.video); renderTimeline(); updateTimes();
}
function loadVideo(src){
  const v=$('demoVideo'), d=$('demo');
  d.classList.remove('has-video');
  v.pause(); v.onloadeddata=null; v.onerror=null; v.removeAttribute('src'); v.load();
  if(!src) return;
  v.src=src;
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
function updateTimes(){$('phaseTime').textContent=fmt(remaining);$('total').textContent=fmt(totalRemaining);$('progressBar').style.width=((300-totalRemaining)/3)+'%';}

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
  
  if(running||countdownRunning)return;
  enterFullscreen();
  $('demo').classList.remove('prestart');
  sessionStarted=true;
  $('next').hidden=false;
  startSessionClock();
  $('demoVideo').play().catch(()=>{});
  playStepAudio();
}
function startSessionClock(){
  if(running)return;running=true;$('start').hidden=true;$('pause').hidden=false;$('pause').textContent='⏸ Pause';
  interval=setInterval(()=>{remaining--;totalRemaining--;updateTimes();if(remaining<=0)nextStep();},1000);
}
function stop(){if(interval)clearInterval(interval);interval=null;running=false;}
function pause(){
  if(running){stop();$('demoVideo').pause();pauseStepAudio();$('pause').textContent='▶ Reprendre';}
  else{startSessionClock();$('demoVideo').play().catch(()=>{});resumeStepAudio();$('pause').textContent='⏸ Pause';}
}
function nextStep(){
  let was=running;stop(); stopStepAudio();
  if(stepIndex<sessions[currentIndex].steps.length-1){
    stepIndex++;loadStep();
    if(was){startSessionClock();$('demoVideo').play().catch(()=>{});playStepAudio();}
  } else finishSession();
}
function finishSession(){
  if(finishing)return;finishing=true;
  stop(); $('demoVideo').pause(); stopStepAudio();
  exitFullscreen();
  $('player').classList.remove('open');$('finish').classList.add('open');
  window.scrollTo({top:0,behavior:'smooth'});
  playAudio('audio/fin.mp3',()=>{finishing=false;});
}
function goHome(){
  
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
