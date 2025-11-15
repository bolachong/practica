"use client"

import { useState, useEffect } from "react"
import Button from "@/components/Button"


export default function Autores() {
  const [autores, setAutores] = useState([])

  useEffect(() => {
    const obtenerAutores = async () => {
      try {
        const response = await fetch("http://localhost:4000/autores")
        const data = await response.json()
        setAutores(data.autores || data)
      } catch (error) {
        console.error("Error al obtener autores:", error)
      }
    }

    obtenerAutores()
  }, [])

  return (
    <div>
      <h1>Autores</h1>
      <ul>
        {autores.map((autor, index) => (
          <li key={index}>{autor.nombre}</li>
        ))}
      </ul>
    </div>
  )
}