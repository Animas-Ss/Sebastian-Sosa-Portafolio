import React, { useEffect, useRef } from "react";
import './NavResponsive.css'

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

export default function NavResponsive() {
    const resRef = useRef().current;
    

    useEffect(()=>{
        const lista = document.querySelectorAll(".responsive-lista");
        function activelinknav(){
            lista.forEach((item)=> item.classList.remove("active"))
            this.classList.add("active");
        }
        lista.forEach(item => item.addEventListener("click", activelinknav))
    },[])
 
    return (
        <div className="responsive">
            <ul >
                {navListzonas.map((list) => (
                    <li key={list.name} ref={resRef} className="responsive-lista">
                        <a href={`#${list.direccion}`}>
                            <span className="responsive-icono">{list.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
