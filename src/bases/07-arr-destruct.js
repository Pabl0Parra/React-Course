const characters = ["Goku", "Vegeta", "Trunks"];

const [, , c3] = characters;

console.log(c3);

const returnArray = () => {
  return ["ABC", 123];
};

// shows the whole array
// const arr = returnArray();

// console.log(arr);

// array destructuring
const [letters, numbers] = returnArray();

console.log(letters, numbers);

// Task
// 1. first value of arr will be called name
// 2.the second will be called setName
// const applyState = (value) => {
//   return [
//     value,
//     () => {
//       console.log("Hello world");
//     },
//   ];
// };

// const arr = applyState("Goku");

// arr[1](); // displays Hello world

// console.log("Task", arr);

// Task
// 1. first value of arr will be called name
// 2.the second will be called setName
const applyState = (value) => {
  return [
    value,
    () => {
      console.log("Hello world");
    },
  ];
};

const [name, setName] = applyState("Goku");

console.log(name);
setName(name); //prints the function
