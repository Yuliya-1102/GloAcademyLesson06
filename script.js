'use strict';

function rondomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numGame = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numGame);
    function guessNumber(numGame) {
        let numUser = +prompt('Угадай число от 1 до 100');
        if(numUser > 0 && numUser < numGame) {
            alert('Загаданное число меньше');
            guessNumber(numGame);
        } else if (numUser > numGame){
            alert('Загаданное число больше');
            guessNumber(numGame);
        } else if (isNaN(numUser)) {
            alert('Введи число!');
            guessNumber(numGame);
        } else if (numUser === 0) {
            alert('Игра окончена');
        } else if (numUser === numGame) {
            alert('Поздравляю, Вы угадали!!!');
        }
    }
    guessNumber(numGame);
}

rondomNumber(1, 100);