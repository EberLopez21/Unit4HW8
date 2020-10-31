/*
 * 8.	Write a program that asks the user to enter a series of 20 numbers.  
 * The program should store the numbers in an array and then display the following data:
•	The lowest number in the array
•	The highest number in the array
•	The total of the numbers in the array
•	The average of the numbers in the array

 */

let numbers = [];
while(numbers.length <=19){
    numbers.push(Number(prompt("Enter number ")));
    numbers.sort((a, b) => a - b);
}

document.write("Numbers- " + numbers );

let smallest = numbers[0];
document.write("<br> Smallest- " + smallest);

let biggest = numbers[19];
document.write("<br> Biggest- " + biggest);

let total = 0;
    total += numbers;
    
document.write("<br> Total sum- " + total);

let average= total/20;
document.write("<br> Average- " + average);



