/* 
Define a function that can answerthe role of a user.
A user can be on following roles : 
admin - with all access
subadmin - with access to create/delete courses 
testprep -  with access to create/delete tests 
user - consume all content 
other - trial user

Input : getUserRole(name, role)
*/

// function getUserRole(name, role)
var getUserRole = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; //This is not necessary
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`
             break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`
            break;
        case "user":
            return `${name} is user with consume all content`
            break; 
        default:
            return `${name} is a trial user`
            break;
    }
}

getUserRole("Shiv","testprep");
console.log(getUserRole("Shiv","testprep"));

var getRole = getUserRole("Aman","user");
console.log(getRole);