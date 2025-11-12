// switch(1){
//     case 1:
//         console.log("Hello guys");
//         break;
//     case 2:
//         console.log("hii");
//         break;
//     case 3:
//         console.log("hmm");
//         break;
//     default:
//         console.log("Default value");    
// }


// function getgrade(score){
//     if(score<=100  && score >=90) return "A+";
//     else if (score>=80 && score<=89) return "A";
//     else if(score>=70 && score<=79) return "B";
//     else if(score>=60 && score<=69) return "C";
//     else if(score>=33 && score<=59) return "D";
//     else return "Fail";
  
// }

// console.log(getgrade(777));



// function rps(user,computer) {

//     if(user === computer ) return "Draw";
//     if(user ==="rock" && computer === "scissor") return "user";
//     if(user ==="scissor" && computer === "rock") return "computer";
//     if(user ==="paper" && computer === "scissor") return "computer";
//     if(user ==="scissor" && computer === "paper") return "user";
//     if(user ==="paper" && computer === "rock") return "user";
//     if(user ==="rock" && computer === "paper") return "computer";
   
// }

//    console.log(rps("scissor" , "scissor"));


// var a=19;
// var a=78;

// let b=14;
// b=89;


// let i=0;
// while(i<20){
//     console.log(i);
//     i++;
// }



// let i=0;
// do{
//     console.log("main pass ho gya");
//     i++;
// }while(i<20);


// let i=10;
// while(i!=0){
//     console.log(i);
//     i--;
// }



// for(let i=1 ; i<=20 ; i++){
//     if(i%2===0){
//         console.log(i);   
//     }
// }


// let i=0;
// while(i<16){
//     if((i%2)!==0){
//         console.log(i);
//     }
//     i++;
// }


// var a=10;
// var b=20;   
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a-b/a);



// var user = prompt("Enter your name")
// alert("This website contain harmful content please be carefull")
// var ans = confirm("Are u 18+")
// console.log(user,ans);


// 



// var age = prompt("enter your age")

// if (age>=18) {
//     console.log("You can vote");
      
// }else{
//     console.log("you can vote after ",18-age , "years" );
    
// }


// var pass = prompt("Enter your password: ")

// if(pass == 'admin'){
//     console.log("you can visit");
    
// }else{
//     console.log("bhagg bsdk");
    
// }






// var marks = prompt("Enter your marks")

// if(marks>90){
//     console.log("aap hamare desh ka future ho");    
// }else if(marks>80){
//     console.log("good progress")
// }else if(marks>70){
//     console.log("scope of improvement")
// }else{
//     console.log("pedhle bsdk");
    
// }



// var unit = prompt("Enter Electricity unit: ")
// console.log("Entered Unit is: " , unit);

// var bill;

// if (unit >= 200) {
//     bill = (unit*15)
// }
// else if(unit >= 100){
//     bill = (unit*10)

// }
// else if(unit >= 50){
//     bill = (unit*8)

// }else{
//     bill = (unit*5)
    
// }

// console.log("Your total bill is: " , bill);



// var a="MANISH";
// a = a.toLowerCase();

// if(a  ==  "manish"){
//     console.log("Hello");   
// }
// else{
//     console.log("hii");
    
// }



// var s="Aanish";

// if(s.startsWith('A') || s.startsWith("a")){
//     console.log("Name start with A or a");
    
// }
// else{
//     console.log("Name not start with a or A");
    
// }





// var user=prompt("enter user name: ")
// var pass= prompt("enter user pass: ")

// if(user == 'admin' && pass == "123"){
//     console.log("welcome");
    
// }else{
//     console.log("no entry");
    
// }




// var a=Number(prompt("Enter a "))
// console.log(a);


// var num1=prompt("Enter")
// console.log(Number(num1));


// var math = Number(prompt("Enter math"))
// var english = Number(prompt("Enter math"))
// var physics = Number(prompt("Enter math"))


// var average = (math+english+physics)/3

// console.log(average);



// var f = Number(prompt("Temperature in frehanite: "))

// var c=5/9(f-32);

// console.log(c);





// var age = Number(prompt("Your age: "))
// var bill = Number(prompt("Enter total  bill "))
// var discount;

// if(age > 100){
//     console.log("Invalid age");    
// }
// else if(age <= 100 && age >= 80){
//     console.log("You will get 20%");
//     discount = bill*(20/100);
// }
// else if(age < 80 && age >= 50){
//     console.log("You will get 40%");
//     discount = bill*(40/100);
// }
// else if(age < 50 && age >= 20){
//     console.log("You will get 80%");
//     discount = bill*(80/100);
// }else{
//     console.log("your age is less than 20 so will not get discount");    
// }


/* console.log("Your bill before discount is: " , bill);
console.log("Your bill after discount is : " , (bill - discount)); */



// var num = Number(prompt("Enter a number "))

// if(num % 3 ==0 && num % 5 == 0){
//     console.log("FizzBuzz");
    
// }
// else if(num % 3 == 0 ){
//     console.log("Fizz");
// }
// else if(num % 5 == 0){
//     console.log("Buzz");
    
// } else{
//     console.log(num);
    
// }  

// var age = Number(prompt("Enter your age "))

// if(age < 0){
//     console.log('Invalid age');
    
// }else if(age < 18 ){
//     console.log("You are minor");
    
// }else if(age >= 18 && age <= 60){
//     console.log("You are an adult");
    
// }else{
//     console.log("You are a senior citizen");
    
// }


/*

var num1 = Number(prompt("Enter a number "))

if(num1 < 0 ){
    console.log("Negative number");
    
}else if(num1 === 0){
    console.log("Zero");
    
}else{
    console.log('Positive number');
    
}




var char = (prompt("Enter a single character "))

char = char.toLocaleLowerCase();

if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
    console.log("Vowel");
    
}else{
    console.log("Consonent");
    
}




var user = prompt("Enter your input ")
 user = user.toLowerCase();

if(user == null){
    console.log("User cancelled");   
}else if(user == ""){
    console.log("No input");    
}else{
    console.log("You typed " , user);
    
}

*/




// var l=Number(prompt("Enter number "))

// for(var a=1 ; a <= l ; a++){
//     console.log(a);
    
// }


// var num=Number(prompt("Enter number "))
// for(var a=1 ; a<= num; a++){
//     if(a%2==0){
//         console.log("Even number " , a);
        
//     }
// }

// var num=Number(prompt("Enter number1 "))
// for(var a=1 ; a<= num; a++){
//     if(a%2!=0){
//         console.log("Odd number " , a);
        
//     }
// }


// var num=Number(prompt("Enter number2 "))
// for(var a=1 ; a <= num; a++){
//     console.log(num , " * " , a , '=' , num*a);
    
    
// }


// var num2 = Number(prompt("Enter a num2"))

// for(var a=1; a <= num2; a++){

//     if(a % 3 == 0 && a % 5 == 0){
//         console.log("Sheryians coding school");
        
//     }else if(a % 3 == 0){
//         console.log("Sheryians");
        
//     }else if(a % 5 == 0){
//         console.log("Coding");
        
//     }else{
//         console.log(a);
        
//     }
   
// }


// var n=20
// for(var a =1; a<=n; a++){
//     if(a%2 == 0){
//         console.log( a,"Even");
        
//     }else{
//         console.log(a , "odd");
        
//     }
// }

// var n=50
// for(var a=1; a<=50; a++ ){
//     if(a%5 ==0){
        
//     }else{
//         console.log(a);
        
//     }
// }


// var num=20;

// for(var a=1; a<=num; a++){

// if(a % 3 ==0 && a % 5 == 0){
//      console.log("FizzBuzz");
    
//  }
//  else if(a % 3 == 0 ){
//      console.log("Fizz");
//  }
//  else if(a % 5 == 0){
//      console.log("Buzz");
    
//  } else{
//      console.log(a);
    
//  } 
// }


// var n=10;
// while(n!=0){
//     console.log(n);
//     n--;
    
// }

// var n=100
// var sum=0
// for(var i=1; i<=n; i++){
//     if(i % 2 == 0){
//         sum+=i       
//     }    
// }

//      console.log(sum);




// var n=30

// for(var i=0; i<=n; i++){
//     if(i > 20 && i % 3 == 0){
//         break
//     }else{
//         console.log(i);
        
//     }
// }



// for(var num=2; num<=50; num++){
//     var isprime=true

//     for(var i=2; i<=Math.sqrt(num); i++){
//         if(num % i == 0){
//             isprime=false
//             break
//         }
//     }
//     if(isprime){
//         console.log("prime number " , num);
        
//     }
// }


// let n = 121
// let temp = n
// let rev = 0

// while(temp != 0){
//     let rem = temp % 10
//     rev = rev * 10 + rem
//     temp = Math.floor(temp/10)
// }

// if(n === rev){
//     console.log("palindrome");
    
// }else{
//     console.log("not Palindrome");
    
// }





// var n = 6;
// for (var i = 1; i <= n; i++) {
//      var row = "";                 
//     for (var j = 1; j <= i; j++) {
//        row+="*   "
//     }
//     console.log(row); 
//     console.log("\n");               
// }



// var n=100
// var count=0
// for(var i=1; i<=n; i++){
//     if(i % 3 ==0 && i % 7 ==0){
//         count++
//         console.log("Divisible");       
//     }else{
//         console.log(i);       
//     }
// }
// console.log("Count divisible by both " , count);


/*

function square(a){
    console.log("Square of any number: " , a*a);
     
}
 
function cube(a) {
    console.log("Cube of any number: " , a*a*a);

}

square(4);
cube(5)


*/



/*
var user=prompt("Enter user: ")
var amt=Number(prompt("Enter amt: "))
var time=prompt("Enter time: ")

function shoutOut(user,amt,time) {
    console.log("Shout out ", user , "for rs " ,amt , "on " ,time);    
}

shoutOut(user,amt,time)

*/


// function expressions


// var greet=function() {
    
// }
// greet();


// Arrow function

// var add = (a,b) => {
//     console.log(a+b);

// }
// add(2,4)



// console.log(add(2,4));
// const add=function(a,b) {
//     return a+b
// }



// var arr = [12,2,23,56,66,77,56,7,688,677,7,77,6,77,734,9,7565,6,"mani","shery"]


// console.log(arr[arr.length-3]);












//  function 

// -accessible 
// -reusable




// named function

// var user = prompt("enter name")
// var age = Number(prompt("enter age"))


// function add (user, age){
    
//     console.log("USER name " , user , "age " , age);
      
// }

// add(user,age)




// function expression


// add(56,57)

// let add = function(a,b){

//     console.log(a,b);
    
// }


// arrow function



// var greet =(a,b) =>{

//     console.log(a*b);
  
// }

// console.log(greet(2,3));



// named function expression
// var greet = function sky ()  {

//     console.log("soni ji");
  
// }
// greet()


// constructor


// var add = new Functiona(a, b , "return a+b");

// console.log(add(2,3));



// Array


// var arr = [73,45,22,"shghs","hfjdf", true]

// console.log(arr.length-1);

// for( var i=0; i<arr.length-3;i++){

//     console.log(arr[i]);
    
// }


// arr.push(67)   // element add at last

// arr.pop()      // delete element from last

// arr.unshift(1) // element add at first index

// arr.unshift(80)

// arr.shift()   // Element delete from first index

// arr.shift()


// console.log(arr);




// var arr = [11,-22,33,44,-55,66,77,-88,99]

// var newArr=[]

// for(var i=0; i <= arr.length-1; i++){

//     if(arr[i]%2==0){
//         newArr.push(arr[i])
//     }
    
// }



// for(var i=0; i <= arr.length-1; i++){

//     if(arr[i] > 0){
//         newArr.push(arr[i])
//     }
    
// }
// console.log("Positive Number stored in newArray are: " , newArr);
// console.log(arr);


// higher order function  -  for each


// var arr = [11,-22,33,44,-55,66,77,-88,99]


// arr.forEach(function(elem , indx ){

//     console.log(elem , indx  );
    
// })





// print element at even index
// arr.forEach(function(el , indx){

//     if(indx % 2 ==0 ){

//         console.log(el , " at index " , indx );
        
//     }

// })






// sum of element  or even element of array 
// var arr = [89,13,67,29,18,10]
// var sum = 0
// arr.forEach(function(el){
//     if(el % 2==0){
//         sum += el
//     }


// })
// console.log(sum);




// multiply the all value of array
// var arr = [1,20,30]
// var mul = 1
// arr.forEach(function(el){

//    mul *= el

// })
// console.log(mul);








// var i=0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }



// OBJECTS

// var obj={
//     user:"manish",
//     age:35,
//     city:"bhopal",
//     isSingle:true,
//     skills:["js" , 'react' , "java"],
//     college:{
//         cName:"Sirt",
//         place:"Bhopal"

//     }
// }

// console.log(obj);
// console.log(obj.age);


// console.log("skills:" , obj.skills[1]);
// console.log("college name: " , obj.college.cName);



// var student=[

//     {
//         username:"manish",
//         maths:80,
//         english:80,
//         computer:100
//     },

//     {
//         username:"umesh",
//         maths:80,
//         english:50,
//         computer:80
//     }
//     ,

//     {
//         username:"somesh",
//         maths:70,
//         english:100,
//         computer:80
//     }
// ]



// student.forEach(function(elem){

//     console.log(elem.username , (elem.maths+elem.english+elem.computer)/3);
    
// })



// var avg=0
// student.forEach(function(elem){

//     avg+=elem.maths

    
// })

//     console.log(avg/3);




// var check = true

// student.forEach(function(elem){

//     if(elem.maths==100){
//         console.log(elem.username, "got 100 marks in math" );
//         check=false
        
//     }
//     if(elem.english == 100){
//         console.log(elem.username, "got 100 marks in english" );
//         check=false
        

//     }

//     if(elem.computer == 100){

//         console.log(elem.username, "got 100 marks in computer" );
//         check=false

//     }
       
// })


// if (check){
//     console.log("No any");
    
// }


// Square and cube
// function square_cube(n , m){

//     console.log( "Square: " , n*n);
//     console.log("Cube: " , m*m*m);   
    
// }

// square_cube(2,3)





// function printobj(u, a, c){

//     var obj={

//         user:u,
//         age:a,
//         city:c
//     }

//     console.log(obj);
    
// }

// printobj("manish " , 20 , "bhopal")




// function greater(a,b){
//     if(a>b){
//         return a
//     }else if(b>a){
//         return b
//     }else{
//         return "same"
//     }
// }

// console.log(greater(45,45));






