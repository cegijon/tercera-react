import React from 'react';
import './App.css';
import TarjetaDeAlumna from './TarjetaDeAlumna';


const alumnas = ["Celi", "Flor", "Guada", "Sofi"]

function App() {
  return (
    <div className="App">
      {
        alumnas.map((alumna, i) => <TarjetaDeAlumna key={i} nombreDeAlumna={alumna} />

        )
      }
    </div>
  );
}

export default App;
