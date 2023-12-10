//  =====================  Ques 1 - What is an object? ==============================

/**
 * Javascript is designed on a simple object-based paradigm.
 *
 * Object is a collection of properties.
 *
 * Property is an association between a name (or key) and a value.
 *
 * A property's value can be a function, in which case the property is known as
 * a method.
 */

//  =====================  Ques 2 - Delete keyword ================================

const deleteFunc = (function (a) {
  delete a;
  return a; // Returns 5 - a is a local variable and delete keyword is used to delete any property in an object.
})(5);

console.log(deleteFunc);

//  =====================  Ques 3 - Different pattern for a key ====================

let userObj = {
  age: 40,
  "diff key name": "Something",
};

console.log("Diff key in object :----->" + userObj["diff key name"]);
// Delete the key
delete userObj["diff key name"];
console.log("Modified object after delete :----->", userObj);

//  =====================  Ques 4 - Add dynamic value to an object ====================

const namePropery = "firstName";
const firstName = "Carl";
const lastNameProperty = "lastName";
const lastName = "Sagan";
const fullName = firstName + " " + lastName;

userObj[namePropery] = firstName;

userObj = {
  ...userObj,
  [lastNameProperty]: lastName,
  ["fullName"]: fullName,
};

console.log("Dynamic property ----->", userObj);

//  =====================  Ques 5 - Looping through Objects ========================

console.log(Object.keys(userObj)); // ['age', 'firstName', 'lastName', 'fullName']
Object.keys(userObj).map((key) => console.log(key));

// Print both keys and values

for (const key in userObj) {
  console.log(key); // Keys
  console.log(userObj[key]); // Values
}

//  =====================  Ques 6 - What is the output? ========================

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj); // Output - {a: 'three', b: 'two'}
/**
 * Reason - Other "key with same name" which was "added later is going to be considered" while printing.
 */

//  =====================  Ques 7 - Implement this function ?  ========================

/**
 * Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.
 */

let myObject = {
  a: 100,
  b: 200,
  c: 300,
  d: "String",
};

const multiplyByTwo = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};

console.log("Function with object ----->", multiplyByTwo(myObject));

//  =====================  Ques 8 - What is the output of the following code ?  ====================

const initial = {};
const second = { key: "b" };
const third = { key: "c" };

initial[second] = 123;
initial[third] = 456;

console.log(
  "Output of the following code - Object ----->",
  initial,
  initial[second], // 456 - 456 will overlap 123 which was initialized beforehand.
);
/**
 * initial is {[object,object] : 456} - Object can't be converted into a key, unless it is a string.
 * When that object is converted into a string forcefully it became [object,object].
 *
 *  ------> initial["[object,object]"] = 123;
 *  ------> initial["[object,object]"] = 456;
 */

//  =====================  Ques 9 - Stringify vs Parse ?  ========================

const stringifiedObj = JSON.stringify(userObj);
const parsedObj = JSON.parse(stringifiedObj);

console.log("Stringified object ----->", stringifiedObj);
console.log("Parsed object ----->", parsedObj);

/**
 * 1) JSON.stringify() - Converting an object into a string.
 *
 * 2) JSON.parse() - Parsing a string into an object.
 *
 * Use case: Setting values in local storage, body in a POST request etc.
 */

//  =====================  Ques 10 - What is the output ?  ========================

console.log([..."Hello world"]); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'] - Spreads all the characters.

const admin = { admin: true, ...userObj };

console.log("Spread operator ----->", admin); // Spread all properties of that particular object into the new object.

const newStringify = JSON.stringify(admin, ["admin", "fullName"]);

console.log("Stringify new operation ----->", newStringify); // It is gonna stringify "only those properties" which was given in the array.

const modifedUserObj = {
  ...userObj,
  thesis() {
    return this.age * 2;
  },
  thesisArrow: () => this.age * 2,
};

console.log("Function and this in object 1 --->", modifedUserObj.thesis()); // 80
console.log("Function and this in object 2 --->", modifedUserObj.thesisArrow()); // NaN

/**
 * Normal function will reference to that particular object (modifedUserObj).
 *
 * Arrow function will reference to window object. So in this case this.age is "undefined".
 */

//  =====================  Ques 11 - What is destructuring in objects ?  ========================

const { age } = userObj;
console.log("Destructured property ----->", age); // Taking out the properties in an object.

// Rename the property
const { fullName: name } = userObj;
console.log("Destructured property renamed ----->", name);

//  =====================  Ques 12 - What is the output ?  ========================

// function getItems(fruitList,...args,favFruit) {
//   return [...fruitList,...args,favFruit]
// }

// A rest parameter must be last in a parameter list. But spread operator can place anywhere.

function getItems(fruitList, favFruit, ...args) {
  return [...fruitList, ...args, favFruit];
}

//  =====================  Ques 13 - Object referencing  ========================

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello!";
console.log("Object referencing --->", d.greeting); // ---> Hello!

/**
 * While assigning one object to another variable we are not copying all of the properties. We are simply
 * providing the reference of the object to the variable. If we are changing anything in any of them,
 * Both will affect.
 */

//  =====================  Ques 14 - What is the output ?  ========================

console.log({ a: 1 } == { a: 1 }); // false - Both have different space in the memory
// console.log({ a: 1 } === { a: 1 }); // false - This condition will always return 'false' since JavaScript compares objects by reference, not value.

// 2nd question

let person = { name: "Baba Yaga" };
const members = [person];
person = null;

console.log("Referecing question --->", members); // [{name: 'Baba Yaga'}]
/**
 * We are basically providing person object into 0 index of members array. So it won' affect the modification of person object.
 *
 * But if we modify any properties in person object then it will affect the members array. Eg:- person.name = null => [{name: null}]
 */

// 3rd question

const value = { number: 10 };

const multiplyNumber = (x = { ...value }) => {
  console.log("Object referencing clonning --->", (x.number *= 2));
};

multiplyNumber(); // 20
multiplyNumber(); // 20
multiplyNumber(value); // 20
multiplyNumber(value); // 40

/**
 * As spread operator is being used in the parameter, it won't do the reference instead it will clone the object. That will act as
 * a new object entirely different from the other one and memory space will also be different one without any references. Eg: 20 , 20 etc.
 *
 * For the other functions with arguments, it won't take the default value and at the same time it will reference to the same object.
 * Then it updates the original value accordingly. Eg: 20, 40 etc.
 */

// 4th question

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 40,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log("Object referencing in function ---->", personObj1); // {name: 'Alex', age: 25}
console.log("Object referencing in function ---->", personObj2); // {name: 'John', age: 40}

/**
 * In the personObj1 scenerio, when it is received as param in the function, it would have a reference to that particular obj (personObj1).
 * So if the person.age modification happens, it will definitely affect the personObj1.
 *
 * In the personObj2 scenerio, we are reassigning the person with a new object. So it will not affect the referencing, and leads to a new object.
 */

//  =====================  Ques 15 - What is deep copy and shallow copy ?  ========================

/**
 * Shallow copy : When we copy an object to another object, that particular object will still holds the reference (atleast some of the properties) of the original object.
 *
 * Deep copy : When we completely clone an object to another variable, that won't have any references to the original object.
 */

//  =====================  Ques 16 - How to create a deep copy ?  ========================

const ogObject = { name: "OG Object" };

const deepCopy1 = Object.assign({}, ogObject);
const deepCopy2 = JSON.parse(JSON.stringify(ogObject));
const deepCopy3 = { ...ogObject };
