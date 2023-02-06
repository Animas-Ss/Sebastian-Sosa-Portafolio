import './Botones.css';


function Botones({contenido, handleModal}){

  
  return(
    <>
      <button className="btn-contacto" onClick={()=>handleModal()} >{contenido}</button>
    </>
  )
}

export default Botones;