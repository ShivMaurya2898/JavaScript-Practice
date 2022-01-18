// Array is collection of data.
// Array Starts from 0.

var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Mumbai", "Delhi", "Chennai", "Kolkata")

// console.log(states[3]);
// console.log(states.length);

//Replace the value in the array
states[0] = "Pune";
// console.log(states);

var user = ["Shiv", "shiv12@gmail.com", 3, 31, true];
// console.log(user);

// remove the last value in the Array
user.pop();
user.pop();
// console.log(user);

// unshift add the value in the starts of the array and shift all element
user.unshift("New Value");
// console.log(user);

//Removes the first element from an array and returns it. 
//If the array is empty, undefined is returned and the array is not modified.
user.shift("Aman");
console.log(user);

//indexof gives the position of the element
// console.log(user.indexOf("Shiv"));

//Array.from it convert into array
console.log(Array.from("Shiv"));