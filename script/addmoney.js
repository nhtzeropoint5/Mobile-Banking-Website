

document.getElementById('add-money-btn').addEventListener('click', function (){


const bankAccount = getValueFromInput('select-id');
   if(bankAccount == "Server location")
   {
     window.alert("Enter a Bank Name"); 
     return;
   }

   const accNum = getValueFromInput('bank-acc');
   if(accNum.length != 11){
    window.alert('Invalid Account Number');
    return;
   }
   const amount = getValueFromInput('amnt-add');
   const nowBal = getBalance() + Number(amount);

   const pin = getValueFromInput('pin-addmoney');
   if(pin=="1234"){
    window.alert(`${nowBal} money added successfully`);
    setBalance(nowBal);
   }
   else{
    window.alert('Invalid PIN');
   }

})


