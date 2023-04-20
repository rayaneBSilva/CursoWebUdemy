let simpleInterest = function(initialCapital, interestRates, applicationTime){
    let fees = initialCapital * interestRates * applicationTime
    let amount = initialCapital + fees
    return fees

}

let compoundInterest = function(initialCapital, interestRates, applicationTime){
    let amount = initialCapital * Math.pow((1+ interestRates), applicationTime)
    return amount
}

console.log(simpleInterest(1000, 0.5, 1))