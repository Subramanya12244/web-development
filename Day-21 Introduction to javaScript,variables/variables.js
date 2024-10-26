// console.log("hello i am subramanya");

//a variable is a container that stores a value this is similar to container used to store rice,water

// types of vaariables are
// 1.var- var is globally scoped while let and const are block spaced, var can be updated and redeclared witin its scope.

// 2.let-let can be updated but not redclared

// 3.const-can neigther be updated nor be redeclared, it must be initialised during declaration unlike let and var


// Rules for choosing variables:
// 1.letters digits underscores and $ are allowed
// 2.Must begin with $,_ or a letter
// 3. js reserved words cannot be used as a variable name
// 4.Case sensitive


// let example:-

// let a=5;
// {
//    let a=55;
//     console.log(a);
// }
// console.log(a);

// var example
var a=10;
{
    var a=100;
    console.log(a);
}
console.log(a);

// null vs undefined

// undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null .

// object is a key value pair type of data structure

o={
    'name': "subramanya",
    'age':21
};
o.salary=900000
console.log(o);