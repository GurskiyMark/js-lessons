// console.log("script JS в отдельном файле")

// let sum = +prompt("Укажите стартовую сумму", 1000);
// const persent = 15;
// const result = 2000;

// let count = 0

// const depositTerm = +prompt("Укажите срок депозита", 10)

// while (count < depositTerm) {
//     sum = sum + sum * (persent / 100)
//     count = count + 1
//     document.write(count + ": " + sum + "<br>")
// }


// let energy = 10 // начальный уровень энергии робота

// while (energy >= 0) {
//     console.log(`Текущий уровень энергии: ${energy}`)
//     energy -= 1

//     if (energy === 0) {
//         console.log("Робот грустит... 😢 Нужно подзарядить!")
//         break // выходим из цикла, если энергия закончилась
//     } else if (energy <= 3) {
//         console.log("Робот начинает чувствовать усталость... 🥱")
//     } else {
//         console.log("Робот счастлив и бодрствует! 😊")
//     }
//         console.log("Программа завершена. Робот отдыхает.")
// }







// const INITIAL_ENERGY = 10
// const MIN_ENERGY = 0
// const LOW_ENERGY_THRESHOLD = 3

// let energy = INITIAL_ENERGY
// while (energy >= MIN_ENERGY) {
//   console.log(`Текущий уровень энергии: ${energy}`)

//   if (energy === MIN_ENERGY) {
//     console.log('Робот грустит... 😢 Нужно подзарядить!')
//   } else if (energy <= LOW_ENERGY_THRESHOLD) {
//     console.log('Робот начинает чувствовать усталость... 🥱')
//   } else {
//     console.log('Робот счастлив и бодрствует! 😊')
//   }

//   energy--
// }

// console.log('Программа завершена. Робот отдыхает.')

// 🟢 ✅ ❌ 💀 😡 🎉 😎 🧠 🔍 💪 🐣 ⬇️ ⚖️

const SecretNumberMax = 15;
const SecretNumberBig = 10;
const SecretNumberLow = 5;
const SecretNumberMin = 0;

let YourNumber = SecretNumberMax;
while (YourNumber >= SecretNumberMin) {

    console.log(`Текущее число: ${YourNumber}`);
    if (YourNumber === SecretNumberMin){
        console.log("Мы в самом низу 💀" + YourNumber);
    } else if (YourNumber > SecretNumberBig) {
        console.log("Большое число: 💪 " + YourNumber);
    } else if (YourNumber <= SecretNumberBig && YourNumber >= SecretNumberLow){
        console.log("Среднее число: ⚖️ " + YourNumber);
    } else if (YourNumber < SecretNumberLow){
        console.log("маленькое число: 🐣" + YourNumber);
    } 
    
        YourNumber -= 1;
        console.log("цикл завершен 🟢🟢🟢");
        
}