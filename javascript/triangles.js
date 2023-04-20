/*
question description: 
Triangles can be classified into 3 types based on the size of their sides:
Equilateral: All three sides are equal. Isosceles: Two equal sides. Scalene: All sides are different.
Create a function that receives the lengths of the three sides of a triangle and returns its classification as
to the size of its sides. (In this example, the mathematical conditions for the existence of a
triangle).

@author: Rayane Bezerra 
*/

const triangles = function(a,b,c){
if(a == b && a == c && c == b){
    result = `${"Equilátero"}`
} else if(a == b || a == c || c == b) {
    result = `${'Isósceles'}`
} else {
    result = `${'Escaleno'}`
}
    return result
}

const printResult = function (a,b,c, operation = triangles){
    console.log(operation(a,b,c))
}
// testing and case that the triangle is equilateral
printResult(1,1,1)
// testing and case that triangle is isosceles, a and b are equal
printResult(1,1,2)
// testing and case that triangle is isosceles, a and c are equal
printResult(1,2,1)
// testing and case that triangle is isosceles, b and c are equal
printResult(1,2,2)
// testing and case that triangle is scalene, a and b and c are differentes
printResult(1,2,3)