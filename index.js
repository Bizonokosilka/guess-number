let name = prompt("Привет! Как тебя зовут!");

if (name == 'Алёша') {
    alert("Пшёл нахуй отсюда, Алёша!");
}

while (name == '' || name == null) {
    name = prompt("Имя!!! Мне нужно ИМЯ!");
}

alert('Слышь, ' + name + ', я загадал число от 1 до 100. Попробуй, сука, отгадать его за наименьшее количество попыток. После каждой попытки я скажу "много" "мало" или "угадал".');

let number = Math.ceil(Math.random() * 100);
let guess = prompt('Какое число я загадал, ёпта?');
let numberOfGuesses = 0;

while (guess != number) {
    if (guess > number) {
        guess = prompt('Много, сука!');
        numberOfGuesses = numberOfGuesses + 1;
    }

    if (guess < number) {
        guess = prompt('Мало, блядь..');
        numberOfGuesses = numberOfGuesses + 1;
    }

    if(guess == '' || guess == null) {
        guess = prompt("Число, блядь, пиши, умник!");
    }
}

alert ('Ты угадал, ёпта. Такой одарённый, ебать, что сделал это аж за ' + numberOfGuesses + ' попытки. Пойду слеплю тебе памятник из говна и фанеры.');