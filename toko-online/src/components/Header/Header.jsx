import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Abzhor</div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
