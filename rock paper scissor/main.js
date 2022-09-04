let x = 0;
let p = 0;
let c = 0;
let newp = document.createElement("p");
newp.setAttribute('id','resultdisplay');
let score = document.createElement("p");
score.setAttribute('id','scores');
let result = document.querySelector(".result");
result.appendChild(newp);
result.appendChild(score);
function scorecard(){
    score.textContent = `You: ${p}     Computer: ${c}`;
    if(x==5){
        if(p>c){
            newp.textContent = "You have won the game!!";
            x = 0;
            p = 0;
            c = 0;
        }
        else{
            newp.textContent = "You have lost the game!!";
            x = 0;
            p = 0;
            c = 0;
        }
    }
}
function tie(){
    newp.textContent = "It's a tie";
    scorecard();
}
function playerwon(){
    newp.textContent = "You won this round!";
    scorecard();
}
function compwon(){
    newp.textContent = "Computer won this round!";
    scorecard();
}

function frock(){
    let str = "ROCK";
    let arr = ["ROCK","PAPER","SCISSOR"];
    let compstr = arr[Math.floor(Math.random() * arr.length)];
    if(compstr=="ROCK"){
        tie();
    }else if(compstr=="PAPER"){
        x++;
        c++;
        compwon();
    }else{
        x++;
        p++;
        playerwon();
    }
}
function fpaper(){
    let str = "PAPER";
    let arr = ["ROCK","PAPER","SCISSOR"];
    let compstr = arr[Math.floor(Math.random() * arr.length)];
    if(compstr=="PAPER"){
        tie();
    }else if(compstr=="SCISSOR"){
        x++;
        c++;
        compwon();
    }else{
        x++;
        p++;
        playerwon();
    }
}
function fscissor(){
    let str = "SCISSOR";
    let arr = ["ROCK","PAPER","SCISSOR"];
    let compstr = arr[Math.floor(Math.random() * arr.length)];
    if(compstr=="SCISSOR"){
        tie() ;
    }else if(compstr=="ROCK"){
        x++;
        c++;
        compwon();
    }else{
        x++;
        p++;
        playerwon();
    }
}






