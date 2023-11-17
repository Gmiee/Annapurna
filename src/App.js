import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Contactus from './pages/Contactus'
import Ofbt from "./components/Ofbt";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Ofbt/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Contactus" element={<Contactus/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
