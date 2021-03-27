import { useState } from 'react';
import '../css/App.css';
import Display from './Display';
import DrumPad from './DrumPad';

const App = () => {
  const [playing, setPlaying] = useState('hello')

  return (
    <div id="wrapper" className="container text-center d-flex flex-column justify-content-center align-items-center">
      <div id="drum-machine">   
        <Display playing={playing}/>
        <DrumPad setPlaying={setPlaying}/>
      </div>
    </div>
  );
};

export default App;
