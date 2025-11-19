"use client"

import Button from "@/components/Button"
import Editar from "@/components/Editar";
import Input from "@/components/Input";
import { use, useEffect, useState } from "react"

export default function hola() {

  const [cambio, setCambio] = useState("");
  const [autores, setAutores] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tetso, setTetso] = useState('');
  const [autorSelect, setAutorSelect] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [edadN, setEdadN] = useState('');

  /*
  useEffect(() => {
      fetch('http://localhost:3001/saludo')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setMensaje(data.mensaje);
              setCarga(false);
          });
  }, []);
  */

  useEffect(() => {
      fetch('http://localhost:3001/autores')
          .then(response => response.json())
          .then(data => {
            console.log("Autores:", data)
            setAutores(data);
          });
  }, []);
  

   function traerAutores() {
    console.log("Autores:", autores)
   }

   function modificarAutor() {
        if (!autorSelect) {
            alert("Debes seleccionar un autor primero");
            return;
        }

        if (!edadN || edadN === "") {
            alert("Debes ingresar una edad");
            return;
        }

        // Hacer el pedido PUT
        fetch(`http://localhost:3001/modificarAutor?autor=${autorSelect}&edad=${edadN}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert("Autor modificado exitosamente");
            
            // Recargar la lista de autores
            fetch('http://localhost:3001/autores')
                .then(response => response.json())
                .then(data => {
                    setAutores(data);
                    setEdadN("");
                });
        })
        .catch(error => {
            console.error("Error al modificar autor:", error);
            alert("Error al modificar el autor");
        });
    }
  


  if (autores == undefined) {
    console.log("sos un pelotudo")
  }

  const cambiante = (event) => {
    console.log("Valor actual:", event.target.value);

    setTetso(event.target.value);
  }



  return (
    <>
      <div>
        <h1>Respuesta del Backend</h1>
        <p>{mensaje}</p>
      </div>
        <h2>Lista de Autores</h2>
        <div className="mano">
        <select name="autores" onChange={(event)=> setAutorSelect(event.target.value)}>
          {autores.length != 0 && autores.map((autor) => {
          <option value={autor.nombre} key={autor.id}>{autor.nombre}, Edad: {autor.edad} </option>
          }
        )}
        </select>
        {autorSelect && (<div>
          <p>Autor seleccionado: {autorSelect}</p>
        </div>
        )}
      </div>
        <Button
        text="soy gay"
        onClick={traerAutores}
        ></Button>
        <br></br>
        <Input
        type="checkbox"
        checked={checkbox}
        onChange={(e) => setCheckbox(e.target.checked)}
        ></Input>
        <br></br>
        <h3>Editar Edad de: {autorSelect || "Ningún autor seleccionado"}</h3>
        <br></br>
        <div style={{
          opacity: checkbox ? 1 : 0
        }}>  
          <Editar
            placeholder="Edad a cambiar"
            placeholder2="Edad cambio"
            onChange={(e) => setEdadN(e.target.value)}
            value={edadN}
            text="Modificar autor"
            onClick={modificarAutor}
            disabled={!checkbox}></Editar>
        </div>
                    
    </>
  );
}