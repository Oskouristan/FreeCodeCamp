const chemin = "./articles.json";

if (typeof marked !== 'undefined') {
    alert('Marked est chargé avec succès !');
} else {
    alert('Marked n\'est pas défini !');
}

function getArticleIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function afficherArticle() {
    const articleId = getArticleIdFromURL();
    
    fetch(chemin)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const article = data.find(item => item.id == articleId);

            if (article) {
                document.getElementById('article-container').innerHTML = `
                    <div class="article-page" style="background-image: url(${article.image_url}); background-size: cover; color: white; padding: 20px;">
                        <h1>${article.titre}</h1>
                        <div class="article-content">${marked(article.texte)}</div>
                    </div>
                `;
            } else {
                document.getElementById('article-container').innerHTML = `<p>Article non trouvé.</p>`;
            }
        })
        .catch(error => {
            alert('Erreur lors de la récupération de l\'article : ' + error.message);
        });
}

// Appel de la fonction pour afficher l'article au chargement de la page
afficherArticle();
