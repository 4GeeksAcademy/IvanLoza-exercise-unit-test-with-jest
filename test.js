// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test ('converts from Euro to Dollar', () => {
    let total = fromEuroToDollar(1)
    expect(total).toBe(1.07)
})

test ('converts from Dollar to Yen', () => {
    let total = fromDollarToYen(1)
    expect(total).toBe(156.5)
})

test ('converts from Yen to Pound', () => {
    let total = fromYenToPound(1)
    expect(total).toBe(0.0051)
})