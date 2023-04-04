const u = require("./utils")

const priceHT = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

for (let index = 0; index < priceHT.length; index++) {
     priceHT[index]=u.utils.getTTC(priceHT[index])
}

console.log(priceHT)