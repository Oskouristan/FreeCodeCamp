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

// Fonction pour afficher les articles de blog
function displayBlogPosts() {
    const contentArea = document.querySelector('.content');
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        
        blogCard.innerHTML = `
            <img src="${post.image}" alt="Image Blog">
            <div class="blog-info">
                <h3 style="font-weight: bold;">${post.title}</h3>
                <p>${post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}</p>
                <button>Get Started</button>
            </div>
        `;
        
        contentArea.appendChild(blogCard);
    });
}

// Appel de la fonction pour afficher les articles
displayBlogPosts();
