// Exemple de données d'articles de blog
const blogPosts = [
    {
        title: "Article 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare lorem vitae felis. Suspendisse potenti. Morbi suscipit, magna non lacinia varius, erat dui volutpat risus, id cursus felis erat sit amet eros.",
        image: "image1.jpg"
    },
    {
        title: "Article 2",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "image2.jpg"
    },
    {
        title: "Article 3",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "image3.jpg"
    },
    {
        title: "Article 4",
        content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et feugiat augue. Suspendisse potenti. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.",
        image: "image4.jpg"
    },
    {
        title: "Article 5",
        content: "Phasellus viverra nulla fringilla pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec lacinia congue felis in faucibus.",
        image: "image5.jpg"
    }
];

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
            <div class="blog-info" style="padding: 20px;">
                <h3 style="font-weight: bold;">${article.title}</h3>
                <p>${article.content.length > 100 ? article.content.substring(0, 100) + '...' : article.content}</p>
                <button>Get Started</button>
            </div>
        `;
    } else {
        carteBlog.innerHTML = `
            <img src="${article.image}" alt="Image Blog" style="display: block; width: 100%; height: auto;">
            <div class="blog-info">
                <h3 style="font-weight: bold;">${article.title}</h3>
                <p>${article.content.length > 100 ? article.content.substring(0, 100) + '...' : article.content}</p>
                <button>Get Started</button>
            </div>
        `;
    }

    return carteBlog;
}

const zoneContenu = document.querySelector('.content');
const articlesMelanges = shuffle([...blogPosts]);

function afficherArticlesBlog() {
    while (articlesMelanges.length > 0) {
        const indexAléatoire = Math.floor(Math.random() * articlesMelanges.length);
        const article = articlesMelanges[indexAléatoire];

        // Décidez si la carte doit occuper une ou deux colonnes
        const utiliserImageCommeFond = Math.random() < 0.25; // 25% de chance d'occuper 2 colonnes
        const carteBlog = ajouterCarteBlog(article, utiliserImageCommeFond);
        
        // Ajoutez la carte à la zone de contenu
        zoneContenu.appendChild(carteBlog);
        
        // Retirez l'article de la liste
        articlesMelanges.splice(indexAléatoire, 1);
    }
}

afficherArticlesBlog();
