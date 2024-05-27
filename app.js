let input=document.querySelector("input");
let btn=document.querySelector(".btn");
let paragraph=document.querySelector("p");

btn.addEventListener("click",()=>
paragraph.innerHTML=input.value.charAt(0).toUpperCase() + input.value.toLowerCase());