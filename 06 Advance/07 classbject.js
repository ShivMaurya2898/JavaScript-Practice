// import User from "./06classjs";

const User = require("./06classjs.js");

const Shiv = new User ("Shiv", "shiv123@gmail.com");

console.log(Shiv.getInfo());
Shiv.enrollCourse("React");
Shiv.enrollCourse("Angular");

console.log(Shiv.getCourseList());

let courses = Shiv.getCourseList();

courses.forEach((c) => console.log(c));