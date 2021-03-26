import '../css/App.css';
import Display from './Display';
import DrumPad from './DrumPad';

function App() {
  return (
    <div id="wrapper" className="container text-center d-flex flex-column justify-content-center">
      <div id="drum-machine">   
        <Display />
        <DrumPad />
      </div>
    </div>
  );
}

export default App;
