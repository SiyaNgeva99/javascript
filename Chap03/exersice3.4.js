const myCar = { 
    make: "Nissan",
    model: "GRT: Skyline",
    value: 3000000,
    colour: "Black",
    year: 1997
};

let propColor = "colour";
myCar[propColor] = "Navy Blue";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + "" + myCar.model);
console.log(myCar.forSale);
