//*TASK=2 *//
// let firstCard = 10
// let secondCard = 12

// let sum = firstCard + secondCard 

// console.log(sum)

// //*TASK= 3 *//

// if (sum < 21){
//     console.log("Do you want to draw a new car?")
// }
// else if (sum === 21){
//     console.log("You've got black jack!")
// }
// else{
//     console.log("Sorry, You're out")
// }

/*TASK= 4 */

// let age = 22

// if ( age<21){
//     console.log("Sorry, You're not allowed in club")
// }
// else{
//     console.log("Welcome!")
// }

/*TASK= 5 */

// let age = 100

// if ( age<100){
//     console.log("Sorry, You're not eligible")
// }

// else if ( age===100){
//     console.log("Here is you're card")
// }
// else{
//     console.log("You've already recieved your card")
// }

/*TASK = 6 - 33 */
// let randomNumber= Math.random() * 11
// let floorNumber = Math.floor(getRandomCard())
let cards= []
let player = {
    name: "Umar" , 
    credits: 0,
    slogan: function(){
        console.log("Kya Hal Hn?")
    }
}
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')
let playerEl = document.querySelector("#player-el")


console.log(sum)
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13 + 1 )
        if(randomNumber > 10){
            return 10
        }
        else if (randomNumber === 1){
            return 11
        }
        else{
            return randomNumber
        }
}


function startGame(){
    isAlive = true
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    renderGame()
}
function credit(){
    if(hasBlackJack === true){
        player.credits + 10
    }
    else{
        player.credits - 10
    }
}
function renderGame(){
    if (sum < 21){
        message = "Do you want to draw a new car?"
        isAlive = true
        hasBlackJack = false
    }
    else if (sum === 21){
        message= "You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message= "Sorry, You're out"
        isAlive = false
        hasBlackJack = false
    }

    messageEL.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards are: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent +=cards[i] + " "
    }
    playerEl.textContent = player.name + " your Credits are: "+ player.credits + "$"
    credit() 
    console.log(hasBlackJack)
    console.log(isAlive)
    console.log(message)
    player.slogan()
    
}
//&& is and operator || is Or operator

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard()
    cards.push(thirdCard)
    sum += thirdCard
    renderGame()
    }
}


/*TASK=30 */

// for(let i=0; i<cards.length ; i+=1){
//     cards[i] = cardEl.textContent
//     console.log(cards[i])
// }