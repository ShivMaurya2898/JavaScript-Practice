// classes is like a blueprint
class User{
    constructor(Name, Email){
        this.name = Name;
        this.email = Email;
    }
    #courseList = [];

    getInfo() {
        return {Name: this.name, Email : this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList() {
        return this.#courseList;
    }

    login() {
        return "You are logged in.";
    }
}

class SubAdmin extends User{
    constructor(Name, Email){
        super(Name, Email);
    }

    getAdminInfo(){
        return "I am SubAdmin.";
    }
    login(){
        return "login for admin only.";
    }
}


module.exports = User;

// Getter getInfo() is simply method which helps to grab some of the infotmation of the class which is private.
// In Getter we usally return the variale we don't except parameter usally not all the time 

// In the setters we expect some parameter enrollCourse(name)
//For private we put #
const Jhon = new User("Jhon", "Jhon@gmail.com");
// console.log(Jhon.getInfo());
Jhon.enrollCourse("CSS");
// console.log(Jhon.getCourseList());
// console.log(Jhon.courseList);


const tom = new SubAdmin("tom", "tom@gmal.com");
console.log(tom.getAdminInfo());
// when we are using static keyword then static login() that method can not be inherit in child class
console.log(tom.login());
console.log(tom.getInfo());