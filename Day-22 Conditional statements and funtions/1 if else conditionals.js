// 1.arthamatic operators:
// let age=18;
// let grace=3;

// console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// // power
// console.log(age**grace);
// console.log(age/grace);
// // gives reminder
// console.log(age%grace);
// // unioperand operator
// console.log(age++);
// console.log(age--);

// 2.Assignment operators
console.log("Assignment Operators");
// let x=10;
// let y=20;
// console.log(y=x);
// console.log(y+=x);
// // y=y+x;
// console.log(y-=x);
// console.log(y*=x);
// console.log(y/=x);
// console.log(y**=x);
// console.log(y%=x);

// 3.Comparison operators
// equal to
// if(age==18)
// {
//     console.log("the age is 18");
// }
// else{
//     console.log("the age is not 18");
// }


// not equal to
// if(age!=18)
// {
//     console.log("the age is not 18");
// }
// else{
//     console.log("the age is 18");
// }


// Important: === it will compare the type and value 


// 4.logical operators
// && - it means both the statements should be true then only the resultant will be true
// ||- if either of the condition true then the resultant will be true
// ! - it will negate the condition

// Conditional statements:
// 1.if 
// 2.if else
// 3.if else if

// let age=1;
// if(age==18)
// {
//     console.log("You can drive");
// }
// else if(age==0)
// {
//     console.log("Are you kidding?");
// }
// else if(age==1)
// {
//     console.log("Are you again kidding?");
// }
// else{
//     console.log("invalid age");
// }

// ternary operator
// condition ? exp1:exp2
// let marks=100;
// let result=marks>70?"greater":"lesser than cond";
// console.log(result);

// chaining ternary operrators:
/*let result = condition1 
  ? value1 
  : condition2 
    ? value2 
    : condition3 
      ? value3 
      : defaultValue;
*/
let age = 25;
let category = age < 13 ? 'Child' 
  : age < 20 ? 'Teenager' 
    : age < 65 ? 'Adult' : 'Senior';
console.log(category); // Output: 'Adult'
