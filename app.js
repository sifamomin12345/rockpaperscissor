const choices = document.querySelectorAll(".choice");
let userscore = 0;
let comscore = 0;
const msg = document.querySelector(".msgcontainer");
const userscoreUpdated = document.querySelector(".userscoreVal");
const compscoreUpdated = document.querySelector(".compscoreVal");

function comuterChoice(){
    let choices = ["Rock","Paper","Scissors"]
    let RandomIndx = Math.floor(Math.random() * 3);
    return choices[RandomIndx];

}
function showWinner(userwin, userchoice, cmpchoice){
    if(userwin){
        msg.innerText=`You Win! Your ${userchoice} beats ${cmpchoice}`;
        userscore++;
        userscoreUpdated.innerText=userscore;
    }else if(userchoice !== cmpchoice){
      msg.innerText=`You lose! Your ${cmpchoice} beats ${userchoice}`;
        comscore++;
        compscoreUpdated.innerText=comscore;
    }
}
function playGame(userchoice){
    //gen comp choice
    let cmpchoice = comuterChoice();
    let userwin = true;
    if(userchoice === cmpchoice){
        msg.innerText = "It's a Draw!";
    }else if(userchoice === "Rock"){
        userwin = cmpchoice === "Scissors";
    }else if(userchoice === "Paper"){
        userwin = cmpchoice === "Rock";
    }else if(userchoice === "Scissors"){
        userwin = cmpchoice === "Paper";
    }
       if(userchoice !== cmpchoice) showWinner(userwin, userchoice, cmpchoice);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id")
        console.log("choice selected",userchoice);
        playGame(userchoice);
    })

});