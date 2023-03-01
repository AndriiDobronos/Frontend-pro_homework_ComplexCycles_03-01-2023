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
if (Number.isInteger(integerNumberOfUser) && integerNumberOfUser > 0) {
    for (let t = 1; t <= 100; t++) {
        if (t*t <= integerNumberOfUser) {
            arrIntegers.push(t)
        }
    }
    alert(arrIntegers.join(' '))
}
else if(integerNumberOfUser === 0){
    alert(`0 it doesnt have such numbers`)
}else{
    alert(`Number is invalid`)
}
/************************************************************/
// Дане ціле число. З'ясувати, чи є воно простим(простим називається число,
// більше 1, які не мають інших дільників крім 1 і себе).
const numberToCheck = Number(prompt('Is your number a Prime number ? :'))
let massages
if (Number.isInteger(numberToCheck) && numberToCheck > 2) {
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
else if(numberToCheck === 2){
    alert("It is Prime number")
}else{
    alert(`Number is invalid`)
}
/***************************************************************/
//Дане деяке число. Визначити, чи можна одержати це числo
// шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const numberToChecked = Number(prompt('Enter a number to be checked :'))
if (Number.isInteger(numberToChecked) && numberToChecked > 1) {
    let exponentiation = ''
    let finalText = ''
    for (exponentiation = 1; exponentiation <= numberToChecked; exponentiation++) {
        if (numberToChecked === (3 ** exponentiation)) {
            finalText = `Yes , it exponentiation is : ${exponentiation}`
            break
        } else {
            finalText = `No , its not possible`
        }
    }
    alert(`${finalText}`)
}
else {
    alert(`No , its not possible`)
}