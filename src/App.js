import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [resData, setResData] = useState([]);
  const fetchPoke = ()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res=>{ setResData(res.data.results) })
    
  }

  return (
    <div className="App">
      <button onClick={ fetchPoke } >Fetch Pokemon</button>
      <div>
            {resData.length > 0 && resData.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    </div>
  );
}

export default App;
