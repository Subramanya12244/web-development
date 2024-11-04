// loops- basically do the same task assigned multiple times

// types of loops in javaScript
// 1.for 
// 2.for in :loops through keys of an object
// 3.for of :loops through values of an object
// 4.while :loops a block based on specific condition
// 5.do while: runs atleast once



// 1.for loop
// for(intitialisation ; condition ; increment/decrement){}


// a=0;
// for (let i = 0; i <= 10;i++)
// {
//     console.log(a+i);
// }

// 2.for in loop: it is basically used for the objects to print the obj keys and values 

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
// for (const key in obj) {
//         const element = obj[key];
//         console.log(key,element);
// }

// 3.for of: it is the iterator of the objects/arrays

// for (const char of "helolo") {
//     console.log(char);
// }

// 4.while loops:
// let i=0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }

// do while
let i = 0;
do {
    console.log(i);
    i++;
} while (i<10);