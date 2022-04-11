// Task 1

const str = 'строка';
const bool = false;
const num = 17;
const undef = undefined;
const nul = null;
console.log(typeof str);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof undef);
console.log(typeof nul);


//Task 2

let height = 15;
let width = 20;
if (width > height) {
    console.log(width);
}else if(height > width){
    console.log(height)
}

//Task 3


for (i = 0; i <= 20; i++){
    if(i % 3 == 0) {
    console.log(i)
  }
}


// Task 4


let key = true
let documents = true
let pen = true
let apple = false
let orange = true

if (key && documents && pen &&  (apple || orange)) {
    const shouldGoToWork = 'Я могу смело идти на работу'
    console.log(shouldGoToWork);
}else {
    console.log('Ты что то забыл!')
}

// Task 5


let hiddenNumber = prompt('Загадай любое число!', '');
if (hiddenNumber % 5 == 0 && hiddenNumber % 3 == 0) {
    alert('FizBuz')
}else if (hiddenNumber % 3 == 0) {
    alert('Buz')
    }else if(hiddenNumber % 5 == 0) {
    alert('Fiz')
}



// Task 6

const yourAge = prompt('Сколько тебе лет?', '');
if (yourAge > 18) {
    prompt('Попей пивка')
}else if (yourAge >= 16 && yourAge <= 18) {
    prompt('Можешь выкурить сигаретку, только маме не говори')
}else {
    prompt('Пей колу')
}


// Task 7

const travel = prompt('Куда летим?', '');
switch(travel) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь');
        break;
    case 'Север' :
        alert('на север пойдешь много денег найдешь');
        break;
    case 'запад' :
        alert('на запад пойдешь верного друга найдешь');
        break;
    case 'восток' :
        alert('на восток пойдешь разработчиком станешь');
        break;
     default :
        alert('Неправильный выбор')
}


//AL Task 1

let name = 'пОлИнА нАбЕрЕжНаЯ'.toLowerCase();
let arrayFromString = name.split(' ');
for (i = 0; i < arrayFromString.length; i++) {
   arrayFromString[i] = arrayFromString[i][0].toUpperCase() + arrayFromString[i].slice(1) ;
}
let correctName = arrayFromString.join(' ');
alert('Привет, ' + correctName + '!');
console.log(`Привет, ${correctName}!`);


// Task 2

let number = +prompt('Какое число вывберешь?', '');
let minus = +prompt('Сколько отнять?', '');
let plus = +prompt('Сколько прибавить?', '');
let multiply = +prompt('на сколько умножить?', '');
let divide = +prompt('На сколько делить?', '')
let result = (((number - minus) + plus) * multiply) / divide;
alert('Твоё число: ' + result);


// Task 3

let string = '#';
for (i = 0; i < 10; i++) {
    console.log(string.repeat(i))
}




























