// A function which is written one time and call howmany times we want
// function sayHello(){
//     console.log("Hello there, Shiv");
// }
// sayHello();
// sayHello();


function sayHello(name){
    console.log("Hello there, Shiv");
    console.log("Hello there,",name);
    console.log(`Hello there,${name}. How are you?`);
}
// sayHello("shiv");
// sayHello("Aman");

function namstey(){
    return "Hello in India";
}
var greetings = namstey();
console.log(greetings);
console.log(namstey());