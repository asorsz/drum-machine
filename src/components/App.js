import '../css/App.css';
import Display from './Display';
import DrumPad from './DrumPad';

const App = () => {

  const playSound = (e) => {
    console.log(e);
  }

  return (
    <div id="wrapper" className="container text-center d-flex flex-column justify-content-center align-items-center">
      <div id="drum-machine">   
        <Display />
        <DrumPad playSound={playSound} />
      </div>
    </div>
  );
};

export default App;
