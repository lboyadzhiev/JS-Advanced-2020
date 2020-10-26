function solve() {

   let btn = document.getElementById('send').addEventListener('click', sendMessage);

   function sendMessage() {
      let inputArea = document.getElementById('chat_input');

      if(inputArea.value !== '') {
         let newDiv = document.createElement('div');
         newDiv.setAttribute('class', 'message my-message');
         newDiv.textContent = inputArea.value;
         document.getElementById('chat_messages').appendChild(newDiv);
         inputArea.value = '';
      }
   }

}





