// // ... called args or spread operator

// var returnValue = Math.max(2, 5, 9, 8, 7);
// console.log(returnValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3}, {d:4, e:5});
// console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myArray = [5, 5];
// console.log(sumOne(...myArray)); // Spread Opeartor - it takes the group and it tries to spread it into multiple values

//args convert individual value into the array ...args - rest Operator
function sumTwo(a, b, c, d, ...args){
    console.log(args);

    let multi = a * b;
    let minus = c - d;
    let sum = 0;
    for (const arg of args) {
        // sum = sum + arg;
        sum += arg;
    }
    return [sum, multi, minus];
}

console.log(sumTwo(4, 6, 7, 3, 6, 6, 8));