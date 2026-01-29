// Arrays


/* const myArr = [];

// adding element in Array

myArr[0] = "King";
myArr[1] = 18;
myArr[2] = true;

console.log(myArr); */


/* console.log(myArr.length);
console.log(myArr[1]);

// seeing the array last index value without knowing

console.log(myArr[myArr.length-1]); */

// adding new element in the Array last positon

/* myArr.push("Kohli");
console.log(myArr);

// deleting last element in the Array

myArr.pop();
console.log(myArr);

// adding element in the Array first postion

myArr.unshift("Cricket");
console.log(myArr);

// deleting first element in the Array

myArr.shift();
console.log(myArr);



// you have declare the var and store the data they have show length only

const firstArr = myArr.push("God");
console.log(firstArr);

const lastArr = myArr.unshift("Sachin");
console.log(lastArr);
console.log(myArr);

// you are remove the last or first element they go and store the our variaable

const fstArr = myArr.pop();
console.log(fstArr);

const lstArr = myArr.shift();
console.log(lstArr);
console.log(myArr);

// delete element in any postion in Array and also add element 

myArr.splice(2,1,"Kohli");
console.log(myArr);
 */
/* // slice
const myAns = myArr.slice(1,2); // slice will store new variable
console.log(myAns);


// reverse

const myVal = myArr.reverse(); // you have create new variable and print or directly also you have print
console.log(myVal);

const myJoin = myArr.join(); // they will change the Array into String
console.log(myJoin);

const mySplit = myJoin.split(',');
console.log(mySplit); */



// adding two Array into one Array

/* myArr2 = ["Prince",77,"Gill"];
const newArr = myArr.concat(myArr2);
console.log(newArr);

// another way to add two Array this is called spread operator
const newArr2 = [...myArr,...myArr2];
console.log(newArr2); */

const frontEndA = ["HTML","CSS","JavaScript"];
const frontEndB = ["React","Anguler","NodeJs"];
const backEndA = ["Java","Python","DartN"];
const backEndB = ["MySql","C++","Php"];
const fullStock = ["FrontEnd","BackEnd","Front&Back Dev"];

console.log(frontEndA[2],backEndA[0]);

// store 2 array into 2D Array

const frontEnd = [frontEndA,frontEndB];
const backEnd = [backEndA,backEndB];

// print the 2D Array elements
console.log(frontEnd[1][2],backEnd[1][0]);


// store the 3D Array

const myDsa = [frontEnd,backEnd,fullStock];
console.log(myDsa[0][0][2]);