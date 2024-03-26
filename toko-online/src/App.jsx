import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  const products = [
    {
      nama: "Kursi gaming Fantech",
      harga: 2350000,
    },
    {
      nama: "Poco X6 Pro",
      harga: 4999000,
    },
    {
      nama: "SSD Seagate 1TB Gen 4",
      harga: 2450000,
    },
  ];
  return (
    <>
      <Header />
      <div className="flex flex-row mx-5 gap-x-4 my-10">
        {products.map((product) => {
          return <Products nama={product.nama} harga={product.harga} />;
        })}
      </div>
    </>
  );
}

export default App;
