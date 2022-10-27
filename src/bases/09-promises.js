import { getHeroeById } from "./bases/08-import-export";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("2 segundos después");
//     resolve();
//   }, 2000);
// });

// promise.then(() => {
//   console.log("Then de la promise");
// });

// Task -- bring getHeroeById and
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // imported getHeroeById
//     const heroe = getHeroeById(2);

//     resolve(heroe);
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // imported getHeroeById
      const heroe = getHeroeById(2);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("Cant find heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(4)
  // the below code can be shortength by next below line
  //   .then((heroe) => console.log("Heroe", heroe))
  .then(console.log)
  // the below code can be shortength by next below line
  //   .catch((err) => console.warn(err));
  .catch(console.warn);
