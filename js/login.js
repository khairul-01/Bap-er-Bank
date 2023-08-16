// step 1: add event handler to the submit button
document.getElementById('btn-submit').addEventListener('click', function(event) {
   // step 2: get the email address inside input field.
   // always have to remember to us .value te get text from inside input field.
   const email = document.getElementById('mail');
   const mailText = email.value;
   // get the password
   const passw = document.getElementById('passw');
   const psdText = passw.value;
   
   // Danger: do not verify email and password on the client side
   if (mailText ==='sontan@baap.com' && psdText === 'secret'){
      window.location.href = 'bank.html';
   }
   else{
       alert('Your password is wrong. Please enter valid password.')
   }

})
