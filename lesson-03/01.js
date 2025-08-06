// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage(a, b) {
    let avg = (a + b) / 2;
    return avg;
}

//проще и короче
function avg(a, b) {
  return (a + b) / 2;
}


let result = calculateAverage (4,9)
console.log(result);




// // функция в функции
// function sum(a, b) {
//   return a + b;
// }

// function calculateAverage(a, b) {
//   return sum(a, b) / 2;
// }

// let result = calculateAverage(4, 9);
// console.log(result); // 6.5
