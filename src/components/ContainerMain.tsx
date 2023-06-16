import { useState } from "react";
import skin1 from "../assets/skin1.webp";
import skin2 from "../assets/skin2.webp";
import skin3 from "../assets/skin3.webp";
import skin4 from "../assets/skin4.webp";
import { flushSync } from "react-dom";
const ContainerMain = () => {
  const [isThumbnail, setIsThumbnail] = useState(true);
  const [selectedPic, setSelectedPic] = useState(null);
  const skins = [skin1, skin2, skin3, skin4];

  const handleMove = () => {
    function updateTheDOMSomehow() {
      flushSync(() => {
        setIsThumbnail((prev) => !prev);
      });
    }
    document.startViewTransition(() => {
      updateTheDOMSomehow();
    });
  };
  const testHandle = (e) => {
    e.currentTarget.style.viewTransitionName = "skinItem";
    setSelectedPic(e.target.src);
    handleMove(e);
  };
  return (
    <div className="container">
      {isThumbnail && (
        <div className="skins-list">
          {skins.map((skin, index) => (
            <img src={skin} key={index} onClick={(e) => testHandle(e)} />
          ))}
        </div>
      )}
      {!isThumbnail && selectedPic && (
        <div className="skin">
          <img src={selectedPic} onClick={handleMove}></img>
        </div>
      )}
    </div>
  );
};

export default ContainerMain;
/* <div className="about">
          <img src={selectedPic} onClick={handleMove} className="gun-img"></img>
          <footer>
            <img src={skin2}></img>
            <img src={skin3}></img>
            <img src={skin4}></img>
          </footer>
        </div> */
