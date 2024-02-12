import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const crearNota = () => {
    const newNote = document.getElementById('miTextarea').value;
    console.log(newNote);
    setNotes([...notes, newNote]);
    document.getElementById('miTextarea').value = '';
  };

  const eliminarNota = (index) => {
    const nuevasNotas = notes.filter((_, i) => i !== index);
    setNotes(nuevasNotas);
  };

  return (
    <>
      <div>
        <br />
        <h1>Mis Notas</h1>
        <br />
        <form className='form1'>
          <textarea id="miTextarea" placeholder="Algo para recordar..."></textarea>
        </form>
        <form>
          <button className = "button1" type='button' onClick={crearNota}>Crear</button>
        </form >
        {notes.map((nota, index) => (
          <div className='form2'>
            <textarea id="miTextarea" key={index}>{nota}</textarea>
            <button className="button2"  onClick={() => eliminarNota(index)}>Borrar</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
