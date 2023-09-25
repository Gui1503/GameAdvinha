//let secretNumber = Math.trunc(Math.random() * 20) + 1;

let reset = document.getElementById('reset')
let messagem = document.getElementById('msg')
let highscore = document.getElementById('highcore')
let guess = document.getElementById('guess')





let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20
let highcore = 0
 function score(){
    if(score< 20){
        score --
    }
 }



function verificar() {


    if (secretNumber > guess) {
        messagem.innerHTML = 'Tente um numero menor'
        score--
    } else if (secretNumber < guess) {
        messagem.innerHTML = 'Tente um número maior'
        score--

    } else if (guess == secretNumber) {
        messagem.innerHTML = 'Parabéns vc acertou!!!'
        document.body.style.backgroundColor = "green"


    } else {
        menssagem.innerHTML = ' Game over!!!!'
        document.body.style.backgroundColor = "red"
    }


}


document.querySelector('.check').addEventListener('click', checkGuess);








