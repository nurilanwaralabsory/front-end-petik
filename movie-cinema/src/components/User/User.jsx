import "./User.css";
const User = (props) => {
  const { nama, member, message } = props;
  return (
    <>
      <table className="card">
        <thead className="card-head">
          <tr>
            <td colSpan={2}>{nama}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr className="member">
            <td colSpan={2}>{member}</td>
          </tr>
          <tr>
            <td>
              <button onClick={message}>Message</button>
            </td>
            <td>
              <button>Suscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default User;
