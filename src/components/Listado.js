import React, { useState } from 'react'

export default function Listado(props) {
    const {vaciarLista} = props
  return (
    <div>Listado
        <button  onClick={vaciarLista}>Back</button>
    </div>
  )
}
