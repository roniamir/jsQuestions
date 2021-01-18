let studentsArray = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]];
let studentsAvg = 0;
for(let i=0; i<5; i++){
    studentsAvg += studentsArray[i][1];
}
studentsAvg = studentsAvg/5;
console.log(studentsAvg);
if (studentsAvg < 60){
    console.log("Grade is : F");      
    } else if (studentsAvg < 70) {
    console.log("Grade is : D"); 
    } else if (studentsAvg < 80) 
    {
    console.log("Grade is : C"); 
    } else if (studentsAvg < 90) {
        console.log("Grade is : B"); 
    } else if (studentsAvg < 100) {
        console.log("Grade is : A");
    }
