import skin1 from "./assets/skin1.webp";
import skin2 from "./assets/skin2.webp";
import skin3 from "./assets/skin3.webp";
import skin4 from "./assets/skin4.webp";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div>
        <img src={skin1}></img>
        <img src={skin2}></img>
        <img src={skin3}></img>
        <img src={skin4}></img>
      </div>
      <div></div>
    </div>
  );
}

export default App;
