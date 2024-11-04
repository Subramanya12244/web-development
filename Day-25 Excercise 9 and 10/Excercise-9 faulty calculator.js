/*
* Create  a faulty calculator using js
*
* this faulty calculator does the following:
* 1.it takes two nor as input from user
* 2.it performs wrong operations as follows:
*
*   + ---> -
*   * ---> +
*   - ---> /
*   / ---> **
*
*   it performs only 10% of times
* */

let random=Math.random()
let a=prompt("Enter first number");
let c=prompt("Enter Operation");
let b=prompt("Enter second number");


let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1)
{
//     perform normal operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
//     perform faulty calculations
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}