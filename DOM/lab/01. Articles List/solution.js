/*
	 1. Articles List
In this problem, you should create a JS functionality which creates articles and appends them into some article section.
The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads.
Scripts are provided and executed as a plain text. They don't need a special preparation or a compilation to run.
In this aspect, JavaScript is very different from another language called Java.
*/

function createArticle() {
	let titleEl = document.getElementById('createTitle');
	let contentEl = document.getElementById('createContent');
	let articles = document.getElementById('articles');

	if (titleEl.value && contentEl.value) {
		let article = document.createElement('article');

		let headingEl = document.createElement('h3');
		headingEl.textContent = titleEl.value;
		titleEl.value = '';

		let paragraphEl = document.createElement('p');
		paragraphEl.textContent = contentEl.value;
		contentEl.value = '';

		article.appendChild(headingEl);
		article.appendChild(paragraphEl);

		articles.appendChild(article);
	}

}