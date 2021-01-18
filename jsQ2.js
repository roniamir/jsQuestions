
//the mession didnt ask for accepting numbers from yhe user, but we ask
let num1 = prompt("Please choose three numbers. Number 1:");
let num2 = prompt("Number 2:");
let num3 = prompt("Number 3:");
let product = num1 * num2 * num3;
if(product === 0){
    alert("No product sing (product = 0)");
}
else if(product){
    alert("product sign is +");
}
else{
    alert("product sign is -");
}