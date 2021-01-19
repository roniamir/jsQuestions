//Assuming that up to a hundred there are 5 happy numbers
let countHappy = 0;
let numberQ8 = 13;
let i = (string(numberQ8)).length;
let happySumNum = 0;

function digitSquared(num){
    for (let j = 0; j < i; j++) {
        happySumNum +=  (Math.floor(i % 10))**2;
        num = Math.floor(num / 10);
    }
}

while(countHappy < 5){
    while(happySumNum > 9){
        digitSquared(numberQ8);
    }
    if(happySumNumb === 4){
        console.log(i + " is not an happy number");

    }
    if(happySumNum == 1){
        console.log(i + " is happy number");
        countHappy++;
    }
}