import React, { useState } from 'react';
import './App.css';
import { quotes } from './data/quotesList'
import { Time } from './components/Time';

function App() {

  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  function genRandomIndex() {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    setIndex(randomIdx)
  }

  function onSocialClick() {
    const tweetLink = `https://twitter.com/intent/tweet?text=${quote.text} – ${quote.author}`;
    window.open(tweetLink);
  }

  return (
    <>
      <header>
        <Time />
      </header>
      <section>
          <button onClick={genRandomIndex}>
            <i className="quill icon" />
          </button>
          <p className="quote">{quote.text}</p>
          <p className="author">{quote.author}</p>
      </section>
      <footer>
        <button className="tweet-btn" onClick={onSocialClick}>
          <i className="social icon" />
        </button>
      </footer>
    </>
  );
}

export default App;
