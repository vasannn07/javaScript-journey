//Loops

//While Loop

/* let i = 1;

while(i <= 50){
    console.log(i);
    i++;
}
 */
//do While loop

/* let i = 50;

do{
    console.log(i);
    i++;
}while(i < 50) */


// For loop

/* for(let i=1;i<=5;i++){
    console.log(i);
} */

/* let name = "Vasan"
for(let i = 0;i < name.length;i++){
    console.log(name.charAt(i));
} */

// Nseted For loop

/* let name = "Vasan";
for(let i = 0;i < name.length;i++){
    for(let j =0;j < name.length;j++){
    console.log(name.charAt(i,j));
    }
}
 */

// break Statement

/* let i = 1;

while(i < 5){
    if(i === 3){
        break;
    }
    i++;
}
console.log(i); */

// continue Statement

let str = " ";

for(let i = 0;i < 10;i++){
    if(i === 3){
        continue;
    }
    str = str + i;
}
console.log(str);
