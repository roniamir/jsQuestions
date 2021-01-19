//Assuming that up to a hundred there are 5 happy numbers
const q8Number = 123;
let temp = q8Number;

let countHappyNum = 0;
function digitSquare(temp){
    let sum = 0
    while(temp > 0){
        sum += (temp%10)**2;
        temp = Math.floor(temp/10);
    }
    return sum;
}
console.log(digitSquare(temp));

let rememberNumbers = [q8Number];
let numWas = false;
while(countHappyNum <5){
    while(!numWas){
        temp = digitSquare(temp);
        for (let i = 0; i < rememberNumbers.length; i++) {
            if(temp === rememberNumbers[i]){
                numWas = true;
                countHappyNum++;
                break;
            }
            rememberNumbers.push(temp);
        }
    }
}
console.log(temp);
/*
let countHappy = 0;
let numberQ8 = 13;
let i = numberQ8.toString().length;
let happySumNum = 0;


function digitSquared(num){
    for (let j = 0; j < i; j++) {
        happySumNum +=  (num % 10)**2;
        num = Math.floor(num / 10);
    }
    return happySumNum;
}
let x = digitSquared(numberQ8);
console.log(x);

/*while(countHappy < 5){
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
}*/