import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Bolsacripto</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </>
    
  );
}
export default Navbar;