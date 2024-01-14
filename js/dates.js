// M11 Assignment
// Maria Cecilia Schult
// Part 3- Date and Date Functions

//STEP 1
//Create an application that gets the number of days in a month. Display that result within the console window.
// monthNumber = getIntegerInput('Enter the month number (1=January, 2=February,..12=December)')
// alert(`Number of days: ${getDaysInMonth(monthNumber)}`)

let dateStr, date, dayOfWeek, previousDay

//STEP 2
//Create an application that gets the month name from a particular date. Display that result within the console window.
date=getDateFromInput()
if (date !=null) {
    let month = date.toLocaleString("en-us",{month: "long"})
    alert(`Month is: ${month}`)
}

//STEP 3
//Create an application that tests whether a date is a weekend. Display that result within the console window.
date=getDateFromInput()
if (date !=null) {
    dayOfWeek =date.getDay() // 0=Sunday 1=Monday, .., Sat=6
    alert(`Is weekend?: ${dayOfWeek == 0 || dayOfWeek==6}`)
}


//STEP 4
//Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday
date=getDateFromInput()
if (date !=null) {
    previousDay =new Date(date) // start with a copy if the date..
    previousDay.setDate(previousDay.getDate() -1) // set the day to the day before
    let dowName = previousDay.toLocaleDateString("en-us", {weekday: 'long'}) // get the day of week as a name
    alert(`The previous day was: ${dowName}`)
}


//STEP 5
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day.
// If today is Tuesday, the letter T should be displayed in the console window.
date=new Date() // current
if (date !=null) {
    let firstLetterDoW = date.toLocaleDateString("en-us", {weekday: 'long'})[0] // get the day of week as a name, then take first letter
    alert(`The first letter of the current day of week is: ${firstLetterDoW}`)
}



// The function receives the month number as traditionally known, i.e.
// 1= January, 2= February, .. 12=December
// and returns the number of days in the month
// **Note** that for February we are returning 28, because we don't have any other input other than the month
// (if we had the year, we coould determine if the # of days for February is 29, but we don;t)
function getDaysInMonth(m) {
    // 1 3 5 7  8 10 12 => 31 days
    // 4 6 9 11 => 30 days 
    // 2 => 28 (since we don't have year input)
    let numDays
    if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12 ) {
        numDays = 31
    } else if (m==4 || m==6 || m==9 || m==11) {
        numDays =30
    } else if (m==2) {
        numDays=28
    } else {
        alert('Invalid input. Please enter the month number (a value from 1 to 12)')
    }
    return numDays
}

// Prompts user input for a date (uses MM/DD/YYYY format)
// Validate date. 
// Returns a Date object or null if inout is invalud
function getDateFromInput() {
    let date_str=getTextInput('Enter a date (MM/DD/YYYY)')
    let date=null // init
    if (isValidDate(date_str)) {
        date= new Date(date_str)
    } else {
        alert('Invalid date. Please use MM/DD/YYYY')
    }
    return date
}


// Validate string is in MM/DD/YYYY format
function isValidDate(dateStr) {
  let regex = /^[0-1][0-2]\/[0-3][0-9]\/\d{4}$/
  return regex.test(dateStr)
}
function getTextInput(message) {
    let text = prompt(`${message}: `).trim()
    return text
}
function getIntegerInput(message) {
    let num = prompt(`${message}: `).trim()
    return parseInt(num)
}