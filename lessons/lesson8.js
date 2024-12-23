//Declarative Function

hellowOne()

function hellowOne(){
    console.log("Hello One!");
}


//Anonymous Function
var hellowTwo = function(){
    console.log("Hello Two!");
}

hellowTwo()

//ES6 Function syntax or arrow function
var hellowThree = () => {
    console.log("Hello Three!");
}

hellowThree()

//Function with arguments
function printName(name, age){
    console.log(name+" "+age)
}

printName("Yasas",23)

//Function with return value
function multiplyByTwo(number){
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)

//import function
import {printAge} from '../helpers/printHelper.js'
printAge(23)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(24)