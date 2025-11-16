"use client"

import Button from "@/components/Button"
import { useEffect, useState } from "react"

export default function hola() {

  const [cambio, setCambio] = useState("");

  function apellido() {
    setCambio(cambio + "Hanazono")
  }

  useEffect(() => {
      if (cambio == "Hanazono") {
          console.log("alta chad esa")
          setCambio("")
      }
  }, [cambio])


  return (
    <>
      <h2>Hakari: {cambio}</h2>
      <Button
        text="Memato"
        onClick={apellido}
      ></Button>
    </>
  )
}