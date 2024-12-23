//Objects

var customer = {
    firstName: "Poornitha",
    lastName: "Yasas",
    cars: ["Toyota", "Honda", "BMW"]
}

//Dot notation
customer.firstName = "Mike"
//Bracket notation
customer['lastName'] = "Smith"
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var cars = ["Toyota", "Honda", "BMW"]
cars[1] = "Ford" 
console.log(cars[1])
console.log(customer.cars[1])