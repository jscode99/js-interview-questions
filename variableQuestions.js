// 3 Ways to declare variables in JS

/**
 * 1 - var
 * 2 - let
 * 3 - const
 */

// Important : "let" and "const" Introduced in ES6 to resolve some limitations of var.

/**
 * 1) Scope : Region of a program were a defined variable exists and can be recognized and beyond that it cannot be recognized.
 * Eg: Global scope, Block scope and Function scope.
 *
 * 2) "let" and "const" is block scoped.
 */

// ==================================== SCOPE ===========================================

// ======= Global scope of var ==========
var a = 6;
console.log(a);

{
  var b = "This is a block scoped variable";
}

console.log(b);

// ====== Block scoped variables =========
{
  let newa = "This is a block scoped variable, but it is let";
  console.log(newa);
}
// --------> For "const", it is as same as "let".

// console.log(newa); // In this case compiler throws an error : Uncaught ReferenceError: newa is not defined

// ====== Variable shadowing =============

let shadowing = "Hello";

if (true) {
  let shadowing = "Shadowed Hello";
  console.log(shadowing);
}

console.log(shadowing);

/**
 * 1) "let" and "const" in ES6 along with block scoping allows variable shadowing.
 *
 * 2) Can overlap/shadow a variable in block scope (ONLY IN BLOCK SCOPE) eventhough the same variable is being used outside the block scope.
 */

var shadowing1 = "try shadowing";
let shadowing2 = "try shadowing";

if (true) {
  let shadowing1 = "possible";
  // var shadowing2 = "not possible"; ========== ILLEGAL SHADOWING =======
}

/**
 * 1) While shadowing a variable it should not cross the boundary of scope. We can shadow "var" variable by "let" but cannot do the opposite.
 *
 * 2) Shadowing a "let" variable by "var" : ILLEGAL SHADOWING
 */

// ==================================== SCOPE =================================================

// ==================================== DECLARATION ===========================================

var declaration;
var declaration;
var declaration;

// "var" can be re-declared as many times as we want in the same scope.

let letDeclaration;
// let letDeclaration; Uncaught SyntaxError: Identifier 'letDeclaration' has already been declared

if (true) {
  let letDeclaration;
}

// "let" cannot be re-declared in the same scope. It can be re-declared only in the block scope.

const constantDeclaration = true;
// const constantDeclaration = false; Uncaught SyntaxError: Identifier 'constantDeclaration' has already been declared

// "const" should be declared and Initialized at the same time.

// ==================================== DECLARATION =============================================

// ==================================== Initialization ===========================================

let letInitializer = 1;
letInitializer = 2;

var varInitializer = 3;
varInitializer = 4;

const constInitializer = 5;
// constInitializer = 6; Uncaught TypeError: Assignment to constant variable.

// "var" and "let" can be re-initialized/updated but "const" cannot be.

// ================================= Hoisting ======================================================

// ====== IN CASE OF "var" ===============
console.log(hoistedVar); // Result will be "undefined"
var hoistedVar = 10;

/**
 * During the creation phase in the execution context, JS engine moves all the variables and functions references to the top of the code - "Hoisting"
 *
 * 1) It setup a memory heap for storing variables and function references. [Stores inside the windows object]
 *
 * 2) Then initializes those stored variables and functions with "undefined".
 */

// ======== IN CASE OF "let" ==============
// console.log(hoistedLet); Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 20;

/**
 * 1) "let" is also hoised as like "var", but the "let" is in a temporal dead zone. So it will throw a reference error.
 * 
 * 2) TEMPORAL DEAD ZONE : Time b/w the declaration and initialization of the "let" and "const" variables.
 * 
 * 3) State where the variables are "in the scope" but "they are not declared yet".
 */

// ================================= Hoisting ======================================================
