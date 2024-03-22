import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div>
      <Header />
      <Header />
      <Header />
      <Header />
      <h1>Hello Abzhor</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
        consequatur repellendus excepturi doloribus pariatur necessitatibus
        quidem, ipsam consequuntur nostrum labore assumenda. Cumque aspernatur
        sequi laudantium laboriosam ipsam, quia culpa dolorum debitis
        asperiores? Minus nemo incidunt architecto, autem et vel impedit ea
        suscipit nulla repellat hic consequatur necessitatibus voluptatibus odit
        reprehenderit!
      </p>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy; 2024 Developed by Nuril Anwar Al Absory</h3>
        <span>Make with $#10084</span>
      </footer>
    );
  }
}

export default App;
