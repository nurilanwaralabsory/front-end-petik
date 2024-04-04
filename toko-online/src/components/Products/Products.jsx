import "./Products.css";

const Products = (props) => {
  const { nama, harga, gambar, berat, terjual, beli } = props;
  return (
    <div className="product-card">
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src={gambar} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{nama}</span>
        <h4>
          <a href="">{nama}</a>
        </h4>
        <div className="berat">Berat {berat}</div>
        <div>Terjual {terjual}</div>
        <div className="product-bottom-details">
          <div className="product-price">
            Rp{" "}
            {harga.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </div>
          <div className="product-links">
            <button onClick={beli}>Beli</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
