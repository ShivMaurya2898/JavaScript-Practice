// Allow User to access course if he is :
// logged in from email
// logged in from Facebook
// logged in from Google

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login Success");
}