// M11 Assignment
// Maria Cecilia Schult
// Part 1 - Strings and String Manipulation


//STEP 1
// Create an application that prompts the user for their name. 
// Then, find the length of characters in the person’s name. Use the alert method to display the result.
let input = getTextInput('Enter your name')
alert(`You entered: \'${input}\'.\nThe number of characters is ${input.length}`)


//STEP 2
// Create an application that prompts the user for their name. 
// Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. 
// Use the alert method to display the result.
input = getTextInput('Enter your name')
let pos  =getTextInput(`Enter a position (between 1 and ${input.length} of a letter to find: `)
alert(`You entered: \'${input}\'.\nThe character in position ${pos} is ${input.charAt(pos-1)}`)

//STEP 3
//Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt.
// Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. 
// You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
let first = getTextInput('Enter your first name')
let last = getTextInput('Enter your last name')
alert(`Your name is: ${first.concat(' ').concat(last)}`)

//STEP 4
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
// Then, find and display within an alert the index of the word “fox”.
let text="The quick brown fox jumps over the lazy dog" 
alert(`Text: ${text}\nIndex of \'fox\' in it is: ${text.indexOf("fox")}`) // 16

//STEP 5
//Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. 
// Then, find and display within an alert the index of the last instance of the word “fox”.
text="The quick brown fox jumps over the lazy fox"
alert(`Text: ${text}\nIndex of last occurrence of \'fox\' in it is: ${text.lastIndexOf("fox")}`)  // 40

//STEP 6
//Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. 
// Then, prompt the user for their full name. 
// Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt.
// Use the alert method to display the result.
text="The quick brown fox jumped over the lazy dog"
let full_name = getTextInput('Enter your full name')
alert(`Original text: ${text}\nReplaced text: ${text.replace("the lazy dog",full_name)}`)

//STEP 7
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable.
// Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. 
// Use the alert method to display the result.
text="The quick brown fox jumps over the lazy dog"
let word = getTextInput(`Text: ${text}\nEnter a word to search for:`)
pos=text.search(word) 
let resultMessage = pos ==-1 ? `Word \'${word}\' not found` : `Word \'${word}\' was found on position ${text.search(word) +1}`
alert(`${resultMessage}`)

//STEP 8
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. 
// Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable 
// and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
const old_string ="The quick brown fox jumps over the lazy dog"
let search_str="the lazy dog" // 12
let idx=old_string.search(search_str)  // idx 31
const new_string = old_string.slice(idx,idx + search_str.length)
alert(new_string.toUpperCase())

//STEP 9
// Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable.          
// Make sure to add space before and after the text so that appears very similar to the text here. 
// Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
text =" THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
alert(text.trim().toLowerCase())

//STEP 10
//Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. 
// The user clearly forgot to capitalize the first letter in the sentence.
// Programmatically capitalize the first letter in the sentence and display the result in an alert.
text= "the quick brown fox jumps over the lazy dog"
alert(text[0].toUpperCase().concat(text.substring(1)))

function getTextInput(message) {
  let text = prompt(`${message}: `).trim()
  return text
}
