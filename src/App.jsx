//imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import CharacterList from "./Components/CharacterList/CharacterList";
import Headers from "./Components/Headers/Header";

//style
import "./App.css";
import "./Components/CharacterList/CharacterList.css";
import "./Components/Headers/Header.css";

//main function
function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";
  const [blackHeader, setBlackHeader] = useState(false);

  //fazendo aquisições na API com AXIOS
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
  //função para lidar a paginação(next page)
  const handleNextPage = () => {
    fetchCharacters(info.next);
  };
  //função para lidar a paginação(next page)
  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  //função para controlar o header
  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollPage);

    return () => {
      window.removeEventListener("scroll", scrollPage);
    };
  }, []);

  return (
    <div className="container py-5">
      <Headers black={blackHeader} />
      <CharacterList characters={characters} />
      <div className="container pb-5">
        <ul className="pagination2">
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
      </div>
      <footer>
        <div className="footer">
          <h1>By Mateus Henrique de Oliveira Silveira.</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
