import "./Car.css";

const Car = (props) => {
  const { merk, harga, isNew, colors, beli, image } = props;
  return (
    <div className="car">
      <img src={image} alt="foto-mobil" />
      <div className="car-body">
        <h3>Merek Mobil : {merk}</h3>
        <h4>Harga Mobil : {harga}</h4>
        <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
        <button type="submit" onClick={beli}>
          Beli
        </button>
      </div>
      {/* <h5>Varian Warna : {colors.map((color) => color + ", ")}</h5> */}
    </div>
  );
};

export default Car;
