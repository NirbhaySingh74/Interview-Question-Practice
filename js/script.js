// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// function add(a, b) {
//   return a + b;
// }

// const person = {
//   name: "Nirbhay",
//   age: 21,
// };
// const name = ["John", "doe"];

// console.log(typeof name);
// console.log(typeof person);
// console.log(typeof add);
// console.log(typeof Car);

//         **          PROMISE IN JAVASCRIPT     **

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("success");
//     } else {
//       reject("Fail");
//     }
//   }, 2000); // Waits for 2 seconds
// });

// const btnElement = document.getElementById("btn");
// btnElement.addEventListener("click", () => {
//   const myPromise = new Promise((resolve, reject) => {
//     const success = true;

//     setTimeout(() => {
//       if (success) {
//         resolve("success");
//       } else {
//         reject("Fail");
//       }
//     }, 2000);
//   });

//   myPromise
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("settled"));
// });

// fetch method
// fetch("https://catfact.ninja/facts?limit=20&page=4")
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.getElementById("cat-facts-container");
//     data.data.forEach((fact) => {
//       const factDiv = document.createElement("div");
//       factDiv.textContent = fact.fact;
//       container.appendChild(factDiv);
//     });
//   })
//   .catch((err) => console.error(err));

// console.log("starting");
// import { num } from "./app.js";

// console.log(num);

// function add() {
//     var a = 10; // function or global scope
//     let b = 20; // block scope
// }
// add()
// console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(a); // undefined
// var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20;

//  ******        CALLBACK FUNCTION     ******

function greet(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye");
}

// greet("Nirbhay", sayGoodbye);

function name(name, callback) {
  console.log(`Hello ${name} What do you do?`);
  callback();
}

function work() {
  console.log(`Hii, I'm Software Developer`);
}

// name("Nirbhay", work);

// **     Async Callback ***

function fetchData(callback) {
  console.log("Fetching Data");
  setTimeout(() => {
    const data = { id: 1, name: "Nirbhay" };
    callback(data);
  }, 4000);
}
function printData({ id, name }) {
  console.log("id", id);
  console.log("name", name);
}
// fetchData(printData);

setTimeout(() => {
  console.log("step 1");
  setTimeout(() => {
    console.log("step 2");
    setTimeout(() => {
      console.log("step 3");
      setTimeout(() => {
        console.log("step 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
