
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
"1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?","/"];

const characters_noNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?","/"];

const characters_noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
"1", "2", "3", "4", "5", "6", "7", "8", "9"];

const characters_noNumbers_noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let password1 = document.querySelector("#rect1")
let password2 = document.querySelector("#rect2")
let symbols_btn = document.querySelector("#symbols")
let numbers_btn = document.querySelector("#numbers")
let password_length = document.querySelector("#length")
let copy1 = document.querySelector("#copy1")
let copy2 = document.querySelector("#copy2")
let generate_btn = document.querySelector("#generate-btn")
let symbols_On = true
let numbers_On = true


generate_btn.addEventListener("click", function() {
    password1.textContent = ""
    password2.textContent = ""
    let length = parseInt(password_length.value)
    
    for (let i = 0; i < length; i++) {
        let tempchar1 = getRandomChar(symbols_On, numbers_On)
        let tempchar2 = getRandomChar(symbols_On, numbers_On)
        password1.textContent += tempchar1
        password2.textContent += tempchar2
    }
});

copy1.addEventListener("click", function() {
    let text = document.getElementById("rect1").innerHTML
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text)
    }).catch(() => {
        alert("Failed to copy")
    })
});

copy2.addEventListener("click", function() {
    let text = document.getElementById("rect2").innerHTML
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text)
    }).catch(() => {
        alert("Failed to copy")
    })
});


symbols_btn.addEventListener("click", function() {
    if (symbols_On === true) {
        symbols_btn.textContent = "Symbols: Off"
        symbols_On = false
    } else {
        symbols_btn.textContent = "Symbols: On"
        symbols_On = true
    }
});

numbers_btn.addEventListener("click", function() {
    if (numbers_On === true) {
        numbers_btn.textContent = "Numbers: Off"
        numbers_On = false
    } else {
        numbers_btn.textContent = "Numbers: On"
        numbers_On = true
    }
});


function getRandomChar(symbols, numbers) {
    if (symbols === true && numbers === true) {
        let index = Math.floor(Math.random() * characters.length)
        return characters[index]
    } else if (symbols === true && numbers === false) {
        let index = Math.floor(Math.random() * characters_noNumbers.length)
        return characters_noNumbers[index]
    } else if (symbols === false && numbers === true) {
        let index = Math.floor(Math.random() * characters_noSymbols.length)
        return characters_noSymbols[index]
    } else {
        let index = Math.floor(Math.random() * characters_noNumbers_noSymbols.length)
        return characters_noNumbers_noSymbols[index]
    }
}



