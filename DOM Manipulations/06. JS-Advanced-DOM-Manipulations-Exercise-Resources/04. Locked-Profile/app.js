function lockedProfile() {
    let btnEl = document.getElementsByTagName('button');
    btnEl.addEventListener('click', showMore(e));

    let hiddenFieldEl = document.getElementById('user2HiddenFields');

    function showMore(e) {
        console.log(btnEl);
    }
}