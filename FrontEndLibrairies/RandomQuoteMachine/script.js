const colors = [
    
    { background: '#ffcccb', text: '#000000', button: '#f8d7da' },
    { background: '#ffe4b5', text: '#000000', button: '#fff3cd' },
    { background: '#d3f8d3', text: '#000000', button: '#c3e6cb' },
    { background: '#add8e6', text: '#000000', button: '#b8daff' },
    { background: '#e6e6fa', text: '#000000', button: '#d1ecf1' }

];

const textzone = document.getElementById('text');
const authorzone = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');

document.getElementById('new-quote').addEventListener('click', function() {

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor.background;
    
    quoteBox.style.backgroundColor = randomColor.text;
    quoteBox.style.color = randomColor.text;

    textzone.querySelector('p').style.color = randomColor.background;
    authorzone.querySelector('p').style.color = randomColor.background;

    this.style.backgroundColor = randomColor.button;
    this.style.color = '#ffffff'; 
});
