import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="time">
            <span className="hour">22</span>
            <span className="delim heart-beat">:</span>
            <span className="min">22</span>
        </div>
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
