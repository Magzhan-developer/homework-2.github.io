

// Задание 1

// const zagadka = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?');

// switch (zagadka) {
//     case "five":
//         console.log('Ответ верный');
//         break;
//     case "5":
//         console.log('Ответ верный');
//         break;

//     default:
//         console.log('ответ неверный');
// }






// ==============================================








// Задание 2

// const age = parseInt(prompt('How old are you?'));

// if (age >= 1 && age <= 13){
//     console.log(' You should watch "Soul" ')
// }

// else if (age >= 14 && age <= 17){
//     console.log(' You should watch "Adventures of Robin Hood" ')
// }

// else if (age >=18){
//     console.log(' You should watch "Requiem for a Dream" ')
// }








// =================================================








// Задание 3

// const favDrink = prompt('What is your favourite drink?')

// switch (favDrink) {
//     case "beer" || "vodka":
//         console.log('чрезмерное употребление водки или пива может привести к истощению организма')
//         break;
//     case "coffee":
//         console.log('чрезмерное употребление коффеина может привести к неправильному режиму сна')
//         break;
//     case "water":
//         console.log('больше пейте воду потому как она помогает восстановлению клеток')
//         break;
//     default:
//         console.log('к сожалению я не могу рассказать вам о данном напитке')
// }






// =========================================================






// Задание 4

// let number = 10;
// if (number = 11) { // тут в условии мы должны прописать два знака равно,то есть '=='
//     alert('Number is 11!'); // и возможно он условие читает как true и выводит alert('Number is 11!')
// } else {
//     alert('Number is 10!');
// }







// ===============================================================






// Задание 5
// 1.    (2 < 3) && (3 > 4) || true
// Упрощение:
// 1)true && false || true
// 2)false || true = true

// 2.    !true && (!true || 100 != 5 * 5)
// Упрощение:
// 1)!true = not true = false
// 2)false || 100 != 5 * 5 = true
// 3)false && true = false

// 3.    ("123" == 123) || ((10 <= 10) && ('' === false))
// Упрощение:
// 1)"123" == 123 -> false
// 2)10 <= 10 -> true
// 3)'' === false -> false
// 4)false || true && false = false






// =======================================================================





// Задание 6

// const isRaining = true;
// const isSunny = false;

// console.log(isRaining || isSunny);





// ===================================================================





// Задание 7

// const NumberAsString = "42";
// const Number = parseInt(NumberAsString);

// console.log(Number + 10);





// ========================================================================






// Задание 8

// const age = parseInt(prompt('введи свой возраст'))

// if (age < 18){
//     console.log('ты еще не совершеннолетний')
// }else if(age == 18){
//     console.log('тебе в этом году исполнилось 18')
// }else{
//     console.log('ты уже взрослый человек')
// }





// ===============================================================





// Задание 9 

// const isWeekend = true
// const hasTimeOff = false

// if (isWeekend || hasTimeOff) {
//     console.log ('У вас есть выходные и вы можете отдохнуть')
// } 




// ====================================================================






// Задание 10

// const password = "MySecretPassword123"

// if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)){
//     console.log("Пароль допустим")
// }else{
//     console.log("Пароль недопустим")

// }





// =======================================================================








// Задание 11

// const studentGrade = parseInt(prompt('What is your exam result?'));

// switch (true) {
//     case studentGrade >= 90:
//         console.log('Отлично!')
//         break;

//     case studentGrade >= 70 && studentGrade < 90:
//         console.log('Хорошо!')
//         break;

//     default:
//         console.log('Попробуйте еще раз!')
// }












// ================================================================================










// Задание 12

// const currentDate = new Date();
// const anotherDate = new Date(2023,9,1);
// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0, поэтому добавляем 1
// var day = currentDate.getDate();

// switch (true) {
//     case currentDate >= anotherDate:
//         console.log('Добро пожаловать!');
//         break;

//     default:
//         console.log('Скоро начнем!')
// }