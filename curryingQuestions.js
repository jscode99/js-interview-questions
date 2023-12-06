/**
 * Currying: Takes "one argument at a time" and return a new function expecting the next argument.
 * f(a,b) => f(a)(b)
 *
 * Constructed by chaining closures by immediately returning their inner functions simultaneously.
 *
 * Transforms a function with multiple arguments into a nested series of functions.
 *
 * Instead of a function taking all arguments at one time, it takes the first one and returns a new function
 * which takes the second one and returns a new function, which takes the third one and so on util all arguments
 * have been fullfilled.
 *
 * Advantages: 1) Helps us avoid passing the same variable again and again.
 *             2) Helps to create a higher order function.
 *             3) Less prone to errors by making it a pure function.
 */

// ===================== Example fn(a,b) into f(a)(b) =========================

function normalFn(a, b) {
  console.log(a, b);
}

normalFn(1, 2); // normal function

function curryingFn(a) {
  return function (b) {
    console.log("Simple currying function ===>", a, b);
  };
}

curryingFn(1)(2); // currying function

//  =====================  Ques 1 - Implement sum(2)(6)(1) =========================

function curryingSumFn(a) {
  return function (b) {
    return function (c) {
      console.log("Sum currying function ===>", a + b + c);
    };
  };
}

curryingSumFn(2)(6)(1);

//  =====================  Ques 2 - Reusing Variable for logic =========================

/**
 * evaluate("sum")(4)(2) => 6
 * evaluate("multiply")(4)(2) => 8
 * evaluate("divide")(4)(2) => 2
 * evaluate("substract")(4)(2) => 2
 */

function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return console.log("Evaluate Sum (Currying)==>", a + b);
        case "multiply":
          return console.log("Evaluate multiply (Currying)==>", a * b);
        case "divide":
          return console.log("Evaluate divide (Currying)==>", a / b);
        case "substract":
          return console.log("Evaluate substract (Currying)==>", a - b);
        default:
          return console.log("Invalid operation -> " + operation);
      }
    };
  };
}

evaluate("sum")(4)(2);
evaluate("multiply")(4)(2);
evaluate("divide")(4)(2);
evaluate("substract")(4)(2);
evaluate("invalid")(4)(2);

const multiply = evaluate("multiply");
multiply(100)(46645);

//  =====================  Ques 3 - Infinite currying -> infinteSum(1)(2)(3)...(n) =========================

function infinteCurryingSum(a) {
  return function (b) {
    if (b) return infinteCurryingSum(a + b);
    return console.log("Infinte currying value ===>", a);
  };
}

infinteCurryingSum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)();

//  =====================  Ques 4 - Currying vs Partial Application =========================

/**
 * Partial application : Transform a function into another function with small arity
 *
 * arity - Number of operands or the arguments a function receives.
 */

function partialApplicationFn(a) {
  return function (b, c) {
    console.log("Partial application ====>", a + b + c);
  };
}

partialApplicationFn(1)(2, 3);

//  =====================  Ques 5 - Manipulating DOM ==============================

function updateHeaderElement(id) {
  return function (content) {
    document.getElementById(id).textContent = content;
  };
}

const updateHeaderContent = updateHeaderElement("heading");

updateHeaderContent("Hello, New heading here!");
