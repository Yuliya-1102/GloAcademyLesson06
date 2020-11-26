'use strict';

function guessNumber() {
    let numGame = 5;
    let numUser = +prompt('Угадай число от 1 до 100');
    if(numUser > 0 && numUser < numGame) {
        alert('Загаданное число меньше');
        guessNumber();
    } else if (numUser > numGame){
        alert('Загаданное число больше');
        guessNumber();
    } else if (isNaN(numUser)) {
        alert('Введи число!');
        guessNumber();
    } else if (numUser === 0) {
        alert('Игра окончена');
    } else if (numUser === numGame) {
        alert('Поздравляю, Вы угадали!!!');
    }
}

guessNumber();