// Date

// 1. ISO Date -> Date dengan format international 
let ISOdate = new Date("2026-02-04T16:01:06Z") // karna dia international maka dia GMT+0
console.log(ISOdate)

// 2. Short Date -> Date dengan format MM/DD/YYYY (M = month, D = date, Y = year)
let shortDate = new Date("02/04/2026")
console.log(shortDate)

// 3. Long Date -> Date dengan format MM DD, YYYY (M = month dalam string bulan, D = date, Y
// = year)
let longDate = new Date("February 4, 2026")
console.log(longDate)

// GET Method di Date

let date = new Date();
console.log(date)

let year = date.getFullYear() // -> fungsinya buat ambil tahun doang
console.log(year)

let month = date.getMonth() // -> fungsinya buat ambil bulan doang dalam angka
console.log(month)

let getDate = date.getDate() // -> fungsinya buat ambil tanggal doang
console.log(getDate)

let getDay = date.getDay() // -> Fungsinya buat ambil hari doang dalam angka
console.log(getDay)

let hours = date.getHours() // -> Fungsinya buat ambil jam doang
console.log(hours)

let minute = date.getMinutes() // -> Fungsinya buat ambil menit doang
console.log(minute)

let second = date.getSeconds() // -> Fungsinya buat ambil detik doang
console.log(second)

let miliSecond = date.getMilliseconds() // -> Fungsinya buat ambil milisecondnya doang
console.log(miliSecond)     

// SET Method di Date

let date2 = new Date()
console.log(date2)  

date2.setFullYear(2030) // update tahun
date2.setMonth(5) // update bulan
date2.setDate(10) // update tanggal

console.log(date2)



// Spread dan Rest Operator

// 1. Spread Operator -> menyalin atau copy array/objek lama ke baru

let a = [1,2,3]
let b = [...a]

console.log(b)

let obj1 = {
    name: "John",
    age: 25
}

let obj2 = {
    ...obj1,
    major: "Computer Science"
}

console.log(obj2)

// 2. Rest Operator -> Ngumpulin banyak parameter jadi satu array

function showNumbers(...numbers){
    console.log(numbers)
}

showNumbers(1,2,3,4,5,10,100,5,5,5,5,5,5,5)

// map(), filter(), find()

let nums = [5,10,15,20,25]

// .map()

let multiplyBy2 = nums.map(n => n * 2)
console.log(multiplyBy2)

// .filter()
console.log(nums.filter(n => n > 100));

// .find()
console.log(nums.find(n => n === 100))




// Exception Handling (try-catch-finnaly) -> Fungsinya buat kalau program kita error kita
// mau ngapain

// try-catch-finnaly


try{
    console.log("Program aman");
    // Ini kodingannya pasti error  
}
catch (error){
    console.log("Terjadi suatu error");
}
finally{
    console.log("Ini kodingan yang selalu jalan")
}

// ASYNC & Await

// Kita perlu API: https://jsonplaceholder.typicode.com/users 

async function getUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users"); // kita 
        // perlu waktu buat ngefetch data di API
        let data = await response.json() // buat ubah ke json itu juga perlu waktu
        console.log(data)
    }
    catch(error){
        console.log("Terjadi Error. Silahkan coba lagi");
    }
}

getUsers()
