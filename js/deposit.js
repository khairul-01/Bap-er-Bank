// add event handler to the button
document.getElementById('btn-deposit').addEventListener('click', function() {
   // to get value from input field, we need to use .value property.
   const depositInp = document.getElementById('deposit-input')
   const depositInpVal = depositInp.value;
   // for non input (element other than input, textarea) use innerText to get the text.
   const depositTotal = document.getElementById('deposit-total');
   depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositInpVal);
   
   depositInp.value = null;
   // Updating Balance amount.
   const balancAmount = document.getElementById('balance');
   balancAmount.innerText = parseFloat(balancAmount.innerText) + parseFloat(depositInpVal);
})