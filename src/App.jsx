import { useEffect, useRef, useState } from 'react';
import './App.css'
import { useProgressModel } from './model/modelPro';
import { AppModel } from './model/modelBul';
import { AppController } from './controller/controllerBul';
import { AppView } from './view/viewBul';
import { initializeAnimation } from './controller/controllerTeks';
import { initializeAnimation1 } from './controller/controllerTeks';
import RoutingGitHub from './router/RoutingGitHub.jsx';
import RoutingPartner from './router/RoutingPartner.jsx';
import RoutingJudul from './router/RoutingJudul.jsx';

function App() {
  const { progressValue } = useProgressModel();
  useEffect(() => {
    initializeAnimation('.judul');
  }, []);
  useEffect(() => {
    initializeAnimation1('.target');
  }, []);
  const audioRef = useRef(null);
  const playMusic = () => {
    audioRef.current.play();
  };
  const GitHub = () => {
    window.open('https://github.com/CyberFullStackDeveloperArr', '_blank');
  };
  const [ Container4, setContainer4 ] = useState(true);
  const [ Container5, setContainer5 ] = useState(false);
  const [ Container6, setContainer6 ] = useState(false);
  const [ Container3, setContainer3 ] = useState(true);
  const [ Container2, setContainer2 ] = useState(true);
  const [ Container, setContainer ] = useState(false);
  const [ Container1, setContainer1 ] = useState(true);
  const [ Container7, setContainer7 ] = useState(true);
  const [ Container8, setContainer8 ] = useState(false);
  const GameClick = () => {
    setContainer4(false);
    setContainer3(false);
    setContainer2(false);
    setContainer(true);
    setContainer5(true);
    setContainer6(true);
    setContainer1(false);
    setContainer7(false);
    setIsInputLimited(true);
  };
  const GoogleClick = () => {
    setContainer1(false);
    setContainer4(false);
    setContainer3(false);
    setContainer2(false);
    setContainer(true);
    setContainer8(true);
  };
  const [inputText, setInputTexx] = useState('');
  const [isInputLimited, setIsInputLimited] = useState(false);
  const [textx, setTextx] = useState([]);
  const [textG, settextG] = useState([]);
  const [texts, setTexts] = useState([]);
  const [Matematiks, setMatematiks] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [is123Matematik, setis123Matematik] = useState(false);
  const [winDisplayed, setWinDisplayed] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [TebakGambar, setTebakGambar] = useState(false);
  const [gameOverG, setgameOverG] = useState(false);
  const [isGambar, setisGambar] = useState(false);
  const [winGambar, setwinGambar] = useState(false);
  const [TebakKata, setTebakKata] = useState(false);
  const [gameOverK, setgameOverK] = useState(false);
  const [isKata, setisKata] = useState(false);
  const [winKata, setwinKata] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setInputTexx(event.target.value);
    setInputValue(event.target.value);
    const inputText = (event.target.value);
    if (!isInputLimited || inputText.length <= 36) {
      setInputTexx(inputText);
    }
  };
  const handleAddText = async () => {
    setContainer8(false);
    const apiKey = 'PASANG SENDIRI';
    const cx = 'PASANG SENDIRI';
    const url = `https://www.googleapis.com/customsearch/v1?q=${inputValue}&key=${apiKey}&cx=${cx}`; 
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.items) {
        setSearchResults(data.items);
        setError(null);
      } else {
        setSearchResults([]);
        setError('Tidak DiTemukan Data Kak');
      }
    } catch (error) {
      console.error('Kesalahan Saat Pencarian Kak:', error);
      setSearchResults([]);
      setError('Kesalahan Saat Ambil Pencarian Kak');
      setError('');
    }
    if (inputText.trim() !== '') {
      setTexts(prevTexts => [...prevTexts, inputText]);
      setInputTexx('');
    }
    if (inputText.toLowerCase().includes('hello')) {
      setTextx(prevTexts => [...prevTexts, 'Hello Juga']);
    } 
    else if (inputText.toLowerCase().includes('apa kabar')) {
      setTextx(prevTexts => [...prevTexts, 'kabar saya baik']);
    }
    else if (inputText.toLowerCase().includes('list')) {
      setTextx(prevTexts => [...prevTexts, '~> Matematika']);
      setTextx(prevTexts => [...prevTexts, '~> Tebak Gambar']);
      setTextx(prevTexts => [...prevTexts, '~> Tebak Kata']);
    }
    else if (inputText.toLowerCase().includes('matematika')) {
      setis123Matematik(true); 
      setMatematiks(true);
      setGameOver(false); 
      setWinDisplayed(false); 
      setTextx(prevTexts => [...prevTexts, '123 x 12 - 45 =']);
    } 
    setInputTexx('');
    if (Matematiks && inputText !== '1431' && inputText !== '277' && inputText !== '288' && inputText !== '1160' && inputText !== '142' && !gameOver) {
      setGameOver(true);
      setis123Matematik(false);
      if (!winDisplayed) {
        setTextx([]);
        alert('Game Over Matematika!');
      }  
    }
    else if (is123Matematik && inputText.toLowerCase().includes('1431')) {
      setGameOver(false); 
      setTextx(prevTexts => [...prevTexts, '200 + 200 - 123 =']);
    }
    else if (is123Matematik && inputText.toLowerCase().includes('277')) {
      setGameOver(false); 
      setTextx(prevTexts => [...prevTexts, '300 x 1 - 12 =']);
    }
    else if (is123Matematik && inputText.toLowerCase().includes('288')) {
      setGameOver(false); 
      setTextx(prevTexts => [...prevTexts, '321 x 4 - 124 =']);
    }
    else if (is123Matematik && inputText.toLowerCase().includes('1160')) {
      setGameOver(false); 
      setTextx(prevTexts => [...prevTexts, '12 x 12 - 2 =']);
    }
    else if (is123Matematik && inputText.toLowerCase().includes('142')) {
      setGameOver(false); 
      setTextx(prevTexts => [...prevTexts, 'win']);
      setWinDisplayed(true);
      setGameOver(true);
    }
    else if (inputText.toLowerCase().includes("tebak kata")) {
      setisKata(true);
      setTebakKata(true);
      setgameOverK(false);
      setTextx(prevTexts => [...prevTexts, 'egaugnal']);
      setwinKata(false);
    }
    setInputTexx('');
    if(TebakKata && inputText !== 'language' && inputText !== 'programming' && inputText !== 'car' && inputText !== 'fish' && inputText !== 'elephant' && !gameOverK) {
      setgameOverK(true);
      setisKata(false);
      if (!winKata) {
       setTextx([]);
       alert("Game Over TebakKata!");
      }
    }
    else if (isKata && inputText.toLowerCase().includes("language")) {
      setgameOverK(false);
      setTextx(prevTexts => [...prevTexts, 'gnimmargorp']);
    }
    else if (isKata && inputText.toLowerCase().includes("programming")) {
      setgameOverK(false);
      setTextx(prevTexts => [...prevTexts, 'rac']);
    }
    else if (isKata && inputText.toLowerCase().includes("car")) {
      setgameOverK(false);
      setTextx(prevTexts => [...prevTexts, 'hsif']);
    }
    else if (isKata && inputText.toLowerCase().includes("fish")) {
      setgameOverK(false);
      setTextx(prevTexts => [...prevTexts, 'tnahpele']);
    }
    else if (isKata && inputText.toLowerCase().includes("elephant")) {
      setgameOverK(false);
      setTextx(prevTexts => [...prevTexts, 'win']);
      setwinKata(true);
      setgameOverK(true);
    }
    else if (inputText.toLowerCase().includes("tebak gambar")) {
      setisGambar(true);
      setTebakGambar(true);
      setgameOverG(false);
      setwinGambar(false);
      setTextx([]);
      settextG([]);
      setShowImage(false);
      setShowImage1(false);
      setShowImage2(false);
      setShowImage3(false);
      setShowImage4(false);
      setShowImage(true);
    }
    setInputTexx('');
    if (TebakGambar && inputText !== 'kucing' && inputText !== 'anjing' && inputText !== 'kuda' && inputText !== 'bebek' && inputText !== 'merpati' && !gameOverG) {
      setgameOverG(true);
      setisGambar(false);
      if (!winGambar) {
       settextG([]);
       setShowImage(false);
       setShowImage1(false);
       setShowImage2(false);
       setShowImage3(false);
       setShowImage4(false);
       alert("Game Over TebakGambar!");
      } 
    }
    else if (isGambar && inputText.toLowerCase().includes("kucing")) {
      setgameOverG(false);
      setShowImage1(true);
    } 
    else if (isGambar && inputText.toLowerCase().includes("anjing")) {
      setgameOverG(false);
      setShowImage2(true);
    }
    else if (isGambar && inputText.toLowerCase().includes("kuda")) {
      setgameOverG(false);
      setShowImage3(true);
    }
    else if (isGambar && inputText.toLowerCase().includes("bebek")) {
      setgameOverG(false);
      setShowImage4(true);
    }
    else if (isGambar && inputText.toLowerCase().includes("merpati")) {
      setgameOverG(false);
      settextG(prevTexts => [...prevTexts, 'win']);
      setwinGambar(true);   
      setgameOverG(true);
    }
    setInputTexx('');
  }
  const handleClickResult = (link) => {
    window.location.href = link;
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddText();
    }
  };

  return (
    <>
      <audio ref={audioRef} className="music" controls>
        <source src="monster.mp3" type="audio/mpeg"></source>
      </audio>
      <AppController />
      <AppView position={AppModel.position} />
      { Container1 && <div className="container1">
        <span className="wadah1">
         <RoutingJudul/>
         <progress className="nilai" value={progressValue} max="100"></progress>
        </span>
      </div> }
      { Container2 && <div className="container2">
        <span onClick={playMusic} className="play">
          <b title="game" onClick={GameClick} className="game" translate="no">Lets start the dangerous game and challenge your brain</b>
        </span>
        <span onClick={playMusic}>
          <b title="google" onClick={GoogleClick} className="google" translate="no">The Power of Google Sercing You Can Do Its</b>
        </span>
      </div> }
      { Container3 && <div className="container3">
        <span>
         <b translate="no" className="target">Put&nbsp;Your&nbsp;Mental&nbsp;Health&nbsp;First&nbsp;This&nbsp;game&nbsp;is&nbsp;very&nbsp;high&nbsp;risk&nbsp;of&nbsp;mental&nbsp;and&nbsp;mental&nbsp;attacks,&nbsp;keep&nbsp;the&nbsp;spirit&nbsp;and&nbsp;continue&nbsp;to&nbsp;give&nbsp;up</b>
        </span>
      </div> }
      { Container4 && <div className="container4">
        <RoutingPartner />
      </div> }
      { Container5 && <div className="container5">
        <nav className="atas">
         <b translate="no" className="cht">Hello, I am an AI Bot Program</b>
          <svg className="robot" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
           <path d="M200-120q-33 0-56.5-23.5T120-200v-400q0-100 70-170t170-70h240q100 0 170 70t70 170v400q0 33-23.5 56.5T760-120H200Zm0-80h560v-400q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v400Zm160-280q-33 0-56.5-23.5T280-560q0-33 23.5-56.5T360-640q33 0 56.5 23.5T440-560q0 33-23.5 56.5T360-480Zm240 0q-33 0-56.5-23.5T520-560q0-33 23.5-56.5T600-640q33 0 56.5 23.5T680-560q0 33-23.5 56.5T600-480ZM280-200v-80q0-33 23.5-56.5T360-360h240q33 0 56.5 23.5T680-280v80h-80v-80h-80v80h-80v-80h-80v80h-80Zm-80 0h560-560Z"/>
          </svg>
        </nav>
      </div> }
      { Container6 && <div className="container6">
        <fieldset className="kotak">
          <legend translate="no" className="botjudul">Bot AI</legend>
          <div className="satu1">
            <div className="foto-tebak">
             {showImage && <img className="gr-tebak" src="kucing.png" alt="gambar" />}
             {showImage1 && <img className="gr-tebak" src="anjing.png" alt="gambar" />}
             {showImage2 && <img className="gr-tebak" src="kuda.png" alt="gambar" />}
             {showImage3 && <img className="gr-tebak" src="bebek.png" alt="gambar" />}
             {showImage4 && <img className="gr-tebak" src="merpati.png" alt="gambar" />}
            </div>

            {textG.map((textG, indeG) => (
              <b key={indeG} translate="no" className="tiga">{textG}</b>
            ))}

            {textx.map((textx, indexx) => (
              <b key={indexx} translate="no" className="satu">{textx}</b>
            ))}
          </div>
          <div className="dua2">
            {texts.map((text, index) => (
             <b translate="no" key={index} className="dua">{text}</b>
            ))} 
          </div>
        </fieldset>
      </div> }
      { Container8 && <div className="container8">
        <b className="seG">&lt;</b><svg xmlns="http://www.w3.org/2000/svg" className="mata" viewBox="0 -960 960 960"><path d="M440-240q116 0 198-81.5T720-520q0-116-82-198t-198-82q-117 0-198.5 82T160-520q0 117 81.5 198.5T440-240Zm0-280Zm0 160q-83 0-147.5-44.5T200-520q28-70 92.5-115T440-680q82 0 146.5 45T680-520q-29 71-93.5 115.5T440-360Zm0-60q55 0 101-26.5t72-73.5q-26-46-72-73t-101-27q-56 0-102 27t-72 73q26 47 72 73.5T440-420Zm0-40q25 0 42.5-17t17.5-43q0-25-17.5-42.5T440-580q-26 0-43 17.5T380-520q0 26 17 43t43 17Zm0 300q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-520q0-74 28.5-139.5t77-114.5q48.5-49 114-77.5T440-880q74 0 139.5 28.5T694-774q49 49 77.5 114.5T800-520q0 64-21 121t-58 104l159 159-57 56-159-158q-47 37-104 57.5T440-160Z"/></svg>
        <b translate="no" className="seG">Do a Search... / &gt;</b>
      </div> }
      { Container7 && <div className="container7">
        <div>
          {searchResults.map((result, index) => (
            <div key={index} onClick={() => handleClickResult(result.link)}>
             <h2 className="Gatas"><a href={result.link}>{result.title}</a></h2>
             <b className="Gbawah">{result.snippet}</b>
            </div>
          ))}
        </div>
        {error && <em>{error}</em>}
      </div> }
      { Container && <div className="container">
        <div className="wadah">
          <input maxLength={isInputLimited ? 36 : undefined} onKeyDown={handleKeyDown} value={inputText} onChange={handleChange} id="sea" translate="no" placeholder="Searching Google & Game..." />
          <button onClick={handleAddText}>
            <svg className="cari" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </button>
        </div>
      </div> }
      <footer className="bawah" onClick={GitHub}>
        <RoutingGitHub />
      </footer>
    </>
  )
}

export default App
