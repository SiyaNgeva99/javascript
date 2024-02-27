let shoppinglist = [];
shoppinglist.push("Milk", "Bread", "Apples");
shoppinglist.splice(1, 0, "Bananas", "Eggs");
let removeLast = shoppinglist.pop();
console.log(removeLast);
shoppinglist.sort();


console.log(shoppinglist.indexOf("Milk"));
shoppinglist.splice(1, 0, "Carrots", "Lettuce",);
let newList = ["Juice", "Pop"];
let combinedList = shoppinglist.concat(newList, newList);
console.log(combinedList.lastIndexOf("Pop"));
console.log(combinedList);