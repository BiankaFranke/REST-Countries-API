import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// COMPONENTS
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import Footer from './components/Footer/Footer';

const theme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

function App() {
  const [isDark, setDark] = useState(theme);
  
  const handleToggle = () => {
    if (isDark === "dark") {
      setDark("light");
      localStorage.setItem("theme", "light");
      document.querySelectorAll(".dark").forEach((item) => {
        item.classList.remove("dark");
        item.classList.add("light");
      });
      document.querySelectorAll(".darkOther").forEach((item) => {
        item.classList.remove("darkOther");
        item.classList.add("lightOther");
      });
      document.getElementById("moon").style.display = "block";
      document.getElementById("sun").style.display = "none";
    } else {
      setDark("dark");
      localStorage.setItem("theme", "dark");
      document.querySelectorAll(".light").forEach((item) => {
        item.classList.remove("light");
        item.classList.add("dark");
      });
      document.querySelectorAll(".lightOther").forEach((item) => {
        item.classList.remove("lightOther");
        item.classList.add("darkOther");
      });
      document.getElementById("sun").style.display = "block";
      document.getElementById("moon").style.display = "none";
    }
  }

  return (
      <div className={"App " + isDark}>
        <BrowserRouter>
          <Header theme={isDark} handleToggle={handleToggle} />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path={"/:name"} element={<Country/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
