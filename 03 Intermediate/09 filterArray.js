// Changes all array elements from start to end index to a static value and returns the modified array
var testArray = [2, 4, 6, 3, 1, 5, 9, 8];
// .fill("what we want to fill", start(inclusive), end(exclusive))
// console.log(testArray.fill("S", 2, 5));


const myNumber = [23, 24, 25, 55, 66, 77, 87, 98]

const result = myNumber.filter((num) => num > 55)

// console.log(result);

var users = ["Shiv", "Aman", "Som", "Saurabh", "Ankit", "Gulshan"];
//slice(start, end)
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
//splice(start, count, Replcing value)
users.splice(1, 3, "HI", "Bye");
console.log(users);



