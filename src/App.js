import React from "react";
import React, {useState} from 'react';
import "./style.css";

function Clicker (){
  const [clicks, setClicks] = useState(0);
  const [lastClick, setLastClick] = useState();
  
  function addClick(){
    setClicks(clicks + 1);
    setLastClick(new Date().toISOString());

  

  }
  console.log(clicks);

  return ( 
    <>
    <button onClick={addClick}>Clickme {clicks} </button>
    <p>Fecha ultimo click: {lastClick}</p>
    </>
  )
}

export default function App() {
  return (
    <div>
      <h1>Clicker</h1>
      <Clicker />
      
    </div>
  );
}
