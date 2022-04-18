// Task 1
// const colors = ['red', 'green', 'blue']
// console.log(colors.length)



//Task 2

// const animals = ['monkey', 'dog', 'cat']
// console.log(animals[animals.length-1])


//Task 3

// const numbers = [5, 43, 63, 23, 90]
// numbers.splice(0, numbers.length)
// console.log(numbers)

// numbers.length = 0;
// console.log(numbers)


// Task 4

// const students = ['Polina', 'Dasha', 'Masha']
// students.pop();
// students.push('Borya');
// students.shift()
// students.unshift('Andrey')
// console.log(students)

// Task 5

// const cats = ['Gachito', 'Tom', 'Batman']

// for(i = 0; i < cats.length; i++){
//     console.log(cats[i]);
// }

// for(elem of cats) {
//     console.log(elem)
// }


// Task 6

// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]

// const newNumbers = evenNumbers.concat(oddNumbers)
// console.log(newNumbers)
// console.log(newNumbers.indexOf(8))


// Task 7

// const binary = [0, 0, 0, 0]
// console.log(binary.join('1'))

//AL Task 1

// const polindrom = (string) => {
//     correctString = string.toLowerCase();
//     const arr = correctString.split('')
//     const reverseArr = arr.reverse()
//     const reverseString = reverseArr.join('').toLowerCase();
//     if (correctString === reverseString) {
//         return true
//     }return false
// }
// console.log(polindrom('Alex'))

// AL Task2


// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// let counr = 0;
// let sum = 0;
// for( key of matrix) {
//     sum = sum + key.reduce((acc, elem) => acc + elem);
//     counr = counr + key.length 
// }
// console.log(sum / counr)

// AL Task 3

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// const positiveNum = mixedNumbers.filter((item) => item >= 0)
// console.log(positiveNum)
// const negativeNum = mixedNumbers.filter((item) => item < 0)
// console.log(negativeNum)

//AL Task 4

// const numbers = []
// for(i = 0; i < 6; i++) {
//     numbers.push((Math.round(Math.random()* 100)))
// }
// const newNumber = numbers.map((elem) => elem * elem *elem)

// console.log(numbers)
// console.log(newNumber)
