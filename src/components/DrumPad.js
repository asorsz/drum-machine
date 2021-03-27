import '../css/DrumPad.css';
import drumPads from './drumpads';

const DrumPad = () => {

  const playSound = (e) => { 
    const audio = document.querySelector(`#${e.target.dataset.key}`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    e.target.classList.add('playing');
  }

  return (
    <div id="drum-pad">
      {drumPads.map((drumpad) => (
        <div
          id={drumpad.sound}
          key={drumpad.keyCode}
          data-key={drumpad.key}
          className="drum-pad"
          onClick={(e) => playSound(e)}
        >
          {drumpad.key}
          <audio
            src={`./audio/${drumpad.sound}.wav`}
            id={drumpad.key}
            className="clip"
          ></audio>
        </div>
      ))}
    </div>       
  )
};

export default DrumPad;

        
