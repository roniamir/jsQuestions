let number1Q3 = 9;
let number2Q3 = -4;
let number3Q3 = 7;
let minNum = Math.min(number1Q3, number2Q3, number3Q3);
let maxNum = Math.max(number1Q3, number2Q3, number3Q3);
let middleNum = ((number3Q3 + number2Q3 + number1Q3) - (minNum + maxNum));
alert(minNum + ", " + middleNum + ", " + maxNum);