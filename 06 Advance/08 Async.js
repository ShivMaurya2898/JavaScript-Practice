const one = () =>{
    console.log("I am one");
}

const two = () =>{
    setTimeout(() =>{
        console.log("What!");
    }, 3000);
    console.log("I am Two");
}

const three = () =>{
    console.log("I am Three");
}

one();
two();
three();