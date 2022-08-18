console.log("Q1.1.1");
const car = {
    speed: 250,
    brand: "BMW",
    model: "M4",
    price: 79999,
    electric: false,
};

const { speed, brand, model, price, electric } = car;
console.log(speed, brand, model, price, electric);

console.log("Q1.1.2");

const person = {
    name: "Tom",
    email: "tom@gmx.de",
    age: 23,
};
const { name: firstname, lastname = "empty" } = person;
console.log(firstname, lastname);

console.log("Q1.2");

const names = ["Mark", "Lisa", "Dalia", "Curtis", "Tim", "Ben", "Olaf"];

const [first, second] = names;
const [, , ...rest] = names;
console.log(rest);
console.log(first, second, rest);

// function isValid(test) {
//     const result1 = isValid.filter((test) => test.includes("kyu"));
//     console.log(result1);
// }
// isValid("codewars.com");
