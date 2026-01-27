// Switch Statement

switch(2){

    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No num Found");    
}

let Kohli = "King";
let Sachin = "God";

switch(Kohli){
    case Sachin:
        console.log("Complete 100 Centiry");
        break;
    case "King":
        if(Sachin === "God"){
            console.log("They Can break any Rec");
    
        }
        else{
            console.log("They Did not break rec");
        }
        break;

    default:
        console.log("King Can break");    
}