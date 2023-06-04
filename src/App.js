import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// COMPONENTS
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path={"/:name"} element={<Country/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
