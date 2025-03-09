let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let message=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");
let uimg=document.querySelector("#uimg");
let cimg=document.querySelector("#cimg");

const compChoice=()=>{
    let comp=["rock","paper","scissors"];
    let randomno=Math.floor(Math.random()*3);
    return comp[randomno];
}

const draw=(userchoice,compch)=>{
    message.innerText="Game is Draw, Play again!";
    message.style.backgroundColor="#0f1111";
    if(compch==="rock"){
        cimg.src="rock.png";
    }else if(compch==="paper"){
        cimg.src="paper.png";
    }else{
        cimg.src="scissors.png";
    }
    if(userchoice==="rock"){
        uimg.src="rock.png";
    }else if(userchoice==="paper"){
        uimg.src="paper.png";
    }else{
        uimg.src="scissors.png";
    }
}

const result=(userWin)=>{
    if(userWin){
        message.innerText="You Win! Computer Lost.";
        message.style.backgroundColor="green";
        userScore++;
        uscore.innerText=userScore;
    }else{
        message.innerText="You Lost! Computer Win.";
        message.style.backgroundColor="red";
        compScore++;
        cscore.innerText=compScore;
    }
}

const playgame=(userchoice)=>{
    console.log("User choice:",userchoice);
    let compch=compChoice();
    console.log("Computer choice:",compch);
    if(userchoice === compch){
        draw(userchoice,compch);
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            //paper,scissors
            uimg.src="rock.png";
            userWin=compch==="paper" ? false : true;
        }else if(userchoice==="paper"){
            //rock,scissors
            uimg.src="paper.png";
            userWin=compch==="scissors" ? false : true;
        }else{
            //rock,paper
            uimg.src="scissors.png";
            userWin=compch==="rock" ? false : true;
        }
        console.log(userWin);
        result(userWin);
    }
    if(compch==="rock"){
        cimg.src="rock.png";
    }else if(compch==="paper"){
        cimg.src="paper.png";
    }else{
        cimg.src="scissors.png";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})