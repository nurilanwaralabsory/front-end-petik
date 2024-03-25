const User = (props) => {
  const { nama, alamat, angkatan, isGraduate, hobi, profil, gambar } = props;
  return (
    <>
      <img src={gambar} alt="" />
      <ul>
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Angkatan : {angkatan}</li>
        <li>Hobi : {hobi.map((h) => h + ", ")}</li>
        <li>Status : {isGraduate ? "Lulus" : "Belum Lulus"}</li>
      </ul>
      <button onClick={profil}>Klik</button>
    </>
  );
};
export default User;
