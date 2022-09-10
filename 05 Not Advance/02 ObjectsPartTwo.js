var User =  {
    name: "",
    getUserName : function () {
        console.log(`User name is : ${this.name}`);
    },
};


var shiv = Object.create(User);
console.log(shiv);

shiv.name = "Shiv Maurya";
shiv.getUserName();

var sam  = Object.create(User, {
    name: {value: "sammy" },
    courseCount: {value : 3 },
});

sam.getUserName();