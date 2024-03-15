import React from "react";
import Quiz from './Components/Quiz/Quiz.jsx';
import './App.css';

const App = () => {
  return(
    <>
      <h1 className="encabezado">Te sabes las capitales</h1>
      <Quiz/>
    </>
  )
}

export default App