let body = document.getElementById("body")
body.style.backgroundColor="white"


let button1= document.createElement("button")
button1.style.height="30px"
button1.style.width="50px"
button1.textContent="red"
button1.style.color="white"
button1.style.backgroundColor="red"
button1.style.margin="10px"
document.body.appendChild(button1)


button1.addEventListener("click",function(){
    body.style.backgroundColor="red"
})


let button2= document.createElement("button")
button2.style.height="30px"
button2.style.width="50px"
button2.textContent="blue"
button2.style.backgroundColor="blue"
button2.style.color="white"
button2.style.margin="10px"
document.body.appendChild(button2)


button2.addEventListener("click",function(){
    body.style.backgroundColor="blue"
})


let button3= document.createElement("button")
button3.style.height="30px"
button3.style.width="50px"
button3.textContent="purple"
button3.style.backgroundColor="purple"
button3.style.color="white"
button3.style.margin="10px"
document.body.appendChild(button3)


button3.addEventListener("click",function(){
    body.style.backgroundColor="purple"
})


let button4= document.createElement("button")
button4.style.height="30px"
button4.style.width="50px"
button4.textContent="Reset"
button4.style.backgroundColor="white"
button4.style.color="black"
button4.style.margin="10px"
document.body.appendChild(button4)


button4.addEventListener("click",function(){
    body.style.backgroundColor="white"
})