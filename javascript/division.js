/* 
question description: 
Create a function that will receive two values, the dividend and the divisor. The function should print the result
and the remainder of the division of these two values.
@author: Rayane Bezerra 
*/

const division = function(divider, dividend){
    let result = divider / dividend
    let rest = divider % dividend
    return `${"divison:"} ${result} ${"and"} ${"rest: "}${rest}`
}

const printResult = function(divider, dividend, operation = division){
    console.log(operation(divider, dividend))
}

printResult(4,2)