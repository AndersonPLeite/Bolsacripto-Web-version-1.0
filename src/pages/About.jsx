import React from "react";

const textStyle = {
    fontSize: '24px',
    color:' #03053b',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

function About(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={textStyle}>
                Nossa missão é facilitar o acesso de novos investidores ao mercado financeiro.
            </h1>
        </div>
       
    )
}


  

export default About



