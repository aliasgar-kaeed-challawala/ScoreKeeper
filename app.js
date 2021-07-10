const p1 = {
    score : 0,
    display : document.querySelector("#p1display"),
    button : document.querySelector("#p1button"),
}
const p2 = {
    score : 0,
    display : document.querySelector("#p2display"),
    button : document.querySelector("#p2button"),
}
const resetButton = document.querySelector("#reset");

const playUpto = document.querySelector("#playupto");

let isGameOver = false;
let winningScore;
playUpto.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    p1.display.textContent = 0;
    p2.display.textContent = 0;

})

function update(player,opponent){
    if (player.score !== winningScore && !isGameOver) {
        player.score++;
        player.display.textContent = player.score;
    }
   
    if (player.score == winningScore) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
        
    }
}
p1.button.addEventListener('click', function () {
    update(p1,p2);

})
p2.button.addEventListener('click', function () {
    update(p2,p1);
})

resetButton.addEventListener('click', reset)

function reset() {
    for(p of [p1,p2]){
        isGameOver = false;
        p.score = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.display.textContent = 0;
        p.button.disabled = false;
        
        
    }
    
}