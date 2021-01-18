let numberQ9 = 371;
let armNum = (Math.floor(numberQ9 / 100))**3 + (Math.floor((numberQ9 / 10)%10))**3 + (numberQ9 % 10)**3;
if(armNum === numberQ9){
    console.log(numberQ9+ " is an Armstrong number");
} else{
    console.log(armNum + " is not an Armstrong number");
}

