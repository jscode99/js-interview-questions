 // Functions: One of the fundamental building blocks in JavaScript

// ================= What is Function declarations / definition / statement? =================
function functionDeclaration(num) {
  return num * num;
}
/**
 * 1) Consists of the "function" keyword followed by the name of the function.
 *
 * 2) A list of parameters to the function, enclosed in parentheses and separated by commas.
 *
 * 3) The JavaScript statements that define the function, enclosed in curly braces {...}.
 */

// ================= What is Function expression? =================

const fundtionExpression = function (str) {
  return `func${str}`;
};

/**
 * 1) When you store a function inside a variable.
 *
 * 2) Function expressions in JavaScript are not hoisted, unlike function declarations.
 */

// ================= What is Anonymous function? =================
let anonymousVariable = 2;
document.addEventListener("click", function () {
  return anonymousVariable + 2;
}); // Here this callback function is an anonymous function.

/**
 * 1) Function that has no name, or more precisely, one that lacks a name.
 *
 * 2) An anonymous function has no identification when it is created.
 *
 * 3) Can be assigned to a variable or can be passed as a callback.
 */

// ================= What is first class function? =================

function displaySquare(fn) {
  console.log(`Square is ${fn(5)}`);
}

displaySquare(functionDeclaration);

/**
 * 1) A function can be treated like a variable.
 *
 * 2) Basically the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
 */

// ================= What is IIFE? =================

(function () {
  // …
})();

(() => {
  // …
})();

(async (url) => {
  const response = await fetch(url).then((users) => users.json());
  for await (const res of response) {
    // The for await...of loop is specifically designed for asynchronous iteration, and it is commonly used with asynchronous generators or promises.
    // console.log("IIFE Async execution response ======>", res);
  }
})("https://jsonplaceholder.typicode.com/users");

/**
 * 1) IIFE - Immediately invoked function expression.
 *
 * 2) Also known as Self-Executing Anonymous Function.
 *
 * 3) Use cases 1 : If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
 * As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
 *
 * 4) Use case 2 : Execute and async function - An async IIFE allows you to use await and for-await.
 * Even in older browsers and JavaScript runtimes that have no top-level await
 */

// Output based quesion - IIFE
(function (x) {
  return (function (y) {
    console.log(x); // 1 : Reason is closure.
  })(2);
})(1);

// ================= What is function scope? =================

const globalVariable = "declared outside function";

function exampleFunction() {
  console.log("Inside function");
  console.log(globalVariable);
}

exampleFunction();

console.log("Outside function");
console.log(globalVariable);

/**
 * 1) Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
 *
 * 2) Function defined in the global scope can access all variables defined in the global scope.
 *
 * 3) Function defined inside another function can also access all the variables defined in its parent function, and anyother variables to which the parent function has access.
 */

// ================= What is function hoisting? =================

functionHoisting();

function functionHoisting() {
  return "Hello!";
}

/**
 * 1) Function is fully hoisted (Complete function is copied), so even before the declaration we can call it.
 */

// ================= Function hoisting - O/P based question =============

// 1)
var globalScopedVariable = 2;

function opFunctionHoisting() {
  console.log(globalScopedVariable); // undefined
  var globalScopedVariable = 3;
}

opFunctionHoisting();

/**
 * 1) For local scope, the engine will creates a separate execution context.
 *
 * 2) In the local/block scope, we have a variable and it is hoisted as well, so the declared value is undefined before the execution.
 */

// 2)
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output : 0 1 2 3 4

/**
 * 1) Everytime the for-loop runs it "create a block scope" for i because of "let".
 *
 * 2) If it was a "var" instead of "let", then it should print 5, 5, 5, 5, 5 because "var" doesn't have a block scope.
 */

// ================= Spread and Rest operator =============

function multiplyInput(num1, num2, ...nums) {
  console.log("Rest operator ====>", nums);
  // Rest operator
  return num1 * num2 * nums[2];
}

var arrayForMultiplication = [2, 4, 6, 8, 10];

console.log(
  "Spread operator =======>",
  multiplyInput(...arrayForMultiplication),
); // Spread operator

/**
 * 1) Rest parameter must be last formal parameter.
 */

// ================= What is callback functions? =============

function tryCallBack(value) {
  return `User has given this ${value.toLowerCase()}`;
}

function myCallBack(cb) {
  if (true) {
    return cb("Hello");
  }
}

console.log(myCallBack(tryCallBack));
/**
 * 1) Function that passed into another function as an argument, which is then invoked inside that function to complete some kind of actions.
 */

// Pre-defined callback functions in JS

const btnHanlder = () =>
  document.addEventListener("click", () => {
    console.log("This is a predefined callback function in JS");
  });

// ================= What is arrow function? ===============

const myArrowFunction = () => {
  return "This is an arrow function!!";
};

const mySecondArrow = () => `This is my second arrow function`;

/**
 * 1) Introduced in ES6 version of JS and kind of similar to normal function.
 *
 * 2) Implicit "return" keyword
 */
