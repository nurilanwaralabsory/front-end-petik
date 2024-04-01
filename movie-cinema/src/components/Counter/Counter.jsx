import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleTambah = () => {
    setCount(count + 1);
  };

  const handleKurang = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{
          padding: "10px",
          border: "none",
          backgroundColor: "pink",
          marginRight: "3px",
          borderRadius: "5px",
        }}
        onClick={handleTambah}
      >
        Tambah
      </button>
      <button
        style={{
          padding: "10px",
          border: "none",
          backgroundColor: "pink",
          borderRadius: "5px",
        }}
        onClick={handleKurang}
      >
        Kurang
      </button>
    </div>
  );
};

export default Counter;
