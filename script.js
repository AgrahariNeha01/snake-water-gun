const choice =["snake","water","gun"];
function computerchoice() {
const randomindx=Math.floor(Math.random()*choice.length);
return choice[randomindx];
}
function playgame(playerchoice) {
    const computer=computerchoice();
    const resultText=document.getElementById("resultText");
    if(playerchoice===computer)
    {
        resultText.textContent="It's a tie!🤞";
    }
    else if(
        (playerchoice==="snake" && computer==="water") ||
        (playerchoice==="gun" && computer==="snake") ||
        (playerchoice==="water" && computer==="gun")
    )
    {
        resultText.textContent="🎉You win!🎉";
    }
    else{
        resultText.textContent="Computer Wins!👎";
    }

}
document.getElementById("snake").addEventListener("click",()=>{
    playgame("snake");
}
);
document.getElementById("water").addEventListener("click",()=>{
    playgame("water");
}
);
document.getElementById("gun").addEventListener("click",()=>{
    playgame("gun");
}
);