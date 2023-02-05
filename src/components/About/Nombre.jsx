import './Nombre.css';
import Botones from '../Botones/Botones';
import Curriculum from '../../assets/javascript.pdf';


function Nombre({handleModal, setMocontacto}) {
 const handleDowload = () => {
   console.log("descarga")
 }
  return (
    <>
      <div className='about-nombre'>
        <div className='about-apellido'>
          <h2 className='about-apellido_1'>Sosa</h2>
        </div>
        <div className='about-nom'>
          <h2 className='about-nombre_1'><span>S</span><span>e</span><span>b</span><span>a</span><span>s</span><span>t</span><span>i</span><span>a</span><span>N</span></h2>
        </div>
        <div className="about-leyenda">
          <p>Experiencia en Front-End / Desarollador web, full stack JavaScript</p>
        </div>
        <div className='about-botones'>
          <Botones contenido={"Contacto"} handleModal={handleModal} setMocontacto={setMocontacto}/>
          <a href={Curriculum} download="Sosa Sebastian"><Botones contenido={"Descargar C.V"} handleModal={handleDowload}/></a>
        </div>
      </div>
    </>
  )
}

export default Nombre;