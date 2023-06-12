import { useState } from "react";
import './Test.module.css'
const Test = () => {
  const [state, setState] = useState(0);
  const handleCLick = () => {

    function updateTheDOMSomehow() {
      setState(state + 1);

    }
    document.startViewTransition(() => updateTheDOMSomehow())
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        fontSize: "2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        cursor: "pointer",
      }}

    >
      <h2 className="username" onClick={handleCLick}>Etaelith:</h2>
      <span className="number" id="number"> {state}</span>
    </div>
  );
};

export default Test;
