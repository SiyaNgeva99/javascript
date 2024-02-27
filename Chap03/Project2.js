const inventory = [];
const item1 = {
    make: "Toyota",
    model: "Corrolla",
    cost: 5000,
    qty: 3
}
const item2 = {
    name: "Honda",
    model: "Civic",
    cost: 4500,
    qty: 7
}
const item3 = {
    name: "Ford",
    model: "Ranger",
    cost: 8500,
    qty: 2
};

inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty)
