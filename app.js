'use strict';
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
const svg=k=>`<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${(S[k]||S.note)[1]}</svg>`;

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
function blank(){return DAYS.map(()=>({wake:'06:00',items:[]}))}
let db; try{db=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!db||!db.template) db={template:seed(),overrides:{}};
const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
let ui={view:'day',date:new Date(),mode:{}}; // mode[iso]='date' => edit this date only
ui.date.setHours(0,0,0,0);

/* ---------- Date helpers ---------- */
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const dow=d=>(d.getDay()+6)%7; // Mon=0
const addD=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
const monday=d=>addD(d,-dow(d));
const today=()=>{const t=new Date();t.setHours(0,0,0,0);return t};
const fmtT=t=>{if(!t)return'';let[h,m]=t.split(':').map(Number);const ap=h>=12?'PM':'AM';h=h%12||12;return`${h}:${String(m).padStart(2,'0')} ${ap}`};
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];

function dayData(d){return db.overrides[iso(d)]||db.template[dow(d)]}
function editTarget(d){ // returns the object to edit, creating override if in date mode
  const k=iso(d);
  if(db.overrides[k]) return db.overrides[k];
  if(ui.mode[k]==='date'){db.overrides[k]=JSON.parse(JSON.stringify(db.template[dow(d)]));db.overrides[k].items.forEach(i=>i.id=uid());return db.overrides[k]}
  return db.template[dow(d)];
}
const isOverride=d=>!!db.overrides[iso(d)];

/* ---------- Render ---------- */
const $=s=>document.querySelector(s), main=$('#main');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function itemHTML(i){
  if(i.type==='or') return `<div class="item or" data-id="${i.id}">OR</div>`;
  return `<div class="item" data-id="${i.id}">${svg(i.type)}<div><div class="t">${esc(i.label)}</div>${i.time?`<div class="tm">${fmtT(i.time)}</div>`:''}</div></div>`;
}
function colHTML(d,big){
  const dd=dayData(d),k=iso(d),ov=isOverride(d);
  let s=`<div class="col ${k===iso(today())?'today':''}" data-date="${k}"><h2>${DAYS[dow(d)]}${big?'':' '+d.getDate()}</h2>
  <button class="wake" data-wake="${k}">WAKE ${fmtT(dd.wake)}</button>`;
  if(big) s+=`<div class="mode">EDITING <button data-mode="tpl" class="${ov||ui.mode[k]==='date'?'':'on'}">Every ${DAYS[dow(d)].slice(0,3)}</button><button data-mode="date" class="${ov||ui.mode[k]==='date'?'on':''}">Just ${d.getMonth()+1}/${d.getDate()}</button>${ov?' <button data-mode="reset">Use template</button>':''}</div>`;
  s+=`<div class="items" data-drop="${k}">${dd.items.map(itemHTML).join('')||'<div class="empty">Drag stickers here</div>'}</div></div>`;
  return s;
}
function render(){
  document.querySelectorAll('.views button').forEach(b=>b.classList.toggle('on',b.dataset.view===ui.view));
  const d=ui.date,m=monday(d);
  if(ui.view==='day'){
    $('#label').textContent=`${d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:'numeric'})}`;
    let tabs='<div class="daytabs">';
    for(let i=0;i<7;i++){const x=addD(m,i);tabs+=`<button data-go="${iso(x)}" class="${iso(x)===iso(d)?'on':''}">${DAYS[i].slice(0,3)}<b>${x.getDate()}</b></button>`}
    main.innerHTML=tabs+'</div><div class="dayview">'+colHTML(d,true)+'</div>'+tools();
  }else if(ui.view==='week'){
    const e=addD(m,6);
    $('#label').textContent=`${MON[m.getMonth()].slice(0,3)} ${m.getDate()} – ${MON[e.getMonth()].slice(0,3)} ${e.getDate()}`;
    let g='<div class="weekgrid">';for(let i=0;i<7;i++)g+=colHTML(addD(m,i),false);
    main.innerHTML=g+'</div>'+tools();
  }else{
    const f=new Date(d.getFullYear(),d.getMonth(),1),st=monday(f);
    $('#label').textContent=`${MON[d.getMonth()]} ${d.getFullYear()}`;
    let g='<div class="month"><div class="mgrid">'+DAYS.map(x=>`<div class="dow">${x.slice(0,3)}</div>`).join('');
    for(let i=0;i<42;i++){const x=addD(st,i);if(i>=35&&x.getMonth()!==d.getMonth())break;
      const its=dayData(x).items.filter(t=>t.type!=='or');
      g+=`<button class="cell ${x.getMonth()!==d.getMonth()?'out':''} ${iso(x)===iso(today())?'today':''} ${isOverride(x)?'ovr':''}" data-open="${iso(x)}"><span class="n">${x.getDate()}</span><span class="ic">${its.slice(0,4).map(t=>svg(t.type)).join('')}</span></button>`}
    main.innerHTML=g+'</div><div class="legend">Tap a date to open it. • = custom plan for that date.</div></div>'+tools();
  }
}
const tools=()=>`<div class="tools"><button class="btn" data-tool="export">Export backup</button><button class="btn" data-tool="import">Import backup</button><button class="btn" data-tool="blank">Start blank</button><button class="btn" data-tool="sample">Load sample week</button></div>`;
function renderTray(){$('#stickers').innerHTML=ORDER.map(k=>`<div class="stk" data-stk="${k}">${svg(k)}<span>${S[k][0]}</span></div>`).join('')}

/* ---------- Sheets ---------- */
function openSheet(id){$('#fab').style.display='none';$('#'+id).classList.remove('hidden');if(id==='editor')$('#scrim').classList.remove('hidden')}
function closeSheets(){$('#fab').style.display='';$('#tray').classList.add('hidden');$('#editor').classList.add('hidden');$('#scrim').classList.add('hidden')}
function findItem(id){for(const o of [...db.template,...Object.values(db.overrides)]){const i=o.items.findIndex(x=>x.id===id);if(i>=0)return{o,i}}}
function editItem(dateKey,id){
  const d=new Date(dateKey+'T00:00');const tgt=editTarget(d);
  let idx=tgt.items.findIndex(x=>x.id===id);
  if(idx<0){const src=dayData(d).items.findIndex(x=>x.id===id);idx=src}
  const item=tgt.items[idx];if(!item)return;
  const ed=$('#editor');
  ed.innerHTML=`<div class="grab"></div><div class="sheet-h">${svg(item.type).replace('<svg','<svg width="22" height="22"')} Edit<small></small><button class="x" data-close>×</button></div>
  ${item.type==='or'?'':`<label>Label</label><input id="e-label" value="${esc(item.label)}"><label>Time (optional)</label><input id="e-time" type="time" value="${item.time||''}">`}
  <div class="row"><button class="btn red" id="e-del">Delete</button>${item.type==='or'?'':'<button class="btn dark" id="e-save">Save</button>'}</div>`;
  openSheet('editor');
  $('#e-del').onclick=()=>{tgt.items.splice(idx,1);save();closeSheets();render()};
  if($('#e-save'))$('#e-save').onclick=()=>{item.label=$('#e-label').value.trim()||S[item.type][0];item.time=$('#e-time').value;
    tgt.items.sort((a,b)=>0);save();closeSheets();render()};
}
function editWake(k){
  const d=new Date(k+'T00:00'),tgt=editTarget(d);
  const ed=$('#editor');
  ed.innerHTML=`<div class="grab"></div><div class="sheet-h">Wake time<small>${isOverride(d)?'this date only':'every '+DAYS[dow(d)].toLowerCase()}</small><button class="x" data-close>×</button></div><input id="w" type="time" value="${tgt.wake}"><div class="row"><button class="btn dark" id="w-save">Save</button></div>`;
  openSheet('editor');$('#w-save').onclick=()=>{tgt.wake=$('#w').value||tgt.wake;save();closeSheets();render()};
}
function addSticker(k,dateKey,pos){
  const d=new Date(dateKey+'T00:00'),tgt=editTarget(d);
  const n=it(k,k==='or'?'OR':(k==='note'?'Custom':S[k][0]));
  tgt.items.splice(pos==null?tgt.items.length:pos,0,n);save();render();
  if(k==='note')editItem(dateKey,n.id);
}

/* ---------- Drag & drop (pointer events) ---------- */
let drag=null;
function startDrag(e,payload,html,srcEl){
  drag={...payload,sx:e.clientX,sy:e.clientY,started:false,src:srcEl,html,pid:e.pointerId};
}
function dropTarget(x,y){
  const el=document.elementFromPoint(x,y);
  const box=el&&el.closest('[data-drop]');if(!box)return null;
  const kids=[...box.querySelectorAll('.item:not(.dragging)')];let pos=kids.length;
  for(let i=0;i<kids.length;i++){const r=kids[i].getBoundingClientRect();if(y<r.top+r.height/2){pos=i;break}}
  return{box,pos,kids};
}
document.addEventListener('pointerdown',e=>{
  const s=e.target.closest('.stk');if(s){startDrag(e,{kind:'new',stk:s.dataset.stk},svg(s.dataset.stk)+S[s.dataset.stk][0],s);return}
  const i=e.target.closest('.item');if(i){const date=i.closest('[data-date]').dataset.date;startDrag(e,{kind:'move',id:i.dataset.id,from:date},i.innerHTML,i)}
});
document.addEventListener('pointermove',e=>{
  if(!drag)return;
  if(!drag.started){if(Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)<8)return;
    drag.started=true;drag.ghost=document.createElement('div');drag.ghost.className='ghost';drag.ghost.innerHTML=drag.html;document.body.appendChild(drag.ghost);
    if(drag.kind==='move')drag.src.classList.add('dragging');
    if(drag.kind==='new'){$('#tray').style.opacity='.35'}
  }
  e.preventDefault();
  drag.ghost.style.left=e.clientX+'px';drag.ghost.style.top=e.clientY+'px';
  document.querySelectorAll('.ph').forEach(p=>p.remove());
  const t=dropTarget(e.clientX,e.clientY);
  if(t){const ph=document.createElement('div');ph.className='ph';const em=t.box.querySelector('.empty');if(em)em.remove();
    t.kids[t.pos]?t.box.insertBefore(ph,t.kids[t.pos]):t.box.appendChild(ph)}
},{passive:false});
document.addEventListener('pointerup',e=>{
  if(!drag)return;const dr=drag;drag=null;
  if(!dr.started){ // treat as tap
    if(dr.kind==='new'){const k=currentDayKey();addSticker(dr.stk,k)}
    else editItem(dr.from,dr.id);
    return}
  const t=dropTarget(e.clientX,e.clientY);dr.ghost.remove();$('#tray').style.opacity='';
  if(t){let pos=t.pos;const to=t.box.dataset.drop;
    if(dr.kind==='new')addSticker(dr.stk,to,pos);
    else{const fromT=editTarget(new Date(dr.from+'T00:00'));let fi=fromT.items.findIndex(x=>x.id===dr.id);
      if(fi<0){fi=dayData(new Date(dr.from+'T00:00')).items.findIndex(x=>x.id===dr.id)}
      const [mv]=fromT.items.splice(fi,1);
      const toT=editTarget(new Date(to+'T00:00'));
      toT.items.splice(Math.min(pos,toT.items.length),0,mv);save();render()}
  }else render();
});
document.addEventListener('pointercancel',()=>{if(drag&&drag.ghost)drag.ghost.remove();drag=null;render()});
const currentDayKey=()=>iso(ui.date);

/* ---------- Clicks ---------- */
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.view){ui.view=b.dataset.view;render()}
  else if(b.id==='prev'||b.id==='next'){const s=b.id==='prev'?-1:1;
    if(ui.view==='day')ui.date=addD(ui.date,s);else if(ui.view==='week')ui.date=addD(ui.date,7*s);else ui.date=new Date(ui.date.getFullYear(),ui.date.getMonth()+s,1);render()}
  else if(b.id==='today'){ui.date=today();render()}
  else if(b.id==='fab'){openSheet('tray')}
  else if(b.dataset.close!==undefined){closeSheets()}
  else if(b.dataset.go){ui.date=new Date(b.dataset.go+'T00:00');render()}
  else if(b.dataset.open){ui.date=new Date(b.dataset.open+'T00:00');ui.view='day';render()}
  else if(b.dataset.wake){editWake(b.dataset.wake)}
  else if(b.dataset.mode){const k=iso(ui.date);
    if(b.dataset.mode==='tpl'){if(!db.overrides[k])ui.mode[k]='tpl';else if(confirm('Drop the custom plan for this date and use the weekly template?')){delete db.overrides[k];ui.mode[k]='tpl'}}
    else if(b.dataset.mode==='date'){ui.mode[k]='date';editTarget(ui.date)}
    else if(b.dataset.mode==='reset'&&confirm('Use the weekly template for this date again?')){delete db.overrides[k];ui.mode[k]='tpl'}
    save();render()}
  else if(b.dataset.tool==='export'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'}));a.download=`weekly-backup-${iso(today())}.json`;a.click()}
  else if(b.dataset.tool==='import'){const f=document.createElement('input');f.type='file';f.accept='application/json,.json';f.onchange=()=>{const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!x.template)throw 0;db=x;save();render();alert('Backup restored.')}catch(_){alert('That file is not a Weekly backup.')}};r.readAsText(f.files[0])};f.click()}
  else if(b.dataset.tool==='blank'&&confirm('Clear everything and start with a blank week? (Export a backup first if you want to keep it.)')){db={template:blank(),overrides:{}};save();render()}
  else if(b.dataset.tool==='sample'&&confirm('Replace your weekly template with the sample week?')){db.template=seed();save();render()}
});
$('#scrim').onclick=closeSheets;

/* swipe between days */
let sw=null;
main.addEventListener('touchstart',e=>{if(ui.view!=='day'||e.target.closest('.item'))return;sw={x:e.touches[0].clientX,y:e.touches[0].clientY}},{passive:true});
main.addEventListener('touchend',e=>{if(!sw)return;const dx=e.changedTouches[0].clientX-sw.x,dy=e.changedTouches[0].clientY-sw.y;sw=null;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5){ui.date=addD(ui.date,dx<0?1:-1);render()}});

renderTray();render();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
