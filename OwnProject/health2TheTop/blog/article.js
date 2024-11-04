const path = "./articles.json";
const homepath = "/start/OwnProject/health2TheTop/public/index.html";


function getArticleIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function readArticlesJson() {
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        });
}

function showArticle(data) {
    const articleId = getArticleIdFromURL();
    const article = data.find(item => item.id == articleId);

    if (article) {
        document.getElementById('article-container').innerHTML = `
            <h1>${article.titre}</h1>
            <img class="article-image" src="${article.image_url}" alt="Image de l'article" />
            <div class="article-content">${marked(article.texte)}</div>
        `;
    } else {
        document.getElementById('article-container').innerHTML = `<p>Article non trouvé.</p>`;
    }
}

function displayArticle() {
    readArticlesJson()
        .then(data => shoArticle(data))
        .catch(error => {
            alert(`Error : ${error.message}`);
            window.location.href = homepath; 
        });
}

displayArticle();

