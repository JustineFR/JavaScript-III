/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window binding:  if this is inside a function that is in a global scope, this will point to the global context (window or console)
* 2. Implicit binding: when a function is inside an object, "this" will point to the object that is on the left side of the dot when calling the function.
* 3. New binding: This refers to the object inside a constructor function
* 4. Explicit binding:
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myFunction (name) {
    console.log(this)
}

myFunction('Justine')
console.log(myFunction('Justine'))

// Principle 2

// code example for Implicit Binding

const myObject = {
    introduction: 'please meet',
    newStudent: function (name){
        console.log(`Hello,  ${this.introduction} ${name}, our new student.`)
    } 
}

myObject.newStudent("Thomas")

// Principle 3

// code example for New Binding

function MyName(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function (){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        // console.log(this)
    }
}

const justine = new MyName({name: 'Justine', age: 29});
const marlene = new MyName({name: 'marlene', age: 31});

justine.speak(); 
marlene.speak();

// Principle 4

// code example for Explicit Binding


function MyName(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function (){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        // console.log(this)
    }
}

const justine = new MyName({name: 'Justine', age: 29});
const marlene = new MyName({name: 'marlene', age: 31});

justine.speak.call(marlene);
marlene.speak.call(justine);

// justine.speak(); 
// marlene.speak();
