let products = [

const banana{
id: 'A111', // unique string
name: 'banana', // product name
category: 'vegtables', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 5, // number
stock: 10 // integer
},

const apple{
id: 'A222', // unique string
name: 'apple', // product name
category: 'vegtables', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 6, // number
stock: 11 // integer
},

const peach{
id: 'A333', // unique string
name: 'peach', // product name
category: 'vegtables', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 7, // number
stock: 12 // integer
},

const strawberry{
id: 'A444', // unique string
name: 'strawberry', // product name
category: 'vegtables', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 8, // number
stock: 13 // integer
},

const xl{
id: 'B111', // unique string
name: 'xl', // product name
category: 'drinks', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 9, // number
stock: 14 // integer
},

const blue{
id: 'B222', // unique string
name: 'blue', // product name
category: 'drinks', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 10, // number
stock: 15 // integer
},

const water{
id: 'B333', // unique string
name: 'water', // product name
category: 'drinks', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 11, // number
stock: 16 // integer
},

const coffe{
id: 'B444', // unique string
name: 'coffe', // product name
category: 'drinks', // e.g. 'Electronics', 'Books', 'Clothing', etc.
price: 12, // number
stock: 17 // integer
},

];

let totalValue = 0;

for(let i = 0 ; i<products.length; i++){
    totalValue += products[i].stock * products[i].price;
}


console.log("Total inventory value:",totalValue);


const categorySummary = {};

for(let product of products){

    let cat = product.category;

    if(!categorySummary[cat]){
        categorySummary[cat] = 0;
    }
    categorySummary[cat] +=  products.stock * products.price;
}

for(let category of categorySummary){
    console.log(catagory + ": " + categorySummary[cat]);
}


const LOW_STOCK = 11;

for(let product of products){
    product.lowStock = (product.stock < LOW_STOCK);
    if(lowStock === true){
        console.log(product + ", ");
    }
}

for(let product of products){
    if(product.category === 'Electronics'){
        product.price = product.price * 0.9;
    }
}


for(let product of products){
    if(product.category === 'Electronics'){
        console.log(product + ": " + product.price);
        
    }
}

const availble = [];


for(let product of products){
    if(product.stock > 0 ){
       availble.push(product);
    }
}


console.log(availble.length);

for(let product of availble){
    console.log(product.name + ", ");
    
}


for (let i = products.length - 1; i >= 0; i--) {
    if (products[i].stock === 0) {
        products.splice(i, 1);
    }
}

console.log(products.length);