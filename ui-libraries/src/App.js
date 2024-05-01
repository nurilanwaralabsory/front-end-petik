import "./App.css";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Detail from "./pages/Detail";
import DetailCourse from "./components/DetailCourse";
import DetailCoursePage from "./pages/DetailCoursePage";
import TableCourse from "./components/course/TableCourse";
import AddCourse from "./components/course/AddCourse";
import NotFound from "./components/NotFound";
import TableTrainer from "./components/trainer/TableTrainer";
import AddTrainer from "./components/trainer/AddTrainer";
import EditCourse from "./components/course/EditCourse";
import EditTrainer from "./components/trainer/EditTrainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent></NavbarComponent> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/add" element={<AddCourse />} />
          <Route path="/course/edit/:id" element={<EditCourse />} />
          <Route path="/table-course" element={<TableCourse />} />
          <Route path="/course/:id" element={<DetailCoursePage />} />
          <Route path="/trainers" element={<Courses />} />
          <Route path="/trainer/add" element={<AddTrainer />} />
          <Route path="/table-trainer" element={<TableTrainer />} />
          <Route path="/trainer/:id" element={<DetailCoursePage />} />
          <Route path="/trainer/edit/:id" element={<EditTrainer />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
