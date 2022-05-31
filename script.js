let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    //render out firstCard and secondCard
    cardsEl.textContent = "cards: " + cards[0] + " " + cards[1]
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
    console.log("draw a new card")
    //create a card variable and add number between 2-11 
    let card = 7
    //add thenew card to the sum variable
    sum += card
    //call the startGame function
    renderGame()
}

