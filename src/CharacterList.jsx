import React, { useState } from "react";

const CharacterList = ({ characters }) => {
  const [search, setSearch] = useState([]);

  return (
    <><input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)} />

      <div className="container">
        {characters.filter((value) => {
          if (search == "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return value
          }
        })
          .map((item, key) => (
            <div className="card" onClick="handleClick"> {/*Criar essa função */}
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="characterName" key={key}>
                <h5>{item.name}</h5>
                <h5>Specie:{item.species}</h5>
                <h5>Genero:{item.gender}</h5>
              </div>
            </div>


          ))}

      </div></>

  );
};

export default CharacterList;
