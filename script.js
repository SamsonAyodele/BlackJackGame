let player = {
    name : "Sam",
    chips : 150
}
//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
let cards = []   //[firstCard, secondCard]
let sum = 0 //firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    //if 1 return 11
    //if 11-13 retuen 10
    let randomNumber= Math.floor (Math.random() * 13) + 1
    if (randomNumber > 10 ) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
        isAlive = true
        //generate two random numbers 
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }

function renderGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    //render out firstCard and secondCard
    cardsEl.textContent = "cards: " // + cards[0] + " " + cards[1]
    //create a for loops that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " " + " "
    }
    //render out all the cards we have 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    // only let the player to get new card if is allowed and does not have black jack
    if (isAlive === true && hasBlackJack === false) {
         // console.log("draw a new card")
        //create a card variable and add number between 2-11 
        let card = getRandomCard()
        //add thenew card to the sum variable
        sum += card
        //push the card to he cards array 
        cards.push(card)
        // console.log(cards)
        //call the startGame function
        renderGame()
    }
   
}


