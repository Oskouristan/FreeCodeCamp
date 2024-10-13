let colors = [];
let quotesList = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        colors = data.colors;
        quotesList = data.quotes;

        whenClicked();
    })
    .catch(error => console.error('Error loading the JSON file:', error));

const textzone = document.getElementById('text');
const authorzone = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');

const tweetButton = document.getElementById('tweet-quote');
const tumblrButton = document.getElementById('tumblr-quote');
const newQuoteButton = document.getElementById('new-quote');

function randomQuotes() {
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    const randomQuote = quotesList[randomIndex];

    textzone.textContent = "''" + randomQuote[0];
    authorzone.textContent = "- " + randomQuote[1];

    return randomQuote;
}

function changinColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor.background;

    textzone.style.color = randomColor.text;
    authorzone.style.color = randomColor.text;

    tweetButton.style.backgroundColor = randomColor.text;
    tumblrButton.style.backgroundColor = randomColor.text;
    newQuoteButton.style.backgroundColor = randomColor.text;
    newQuoteButton.style.setProperty("color", "#ffffff", "important");
}

function whenClicked() {
    console.log("Button clicked!");
    newQuoteButton.classList.add('animated');

    const randomQuote = randomQuotes();
    changinColor(); 

    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuote[0])} - ${encodeURIComponent(randomQuote[1])}`;

    setTimeout(() => {
        newQuoteButton.classList.remove('animated');
    }, 700);
}

newQuoteButton.addEventListener('click', whenClicked);
