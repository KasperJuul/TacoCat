//Get the user input value
function getValue() {
    //make sure the alert box is invisible at start
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("stringValue").value;

    let returnObj = palindromeCheck(userString)

    displayString(returnObj);
}

//Reverse the string
function reverseString(userString) {
    let outputString = "";

    for (let i = userString.length - 1; i >= 0 ; i--) {
        outputString += userString[i];        
    }

    return outputString;
}

function palindromeCheck(userString) {
    
    let regex = /[^a-z0-9]/gi;
    let revString = "";
    let returnObj = {};

    userString = userString.toLowerCase();
    userString = userString.replace(regex,"");

    revString = reverseString(userString);
    returnObj.reversed = revString;

    if (userString === revString) {
        returnObj.msg = "Well done! You entered a palindrome!";
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!";
    }

    return returnObj;
}

//Display the string
function displayString(returnObj) {
    
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your string reversed is: ${returnObj.reversed}`;

    //Show the alert box containing the result
    document.getElementById("alert").classList.remove("invisible");
}