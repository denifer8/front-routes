import React, { useState } from 'react'

export default function FIltro(props) {
    const {setVuelos} = props;
  return (
    <div>FIltro
        <button onClick={setVuelos}>Buscar</button>
    </div>
  )
}
