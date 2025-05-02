import React from 'react';
import {Link} from 'react-router-dom'
 import './Navbar.css'; // Assuming you have a CSS file for styling


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Bolsacripto</h1>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/articles">Artigos</Link>
          <Link to="/about">Sobre</Link>
        </ul>
      </nav>
    </>
    
  );
}
export default Navbar;