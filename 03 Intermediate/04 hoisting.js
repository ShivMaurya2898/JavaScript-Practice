// var num = 2;

// function sayMe(){
//     console.log("Say me");
// }
// sayMe()

// Function declration are Scanned & made available.
tipper("80");
function tipper(a){
    // var bill = a;
    var bill = parseInt(a);
    console.log(bill + 5);
};

// Function declration are Scanned & made undefined.
var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
};

bigTipper("200")

console.log(name);
var name = "Shiv";
// console.log(name);

function sayName(){
    var name = "MR. S";
    console.log(name);
}
sayName();

console.log(name);