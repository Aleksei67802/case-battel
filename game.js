const PROMO_CODE="BACKTOSCHOOL2026";
const PROMO_CASE={
 id:"backtoschool2026",name:"BACK TO SCHOOL",price:0,art:"🎒",
 items:[
  ["School Blaster","common",250,"🔫",35],
  ["Classroom Pistol","common",400,"🔫",25],
  ["Notebook SMG","rare",650,"📓",15],
  ["Hallway Hunter","rare",900,"🎯",10],
  ["Red Marker Rifle","epic",1300,"🖊️",6],
  ["Golden Pencil Gun","epic",1800,"✏️",4],
  ["Principal's Deagle","legendary",2600,"🔫",2],
  ["Backpack Karambit","legendary",4000,"🔪",1.5],
  ["Homework Destroyer","mythic",7000,"💥",1.49],
  ["Golden Graduation Blade","mythic",25000,"🏆",0.01]
 ]
};

const CASES=[
 {id:"free",name:"FREE",price:0,art:"🎁",items:[
  ["Sticker Box","common",10,"🎁",35],["Glock Mini","common",10,"🔫",30],["P250 Mini","common",10,"🔫",20],
  ["Knife Token","common",10,"🔪",10],["AWP Toy","common",10,"🎯",5]
 ]},

 // Редчайший предмет в каждом кейсе имеет ровно заданный шанс.
 {id:"c1",name:"BASIC",price:100,art:"🔪",items:[
  ["Rust Knife","common",100,"🔪",48],["Glock Lime","common",150,"🔫",24],["USP Carbon","rare",250,"🔫",14],["Shadow Knife","epic",500,"🗡️",9],["Butterfly Gold","legendary",1000,"🦋",5]
 ]},
 {id:"c2",name:"RARE",price:200,art:"🔫",items:[
  ["P250 Pulse","common",100,"🔫",50],["MP7 Neon","common",200,"🔫",26],["M4A1 Wave","rare",350,"🔫",14],["Karambit Blue","epic",700,"🔪",6],["Butterfly Cyber","legendary",1000,"🦋",4]
 ]},
 {id:"c3",name:"EPIC",price:400,art:"👑",items:[
  ["Five-SeveN Gold","common",100,"🔫",45],["AK Gold Line","common",250,"🔫",25],["M4 Gold","rare",450,"🔫",17],["Deagle Royal","epic",750,"🔫",10],["Karambit Gold","legendary",1000,"🔪",3]
 ]},
 {id:"c4",name:"LEGENDARY",price:500,art:"💎",items:[
  ["Tec-9 Flame","common",100,"🔫",45],["AWP Dragon","rare",300,"🎯",28],["AK Inferno","rare",500,"🔫",17],["Talon Crimson","epic",800,"🔪",8],["Dragon Karambit","legendary",1000,"🐉",2]
 ]},

 {id:"c5",name:"PREMIUM",price:1000,art:"💠",items:[
  ["FAMAS Ice","common",500,"🔫",28],["Galil Frost","common",700,"🔫",22],["M4A1 Arctic","rare",1000,"🔫",18],
  ["AWP Glacier","rare",1500,"🎯",12],["AK Aurora","epic",2000,"🔫",8],["Talon Ice","epic",2500,"🔪",5],
  ["Butterfly Pearl","legendary",3000,"🦋",3],["Karambit Diamond","legendary",3500,"💎",2],["Dragon AWP","legendary",4000,"🐉",1],["Phoenix Knife","mythic",5000,"🔥",1]
 ]},
 {id:"c6",name:"ULTRA",price:2000,art:"⚡",items:[
  ["USP Plasma","common",1000,"🔫",24],["M4A4 Volt","common",1300,"🔫",20],["AK Neon Storm","rare",1800,"🔫",16],
  ["AWP Thunder","rare",2500,"🎯",12],["Butterfly Volt","epic",3500,"🦋",8],["Karambit Pulse","epic",4500,"🔪",6],
  ["Talon Lightning","legendary",5500,"⚡",5],["M4A1 Hyper","legendary",6500,"🔫",4],["Dragon Blade","mythic",8000,"🐉",4.1],["Galaxy Karambit","mythic",10000,"🌌",0.9]
 ]},
 {id:"c7",name:"MYTHIC",price:3000,art:"🌌",items:[
  ["AK Nebula","common",1500,"🔫",22],["M4 Cosmic","common",2200,"🔫",18],["AWP Eclipse","rare",3000,"🎯",15],
  ["Deagle Galaxy","rare",4000,"🔫",12],["Butterfly Void","epic",6000,"🦋",9],["Karambit Nova","epic",8000,"🔪",7],
  ["Talon Meteor","legendary",10000,"☄️",6],["Dragon AK","legendary",12000,"🐉",5],["Phoenix Blade","mythic",15000,"🔥",5.2],["Cosmic Dragon","mythic",20000,"🐲",0.8]
 ]},
 {id:"c8",name:"LEGEND",price:100000,art:"👑",items:[
  ["M4A4 Royal","rare",20000,"🔫",20],["AK Emperor","rare",30000,"🔫",17],["AWP Monarch","epic",40000,"🎯",14],
  ["Butterfly Crown","epic",55000,"🦋",12],["Karambit Royal","legendary",70000,"🔪",10],["Dragon AWP Gold","legendary",85000,"🐉",9],
  ["Phoenix Crown","mythic",100000,"🔥",7],["Talon Imperial","mythic",120000,"⚔️",5.5],["Galaxy Dragon","legendary",140000,"🐲",5],["Emperor Dragon Knife","legendary",150000,"👑",0.5]
 ]},
 {id:"c9",name:"DRAGON K",price:200000,art:"🐉",items:[
  ["AK Dragonfire","rare",50000,"🔫",20],["AWP Red Dragon","epic",70000,"🎯",17],["M4 Infernal","epic",90000,"🔫",14],
  ["Butterfly Inferno","legendary",110000,"🦋",12],["Karambit Hellfire","legendary",130000,"🔪",10],["Talon Dragon","mythic",145000,"🐉",9],
  ["Phoenix Dragon","mythic",160000,"🔥",7],["Dragon Crown","legendary",175000,"👑",5.5],["Ancient Dragon","mythic",190000,"🐲",5.4],["Dragon King","mythic",200000,"🐉",0.1]
 ]}
];

// Все предметы из кейсов доступны как цели апгрейдера.
const SKINS=[...new Map(CASES.flatMap(c=>c.items.map(x=>[x[0]+"|"+x[2],x])).map(([k,x])=>[k,x])).values()];

let balance=Number(localStorage.cb_balance_v5 ?? 100);
let inv=[];
try{inv=JSON.parse(localStorage.cb_inv_v5 ?? "[]");if(!Array.isArray(inv))inv=[]}catch{inv=[]}
let filter="all",busy=false,fromId="",toKey="";

const $=id=>document.getElementById(id);
const money=n=>Math.round(n).toLocaleString("ru-RU");
function save(){
 localStorage.cb_balance_v5=balance;
 localStorage.cb_inv_v5=JSON.stringify(inv);
 $("balance").textContent=money(balance);
 $("count").textContent=inv.length;
}
function item(name,rarity,value,emoji){return{id:Date.now()+"_"+Math.random().toString(36).slice(2),name,rarity,value,emoji}}
function drop(c){
 const total=c.items.reduce((s,x)=>s+x[4],0),r=Math.random()*total;
 let n=0;
 for(const x of c.items){n+=x[4];if(r<n)return item(x[0],x[1],x[2],x[3])}
 const x=c.items.at(-1);return item(x[0],x[1],x[2],x[3]);
}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function renderCases(){
 const regular=CASES.map(c=>{
  const values=c.items.map(x=>x[2]),min=Math.min(...values),max=Math.max(...values);
  return `<article class="case">
  <button class="insideBtn" type="button" onclick="showRetreat('${c.id}')">ЧТО ВНУТРИ</button>
  <span class="tag">${c.name}</span><div class="art">${c.art}</div>
  <h3>${c.name}<span class="price">◆ ${money(c.price)}</span></h3>
  <p>Дропы от ◆ ${money(min)} до ◆ ${money(max)}</p>
  <div class="caseBtns"><button class="open" onclick="openCase('${c.id}')">${c.price===0?"БЕСПЛАТНО":"ОТКРЫТЬ"}</button></div>
 </article>`
 }).join("");
 $("caseGrid").innerHTML=regular;
}

function renderInv(){
 const a=filter==="all"?inv:inv.filter(x=>x.rarity===filter);
 $("count").textContent=inv.length;
 if(!a.length){$("inv").innerHTML='<div style="grid-column:1/-1;text-align:center;padding:50px;color:#666a83">Инвентарь пуст. Открой кейс, чтобы получить скин.</div>';return}
 $("inv").innerHTML=a.slice().reverse().map(x=>`
 <article class="item"><div class="emoji">${x.emoji}</div><div class="rarity">${x.rarity}</div>
 <h4>${x.name}</h4><div class="value">◆ ${money(x.value)}</div>
 <button class="sell" onclick="sell('${x.id}')">ПРОДАТЬ · ◆ ${money(x.value)}</button></article>`).join("");
}

function showRetreat(id){
 const c=id==="backtoschool2026"?PROMO_CASE:CASES.find(x=>x.id===id);if(!c)return;
 const total=c.items.reduce((s,x)=>s+x[4],0);
 const rows=c.items.map(x=>{
  const chance=x[4]/total*100;
  return `<div class="dropRow"><div class="dropIcon">${x[3]}</div><div class="dropInfo"><b>${x[0]}</b><span>${x[1]} · ◆ ${money(x[2])}</span></div><strong>${chance<1?chance.toFixed(2):chance.toFixed(chance%1?2:0)}%</strong></div>`;
 }).join('');
 $("retreatTitle").textContent=`${c.name} · SHOW RETREAT`;
 $("retreatText").innerHTML=`<div class="dropList">${rows}</div>`;
 $("retreatModal").classList.remove("hidden");
}

function openCase(id){
 if(busy)return;
 if(id==="backtoschool2026"){openPromoModal();return}
 const c=CASES.find(x=>x.id===id);if(!c)return;
 if(balance<c.price){toast("Нужно ещё ◆ "+money(c.price-balance));return}
 balance-=c.price;
 const won=drop(c);busy=true;save();
 $("modal").classList.remove("hidden");$("modalTitle").textContent="КРУТИМ "+c.name;
 $("modalText").textContent="Ищем твой дроп...";$("modalBtn").classList.add("hidden");
 setTimeout(()=>{
  inv.push(won);busy=false;save();renderInv();
  $("modalTitle").textContent="ДРОП!";
  $("modalText").innerHTML=`${won.emoji} <b>${won.name}</b><br>Стоимость: ◆ ${money(won.value)}`;
  $("modalBtn").textContent="ЗАБРАТЬ";$("modalBtn").classList.remove("hidden");
 },2300);
}
function openPromoModal(){
 const input=$("promoInput"); input.value=""; input.placeholder="Введи промокод"; input.classList.remove("promoError");
 $("promoModal").classList.remove("hidden"); setTimeout(()=>input.focus(),50);
}
function closePromoModal(){$("promoModal").classList.add("hidden")}
function submitPromo(){
 if(busy)return;
 const input=$("promoInput"),code=input.value.trim().toUpperCase();
 if(code!==PROMO_CODE){
  input.value="";input.placeholder="НЕВЕРНЫЙ ПРОМОКОД";input.classList.add("promoError");
  toast("Неверный промокод");
  setTimeout(()=>{input.placeholder="Введи промокод";input.classList.remove("promoError")},1400);
  return;
 }
 closePromoModal();
 const won=drop(PROMO_CASE);busy=true;
 $("modal").classList.remove("hidden");$("modalTitle").textContent="BACK TO SCHOOL";
 $("modalText").textContent="Промокод принят! Открываем ящик...";
 $("modalBtn").classList.add("hidden");
 setTimeout(()=>{
  inv.push(won);busy=false;save();renderInv();
  $("modalTitle").textContent="🎒 ТВОЙ ПРЕДМЕТ!";
  $("modalText").innerHTML=`${won.emoji} <b>${won.name}</b><br>Стоимость: ◆ ${money(won.value)}`;
  $("modalBtn").textContent="ЗАБРАТЬ";$("modalBtn").classList.remove("hidden");
 },2300);
}

function sell(id){
 const i=inv.findIndex(x=>String(x.id)===String(id));if(i<0)return;
 const x=inv[i];inv.splice(i,1);balance+=Number(x.value)||0;save();renderInv();
 if(fromId===x.id){fromId="";toKey=""}
 fillSelects();updateUpgrade();toast("Продано за ◆ "+money(x.value));
}
function skinKey(x){return x[0]+"|"+x[2]}
function fillSelects(){
 const from=$("from"),to=$("to");
 from.innerHTML='<option value="">Выбери предмет из инвентаря</option>'+
 inv.map(x=>`<option value="${x.id}">${x.emoji} ${x.name} — ◆ ${money(x.value)}</option>`).join("");
 const f=inv.find(x=>x.id===fromId);
 if(!f)fromId="";
 from.value=fromId;
 const targets=SKINS.filter(x=>f&&x[2]>f.value).sort((a,b)=>a[2]-b[2]);
 to.innerHTML='<option value="">Выбери скин дороже</option>'+
 targets.map(x=>`<option value="${skinKey(x)}">${x[3]} ${x[0]} — ◆ ${money(x[2])}</option>`).join("");
 to.value=toKey;
 if(!targets.some(x=>skinKey(x)===toKey))toKey="";
}
function findSkin(key){return SKINS.find(x=>skinKey(x)===key)}
function card(el,x,empty){
 el.innerHTML=x?`<div><div class="big">${x[3]||x.emoji}</div><b>${x[0]||x.name}</b><small>◆ ${money(x[2]||x.value)}</small></div>`:empty;
}
function updateUpgrade(){
 const f=inv.find(x=>String(x.id)===String($("from").value));
 const t=findSkin($("to").value);
 if(f)fromId=f.id;
 else if(!$("from").value)fromId="";
 if(t)toKey=skinKey(t);
 card($("fromCard"),f,"Выбери предмет из инвентаря");
 card($("toCard"),t,"Выбери более дорогой скин");
 if(f&&t&&t[2]>f.value){
  const ch=Math.max(1,Math.min(95,f.value/t[2]*100));
  $("chance").textContent=ch.toFixed(0)+"%";$("chanceBar").style.width=ch+"%";
  $("upgradeBtn").disabled=busy;
 }else{$("chance").textContent="—";$("chanceBar").style.width="0";$("upgradeBtn").disabled=true}
}
function upgrade(){
 if(busy)return;
 const f=inv.find(x=>String(x.id)===String($("from").value)),t=findSkin($("to").value);
 if(!f||!t||t[2]<=f.value)return;
 const ch=Math.max(1,Math.min(95,f.value/t[2]*100));
 const ok=Math.random()*100<ch;busy=true;
 $("modal").classList.remove("hidden");$("modalTitle").textContent="АПГРЕЙД...";
 $("modalText").textContent=`Шанс ${ch.toFixed(0)}% · крутим...`;$("modalBtn").classList.add("hidden");
 setTimeout(()=>{
  const i=inv.findIndex(x=>x.id===f.id);if(i>=0)inv.splice(i,1);
  if(ok){inv.push(item(t[0],t[1],t[2],t[3]));$("modalTitle").textContent="УСПЕХ!";$("modalText").innerHTML=`${t[3]} <b>${t[0]}</b><br>Теперь стоит ◆ ${money(t[2])}`}
  else{$("modalTitle").textContent="НЕ ПОВЕЗЛО";$("modalText").innerHTML=`Шанс был <b>${ch.toFixed(0)}%</b>.<br>Скин сгорел.`}
  busy=false;fromId="";toKey="";save();renderInv();fillSelects();updateUpgrade();
  $("modalBtn").textContent="ЗАКРЫТЬ";$("modalBtn").classList.remove("hidden");
 },2300);
}
$("from").onchange=()=>{fromId=$("from").value;toKey="";fillSelects();updateUpgrade()};
$("to").onchange=()=>{toKey=$("to").value;updateUpgrade()};
$("upgradeBtn").onclick=upgrade;
$("modalBtn").onclick=()=>{if(!busy)$("modal").classList.add("hidden")};
$("retreatClose").onclick=()=>$("retreatModal").classList.add("hidden");
$("promoSubmit").onclick=submitPromo;
$("promoClose").onclick=closePromoModal;
$("promoInput").addEventListener("keydown",e=>{if(e.key==="Enter")submitPromo()});
$("promoModal").onclick=e=>{if(e.target.id==="promoModal")closePromoModal()};

$("retreatModal").onclick=e=>{if(e.target.id==="retreatModal")$("retreatModal").classList.add("hidden")};
$("filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;filter=b.dataset.f;document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("on"));b.classList.add("on");renderInv()};
$("reset").onclick=()=>{if(confirm("Сбросить баланс и инвентарь?")){balance=100;inv=[];fromId="";toKey="";save();renderInv();fillSelects();updateUpgrade()}};
document.querySelector("nav").onclick=e=>{
 const b=e.target.closest("button[data-page]");if(!b)return;
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(b.dataset.page).classList.add("active");
 document.querySelectorAll("nav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 if(b.dataset.page==="upgrade"){fillSelects();updateUpgrade()}
};
renderCases();save();renderInv();fillSelects();updateUpgrade();
