// add event handler to the button
document.getElementById('btn-deposit').addEventListener('click', function() {
   // to get value from input field, we need to use .value property.
   const depositInp = document.getElementById('deposit-input')
   const depositInpVal = depositInp.value;
   // for non input (element other than input, textarea) use innerText to get the text.
   const depositTotal = document.getElementById('deposit-total');

   if(isNaN(parseFloat(depositInp.value)) === false){
      // setting total withdraw amount.
      depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositInpVal);
   }
   else{
      alert('Please inter valid number');
      depositInp.value = null;
      return;
   }
   
   depositInp.value = null;
   // Updating Balance amount.
   const balancAmount = document.getElementById('balance');
   balancAmount.innerText = parseFloat(balancAmount.innerText) + parseFloat(depositInpVal);
})