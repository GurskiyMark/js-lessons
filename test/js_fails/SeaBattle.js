// позиция коробля
const randomLoc = Math.floor(Math.random() * 5); // от 0 до 4
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

//потоплен или нет
let isSunk = false;
//предполагаемая позиция корабля ("выстрел")
let guess;
//добавляем счётчик попаданий
let hits = 0;
//добавляем счётчик выстрелов
let  guesses = 0;


while (isSunk === false) {
    //+prompt... + тут превращает строку в число
    guess = +prompt("⬇️ Введи число 0-6 ⬇️")
    if (guess < 0 || guess > 6) {
        alert("❌Пожалуйста введи только числа от 0-6❌")
    } else {
        //увеличиваем счетчик выстрелов
        guesses = guesses + 1;
        //логическое "или"
        if (guess === location1 || guess === location2 || guess === location3) {
            alert("HIT!🟢")
            //считаем попадания
            hits = hits + 1;
            //если Затопили
            if (hits === 3) {
                isSunk = true;
                alert("💀💀💀ЗАТОПЛЕН💀💀💀")
            }
        } else {
            alert("MISS!😡")
        }
    }

}

const stats = "You have " + hits + " hits out of " + guesses + " shots."
alert(stats)

