//Вивести числа від 20 до 30 через пропуск, використовуючи
// крок 0,5 (20 20,5 21 21,5….).
let arr = []
let result = []
for (let i = 20 ; i <= 30 ;i = i + 0.5) {

    for (let j = 0; i <= 30 ; j++) {
        arr[j] = i
        result.push(arr[j])
        i = i + 0.5
    }
}
alert(result.join(' '))
/**************************************************************/
//Один долар коштує 27 гривень. Вивести дані з розрахунком
// вартості 10, 20, 30... 100 доларів.
let item = []
let table = []
for (let q = 10 ; q <= 100 ;q = q + 10) {
    for (let r = 0; q <= 100 ; r++) {
        item[r] = `${q}$ = ${q*27}  \n`
        table.push(item[r])
        q = q + 10
    }
}
alert(table.join(' '))
/*****************************************************************/
// Дане ціле число. Вивести всі цілі числа від 1 до 100,
// квадрат яких не перевищує числа N.
const n = Number(prompt('Enter number-limiter :'))
let element = []
let arrIntegers = []
for (let t = 0; t <= 100; t++) {
    for (let p = 0; t <= 100 ; p++) {
        if (t*t < n) {
            element[p] = t
            arrIntegers.push(element[p])
        }
        break
    }
}
alert(arrIntegers.join(' '))
/************************************************************/
// Дане ціле число. З'ясувати, чи є воно простим(простим називається число,
// більше 1, які не мають інших дільників крім 1 і себе).
const w = Number(prompt('Is your number a Prime number ? :'))
let massages
for (let a = 2; a < w ; a++) {
    if ((w % a) === 0) {
        massages = "It is not Prime number"
        break
    }
    else {
        massages = "It is Prime number"
    }
}
alert(`${w} : ${massages} `)
/***************************************************************/
//Дане деяке число. Визначити, чи можна одержати це числo
// шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const f = Number(prompt('Enter a number to be checked :'))
let answer
let l = 0
for (let b = 1; b <= f ; b++) {
    if (f % (3**b) === 0) {
        answer = 'Yes'
        l++
        break
    }
    else {
        answer = 'No'
    }
}
alert(`${answer}, it exponentiation is : ${l}`)