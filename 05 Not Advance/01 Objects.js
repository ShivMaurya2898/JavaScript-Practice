var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course Count is : ${this.courseCount}`);
    };
};


User.prototype.getFirstname = function() {
    console.log(`Your FirstName id : ${this.firstName}`);
};


var Shiv = new User("Shiv", 2);
//console.log(Shiv);
Shiv.getCourseCount();
if (Shiv.hasOwnProperty("firstName")){
    Shiv.getFirstname();
}

//Shiv.getFirstname();



var Aman = new User("Aman", 1);
//console.log(Aman);
Aman.getCourseCount();
Aman.getFirstname();