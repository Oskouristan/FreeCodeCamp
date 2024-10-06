const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearNb);
const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", checkPhoneNumber);
const numberField = document.getElementById("user-input");
const result = document.getElementById("results-div");

function checkPhoneNumber(){
  if (!numberField.value){
    alert('Please provide a phone number');
    return;
  } else {
    let number = clearNumber(numberField.value);
    let verif = checkInNumber(number);

    if(verif) {
      let verif2 = checkValidity(number, numberField.value);

      if(verif2){
        result.textContent = 'Valid US number: '+numberField.value;  
      } else {
        result.textContent = 'Invalid US number: '+numberField.value;
      }
    } else {
      result.textContent = 'Invalid US number: '+numberField.value;
    }
  } 
}

// Vérifie si le numéro nettoyé a la bonne longueur (10 ou 11 chiffres avec un préfixe '1')
function checkInNumber(num){
  if(num.length === 10){
    return true;
  }else if(num.length === 11 && num[0] === '1'){
    return true;
  } else {
    return false;
  }
}

// Vérifie la validité du numéro en tenant compte des parenthèses et du format général
function checkValidity(nbCleared, nb){
  const validTenDigitFormats = [
    /^\(\d{3}\)\s?\d{3}-\d{4}$/,  // (555) 555-5555 or (555)555-5555
    /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,  // 555-555-5555 or 555 555 5555 or 5555555555
  ];

  const validElevenDigitFormats = [
    /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/,  
    /^1\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/  ];

  if(nbCleared.length === 10) {
    return validTenDigitFormats.some(pattern => pattern.test(nb));
  }

  if(nbCleared.length === 11 && nbCleared[0] === '1') {
    return validElevenDigitFormats.some(pattern => pattern.test(nb));
  }

  return false;
}

function clearNb(){
  result.textContent = '';
}
function clearNumber(texte) {
  return texte.replace(/[^0-9]/g, '');
}