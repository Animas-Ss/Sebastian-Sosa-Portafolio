import {useState} from "react";
import './App.css'
import Nabvar from './components/Nabvar/Nabvar.jsx';
import Search from './components/Search/Search.jsx';
import Nombre from './components/About/Nombre.jsx';
import Portafolio from './components/Portafolio/Portafolio.jsx';
import PrincipalImg from './components/PrincipalImg/PrincipalImg.jsx';
import SobreMi from './components/SobreMi/SobreMi.jsx';
import Tecnologias from './components/Tecnologias/Tecnologias.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Footer from './components/Footer/Footer.jsx';
import Nav from "./components/Nabvar/Nav";


export default function App() {

  
  const [mocontacto, setMocontacto] = useState(false);
  
  const handleModal = () =>{
    setMocontacto(!mocontacto)
    console.log("contacto");
  }
  
  return (
    <>
      {//<Nabvar />
      }
      <Nav/>
      <header id="home">
      <Search />
      { mocontacto &&
        (<div className="modal-contacto">
           <Contacto/>
          <button onClick={handleModal} className="btn-close">X</button>
        </div>
        )
      }
      </header>
      <article className="container c-responsive">
        <Nombre setMocontacto={setMocontacto} handleModal={handleModal}/>
        <PrincipalImg />
      </article>
      <article className="container-sobre" id="perfil">
       <SobreMi />
      </article>
      <article className='container-sobre-tecnologias' id="tecnologias">
        <Tecnologias/>
      </article>
      <article className='container-sobre' id="portafolio">
        <Portafolio/>
      </article>
      <article className='container-sobre-contacto' id="contacto">
        <Contacto/>
      </article>
      <footer className='container-footer' id='footer-animas'>
        <Footer/>
      </footer>
    </>
  )
}
