//IF Statements

/* let customerIsBanned = false;
let viewer = "Java Script Cource";
let reply;
let finance = true;

if(customerIsBanned){
    reply = `Sorry`;
}
else if(viewer && finance){
    reply = `Enjoy ${viewer} and finance content`;
}
else if(viewer){
    reply = `Enjoy ${viewer}`;
}
else{
    reply = `Sorry better way to teach Js`
}
console.log(reply); */


let testScore = 57;
let grade;
let collegeStudent = true;


if(testScore >= 90){
    grade =`A`;
}
else if(testScore >= 80){
    grade = `B`
}
else if(testScore >= 70){
    grade = `C`
}
else if(testScore >= 60){
    grade = `D`
}
else{
    if(collegeStudent){
        grade = `RA`;
    }
    else{
        grade = `F`;
    }
}
console.log(grade);