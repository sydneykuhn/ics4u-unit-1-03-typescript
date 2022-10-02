/**
 * The program is the classic
 * microwave.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// These are my constants for my program
let cookTime = 0
let finalTime = 0
let minutes = 0
let seconds = 0
const two = 1.5
const three = 2

const userInput = prompt('Are you reheating a sub, pizza or soup : ')

// Checks if the user inputted a valid answer
if (userInput === 'sub' || userInput === 'pizza' || userInput === 'soup') {
  const quantityString = prompt(
    `How many ${userInput}s would you like to reheat (max 3) : `
  )
  const quantity = parseFloat(quantityString)

  // Checks what the user inputted
  if (userInput === 'sub') {
    cookTime = 60
  } else if (userInput === 'pizza') {
    cookTime = 45
  } else if (userInput === 'soup') {
    cookTime = 105
  }

  // this checks the amount of what the user inputted
  if (quantity === 1 || quantity === 2 || quantity === 3) {
    if (quantity === 1) {
      finalTime = cookTime
    } else if (quantity === 2) {
      finalTime = cookTime * two
    } else if (quantity === 3) {
      finalTime = cookTime * three
    }

    // this converts the time to minutes and seconds
    seconds = finalTime / 60
    minutes = Math.floor(seconds)
    seconds = (seconds - minutes) * 60
    console.log(
      `That will take ${minutes} minute(s)` +
        ` and ${seconds} seconds in the microwave.`
    )

    // Catches invalid number inputs
  } else {
    console.log('Invalid Number Entered.')
  }

  // Catches invalid inputs
} else {
  console.log('Invalid Input Entered.')
}
console.log('\nDone.')
