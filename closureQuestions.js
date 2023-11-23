// ================= What is closures? =============

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


/**
 * 1) Combination of a function bundled together with reference to its surrounding state (lexical env.)
 * 
 * 2) Closure gives you access to an outer function's scope from an inner function.
 * 
 * 3) Closures are created everytime a function is created, at function creation time.
 * 
 * 4) Make possible for a function to have a private variable.
 */

// lexical environment: Environment that holds the variables of the current & outer scope.

// ================= What is lexical scope? =============

/**
 * 1) Ability for a function scope to access variable from the parent scope.
 * 
 * 2) Variable defined outside a function can be accessible inside of another function - opposite is not true.
 * 
 * 3) Child function to be lexically bound by that of the parent function.
 */

// ================= What is closure scope chain? =============

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20


/**
 * 1) 3 scopes - Local scope(own scope), outer function scope and global scope.
 * 
 * 2) The outer function is itself a nested function, access to the outer function's scope 
 * includes the enclosing scope of the outer function—effectively creating a chain of function scopes.
 * 
 * 3) A series of nested functions, all of which have access to the outer functions' scope. 
 * In this context, we can say that closures have access to all outer function scopes.
 */




