const button=document.getElementById("btn");
const button1=document.getElementById("btn1");
const incrementby5=document.getElementById("btnby5");
const decrementby5=document.getElementById("decby5");
const reset=document.getElementById("reset");
const resultbtn=document.getElementById("pr");



let counter=0;
button.addEventListener("click",function(){
    counter=counter+1;
    resultbtn.textContent=counter;

})
button1.addEventListener("click",function(){
    counter=counter-1;
    resultbtn.textContent=counter;
})
incrementby5.addEventListener("click",function(){
    counter=counter+5;
    resultbtn.textContent=counter;
})
decrementby5.addEventListener("click",function(){
    counter=counter-5;
    resultbtn.textContent=counter;
})
reset.addEventListener("click",function(){
    counter=0;
    resultbtn.textContent=counter;
})
