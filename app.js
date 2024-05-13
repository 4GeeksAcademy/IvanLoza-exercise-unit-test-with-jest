// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))


function fromEuroToDollar (valueInEuro){
    return valueInEuro*1.07
}

function fromDollarToYen (valueInDollars){
    return valueInDollars*156.5
}

function fromYenToPound (valueInYen){
    return valueInYen*0.0051
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };