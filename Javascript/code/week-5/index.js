//  Variable Shadowing

function test() {
  let a = "Hello";

  if (true) {
    let a = "Hello"; // New value assigned
    console.log(a);
  }

  console.log(a);
}

test();

//   Illegal Shadowing

function func() {
  var a = "Hello";
  let b = "Namaste";

  if (true) {
    let a = "Hi"; // Legal Shadowing
    var b = "Bye"; // Illegal Shadowing
    console.log(a); // It will print
    console.log(b); // It will print error
  }
}
test();

// Question 3 : Hoisting

console.log(a);

var a = 10;

//  Temporal Dead Zone

console.log(a, b, c);

const c = 30;
let b = 20;
var a = 10;


const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => num * 3); // cb can take num, index and array
console.log(multiplyThree);



// Array.filter()

const nums2 = [1, 2, 3, 4];

const moreThanTwo = nums2.filter((num, i, arr) => num > 2 === 0);
console.log(moreThanTwo);



// \ Array.reduce()

const nums3 = [1, 2, 3, 4];

const sum = nums3.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10



//  Map Polyfill

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};



// Ques 5 : Filter Polyfill

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};



//  Reduce Polyfill

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};



//  map vs foreach

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];


console.log(names);

// Solution 2 : forEach()
let nameess = []
students.forEach( student => {
     nameess.push(student.name.toUpperCase());
})

console.log(names);

// Solution 3 : map() 
let names6 = students.map( stu => stu.name.toUpperCase());
console.log(names6);


// Q2 - we want to get the details of students who scored more than 60 marks.

let names7 = students.filter(stu => stu.marks > 60);
console.log(names7);


// Q3 - Get the details of students who scored more than 60 marks and have rollNumber greater than 15.

let names8 = students.filter(stu => stu.marks > 60 && stu.rollNumber > 20)
console.log(names8);


// Q4 - Sum total of the marks of the students

let totalMarks2 = students.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks2);


// Q5 - Get only the names of the students who scored more than 60 marks

let names = students.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names);


// Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

let totalMarks = studentRecords.map(function(stu){ 
    if(stu.marks < 60){
        stu.marks += 20;}
    return stu;
}).filter(stu => stu.marks > 60).reduce((acc,curr) => acc+curr.marks, 0);

console.log(totalMarks);


//  Function Code

function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(square);

//   What is IIFE?

// Eg-1
(function square(num) {
  console.log(num * num);
})(7);

// Eg-2
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);



//  Closure

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();



//  Function Scope

// Q-1
var num1 = 20,
  num2 = 3,
  name = "Roadsidecoder";

function mul() {
  return num1 * num2;
}
mul();
function getScore() {
  var num1 = 3,
    num2 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
getScore();


// Q-2
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // 3 times 5
    console.log(i);
  }, i * 1000);
}



//  Function Hoisting

// Without Hoisting:
function functionName() {
    console.log("work at tech");
}

functionName();         // function is called after declaring it

// With Hoisting:
functionName();        // function is called before declaring it

function functionName() {
    console.log("work at tech");
}

// Output 
var x = 21;
var fun = function () {
    console.log(x);
    var x = 20;
};
fun();



//   Params vs arguments

const fn = (a, x, y, ...numbers) => {
    console.log(x, y)
};
fn(5,6,7,8);



//  Spread operator and rest operator
function multiply(...nums){  // rest operator ,should always be the last one
    console.log(nums[0]*nums[1]);
}
var arr = [5,7];
multiply(...arr) // Spread operator



//  Callback

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}
  
processUserInput(greeting);



// Arrow functions

const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const addNum = (firstNum, secondNum) => firstNum + secondNum;



//  this

let user = {
    name: "Roadside Coder",
    rc1: () => {
      console.log("Subscribe to " + this.name);
    },
    rc2() {
      console.log("Subscribe to " + this.name);
    },
};


