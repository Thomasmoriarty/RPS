

function getUserChoice(){
    const input = prompt("Enter your choice of either rock , paper or scissors: ");
    console.log("you entered: ", input);
    return input
}
function getComputerChoice(){
    const randomNum= Math.floor(Math.random()*3);
    let choice;

    if(randomNum===0){
        choice="rock";
    }
    else if (randomNum===1){
        choice="paper";
    }
    else{
        choice="scissors";
    }
    return choice;
}

function whoWins( choice , input){

    if (input===choice){
        return ("Draw!! User and computer choice the same, please play again.")
    }
    //user wins
    if (input==="paper"  && choice=="rock"){
        return ("user beats computer: paper beats rock")
    }
    if (input==="scissors"  && choice=="paper"){
        return ("user beats computer: scissors beats paper")
    }
    if (input==="rock"  && choice=="scissors"){
        return ("user beats computer: scissors beats paper")
    }
    //user defeats
    if (input==="paper"  && choice=="scissors"){
        return ("user looses to computer: paper looses to scissors")
    }   
    if (input==="scissors"  && choice=="rock"){
        return ("user looses to computer: scissors looses to rock")
    }
    if (input==="rock"  && choice=="paper"){
        return ("user looses to computer: rock looses to scissors")
    }
}

function playgame(){
    const userchoice = getUserChoice();
    const computerchoice = getComputerChoice();
    const result = whoWins(computerchoice,userchoice);
    console.log(result);
}

playgame();