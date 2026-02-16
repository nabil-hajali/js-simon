console.log('it works');
//select the dom nodes
const countdownEl = document.getElementById('countdown')
const instructionEl = document.getElementById('instructions')
const numberListEl = document.getElementById('numbers-list')


//start a 30s countdown
let timer = 31;
countdownEl.innerText = --timer
console.log(timer);

const intervallId = setInterval(function(){
    --timer
    if(timer === -1) {
    clearInterval(intervallId)
    
}else {
    countdownEl.innerText = timer;
}
console.log(timer);

}, 1000)

/// visualize 5 random numbers
//make 5 input appear
