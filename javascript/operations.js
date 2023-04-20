/*
question description: 
Create a function that given two values ​​(passed as parameters) shows in the console the addition, subtraction,
Multiply and divide these values.

@author: Rayane Bezerra 
*/
let operations = function(a,b){
    let sum = a + b
    let subtraction = a - b
    let multiplication = a * b
    let division = a / b
    let result = `${sum} ${subtraction} ${multiplication} ${division}`
    return result
}

console.log(operations(1,2))