


process.stdin.setRawMode(true);

console.log("Deveinez le nombre entr 1 et 100 \n");
 
process.stdin.on('data', (chunkr) => {
    let number = parseInt(chunkr)
    let cpt = 10;
    const numberToFind = 78;
    let numberChosen = -1;

    if(isNaN(number)){
        process.stdout.write("Ce n'est pas un nombre !\n")
    }

    if(numberChosen > numberToFind){
        process.stdout.write("trop grand\n")
    }

    if(numberChosen < numberToFind){
        process.stdout.write("trop petit\n")
    }

    if(numberChosen === numberToFind){
        process.stdout.write("Trouver !\n")
    }
    
  });

     
