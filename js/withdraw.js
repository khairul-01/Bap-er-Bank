
document.getElementById('btn-withdraw').addEventListener('click', function() {
   // getting input from withdraw input
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmount = document.getElementById('withdraw-amount');
   // setting total withdraw amount.
   withdrawAmount.innerText = parseFloat(withdrawAmount.innerText) + parseFloat(withdrawInput.value);
   withdrawInput.innerText = '';

   // Updating balance amount
   const balancAmount = document.getElementById('balance');
   balancAmount.innerText = parseFloat(balancAmount.innerText) - parseFloat(withdrawInput.value);

})
