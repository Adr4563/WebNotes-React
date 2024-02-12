import './App.css'
import React, { useState } from 'react';

const [Notes, setNotes] = React.useState([]);

const crearNota = () =>{
  const nuevaNota = document.getElementById('miTextarea').value;
  console.log(nuevaNota);
}


function App() {

  return (
  <div>  
    <br/>
      <h1 >Mis Notas</h1>
    <br/>
      <form><textarea id = "miTextarea"  placeholder="Algo para recordar..."/></form>
    <br/>
      <button type='button' onClick={crearNota} >Crear</button>   
  </div>

  )
}

export default App
