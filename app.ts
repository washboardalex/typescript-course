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
let myName: string = 'Max';

//NUMBER
let myAge: number = 27;

//BOOLEAN
let hasHobbies: boolean = true;

//ARRAY
let hobbies: any[];
hobbies = ['Cooking','Sports','Music']; 
hobbies = [100]
//if you don't use any it will only allow type declared or types in initial declaration (if array is of one type)
let sports: string[];
sports = ['Basketball','Baseball','TheBest','TheWorst','TheBlurst','YouStupid','Monkey'];

//TUPLES
let address = ['superstreet', 99];
//If it always has this format - array of two items, first a string, second a number, can make it a tuple:
let addressTuple: [string, number] = ['superstreet', 99];
//order matters. [99, 'superstreet']; errors out.

//ENUMS
enum Color {
    Gray,
    Green = 100,
    Blue
}
let myColor: Color = Color.Blue;
//Take note of incrementation if you define the number for an enum
console.log(myColor);

//any
let car: any = 'BMW'
console.log(car);
car = {brand:'BMW', series: 3};
console.log(car);
//Only use this if you need maximum flexibility relating to Javascript

//JS is
// function returnMyName() {
//     return myName;
// }

//TS equivalent can specify the return type:
function returnMyName() : string {
    return myName;
}

// console.log(returnMyName());

//void type for a function is the same as for Java:
function sayHello() : void {
    console.log('Hello!');
}

// sayHello();

//You can also declare type for arguments in a function
function multiply(num1 : number, num2 : number) : number {
    console.log(num1 * num2)
    return num1 * num2
}

// console.log(multiply(2,3));

//Functions as Types
//This is the JS:
// let myMultiply;
//Allowing only certain args and return vals for functions:
let myMultiply: (val1: number, val2: number) => number ;
// myMultiply = sayHello;
// myMultiply();
//These two error out for TS but not JS
myMultiply = multiply;
myMultiply(4, 5);

//Objects and Types
let userData = {
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
let userData2: {name: string, age: number} = {
    name: 'Alex',
    age: 27 
}

//Let's look at a concrete example with a more complex object:
let complexObject : { data: number[], output: (all: boolean) => number[] } = {
    data: [ 100, 3.99, 10 ], 
    output: function ( all: boolean ) : number[] {
        if (all === true) {
            return this.data;
        }
        let newData : number[] = [];
        newData.concat(this.data[0])
        return newData;
    } 
}

//Later on: You will be able to save these templates as a class, allowing you to edit class properties as a whole instead
//of having to go through each instance 

//In the meantime use a type alias, which will create a new type:

type Complex = { data: number[], output: (all: boolean) => number[] };

//Now you can create objects of type complex which will adhere to the prescribed parameters
//So, if we're making another complex object:
let complexObject2 : Complex = {
    data: [ 100, 3.99, 10 ], 
    output: function ( all: boolean ) : number[] {
        if (all === true) {
            return this.data;
        }
        let newData : number[] = [];
        newData.concat(this.data[0])
        return newData;
    } 
}

//Allowing multiple types with union types
let myRealRealAge : any = 27;
myRealRealAge = '27';
//The any type means it won't error out....but what if I want it to only be a numberor string??
let myRealerRealAge : number | string = 27;
myRealerRealAge = '27';

//Check Types During Runtime - this is just straight JS, a little protip if you will 
let finalValue = 'A String';

if (typeof finalValue === 'number') {
    console.log('Final Value is a Number');
}

//never type 
function neverReturns(): never {
    throw new Error('Its an error!');
}
//This functions doesn't return nothing (void) - it never returns anything because it raises an error.
//Semi-rarely used.

//Nullable types
//If strict null checks if off, this will work fine:
// let canBeNull = 12;
// canBeNull = null;
// This will always be allowed to be null:
let canAlsoBeNull;
canAlsoBeNull = null;
//Alternatively, you can use union of types to allow null assignment for a variable:
let canBeNull : number | null = 12;
canBeNull = null;
//Null has it's own type. If you assign type null can't assign another type. This errors out (if strict nullchecks are on):
// let canThisBeAny = null;
// canThisBeAny = 12;

//TYPESCRIPT AND ES6
//Some things are ported through, others aren't. There is an online resource for compatability chekcing. 
// All of the major changes (block scoping with let + const, arrow functions, destructuring, template literals etc.) Are supported
