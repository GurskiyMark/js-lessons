// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

// function findLargest(a,b,c) {
//     let bigNumber = 0;
//     if((a > b) && (a > c)) {
//         bigNumber = a;
//     } else if ((b > a) && (b > c)) {
//         bigNumber = b;
//     } else if ((c > a) && (c > b)) {
//         bigNumber = c;
//     }
//     return bigNumber;
// }

// function findLargest(a, b, c) {
//   return Math.max(a, b, c);
// }


function findLargest(a, b, c) {
  let bigNumber = a;

  if (b > bigNumber) {
    bigNumber = b;
  }

  if (c > bigNumber) {
    bigNumber = c;
  }

  return bigNumber;
}
