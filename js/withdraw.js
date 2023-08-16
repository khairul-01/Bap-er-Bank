
document.getElementById('btn-withdraw').addEventListener('click', function() {
   // getting input from withdraw input
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmount = document.getElementById('withdraw-amount');
   
   
   // Updating balance amount
   const balancAmount = document.getElementById('balance');
   if(isNaN(parseFloat(withdrawInput.value)) === false){
      // setting total withdraw amount.
      withdrawAmount.innerText = parseFloat(withdrawAmount.innerText) + parseFloat(withdrawInput.value);
   }
   else{
      alert('Please inter valid number');
      withdrawInput.value = '';
      return;
   }
   if(parseFloat(balancAmount.innerText) > parseFloat(withdrawInput.value)){
      balancAmount.innerText = parseFloat(balancAmount.innerText) - parseFloat(withdrawInput.value);
   }
   else{
      alert("Baap er Bank e eto taka nai.");
   }
   
   withdrawInput.value = '';
})
