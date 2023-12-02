function click(e) {
if (document.all) {
if (event.button==2||event.button==3) { alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！");
oncontextmenu='return false';
}
}
if (document.layers) {
if (e.which == 3) {
oncontextmenu='return false';
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){ 
if(window.event.keyCode == 12) { 
window.event.returnValue=false;
return(false); 
} 
}
function fuckyou(){
window.location="https://by.xn--kivy66br3pu7d.top/"; 
}

function click(e) {
if (document.all) {
  if (event.button==2||event.button==3) { 
alert("禁止恶意拿代码的");
oncontextmenu='return false';
}
}
if (document.layers) {
if (e.which == 3) {
oncontextmenu='return false';
}
}
}
if (document.layers) {
fuckyou();
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){ 
if(window.event.keyCode == 123) { 
fuckyou();
window.event.returnValue=false;
return(false); 
} 
}
$(document).keydown(function(e){
   if( e.ctrlKey  == true && e.keyCode == 83 ){
      console.log('ctrl+s');
      return false; 
   }
});
