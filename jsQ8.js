//Assuming that up to a hundred there are 5 happy numbers
let countHappy = 0;
let i = 0;
let happySumNum = 0;

function digitSquared(num){
    let sum
    let sameNum = num;
    while(sameNum > 0){
        let digit = sameNum % 10;
    }
}

while(countHappy < 5){
    happySumNum = (Math.floor(i % 10))**2 + (Math.floor(i / 10))**2;
    while(happySumNum > 9){
        happySumNum = (Math.floor(happySumNum % 10))**2 + (Math.floor(happySumNum / 10))**2;
    }
    if(happySumNum == 1){
        console.log(i + " is happy number");
        countHappy++;
    }
    i++;
}