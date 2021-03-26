import '../css/DrumPad.css';
import drumPads from './drumpads';

const DrumPad = () => {
  return (
    <div id="drum-pad">
      {drumPads.map((drumpad) => (
        <div id={drumpad.sound} key={drumpad.keyCode} className="drum-pad" onClick={console.log(drumpad.sound)}>
          <kbd>{drumpad.key}</kbd>
          <audio src={`./audio/${drumpad.sound}.wav`} id={drumpad.key} className="clip"></audio>
      </div>
      ))}
    </div>       
  )
};

export default DrumPad;

        
