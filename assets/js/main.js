(function(){
var b=document.querySelector('.nav-toggle'),m=document.getElementById('menu');
if(!b||!m)return;
b.addEventListener('click',function(){
var open=b.getAttribute('aria-expanded')==='true';
b.setAttribute('aria-expanded',String(!open));
if(open){m.removeAttribute('data-open');}else{m.setAttribute('data-open','');}
});
document.addEventListener('keydown',function(e){
if(e.key==='Escape'&&m.hasAttribute('data-open')){b.click();b.focus();}
});
})();
