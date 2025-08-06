// const location_1 = 3
// const location_2 = 4
// const location_3 = 5

// const guess = 4
// if (guess === location_1 || guess === location_2 || guess === location_3){
//     alert("HIT!")
// } else {
//     alert("MISS!")
// }


// if (guess === location_1) {
//     alert("HIT")
// } else if (guess === location_2) {
//     alert("HIT")
// } else if (guess === location_3) {
//     alert("HIT")
// } else {
//     alert("MISS!")
// }





// const inStock = true
// const onSale = true

// if(inStock === true){
//     if (onSale === true) {
//         alert("Buy!!!")
//     }
// }

// if(inStock && onSale) {
//     alert("BUY!!!")
// }

// const inStock = true
// const onSale = true
// const price = 100

// if(inStock === true && (onSale === true || price < 80)) {
//     alert("BUY!!!")
// }
// if(inStock && (onSale || price < 80)) {
//     alert("BUY!!!")
// }

// const temp = 83
// const willRain = true
// const humid = (willRain && temp > 80)

// console.log(humid);

// const butIt = (onSale && inStock) //true







// 🟢 ✅ ❌ 💀 😡 🎉 😎 🧠 🔍 💪 🐣 ⬇️ ⚖️

// const randomLoc = Math.floor(Math.random () * 5)
// const location1 = randomLoc
// const location2 = location1 + 1
// const location3 = location2 + +1

// let destroy = false // корабль затоплен
// let hits = 0 //попадание
// let guess = 0 // попытка
// let  guesses = 0;

// while (!destroy){
//     guess = +prompt("введи 0-6")
//     if (guess < 0 || guess > 6) {
//         alert("Ты ввел не то значение, только числа 0-6")

//     } else {
//         guesses += 1;

//     if (guess === location1 || guess === location2 || guess === location3){
//         alert("HIT")
//         hits += 1;
//         if (hits === 3) {
//             alert("Корабль УНИЧТОЖЕН")
//             destroy = true;
//         }
//     }        else {
//         alert("MISS")
//        }
//     }
// }

// const stats = ("У тебя " + hits + " попаданий и " + guesses + " попыток")
// alert(stats)




// /*КАМЕНЬ НОЖНИЦЫ БУМАГА
// Саначала выбирает пользователь,
//  потом идет проверка что он ввел,
// затем выбор комьютера, показывает что выбрал комьютер,
//  далее проверка на ничью,победу,поражение и вывод кто победил*/

// let userChoice          // выбор пользователя
// let computerChoice      // выбор компьютера
// let isWinner = false;   // победиля изначально нет, (для цикла)

// while (!isWinner) {           //до тех пор пока победителя нет т.е. грубо говоря isWinner === false
//     userChoice = prompt("Выберите: \nкамень \nножницы \nбумага ")   // строка ввода пользователя 
//     userChoice = userChoice.toLowerCase()    //делает ввод не чувствительным к регистру

//     if (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага") {   //проверяю корректность ввода
//         alert("❌Вы ввели некорректное значение❌")
//         continue; // если сработал contunie цикл завершиться и не будет учитываться
//     }

//     let randomNum = Math.floor(Math.random() * 3) // выдает рандомное число от 0-2 
//     switch (randomNum) {
//         case 0:
//             computerChoice = "камень"
//             break
//         case 1:
//             computerChoice = "ножницы"
//             break
//         case 2:
//             computerChoice = "бумага"
//             break
//         // default тут не нужен т.к. в If сверху я уже исключил возможность некорректного ввода
//     }
//         alert("Компьютер выбрал: " + computerChoice)

//         // мы делаем if else т.к. нам нужно выбрать только 1 из исодов ничья или победа или поражение
//         if (userChoice === computerChoice) {
//             alert("⚖️Ничья⚖️")
//         } else if (
//             (userChoice === "камень" && computerChoice === "ножницы")||
//             (userChoice === "ножницы" && computerChoice === "бумага")||
//             (userChoice === "бумага" && computerChoice === "камень")
//         ) {
//             alert("🟢ты победил🟢")
//             isWinner = true;
//         } else {
//             alert("😡ты проиграл😡")
//             isWinner = true;
//         }

// }





// /*Задача 1. Угадай число от 1 до 5
// Пользователь вводит число от 1 до 5. Программа генерирует случайное число от 1 до 5.

// Если пользователь угадал — вывести «Угадал!»

// Если число пользователя больше загаданного — вывести «Слишком много»

// Если меньше — вывести «Слишком мало»

// Если введено число вне диапазона — предупредить и попросить ввести снова */

// let userNum
// let computerNum
// let numWinner = false;

// while (!numWinner) {
//     userNum = +prompt("Введи число: от 1 до 5")

//     if (userNum < 1) {
//         alert("Слишком мало")
//         continue;
//     } else if (userNum > 5) {
//         alert("Слишком много")
//         continue;
//     }



//     computerNum = Math.floor(Math.random() * 5) + 1 // поскольку число генерируется от 0, а умножаем мы на 5 т.к. изначаньно 0-4 +1 будет 1-5

//     alert(`Вы выбрали число: ${userNum} \nКомпьютер выбрал: ${computerNum}`)

//     if (userNum === computerNum) {
//         alert("🟢угадал🟢")
//         numWinner = true;
//     } else {
//         alert("Не угадал")
//         numWinner = true;
//     }

// }



// function bark (name, weight) {
//     if (weight > 20){
//         console.log(`${name} says WOOF WOOF`);
//     } else {
//         console.log(`${name} says woof woof`);      
//     }
// }

// bark ("rover", 53)
// bark ("spot", 13)


// function maketea (cups, tea){
//     console.log(`Brewing ${cups} cups of ${tea}`);
// }

// maketea(3, "Earl Grey")




// const depositAmount = 1000
// const yearlyRate = 15
// const depositTermInYears = 2

// function getDepositIncome(amount, rate, term) {
//     let depositIncome = 0
//     let count = 0

//     while (count < term) {
//         depositIncome = depositIncome + amount * (rate / 100)
//         count += 1;
//     }
//     return depositIncome;
// }

// const income_1 = getDepositIncome(depositAmount, yearlyRate, depositTermInYears)
// const income_2 = getDepositIncome(1000, 30, 3)






// Объявляем глобальную переменную для хранения золота
let gold = 100

function createBuilding(buildingName, costGold) {

    const hasEnoughGold = gold >= costGold

    if (hasEnoughGold) {
        gold -= costGold
        console.log(`${buildingName}: work complete!`)
    } else {
        console.log(`${buildingName}: not enough resources!`)
    }
}

// Вызов функции
createBuilding('Tower', 30) // Строим башню, золота хватает
createBuilding('Blacksmith', 140) // Строить кузницу, золота не хватает

// Функция для увеличения ресурсов
function increaseResource(currentAmount, increment) {
    return currentAmount + increment
}

// Увеличение золота
gold = increaseResource(gold, 50)
console.log(`New amount of gold: ${gold}`)





