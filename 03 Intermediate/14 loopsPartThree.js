const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Flipkart"]

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook"
}

for (const n in symbols){
    // console.log(symbols[n]);
    console.log(`Key is:${n} and value is :${symbols[n]}`);
}