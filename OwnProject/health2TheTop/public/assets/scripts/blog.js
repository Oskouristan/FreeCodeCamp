const chemin = "../blog/articles.json"; // Chemin pour accéder au fichier JSON

let blogPosts = []; // Déclare une variable pour stocker les articles

function getArticles() {
    fetch(chemin)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            blogPosts = data.map(article => {
                return {
                    id: article.id, // Ajoute l'ID pour générer le lien
                    title: article.titre,
                    content: article.texte,
                    image: article.image_url
                };
            });
            afficherArticlesBlog();
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du fichier :', error);
            alert('Le fichier n\'a pas pu être trouvé ou une erreur est survenue.');
        });
}

// Fonction pour mélanger les articles
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function ajouterCarteBlog(article, utiliserImageCommeFond) {
    const carteBlog = document.createElement('div');
    carteBlog.classList.add('blog-card');

    if (utiliserImageCommeFond) {
        carteBlog.classList.add('double-width');
        carteBlog.style.backgroundImage = `url(${article.image})`;
        carteBlog.style.backgroundSize = 'cover'; 
        carteBlog.style.color = 'white'; 
        carteBlog.innerHTML = `
            <div class="blog-info" style="padding: 0px;">
                <h3 style="font-weight: bold;">${article.title}</h3>
                <p>${article.content.length > 240 ? article.content.substring(0, 240) + '...' : article.content}</p>
                <a href="../blog/article.html?id=${article.id}"><button>Get Started</button></a>
            </div>
        `;
    } else {
        carteBlog.innerHTML = `
            <div class="blog-info">
                <h3 style="font-weight: bold;">${article.title}</h3>
                <p>${article.content.length > 100 ? article.content.substring(0, 90) + '...' : article.content}</p>
                <a href="../blog/article.html?id=${article.id}"><button>Get Started</button></a>
            </div>
        `;
    }

    return carteBlog;
}

const zoneContenu = document.querySelector('.content');

function afficherArticlesBlog() {
    const articlesMelanges = shuffle([...blogPosts]);

    articlesMelanges.forEach(article => {
        const utiliserImageCommeFond = Math.random() < 0.2;
        const carteBlog = ajouterCarteBlog(article, utiliserImageCommeFond);
        zoneContenu.appendChild(carteBlog);
    });
}

// Appel de la fonction pour récupérer les articles
getArticles();
