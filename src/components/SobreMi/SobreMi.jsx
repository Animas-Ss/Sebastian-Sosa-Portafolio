import SobreMano from '../../assets/pngegg.png';
import { useState } from 'react';
import './SobreMi.css';

function SobreMi() {

  const [menuInfo, setMenuInfo] = useState({
    disciplina: false,
    aprender: false,
    crecer: false,
    desarrollar: false,
  });
  const [manos, setManos] = useState(false)

  const handlePintar = (e) => {
    setManos(!manos)
    setMenuInfo(() => ({
      [e.target.name]: !e.target.name.value,
    })
    )
  }

  return (
    <>
      <div className="sobre-contenedor">
        <div className={`sobre-disciplina ${menuInfo.disciplina ? "activo-arriba" : null}`}>disciplina</div>
        <div className={`sobre-disciplina-inferior ${menuInfo.disciplina ? "activo-inferior" : null}`}>disciplina</div>
        <div className={`sobre-disciplina ${menuInfo.crecer ? "activo-arriba" : null}`}>crecer</div>
        <div className={`sobre-disciplina-inferior ${menuInfo.crecer ? "activo-inferior" : null}`}>crecer</div>
        <div className={`sobre-disciplina ${menuInfo.aprender ? "activo-arriba" : null}`}>aprender</div>
        <div className={`sobre-disciplina-inferior ${menuInfo.aprender ? "activo-inferior" : null}`}>aprender</div>
        <div className={`sobre-disciplina ${menuInfo.desarrollar ? "activo-arriba" : null}`}>desarrollar</div>
        <div className={`sobre-disciplina-inferior ${menuInfo.desarrollar ? "activo-inferior" : null}`}>desarrollar</div>
        <div className='sobre-imagen'></div>
        <div className='sobre-informacion'>
          <span></span>
          <div className='sobre-informacion-datos'>
            <img src={SobreMano} 
              name="manos" 
              className={`sobre-image-abajo ${manos ? "activo-image-abajo" : null}`} alt="manos robot"/>
            <img src={SobreMano} 
              name="manos" 
              className={`sobre-image-arriba ${manos ? "activo-image-arriba" : null}`} alt="manos robot"/>
            <div className='sobre-informacion-titulo'>
              {menuInfo.disciplina && <h3>DICIPLINA</h3>}
              {menuInfo.crecer && <h3>CRECER</h3>}
              {menuInfo.aprender && <h3>APRENDER</h3>}
              {menuInfo.desarrollar && <h3>DESARROLLAR</h3>}
            </div>
            <div className='sobre-informacion-contenido'>
              {menuInfo.disciplina && <p>"Es una cualidad fundamental para poder aprender y llegar a lograr las metas propuestas"</p>}
              {menuInfo.crecer && <p>"Todo lo que hacemos es para poder crecer en todos los roles que ejercemos en la vida . no solo en el habiente profecional . crecer es lo que me motiva"</p>}
              {menuInfo.aprender && <p>"es fundamental en mi vida , ya que siempre hay algo que no sabemos"</p>}
              {menuInfo.desarrollar && <p>"Con el desarrollo , me refiero a todo desarrollar proyectos , desarrollarme como profecional, desarrollar mis conocimientos"</p>}
            </div>
          </div>
        </div>
        <div className='sobre-informacion-menu'>
          <button
            name="disciplina"
            onClick={handlePintar}
            value={menuInfo.disciplina}
            className="saber-boton-disciplina"
          >
            Disciplina
          </button>
          <button
            name="aprender"
            onClick={handlePintar}
            value={menuInfo.aprender}
            className="saber-boton-aprender"
          >
            Aprender
          </button>
          <button
            name="desarrollar"
            onClick={handlePintar}
            value={menuInfo.desarrollar}
            className="saber-boton-desarrollar"
          >
            Desarrollar
          </button>
          <button
            name="crecer"
            onClick={handlePintar}
            value={menuInfo.crecer}
            className="saber-boton-crecer"
          >
            Crecer
          </button>
        </div>
      </div>
    </>
  )
}

export default SobreMi;