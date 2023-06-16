import { useState } from "react";
import skin1 from "../assets/skin1.webp";
import skin2 from "../assets/skin2.webp";
import skin3 from "../assets/skin3.webp";
import skin4 from "../assets/skin4.webp";
import { flushSync } from "react-dom";
const ContainerMain = () => {
  const [isThumbnail, setIsThumbnail] = useState(true);
  const [selectedPic, setSelectedPic] = useState(null);

  const handleThumbnailClick = (pic) => {
    try {
      setSelectedPic(pic);
      handleMove();
    } catch (error) {
      console.log(error);
    }
  };
  const handleMove = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        setIsThumbnail((prev) => !prev);
      });
    });
  };
  return (
    <>
      {isThumbnail && (
        <div className="main">
          <img
            src={skin1}
            className="gun-img"
            style={{ cursor: "pointer" }}
            onClick={() => handleThumbnailClick(skin1)}
          ></img>
          <img
            src={skin2}
            style={{ cursor: "pointer" }}
            onClick={() => handleThumbnailClick(skin2)}
          ></img>
          <img
            src={skin3}
            style={{ cursor: "pointer" }}
            onClick={() => handleThumbnailClick(skin3)}
          ></img>
          <img
            src={skin4}
            style={{ cursor: "pointer" }}
            onClick={() => handleThumbnailClick(skin4)}
          ></img>
        </div>
      )}
      {!isThumbnail && selectedPic && (
        <div className="about">
          <img src={selectedPic} onClick={handleMove} className="gun-img"></img>
          <footer>
            <img src={skin2}></img>
            <img src={skin3}></img>
            <img src={skin4}></img>
          </footer>
        </div>
      )}
    </>
  );
};

export default ContainerMain;
