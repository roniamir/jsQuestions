//program failed. cant fined the reason.

let n1 = 8, n2 = 53;

function larggerNumDivisor(num){
    let larggerDivisor = 0;
    for( let i = (num-1) ; i > 1 ; i--){
        if( num % i === 0 ){
            larggerDivisor = i;
            break;
        }
    }
    return larggerDivisor;
}
let minVal = Math.min(n1, n2), maxVal = Math.max(n1, n2);
let largestDiv = minVal;

while(maxVal % largestDiv !== 0 ){
    largestDiv = larggerNumDivisor(minVal);
}
if (largestDiv === 0)
{
    console.log("No common divisor");

}
console.log("largger divisor is: " + largestDiv);


