var user = {
    firstName: "Shiv",
    lastName: "Maurya",
    role: "Admin",
    loginCount: 33,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React Js Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());