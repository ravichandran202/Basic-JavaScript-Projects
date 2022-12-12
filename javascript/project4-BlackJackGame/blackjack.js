let cards = []
let sum  = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")         
let sumEl = document.querySelector("#sum-el")      //querySelector == getElementById
let cardsEl = document.querySelector("#cards-el")
let pEl = document.querySelector("#p-el")

let player = {              //objects
    name : "Per",
    chips : 145
}



function getRandomCard(){
    let randomNum = Math.random()*12+1               // provides random number
    let floorNum = Math.floor(randomNum)             //removes the decimal number

    if (floorNum === 1){
        return 11
    } if (floorNum === 11 || floorNum === 12 || floorNum === 13){
        return 10
    }

    return floorNum
}

function startGame(){
    if(isAlive===false){
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = cards[0]+cards[1]
        renderGame()
    }
    pEl.textContent = player.name +" : $"+player.chips 
}

function renderGame(){
    cardsEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(hasBlackjack===false && isAlive == true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

