const msg = " is a palindrome";
const msg2 = " is not a palindrome";

const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", isPalindrome);
const inputField = document.getElementById("text-input");
const resultField = document.getElementById('result');


function isPalindrome() {
    let text1 = inputField.value;
    let verif = true;

    let text = checkForWeirdSigns(text1);
    if (!text) {
        alert("Please input a value");
        return;
    }else{
        if (text.length === 1) {
            console.log(text1 + msg);
            resultField.textContent = text1 + msg;
            return text1 + msg;
        } else if (text.length % 2 === 1) {
            verif = checkImpaire(text);
        } else {
            verif = checkPaire(text);
        }

        if (verif) {
            console.log(text1 + msg);
            resultField.textContent = text1 + msg;
            return text1 + msg;
        } else {
            console.log(text1 + msg2);
            resultField.textContent = text1 + msg2;
            return text1 + msg2;
        }
    }
}

function checkPaire(text) {
    let verif = true;
    let liste = [];

    for (let i = 0; i < text.length; i++) {
        if (i < Math.floor(text.length / 2)) {
            liste.push(text[i]);
        } else {
            if (liste.pop() != text[i]) {
                verif = false;
                break;
            }
        }
    }
    return verif;
}

function checkImpaire(text) {
    let verif = true;
    let liste = [];

    for (let i = 0; i < text.length; i++) {
        if (i < Math.floor(text.length / 2)) {
            liste.push(text[i]);
        } else if (i > Math.floor(text.length / 2)) {
        if (liste.pop() != text[i]) {
            verif = false;
            break;
            }
        }
    }
    return verif;
}

function checkForWeirdSigns(texte) {
    let texteNettoye = texte.replace(/[^a-zA-Z0-9]/g, '');
    return texteNettoye.toLowerCase();
}

/*
let resultat = checkForWeirdSigns("*_eye");
console.log(resultat); // Affiche 'eye'

console.log(checkPaire("raar"));  // true
console.log(checkPaire("staats"));  // true

console.log(checkImpaire("azaaa"));  // false
console.log(checkImpaire("staiats"));  // false
*/
