let person = prompt("Enter a name");
let message;
switch (person) {
case "Neville" :
case "Eei_Jay" :
case "Thami" :
case "Jason" :
message = person + " is my friend";
break;
default :
message = "I don't know " + person;
}
console.log(message);