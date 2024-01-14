// M11 Assignment
// Maria Cecilia Schult
// Part 4- Death by Javascript

let text

//STEP 1
//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Assume punctuation and number symbols are not included in the passed-in string.
text = getTextInput('Enter a string')
console.log(`The ordered string is ${getOrderedString(text)}`)


//STEP 2
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
text = getTextInput('Enter a text')
console.log(`Text with words capitalized: ${capitalizeWordsInText(text)}`)


// //STEP 3
// //Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
text = getTextInput('Enter a string')
console.log(`You entered: ${text}\nNumber of vowels: ${countVowelsInString(text)}`)


//STEP 4
//Write a JavaScript function that generates a string id (specified length) of random characters.
let idLength = getIntegerInput('Enter length of ID to generate')
let id = generateRandomString(idLength)
console.log(`Generated ID: ${id}`)

//STEP 5
//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output
let countries = getTextInput('Enter countries (use commas e.g. brazil, japan, peru)')
console.log(`You entered: ${countries}\nLongest country name: ${getLongestName(countries)}`)


// FUNCTIONS
// ----------------------------------
//STEP 5
//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output
function getLongestName(csvString) {
    let strArr = csvString.split(',') // make an array from csv string
    const trimArr =strArr.map(country => country.trim()) // trim spaces on countries
   
    // determine country with longest name
    let longestCountry =trimArr[0]
    for (let i=0; i<trimArr.length-1; i++) {
        nextCountry= trimArr[i+1]
        if (nextCountry.length > trimArr[i].length) {
            longestCountry= nextCountry
        }
    }
    return longestCountry
}

//STEP 4
//Write a JavaScript function that generates a string id (specified length) of random characters.
// For the random characters, we don't want extraneous characters, only characters dn digits,
// Thus, we will generate random characters from 3 possible ranges in th ASCII table:
// digit: 0 to 9 => 48 to 57 
// uppercase letter: A to Z => 65 to 90
// lowercase letter: a to z => 97 to 122
function generateRandomString(len) {
    // We will use a range from 48 to 122 in the ASCII table to generate the random characters
    let arr=[]
    while(arr.length < len) {
        // 0 to 9 => 48 to 57 
        if (arr.length < len) {
            arr.push(String.fromCharCode(getRandomInteger(48,57)))
        } 
        // A to Z => 65 to 90
        if (arr.length < len) {
            asciiCode = getRandomInteger(65,90)
            arr.push(String.fromCharCode(getRandomInteger(65,90)))
        }  
        // a to z => 97 to 122
        if (arr.length < len) {
            arr.push(String.fromCharCode(getRandomInteger(97,122)))
        }  
    }
    return arr.join('') // assemble back into phrase
}


//STEP 3
//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowelsInString(str) {
    let strArr =str.toUpperCase().split('') // use all uppercase to simplify checking for vowels. Make string into an array of characters
    const numVowels = strArr.reduce((n,c) => c=='A' || c=='E' || c=='I' || c=='O' || c=='U' ? n+1:n,0) // count vowels
    return numVowels
}

//STEP 2
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
function capitalizeWordsInText(str) {
    let strArr = str.split(' ') // make an array of word from given phrase 
    const arr =strArr.map(word => word[0].toUpperCase().concat(word.substring(1))) // cpaitalize first letter in each word
    return arr.join(' ') // assemble back into phrase
}


//STEP 1
//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function getOrderedString(str) {
    let strArr =str.split('') // make string into an array of characters
    let orderedArr = strArr.sort()
    return orderedArr.join('') // assemble back into a string
}


// HELPER FUNCTIONS
// ----------------------------------------

// Returns a random integer between min and max
// min and max are incldued 
function getRandomInteger(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getIntegerInput(message) {
    let num = prompt(`${message}: `).trim()
    return parseInt(num)
}

function getTextInput(message) {
    let text = prompt(`${message}: `).trim()
    return text
  }
  