class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

function add(a, b) {
  return a + b;
}

const person = {
  name: "Nirbhay",
  age: 21,
};
const name = ["John", "doe"];

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



const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", () => {
  const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("success");
      } else {
        reject("Fail");
      }
    }, 2000); 
  });

  myPromise
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
    .finally(() => console.log("settled"));
});

