//Numbers

const myVar = "43.753mcy";
const myNumber = 34;
const myFloat = 43.75;

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myFloat);

//This is String
console.log(myVar + 3);

//Conver String into Number
console.log(Number(myVar) + 3);
console.log(Number(true));

//Numbers Methods

//isInteger
console.log(Number.isInteger(myVar));

//parseFloat
console.log(Number.parseFloat(myVar));

//parseInt
console.log(Number.parseInt(myFloat));

//toString
console.log(myFloat.toString());

//chaning
console.log(parseFloat(myVar).toFixed(2).toString());

//isNaN

Number.isNaN()
isNaN()