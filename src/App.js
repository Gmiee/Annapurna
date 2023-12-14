import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Contactus from './pages/Contactus'
import Error from './pages/Error'
import Ofbt from "./components/Ofbt";
function App() {
  return (
    <>
      <BrowserRouter>
        <Ofbt/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
