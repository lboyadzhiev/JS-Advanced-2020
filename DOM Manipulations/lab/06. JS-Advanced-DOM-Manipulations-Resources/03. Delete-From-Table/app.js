function deleteByEmail() {
   let inputEl = document.querySelector('input[name=email]');
   let emailForDelete = inputEl.value;

   let tdEmails = document.querySelectorAll('#customers td:nth-of-type(2)');

   for(const email of tdEmails) {

      if(email.textContent === emailForDelete) {
         email.parentElement.remove();
      } else {
         let result = document.getElementById('result');
         result.textContent = 'Not found.'
      }
   }
}