let body = document.querySelector("body");
let btn1 = document.getElementById("gtn-grn");
let btn2 = document.getElementById("gtn-red");
let btn3 = document.getElementById("gtn-yel");
let btn4 = document.getElementById("gtn-bla");
btn1.addEventListener('click',(e)=>{
        body.style.backgroundColor ="green";
})
btn2.addEventListener('click',(e)=>{
        body.style.backgroundColor ="red";
})
btn3.addEventListener('click',(e)=>{
        body.style.backgroundColor ="yellow";
})
btn4.addEventListener('click',(e)=>{
        body.style.backgroundColor ="black";
})