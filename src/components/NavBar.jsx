import React from 'react'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom"

function NavBar({onSearch, logout}) {
  return (
    <div>
        <SearchBar onSearch={onSearch} />
        
          <Link to={"/home"}>
            <button>
                Home
            </button>
          </Link>

          <Link to={"/about"}>
            <button>
                About
            </button>
          </Link>

          <Link to={"/favorites"}>
          <button>
                Favorites
            </button>
          </Link>

          <button onClick={logout}>Logout</button>
    </div>
  )
}

export default NavBar