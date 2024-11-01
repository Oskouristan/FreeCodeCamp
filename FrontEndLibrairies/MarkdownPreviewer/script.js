const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Initialiser le contenu par défaut
const defaultMarkdown = `# Titre Principal (H1)
## Sous-titre (H2)
[Visitez FreeCodeCamp](https://www.freecodecamp.org)
Voici du code en ligne : \`console.log('Hello World');\`

\`\`\`
function helloWorld() {
    console.log('Hello World');
}
\`\`\`

- Élément de liste :
  - Item 1
  - Item 2

> Ceci est un bloc de citation.

![Image de démonstration](https://via.placeholder.com/150) <!-- Élément d'image ajouté -->

**Texte en gras**`;

// Affecter le contenu par défaut à l'éditeur
editor.value = defaultMarkdown; 

// Rendre le contenu par défaut dans l'aperçu
preview.innerHTML = marked(defaultMarkdown); 

// Mettre à jour l'aperçu lorsque l'utilisateur tape dans l'éditeur
editor.addEventListener('input', function() {
    preview.innerHTML = marked(editor.value);
});
