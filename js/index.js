const text=document.querySelector(".home-text");
 const strText=text.textContent;
const splitText=strText.split("");
 text.textContent="";
for(let i=0; i < splitText.length; i++){
    text.innerHTML +="<span>"+ splitText[i]+"</span>";
 }
 let char=0;
let timer=setInterval(onTick,100);
 function onTick()
{
const span=text.querySelectorAll('span')[char];
span.classList.add('fade');
char++;
if(char === splitText.length){
    complete();
    return;

}
function complete(){
    clearInterval(timer);
    timer=null;
 }
}
var slideIndex=1;
showDivs(slideIndex);
function plusDivs(n)
{
    showDivs(slideIndex+=n)
}
function showDivs(n){
    var i;
    var x=document.getElementsByClassName("myslide");
    if(n>x.length) {slideIndex=1};
    if(n<1) {slideIndex=x.length};
    for(i=0;i<x.length;i++)
    {
        x[i].style.display="none";

    }
    x[slideIndex-1].style.display="block";

}