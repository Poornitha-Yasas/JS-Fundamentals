//Loops

// console.log('Hellow World!');
// console.log('Hellow World!');
// console.log('Hellow World!');
// console.log('Hellow World!');
// console.log('Hellow World!');

// for(statement1; statement2; statement3){

// }

//for loop (for i loop)
for (let i=0; i<5; i++){
    console.log('Hellow World! '+ i)
}

var cars = ["Toyota", "Honda", "BMW"]
//for of loop
for(let car of cars){
    console.log(car)
    if (car == "Honda"){
        break
    }
}

//Es6 syntax for each loop
cars.forEach(car =>{
    console.log(car)
})