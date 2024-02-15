
var elSaot = document.querySelector('.soat')
var elBox = document.querySelector('.box')
var count = 0
setInterval(()=>{
    var date = new Date()
    elSaot.textContent = date.getHours() + ':' +date.getMinutes()+ ':' +date.getSeconds()
}, 1000)

setInterval(()=>{
    var date = new Date()
    count = count + 1 
    elBox.style.transform = `rotate(${count * 10}40deg)`
}, 1000)