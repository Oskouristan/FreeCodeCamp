const colors = [

    { background: '#ffcccb', text: '#000000', button: '#f8d7da' },
    { background: '#ffe4b5', text: '#000000', button: '#fff3cd' },
    { background: '#d3f8d3', text: '#000000', button: '#c3e6cb' },
    { background: '#add8e6', text: '#000000', button: '#b8daff' },
    { background: '#e6e6fa', text: '#000000', button: '#d1ecf1' }

];


const quotesList = [
    ["The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt"],
    ["In the end, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."],
    ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
    ["The purpose of our lives is to be happy.", "Dalai Lama"],
    ["Life is what happens when you're busy making other plans.", "John Lennon"],
    ["Get busy living or get busy dying.", "Stephen King"],
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
    ["The only impossible journey is the one you never begin.", "Tony Robbins"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
  
    // Citations des célébrités fictives ou réels
    ["Float like a butterfly, sting like a bee.", "Muhammad Ali"],
    ["I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", "Muhammad Ali"],
    ["Everybody has a plan until they get punched in the mouth.", "Mike Tyson"],
    ["Discipline is doing what you hate to do but nonetheless doing it like you love it.", "Mike Tyson"],
    ["Sometimes you gotta run before you can walk.", "Tony Stark"],
    ["It's not who I am underneath, but what I do that defines me.", "Batman"],
    ["I can't be the only one who wants to punch Billy Joel in the face.", "Billy Butcher"],
    ["Spartans, Prepare for glory", "Leonidas"],
    ["Tonight we dine in hell!", "Leonidas"],
    ["Just because someone stumbles and loses their path, doesn't mean they're lost forever", "Charles Xavier (Logan)"],
    ["Let he who is without sin cast the first stone.", "Jesus Christ"],
    ["When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk"],
    ["All we have to decide is what to do with the time that is given to us","Gandalf"],
    ["English Motherf*****, do you speak it!?","Samuel L. Jackson's"],
    ["Why so serious?","Joker"]

  ];
  

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
    }


function changinColor(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor.background;

    
    quoteBox.style.backgroundColor = randomColor.text;
    quoteBox.style.color = randomColor.text;
    textzone.style.color = randomColor.background;
    authorzone.style.color = randomColor.background;
    


    tweetButton.style.backgroundColor = randomColor.button;
    tumblrButton.style.backgroundColor = randomColor.button;
    
    newQuoteButton.style.backgroundColor = randomColor.button;
    newQuoteButton.style.setProperty("color", "#ffffff", "important");

}

function whenClicked() {
    randomQuotes();
    changinColor(); 
}


newQuoteButton.addEventListener('click', whenClicked);

whenClicked();
