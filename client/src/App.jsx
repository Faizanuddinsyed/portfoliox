import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import GetContacts from "./pages/GetContacts";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* ✅ Use Home as the main page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />{" "}
        {/* ✅ Add Route for About */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* ✅ Add Route for Contact */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/getContacts" element={<GetContacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
