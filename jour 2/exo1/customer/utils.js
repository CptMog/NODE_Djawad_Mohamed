const TVA_FR = 0.2;

exports.utils ={
    getTTC : (object) =>{
        let tvaPrice = object.priceHT * TVA_FR;
        object.priceTTC = object.priceHT + tvaPrice;
        object.priceTTC = object.priceTTC.toFixed(2)
        return object;
    }
}