//Concatination and Interpolation

var price = 50
var itemName = "Cup"
var message = "The price for your "+itemName+" is "+price+" dollers"  //Concatination
var message2 = `The price for you ${itemName} is ${price} dollers`  //Interpolation

console.log(message)
console.log(message2)