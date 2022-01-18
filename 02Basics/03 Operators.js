// var num1 = 4;
// var num2 = 5;
// console.log(num1 + num2);
// var answer = num1 > num2;
// console.log(answer);

// D = (L - S)/L * 100

var seelingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - seelingPrice) / listingPrice) * 100;

console.log("Discount Percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > seelingPrice;

console.log(typeof result);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence