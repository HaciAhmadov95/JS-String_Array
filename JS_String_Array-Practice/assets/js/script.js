"use strict";



// let word = "Azerbaycan,salam,sagol";

// console.log(word.length);


// for (let i = 0; i < word.length; i++) { 
//   console.log(word[i]);
// }

// console.log(word.toLowerCase());

// console.log(word.toUpperCase());

// console.log(word.trim());

// console.log(word.charAt(1));

// console.log(word.charCodeAt());

// let res = word.concat(" salam");
// console.log(res);

// let res = word.slice(1,4);
// console.log(res);

// let res = word.substring(1,4);
// console.log(res);

// let text = "salam xnjbueegeygy jdhccegvge eceug";

// let res = text.substring(0,11) + " ...";
// console.log(res);

// let res = word.replace("A","a");
// console.log(res);

// let res = word.indexOf("z");
// console.log(res);

// let res = word.replace("a","b");
// // console.log(res);

// let res = word.replaceAll("a","b");
// console.log(res);

// let res = word.split(",");
// console.log(res);




// function checkAge(age){
//   return age > 18 && age < 25;
// }

// function getStudentsByAge(students,callback){
//   for (const item of students) {
//     if(callback(item.age)){
//       console.log(item.name);
//     }
//   }
// }

// getStudentsByAge(students,checkAge);




// function checkChar(str){
//   return str.includes('c');
// }


// function findEmail(students,callback){
//   for (let i = 0; i < students.length; i++) {
//     if(callback(students[i].email)){
//       count++;
//     }
//   }
//   console.log(count);
// }


// findEmail(students,checkChar);




// let ages = [29,31,34,65];

// let res = ages.toString();
// console.log(res); 

// const fruits = ["Banana","Mango","Kiwi","Apple"];
// console.log(fruits.join("*"));


// const fruits = ["Banana","Mango","Kiwi","Apple"];

// // fruits.pop();
// // fruits.push("test");
// // fruits.shift();
// fruits.unshift("salam");
// console.log(fruits);




// let fruits = ["Banana","Orange","Mango","Apple"];

// let res = fruits.filter(m=>m.includes("Orange"));
// console.log(res);



// let fruits = ["Banana","Orange","Mango","Apple"];

// let res = fruits.filter(m=>m.includes("n"));

// console.log(res);



// let fruits = ["Banana","Orange","Mango","Apple"];

// fruits = fruits.filter(m=>!m.includes("n"));

// console.log(fruits);


// let myGirls = ["Leman","Aydan","Mermer"];

// let myBoys = ["Haci","Ali","Elnur"];

// let myChildrens = myGirls.concat(myBoys);

// console.log(myChildrens);


// let fruits = ["Banana","Orange","Mango","Apple"];

// let res = fruits.includes("Banana");
// console.log(res);





// let fruits = ["Banana","Orange","Mango","Apple"];

// let res = fruits.find(m=>m.startsWith("B"));
// console.log(res);





// FOREACH

// let fruits = ["Banana","Orange","Mango","Apple"];

// fruits.forEach((fruit,x) => {
//   console.log(fruit + "-" + x)
// });





// let fruits = ["Banana","Orange","Mango","Apple"];

// fruits.forEach((fruit,i) => {
//   fruits[i] = fruit + "P418"
// });


// console.log(fruits);



let fruits = ["Banana","Orange","Mango","Apple"];

let res = fruits.map(m=>{
return m + " " + "P418"
});


console.log(fruits);
console.log(res);