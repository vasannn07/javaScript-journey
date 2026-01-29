/* 1️⃣ if / else

Check whether a number is positive, negative, or zero.

Check if a number is even or odd.

Given marks, print:

"Fail" if marks < 40

"Pass" otherwise

Check if a person is eligible to vote (age ≥ 18).

2️⃣ switch

Print the day name for a number (1–7).

Print the month name for a number (1–12).

Simple calculator using +, -, *, /.

Print a message based on traffic light color (red, yellow, green).

3️⃣ Loops

Print numbers from 1 to 10.

Print numbers from 10 to 1.

Print all even numbers between 1 and 50.

Find the sum of numbers from 1 to 100.

Print the multiplication table of any number.

4️⃣ Functions

Create a function to add two numbers.

Create a function to check if a number is greater than 50.

Create a function that returns the square of a number.

Create a function that prints a greeting message using a name.

5️⃣ Scope

Create a variable inside a function and try accessing it outside.

Create a variable outside a function and access it inside.

Use the same variable name inside and outside a function—observe the output.

Declare a constant and try changing its value.

6️⃣ Arrays

Create an array of 5 numbers and print all elements.

Find the length of an array.

Add a new element to an array.

Remove the last element from an array.

Loop through an array and print each element.

🔥 Mixed Practice

Count how many numbers in an array are greater than 10.

Find the smallest number in an array.

Print only odd numbers from an array.

 */


 // Q1 : Check whether a number is positive, negative, or zero.

function checkNum(num){
    if(num > 0){
        return "The Num is Positive"
    }
    else if(num < 0){
        return "The Num is Negative"
    }
    else if(num == 0){
        return "The Num is Zero";
    }
}
console.log(checkNum(-18));



// Q2 : Check if a number is even or odd.

function evenOdd(num1){
    if(num1 % 2 === 0){
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}
console.log(evenOdd(77));


//Given marks, print: "Fail" if marks < 40 "Pass" otherwise.

function studentMark(mark){
    if(mark < 40){
        return "Fail";
    }
    else{
        return "Pass";
    }
}
console.log(studentMark(40));
console.log(studentMark(35));


// Check if a person is eligible to vote (age ≥ 18).

function isEligibleForVote(age){
    if(age >= 18){
        return "You are Eligible for Vote";
    }
    else{
        return "You are not Eligible for Vote";
    }
}
console.log(isEligibleForVote(18));



//         Switch Statement

// Print the day name for a number (1–7).
let day = 7;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("This not Days");
}