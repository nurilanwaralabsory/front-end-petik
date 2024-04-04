import { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    berat: "",
    gambar: "",
    terjual: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    alert("Data berhasil ditambahkan");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="harga">Harga</label>
          <input
            type="text"
            id="harga"
            name="harga"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="berat">Berat</label>
          <input
            type="text"
            id="berat"
            name="berat"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="gambar">Gambar</label>
          <input
            type="text"
            id="gambar"
            name="nama"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="terjual">Terjual</label>
          <input
            type="text"
            id="terjual"
            name="terjual"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
