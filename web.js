
function getpercentage(){

var namre= prompt("HEYY!! Enter your name here:")
let obtmarks=document.getElementById("marks1").value;
let totalmarks= document.getElementById("marks2").value;
res=( obtmarks / totalmarks) * 100;
alert("res")
document.querySelector("#res1").innerHTML=(`<h1> HELLOW!! ${name} your percentage is ${res}  </h1>`)


}


