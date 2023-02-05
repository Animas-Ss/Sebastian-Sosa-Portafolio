import './Tecnologias.css';
import { SiDocker } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { SiMongodb } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { DiHtml5 } from 'react-icons/di';
import { useState, useEffect } from 'react';

import Pagination from './Pagination/Pagination';
import CardTecno from './CardTecno/CardTecno';

const tecnologiasDev = [
  {
    title: "docker",
    color: ["rgba(20,28,75,1)","rgba(60,77,199,1)","rgba(0,215,255,1)"],
    colorimg: "rgba(0,0,255,0.5)",
    estado: false,
    icon: <SiDocker/>
  },
  {
    title: "react",
    color: ["rgba(3,58,79,1)","rgba(60,199,195,1)","rgba(255,255,255,1)"],
    colorimg: "rgba(64, 207, 255, 0.8)",
    estado: false,
    icon: <SiReact/>
  },
  {
    title: "git",
    color: ["rgba(75,38,20,1)","rgba(199,102,60,1)","rgba(255,205,0,1)"],
    colorimg: "rgba(255,165,0,0.8)",
    estado: false,
    icon: <BiGitBranch/>
  },
  {
    title: "mongodb",
    color: ["rgba(23,56,14,1)","rgba(54,186,33,1)","rgba(61,255,0,1)"],
    colorimg: "rgba(0, 143, 57, 0.8)",
    estado: false,
    icon: <SiMongodb/>
  },
  {
    title: "css",
    color: ["rgba(20,28,75,1)","rgba(60,77,199,1)","rgba(0,215,255,1)"],
    colorimg: "rgba(0,0,255,0.5)",
    estado: true,
    icon: <IoLogoCss3/>
  },
  {
    title: "nodejs",
    color: ["rgba(23,56,14,1)","rgba(54,186,33,1)","rgba(61,255,0,1)"],
    colorimg: "rgba(0, 143, 57, 0.8)",
    estado: false,
    icon: <IoLogoNodejs/>
  },
  {
    title: "javascript",
    color: ["rgba(74,75,20,1)","rgba(198,191,46,1)","rgba(245,255,0,1)"],
    colorimg: "rgba(255,180,0,0.8)",
    estado: false,
    icon: <TbBrandJavascript/>
  },
  {
    title: "tailwind",
    color: ["rgba(3,58,79,1)","rgba(60,199,195,1)","rgba(255,255,255,1)"],
    colorimg: "rgba(64, 207, 255, 0.8)",
    estado: false,
    icon: <SiTailwindcss/>
  },
  {
    title: "html5",
    color: ["rgba(79,3,8,1)","rgba(186,185,33,1)","rgba(255,244,0,1)"],
    colorimg: "rgba(255,0,0, 0.8)",
    estado: false,
    icon: <DiHtml5/>
  },
  
]


function Tecnologias() {
  //parte para paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  
   useEffect(()=>{
     if(window.screen.width < 728){
    setPostPerPage(3)
     console.log(postPerPage)
   }else{
    setPostPerPage(6) 
   }
   }, [window.screen.width])

  // estado de los botones 
  const [dev, setDev] = useState({
    title: "html5",
    color: ["rgba(79,3,8,1)","rgba(186,185,33,1)","rgba(255,244,0,1)"],
    colorimg: "rgba(255,0,0, 0.8)",
    estado: false,
    icon: <DiHtml5/>
  });

 // variables para determinar la cantidad de elementos de cada pagina
  const lastPostIndex = currentPage * postPerPage;
  const firtPostIndex = lastPostIndex - postPerPage;
 
  let currentPost = tecnologiasDev.slice(firtPostIndex, lastPostIndex);

  //funcion para enviar la tecnologia
  const handleTecnologia = (tecnologia, e) => {
   setDev({...tecnologia, estado: !tecnologia.estado})
  }
  
  //setInterval(()=>{
  //  if(dev.title === ""){
  //  const rnd = Math.random() * tecnologiasDev.length;
  //  const index = Math.floor(rnd);
  //  const tecnoDev = tecnologiasDev[index];
   // setDev(tecnoDev);
   // }
   // return
  //},5000);
  return (
    <>
      <div className='tecnologias-container'>
        <div className='tecnologias'>
          {
            currentPost.map((tecnologia)=>(
            <div className='tec' key={tecnologia.title}>
              <div className="card-tecno-info">
            <div 
              className='tec-header' 
              style={{
                background: `linear-gradient(90deg,
                ${tecnologia.color[0]} 0%,
                ${tecnologia.color[1]} 35%,
                ${tecnologia.color[2]} 100%)`
              }}>
            </div>
            <button className='tec-header-icono' name={tecnologia.title} onClick={(e)=>handleTecnologia(tecnologia, e)} value={tecnologia.estado}>
              {tecnologia.icon}
            </button>
            <div className='tec-title-contenedor'>
              <h4 className='tec-titulo'>{tecnologia.title}</h4>
            </div>
            <div className='icon-docker' style={{color:`${tecnologia.colorimg}`}} >
              {tecnologia.icon}
            </div>
          </div>
              </div>
            ))
          }
        </div>
        <div className="container-paginacion">
          <Pagination 
            totalPosts={tecnologiasDev.length} 
            postPerPage={postPerPage} 
            setCurrentPage={setCurrentPage} 
            currentPage={currentPage}/>
        </div>
        <div className="container-card-select">
            <CardTecno dev={dev} tecnologiasDev={tecnologiasDev} setDev={setDev}/>
        </div>
      </div>
    </>
  )
}

export default Tecnologias;