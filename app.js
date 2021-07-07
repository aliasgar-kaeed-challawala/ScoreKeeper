const p1Display = document.querySelector("#p1display");
const p2Display = document.querySelector("#p2display");
const resetButton  = document.querySelector("#reset");
const p1Button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const playUpto = document.querySelector("#playupto"); 

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore;
playUpto.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    p1Display.textContent = 0;
    p2Display.textContent = 0;

})
p1Button.addEventListener('click',function(){
    if(p1Score !== winningScore && !isGameOver){
        p1Score++;
        p1Display.textContent = p1Score;
    }
    if(p1Score == winningScore){
        isGameOver = true; 
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');

    }
    
})
p2button.addEventListener('click',function(){
    if(p2Score !== winningScore && !isGameOver){
        p2Score++;
        p2Display.textContent = p2Score;
    }
    if(p2Score == winningScore){
        isGameOver = true; 
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');

}