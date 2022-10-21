import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [ filmes, setFilmes ] = useState()

  function getAllFilmes() {
    const options = {
      method: 'GET',
    
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR', options)
      .then(response => response.json())
      .then(response => { console.log(response); setFilmes(response.results) })
      .catch(err => console.error(err));
      
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button class="listar" onClick={getAllFilmes}>Filmes Lancamento</button>

        <div class="filmes">
          {filmes && filmes.map((camp, index) => (
            <div className="item-container">
              <p>filmes: <span>{ camp.original_title }</span></p>
              <p>Status: <span>{ camp.realease_date }</span></p>

              <img src={`https://image.tmdb.org/t/p/w500${camp.backdrop_path}`}></img>
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;