import React, { useEffect, useRef, useState } from "react";
import './Nav.css'

import { AiOutlineHome } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';
import { BiGitBranch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { SiVisualstudiocode } from 'react-icons/si';

const navListzonas = [
    {
        name: "Inicio",
        icon: <AiOutlineHome />,
        direccion: "home",
        color: "",
        estado: false
    },
    {
        name: "Perfil",
        icon: <CgProfile />,
        direccion: "perfil",
        color: "",
        estado: false
    },
    {
        name: "Tecnologias",
        icon: <SiVisualstudiocode />,
        direccion: "tecnologias",
        color: "",
        estado: false
    },
    {
        name: "Proyectos",
        icon: <BiGitBranch/>,
        direccion: "portafolio",
        color: "",
        estado: false
    },
    {
        name: "Contactos",
        icon: <TbBrandTelegram />,
        direccion: "contacto",
        color: "",
        estado: false
    },
]

export default function Nav() {
    const [navActivo, setNavActivo] = useState(false);
    //const [zonas, setZonas] = useState()
    const navRef = useRef().current;
    

    useEffect(()=>{
        const lista = document.querySelectorAll(".nav-lista");
        function activelinknav(){
            lista.forEach((item)=> item.classList.remove("active"))
            this.classList.add("active");
        }
        lista.forEach(item => item.addEventListener("click", activelinknav))
    },[])
 
    return (
        <div className={`navegation ${navActivo ? "active" : ""}`}>
            <div className="menuToggle" onClick={() => setNavActivo(!navActivo)}></div>
            <ul >
                {navListzonas.map((list) => (
                    <li key={list.name} ref={navRef} className="nav-lista">
                        <a href={`#${list.direccion}`}>
                            <span className="nav-icono">{list.icon}</span>
                            <span className="nav-text">{list.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
