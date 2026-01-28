// Scoper var, let, const

// global scope

var x=1;  // var is a function scope
let y=2;
const z=3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

// local scope (or) block scope
// {
// let y=5;
// console.log(y); 
// }

// local scope (or) function scope

function myFunc(){
    const z=7;
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);   // const didn't allow the reuse

    if(true){
        let y=77;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
}
myFunc() // call the function to access the function scope
console.log(z);