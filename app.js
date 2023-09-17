var pCount = document.querySelector(".pCount");
var cCount = document.querySelector(".cCount");
var player = document.querySelector(".player");
var computer = document.querySelector(".computer");
var win = document.querySelector(".win");
var i=0;
var s=0;
console.log(pCount);
console.log(cCount);
function play(pChoice){
    var cChoice = ["rock" , "paper" , "scissors"];
    var random = Math.floor(Math.random()*3);
    player.innerText = "Player choice: "+ pChoice;
    computer.innerText = "Computer choice: "+ cChoice[random];
    if(
    (pChoice == "paper" && cChoice[random]=="rock") ||
    (pChoice == "rock" && cChoice[random]=="scissors") ||
    (pChoice == "scissors" && cChoice[random]=="paper")
    ){
        win.innerText = "YOU WIN";
        i++;
        pCount.innerText = "Player: "+ i;
    }else if(
        (pChoice == "paper" && cChoice[random]== "paper") ||
        (pChoice == "rock" && cChoice[random]=="rock") ||
        (pChoice == "scissors" && cChoice[random]=="scissors")
        ){
            win.innerText = "DRAW";
    }else{
        win.innerText = "YOU LOSE";
        s++;
        cCount.innerText = "Computer: "+ s;
    }
}
function reset(){
    pCount.innerText = "Player: "+ 0;
    cCount.innerText = "Computer: "+ 0;
    win.innerText = "";
    player.innerText = "Players choice: ";
    computer.innerText = "Computers choice: ";
}