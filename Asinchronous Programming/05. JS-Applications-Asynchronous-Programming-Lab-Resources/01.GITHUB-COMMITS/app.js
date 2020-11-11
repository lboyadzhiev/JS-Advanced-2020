function loadCommits() {
    let username = document.querySelector('#username').value;
    let repo = document.querySelector('#repo').value;
    let commitsEl = document.querySelector('#commits');
    
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then((res) => res.json())
        .then((commitsData) => {
            let commits = commitsData.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('');

            commitsEl.innerHTML = commits;
        })
        .catch((error) => {
            commitsEl.innerHTML = `<li>${error.status} (${error.statusText})</li>`;
        })
    
}