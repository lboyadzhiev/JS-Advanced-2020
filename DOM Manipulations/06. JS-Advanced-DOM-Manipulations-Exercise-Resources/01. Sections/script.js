function create(words) {
   let contentEl = document.getElementById('content');

   words.map((word) => {
      let divEl = document.createElement('div');
      let pEl = document.createElement('p');
      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.addEventListener('click', () => {
         pEl.style.display = 'block';
      })

      divEl.appendChild(pEl);
      contentEl.appendChild(divEl);
   })
}