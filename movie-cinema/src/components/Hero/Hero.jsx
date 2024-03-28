import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Title :</h2>
            <h3 className="hero-genre">Genre :</h3>
            <p className="hero-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate sunt corporis optio saepe quam vero magnam nihil error
              sit pariatur, incidunt, necessitatibus nemo qui. Veritatis dolorem
              dignissimos dolorum? Doloribus, vel.
            </p>
          </div>
          <div className="hero-right">
            <img
              className="hero-image"
              src="https://picsum.photos/200"
              alt="hero-img"
            />
          </div>
          <button className="hero-button">Detail</button>
        </section>
      </div>
    </div>
  );
};

export default Hero;
