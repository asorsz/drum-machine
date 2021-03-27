import { useEffect } from 'react';
import '../css/DrumPad.css';
import drumPads from './drumpads';

const DrumPad = () => {

  const playSound = (e) => { 
    const audio = e.type === 'click'
      ? document.querySelector(`#${e.target.dataset.key}`)
      : document.querySelector(`#${e.key.toUpperCase()}`)
        
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    e.target.classList.add('playing');
  };

  const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  useEffect(() => {
    const keys = document.querySelectorAll('.drum-pad');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    return () => {
      window.removeEventListener('keydown', playSound);
      const keys = document.querySelectorAll('.drum-pad');
      keys.forEach(key => key.removeEventListener('transitionend', removeTransition));
    };
  }, []);

 return (
    <div id="drum-pad" onKeyPress={(e) => playSound(e)}>
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

        
