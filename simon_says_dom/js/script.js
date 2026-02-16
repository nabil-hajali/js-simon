console.log('it works');
//select the dom nodes
const countdownEl = document.getElementById('countdown')
const instructionEl = document.getElementById('instructions')
const numberListEl = document.getElementById('numbers-list')
const inputs = document.querySelectorAll('input')
const formEl = document.getElementById('answers-form')
const buttonEl = document.querySelector('button')

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

// visualize 5 random numbers
const numberExtract = [];
console.log(numberExtract);


inputs.forEach(function(input){
    const randomNumber = Math.floor(Math.random()* 50) + 1;
    input.value = randomNumber;
    numberExtract.push(randomNumber);
    console.log(input.value + ' è il numero estratto');
    
});

numberListEl.innerText = numberExtract



