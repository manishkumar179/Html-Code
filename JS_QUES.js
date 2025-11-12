/*


                                   **### **1. Variables and Data Types****



//1. [Easy] Create a variable `name` and store your full name. Print it in the console.

var nAME = "Manish kumar"
console.log(nAME);


// 2. [Easy] Create three variables: `age`, `city`, `isStudent`. Print them using a single console.log.

var age = 20
var city = "Bhopal"
var isStudent = true

console.log("Age: " , age , " City:" , city , "  Are u student: " , isStudent);


// 3. [Easy] Use `prompt()` to take the user's favorite color and log `Your favorite color is <color>`.



var color = prompt("Enter your favourite color: ")

console.log("Your favourite color is: " , color);





// 4. [Easy] Create two variables `a` and `b` with numbers and print their sum, difference, product, and division.


var a = Number(prompt("Enter a: "))
var b = Number(prompt("Enter b: "))

console.log("Sum: ", a+b , " Difference: " , (a-b) , "Product: " , (a*b) , "Division: " , (a/b));



// 5. [Easy] Declare a constant `PI` and assign the value 3.14159. Print its type.

const PI =3.14159

console.log(typeof(PI));



// 6. [Medium] Write a program to swap the values of two variables without using a third variable.

var a=10
var b=20

a=a+b  
b=a-b  
a=a-b  

console.log(a,b);




// 7. [Medium] Use template literals to print: `Hello [name], you are [age] years old and live in [city].

var nAME = "Manish"
var age = 20
var city = "Bhopal"

console.log(`Hello ${nAME}, you are ${age} years old, live in ${city} `);




// 8. [Medium] Take two inputs using prompt, convert them into numbers, and print the total.

var num1 = Number(prompt("Enter first number: "))
var num2 = Number(prompt("Enter second number: "))

var total=num1+num2

console.log("Total Number: ", total);





// 9. [Hard] Write a script that asks for a user’s birth year using `prompt()` and prints their exact age.


var birth_year = Number(prompt("Enter your birth year: "))


//To get current year
var current_year = new Date().getFullYear();


var age = current_year - birth_year

console.log(`You are ${age} years old`);





// 10. [Hard] Create a small story using template literals with at least 3 variables (like name, city, dream). Print it in the console.

var nAME="Manish"
var city="Bhopal"
var dream = "to become a successful software engineer"

console.log(`Once upon a time, there lived a young man named ${nAME} in ${city}. 
Every day, he worked hard and learned new things about technology. 
His biggest dream was ${dream}, and he never gave up until he made it true.`);

                                 


                                   **### **2. Operators (Arithmetic, Comparison, Logical)****


   



//  11. [Easy] Write a program that takes two numbers and prints the remainder when one is divided by the other.
                                       

var num1 = Number(prompt("Enter first number: "))
var num2 = Number(prompt("Enter second number: "))

var remainder = num1 % num2


console.log(`The remainder when ${num1} is divided by ${num2} is  ${remainder} .`  );






// 12. [Easy] Use all arithmetic operators on two numbers and print each result.

var a=10
var b=20
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a==b);
console.log(a===b);
console.log(a**b);
console.log(a++);
console.log(b++);





// 13. [Easy] Write a program to check if a number is even or odd using the `%` operator.

var a = 34
if(a % 2 == 0){
    console.log("Even Number ");
    
}else{
    console.log("odd Number");
    
}





// 14. [Easy] Demonstrate the use of `++` and `--` operators with examples.

var a = 10
var b = 20

var c = (a++) + (--b)

console.log(a);
console.log(b);
console.log(c);





//15. [Easy] Use `==` and `===` to compare `5` and `'5'` and print both results.

var a = 5
var b = '5'


// ==  It compare only value not datatypes
console.log(a == b); 

// === It compare both value and datatypes
console.log(a === b);




//16. [Medium] Create a program that checks if a number is between 10 and 50 using logical operators.


let a = 88

if(a >= 10 && a <= 50){
    console.log(` ${a} is between 10 and 50`);
    
}else{
    console.log( `${a} is not between 10 and 50 `);
    
}



// 17. [Medium] Create a small login simulation: define a correct password and use `prompt()` to take user input, then check if it matches.


var correctPasswd = "mani"

var userPasswd = prompt("Enter your password to login: ")

if(correctPasswd == userPasswd){

    console.log("✅ Login successful");
    
}else{
    console.log("❌ Incorrect password login again");
    
}







// 18. [Medium] Write a program to check if a person is eligible to vote (age >= 18) and lives in India.


let age = 18

var country = "India"



if(age >= 18 && country.toLowerCase() === "india"){
    console.log("You are eligible to vote in india");
    
}else{
    console.log("You are not eligible to vote in india come after " , (18-age) , "years "   );
    
}





// 19. [Hard] Write a mini calculator that takes two numbers and an operator (+, -, *, /) and prints the result.


var num1 = Number(prompt("Enter first number"))
var num2 = Number(prompt("Enter second number"))

var operator = prompt("Enter operators: (+ , - , * , / ) ")

var result;
if(operator === "+"){
    result = num1 + num2
}else if(operator === "-"){
    result = num1-num2
}else if(operator === "*"){
    result = num1*num2
}else if(operator === "/"){
    if(num2 != 0){
        result = num1 / num2
    }else{
        console.log("Division by zero error");
        
    }
}else{
    console.log("Invalid Operator");
    
}


console.log("Result: " , result);





// 20. [Hard] Create a scenario where you compare the marks of three students and print who scored the highest using comparison and logical operators.

var anuMarks = 10
var anilMarks = 80
var arushMarks = 60

if(anuMarks > anilMarks && anuMarks > arushMarks){
    console.log("Anu will get highest marks");
    
}else if(anilMarks > anuMarks && anilMarks > arushMarks){
        console.log("Anil will get highest marks");

}else{
        console.log("Arush will get highest marks");

}





// 21. [Easy] Check if a number is positive, negative, or zero.


var num = 20

if(num === 0){
    console.log("ZERO");
    
}else if(num > 0){
    console.log("Positive Number");
    
}else{
    console.log("Negative Number");
    
}





// 22. [Easy] Take a number input and check if it’s divisible by 5 or not.


var num = Number(prompt("Enter the number: "))

if(num % 5 === 0){
    console.log( num , " Divisible by 5");
    
}else{
    console.log(num , " Not divisible by 5");
    
}




// 23. [Easy] Write a program to check if a user can get a driving license (age >= 18).


var age = 10

if(age >= 18){
    console.log("You can get a driving Licence");
    
}else{

    console.log("You will not get driving licence come after " , 18 - age , "years");
      
}





// 24. [Easy] Check if a given character is a vowel or consonant.


var ch = "A"
var char = ch.toLowerCase()

if(char == "a" || char == "e" || char == "i" || char == 'o' || char == 'u'){

    console.log(char , " is vowel");
    
}else{
    console.log(char , " is consonent");
    
}





// 25. [Easy] Write a program to check whether a number is odd or even using if-else.


var num = 34

if(num % 2 == 0){
    console.log("Even number");
    
}else{
    console.log("Odd number");
    
}




//26. [Medium] Take a student's marks and print their grade: A (90+), B (80–89), C (70–79), D (60–69), F (below 60).


var marks = Number(prompt("Enter your marks: "))

if(marks >= 100){
    console.log("You Entered Wrong Number");
    
}
else if(marks <= 100 && marks >= 90){
    console.log("Grade A");
    


}else if(marks < 90 && marks >= 80){
    console.log("Grade B");
    
}else if(marks < 80 && marks >= 70){
    console.log("Grade C");
    
}else if(marks < 70 && marks >= 60){
    console.log("Grade D");
    
}else if(marks < 60){
    console.log("Fail");
    
}else{
    console.log("Wrong Input");
    
}



// 27. [Medium] Write a program that asks for temperature and suggests clothing (e.g., cold = wear jacket, hot = wear t-shirt).

var temperature = prompt("Enter temperature cold/hot: ")


if(temperature.toLowerCase() === "cold"){
    console.log("Wear jacket");
    
}else if(temperature.toLowerCase() === "hot"){
    console.log("Wear t - shirt");
    
}else{
    console.log("You entered wrong input");
    
}



// 28. [Medium] Ask for a number and print if it’s a single-digit, double-digit, or triple-digit number.


var num = Number(prompt("Enter the number:- "))

if(num >= 0 && num <= 9 || num <= 0 && num >= -9){

    console.log("Single Digit ");
    
}else if(num >= 10 && num <= 99 || num <= -10 && num >= -99){

    console.log("Double Digit");
    
}
else if(num >= 100 && num <= 999 || num <= -100 && num >= -999){

    console.log("Triple digit");
    
}else{

    console.log("More than three digit");
    
}




// 29. [Hard] Create a small ATM simulation: ask for PIN, check correctness, then show balance or error message.

var pin = prompt("Enter your pin")

if(pin === "2390"){
    console.log("Account balance : 23456");
    
}else{
    console.log("Wrong pin");
    
}





// 30. [Hard] Take time (hour) as input and greet accordingly (Morning, Afternoon, Evening, Night).

var time = Number(prompt("Enter time in hours (0 - 23 )"))



if(time < 12 && time >= 5){

    console.log("Morning 🌄");
    
}else if(time > 12 && time <= 17){

    console.log("Afternoon ☀️");
    
}else if(time > 17 && time >= 20){

    console.log("Evening 🌄");
    
}else if(time > 20 && time <=23 || time > 0 && time < 5){
    console.log("Night 🌉");
    
}else{
    console.log("You Entered wrong input");
    
}





// 31. [Easy] Print numbers from 1 to 10 using a `for` loop.



var num = 10

for(var i = 1 ; i<= num; i++){

    console.log(i);
    
}




// 32. [Easy] Print the multiplication table of 5 using a `for` loop.


var num = 10

for(var i=1; i<=num; i++){
    console.log(`5 * ${i} = ${5*i}`);
    
}



// 33. [Easy] Print even numbers from 2 to 20 using a loop.


var num = 20

for(var i=2; i <= num; i++){
    if(i % 2 == 0 ){
        console.log(`Even Number ${i}`);
        
    }
}





// 34. [Easy] Print the sum of numbers from 1 to 100.

var num =100

var sum = 0

for(var i=1; i<= num; i++){
    sum+=i
}

console.log(sum);




//35. [Easy] Print each character of your name using a loop.

var s = "Manish_ "
var str = s.replace(/[_ ]/g , "")

console.log(str.length);


for(var i=0; i<=str.length-1; i++){
    
    console.log(str[i]);
    
}





// 36. [Medium] Reverse a given string using a loop.


var s = "Manish"

for(var i =s.length-1; i >= 0; i--){

    console.log(s[i]);
    
}




//37. [Medium] Print all numbers between 1 and 50 that are divisible by both 3 and 5.

var num = 50

for(var i=1; i<=num; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(i);
        
    }

}





// 38. [Medium] Take a number and print its factorial using a loop.

var num = 4 

var factorial = 1

for(var i=1; i<=num; i++){
    factorial *= i
}

console.log(factorial);




// 39. [Hard] Write a program to print a pyramid pattern of `*`.

 let rows = 5

 for(var i=1; i<=rows; i++ ){

     
     let space = " ".repeat(rows-i);
     
     let stars = "*".repeat(2*i-1);


    console.log(space+stars);
    

 }




// 40. [Hard] Create a number guessing game using `while` loop and `prompt()`.


let secretNumber = Math.floor(Math.random()*10)+1

let guess = Number(prompt("Enter the number between 1 and 10 :- "))


while(guess != secretNumber){
    
    if(guess > secretNumber){

    guess = Number(prompt("Too high number !! Try Again "))


    }else{

        guess = Number(prompt("Too low number !! Try Again "))

    }
}


alert("🎉🎊 Correct you gussed the right number " + secretNumber)

console.log("🎉🎊 Correct you gussed the right number " + secretNumber);






// 41. [Easy] Create an array of your 5 favorite fruits and print them.


var arr = ['apple', 'mango', 'guava', 'banana', 'watermelon']

arr.forEach(function(elem){
    console.log(elem);
    
})



//42. [Easy] Access and print the first and last elements of an array.

var arr = [10,20,40,"mango", 'ram', 70]


console.log(`First element of an array ${arr[0]}  and last element of an array ${arr[arr.length-1]}`);




// 43. [Easy] Add a new element to an existing array using `.push()`.


var arr = [10,20,30,40]

arr.push(90)

arr.pop()

arr.shift()

arr.unshift("mani")

console.log(arr);




//44. [Easy] Remove the last element of an array using `.pop()`.

var arr = [10,20,30,40,50,60]

console.log(arr);


arr.pop()
console.log(arr);





//45. [Easy] Find the length of an array.

var arr = [10,33,44,556,77,89,9,56,78,54,56,44,55,67,2]

console.log("Length of an array : " , arr.length);




//46. [Medium] Write a program to print all even numbers from an array.

var arr = [10,20,3,21,31,41,51,61,44,68,90]

arr.forEach(function(elem){

    if(elem % 2 == 0){
        console.log(`Even Number in array ${elem}`);
        
    }

})




//47. [Medium] Take an array of numbers and calculate the sum of all elements.

var arr = [10,20,3,21,43,9,80,45,12]

var sum = 0

arr.forEach(function(elem){

    sum += elem

})

console.log(`Sum of all element are : ${sum}`);



// 48. [Medium] Use `.includes()` to check if a fruit is present in your fruit array.

var fruit = ["apple", 'mango' , 'guava', 'watermelon', 'pineapple', 'banana']


console.log(fruit.includes("banana"));




//49. [Hard] Write a program that merges two arrays and removes duplicate values.


var arr = [10,22,44,56]

var newArr = [10,33,47,44]

var merged = arr.concat(newArr)

var unique = []

console.log(merged);

for(var i=0; i<merged.length; i++){

    if(unique.indexOf(merged[i]) === -1){

        unique.push(merged[i])

    }

}

console.log(unique);




//50. [Hard] Sort an array of numbers without using `.sort()` method.


var arr = [10,33,1,5,-1,23,-99,56]

var length = arr.length

for(var i=0; i<length-1; i++){

    for(var j=0; j<length-1-i; j++){


        if(arr[j] > arr[j+1]){

            var temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp

        }
    }
}

console.log(arr);



//51. [Easy] Create an object `person` with properties: name, age, and city. Print it.


var person = {
    name: "manish",
    age:30,
    city:"bhopal"
}


console.log(person);





//52. [Easy] Access and print one property using dot notation.

var person = {
    name: "manish",
    age:30,
    city:"bhopal"
}


console.log(person.name);






//53. [Easy] Add a new property `profession` to the object.


var person = {
    name: "manish",
    age:30,
    city:"bhopal",
    profession:"Student"
}




Object.assign(person , {
    isGood: true
})



console.log(person);

console.log(person.profession);




//54. [Easy] Delete a property from the object.



var person = {
    name: "manish",
    age:30,
    city:"bhopal",
    profession:"Student"
}




Object.assign(person , {
    isGood: true
})



delete person.city       


console.log(person);

console.log(person.profession);






//55. [Easy] Use a `for...in` loop to print all keys of the object.



var person = {
    name: "manish",
    age:30,
    city:"bhopal",
    profession:"Student"
}

for(let key in person){
    console.log(key);
    
    
}




//56. [Medium] Create an object representing a car with properties (name, model, color, mileage)
//  and a method `drive()` that prints a message.


var car ={
    name:"honda",
    model:"civic",
    color: "white",
    mileage:15000,

    drive: function(){

        console.log("The car is now driving: ");
    
    }

}

car.drive()



//57. [Medium] Write a program to count how many properties an object has.


var person = {
    name: "manish",
    age:30,
    city:"bhopal",
    profession:"Student"
}



let cnt = Object.keys(person).length;
console.log(cnt);




var count = 0
for(let key in person){
    count++

}

console.log(count);




//58. [Medium] Merge two objects and print the result.

var obj1 ={
    user1:"manish",
    age : 20,
    isgood:true
}

var obj2 ={
    user2:"mohan",
    city:"bhopal",
    country:"India"
}


var merged = {...obj1,...obj2}
console.log(merged);



//59. [Hard] Create an object `bankAccount` with properties like `balance`, and methods `deposit()` and `withdraw()`.



var bankAccount = {

    balance:5000,

    deposit:function(amount){

        this.balance += amount
        
        console.log(`Deposited amount is: ₹${amount} New balance is: ₹${this.balance}`);
        

    },

    withdraw:function(amount){

        if(this.balance < amount ){
            console.log("Insufficient Balance ");
            
        }else{
            this.balance -= amount

            console.log(`Withdraw amount is ₹${amount} New Balance is ₹${this.balance}`);
            
        }

    }


}


bankAccount.deposit(200);
bankAccount.withdraw(800);





//60. [Hard] Write a small program that stores student details in an object and prints a report card using template literals.


var student = {

    sName:"Manish",
    rollNo:"0133CS231179",
    favSubject:"Math",


    marks:{
        math:80,
        physics:60,
        chemistry:70
    }



}


let totalMarks = student.marks.math + student.marks.physics + student.marks.chemistry

let percentage = (totalMarks/300) * 100

console.log("Total marks: " , totalMarks);

console.log(`percentage: ${percentage}%`);



//61. [Easy] Write a function that prints "Hello JavaScript".


function greet (){

    console.log("Hello JavaScript");
    
}

greet()




//62. [Easy] Create a function that takes a name as argument and prints `Hello, <name>`.


var greet = function(name){

    console.log("Hello " , name);
    
}

greet("manish")




//63. [Easy] Write a function that takes two numbers and returns their sum.

var add = function(a,b){
    return a+b
}

console.log(add(2,4));




//64. [Easy] Create a function to check if a number is even or odd.

var check = function(num){

    if(num%2 ==0){
        console.log("Even");
        
    }else{
        console.log("odd");
        
    }
}

check(40)




//65. [Easy] Create a function that returns the square of a number.


var square = function(num){

    return num*num
}

console.log(square(5));



//66. [Medium] Write a function that takes a string and returns it reversed.


var reversed = function(str){

    let result="";
    for(var i = str.length-1; i >= 0; i--){

        result += str[i]

    }

    return result

}

console.log(reversed("manish"));

*/

//67. [Medium] Write a function that counts vowels in a string.

var greet = function(str){

    let count =0
    let vowels = 'aeiouAEIOU'

    for(var i =0; i<=str.length-1;i++){
        if(vowels.includes(str[i]) ){
            count++
        }
    }

    return count

}

console.log(greet("manish"));






