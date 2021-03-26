import '../css/DrumPad.css';
import drumPads from './drumpads';

const DrumPad = () => {
  return (
    <div id="drum-pad">
      {drumPads.map((drumpad) => (
        <div key={drumpad.keyCode} className="drum-pad">
          <kbd>{drumpad.key}</kbd>
        <span>{drumpad.sound}</span>
        <audio src={`./audio/${drumpad.sound}.wav`}></audio>
      </div>
      ))}
    </div>       
  )
};

export default DrumPad;

        
