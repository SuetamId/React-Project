import React from "react";



function Header({black}) {
  return (
      <header className={black ? 'black' : ''}>
          <div className='logo'>
          <a href="/">
           <img src="https://kickprint.com/wp-content/uploads/2020/08/Rick-and-Morty-LOGO.png" alt="logo"  />
          </a>
          </div>
    
          <div className="Favorite-character">
            <button>
              Favoritos
            </button>
          </div>
         
      </header>
  )

}
export default Header;