let passwordLength = 8;
let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

const passwordEl = document.getElementById("password");
const passRangeInputEl = document.getElementById("passRangeInput");
const passLengthEl = document.getElementById("passRangeValue");
const genBtn = document.getElementById("genBtn");

const generatePassword = (passLength) => {
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
const numbers = isNumbers ? "0123456789" : "";
const symbols = isSymbols ? "!@#$%^&*()_+" : "";
const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;

let  password = "";

for(let i = 0; i < passLength; i++){
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
}

return password;
};

passRangeInputEl.addEventListener("input", (event) => {
    passwordLength = +event.target.value;
    passLengthEl.innerText = passwordLength;
});

genBtn.addEventListener("click", () => {
    const upperCaseEl = document.getElementById("uppercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");

    isUpperCase = upperCaseEl.checked;
    isNumbers = numbersEl.checked;
    isSymbols = symbolsEl.checked;

    const password = generatePassword(passwordLength);
    passwordEl.innerText = password;
});

passwordEl.addEventListener("click", (event) => {
   if(event.target.innerText.length > 0){
    navigator.clipboard.writeText(passwordEl.innerText).then(()=>{
        alert("Copied to clipboard");
    }).catch((err) => {
        alert("could not copy to clipboard");
    });
   }
});