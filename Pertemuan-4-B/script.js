/*
    Output
*/

console.log("Hello World!")


/*
    Data Type
*/

// Number
let umur = 20 
let berat = 70.5

console.log("Umur:", umur)
console.log("Berat:", berat)
console.log(typeof berat)

// String
let name = "John Doe"

console.log("Nama:", name)
console.log(typeof name)

// Boolean
let isStudent = false

console.log(isStudent)

// Object
let user = {
    name: "John Doe",
    age: 20,
    berat: 60.9
}

console.log(user)
console.log(user.berat)

// Array
let numbers = [0, 10, 20]

console.log(numbers[1])



/*
    Variable
*/

// var

if(true){
    var x = 10

    console.log(x)
}

console.log(x)


// let
let y = 5


// const

let phi = 3.14

console.log(phi)


/*
    Operators
*/

// 1. Arithmetic operators
let a = 10
let b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// 2. Assignment Operator
let c = 100

// 3. Comparison Operators

console.log(a === b) //Pake sama denganya tiga kali = = =
console.log(a >= b)
console.log(a <= b)

// 4. Logical Operators

console.log(a === 10 || b === 5)
console.log(a === 10 && b === 5)


/*
    Selection (IF - ELSE) (SWITCH - CASE)
*/

// IF 

let nilai = 10

if(nilai > 70){
    console.log("A")
}
else if(nilai > 50){
    console.log("B")
}
else if(nilai > 30){
    console.log("C")
}
else{
    console.log("D")
}

// SWITCH - CASE

let hari = 3

switch (hari){
    case 1:
        console.log("Senin")
        break
    case 2: 
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    case 6:
        console.log("Sabtu")
        break
    case 7:
        console.log("Minggu")
        break
    default:
        console.log("Bukan Angka 1-7")
        break
}


/*
    Looping
*/

// For

for(let i = 0;i<10;i++){
    console.log(i)
}

// While

let loop = 0

while(loop < 10){
    console.log(loop)
    loop+=1;
}

/*
    Function
*/

// Cara Biasa
function greet(name){
    console.log("Hello", name)
}

greet("John")
greet("Doe")
greet("Pieter")
greet("Allen")

function add(a , b){
    return a + b
}

let hasil = add(10, 100)
console.log(hasil)

// Arrow Function

const multiply = (a,b) => {
    return a * b
}

let hasil2 = multiply(2,5)
console.log(hasil2)