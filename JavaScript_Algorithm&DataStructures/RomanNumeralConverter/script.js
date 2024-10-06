const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", mainConvert);
const numberField = document.getElementById("number");
const result = document.getElementById("output");
const msg = 'Please enter a number greater than or equal to 1';
const msg2 = 'Please enter a number less than or equal to 3999';
const msg3 = "Please enter a valid number";


function mainConvert() {
  let nb = numberField.value;
  if (!nb){
    result.textContent = msg3;
    return;
  }
  if (nb<1){
    result.textContent = msg;
    return;
  }else if(nb>3999){
    result.textContent = msg2;
    return;
  }
  result.textContent = convert(nb);
}

function convert(number) {
  let nb = number;
  let chaine = '';

  while (nb >= 1) {
    while (nb >= 1000) {
      chaine += 'M';
      nb -= 1000;
    }
    while (nb >= 900) {
      chaine += 'CM';
      nb -= 900;
    }
    while (nb >= 500) {
      chaine += 'D';
      nb -= 500;
    }
    while (nb >= 400) {
      chaine += 'CD';
      nb -= 400;
    }
    while (nb >= 100) {
      chaine += 'C';
      nb -= 100;
    }
    while (nb >= 90) {
      chaine += 'XC';
      nb -= 90;
    }
    while (nb >= 50) {
      chaine += 'L';
      nb -= 50;
    }
    while (nb >= 40) {
      chaine += 'XL';
      nb -= 40;
    }
    while (nb >= 10) {
      chaine += 'X';
      nb -= 10;
    }
    while (nb >= 9) {
      chaine += 'IX';
      nb -= 9;
    }
    while (nb >= 5) {
      chaine += 'V';
      nb -= 5;
    }
    while (nb >= 4) {
      chaine += 'IV';
      nb -= 4;
    }
    while (nb >= 1) {
      chaine += 'I';
      nb -= 1;
    }
  }

  return chaine;
}
/*
M = 1000
CM = 900
D = 500
CD = 400
C = 100
XC = 90
L = 50
XL = 40
X = 10
IX = 9
V = 5
IV = 4 
I = 1 */