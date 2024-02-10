"use strict";

// TASK 1

// function reverseString(text){
//   let result = "";
//   for (let i = text.length - 1; i >= 0 ; i--) {
//     result += text[i];
//   }
//   return result;
// }

// console.log(reverseString("Haci"));




// TASK2

// function myAge(age) {
//   let Year = new Date().getFullYear();
//   return (Year - age);
// }

// console.log(myAge(29));





// TASK3

let person1 = {
  id: 1,
  name: "Haci",
  fullName: "Ahmadov Haci",
  age: 29,
  salary: 800,
};

let person2 = {
  id: 2,
  name: "Akbar",
  fullName: "Ahmadov Akbar",
  age: 28,
  salary: 600,
};

let person3 = {
  id: 3,
  name: "Murad",
  fullName: "Ahmadov Murad",
  age: 20,
  salary: 300,
};

let person4 = {
  id: 4,
  name: "Fuad",
  fullName: "Ahmadov Fuad",
  age: 16,
  salary: 200,
};

let persons = [person1, person2, person3, person4];

// Personlarin umumi sayi

// function getCount(array1) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count++;
//   }
//   return count;
// }

// console.log(getCount(persons));

// Personlarin maaslarinin umumi ortalamasi

// function avarageSalary(array2) {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < array2.length; i++) {
//     sum += array2[i].salary 
//     count++;
//   }
//   let result = sum / count;
//   console.log(result);
// }

// avarageSalary(persons);



// Personlarin fullName-ne gore search functionu

// function getByFullName(array,searchText){
//   for (let i = 0; i < array.length; i++) {
//     if(array[i].fullName == searchText){
//       return `${array[i].fullName}  ${array[i].age}`;
//     }
//   }
// }

// console.log(getByFullName(persons,"Ahmadov Murad"));