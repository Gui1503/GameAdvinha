// Gerar um número aleatório entre 1 e 20

const randomNumber = Math.trunc(Math.random() * 20) + 1;

 

// Inicializar variáveis

let score = 20;

let highscore = 0;



// Função para exibir uma mensagem

function displayMessage(message) {

  document.querySelector('.message').textContent = message;

}



// Função para atualizar a pontuação

function updateScore() {

  document.querySelector('.score').textContent = score;

}



// Função para atualizar o recorde

function updateHighscore() {

  document.querySelector('.highscore').textContent = highscore;

}



// Função para verificar o palpite

function checkGuess() {

  const guess = Number(document.querySelector('.guess').value);



  // Quando não há um palpite válido

  if (!guess || guess < 1 || guess > 20) {

    displayMessage('⛔️ Insira um número entre 1 e 20!');

    return;

  }



  // Quando o palpite está correto

  if (guess === randomNumber) {

    displayMessage('🎉 Parabéns! Você acertou o número!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = randomNumber;



    if (score > highscore) {

      highscore = score;

      updateHighscore();

    }

  } else {

    if (score > 1) {

      displayMessage(

        guess > randomNumber

          ? '📈 Tente um número menor!'

          : '📉 Tente um número maior!'

      );

      score--;

      updateScore();

    } else {

      displayMessage('💥 Você perdeu o jogo!');

      document.querySelector('body').style.backgroundColor = 'red';

      score = 0;

      updateScore();

    }

  }

}



// Função para reiniciar o jogo

function resetGame() {

  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';

}



// Evento de clique para o botão "Check"

document.querySelector('.check').addEventListener('click', checkGuess);



// Evento de clique para o botão "Again"

document.querySelector('.again').addEventListener('click', resetGame);

