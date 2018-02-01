console.log("javascript is WORKING")
var zoek = document.querySelector("#zoekbalk");
var compAside = document.querySelector("aside");
var fieldsetFirst = document.querySelector("aside form fieldset:first-of-type");
var formItems= document.querySelector("aside h2");
var buttonLess = document.querySelector("aside form button");

zoek.addEventListener("click", function(){
    formItems.classList.toggle("active");
    fieldsetFirst.classList.toggle("active");
    compAside.classList.toggle("active");
})

buttonLess.addEventListener("click", function(){
    formItems.classList.remove("active");
    fieldsetFirst.classList.remove("active");
    compAside.classList.remove("active");
})


