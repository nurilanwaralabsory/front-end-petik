import Header from "./components/Header";
import Car from "./components/Car";
import User from "./components/User";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <h1>Hello Abzhor</h1>
      <Car
        merk="Toyota"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah di beli")}
        image="https://cdn-icons-png.flaticon.com/512/7718/7718888.png"
      />
      {/* <User
        nama="Abzhor"
        alamat="Cirebon"
        angkatan="11"
        status="sedang belajar"
        hobi={["ngoding", "mancing", "baca buku"]}
        profil={() => alert(`Profil Cirebon telah dibuka`)}
        gambar="https://cdn-icons-png.flaticon.com/512/7718/7718888.png"
      />
      <User
        nama="Jamal"
        alamat="Jepara"
        angkatan="11"
        status="sedang belajar"
        hobi={["ngoding", "mancing", "baca buku"]}
        profil={() => alert(`Profil Jamal telah dibuka`)}
      />
      <User
        nama="Agus"
        alamat="Medan"
        angkatan="11"
        status="sedang belajar"
        hobi={["ngoding", "mancing", "baca buku"]}
        profil={() => alert(`Profil Agus telah dibuka`)}
      />
      <User
        nama="Wahyu"
        alamat="Sukabumi"
        angkatan="11"
        status="sedang belajar"
        hobi={["ngoding", "mancing", "baca buku"]}
        isGraduate={true}
        profil={() => alert(`Profil Wahyu telah dibuka`)}
      />
      <User
        nama="Nuril"
        alamat="Cirebon"
        angkatan="11"
        status="sedang belajar"
        hobi={["ngoding", "mancing", "baca buku"]}
        profil={() => alert(`Profil Nuril telah dibuka`)}
      /> */}
      <Footer nama="Abzhor" />
    </div>
  );
}

export default App;
