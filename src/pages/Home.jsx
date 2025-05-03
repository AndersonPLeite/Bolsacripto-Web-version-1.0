import React from 'react';
import MyLogo from '../assets/solana.svg'; 
import anime from 'animejs/lib/anime.es.js';
import './home.css'; 

export default function RotatingLogo() {
  return (
    <div className="animate__animated animate__fadeIn">
      <img src={MyLogo} alt="Logo" className="spin" width="150" />
    </div>
  );
}


