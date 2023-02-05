import './Portafolio.css';
import { useState, useRef, useEffect } from 'react';


const proyectos = [
  {
    nombre: "Rick y Morty",
    img: "https://poptv.orange.es/wp-content/uploads/sites/3/2018/03/Rick-and-Morty-3p-1100x619.jpg",
    descripcion: "Proyecto desarroyado con React, y consumiendo la API de Rick y Morty",
    tecnologias: "React",
    src: ""
  },
  {
    nombre: "Chat",
    img: "https://img.freepik.com/vector-premium/diseno-logo-chat_93835-108.jpg",
    descripcion: "Aplicaicon creada con React y Socketio, estilos propios .",
    tecnologias: "React",
    src: ""
  },
  {
    nombre: "Detector de IP",
    img: "https://st4.depositphotos.com/15833800/20324/v/600/depositphotos_203248578-stock-illustration-letters-logo-ip-template-for.jpg",
    descripcion: "desarrolado con node js consumiendo una api y usando un servicio de mails para el aviso masivo",
    tecnologias: "Node Js",
    src: ""
  }
]

function Portafolio() {
  const [panal, setPanal] = useState(false);

  setInterval(() => {
    setPanal(!panal)
  }, 20000);
  //const handlePortafolio = (e) => {
  //  console.log(e.target)
  //  setPanal(!panal)
  //}

  return (
    <>
      <div className="portafolio">
        <ul className="team">
          {proyectos.map((proyecto) => (
            <li className="member co-funder" key={proyecto.nombre}>
              <div className="thumb">
                <img src={proyecto.img}></img>
              </div>
              <div className="description">
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
        {//<img src={corazon} className="portafolio-corazon"></img>
          //<img src={corazon} className="portafolio-corazon-2"></img>
        }
      </div>
    </>
  )
}

export default Portafolio;