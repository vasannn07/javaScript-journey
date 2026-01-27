//User input

/* let myBoolean = confirm("Hlo Wrld");
console.log(myBoolean); */

let myName = prompt("Enter ur name :");

if(myName){
    console.log(myName ?? "You didn't Enter ur name");
}
else{
    console.log("You didn't Enter ur name");
}
console.log(myName.trim().length);