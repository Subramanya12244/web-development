// let rand = Math.random()
// let first, second, third;
// 0 0.33 0.66 1
// using the if else conditionals

// Lets generate the first word
// if(rand<0.33){
//     first = "Crazy"
// }
// else if(rand<0.66 && rand>=0.33){
//     first = "Amazing"
// }
// else{
//     first = "Fire"
// }
//
// // Lets generate the second word
// rand = Math.random()
// if(rand<0.33){
//     second = "Engine"
// }
// else if(rand<0.66 && rand>=0.33){
//     second = "Foods"
// }
// else{
//     second = "Garments"
// }
//
// // Lets generate the third word
// rand = Math.random()
// if(rand<0.33){
//     third = "Bros"
// }
// else if(rand<0.66 && rand>=0.33){
//     third = "Limited"
// }
// else{
//     third = "Hub"
// }
//
// console.log(`${first} ${second} ${third}`)





// using the list
let first=["Crazy",
    "Amazing",
    "Fire" ];
let random=Math.floor(Math.random() * 3);
let fs=first[random];

let second=["Engine",
   "Foods",
    "Garments"];
random=Math.floor(Math.random() * 3);
let sec=second[random];

let third=["Bros",
    "Limited",
    "Hub"];
random=Math.floor(Math.random() * 3);
let th=third[random];

console.log(`${fs} ${sec} ${th}`);