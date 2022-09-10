//${} - Interpolation

var myMap = new Map();

myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
myMap.set(5, "Five");

console.log(myMap);

// for(let key of myMap.keys()) {
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()) {
//     console.log(`value is ${value}`);
// }

// Incase of for we will get the key first
for(let [key, value] of myMap) {
    console.log(`Key is : ${key} and value is ${value}`);
}

//Incase of for we will get the value first
myMap.forEach((value, key) => console.log(`${value} and key is ${key}`));

myMap.delete(3);
console.log(myMap);