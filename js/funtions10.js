// Functions

/* function sum(n1,n2){
    console.log(n1);
    console.log(n2);
    if(n2 === undefined){
        return 0;
    }
    return n1+n2;
}
console.log(sum(3)); */


/* email = "vasanofcl07@gmail.com";

console.log(email.slice(0,email.indexOf("@"))); */


/* function getUserNameFromEmail(email){
    return(email.slice(0,email.indexOf("@")));
}

console.log(getUserNameFromEmail("vasanofcl07@gmail.com"));
console.log(getUserNameFromEmail("vasan75@gmail.com"));
console.log(getUserNameFromEmail("cvkings78@gmail.com")); */


/*     // First letter Caps change func

function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("vaSAn")); */



 // variable to call func

/* const toProperCase = function(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("vaSAn")); */


   // Another Way to declare func
   const toProperCase = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("d VaSAn"));