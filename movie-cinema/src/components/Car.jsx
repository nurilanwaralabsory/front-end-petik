const Car = (props) => {
  const { merk, harga, isNew, colors, beli, image } = props;
  return (
    <>
      <img src={image} alt="foto-mobil" />
      <h3>Merek Mobil : {merk}</h3>
      <h4>Harga Mobil : {harga}</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Varian Warna : {colors.map((color) => color + ", ")}</h5>
      <button onClick={beli}>Beli</button>
    </>
  );
};

export default Car;
