// ===================== What is "this" keyword?" =======================

/**
 * In js, "this" keyword is used to reference something.
 *
 * Depends on the context which "this" is currently in.
 */

this.firstThis = 5;

function getThisObj() {
  console.log("This in a normal function --->", this.firstThis);
}

getThisObj();

// ==================== "this" behaviour in objects (Normal function) ======================

let myObj = {
  name: "Hello World!",
  age: 50,
  getMyDetails() {
    console.log("This in a normal function in an object --->", this.name);
  },
};

myObj.getMyDetails();

/**
 * In normal functions, "this" is targeting to the parent(immediate parent) object but not the window object.
 */

// ================== Chained object, normal function and "this" keyword. ==========================

let myNewObj = {
  name: "Hello Universe!",
  age: "13.77 Billion",
  planet: {
    planetName: "Earth",
    getDetails() {
      console.log(
        "Normal function, chained obj and this keyword ---->",
        this.planetName,
        "and",
        this.name,
        this,
      );
    },
  },
};

myNewObj.planet.getDetails();

/**
 * this.planetName - Earth
 *
 * this.name - undefined
 *
 * this - {getDetails: ƒ getDetails(), planetName: "Earth"}
 *
 * Here, normal function will refer or target to its "immediate parent" not the outer parent.
 */

// ==================== "this" behaviour in objects (Arrow function) ======================
let myNewArrowFnObj = {
  civilization: "Indus valley",
  timePeriod: "3300-1300 BCE",
  getDetails: () => {
    console.log(
      "Arrow function, chained obj and this keyword ---->",
      `The civilization is ${this.civilization}`,
      this,
    );
  },
};

myNewArrowFnObj.getDetails();

/**
 * this.civilization - Undefined
 *
 * Here "this" is pointing to the window object. Because the arrow function will take "this" from its parent function.
 */

// Eg:
let exampleArrowThis = {
  name: "Arrow example",
  getDetails() {
    let test = () =>
      console.log("Arrow function, this and referencing --->", this.name);
    test();
  },
};

exampleArrowThis.getDetails();

/**
 * In this case, test() function's "this" reference was "exampleArrowThis" because it's parent function "getDetails()" had a reference
 * of exampleArrowThis.
 */

// ============================= 'this' keyword in Class ============================

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log("getName method in Class ---->", this.name);
  }
}

const myUser = new User("Edwin Hubble");
myUser.getName();

/**
 * Inside of a class, 'this' points to all of these variables that are inside the respective constructor.
 */

// ============================= Que 1 - What is the output? ============================
const user = {
  firstName: "Edwin",
  getName() {
    const firstName = "Hubble";
    return this.firstName;
  },
};

console.log("Que1 - this keyword output ---->", user.getName()); // Edwin

/**
 * In this case, getName() is a "normal function" so this.firstName will points to the immediate parent object - "user".
 */

// ======================== Que 2 - What is the result of accessing its ref? why? ==========================

function makeUser() {
  return {
    name: "Stephen Hawking",
    ref: this,
  };
}

const newMakeUser = makeUser();

console.log("Que2 - this and ref ---->", newMakeUser.ref.name); // Output - ""

/**
 * Here, 'this' keyword in the makeUser() will refer to the window object.
 *
 * When we are calling the function, the parent object is the window object. So this will be pointing to the window object.
 * Window object doesn't have anything called name. As of the scenario ref.name will be ""/empty.
 */

// ========================================= Que 3 - What is the output? =========================================

const user3 = {
  name: "Albert Einstein",
  greet() {
    console.log("Que3 - Normal function ---->", `Hello, ${this.name}!`);
  },
  fareWell: () => {
    console.log("Que3 - Arrow function ---->", `Goodbye, ${this.name}!`);
  },
};

user3.greet(); // Hello, Albert Einstein!
user3.fareWell(); // Goodbye, !

/**
 * In this case, greet() is a normal function so it will refer the immediate parent object which is user3. So this.name will return Albert Einstein.
 *
 * But in farewell(), arrow functions always points to the parent function's reference object. Here in this case, that is window object. So this.name
 * will return empty/"".
 */

// ========================================= Que 4 - Create an object calculator =========================================
/**
 * calculator.read(); - Will take 2 prompts from user "a" and "b".
 * console.log(calculator.sum()); - Will sum up those 2 prompts a and b.
 * console.log(calculator.multiply()); - Will multiply those 2 prompts a and b.
 */

const calculator = {
  read() {
    this.a = +prompt("a =", 0);
    this.b = +prompt("b =", 0);
  },
  sum() {
    return this.a + this.b;
  },
  multiply() {
    return this.a * this.b;
  },
};

// calculator.read();
console.log("Que 4 - Object calc sum --->", calculator.sum());
console.log("Que 4 - Object calc multiply --->", calculator.multiply());

// ========================================= Que 5 - What is the ouput? =========================================

var length = 4;

function callBack() {
  console.log("Que5 - Callback function & Object --->", this.length); // Result - 4
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callBack);

/**
 * method() in "object" will obviously target to the "object" but as another function (callback) is called inside the method, it will points
 * to global window object. So callBack() will return '4'.
 */

// ========================================= Que 6 - Implement Calc =========================================
/**
 * const result = calc.add(10).multiply(20).add(11).multiply(2).multiply(4);
 * console.log(result.total);
 */

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this; // Will return the whole calc object after execution.So we can chain them together.
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).multiply(10).add(10).multiply(10).multiply(10);
console.log("Que6 - Chained object function ---->", result.total);
