const {writeFile} = require ('fs');

const carteras =
    [ // pide crear una clase de productos 
    {title:"Mambia",
    description:"Bandolera",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3},

    {title:"Afrika",
    description:"Bolso de playa",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3},

    {title:"Loreto",
    description:"cartera",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3},
].toString();

function callbackWriteFile(err){
    if (err) throw err;
    console.log("Agregado con exito");
};


writeFile(carteras, "lsita", callbackWriteFile);