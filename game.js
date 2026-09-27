const CASES=[
 {id:"c1",name:"STARTER",price:100,art:"🔪",items:[
  ["Rust Knife","common",100,"🔪",52],["Glock Lime","common",150,"🔫",25],["USP Carbon","rare",250,"🔫",14],["Shadow Knife","epic",500,"🗡️",7],["Butterfly Gold","legendary",1000,"🦋",2]
 ]},
 {id:"c2",name:"NEON",price:200,art:"🔫",items:[
  ["P250 Pulse","common",100,"🔫",45],["MP7 Neon","common",200,"🔫",28],["M4A1 Wave","rare",350,"🔫",16],["Karambit Blue","epic",700,"🔪",8],["Butterfly Cyber","legendary",1000,"🦋",3]
 ]},
 {id:"c3",name:"GOLD",price:400,art:"👑",items:[
  ["Five-SeveN Gold","common",100,"🔫",38],["AK Gold Line","common",250,"🔫",27],["M4 Gold","rare",450,"🔫",19],["Deagle Royal","epic",750,"🔫",12],["Karambit Gold","legendary",1000,"🔪",4]
 ]},
 {id:"c4",name:"DRAGON",price:500,art:"🐉",items:[
  ["Tec-9 Flame","common",100,"🔫",35],["AWP Dragon","rare",300,"🎯",28],["AK Inferno","rare",500,"🔫",20],["Talon Crimson","epic",800,"🔪",13],["Dragon Karambit","legendary",1000,"🐉",4]
 ]}
];

// Полный каталог целей апгрейдера. Все цели дороже выбранного предмета.
const SKINS=[
 ["Rust Knife","common",100,"🔪"],["Glock Lime","common",150,"🔫"],["MP7 Neon","common",200,"🔫"],
 ["USP Carbon","rare",250,"🔫"],["AWP Dragon","rare",300,"🎯"],["M4A1 Wave","rare",350,"🔫"],
 ["AK Gold Line","common",400,"🔫"],["AK Inferno","rare",500,"🔫"],["Shadow Knife","epic",500,"🗡️"],
 ["Karambit Blue","epic",700,"🔪"],["Deagle Royal","epic",750,"🔫"],["Talon Crimson","epic",800,"🔪"],
 ["Butterfly Gold","legendary",1000,"🦋"],["Butterfly Cyber","legendary",1000,"🦋"],["Dragon Karambit","legendary",1000,"🐉"]
];

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
 $("caseGrid").innerHTML=CASES.map(c=>`
 <article class="case">
  <span class="tag">${c.name}</span><div class="art">${c.art}</div>
  <h3>${c.name}<span class="price">◆ ${c.price}</span></h3>
  <p>Дропы от ◆ 100 до ◆ 1 000</p>
  <button class="open" onclick="openCase('${c.id}')">ОТКРЫТЬ</button>
 </article>`).join("");
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
function openCase(id){
 if(busy)return;
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
 el.innerHTML=x?`<div><div class="big">${x.emoji}</div><b>${x.name}</b><small>◆ ${money(x.value)}</small></div>`:empty;
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
$("filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;filter=b.dataset.f;document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("on"));b.classList.add("on");renderInv()};
$("reset").onclick=()=>{if(confirm("Сбросить баланс и инвентарь?")){balance=100;inv=[];fromId="";toKey="";save();renderInv();fillSelects();updateUpgrade()}};
document.querySelector("nav").onclick=e=>{
 const b=e.target.closest("button[data-page]");if(!b)return;
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(b.dataset.page).classList.add("active");
 document.querySelectorAll("nav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 if(b.dataset.page==="upgrade"){fillSelects();updateUpgrade()}
};
renderCases();save();renderInv();fillSelects();updateUpgrade();
