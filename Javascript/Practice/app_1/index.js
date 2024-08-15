//document.getElementById("count-el").textContent = 5


//* TASK=4*//
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// console.log(count)

// *TASK = 5* //
// let myAge = 23 

// let humanDogRatio = 7 

// let myDogAge = myAge * humanDogRatio
// console.log(myDOgAge)

//*TASK=6*//
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


//*TASK=8*//

// let count = 0

// function increment() {
//     count = count + 1     
// }

// document.getElementById("count-el").innerHTML = count


//*TASK= 9*//
/*you want to output following 

setting up the race
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)

Go
players are running the race
race is finished

get ready for the new race
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
*/

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }


// setting up the race
// countdown()


/*Go
players are running the race
race is finished

get ready for the new race*/
// countdown()



//*TASK=10*//

// function output() {
//     console.log("42")
// }

// output()


//*TASK = 11*//

// let lap1 =34
// let lap2 =33
// let lap3 =36
// let lap

// function sum(){
//     lap= lap1+lap2+lap3

//     console.log(lap)
// }

// sum()


//*TASK= 12*//

// let lapsCompleted = 0
// 
// function lapsCount(){
    // lapsCompleted = lapsCompleted + 1
    // console.log(lapsCompleted)
// }
// 
// lapsCount()
// lapsCount()
// lapsCount()

//*TASK= 13*//

let count = 0



//camelCase is a method use in js to differentiate var from fun e.g countEL or helloMyName
let countEl= document.getElementById("count-el") //here we use DOM( Document(is html file) Object(representation of html code as an object to js) Model(var that was declared cuz it works as model for document and object)) and pass a arg(such as 'count-el') to it

// .getElement or .log are function hooked to object that is document or console
function increment() {
    count = count + 1    

    countEl.textContent = count
}

//*TASK = 14 *//

// function save(){
//     console.log(count)
// }

//* TASK= 17*//

// let username = 'Umar'

// let message = 'Hello'

// console.log(message +' '+ username + '!')

//*TASK =22*//

let myName= 'Umar'
let greeting = 'Hello '
let welcomeEL= document.getElementById("welcome-el")

welcomeEL.textContent = greeting + myName

welcomeEL.textContent += '👋'


//*TASK =25*//

let saveEL= document.getElementById('save-el')
let saveEntry 
function save(){
    saveEntry = count + ' - '
    saveEL.textContent += saveEntry
    countEl.textContent = 0
    count = 0

    console.log(count)
}

//* *//