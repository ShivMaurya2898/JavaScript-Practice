// create an application with following roles : 
// admin - gets full access
// subadmin - get access to create/delete courses 
// testprep -  get access to create/delete tets 
// user - get access to consume content 

var user  = "testprep";

switch (user) {
    case "admin" :
        console.log("You have full access");
        break;
    case "subadmin" :
        console.log("You have access to create/delete the courses");
        break;
    case "testprep" :
        console.log("You have access to create/delete tets");
        break;
    case "user" :
        console.log("You have access to consume the content");
        break;
    default:
        console.log("Trial User");
        break;
}