import { useEffect } from 'react';
import '../css/DrumPad.css';
import drumPads from './drumpads';

const DrumPad = (props) => {

  const playSound = (e) => { 
    
    const key = e.type === 'click' ? e.target.dataset.key : e.key.toUpperCase();
    
    const audio = document.querySelector(`#${key}`);
    const div = e.type === 'click' ? e.target : document.querySelector(`[data-key="${key}"]`);
    const label = div.id;

    if (!audio) return;
  
    props.setPlaying(label);
    div.classList.add('playing');  
      
    audio.currentTime = 0;
    audio.play();    
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

        
