const uid = "abc123";

var fullName = "Shiv Maurya";
var email = "shiv123@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name ");

console.log(uid);
console.log("Full Name is: " + fullName);
console.log("Full Name is: ", fullName);
console.log(email);

// interpolation
console.log(`
    With Unique ID : ${uid}
    User is : ${fullName}
    and his email is: ${email}
    and uses the password: ${password}

`);

var firstName = "Shiv";
var lastName = "Maurya";
var email = "shiv123@gmail.com";
var password = "123";
var country = "India"; 
var state ="Maharashtra";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;


console.log(`
    User FirstName is : ${firstName}
    User LastName is : ${lastName}
    User Email is : ${email}
    User Password is : ${password}
    User Live in : ${country}
    User State is : ${state}
`);