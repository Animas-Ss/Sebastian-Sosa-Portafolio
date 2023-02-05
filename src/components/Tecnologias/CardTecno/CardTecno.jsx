
import './CardTecno.css';

const CardTecno = ({dev, tecnologiasDev, setDev}) => {

  //console.log(dev.title)
  //console.log(tecnologiasDev)

  // muchos intentos de filtrar el que quiero cambiar y solo habia que hacer la comparacion en el recorrido del map
  
  
  return(
    <div className="conteiner-cardtecno">
      {
        tecnologiasDev.map((t) => (
          <div className={`card-tecno ${ t.title === dev.title ? "activo-card-tec" : ""}`} key={t.title}>
            <div className={`card-tecno-header`} style={{
                background: `linear-gradient(90deg,
                ${t.color[0]} 0%,
                ${t.color[1]} 35%,
                ${t.color[2]} 100%)`
              }}></div>
            <div className='card-tecno-header-icono'>
              {t.icon}
            </div>
            <div className='card-tecno-title-contenedor'>
              <h4 className='card-tecno-titulo'>{t.title}</h4>
            </div>
            <div className='card-icon-docker' style={{color:`${t.colorimg}`}}>
              {t.icon}
            </div>
      </div>
        ))
      }
    </div>
  )
}

export default CardTecno;