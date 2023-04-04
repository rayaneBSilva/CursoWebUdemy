/* question description: 
   Create a function that takes two parameters, base and exponent, 
   and returns the base raised to the exponent.
   @author: Rayane Bezerra 
*/
const potency = function(base,exponent){
   let result = 1;
   if(exponent == 0){
     result = 1;
   } else {
        result = base * potency(base, exponent - 1);
   }
   return result;
}

const printResult = function(base, exponent, operation = potency){
    console.log(operation(base, exponent))
}

printResult(7,2)