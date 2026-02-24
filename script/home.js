document.getElementById('cashout-btn').addEventListener('click', function () {
    const agentNum = document.getElementById('ag-num').value;
    const cashAmount = document.getElementById('amnt').value;
    const curBal = document.getElementById('bal').innerText;

    const newBalance = Number(curBal) - cashAmount;

    const cPin = document.getElementById('pin-cashout').value;

       if(agentNum.length != 11 ){
        window.alert("Invalid Number");
        return;
    }

    if(newBalance < 0){
        window.alert("Invalid Amount");
        return;
    }


   if(cPin == '1234'){
     window.alert("Cashout Successful");
     document.getElementById('bal').innerText = newBalance;
   }
   else
   {
     window.alert("Invalid PIN");
     return;
   }
})