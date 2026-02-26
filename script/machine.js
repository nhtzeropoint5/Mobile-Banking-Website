
function getValueFromInput(id){
const input = document.getElementById(id);
const value = input.value;
console.log(value);
}

function getBalance(){
    const bal = document.getElementById('bal').innerText;
    return Number(bal);
}

function setBalance(value){
    const balanceElement = document.getElementById("bal");
    balanceElement.innerText = value;
}