import React, { useState } from 'react'
import FIltro from '../components/FIltro'
import Listado from '../components/Listado'

export default function Home() {
    const [vuelos, setVuelos] = useState([])
  return (
    <div>Home
        { vuelos.length === 0 && <FIltro setVuelos={setVuelos}/> }
        { vuelos.length !== 0 && <Listado vuelos={vuelos} vaciarLista={()=>setVuelos([])} />}
    </div>
  )
}
