import './BotonLuz.css';
import { GrSoundcloud } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import Demon from '../../assets/Slayer.mp3';

//importar musica en un objeto
const music = {
  slayer: Demon
}
//hook para reproducir musica
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  //funcion de cambio de estado
  const toggle = () => setPlaying(!playing);

  //efecto para escuchar el cambio de estado
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  //efecto que prende se fija si al musica esta prendida si esta prendida la apaga en false , despues retorna eso
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  //como todo hook retornamos nuestros estados 
  return [playing, toggle];
};

function BotonLuz() {

  //usamos el hook de audio que creamos este hook nos sirve apra todos los botones que quieramos 
  const [playing, toggle] = useAudio(music.slayer)

  return (
    <>
      <label className='music'>
        <input
          type="checkbox"
          name="musica"
          className="music-input"
          onChange={toggle}
          value={playing}
        />

        <div className='music-icono'>
          <div className='music-icono-box'>
              <GrSoundcloud className='music-icono-box_tono'/>
          </div>
        </div>
      </label>
    </>
  )
}

export default BotonLuz;