import Table from "react-bootstrap/Table";

const TableComponent = () => {
  const datas = [
    {
      name: "Product 1",
      price: 23000,
      stok: 20,
    },
    {
      name: "Product 1",
      price: 23000,
      stok: 20,
    },
    {
      name: "Product 1",
      price: 23000,
      stok: 20,
    },
  ];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Stok</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => {
          return (
            <tr>
              <td>1</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.stok}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
