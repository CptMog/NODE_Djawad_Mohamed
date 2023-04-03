const process = require('process');

let cpt = 10;
const numberToFind = 78;
let numberChosen = -1;
process.stdin.setRawMode(true);

console.log("Deveinez le nombre \n");
 
while(cpt > 0 || numberChosen  !== numberToFind){
    process.stdin.on('readable', function () {
        var key = String(process.stdin.read());
        numberChosen = key;
    });

    if(numberChosen > numberToFind)
        console.log("Le nombre est choisit est trop grand")

    if(numberChosen < numberToFind)
        console.log("Le nombre est choisit est trop petit")

    cpt--;
}

     
