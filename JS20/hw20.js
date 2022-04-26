// Task 1 
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// const funForArray = (elem) => {
//     console.log (elem)
// }
// fibonacci.forEach(ele => console.log(ele));
// fibonacci.forEach(funForArray)

// Task 2
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']   

// const newUsers = users.map((item, index) => `member ${index + 1} : ${item}`)
// const newUsers2 = users.map((item1, index1) => {
//     return `member ${index1 + 1} : ${item1}`
// })
// console.log(newUsers)
// console.log(newUsers2)

// Task 3

// const numbers = [7, -4, 32, -90, 54, 32, -21]

// const positiveNumbers = numbers.filter(ele => ele > 0)
// const func = (element) => {
//     return element > 0
// }
// const positiveNumbers1 = numbers.filter(func)
// console.log(positiveNumbers)
// console.log(positiveNumbers1)


// Task 4

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// const funct = ((acc, item) => acc + item)
// const fibonacci1 = fibonacci.reduce(funct)
// console.log(fibonacci1)

// const fibonacci2 = fibonacci.reduce((acc, elem) => acc + elem)
// console.log(fibonacci2)

// Task 5

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// const numbers1 = numbers.find(item => item %2 === 0)
// console.log(numbers1)

// const funct = (item => item %2 === 0)
// const numbers2 = numbers.find(funct)
// console.log(numbers2)

// Task 1 AL

// function Students(salary, rate, name) {
//     this.salary = salary,
//     this.rate = rate,
//     this.name = name

//     this.sum = () => {
//         const rating = { 'A' : 12, 'B' : 9, 'C' : 6, 'D' : 0}
//         return salary * rating[this.rate]
//     }
// }
// const student1 = new Students(1000, 'B', 'Alex')
// const student2 = new Students(6000, 'A', 'Flex')
// const student3 = new Students(300, 'D', 'Sam')
// const student4 = new Students(800, 'C', 'Den')
// const student5 = new Students(1500, 'A', 'Eugene')

// const students1 = [student1, student2, student3, student4, student5]

// const totalAmount = ((arr) => {
//     return arr.reduce((acc, item) => acc + item.sum(),0)
// })
// console.log (totalAmount(students1))


// Task 2 AL

// const removedVowels = (string) => {
//     return string.replace(/[aeoiyu]/gi, '')
// }
// console.log(removedVowels('This website is for losers LOL!'))


// Task 3 AL

// const bigString = (string) => {
//     newArr = string.toLowerCase().split('');
//     myNewArr = newArr.map((item, index) => `${item.toUpperCase()}${item.repeat(index)}`)
//     return myNewArr.join('-')
// }
// console.log(bigString('abfcg'))

// Task 4 AL 

// const number = (string) => {
//     const arr = string.split(' ')
//     return `${Math.max(...arr)} ${Math.min(...arr)}`
// }
// console.log(number('10 -20 30 1 3 7 9'))