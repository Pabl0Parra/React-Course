const person = {
  name: "Pablo",
  age: 25,
  password: "1234",
  clave: "Ironman",
};

// const { name, age, password } = person;

// console.log(name);

// console.log(age);

// console.log(password);

const applyContext = ({ clave, name, age, password }) => {
  //   console.log(name, age, password);

  return {
    nombreClave: clave,
    anos: age,
    latlng: { lat: 12.323, lng: -12.12 },
  };
};

const {
  nombreClave,
  anos,
  latlng: { lat, lng },
} = applyContext(person);

console.log(nombreClave, anos);
console.log(lat, lng);
