// console.log("Nirbhay");

// const num = 10;
// export {num}

// if(true) {
//     var a = 10;
//     let b = 20;
// }
// console.log(a);
// console.log(b);

// function greet(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }

// function goodBye() {
//   console.log(`Goodbye`);
// }

// greet("Nirbhay",goodBye)

// setTimeout(() => {
//   console.log("item 1");
//   setTimeout(() => {
//     console.log(`item 2`);
//     setTimeout(() => {
//       console.log(`item 3`);
//     }, 1000);
//   }, 1000);
// }, 1000);

const myPromise = new Promise((resolve, rejaect) => {
  if (true) {
    return resolve("success");
  } else {
    return rejaect("failed");
  }
});

myPromise.then((data) => console.log(data)).catch((err) => console.log(err));
