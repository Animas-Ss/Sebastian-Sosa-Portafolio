import './Botones.css';
import Contacto from '../Contacto/Contacto.jsx';

function Botones({contenido, setMocontacto, handleModal}){

  
  return(
    <>
      <button className="btn-contacto" onClick={()=>handleModal()} >{contenido}</button>
    </>
  )
}

export default Botones;