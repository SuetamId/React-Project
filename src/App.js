import React, { useEffect, useState } from "react";
import axios from "axios";
import Headers from './Components/Headers'

// components

import CharacterList from "./CharacterList";


//style
import "./App.css";
import "./CharacterList.css";
import "./Components/Header.css"

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

 


  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      }) 
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
  
      <div className="container py-5">
          <Headers/>
        <CharacterList characters={characters} />
        <div className="container pb-5">
          <nav>
            <ul className="pagination 2">
              {info.prev ? (
                <li className="page-item">
                  <button className="page-link" onClick={handlePreviousPage}>
                    Anterior
                  </button>
                </li>
              ) : null}
              {info.next ? (
                <li className="page-item">
                  <button className="page-link" onClick={handleNextPage}>
                    Proximo
                  </button>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
      
  );
}

export default App;
