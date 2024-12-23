//Logical "AND" operator
console.log(true && true) //all values have to be TRUE for expression to be TRUE

//Logical "OR" operator
console.log(true || false) //any one value has to be TRUE for expression to be TRUE

var ageIsMoreThan18 = true
var isUSCitizen = false

var eligibleForDrivingLicense = ageIsMoreThan18 && isUSCitizen
console.log('This Customer is eligible For Driving License :'+eligibleForDrivingLicense)

//Logical "NOT" operator
console.log(6!==10)