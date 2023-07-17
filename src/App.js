import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.open('https://forms.gle/wEK7sTEkpiG1pTHq5', '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
        <img src="http://accnt.omosiro.zombie.jp/cnt/accnt.php?cnt_id=2134779&ac_id=LAA0416165&mode=total"></img>
      </header>
      <div className="App-intro">
        真夏。むせるような暑さの中、そうめんを食べるのはどうか。<br />
        そうめん、それはなんだろう。<br />
        疑うことから始めてみないか。この、鋭角の日差しの中で。<br />
      </div>
      <div className="App-body">
        <div className='App-body-guide'>
          <p>あなたの<span style={{ color: '#ff0000', textShadow: '1 1 5px #000000' }}>「そうめん」</span>についての考えを教えてください。</p>
        </div>
        <button className='App-body-guide-button' onClick={handleClick}>教える</button>
      </div>
      <footer className="App-footer">
        <p>
          <a href="https://lin.ee/qfnCAXm">
            👇ご質問等はこちらまで👇<br />
            <img src="line.png" alt="line" />
          </a>
        </p>
        <p>
          <a href="そうめん.鍋.net">そうめん.鍋.net</a>
        </p>
      </footer>
    </div >
  );
}

export default App;