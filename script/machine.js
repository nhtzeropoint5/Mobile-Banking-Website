
function getValueFromInput(id){
const input = document.getElementById(id);
const value = input.value;
return value;
}

function getBalance(){
    const bal = document.getElementById('bal').innerText;
    return Number(bal);
}

function setBalance(value){
    const balanceElement = document.getElementById("bal");
    balanceElement.innerText = value;
}

function showOnly(id){
    const AddM = document.getElementById('add-money');
    const CashO = document.getElementById('cash-out');
    AddM.classList.add('hidden');
    CashO.classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
