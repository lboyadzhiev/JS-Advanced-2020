/*
	 1. Articles List
In this problem, you should create a JS functionality which creates articles and appends them into some article section.
The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads.
Scripts are provided and executed as a plain text. They don't need a special preparation or a compilation to run.
In this aspect, JavaScript is very different from another language called Java.
*/

function createArticle() {
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	if (titleElement.value && contentElement.value) {
		let articleElement = document.createElement('article');

		let headingElement = document.createElement('h3');
		headingElement.innerHTML = titleElement.value;
		titleElement.value = '';

		let textElement = document.createElement('p');
		textElement.innerHTML = contentElement.value;
		contentElement.value = '';


		articleElement.appendChild(headingElement);
		articleElement.appendChild(textElement);


		let sectionElement = document.getElementById('articles');
		sectionElement.appendChild(articleElement);

	}
}