/*
In this problem, you should create a JS functionality which changes the size and the color of a given paragraph on every click.

Every time when we click on the [CHANGE] button, the color and the size of the paragraph which contains "Growing Word" should change!
After every click, the current paragraph font size should be changed to the current font size multiplied by 2. Also, the color of that paragraph should change, depending on the previous color.
*/

function growingWord() {
   const colors = ['blue', 'green', 'red'];

   const paragraph = document.getElementsByTagName('p')[2];

   let color = paragraph.style.color;
   paragraph.style.color = !color ? 'blue' : colors[(colors.indexOf(color) + 1) % colors.length];

   let fontSize = paragraph.style.fontSize.replace('px', '');
   paragraph.style.fontSize = (!fontSize ? '2' : fontSize * 2) + 'px';
}