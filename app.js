//BASIC TYPESCRIPT INFORMATION
// //String
// let myName = 'Max';
// //myName = 28 results in an error
// // Number
// let myAge = 27;
// //myAge = 'Max' will result in an error
// //boolean
// let hasHobbies = false;
//hasHobbies = 1 will result in error even if that will resolve to true in a conditional - nicely done Typescript
//assign types
// let myRealAge;
// myRealAge = 20;
//No error here if you reassign to String because when instantiated no value meant TS cast it to type any
// But if we have 
// let myRealAge: number;
// Then it will behave as usual
//Types are:
//STRING
var myName = 'Max';
//NUMBER
var myAge = 27;
//BOOLEAN
var hasHobbies = true;
//ARRAY
var hobbies;
hobbies = ['Cooking', 'Sports', 'Music'];
hobbies = [100];
//if you don't use any it will only allow type declared or types in initial declaration (if array is of one type)
var sports;
sports = ['Basketball', 'Baseball', 'TheBest', 'TheWorst', 'TheBlurst', 'YouStupid', 'Monkey'];
//TUPLES
var address = ['superstreet', 99];
//If it always has this format - array of two items, first a string, second a number, can make it a tuple:
var addressTuple = ['superstreet', 99];
//order matters. [99, 'superstreet']; errors out.
//ENUMS
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
//Take note of incrementation if you define the number for an enum
console.log(myColor);
//any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
//Only use this if you need maximum flexibility relating to Javascript
//JS is
// function returnMyName() {
//     return myName;
// }
//TS equivalent can specify the return type:
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
//void type for a function is the same as for Java:
function sayHello() {
    console.log('Hello!');
}
// sayHello();
//You can also declare type for arguments in a function
function multiply(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}
// console.log(multiply(2,3));
//Functions as Types
//This is the JS:
// let myMultiply;
//Allowing only certain args and return vals for functions:
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
//These two error out for TS but not JS
myMultiply = multiply;
myMultiply(4, 5);
//Objects and Types
var userData = {
    name: 'Alex',
    age: 27
};
//The entire object is turned into a type automatically by TS
//Names of objects is also important. The below will error out:
// userData = {
//     a: 'Hello',
//     b: 22
// }
//You can also assign specifically:
var userData2 = {
    name: 'Alex',
    age: 27
};
//Let's look at a concrete example with a more complex object:
var complexObject = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all === true) {
            return this.data;
        }
        var newData = [];
        newData.concat(this.data[0]);
        return newData;
    }
};
//Now you can create objects of type complex which will adhere to the prescribed parameters
//So, if we're making another complex object:
var complexObject2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all === true) {
            return this.data;
        }
        var newData = [];
        newData.concat(this.data[0]);
        return newData;
    }
};
//Allowing multiple types with union types
var myRealRealAge = 27;
myRealRealAge = '27';
//The any type means it won't error out....but what if I want it to only be a numberor string??
var myRealerRealAge = 27;
myRealerRealAge = '27';
//Check Types During Runtime - this is just straight JS, a little protip if you will 
var finalValue = 'A String';
if (typeof finalValue === 'number') {
    console.log('Final Value is a Number');
}
//never type 
function neverReturns() {
    throw new Error('Its an error!');
}
//This functions doesn't return nothing (void) - it never returns anything because it raises an error.
//Semi-rarely used.
//Nullable types
//If strict null checks if off, this will work fine:
// let canBeNull = 12;
// canBeNull = null;
// This will always be allowed to be null:
var canAlsoBeNull;
canAlsoBeNull = null;
//Alternatively, you can use union of types to allow null assignment for a variable:
var canBeNull = 12;
canBeNull = null;
//Null has it's own type. If you assign type null can't assign another type. This errors out (if strict nullchecks are on):
// let canThisBeAny = null;
// canThisBeAny = 12;
//TYPESCRIPT AND ES6
//Some things are ported through, others aren't. There is an online resource for compatability chekcing. 
// All of the major changes (block scoping with let + const, arrow functions, destructuring, template literals etc.) Are supported
//# sourceMappingURL=app.js.map