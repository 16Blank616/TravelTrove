import Home from "./Pages/Home/Home";
import Tours from "./Pages/Tours/Tours";
import Header from "./components/Header/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Help from "./Pages/Help/help";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Stambyl from "./Pages/PagesCountry/Stambyl/stambyl";
import Dubai from "./Pages/PagesCountry/Dubai/dubai";
import Erevan from "./Pages/PagesCountry/Erevan/erevan";
import Tbilisi from "./Pages/PagesCountry/Tbilisi/tbilisi";
import Rim from "./Pages/PagesCountry/Rim/rim";
import Tour from "./Pages/Tour/Tour";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Stambyl" element={<Stambyl />} />
          <Route path="/Dubai" element={<Dubai />} />
          <Route path="/erevan" element={<Erevan />} />
          <Route path="/Tbilisi" element={<Tbilisi />} />
          <Route path="/rim" element={<Rim />} />
          <Route path="/Tour/:id" element={<Tour />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
