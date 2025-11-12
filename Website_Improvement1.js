let date = document.querySelector("#date")


date.style.fontSize = '1rem'
date.style.borderBottom="2px solid black"



let today = new Date();

let currentDate = today.toDateString()

date.innerHTML = currentDate

const datetext = document.querySelector("#date")


function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r} , ${g}, ${b})`
}


setInterval(function(){


    if(datetext.style.borderBottomColor === 'transparent' || datetext.style.borderBottomColor === ''){
        datetext.style.borderBottomColor = randomColor()
    }else{
        datetext.style.borderBottomColor = 'transparent'
    }


    if(date.style.borderBottomColor === 'transparent' || date.style.borderBottomColor === ''){
        date.style.borderBottomColor = randomColor()
    }else{
        date.style.borderBottomColor = 'transparent'
    }



    datetext.classList.toggle("blink")





} , 1000)