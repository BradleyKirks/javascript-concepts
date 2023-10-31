/**
 * ways of writting functions 
 *1. function declaration 
 2. function expression 
 3.arrow functions 
 4.annonymous functions 
 */


// 1. function declaration 

function twosum(num1, num2) {
    const sum = num1 + num2
    return sum
    const outside ='not working'

}
const result = twosum(2, 4)

console.log(result)

//2. express function 

const twoSumJs = function (num1, num2){
return num1 + num2
    const result2 =twoSumJs(45, 5)
    console.log(result2)
}

//3. annonymous function 
const myArray = []
    myArray.map(function (num1, num2){
return num1, num2
})


const  TwosumArrow2 = (num1, num2) => {
    return num1 + num2

}
// 4.Arrow function
const twoSumArrow3 =(num1 , num2) => num1 + num2
const result4 = twoSumArrow3(78 , 45)
console.log('result4 ->' , result4)
 


////--------------------------------------------


// write a function that takes 2 numbers and return the largest number
//create a function 

function twoSum(num1, num2){
    if (num1 > num2){
        return num1
    }else{ 
 return num2
    }
}
console.log(twoSum(23, 48))
const value = twoSum(23, 48)
//-----------------------------------------------
function storeResult (x) {
    return (x * 2)
}
console.log (storeResult(value))





