import skin1 from "../assets/skin1.webp";
import skin2 from "../assets/skin2.webp";
import skin3 from "../assets/skin3.webp";
import skin4 from "../assets/skin4.webp";

const CardView = () => {
  return (
    <div className="about">
      <img src={skin1}></img>
      <footer>
        <img src={skin2}></img>
        <img src={skin3}></img>
        <img src={skin4}></img>
      </footer>
    </div>
  );
};

export default CardView;
