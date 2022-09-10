fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    return "API", response.json();
})
.then((data) => {
    // console.log("Data is : ", data);
    var joke = data.value;
    console.log("JOKE is :", joke);
})
.catch();