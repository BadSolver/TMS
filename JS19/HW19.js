// Task 1

// const user = {
//     name: 'Alex',
//     age: 27
// }
// delete user.name
// delete user.age
// console.log(user)

// Task 2


// const user = {
//     name: 'Alex',
//     age: 27
// }
// console.log('name' in user)

// Task 3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for (key in student) {
//     console.log(key)
// }
// for (value in student) {
//     console.log(student[value])
// }

// Task 4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log( colors["ru pum pu ru rum"].red + ' and ' + colors["ru pum pu ru rum"].blue)

// Task 5

// let salaries = {
//     Alex: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }
// let sum = 0;
// let people = 0
// for (values in salaries) {
//     sum += salaries[values]
//     people += 1
// }
// const averageSum = sum / people
// console.log(averageSum)

// Task 6

// const login = prompt('Введите свой логин', '')
// const password = prompt('Введите свой пароль', '')
// const userInfo = {}
// userInfo.login = login
// userInfo.pass = password
// const aprove = prompt(`'Правильно введены данные?'  Ваш логин: ${userInfo.login} и ваш пароль: ${userInfo.pass}`)
// if (aprove === 'да') {
//     alert('Добро пожаловать')
// }else{
//     alert('Вы допустили ошибку')
// 

// Task 1 AL

// const countingWords = (check) => {
//     const values = {
//         1: 'Один',
//         2: 'Два',
//         3: 'Три',
//         4: 'Четыре',
//         5: 'Пять',
//         6: 'Шесть',
//         7: 'Семь',
//         8: 'Восемь',
//         9: 'Девять'
//     }
//     check = check.split(':')
//     return `${values[check[0]]} : ${values[check[1]]}`
    
// }
// console.log(countingWords('5:1'))


// Task 2 Al

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// console.log(JSON.stringify(student1) === JSON.stringify(student2))


// Task 3 Al

// const animals = {
//     cat: {
       
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }
//  for (key in animals) {
    
//  }
//  console.log(animals[key]?.name)

 

