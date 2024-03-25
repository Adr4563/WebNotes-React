import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  
  // 1. Create Note
  const createNote = (event) => {
    event.preventDefault();
    const newNote = event.target.elements.miTextarea.value.trim();

    if (newNote === "") {
      return;
    }

    setNotes([...notes, newNote]);
    event.target.reset();
  };

  // 2. Delete Note
  const deleteNote = (index) => {
    const nuevasNotas = notes.filter((_, i) => i !== index);
    setNotes(nuevasNotas);
  };

  return (
    <>
      <div>

        <br/>
          <h1>My Notes</h1>
        <br/>

        <form onSubmit={createNote}>
          <textarea id="miTextarea" name="miTextarea" placeholder="Something to remember..."></textarea>
          <button className="button1" type='submit'>Create</button>
        </form>
        
        {notes.map((nota, index) => (
          <div className='form2' key={index}>
            <textarea readOnly value={nota}></textarea>
            <button className="button2" onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}

      </div>
    </>
  );
}

export default App;