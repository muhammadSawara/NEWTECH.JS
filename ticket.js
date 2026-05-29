let age = Number(prompt("enter your age"));
let price;
if(age<0){
    console.log("wrong input");
}
else if(age>0 && age<5){
    price=0;
}
else if(age>=5 && age<=17){
    price=10;
}

else if(age>=18 && age<=64){
    price=20;
}

else{
    price=12;    
}

console.log("pay "+ price + " dollars");

    
