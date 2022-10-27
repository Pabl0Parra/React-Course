import { heroes } from "../data/heroes";

// **** Find an element inside an [] of {} ****

//Long way

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return heroe;
//     }
//   });
// };

// better way to find an element inside an array of objects
// const getHeroeById = (id) => {
//   return heroes.find((heroe) => heroe.id === id);
// };

// shortest way
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

// If you try to find all the heroes by owner, you realize find() only returns 1 element!!
// const getHeroesByOwner = (owner) =>
//   heroes.find((heroe) => heroe.owner === owner);

// console.log("OWNERS", getHeroesByOwner("Marvel"));

// filter() returns all of the heroes with same owner
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log("OWNERS", getHeroesByOwner("DC"));
