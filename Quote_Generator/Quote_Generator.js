const quotes = [
    {
        quote: '"The purpose of our lives is to be happy."', 
        person: 'Dalai Lama'
    },
    {
        quote: 'Life is what happens when you\'re busy making other plans."', 
        person: 'John Lennon'
    },
    {
        quote: '"Get busy living or get busy dying."', 
        person: 'Stephen King'
    },
    {
        quote: '"You only live once, but if you do it right, once is enough."', 
        person: 'Mae West'
    },
    {
        quote: '"Many of life’s failures are people who did not realize how close they were to success when they gave up."', 
        person: 'Thomas A. Edison'
    },
    {
        quote: '"If you want to live a happy life, tie it to a goal, not to people or things."', 
        person: 'Albert Einstein'
    },
    {
        quote: '"Never let the fear of striking out keep you from playing the game."', 
        person: 'Babe Ruth'
    },
    {
        quote: '"Money and success don’t change people; they merely amplify what is already there."', 
        person: 'Will Smith'
    },
    {
        quote: '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."', 
        person: 'Steve Jobs'
    },
    {
        quote: '"Not how long, but how well you have lived is the main thing.”', 
        person: 'Seneca'
    },
    {
        quote: '“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”', 
        person: 'Henry Ford'
    }
];

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

function shareOnTwitter() {
    const currentQuote = quote.innerText;
    const currentPerson = person.innerText;

    const encodedQuote = encodeURIComponent(`"${currentQuote}" - ${currentPerson}`);
    const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodedQuote}`;

    window.open(twitterShareURL, '_blank');
}
const twitterButton = document.querySelector('#share-twitter');
twitterButton.addEventListener('click', shareOnTwitter);

document.getElement