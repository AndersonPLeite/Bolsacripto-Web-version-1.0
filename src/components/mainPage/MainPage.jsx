import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import bitcoin from "../../assets/bitcoin-logo.png";
import ethereum from "../../assets/ethereum.png";
import solana from "../../assets/solana.png";
import tether from "../../assets/tether.png";

export default function AnimatedShapes() {
  const circleRef = useRef(null);
  const triangleRef = useRef(null);
  const squareRef = useRef(null);
  const tetherRef = useRef(null);
  const loopCounterRef = useRef(null);

  useEffect(() => {
    const timeline = anime.timeline({
      loop: true,
      delay: 500,
      update: anim => {
        if (loopCounterRef.current) {
          loopCounterRef.current.innerHTML = Math.floor(anim.currentTime / anim.duration);
        }
      }
    });

    timeline
      .add({
        targets: circleRef.current,
        translateX: '28rem',
        duration: 1000
      })
      .add({
        targets: triangleRef.current,
        translateX: '24rem',
        duration: 1000
      }, '-=700')
      .add({
        targets: tetherRef.current,
        translateX: '27rem',
        duration: 1000
      }, '-=500')
      .add({
        targets: squareRef.current,
        translateX: '74rem',
        duration: 1000
      }, '-=500');
  }, []);
  
  return (
    <main>
        <div style={{containerStyle}}>
            <div ref={loopCounterRef} className="loops" style={{ marginBottom: '1rem', fontWeight: 'bold' }} />
            <img ref={circleRef} src={bitcoin} alt="Bitcoin-logo" style={svgStyle} />
            <img ref={squareRef} src={solana} alt="Solana-logo" style={svgStyle} />
            <img ref={triangleRef} src={ethereum} alt="Ethereum-logo" style={svgStyle} />
            <img ref={tetherRef} src={tether} alt="Tether-logo" style={svgStyle} />
        </div>
    </main>
   
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center',
  height: '100vh', 
  padding: '2rem',
};
const svgStyle = {
    width: '200px',
    height: '200px',
    margin: '2rem 0'
    
  };
