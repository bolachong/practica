"use client"

import Button from "@/components/Button"
import { useEffect, useState } from "react"

export default function hola() {

  const [cambio, setCambio] = useState("");
  const [autores, setAutores] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [carga, setCarga] = useState(true);

  useEffect(() => {
      fetch('http://localhost:3001/saludo')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setMensaje(data.mensaje);
              setCarga(false);
          });
  }, []);

      fetch('http://localhost:3001/autores')
          .then(response => response.json())
          .then(data => console.log(data));
      
      

  if (carga) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div>
        <h1>Respuesta del Backend</h1>
        <p>{mensaje}</p>
      </div>
    </>
  );
}