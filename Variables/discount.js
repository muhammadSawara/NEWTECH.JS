let cartTotal = Number(prompt("Enter cart total"));
let member = prompt("Are you a member?");

if(member == "yes" && cartTotal>=200){
    cartTotal= cartTotal*80/100;
}

else if(member == "yes" && cartTotal<200){
    cartTotal = cartTotal*90/100;
}

else if(member == "no" && cartTotal>=200){
    cartTotal = cartTotal*95/100;
}
 
console.log("pay " + cartTotal + " dollars");
