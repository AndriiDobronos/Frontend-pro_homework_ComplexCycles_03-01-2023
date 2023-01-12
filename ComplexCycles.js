"use strict";
//Вивести числа від 20 до 30 через пропуск, використовуючи
// крок 0,5 (20 20,5 21 21,5….).
const result = []
for (let i = 20 ; i <= 30 ;i = i + 0.5) {
        result.push(i)
}
alert(result.join(' '))
/**************************************************************/
//Один долар коштує 27 гривень. Вивести дані з розрахунком
// вартості 10, 20, 30... 100 доларів.
const table = []
for (let q = 10 ; q <= 100 ;q = q + 10) {
    table.push(`${q}$ = ${q*27}  \n`)
}
alert(table.join(' '))
/*****************************************************************/
// Дане ціле число. Вивести всі цілі числа від 1 до 100,
// квадрат яких не перевищує числа N.
const integerNumberOfUser = Number(prompt('Enter number-limiter :'))
const arrIntegers = []
if (integerNumberOfUser > 0) {
    for (let t = 0; t <= 100; t++) {
        if (t*t < integerNumberOfUser) {
            arrIntegers.push(t)
        }
    }
    alert(arrIntegers.join(' '))
}
else {
    alert(`Number is invalid`)
}
/************************************************************/
// Дане ціле число. З'ясувати, чи є воно простим(простим називається число,
// більше 1, які не мають інших дільників крім 1 і себе).
const numberToCheck = Number(prompt('Is your number a Prime number ? :'))
let massages
if (numberToCheck > 1) {
    for (let a = 2; a < numberToCheck; a++) {
        if ((numberToCheck % a) === 0) {
            massages = "It is not Prime number"
            break
        } else {
            massages = "It is Prime number"
        }
    }
    alert(`${numberToCheck} : ${massages} `)
}
else {
    alert(`Number is invalid`)
}
/***************************************************************/
//Дане деяке число. Визначити, чи можна одержати це числo
// шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const numberToChecked = Number(prompt('Enter a number to be checked :'))
if (numberToChecked > 1) {
    let answer
    let exponentiation = 0
    for (let b = 1; b <= numberToChecked; b++) {
        if (numberToChecked % (3 ** b) === 0) {
            answer = 'Yes'
            exponentiation++
            break
        } else {
            answer = 'No'
        }
    }
    alert(`${answer}, it exponentiation is : ${exponentiation}`)
}
else {
    alert(`Number is invalid`)
}