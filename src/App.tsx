import React, { useRef } from 'react';
import './App.css';
import { Time } from './components/Time';

function App() {

  const quote = useRef<HTMLElement>(null);
  const author = useRef<HTMLElement>(null);

  function getRandomQuote() {
    const randomIdx = Math.floor(Math.random() * quotesList.length);
    quote = quotesList[randomIdx];
    document.querySelector('.quote').innerHTML = quote.text;
    document.querySelector('.author').innerHTML = quote.author;
}

function onQuillClick() {
    document.querySelector('.quill')
        .addEventListener('mouseup', function name(params) {
            getRandomQuote();
        });
}

function onSocialClick() {
    document.querySelector('.social')
        .addEventListener('mouseup', function name(params) {
            var tweetLink = "https://twitter.com/intent/tweet?text=" + quote.text + " - " + quote.author;
            window.open(tweetLink);
        });
}

  return (
    <>
      <header>
        <Time />
      </header>
      <section>
          <div className="quill icon"></div>
          <p className="quote"></p>
          <p className="author"></p>
      </section>
      <footer>
          <div className="social icon"></div>
      </footer>
    </>
  );
}

export default App;
