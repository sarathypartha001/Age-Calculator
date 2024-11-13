let inputDate = document.querySelector(".input-date");
inputDate.max = new Date().toISOString().split("T")[0];
let btn = document.querySelector(".btn");
let result = document.querySelector(".resullt");

function click(){
    alert("Hello");
};

btn.addEventListener("click", function(){
    click();
})