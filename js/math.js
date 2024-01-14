// M11 Assignment
// Maria Cecilia Schult
// Part 2- Math and Math Functions

//STEP 1
// Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number,
// make sure to display the positive version of that number in the console window. 
// If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
let num = getFloatInput('Enter a number')
alert(`${Math.abs(num)}`)

//STEP 2
// Create an application that prompts the user for a floating point value (decimal). 
// Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
num = getFloatInput('Enter a decimal number')
alert(`You entered: ${num}\nRounded up whole number is: ${Math.ceil(num)}`)

//STEP 3
// Create an application that prompts the user for a floating point value (decimal). 
// Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
num = getFloatInput('Enter a decimal number')
alert(`You entered: ${num}\nRounded down whole number is: ${Math.floor(num)}`)

//STEP 4
// Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. 
// Store the result of that input in a variable and then find the largest and smallest numbers in that list. 
// Display both of those numbers within a console window.
let input= getTextInput('Enter 5 numbers separated by commas')
let strArr = input.split(",") // convert input to string array
const numArr =strArr.map(itm => parseFloat(itm)) // convert string array to a numeric one 
const max= Math.max(...numArr)
const min=Math.min(...numArr)
alert(`Numbers entered: ${input}\nLargest number: ${max}  Smallest number: ${min}`)


//STEP 5
// Create an application that prompts the user for a number. 
// Now find the square root of that number and display the result within a console window.
num = getFloatInput('Enter a number')
alert(`You entered: ${num}\nSquare roor: ${Math.sqrt(num)}`)

function getFloatInput(message) {
    let num = prompt(`${message}: `).trim()
    return parseFloat(num)
}

function getTextInput(message) {
    let text = prompt(`${message}: `).trim()
    return text
}
  
  