const one = () => {
  return "I am one";
};

// const two = () =>{
//     setTimeout(() =>{
//         return "I am Two.";
//     }, 3000);
// }

const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ("I am Two.");
    }, 3000);
  });
};

const three = () => {
  return "I am Three";
};

const callMe = async() => {
  let valOne = one();
  console.log(valOne);

  let valTwo = await two();
  console.log(valTwo);

  let valThree = three();
  console.log(valThree);
};

callMe();
