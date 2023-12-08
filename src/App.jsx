import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Man></Man>
    </>
  );
}

function Man() {
  const age = 19
  return <h3>I am a person with age : {age}</h3>;
}

export default App;



