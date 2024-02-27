// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(0, 2,);
// console.log(arrOfShapes);

//.push is to add a value at the end of an array
//.pop is to delete the last value of an array
//.shift is to delete the first value of an array
//.find is to find an element


arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

//.sort is to sort it in alphabetical order and ascending order
//.reverse is to do the reverse of sort

// arrays []
//objects {}
/*you can update properties in objects with 
  object["property"] = "value"*/
/*we can use variables to change the values of properties too
variable = "property";
object[varible] = "new value"*/

//to output in an object id object.property

//there are 2 ways ro access or modify one of the properties 
/*object.property.property = "newValue"; or
object["property"]["property"];*/

// get value from array inside property 
//let property = object.property[1]

//OBJECTS IN ARRAYS IN OBJECTS
/*let addresses = [{
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
{
street: "1st West avenue",
number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
}];

let streetName = addresses[0].street;*/
