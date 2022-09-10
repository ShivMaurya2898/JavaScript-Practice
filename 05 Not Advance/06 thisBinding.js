const shiv = {
    firstName: "Shiv",
    lastName: "Maurya",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses 
        `);
    },
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

// shiv.getInfo();
// dj.getInfo();

// shiv.getInfo.bind(dj)();
// var djinfo = shiv.getInfo.bind(dj);
// djinfo();

shiv.getInfo.call(dj);