var name = "Shiv";

console.log("Line number 3",name);

function sayName() {
    var name = "MR. S"
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo(){
        var name = "MR.Aman";
        console.log("Line number 12",name);
    }
}

sayName();