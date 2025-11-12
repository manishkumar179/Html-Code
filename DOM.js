//  DOM - fronted of JS

// 4 pillers

// 1.selection of element
// 2.changing html of an element
// 3.changing css of an element
// 4.Event listeners

// If we want to select element by id we use getElementById()
// If we want to select element by class we use getElementByClassName()
// document.querySelectorAll() for selecting all element whose name is same 




// var h1 = document.querySelector(" h1...")
// h1.innerHtml = " "
// h1.style.color = ' '
// h1.addEventListener("click" , function())


//setTimeout()
//setIntervals()
//clearInterval()












// Normal implementation

/*

var h1 = document.querySelector("h1")
var btn = document.querySelector("button")



btn.addEventListener("click" , function(){
    
    h1.innerHTML= "I am Manish "
    h1.style.color="red"
    h1.style.backgroundColor= "black"
})


*/


// ON or OFF the bulb

/*

var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")



var flag = 0
btn.addEventListener("click" , function(){

    if(flag == 0){

        bulb.style.backgroundColor= "yellow"
        btn.style.backgroundColor = "red"
        btn.style.color = 'white'
        btn.innerHTML = 'ON'
        flag =1

    }else{

        bulb.style.backgroundColor = "transparent"
        btn.style.backgroundColor = "transparent"
        btn.style.color = 'red'
        btn.innerHTML = 'OFF'
        flag = 0
    }
    

})

*/


// Increasing or decreasing number with button

/*

var h1 = document.querySelector('h1')
var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')


var num =0


inc.addEventListener("click" , function(){
    num++
    h1.innerHTML = num
})


dec.addEventListener("click" , function(){
    num--
    h1.innerHTML = num
})

*/



// change color with button

/*

var box = document.querySelector("#box")
var btn = document.querySelector("button")
var box1 = document.querySelector(".box1")


btn.addEventListener("click" , function(){

    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    box.style.backgroundColor= `rgb(${c1} , ${c2} , ${c3})`

    var c4 = Math.floor(Math.random()*6)
  

        box1.innerHTML = c4+1



})

*/


// Add friend features with same button



/*

var p = document.querySelector("p")

var add = document.querySelector("#add")


var flag =0
add.addEventListener("click" , function(){


    if(flag == 0){

    p.innerHTML = 'Friends'
    p.style.color = 'green'
    add.innerHTML = 'Remove friend'
    add.style.backgroundColor = 'red'


    flag = 1



    }else{

        p.innerHTML = 'Stranger'
        p.style.color = 'red'
        add.innerHTML= 'Add friend'
        add.style.backgroundColor = 'rgb(28, 248, 185)'



        flag = 0

    }
   
    

})

*/



// Insta love button

/*
var cont = document.querySelector(".container")
var icon = document.querySelector("i")


cont.addEventListener("dblclick" , function(){
    
    icon.style.transform = " translate(-50%,-50%) scale(1) "
    icon.style.opacity = 0.8
    icon.style.color= ' red'


    setTimeout(function(){

    icon.style.opacity = 0
   
    } , 1000)


    setTimeout(function(){

     icon.style.transform = " translate(-50%,-50%) scale(0) "
   
    } , 1000)


})

*/



// Custom Cursor


/*
var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove" , function(details){

    crsr.style.left = details.x + "px"
    crsr.style.top = details.y + "px"


})
*/



// Guess the winner


/*
 var team  = ["csk",'rcb','csk','mi','lsg','dc','srh','rr','kkr','pbks']


var h1 = document.querySelector("h1")
var btn = document.querySelector("button")

btn.addEventListener("click" , function(){

    var num = Math.floor(Math.random()*team.length)
    h1.innerHTML = team[num]


})

*/



// Guess the winner part 2



/*
var team =[

    {
        teamName : "csk",
        fullName : "chennai super kings",
        primary :  "yellow",
        secondary : "lightyellow",
        trophy : 5

    },

    {

        teamName : "mi",
        fullName : "mumbai indians",
        primary :  "blue",
        secondary : "gold",
        trophy : 5
    },


    {

        teamName : "rcb",
        fullName : "royal challengers banglore",
        primary :  "red",
        secondary : "green",
        trophy : 1

    },

    {
        teamName : "rr",
        fullName : "rajasthan royal",
        primary :  "pink",
        secondary : "orange",
        trophy : 1
    }


]


var h1 = document.querySelector("h1")
var btn = document.querySelector("button")
var h2  = document.querySelector("h2")
var body = document.querySelector("body")



btn.addEventListener("click" , function(){

    var num = team[Math.floor(Math.random()*team.length)]


    h1.innerHTML = num.teamName
    h2.innerHTML = num.fullName
    body.style.backgroundColor = num.primary
    h1.style.backgroundColor = num.secondary


    
})


*/





// After click random text obtain 

/*

var sentence = ['Hey I am Manish' , 'You are amazing' , 'So rude!!' , "CSK CHAMPION 2026"]

var body = document.querySelector("body")
var btn = document.querySelector("button")



btn.addEventListener("click" , function(){
    var h1 = document.createElement("h1")

    var num = sentence[Math.floor(Math.random()*sentence.length)]
    h1.innerHTML = num

    var x = Math.random()*100
    var y = Math.random()*100
    var scl = Math.random()*2
    var  rot= Math.random()*360

    h1.style.left = x + "%"
    h1.style.top = y+ "%"
    h1.style.scale = scl
    h1.style.rotate = rot + "deg"


   
    body.appendChild(h1)
})

*/




// var img1 = document.querySelector("#img1")
// var img2 = document.querySelector("#img2")

// var btn = document.querySelector("button")


// btn.addEventListener("click" , function(){

//     var imgSrc1 = img1.getAttribute("src")
//     var imgSrc2 = img2.getAttribute("src")



//     img1.setAttribute("src" , imgSrc2)
//     img2.setAttribute("src" , imgSrc1)
    


// })




let a = setTimeout(() => {
    console.log("hello");
    
} , 1000)

















