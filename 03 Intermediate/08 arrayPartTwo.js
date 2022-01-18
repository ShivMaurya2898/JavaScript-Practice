// function isEven(element){
//     // if(element % 2 ===0){
//     //     return true;
//     // }
//     // return false;
//     return element % 2 ===0;
// }
// console.log(isEven(2));

//Arrow function
var isEven = (element) => {
    return element % 2 ===0;
}
// console.log(isEven(2));

//Callback Function
// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

//call back function 
var result = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
});
// console.log(result);

//call back function with no return keyword

var result = [2, 3, 6, 8].every((e) => e % 2 === 0);
console.log(result);