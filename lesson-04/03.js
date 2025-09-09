/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function hasElement (arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === el) {
            return true;
        }
    }
            return false;
}
 

function findCommonElements(array1, array2) {
    const result = [];
        for(let i = 0; i < array1.length; i++){
             if(hasElement(array2, array1[i]) && result.includes(array1[i]) === false){
                result.push(array1[i])
             }
        }

     return result

}




// console.log(hasElement([5, 6, 7], 7)); // true
// console.log(hasElement([1, 2, 3], 5)); // false

// function HasElement2 (arr, el) {
//     return arr.includes(el);
// }

// console.log(HasElement2([5, 6, 7], 7)); // true
// console.log(HasElement2([1, 2, 3], 5)); // false


// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const common = []; // сюда будем добавлять элементы

// function isInSecondArray(el, array2) {
//   for(let i = 0; i < array2.length; i++) {
//         if(el === array2[i]) {
//             return true;
//         }
//   }
//             return false;
// }

// console.log(isInSecondArray(2, [2, 3, 4])); // true
// console.log(isInSecondArray(5, [2, 3, 4])); // false



// function findNonCommonElements2(arr1, arr2) {
//     const result = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         if(arr2.includes(arr1[i]) === false) {
//             result.push(arr1[i])
//         }
//     }
   
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.includes(arr2[i]) === false) {
//             result.push(arr2[i])
//         }
//     }
//     return result
// }
    



// console.log(findNonCommonElements2([1, 2, 3], [2, 3, 4])); // [1, 4]
