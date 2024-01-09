// Call, Bind and Apply in JavaScript (Explicit Binding)

// ======================= Question 1 - What is call? ====================

/**
 * The call() method calls a function with a given "this" value and arguments provided individually.
 *
 * We can call any function, and "explicitly" specify what "this" should reference within the calling function.
 */

let refObj = {
  fName: "Bruce",
  Lname: "Wayne",
  butler: "Alfred",
  getFullName: function () {
    return `${this.fName} ${this.Lname}`;
  },
};


function getName() {
  console.log(
    "Call,Apply & Bind ====>",
    `Hey ${this.getFullName()}, How was your day sir?`,
  );
}

getName.call(refObj);

/**
 * Here in the normal function, usually "this" refers to its immediate parent object whereas in this case that is global object.
 * But in the global one we don't have any property/key named fName.
 *
 * By using call() method, we are able to explicitly specify what "this" should reference to.
 */

function getNameWithParam(param1, param2) {
  console.log(
    "Call,Apply & Bind ====>",
    `Welcome ${this.getFullName()}, What do you want to repair - ${param1} or ${param2}?`,
  );
}

getNameWithParam.call(refObj, "Batmobile", "Batpod");




// ======================= Question 2 - What is apply? ====================

/**
 * call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters
 * to be passed in individually, whereas apply() expects an "array" of all of our parameters.
 */

function getNameWithParamApply(param1, param2) {
  console.log(
    "Call,Apply & Bind ====>",
    `Hey ${this.getFullName()}, Welcome to the ${param1}. Please choose your ${param2}.`,
  );
}

getNameWithParamApply.apply(refObj, ["Batcave", "ride"]);




// ======================= Question 2 - What is bind? ====================

/**
 * The bind() method of function instances creates a "new function" that, when called, call this function with its "this" keyword
 * set to the provided value,
 */

function getMyButler(param1, param2) {
  console.log(
    "Call,Apply & Bind ====>",
    `Hey ${this.butler}, Patch me up please!. Also give me a ${param1} with ${param2}.`,
  );
}

const getButlerBind = getMyButler.bind(refObj);

getButlerBind("latte", "more ice");
getButlerBind("coffee", "more caffine");

/**
 * The JS engine is creating a new "getMyButler" instance and binding "refObj" as its "this" variable. It is important to understand that it
 * copies the "getMyButler" function.
 * 
 * Reusability is one of the great thing that it offer. 
 */