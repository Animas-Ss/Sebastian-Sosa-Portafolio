import './Nabvar.css';
import {useState} from 'react';
import {BiChevronsDown} from 'react-icons/bi';

function Navbar() {
  const [deslizar, setDeslizar] = useState(false);

  const handleDeslizar = () =>{
    setDeslizar(!deslizar);
  }
  //para darle estilos o movimiento con javascript determinamos un estado y mediante a ese estado le damos estilos a nuestros elementos sin usar uref
  // luego dependiendo de ese estado le asignamos una clase 
  return (
    <>
      <div className={`nav-bar ${ deslizar ? "nav-bar-expancion" : null }`}>
        <div className='nav-logo'>
          <h2 className='animas'>Animas</h2>
          <small className='nombre'>Sosa Sebastian</small>
        </div>
        
        <button 
        className={`nav-download ${ deslizar ? "girar-boton": null}`}
        onClick={handleDeslizar}
        >
        <BiChevronsDown/>
        </button>
       <div className={`nav-list-perfil`}>
         <div className={`nav-ul ${deslizar? "nav-ul-act" : ""}`}>
            <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#perfil'>Perfil</a></li>
            <li><a href='#portafolio'>Portafolio</a></li>
            <li><a href='#tecnologias'>Tecnologias</a></li>
            <li><a href='#contacto'>Contacto</a></li>
          </ul>
         </div>
        </div>
      </div>

    </>
  )
}

export default Navbar;