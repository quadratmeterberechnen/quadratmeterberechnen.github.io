(function(){
var f=document.getElementById('calc');
if(!f)return;
var shape=f.querySelector('#shape'),unit=f.querySelector('#unit');
var groups=f.querySelectorAll('[data-shape]');
var U={m:1,cm:0.01,mm:0.001,ft:0.3048};
var nf=new Intl.NumberFormat('de-DE',{maximumFractionDigits:4});
var items=[],cur=null;

function parse(v){
v=String(v).trim();
if(!v)return NaN;
if(v.indexOf(',')>-1)v=v.replace(/\./g,'').replace(',','.');
return Number(v);
}
function setText(id,x){document.getElementById(id).textContent=nf.format(x);}
function showGroup(){
for(var i=0;i<groups.length;i++)groups[i].hidden=groups[i].getAttribute('data-shape')!==shape.value;
}
function area(){
var g=f.querySelector('[data-shape="'+shape.value+'"]');
var ins=g.querySelectorAll('input'),k=U[unit.value],v={};
for(var i=0;i<ins.length;i++){
var n=parse(ins[i].value);
if(!(n>=0))return null;
v[ins[i].getAttribute('data-k')]=n*k;
}
switch(shape.value){
case'rect':return v.l*v.b;
case'tri':return v.g*v.h/2;
case'circ':return Math.PI*v.r*v.r;
case'trap':return(v.a+v.c)/2*v.h;
}
return null;
}
function update(){
cur=area();
var m=cur===null?0:cur;
setText('r-m2',m);setText('r-cm2',m*10000);setText('r-ha',m/10000);setText('r-ft2',m/0.09290304);
}
function renderSum(){
var ul=document.getElementById('sum'),t=0;
ul.textContent='';
items.forEach(function(it,i){
t+=it.a;
var li=document.createElement('li'),s=document.createElement('span'),b=document.createElement('button');
s.textContent=it.n;
b.type='button';b.textContent='Entfernen';
b.setAttribute('aria-label',it.n+' entfernen');
b.addEventListener('click',function(){items.splice(i,1);renderSum();});
li.appendChild(s);li.appendChild(b);ul.appendChild(li);
});
setText('total',t);
document.getElementById('sum-wrap').hidden=items.length===0;
}

f.addEventListener('input',update);
f.addEventListener('submit',function(e){e.preventDefault();});
shape.addEventListener('change',function(){showGroup();update();});
unit.addEventListener('change',update);
document.getElementById('add').addEventListener('click',function(){
if(cur===null)return;
items.push({n:shape.options[shape.selectedIndex].text+': '+nf.format(cur)+' m²',a:cur});
renderSum();
});
document.getElementById('reset').addEventListener('click',function(){
f.reset();items=[];showGroup();update();renderSum();
});
showGroup();update();
})();
