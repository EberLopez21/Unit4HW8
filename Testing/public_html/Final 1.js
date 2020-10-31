//let myArray=['2','3','5','53'];
//let total = 0;
//for(let myArray of myArray){
//    total += myArray;
//    document.write(total);
//let sum=0;
//for (let sum = myArray.reduce(function(a, b){
//        return a + b;
//    }, 0);

//for (let i=0; i<4; i++){
//    sum+= myArray[i];
//}
//document.write(sum);

//let scoresArray=['1','2','3'];
//let sum = scoresArray.indexOf(1) + scoresArray.indexOf(3);
//document.write(sum);

//function calcPercentage(100,500){
//return 100/500;
//}
//let percentageReturned= return;

let sales = [];
while(sales.length < 7){
    sales.push(Number(prompt("Enter number ")));
}
let smallest = Math.min(...sales);
let biggest = Math.max(...sales);
let total = 0;
for(let sale of sales){
    total += sale;
}
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
document.write("<br> Weekly sales: " + sales);
document.write('<br> Average Daily sales: ' + average(sales));
document.write('<br> Lowest Daily Sales: ' + smallest );
document.write('<br> Highest Daily Sales: ' + biggest );


