import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './Contacto.css';

function Contacto() {
  const [contacto, setContacto] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: ""
  });

  const [avion, setAvion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setAvion(!avion)
    emailjs.sendForm('service_w9j9whw', 'template_r8uqa6a', e.target, 'vmmtkeadVj4mhtHQc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });


    setContacto({
      nombre: "",
      asunto: "",
      email: "",
      mensaje: ""
    })
  }

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setContacto((old) => ({ ...old, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <div className="container-contacto">
        <div className="formulario-completo">
          <div className="formulario-derecha">
            <div className="formulario-nombre">
              <h3>CONTACTO</h3>
            </div>
            <div className={`formulario-avion ${avion ? "viaje" : ""}`}>
            </div>
          </div>
          <div className="formulario-izquierda">
            <div className="formulario-izquierda-header">
              <h3>Envia tu preguntas</h3>
              <small>Gracias por contactarme</small>
            </div>
            <form className="formulario-izquierda-datos" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input type="text"
                  name="nombre"
                  required="required"
                  onChange={handleChange}
                  value={contacto.nombre}
                />
                <span>Nombre:</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="text"
                  name="asunto"
                  required="required"
                  onChange={handleChange}
                  value={contacto.asunto}
                />
                <span>Asunto:</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="email"
                  name="email"
                  required="required"
                  onChange={handleChange}
                  value={contacto.email}
                />
                <span>E-mail:</span>
                <i></i>
              </div>
              <div className="inputBox">
                <textarea rows="2"
                  name="mensaje"
                  required="required"
                  onChange={handleChange}
                  value={contacto.mensaje}
                />
                <span>Mensaje:</span>
                <i></i>
              </div>
              <div className="formulario-izquierda-botones">
                <button className="formulario-btn">
                  <i className={`btn-avion-icono ${avion ? "avion-activo" : ""}`}></i>
                  {avion ? "Enviado" : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto;
