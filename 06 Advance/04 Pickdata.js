// const user = ["Shiv", 45, "Admin"];

// // var role = user[2];
// // var name = user[0];

// var [name, couesrcount, role] = user;

// console.log(role);

const myUser = {
    name : "Shiv",
    coursecount : 5,
    role : "Admin",
};

console.log(myUser.coursecount);

const {name, coursecount, role} = myUser;
console.log(role);