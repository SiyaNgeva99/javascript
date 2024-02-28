const randomNumber = Math.floor(Math.random() * 6);
let answer = "Something went wrong";
let question = prompt("Ask me anything");
switch (randomNumber) {
case 0:
answer = "Will most likely not happen.";
break;
case 1:
answer = "Probably not";
break;
case 2:
answer = "Maybe, maybe not";
break;
case 3:
answer = "Migth happen";
break;
case 4:
    answer = "Probably will happen";
case 5: 
answer = "Most likely";
break;
case 6: 
answer = "will definitely happen"; 
default:
    answer = "I don't know about that";
}
let output = "You asked me " + question + ". I think that " + answer;
console.log(output);