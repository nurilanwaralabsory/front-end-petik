import "./Hero.css";
import keyboard from "../../img/keyboard.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Toko Abzhor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          exercitationem repudiandae soluta non. Laudantium magnam similique,
          fuga illum, vitae sapiente quia dolor quisquam error obcaecati
          accusamus facilis, eligendi excepturi et.
        </p>
      </div>
      <div className="hero-right">
        <img src={keyboard} alt="" />
      </div>
    </div>
  );
};

export default Hero;
