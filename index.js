var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;
var randD1 = "./dice" + rand1 + ".png";
var randD2 = "./dice" + rand2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randD1);
document.querySelectorAll("img")[1].setAttribute("src", randD2);
if(rand1 > rand2){
    document.querySelector("h1").textContent="🏅Player 1 Wins";
}
else if(rand1 === rand2){
    document.querySelector("h1").textContent="🟰Tie🟰";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins🏅";
}
