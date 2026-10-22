'use strict';
/* Weekly v2 */
/* ---------- Stickers (thin line-art SVG, 32x32) ---------- */
const S = {
 camera:['Record / YouTube','<rect x="4" y="9" width="24" height="17" rx="3"/><path d="M11 9l2-3h6l2 3"/><circle cx="16" cy="17.5" r="5"/><circle cx="23.5" cy="12.5" r=".6"/>'],
 bible:['Bible Study','<path d="M8 4h16v24H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M6 25a2 2 0 0 1 2-2h16"/><path d="M16 8v10M12.5 11.5h7"/>'],
 run:['Run','<path d="M4 22c0-3 1-6 3-8l3 2c2-1 3-3 4-5l3 2c1 3 4 4 8 5 2 .5 3 2 3 4H4z"/><path d="M4 22v3h25v-3M11 16l1.5-1.5M13.5 18l1.5-1.5"/>'],
 rest:['Rest Day','<path d="M7 15v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3"/><path d="M4 15a2 2 0 0 1 4 0v3h16v-3a2 2 0 0 1 4 0v7H4z"/><path d="M6 22v3M26 22v3"/>'],
 church:['Church','<path d="M16 3v6M13.5 5.5h5"/><path d="M9 15l7-6 7 6v13H9z"/><path d="M5 28V19l4-3M27 28V19l-4-3M14 28v-5a2 2 0 0 1 4 0v5M3 28h26"/>'],
 gym:['Gym','<path d="M10 16h12"/><rect x="5" y="10" width="5" height="12" rx="1"/><rect x="22" y="10" width="5" height="12" rx="1"/><path d="M3 13v6M29 13v6"/>'],
 meal:['Meal Prep','<rect x="4" y="12" width="24" height="13" rx="3"/><path d="M4 16h24M16 16v9M7 12l1-3h16l1 3"/>'],
 read:['Read','<path d="M16 8c-3-2-7-3-12-3v19c5 0 9 1 12 3 3-2 7-3 12-3V5c-5 0-9 1-12 3z"/><path d="M16 8v19"/>'],
 pray:['Prayer / Devotion','<path d="M16 5c-1 3-3 6-3 11v5l-4 6M16 5c1 3 3 6 3 11v5l4 6"/><path d="M13 21l3 2 3-2"/>'],
 family:['Family Time','<circle cx="10" cy="9" r="3"/><circle cx="22" cy="9" r="3"/><circle cx="16" cy="17" r="2.5"/><path d="M4 27v-8a6 6 0 0 1 12 0M16 19a6 6 0 0 1 12 0v8M12 27v-3a4 4 0 0 1 8 0v3"/>'],
 date:['Date Night','<path d="M16 27S5 20 5 12a5.5 5.5 0 0 1 11-2 5.5 5.5 0 0 1 11 2c0 8-11 15-11 15z"/>'],
 school:['School Pickup','<path d="M5 13h22v9H5z"/><path d="M5 22v3h4v-3M23 22v3h4v-3M5 13l3-6h16l3 6M9 17h3M20 17h3"/>'],
 study:['Study','<path d="M3 12l13-6 13 6-13 6z"/><path d="M8 14.5V21c3 3 13 3 16 0v-6.5M29 12v7"/>'],
 work:['Work','<rect x="4" y="10" width="24" height="16" rx="2"/><path d="M12 10V7h8v3M4 16h24M15 16v3h2v-3"/>'],
 groceries:['Groceries','<path d="M3 5h4l3 15h15l3-10H9"/><circle cx="12" cy="25" r="1.8"/><circle cx="23" cy="25" r="1.8"/>'],
 clean:['Cleaning','<path d="M20 4l-6 12M10 16h10l2 11H8z"/><path d="M12 21v6M16 21v6"/>'],
 water:['Water','<path d="M16 4C12 10 8 14 8 19a8 8 0 0 0 16 0c0-5-4-9-8-15z"/><path d="M12 20a4 4 0 0 0 4 4"/>'],
 sleep:['Sleep','<path d="M24 20A10 10 0 0 1 12 6a10 10 0 1 0 12 14z"/><path d="M20 5h5l-5 5h5"/>'],
 walk:['Walk','<circle cx="17" cy="5" r="2"/><path d="M15 10l-4 4v5M15 10l3 4 4 1M15 10l-1 9 4 4 1 5M14 19l-4 9"/>'],
 music:['Music','<path d="M12 23V7l14-3v16"/><circle cx="8.5" cy="23" r="3.5"/><circle cx="22.5" cy="20" r="3.5"/><path d="M12 12l14-3"/>'],
 write:['Writing','<path d="M22 4l6 6-15 15H7v-6z"/><path d="M19 7l6 6M4 28h24"/>'],
 call:['Call','<path d="M8 4h5l2 7-3 2c1.5 3 4 5.5 7 7l2-3 7 2v5a2 2 0 0 1-2 2C14 26 6 18 6 6a2 2 0 0 1 2-2z"/>'],
 errands:['Errands','<path d="M16 28s-9-8-9-15a9 9 0 0 1 18 0c0 7-9 15-9 15z"/><circle cx="16" cy="13" r="3"/>'],
 note:['Custom','<path d="M6 4h20v16l-8 8H6z"/><path d="M26 20h-8v8M10 10h12M10 15h8"/>'],
 or:['OR divider','<path d="M3 16h7M22 16h7"/><text x="16" y="19.5" font-size="9" text-anchor="middle" fill="currentColor" stroke="none" font-family="sans-serif">OR</text>']
};
const ORDER=Object.keys(S);
const LIB=window.ICONLIB||{};
const LIBFLAT={};for(const c in LIB)for(const n in LIB[c])LIBFLAT[n]=LIB[c][n];
// icon key: sticker key, or "l:<lucide name>"
function svg(k){
  if(k&&k.startsWith('l:')&&LIBFLAT[k.slice(2)])return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${LIBFLAT[k.slice(2)]}</svg>`;
  return `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${(S[k]||S.note)[1]}</svg>`;
}
const iconOf=i=>i.icon||i.type;
const UI_ICON={
 note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 4h14v16H5zM8 9h8M8 13h6"/></svg>',
 photo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M21 16l-5-5-9 8"/></svg>',
 bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/></svg>',
 star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8z"/></svg>',
 frame:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 9v6M9 12h6"/></svg>'};

/* ---------- State ---------- */
const DAYS=['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
const KEY='weekly-v1';
const uid=()=>Math.random().toString(36).slice(2,9);
const it=(type,label,time='')=>({id:uid(),type,label,time});
function seed(){return [
 {wake:'05:30',items:[it('camera','Record / Edit YouTube (or client work)')]},
 {wake:'05:00',items:[it('bible',"Men's Bible Study"),it('run','Run')]},
 {wake:'05:30',items:[it('camera','Record / Edit YouTube')]},
 {wake:'05:30',items:[it('run','Run')]},
 {wake:'05:30',items:[it('camera','Record / Edit YouTube (or content / client work)')]},
 {wake:'06:00',items:[it('run','Long Run'),it('or','OR'),it('rest','Rest Day')]},
 {wake:'07:00',items:[it('church','Church'),it('run','Long Run (alternate)')]}]}
const DEFAULTS={theme:'system',weekStart:'mon',clock:'12',wake:'06:00',lead:15,msgStyle:'friendly',haptics:true,showDone:true,recapSeen:''};
function blank(){return DAYS.map(()=>({wake:db.settings.wake,items:[]}))}
let db; try{db=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!db||!db.template) db={template:seed(),overrides:{}};
db.settings={...DEFAULTS,...(db.settings||{})};db.done=db.done||{};db.push=db.push||{};
const save=()=>{localStorage.setItem(KEY,JSON.stringify(db));if(db.push.enabled)pushSyncSoon()};
const ST=db.settings;
let ui={view:'day',date:null,mode:{}};

/* ---------- Dates ---------- */
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const parse=k=>new Date(k+'T00:00');
const dow=d=>(d.getDay()+6)%7; // template index, Mon=0
const addD=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
const wsOff=()=>ST.weekStart==='sun'?0:1;
const weekStart=d=>addD(d,-((d.getDay()-wsOff()+7)%7));
const today=()=>{const t=new Date();t.setHours(0,0,0,0);return t};
ui.date=today();
function fmtT(t){if(!t)return'';let[h,m]=t.split(':').map(Number);if(ST.clock==='24')return`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;const ap=h>=12?'PM':'AM';h=h%12||12;return`${h}:${String(m).padStart(2,'0')} ${ap}`}
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
const dayName=d=>DAYS[dow(d)];

function dayData(d){return db.overrides[iso(d)]||db.template[dow(d)]}
function editTarget(d){
  const k=iso(d);
  if(db.overrides[k]) return db.overrides[k];
  if(ui.mode[k]==='date'){db.overrides[k]=JSON.parse(JSON.stringify(db.template[dow(d)]));return db.overrides[k]}
  return db.template[dow(d)];
}
const isOverride=d=>!!db.overrides[iso(d)];
const isDone=(k,id)=>(db.done[k]||[]).includes(id);
function setDone(k,id,v){const a=db.done[k]||(db.done[k]=[]);const i=a.indexOf(id);if(v&&i<0)a.push(id);if(!v&&i>=0)a.splice(i,1);if(!a.length)delete db.done[k]}
const buzz=()=>{if(ST.haptics&&navigator.vibrate)navigator.vibrate(12)};

/* ---------- Render ---------- */
const $=s=>document.querySelector(s), main=$('#main');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function itemHTML(i,k){
  if(i.type==='or') return `<div class="item or" data-id="${i.id}">OR</div>`;
  const done=isDone(k,i.id);
  const meta=[i.time?esc(fmtT(i.time)):'',i.remind&&i.time&&db.push.enabled?UI_ICON.bell:'',i.notes?UI_ICON.note:'',(i.photos&&i.photos.length)?UI_ICON.photo+(i.photos.length>1?i.photos.length:''):''].filter(Boolean).join(' ');
  return `<div class="item ${done?'done':''} ${i.star?'star':''}" data-id="${i.id}">${i.star?'<span class="badge">MAIN EVENT</span>':''}<button class="chk" data-chk="${i.id}" aria-label="${done?'Mark not done':'Mark done'}"><i></i></button>${svg(iconOf(i))}<div class="txt"><div class="t">${esc(i.label)}</div>${meta?`<div class="tm">${meta}</div>`:''}</div></div>`;
}
function visibleItems(d){const k=iso(d);return dayData(d).items.filter(i=>ST.showDone||i.type==='or'||!isDone(k,i.id))}
function colHTML(d,big){
  const dd=dayData(d),k=iso(d),ov=isOverride(d),dm=ov||ui.mode[k]==='date';
  let s=`<div class="col ${k===iso(today())?'today':''}" data-date="${k}"><h2>${dayName(d)}${big?'':' '+d.getDate()}</h2>
  <button class="wake" data-wake="${k}">WAKE ${fmtT(dd.wake)}</button>`;
  if(big) s+=`<div class="mode">EDITING <button data-mode="tpl" class="${dm?'':'on'}">Every ${dayName(d).slice(0,3)}</button><button data-mode="date" class="${dm?'on':''}">Just ${d.getMonth()+1}/${d.getDate()}</button>${ov?' <button data-mode="reset">Use template</button>':''}</div>`;
  const its=visibleItems(d);
  s+=`<div class="items" data-drop="${k}">${its.map(i=>itemHTML(i,k)).join('')||'<div class="empty">Tap + to add stickers</div>'}</div></div>`;
  return s;
}
function render(){
  document.querySelectorAll('.views button').forEach(b=>b.classList.toggle('on',b.dataset.view===ui.view));
  const d=ui.date,m=weekStart(d);
  if(ui.view==='day'){
    $('#label').textContent=d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:'numeric'});
    let tabs='<div class="daytabs">';
    for(let i=0;i<7;i++){const x=addD(m,i);tabs+=`<button data-go="${iso(x)}" class="${iso(x)===iso(d)?'on':''}">${dayName(x).slice(0,3)}<b>${x.getDate()}</b>${dayData(x).items.some(t=>t.star)?'<span class="dot"></span>':''}</button>`}
    main.innerHTML=tabs+'</div><div class="dayview">'+colHTML(d,true)+'</div>'+recapBtn();
  }else if(ui.view==='week'){
    const e=addD(m,6);
    $('#label').textContent=`${MON[m.getMonth()].slice(0,3)} ${m.getDate()} – ${MON[e.getMonth()].slice(0,3)} ${e.getDate()}`;
    let g='<div class="weekgrid">';for(let i=0;i<7;i++)g+=colHTML(addD(m,i),false);
    main.innerHTML=g+'</div>'+recapBtn();
  }else{
    const f=new Date(d.getFullYear(),d.getMonth(),1),st=weekStart(f);
    $('#label').textContent=`${MON[d.getMonth()]} ${d.getFullYear()}`;
    let g='<div class="month"><div class="mgrid">';for(let i=0;i<7;i++)g+=`<div class="dow">${dayName(addD(st,i)).slice(0,3)}</div>`;
    for(let i=0;i<42;i++){const x=addD(st,i);if(i>=35&&x.getMonth()!==d.getMonth())break;
      const its=dayData(x).items.filter(t=>t.type!=='or'),dn=(db.done[iso(x)]||[]).filter(id=>its.some(t=>t.id===id)).length;
      g+=`<button class="cell ${x.getMonth()!==d.getMonth()?'out':''} ${iso(x)===iso(today())?'today':''} ${isOverride(x)?'ovr':''}" data-open="${iso(x)}"><span class="n">${x.getDate()}</span><span class="ic">${its.slice(0,4).map(t=>svg(iconOf(t))).join('')}</span>${dn?`<span class="cnt">✓ ${dn}/${its.length}</span>`:''}</button>`}
    main.innerHTML=g+'</div><div class="legend">Tap a date to open it. • = custom plan for that date.</div></div>'+recapBtn();
  }
}
const recapBtn=()=>`<button class="recapbtn" data-recap="${iso(weekStart(ui.date))}">✦ Weekly recap</button>`;
function renderTray(){$('#stickers').innerHTML=ORDER.map(k=>`<div class="stk" data-stk="${k}">${svg(k)}<span>${S[k][0]}</span></div>`).join('')}

/* ---------- Sheets & toast ---------- */
function openSheet(id){$('#'+id).classList.remove('hidden');if(id!=='tray')$('#scrim').classList.remove('hidden');$('#fab').style.display='none';$('#settingsBtn').style.display='none'}
function closeSheet(id){$('#'+id).classList.add('hidden');const any=['editor','library'].some(x=>!$('#'+x).classList.contains('hidden'));if(!any)$('#scrim').classList.add('hidden');
  if(['tray','editor','library'].every(x=>$('#'+x).classList.contains('hidden'))){$('#fab').style.display='';$('#settingsBtn').style.display=''}}
function closeSheets(){['tray','editor','library'].forEach(closeSheet)}
let toastT;function toast(msg,btn,fn,ms=2600){const t=$('#toast');t.innerHTML=`<span>${msg}</span>${btn?`<button>${btn}</button>`:''}`;t.classList.remove('hidden');if(btn)t.querySelector('button').onclick=()=>{t.classList.add('hidden');fn()};clearTimeout(toastT);toastT=setTimeout(()=>t.classList.add('hidden'),ms)}

/* ---------- Photos (IndexedDB) ---------- */
const PDB=new Promise((res,rej)=>{const r=indexedDB.open('weekly-photos',1);r.onupgradeneeded=()=>r.result.createObjectStore('photos',{keyPath:'id'});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const pstore=async m=>(await PDB).transaction('photos',m).objectStore('photos');
const preq=r=>new Promise((res,rej)=>{r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const putPhoto=async p=>preq((await pstore('readwrite')).put(p));
const getPhoto=async id=>preq((await pstore('readonly')).get(id));
const delPhoto=async id=>preq((await pstore('readwrite')).delete(id));
const allPhotos=async()=>preq((await pstore('readonly')).getAll());
const urlCache={};async function photoURL(id){if(urlCache[id])return urlCache[id];const p=await getPhoto(id);if(!p)return'';return urlCache[id]=URL.createObjectURL(p.blob)}
async function compress(file,max=1280,q=.8){
  const url=URL.createObjectURL(file);
  try{const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=url});
    const sc=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));const c=document.createElement('canvas');c.width=Math.round(img.naturalWidth*sc);c.height=Math.round(img.naturalHeight*sc);
    c.getContext('2d').drawImage(img,0,0,c.width,c.height);return await new Promise(r=>c.toBlob(r,'image/jpeg',q));}finally{URL.revokeObjectURL(url)}
}
function pickFiles(cb){const f=document.createElement('input');f.type='file';f.accept='image/*';f.multiple=true;f.onchange=()=>cb([...f.files]);f.click()}
async function addPhotos(item,files,dateKey){
  item.photos=item.photos||[];
  for(const f of files){try{const blob=await compress(f);const id='p'+uid()+uid();await putPhoto({id,blob,created:Date.now(),date:dateKey,label:item.label});item.photos.push(id)}catch(e){toast('Couldn’t add that photo')}}
  save();
}

/* ---------- Item editor ---------- */
let edit=null; // {k,id}
function edItem(){if(!edit)return null;const tgt=editTarget(parse(edit.k));return{tgt,item:tgt.items.find(x=>x.id===edit.id)}}
function editItem(k,id){edit={k,id};drawEditor();openSheet('editor')}
const LEADS=[0,5,10,15,30,60,120];
const leadTxt=m=>m===0?'At the time':m<60?`${m} min before`:`${m/60} hr before`;
async function drawEditor(){
  const r=edItem();if(!r||!r.item){closeSheet('editor');return}
  const {item}=r,k=edit.k,ed=$('#editor');
  if(item.type==='or'){ed.innerHTML=`<div class="grab"></div><div class="sheet-h">OR divider<small></small><button class="x" data-close>×</button></div><div class="row"><button class="btn red" id="e-del">Delete</button></div>`;
    $('#e-del').onclick=delItem;return}
  const done=isDone(k,item.id);
  ed.innerHTML=`<div class="grab"></div><div class="sheet-h">Edit sticker<small>${esc(parse(k).toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}))}</small><button class="x" data-close aria-label="Done">×</button></div>
  <div class="ehead"><button class="emblem" id="e-icon" aria-label="Change icon">${svg(iconOf(item))}<small>Change icon</small></button>
   <div class="fields"><input type="text" id="e-label" value="${esc(item.label)}" placeholder="Name"><input type="time" id="e-time" value="${item.time||''}"></div></div>
  <div class="toggles"><button class="tg ${done?'on':''}" id="e-done">✓ Done</button><button class="tg ${item.star?'on':''}" id="e-star">☆ Main event</button></div>
  <span class="lab">Reminder</span>
  <div class="remrow"><button class="sw ${item.remind?'on':''}" id="e-rem" role="switch" aria-checked="${!!item.remind}" aria-label="Remind me"></button>
   <select id="e-lead" ${item.remind?'':'disabled'}>${LEADS.map(m=>`<option value="${m}" ${(item.lead??ST.lead)==m?'selected':''}>${leadTxt(m)}</option>`).join('')}</select></div>
  <div class="legend" id="e-remnote">${!item.time?'Set a time to get a reminder.':!db.push.enabled?'Turn on reminders in Settings to get notified.':''}</div>
  <span class="lab">Notes</span><textarea id="e-notes" placeholder="Add notes…">${esc(item.notes||'')}</textarea>
  <span class="lab">Photos</span><div class="photos" id="e-photos"></div>
  <div class="row"><button class="btn red" id="e-del">Delete</button><button class="btn dark" data-close>Done</button></div>`;
  const P=$('#e-photos');P.innerHTML=(item.photos||[]).map((p,i)=>`<button class="frame" data-ph="${i}" style="padding:0;border:0"><img alt="" data-src="${p}"></button>`).join('')+`<button class="frame" id="e-addph">${UI_ICON.frame}<span>Add photo</span></button>`;
  P.querySelectorAll('img').forEach(async im=>im.src=await photoURL(im.dataset.src));
  const upd=()=>{save();render()};
  $('#e-label').oninput=e=>{item.label=e.target.value;upd()};
  $('#e-label').onblur=e=>{if(!item.label.trim()){item.label=S[item.type]?S[item.type][0]:'Sticker';upd()}};
  $('#e-time').onchange=e=>{item.time=e.target.value;upd();drawEditor()};
  $('#e-notes').oninput=e=>{item.notes=e.target.value;upd()};
  $('#e-done').onclick=()=>{setDone(k,item.id,!isDone(k,item.id));buzz();upd();drawEditor()};
  $('#e-star').onclick=()=>{const v=!item.star;r.tgt.items.forEach(x=>x.star=false);item.star=v;buzz();upd();drawEditor()};
  $('#e-rem').onclick=()=>{item.remind=!item.remind;if(item.remind&&item.lead==null)item.lead=ST.lead;upd();drawEditor()};
  $('#e-lead').onchange=e=>{item.lead=+e.target.value;upd()};
  $('#e-icon').onclick=()=>openLibrary(iconOf(item),key=>{item.icon=key;upd();drawEditor()});
  $('#e-addph').onclick=()=>pickFiles(async fs=>{await addPhotos(item,fs,k);render();drawEditor()});
  P.querySelectorAll('[data-ph]').forEach(b=>b.onclick=()=>openViewer(item,+b.dataset.ph,k));
  $('#e-del').onclick=delItem;
}
function delItem(){const r=edItem();if(!r)return;const i=r.tgt.items.indexOf(r.item);if(i>=0)r.tgt.items.splice(i,1);save();closeSheet('editor');render();toast('Sticker deleted')}
function editWake(k){
  const d=parse(k),tgt=editTarget(d),ed=$('#editor');edit=null;
  ed.innerHTML=`<div class="grab"></div><div class="sheet-h">Wake time<small>${isOverride(d)?'this date only':'every '+dayName(d).toLowerCase()}</small><button class="x" data-close>×</button></div><input id="w" type="time" value="${tgt.wake}"><div class="row"><button class="btn dark" id="w-save">Save</button></div>`;
  openSheet('editor');$('#w-save').onclick=()=>{tgt.wake=$('#w').value||tgt.wake;save();closeSheet('editor');render()};
}
function addSticker(key,k,pos){
  const tgt=editTarget(parse(k));
  const n=it(key,key==='or'?'OR':(key==='note'?'':S[key][0]));
  tgt.items.splice(pos==null?tgt.items.length:pos,0,n);save();render();buzz();
  if(key==='note'){closeSheet('tray');editItem(k,n.id);setTimeout(()=>$('#e-label')&&$('#e-label').focus(),300)}
  else toast(`Added to ${dayName(parse(k)).slice(0,3)} ${parse(k).getDate()}`);
}

/* ---------- Icon library ---------- */
function openLibrary(cur,cb){
  const L=$('#library');let cat='All',q='';
  L.innerHTML=`<div class="grab"></div><div class="sheet-h">Choose an icon<small></small><button class="x" id="lib-x">×</button></div>
   <input type="search" id="lib-q" placeholder="Search icons (dog, guitar, gym…)"><div class="lib-cats" id="lib-cats"></div><div class="lib-grid" id="lib-grid"></div>`;
  const cats=['All','Stickers',...Object.keys(LIB)];
  const draw=()=>{
    $('#lib-cats').innerHTML=cats.map(c=>`<button class="${c===cat?'on':''}" data-c="${c}">${c}</button>`).join('');
    let h='';const ql=q.toLowerCase();
    const sec=(name,keys)=>{const ks=keys.filter(([k,label])=>!ql||label.toLowerCase().includes(ql)||name.toLowerCase().includes(ql));if(!ks.length)return;h+=`<div class="lib-h">${name}</div>`+ks.map(([k,label])=>`<button data-k="${k}" title="${esc(label)}" aria-label="${esc(label)}" class="${k===cur?'on':''}">${svg(k)}</button>`).join('')};
    if(cat==='All'||cat==='Stickers')sec('Stickers',ORDER.filter(k=>k!=='or').map(k=>[k,S[k][0]]));
    for(const c in LIB)if(cat==='All'||cat===c)sec(c,Object.keys(LIB[c]).map(n=>['l:'+n,n.replace(/-/g,' ')]));
    $('#lib-grid').innerHTML=h||'<div class="empty" style="grid-column:1/-1">No icons match.</div>';
  };
  draw();openSheet('library');
  $('#lib-q').oninput=e=>{q=e.target.value;draw()};
  $('#lib-cats').onclick=e=>{const b=e.target.closest('[data-c]');if(b){cat=b.dataset.c;draw()}};
  $('#lib-grid').onclick=e=>{const b=e.target.closest('[data-k]');if(b){cb(b.dataset.k);buzz();closeSheet('library')}};
  $('#lib-x').onclick=()=>closeSheet('library');
}

/* ---------- Photo viewer ---------- */
function openViewer(item,idx,k){
  const V=$('#viewer');
  const draw=async()=>{const ps=item.photos||[];if(!ps.length){V.classList.add('hidden');drawEditor();return}
    idx=(idx+ps.length)%ps.length;
    V.innerHTML=`<div class="vt"><button id="v-x">Close</button><span>${idx+1} / ${ps.length}</span><button id="v-add">+ Add</button></div><div class="vi" id="v-img"><img alt=""></div><div class="vb">${ps.length>1?'<button id="v-p">‹ Prev</button>':''}<button id="v-del">Remove</button>${ps.length>1?'<button id="v-n">Next ›</button>':''}</div>`;
    V.querySelector('img').src=await photoURL(ps[idx]);
    $('#v-x').onclick=()=>{V.classList.add('hidden');drawEditor()};
    $('#v-add').onclick=()=>pickFiles(async fs=>{await addPhotos(item,fs,k);idx=item.photos.length-1;render();draw()});
    $('#v-del').onclick=async()=>{if(!confirm('Remove this photo?'))return;const [id]=item.photos.splice(idx,1);await delPhoto(id);save();render();draw()};
    if($('#v-p'))$('#v-p').onclick=()=>{idx--;draw()};if($('#v-n'))$('#v-n').onclick=()=>{idx++;draw()};
    let sx=null;const vi=$('#v-img');vi.ontouchstart=e=>sx=e.touches[0].clientX;vi.ontouchend=e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50&&ps.length>1){idx+=dx<0?1:-1;draw()}};
  };
  V.classList.remove('hidden');draw();
}

/* ---------- Drag & drop: long-press to lift, so scrolling never drags ---------- */
const HOLD=300,SLOP=10;
let drag=null;
function cancelPending(){if(drag&&!drag.started){clearTimeout(drag.timer);drag.src.classList.remove('lifting');drag=null}}
function liftDrag(){
  if(!drag)return;drag.started=true;buzz();
  drag.src.classList.remove('lifting');
  drag.ghost=document.createElement('div');drag.ghost.className='ghost';drag.ghost.innerHTML=drag.html;document.body.appendChild(drag.ghost);
  drag.ghost.style.left=drag.x+'px';drag.ghost.style.top=drag.y+'px';
  if(drag.kind==='move')drag.src.classList.add('dragging');
  document.body.style.overflow='hidden';
}
function dropTarget(x,y){
  const el=document.elementFromPoint(x,y);const box=el&&el.closest('[data-drop]');if(!box)return null;
  const kids=[...box.querySelectorAll('.item:not(.dragging)')];let pos=kids.length;
  for(let i=0;i<kids.length;i++){const r=kids[i].getBoundingClientRect();if(y<r.top+r.height/2){pos=i;break}}
  return{box,pos,kids};
}
document.addEventListener('pointerdown',e=>{
  if(e.button>0||e.target.closest('.chk'))return;
  const s=e.target.closest('.stk'),i=!s&&e.target.closest('#main .item');if(!s&&!i)return;
  const base={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:Date.now(),started:false,mouse:e.pointerType==='mouse'};
  if(s)drag={...base,kind:'new',stk:s.dataset.stk,src:s,html:svg(s.dataset.stk)+'<span>'+S[s.dataset.stk][0]+'</span>'};
  else{const k=i.closest('[data-date]').dataset.date;drag={...base,kind:'move',id:i.dataset.id,from:k,src:i,html:i.innerHTML}}
  const d0=drag;d0.lt=setTimeout(()=>{if(drag===d0&&!d0.started)d0.src.classList.add('lifting')},150);
  drag.timer=setTimeout(liftDrag,HOLD);
});
document.addEventListener('pointermove',e=>{
  if(!drag)return;drag.x=e.clientX;drag.y=e.clientY;
  if(!drag.started){
    if(Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)>SLOP){
      if(drag.mouse){clearTimeout(drag.timer);liftDrag()}else cancelPending(); // touch moved early = scroll
    }
    if(!drag||!drag.started)return;
  }
  e.preventDefault();
  drag.ghost.style.left=e.clientX+'px';drag.ghost.style.top=e.clientY+'px';
  $('#tray').classList.toggle('tucked',e.clientY<innerHeight*0.55); // reveal drop targets
  // auto-scroll near edges
  if(e.clientY<140)scrollBy(0,-8);else if(e.clientY>innerHeight-60&&$('#tray').classList.contains('hidden'))scrollBy(0,8);
  document.querySelectorAll('.ph').forEach(p=>p.remove());
  const t=dropTarget(e.clientX,e.clientY);
  if(t){const ph=document.createElement('div');ph.className='ph';const em=t.box.querySelector('.empty');if(em)em.remove();
    t.kids[t.pos]?t.box.insertBefore(ph,t.kids[t.pos]):t.box.appendChild(ph)}
},{passive:false});
// Once lifted, stop the page from scrolling under the finger (iOS needs a non-passive touchmove).
document.addEventListener('touchmove',e=>{if(drag&&drag.started)e.preventDefault()},{passive:false});
document.addEventListener('contextmenu',e=>{if(e.target.closest('.item,.stk'))e.preventDefault()});
function endDrag(e,cancel){
  if(!drag)return;const dr=drag;drag=null;clearTimeout(dr.timer);dr.src.classList.remove('lifting');document.body.style.overflow='';
  $('#tray').classList.remove('tucked');document.querySelectorAll('.ph').forEach(p=>p.remove());
  if(!dr.started){
    if(cancel||Date.now()-dr.t>HOLD+400)return;
    if(dr.kind==='new')addSticker(dr.stk,iso(ui.date));else editItem(dr.from,dr.id);
    return}
  dr.ghost.remove();
  const t=!cancel&&dropTarget(e.clientX,e.clientY);
  if(!t){render();return}
  const to=t.box.dataset.drop;
  if(dr.kind==='new'){addSticker(dr.stk,to,t.pos);return}
  const fromT=editTarget(parse(dr.from));const fi=fromT.items.findIndex(x=>x.id===dr.id);if(fi<0){render();return}
  const toT=editTarget(parse(to));
  // map visible index to real index (hidden completed items)
  const [mv]=fromT.items.splice(fi,1);
  const vis=toT.items.filter(i=>ST.showDone||i.type==='or'||!isDone(to,i.id));
  let real=t.pos>=vis.length?toT.items.length:toT.items.indexOf(vis[t.pos]);
  toT.items.splice(real<0?toT.items.length:real,0,mv);
  if(to!==dr.from&&isDone(dr.from,mv.id)){setDone(dr.from,mv.id,false);setDone(to,mv.id,true)}
  save();render();buzz();
}
document.addEventListener('pointerup',e=>endDrag(e,false));
document.addEventListener('pointercancel',e=>{if(drag&&drag.started)endDrag(e,false);else{cancelPending()}});

/* ---------- Settings ---------- */
const MSG={
  friendly:{name:'Friendly',titles:['Don’t forget! 🌱','Heads up 👋','Quick reminder ☀️','Almost time 🙂']},
  simple:{name:'Simple',titles:null},
  hype:{name:'Hype',titles:['Let’s go! 🔥','You got this 💪','Time to shine ✨','Game time 🙌']},
  calm:{name:'Calm',titles:['Gentle reminder 🍃','When you’re ready 🌤','A little nudge 🕊']}
};
function applyTheme(){const t=ST.theme==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):ST.theme;document.documentElement.dataset.theme=t;document.querySelectorAll('meta[name=theme-color]').forEach(m=>m.content=t==='dark'?'#161918':'#f4f3ef')}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>ST.theme==='system'&&applyTheme());
const seg=(key,opts)=>`<div class="seg">${opts.map(([v,l])=>`<button data-set="${key}" data-val="${v}" class="${String(ST[key])===String(v)?'on':''}">${l}</button>`).join('')}</div>`;
const sw=key=>`<button class="sw ${ST[key]?'on':''}" data-tog="${key}" role="switch" aria-checked="${!!ST[key]}"></button>`;
function openSettings(){drawSettings();$('#settings').classList.remove('hidden')}
function drawSettings(){
  const P=$('#settings');
  P.innerHTML=`<div class="page-h"><span style="min-width:60px"></span><h2>SETTINGS</h2><button id="set-x">Done</button></div>
  <div class="grp"><h3>Appearance</h3><div class="card"><div class="set"><span class="k">Theme</span>${seg('theme',[['light','Light'],['dark','Dark'],['system','System']])}</div></div></div>
  <div class="grp"><h3>Calendar</h3><div class="card">
   <div class="set"><span class="k">Week starts on</span>${seg('weekStart',[['mon','Mon'],['sun','Sun']])}</div>
   <div class="set"><span class="k">Time format</span>${seg('clock',[['12','12h'],['24','24h']])}</div>
   <div class="set"><span class="k">Default wake time<small>Used for blank days</small></span><input type="time" id="s-wake" value="${ST.wake}"></div>
   <div class="set"><span class="k">Show completed</span>${sw('showDone')}</div>
   <div class="set"><span class="k">Haptics<small>Little taps on supported phones</small></span>${sw('haptics')}</div></div></div>
  <div class="grp"><h3>Reminders</h3><div class="card">
   <div class="set" id="s-push">${pushRow()}</div>
   <div class="set"><span class="k">Default lead time</span><select id="s-lead">${LEADS.map(m=>`<option value="${m}" ${ST.lead==m?'selected':''}>${leadTxt(m)}</option>`).join('')}</select></div>
   <div class="set"><span class="k">Message style<small id="s-sample">${esc(sampleMsg())}</small></span><select id="s-style">${Object.entries(MSG).map(([k,v])=>`<option value="${k}" ${ST.msgStyle===k?'selected':''}>${v.name}</option>`).join('')}</select></div></div>
   <div class="legend">Turn on “Remind me” on any sticker with a time.</div></div>
  <div class="grp"><h3>Your data</h3><div class="card">
   <div class="set"><span class="k">Weekly recap</span><button class="btn" data-recap="${iso(weekStart(today()))}">View</button></div>
   <div class="set"><span class="k">Backup<small>Plan and settings (photos stay on this phone)</small></span><button class="btn" data-tool="export">Export</button><button class="btn" data-tool="import">Import</button></div>
   <div class="set"><span class="k">Load sample week</span><button class="btn" data-tool="sample">Load</button></div>
   <div class="set"><span class="k">Start blank<small>Clears all stickers, notes and checkmarks</small></span><button class="btn red" data-tool="blank">Reset</button></div></div></div>
  <div class="about"><span class="logo-img"></span><br>
   <b>Weekly</b> · version 2<br>Plan your week with stickers. Create, grow, stay consistent.<br>Everything is saved on this device. Install it from Safari: Share → Add to Home Screen.<br><span style="font-size:10px">Extra icons from Lucide (ISC license).</span></div>`;
  $('#set-x').onclick=()=>{$('#settings').classList.add('hidden');render()};
  $('#s-wake').onchange=e=>{ST.wake=e.target.value||ST.wake;save()};
  $('#s-lead').onchange=e=>{ST.lead=+e.target.value;save()};
  $('#s-style').onchange=e=>{ST.msgStyle=e.target.value;save();$('#s-sample').textContent=sampleMsg()};
  bindPush();
}
function sampleMsg(){const m=composeMsg({label:'Run',time:'06:00'},ST.lead,0);return `“${m.title}: ${m.body}”`}

/* ---------- Push reminders ---------- */
const CFG=window.WEEKLY_CONFIG||{};
const pushSupported=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
const isStandalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const devId=()=>db.push.id||(db.push.id=Array.from(crypto.getRandomValues(new Uint8Array(12)),b=>b.toString(16).padStart(2,'0')).join(''));
const b64u=s=>{const p='='.repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(b,c=>c.charCodeAt(0))};
async function api(path,body){const r=await fetch(CFG.WORKER_URL+path,{method:'POST',headers:{'content-type':'application/json','x-app-key':CFG.APP_KEY},body:JSON.stringify(body)});const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||('HTTP '+r.status));return j}
function composeMsg(item,lead,n){
  const st=MSG[ST.msgStyle]||MSG.friendly,t=fmtT(item.time);
  const when=lead?`in ${lead<60?lead+' min':lead/60+' hr'} (${t})`:`now (${t})`;
  if(!st.titles)return{title:item.label,body:`Starts ${when}.`};
  return{title:st.titles[n%st.titles.length],body:`${item.label} ${lead?'starts '+when:'is '+when}.`};
}
function buildReminders(){
  const out=[],now=Date.now(),t0=today();let n=0;
  for(let i=0;i<10;i++){const d=addD(t0,i),k=iso(d);
    for(const item of dayData(d).items){if(!item.remind||!item.time||item.type==='or'||isDone(k,item.id))continue;
      const [h,m]=item.time.split(':').map(Number);const lead=item.lead??ST.lead;const at=new Date(d.getFullYear(),d.getMonth(),d.getDate(),h,m).getTime()-lead*60000;
      if(at<now-60000)continue;const msg=composeMsg(item,lead,n++);out.push({at,title:msg.title,body:msg.body,tag:item.id+'-'+k})}}
  return out;
}
let syncT;function pushSyncSoon(){clearTimeout(syncT);syncT=setTimeout(()=>pushSync().catch(e=>console.warn('push sync',e.message)),1500)}
async function pushSync(sub){
  if(!sub){const reg=await navigator.serviceWorker.ready;sub=await reg.pushManager.getSubscription();if(!sub)return}
  await api('/sync',{id:devId(),subscription:sub.toJSON(),enabled:true,reminders:buildReminders()});
  db.push.synced=Date.now();localStorage.setItem(KEY,JSON.stringify(db));
}
async function pushOn(){
  // iOS: subscribe straight from the tap (it shows the permission prompt).
  const reg=await navigator.serviceWorker.ready;
  let sub;try{sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u(CFG.VAPID_PUBLIC_KEY)})}
  catch(e){throw new Error(Notification.permission==='denied'?'Notifications are blocked. Turn them on in iPhone Settings → Notifications → Weekly.':'Couldn’t turn on notifications.')}
  await pushSync(sub);db.push.enabled=true;save();
}
async function pushOff(){try{const reg=await navigator.serviceWorker.ready,s=await reg.pushManager.getSubscription();if(s)await s.unsubscribe()}catch(e){}
  try{await api('/unsubscribe',{id:devId()})}catch(e){}db.push.enabled=false;save()}
function pushRow(){
  if(!CFG.WORKER_URL)return'<span class="k">Reminders<small>Not available yet.</small></span>';
  if(!pushSupported()||!isStandalone())return'<span class="k">Reminders<small>Add Weekly to your Home Screen (Safari → Share → Add to Home Screen) and open it from the icon to turn on reminders.</small></span>';
  return db.push.enabled?'<span class="k">Reminders are on<small>You’ll get a nudge before stickers with “Remind me”.</small></span><button class="btn" id="p-test">Test</button><button class="sw on" id="p-off" role="switch" aria-checked="true" aria-label="Reminders"></button>'
    :'<span class="k">Reminders<small>Get a friendly “don’t forget” before things start.</small></span><button class="btn dark" id="p-on">Turn on reminders</button>';
}
function bindPush(){
  const on=$('#p-on'),off=$('#p-off'),te=$('#p-test');
  if(on)on.onclick=()=>{on.disabled=true;on.textContent='Turning on…';pushOn().then(()=>toast('Reminders on 🔔')).catch(e=>toast(e.message,null,null,5000)).finally(()=>{$('#s-push').innerHTML=pushRow();bindPush()})};
  if(off)off.onclick=()=>pushOff().then(()=>{$('#s-push').innerHTML=pushRow();bindPush();toast('Reminders off')});
  if(te)te.onclick=()=>api('/test',{id:devId()}).then(()=>toast('Test sent. Check your notifications.')).catch(e=>toast('Test failed: '+e.message));
}

/* ---------- Weekly recap ---------- */
const CUTE={all:['Clean sweep. Every single one! 🌟','You showed up all week. That’s the whole secret.'],high:['Look at you go. Consistency looks good on you.','Big week. Proud of you.'],mid:['Solid progress. Little by little adds up.','Not perfect, just faithful. That counts.'],low:['A fresh week is a fresh start. You’ve got this.','Small steps are still steps. 🌱'],none:['Nothing checked off yet. Next week is wide open!']};
const pick=a=>a[Math.floor(Math.random()*a.length)];
const DOODLE={line:'<svg class="doodle" viewBox="0 0 120 26"><path d="M4 16c18-8 30 6 48-2s30-9 64 0"/></svg>',
 stars:'<svg class="doodle" viewBox="0 0 120 26"><path d="M30 13l3-7 3 7 7 1-6 4 2 7-6-4-6 4 2-7-6-4zM60 8l2-4 2 4 4 1-3 2 1 4-4-2-4 2 1-4-3-2zM88 13l3-7 3 7 7 1-6 4 2 7-6-4-6 4 2-7-6-4z"/></svg>',
 sun:'<svg class="doodle" viewBox="0 0 120 26"><circle cx="60" cy="14" r="6"/><path d="M60 2v3M60 23v2M46 14h3M71 14h3M50 5l2 2M68 21l2 2M50 23l2-2M68 7l2-2"/></svg>',
 flame:'<svg class="doodle" viewBox="0 0 120 26"><path d="M60 24c-6 0-9-4-8-9 1-4 4-5 4-10 4 2 9 7 9 12 0 2-1 3-1 3s2-1 2-4c2 2 2 8-6 8z"/></svg>'};
function hadDone(d){const k=iso(d),its=dayData(d).items;return(db.done[k]||[]).some(id=>its.some(t=>t.id===id))}
function recapData(startKey){
  const s=parse(startKey),days=[];let total=0,done=0;const counts={};
  for(let i=0;i<7;i++){const d=addD(s,i),k=iso(d),its=dayData(d).items.filter(t=>t.type!=='or'),dn=its.filter(t=>isDone(k,t.id));
    total+=its.length;done+=dn.length;dn.forEach(t=>{const key=t.label.trim().toLowerCase();(counts[key]=counts[key]||{n:0,item:t}).n++});
    days.push({d,its,dn,star:its.find(t=>t.star)})}
  const top=Object.values(counts).sort((a,b)=>b.n-a.n)[0];
  const end=addD(s,6),last=end<today()?end:today();
  let streak=0;for(let d=new Date(last);streak<400&&hadDone(d);d=addD(d,-1))streak++;
  let best=0,run=0;days.forEach(x=>{if(x.dn.length){run++;best=Math.max(best,run)}else run=0});
  return{s,end,days,total,done,top,streak,best};
}
async function openRecap(startKey){
  const R=recapData(startKey),P=$('#recap');
  const pct=R.total?R.done/R.total:0,mood=!R.done?'none':pct>=1?'all':pct>=.7?'high':pct>=.35?'mid':'low';
  const range=`${MON[R.s.getMonth()].slice(0,3)} ${R.s.getDate()} – ${MON[R.end.getMonth()].slice(0,3)} ${R.end.getDate()}`;
  const startMs=R.s.getTime(),endMs=addD(R.end,1).getTime();
  const photos=(await allPhotos().catch(()=>[])).filter(p=>(p.date>=startKey&&p.date<=iso(R.end))||(p.created>=startMs&&p.created<endMs)).slice(0,9);
  const stars=R.days.filter(x=>x.star);
  const cards=[
   `<div class="rc"><span class="kick">Weekly recap</span><h4>${range}</h4>${DOODLE.sun}<p>${esc(pick(CUTE[mood]))}</p><p style="font-size:11px">Swipe →</p></div>`,
   `<div class="rc"><span class="kick">Checked off</span><div class="big">${R.done}<span style="font-size:24px;color:var(--mute)"> / ${R.total}</span></div><div class="bar"><i style="width:${Math.round(pct*100)}%"></i></div><p>${R.done?`${Math.round(pct*100)}% of your plan, done.`:'Tap the little boxes to check things off.'}</p></div>`,
   `<div class="rc"><span class="kick">Streak</span>${DOODLE.flame}<div class="big">${R.streak}</div><p>${R.streak===1?'day':'days'} in a row with at least one thing done.</p><p style="font-size:12px">Best run this week: ${R.best} ${R.best===1?'day':'days'}</p></div>`,
   R.top?`<div class="rc"><span class="kick">Most done</span><div class="big-ic">${svg(iconOf(R.top.item))}</div><h4>${esc(R.top.item.label)}</h4><p>${R.top.n}× this week. That’s a habit in the making.</p>${DOODLE.line}</div>`:'',
   `<div class="rc"><span class="kick">Main events</span>${DOODLE.stars}${stars.length?`<ul>${stars.map(x=>`<li><b>${dayName(x.d).slice(0,3)}</b>${svg(iconOf(x.star))}<span>${esc(x.star.label)}${isDone(iso(x.d),x.star.id)?' ✓':''}</span></li>`).join('')}</ul>`:'<p>No main events starred. Tap ☆ Main event on a sticker to make it the star of the day.</p>'}</div>`,
   `<div class="rc"><span class="kick">Day by day</span><ul>${R.days.map(x=>{const h=x.star&&isDone(iso(x.d),x.star.id)?x.star:x.dn[0]||x.star||x.its[0],ok=h&&isDone(iso(x.d),h.id);return`<li><b>${dayName(x.d).slice(0,3)}</b>${h?svg(iconOf(h)):'<span style="width:20px"></span>'}<span style="${h&&!ok?'color:var(--mute)':''}">${h?esc(h.label)+(ok?' ✓':''):'<i style="color:var(--mute)">rest & reset</i>'}${x.its.length?` <small style="color:var(--mute)">${x.dn.length}/${x.its.length}</small>`:''}</span></li>`}).join('')}</ul></div>`,
   photos.length?`<div class="rc"><span class="kick">Snapshots</span><div class="pg">${photos.map((p,i)=>`<img data-pid="${p.id}" style="--r:${[-3,2,-1,3,-2,1][i%6]}deg" alt="">`).join('')}</div><p>Moments from your week.</p></div>`:'',
   `<div class="rc"><span class="kick">Next up</span>${DOODLE.line}<h4>New week, same you.</h4><p>${esc(pick(['Keep it simple. Show up again. 🌱','Rest well, plan light, start strong.','Create. Grow. Stay consistent.']))}</p><button class="recapbtn" id="rc-done">Close</button></div>`
  ].filter(Boolean);
  P.innerHTML=`<div class="page-h"><span style="min-width:60px"></span><h2>RECAP</h2><button id="rc-x">Close</button></div><div class="cards" id="rc-cards">${cards.join('')}</div><div class="dots">${cards.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>`;
  P.querySelectorAll('[data-pid]').forEach(async im=>im.src=await photoURL(im.dataset.pid));
  const C=$('#rc-cards');C.onscroll=()=>{const i=Math.round(C.scrollLeft/(C.firstElementChild.offsetWidth+14));P.querySelectorAll('.dots i').forEach((d,j)=>d.classList.toggle('on',i===j))};
  const close=()=>{P.classList.add('hidden')};$('#rc-x').onclick=close;$('#rc-done').onclick=close;
  P.classList.remove('hidden');
  ST.recapSeen=startKey>ST.recapSeen?startKey:ST.recapSeen;save();
}
function offerRecap(){
  const t=today(),cur=weekStart(t),prev=iso(addD(cur,-7)),lastDay=addD(cur,6);
  const endOfWeek=iso(t)===iso(lastDay)&&new Date().getHours()>=17;
  const key=endOfWeek?iso(cur):prev;
  if(ST.recapSeen>=key)return;
  const R=recapData(key);if(!R.done)return;
  setTimeout(()=>toast(endOfWeek?'Your weekly recap is ready ✨':'Last week’s recap is ready ✨','View',()=>openRecap(key),9000),800);
}

/* ---------- Clicks ---------- */
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.chk){const col=b.closest('[data-date]');const k=col.dataset.date;setDone(k,b.dataset.chk,!isDone(k,b.dataset.chk));buzz();save();render();return}
  if(b.dataset.view){ui.view=b.dataset.view;render()}
  else if(b.id==='prev'||b.id==='next'){const s=b.id==='prev'?-1:1;
    if(ui.view==='day')ui.date=addD(ui.date,s);else if(ui.view==='week')ui.date=addD(ui.date,7*s);else ui.date=new Date(ui.date.getFullYear(),ui.date.getMonth()+s,1);render()}
  else if(b.id==='today'){ui.date=today();render()}
  else if(b.id==='fab'){openSheet('tray')}
  else if(b.id==='settingsBtn'){openSettings()}
  else if(b.dataset.close!==undefined){closeSheet(b.closest('.sheet').id)}
  else if(b.dataset.go){ui.date=parse(b.dataset.go);render()}
  else if(b.dataset.open){ui.date=parse(b.dataset.open);ui.view='day';render()}
  else if(b.dataset.wake){editWake(b.dataset.wake)}
  else if(b.dataset.recap){openRecap(b.dataset.recap)}
  else if(b.dataset.set){const v=b.dataset.val;ST[b.dataset.set]=v;if(b.dataset.set==='theme')applyTheme();save();drawSettings();render()}
  else if(b.dataset.tog){ST[b.dataset.tog]=!ST[b.dataset.tog];save();drawSettings();render()}
  else if(b.dataset.mode){const k=iso(ui.date);
    if(b.dataset.mode==='tpl'){if(!db.overrides[k])ui.mode[k]='tpl';else if(confirm('Drop the custom plan for this date and use the weekly template?')){delete db.overrides[k];ui.mode[k]='tpl'}}
    else if(b.dataset.mode==='date'){ui.mode[k]='date';editTarget(ui.date)}
    else if(b.dataset.mode==='reset'&&confirm('Use the weekly template for this date again?')){delete db.overrides[k];ui.mode[k]='tpl'}
    save();render()}
  else if(b.dataset.tool==='export'){const a=document.createElement('a');const out={...db,push:{}};a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'}));a.download=`weekly-backup-${iso(today())}.json`;a.click()}
  else if(b.dataset.tool==='import'){const f=document.createElement('input');f.type='file';f.accept='application/json,.json';f.onchange=()=>{const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!x.template)throw 0;const push=db.push;db=x;db.push=push;db.settings={...DEFAULTS,...(x.settings||{})};db.done=x.done||{};localStorage.setItem(KEY,JSON.stringify(db));location.reload()}catch(_){alert('That file is not a Weekly backup.')}};r.readAsText(f.files[0])};f.click()}
  else if(b.dataset.tool==='blank'&&confirm('Clear everything and start with a blank week? (Export a backup first if you want to keep it.)')){db.template=blank();db.overrides={};db.done={};save();allPhotos().then(ps=>ps.forEach(p=>delPhoto(p.id))).catch(()=>{});render();toast('Fresh start ✨')}
  else if(b.dataset.tool==='sample'&&confirm('Replace your weekly template with the sample week?')){db.template=seed();save();render();toast('Sample week loaded')}
});
$('#scrim').onclick=closeSheets;

/* swipe between days (only clear horizontal swipes, and never while dragging) */
let swp=null;
main.addEventListener('touchstart',e=>{if(ui.view!=='day')return;swp={x:e.touches[0].clientX,y:e.touches[0].clientY}},{passive:true});
main.addEventListener('touchend',e=>{if(!swp||(drag&&drag.started)){swp=null;return}const dx=e.changedTouches[0].clientX-swp.x,dy=e.changedTouches[0].clientY-swp.y;swp=null;
  if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*2){ui.date=addD(ui.date,dx<0?1:-1);render()}});

applyTheme();renderTray();render();offerRecap();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
if(db.push.enabled&&(!db.push.synced||Date.now()-db.push.synced>6*3600e3))pushSyncSoon();
