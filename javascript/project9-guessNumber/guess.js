let topEl = document.querySelector("#topleft")
let inputEl = document.querySelector("#input-el")
let btnEl = document.querySelector("#btn-el")
let disEl = document.querySelector("#dis-el")
let scrEl = document.querySelector("#src-el")
let hscrEl = document.querySelector("#highsrc-el")

let score = 20
let highScore = [0,]
let num = 0

scrEl.textContent = score
hscrEl.textContent = sum(highScore)
guess = ["Guess","Too Low!","Too High!","Guessing Number Mathched","You are out of the game "]
topDiv = ["Start","Again!","Super!"]



btnEl.addEventListener("click", function(){
    num = inputEl.value
    let dis = randomCheck()
    inputEl.value = ""
})


function randomCheck() {
    let randomNum = Math.floor(Math.random()*20+1)
    if(num==randomNum){
        highScore.push(score)
        scrEl.textContent = score = 20
        hscrEl.textContent = sum(highScore)
        disEl.textContent = guess[3]
        topEl.textContent = topDiv[2]
    } else if (num<randomNum) {
        score -= 1

        if(score==0){
            disEl.textContent = guess[4]
            topEl.textContent = topDiv[0]
            scrEl.textContent = score
            hscrEl.textContent = sum(highScore)
            highScore = [0,]
            return
        }

        disEl.textContent = guess[1]
        topEl.textContent = topDiv[1]
        scrEl.textContent = score
        hscrEl.textContent = sum(highScore)
    } else {
        score -= 1

        if(score==0){
            disEl.textContent = guess[4]
            topEl.textContent = topDiv[0]
            scrEl.textContent = score
            hscrEl.textContent = sum(highScore)
            highScore = [0,]
            return
        }
        
        disEl.textContent = guess[2]
        topEl.textContent = topDiv[1]
        scrEl.textContent = score
        hscrEl.textContent = sum(highScore)
    }
}

function sum(array) {
   
    let num = 0
    for (let i = 0; i < array.length; i++) {
        num += array[i];
    }
    return num
    
}