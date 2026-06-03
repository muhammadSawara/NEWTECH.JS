let n = Number(prompt"enter positve intger");
let steps = 0;
while( n !== 1 && steps < 500){
    if(n % 2 === 0){
        n/=2;
    }

    else{
        n = 3 * n + 1;
        steps++;
    }

    
}
console.log(`Reached 1 in ${steps} steps.`);

