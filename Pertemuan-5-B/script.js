// JavaScript Array

let fruits = ["Apple", "Banana", "Orange"];

// 1. .length

let sizeArray = fruits.length
console.log(sizeArray) // kayak printf di c dan kayak print di python

// 2. .toString()

console.log(fruits.toString())

// 3. .join()

console.log(fruits.join(" - "))

// 4. at()
console.log(fruits.at(2))
console.log(fruits.at(1))

// 5. pop()
fruits.pop()
console.log(fruits)

// 6. push()
fruits.push("Mango")
console.log(fruits)

// 7. includes()
console.log(fruits.includes("Apple"))

// 8. reverse()
fruits.reverse()
console.log(fruits)


// Javascript object

let studentName = "John";
let studentAge = 20;
let studentMajor = "Computer Science";

// isi object pake format key:value
let student = {
    name: "John",
    age: 20,
    major: "Computer Science"
}

console.log(student.name);
student.name = "David";

console.log(student.name)

// DOM Manipulation

document.getElementById("paragraph-1").innerHTML = "Hello";






function toggleStatus(){
    let text = document.getElementById("status");

    // 1. kita mau ubah teksnya yang awalnya tulisannya off jadi on dan yang awalnya on jadi off

    if(text.innerHTML === "OFF"){
        text.innerHTML = "ON";
    }
    else{
        text.innerHTML = "OFF";
    }


}






let counter = 0;

function increase(){
    counter = counter+1; // Ini buat tambahin counternya
    document.getElementById("counter").innerHTML = counter; // Ini buat ngeoutput counter di UI
}

function reset(){
    // isinya adalah logic buat reset itungan kita jadi 0
    counter = 0;

    document.getElementById("counter").innerHTML = counter; // ini buat ngeoutput counter di UI

}


function decrease(){
    // isinya adalah logic dari counter pengurangan kita

    // kita kurangin dulu counternya sebesar 1
    counter = counter - 1; // counter--;

    // baru kita outputin variable counter kita ke UI nya
    document.getElementById("counter").innerHTML = counter;
}






function toggleText(){
    // logic buat ilangin/munculin teksnya

    let text_p = document.getElementById("info");

    // kalo teksnya ilang -> show
    if(text_p.style.display === "none"){
        text_p.style.display = "block";
    }
    // kalo teksnya ada -> ilangin
    else{
        text_p.style.display = "none";
    }
}