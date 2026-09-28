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
try{inv=JSON.parse(localStorage.cb_inv_v5 ?? "[]");if(!Array.isArray(inv))inv=[];inv=inv.map(x=>({...x,favorite:x.favorite===true}))}catch{inv=[]}
let filter="all",busy=false,fromId="",toKey="",upgradeMode="skin";

const $=id=>document.getElementById(id);
const money=n=>Math.round(n).toLocaleString("ru-RU");
function save(){
 localStorage.cb_balance_v5=balance;
 localStorage.cb_inv_v5=JSON.stringify(inv);
 $("balance").textContent=money(balance);
 $("count").textContent=inv.length;
}
function item(name,rarity,value,emoji){return{id:Date.now()+"_"+Math.random().toString(36).slice(2),name,rarity,value,emoji,favorite:false}}

// Картинки оружия. Один тип картинки используется для всех соответствующих скинов.
const WEAPON_IMAGES={
 butterfly:"assets/skins/butterfly.png",
 karambit:"assets/skins/karambit.png",
 pistol:"assets/skins/glock.png",
 rifle:"assets/skins/rifle.png"
};
function weaponImagePath(name){
 const n=String(name||'').toLowerCase();
 if(n.includes('butterfly')) return WEAPON_IMAGES.butterfly;
 if(n.includes('karambit')) return WEAPON_IMAGES.karambit;
 // Пистолеты
 if(/glock|p250|usp|five-seve[nн]|deagle|tec-9|pistol|deagle/i.test(n)) return WEAPON_IMAGES.pistol;
 // Автоматы / штурмовые винтовки / SMG
 if(/\bak\b|ak |\bm4\b|m4a1|m4a4|mp7|famas|galil|smg|rifle|blaster/i.test(n)) return WEAPON_IMAGES.rifle;
 return '';
}
function weaponVisual(x, cls='weaponImg'){
 const name=x?.name ?? x?.[0] ?? '';
 const emoji=x?.emoji ?? x?.[3] ?? '';
 const src=weaponImagePath(name);
 return src ? `<img class="${cls}" src="${src}" alt="${name}">` : emoji;
}
function drop(c){
 const total=c.items.reduce((s,x)=>s+x[4],0),r=Math.random()*total;
 let n=0;
 for(const x of c.items){n+=x[4];if(r<n)return item(x[0],x[1],x[2],x[3])}
 const x=c.items.at(-1);return item(x[0],x[1],x[2],x[3]);
}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function formatChance(n){
 if(!Number.isFinite(n)||n<=0)return"0%";
 const digits=n<1?4:n<10?2:1;
 return n.toFixed(digits).replace(/\.?0+$/,"")+"%";
}
function formatNumber(n){return Number(n||0).toLocaleString("ru-RU",{maximumFractionDigits:4})}
function renderCases(){
 const promoUsed=localStorage.getItem("backToSchool2026Used")==="1";
 const promoCard=`<article class="case">
  <button class="insideBtn" type="button" onclick="showRetreat('promo')">ЧТО ВНУТРИ</button>
  <span class="tag">BACK TO SCHOOL</span>
  <div class="art">🎒</div>
  <h3>BACK TO SCHOOL<span class="price">${promoUsed?"✓ ОТКРЫТ":"🔐 PROMO"}</span></h3>
  <p>${promoUsed?"Этот промо-кейс уже открыт":"10 предметов · нужен промокод"}</p>
  <div class="caseBtns"><button class="open" ${promoUsed?"disabled":""} onclick="openCase('promo')">${promoUsed?"УЖЕ ОТКРЫТ":"ОТКРЫТЬ"}</button></div>
 </article>`;
 const regular=CASES.map(c=>{
  const values=c.items.map(x=>x[2]),min=Math.min(...values),max=Math.max(...values);
  return `<article class="case">
  <button class="insideBtn" type="button" onclick="showRetreat('${c.id}')">ЧТО ВНУТРИ</button>
  <span class="tag">${c.name}</span><div class="art">${c.art}</div>
  <h3>${c.name}<span class="price">◆ ${money(c.price)}</span></h3>
  <p>Дропы от ◆ ${money(min)} до ◆ ${money(max)}</p>
  <div class="caseBtns"><button class="open" onclick="openCase('${c.id}')">${c.price===0?"БЕСПЛАТНО":"ОТКРЫТЬ"}</button></div>
 </article>`;
 }).join("");
 $("caseGrid").innerHTML=promoCard+regular;
}

function renderInv(){
 const a=filter==="all"?inv:inv.filter(x=>x.rarity===filter);
 $("count").textContent=inv.length;
 if(!a.length){$("inv").innerHTML='<div style="grid-column:1/-1;text-align:center;padding:50px;color:#666a83">Инвентарь пуст. Открой кейс, чтобы получить скин.</div>';return}
  $("inv").innerHTML=a.slice().reverse().map(x=>`
  <article class="item"><div class="itemTop"><div class="rarity">${x.rarity}</div><button class="favoriteBtn ${x.favorite?"on":""}" title="${x.favorite?"Убрать из избранного":"Добавить в избранное"}" onclick="toggleFavorite('${x.id}')">★</button></div>
  <div class="emoji">${weaponVisual(x)}</div><h4>${x.name}</h4><div class="value">◆ ${money(x.value)}</div>
  <button class="sell" ${x.favorite?"disabled":""} onclick="sell('${x.id}')">${x.favorite?"★ В ИЗБРАННОМ":"ПРОДАТЬ · ◆ "+money(x.value)}</button></article>`).join("");
}

function toggleFavorite(id){
 const x=inv.find(x=>String(x.id)===String(id));if(!x)return;
 x.favorite=!x.favorite;save();renderInv();fillSelects();updateUpgrade();
 toast(x.favorite?"Добавлено в избранное":"Убрано из избранного");
}

function showRetreat(id){
 const c=id==="promo"?PROMO_CASE:CASES.find(x=>x.id===id);
 if(!c)return;
 const items=c.items||[];
 $("modal").classList.remove("hidden");
 $("modalTitle").textContent=id==="promo"?"ЧТО ВНУТРИ — BACK TO SCHOOL":"ЧТО ВНУТРИ";
 $("modalText").innerHTML=items.map(x=>`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid #ffffff10"><span class="retreatIcon">${weaponVisual(x, "weaponImg smallWeapon")}</span><span style="flex:1;text-align:left;font-weight:800">${x[0]}</span><span style="font-size:11px;opacity:.7">${x[4]}%</span></div>`).join("");
 $("modalBtn").textContent="ЗАКРЫТЬ";
 $("modalBtn").classList.remove("hidden");
}


function rarityClass(r){ return String(r||"common").toLowerCase().replace(/[^a-z]/g,""); }
function itemFromTuple(x){ return {name:x[0],rarity:x[1],value:x[2],emoji:x[3]}; }

function buildCaseRoulette(c, won){
 const box=$("caseRoulette"), track=$("rouletteTrack");
 box.classList.add("active"); $("upgradeWheel").classList.remove("active");
 const source=c.items.map(itemFromTuple);
 const cards=[];
 // Target is near the end, with plenty of decoys before it.
 const targetIndex=24;
 for(let i=0;i<31;i++){
   const x = i===targetIndex ? won : source[Math.floor(Math.random()*source.length)];
   cards.push(`<div class="rouletteItem ${rarityClass(x.rarity)}"><div class="riIcon">${weaponVisual(x)}</div><b>${x.name}</b><small>◆ ${money(x.value)}</small></div>`);
 }
 track.innerHTML=cards.join("");
 track.style.transition="none";
 track.style.transform="translateX(0px)";
 requestAnimationFrame(()=>{
   const itemW=130;
   const viewport=box.querySelector(".rouletteViewport");
   const center=(viewport.clientWidth/2);
   const targetCenter=targetIndex*itemW+60;
   const end=center-targetCenter;
   track.style.transition="transform 3.7s cubic-bezier(.08,.72,.12,1)";
   track.style.transform=`translateX(${end}px)`;
 });
}

function showUpgradeWheel(ch, ok){
 const box=$("upgradeWheel"), ring=$("upgradeRing"), pointer=$("upgradePointer");
 $("caseRoulette").classList.remove("active"); box.classList.add("active");
 const deg=Math.max(1,Math.min(95,ch))*3.6;
 ring.style.setProperty("--successDeg",deg+"deg");
 $("wheelChance").textContent=formatChance(ch);
 pointer.style.transition="none";
 pointer.style.transform="translateX(-50%) rotate(0deg)";
 requestAnimationFrame(()=>{
   // The pointer is fixed at the top; only this pointer rotates.
   let angle;
   if(ok){
     angle=deg*.18 + Math.random()*Math.max(2,deg*.64);
   }else{
     angle=deg + 8 + Math.random()*Math.max(5,360-deg-16);
   }
   angle += 360*(4+Math.floor(Math.random()*3));
   pointer.style.transition="transform 3.8s cubic-bezier(.08,.72,.12,1)";
   pointer.style.transform=`translateX(-50%) rotate(${angle}deg)`;
 });
}

function hideAnimationLayers(){
 $("caseRoulette").classList.remove("active");
 $("upgradeWheel").classList.remove("active");
}
function openCase(id){
 if(busy)return;
 if(id==="promo" && localStorage.getItem("backToSchool2026Used")==="1"){
  toast("Этот промо-кейс уже был открыт"); return;
 }
 if(id==="promo"){openPromoModal();return}
 const c=CASES.find(x=>x.id===id);if(!c)return;
 if(balance<c.price){toast("Нужно ещё ◆ "+money(c.price-balance));return}
 balance-=c.price;
 const won=drop(c);busy=true;save();
 $("modal").classList.remove("hidden");
 $("modalTitle").textContent="ОТКРЫВАЕМ "+c.name;
 $("modalText").textContent="Лента разгоняется...";
 $("modalBtn").classList.add("hidden");
 buildCaseRoulette(c,won);
 setTimeout(()=>{
  inv.push(won);busy=false;save();renderInv();
  $("modalTitle").textContent="🎉 ТВОЙ ДРОП!";
  $("modalText").innerHTML=`${weaponVisual(won)} <b>${won.name}</b><br>${won.rarity} · ◆ ${money(won.value)}`;
  $("modalBtn").textContent="ЗАБРАТЬ";$("modalBtn").classList.remove("hidden");
 },3900);
}
function openPromoModal(){
 if(localStorage.getItem("backToSchool2026Used")==="1"){
  toast("Этот промо-кейс уже был открыт");
  return;
 }
 const input=$("promoInput"); if(!input)return;
 input.value=""; input.placeholder="Введи промокод";
 input.classList.remove("promoError");
 $("promoModal").classList.remove("hidden");
 setTimeout(()=>input.focus(),50);
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
 localStorage.setItem("backToSchool2026Used","1");
 renderCases();
 const won=drop(PROMO_CASE);busy=true;save();
 $("modal").classList.remove("hidden");
 $("modalTitle").textContent="BACK TO SCHOOL";
 $("modalText").textContent="Лента разгоняется...";
 $("modalBtn").classList.add("hidden");
 buildCaseRoulette(PROMO_CASE,won);
 setTimeout(()=>{
  inv.push(won);busy=false;save();renderInv();
  $("modalTitle").textContent="🎒 ТВОЙ ПРЕДМЕТ!";
  $("modalText").innerHTML=`${weaponVisual(won)} <b>${won.name}</b><br>${won.rarity} · ◆ ${money(won.value)}`;
  $("modalBtn").textContent="ЗАБРАТЬ";$("modalBtn").classList.remove("hidden");
 },3900);
}

function sell(id){
 const i=inv.findIndex(x=>String(x.id)===String(id));if(i<0)return;
  const x=inv[i];if(x.favorite){toast("Избранный скин нельзя продать");return}
  inv.splice(i,1);balance+=Number(x.value)||0;save();renderInv();
 if(fromId===x.id){fromId="";toKey=""}
 fillSelects();updateUpgrade();toast("Продано за ◆ "+money(x.value));
}
function sellAll(){
 const sellable=inv.filter(x=>!x.favorite);
 if(!sellable.length){toast("Нет скинов для продажи");return}
 const total=sellable.reduce((sum,x)=>sum+(Number(x.value)||0),0);
 if(!confirm(`Продать ${sellable.length} скинов за ◆ ${money(total)}?`))return;
 inv=inv.filter(x=>x.favorite);balance+=total;fromId="";toKey="";
 save();renderInv();fillSelects();updateUpgrade();toast("Проданы все скины, кроме избранных");
}
function skinKey(x){return x[0]+"|"+x[2]}
function fillSelects(){
 const from=$("from"),to=$("to");
 from.innerHTML='<option value="">Выбери предмет из инвентаря</option>'+
 inv.map(x=>`<option value="${x.id}">${x.name} — ◆ ${money(x.value)}</option>`).join("");
  from.disabled=upgradeMode==="currency";
 const f=inv.find(x=>x.id===fromId);
 if(!f)fromId="";
 from.value=fromId;
  const cash=upgradeMode==="skinCurrency"?getUpgradeCurrency():0;
  const sourceValue=(f?.value||0)+cash;
  const targets=SKINS.filter(x=>f&&x[2]>sourceValue).sort((a,b)=>a[2]-b[2]);
 to.innerHTML='<option value="">Выбери скин дороже</option>'+
 targets.map(x=>`<option value="${skinKey(x)}">${x[0]} — ◆ ${money(x[2])}</option>`).join("");
  to.disabled=upgradeMode==="currency";
 to.value=toKey;
 if(!targets.some(x=>skinKey(x)===toKey))toKey="";
  $("upgradeBalance").textContent="Баланс: ◆ "+money(balance);
  $("currencyMultiplier").disabled=upgradeMode!=="currency";
  updateCurrencyPreview();
}
function findSkin(key){return SKINS.find(x=>skinKey(x)===key)}
function getUpgradeCurrency(){
 const n=Math.floor(Number($("upgradeCurrency").value||0));
 return Number.isFinite(n)&&n>0?n:0;
}
function getCurrencyMultiplier(){return Math.max(2,Number($("currencyMultiplier").value)||2)}
function updateCurrencyPreview(){
 const amount=getUpgradeCurrency(),mult=getCurrencyMultiplier();
 $("currencyTarget").textContent=amount?`При успехе получишь ◆ ${money(amount*mult)} · шанс ${formatChance(Math.min(95,100/mult))}`:"Введи сумму для расчёта";
}
function card(el,x,empty){
 el.innerHTML=x?`<div><div class="big">${weaponVisual(x)}</div><b>${x[0]||x.name}</b><small>◆ ${money(x[2]||x.value)}</small></div>`:empty;
}
function updateUpgrade(){
  const f=upgradeMode==="currency"?null:inv.find(x=>String(x.id)===String($("from").value));
  const t=upgradeMode==="currency"?null:findSkin($("to").value);
  const cash=upgradeMode==="skinCurrency"?getUpgradeCurrency():0;
 if(f)fromId=f.id;
 else if(!$("from").value)fromId="";
 if(t)toKey=skinKey(t);
  if(upgradeMode==="currency"){
   card($("fromCard"),null,"Только валюта");
   card($("toCard"),null,"Валюта после умножения");
   const amount=getUpgradeCurrency(),mult=getCurrencyMultiplier(),ch=Math.min(95,100/mult);
   $("chance").textContent=amount?formatChance(ch):"—";$("chanceBar").style.width=amount?Math.max(ch,.5)+"%":"0";
   $("upgradeNote").textContent="При проигрыше внесённая валюта сгорает. При успехе баланс увеличивается на выбранный множитель.";
   $("upgradeBtn").disabled=busy||!amount||amount>balance;
   return;
  }
  card($("fromCard"),f,"Выбери предмет из инвентаря");
  if(f&&cash) $("fromCard").innerHTML+=`<small>+ ◆ ${money(cash)} валюты</small>`;
  card($("toCard"),t,"Выбери более дорогой скин");
  if(f&&t&&t[2]>f.value+cash){
   const ch=Math.min(95,(f.value+cash)/t[2]*100);
   $("chance").textContent=formatChance(ch);$("chanceBar").style.width=Math.max(ch,.5)+"%";
   $("upgradeNote").textContent=upgradeMode==="skinCurrency"?"При успехе скин заменится на цель, а добавленная валюта будет потрачена. При проигрыше сгорят и скин, и валюта.":"При успехе исходный скин сгорает, а цель отправляется в инвентарь. При проигрыше исходный скин теряется.";
   $("upgradeBtn").disabled=busy||cash>balance;
  }else{$("chance").textContent="—";$("chanceBar").style.width="0";$("upgradeBtn").disabled=true}
}
function upgrade(){
  if(busy)return;
  if(upgradeMode==="currency"){
   const amount=getUpgradeCurrency(),mult=getCurrencyMultiplier();
   if(!amount||amount>balance)return;
   const target=amount*mult,ch=Math.min(95,100/mult),ok=Math.random()*100<ch;
   balance-=amount;busy=true;save();
   $("modal").classList.remove("hidden");$("modalTitle").textContent="АПГРЕЙД ВАЛЮТЫ";
   $("modalText").textContent=`Шанс ${formatChance(ch)} · крутим...`;$("modalBtn").classList.add("hidden");
   showUpgradeWheel(ch,ok);
   setTimeout(()=>{
    if(ok){balance+=target;$("modalTitle").textContent="УСПЕХ!";$("modalText").innerHTML=`Баланс увеличен до <b>◆ ${money(target)}</b>`}
    else{$("modalTitle").textContent="НЕ ПОВЕЗЛО";$("modalText").innerHTML=`Шанс был <b>${formatChance(ch)}</b>.<br>Валюта сгорела.`}
    busy=false;save();updateUpgrade();$("modalBtn").textContent="ЗАБРАТЬ";$("modalBtn").classList.remove("hidden");
   },4000);
   return;
  }
  const f=inv.find(x=>String(x.id)===String($("from").value)),t=findSkin($("to").value),cash=upgradeMode==="skinCurrency"?getUpgradeCurrency():0;
  if(!f||!t||t[2]<=f.value+cash||cash>balance)return;
  const ch=Math.min(95,(f.value+cash)/t[2]*100);
  const ok=Math.random()*100<ch;balance-=cash;busy=true;save();
  $("modal").classList.remove("hidden");$("modalTitle").textContent="АПГРЕЙД СКИНА";
  $("modalText").textContent=`${weaponVisual(f)} ${f.name} → ${weaponVisual(t)} ${t[0]} · шанс ${formatChance(ch)}`;
  $("modalBtn").classList.add("hidden");
  showUpgradeWheel(ch,ok);
  setTimeout(()=>{
   const i=inv.findIndex(x=>x.id===f.id);if(i>=0)inv.splice(i,1);
   if(ok){inv.push(item(t[0],t[1],t[2],t[3]));$("modalTitle").textContent="🎉 УСПЕХ!";$("modalText").innerHTML=`${weaponVisual(t)} <b>${t[0]}</b><br>Теперь стоит ◆ ${money(t[2])}`}
   else{$("modalTitle").textContent="НЕ ПОВЕЗЛО";$("modalText").innerHTML=`Шанс был <b>${formatChance(ch)}</b>.<br>${cash?"Скин и валюта сгорели.":"Скин сгорел."}`}
   busy=false;fromId="";toKey="";save();renderInv();fillSelects();updateUpgrade();
   $("modalBtn").textContent="ЗАБРАТЬ";$("modalBtn").classList.remove("hidden");
  },4000);
}
$("from").onchange=()=>{fromId=$("from").value;toKey="";fillSelects();updateUpgrade()};
$("to").onchange=()=>{toKey=$("to").value;updateUpgrade()};
$("upgradeCurrency").oninput=()=>{fillSelects();updateUpgrade()};
$("currencyMultiplier").onchange=()=>{updateCurrencyPreview();updateUpgrade()};
$("upgradeModes").onclick=e=>{const b=e.target.closest(".modeBtn");if(!b)return;upgradeMode=b.dataset.mode;document.querySelectorAll(".modeBtn").forEach(x=>x.classList.remove("on"));b.classList.add("on");$("currencyUpgrade").classList.toggle("active",upgradeMode==="skinCurrency"||upgradeMode==="currency");$("currencyOnly").classList.toggle("active",upgradeMode==="currency");$("skinSourceSlot").style.display=upgradeMode==="currency"?"none":"";$("skinTargetSlot").style.display=upgradeMode==="currency"?"none":"";$("upgradeArrow").style.display=upgradeMode==="currency"?"none":"";$("upbox").classList.toggle("currencyMode",upgradeMode==="currency");fillSelects();updateUpgrade()};
$("upgradeBtn").onclick=upgrade;
$("modalBtn").onclick=()=>{if(!busy){$("modal").classList.add("hidden");hideAnimationLayers()}};
$("retreatClose").onclick=()=>$("retreatModal").classList.add("hidden");
$("promoSubmit").onclick=submitPromo;
$("promoClose").onclick=closePromoModal;
$("promoInput").addEventListener("keydown",e=>{if(e.key==="Enter")submitPromo()});
$("promoModal").onclick=e=>{if(e.target.id==="promoModal")closePromoModal()};

$("retreatModal").onclick=e=>{if(e.target.id==="retreatModal")$("retreatModal").classList.add("hidden")};
$("filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;filter=b.dataset.f;document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("on"));b.classList.add("on");renderInv()};
$("sellAll").onclick=sellAll;
document.querySelector("nav").onclick=e=>{
 const b=e.target.closest("button[data-page]");if(!b)return;
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(b.dataset.page).classList.add("active");
 document.querySelectorAll("nav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 if(b.dataset.page==="upgrade"){fillSelects();updateUpgrade()}
};
renderCases();save();renderInv();fillSelects();updateUpgrade();
