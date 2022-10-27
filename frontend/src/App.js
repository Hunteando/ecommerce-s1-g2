import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NuestrosProductos from "./pages/NuestrosProductos";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <div className="bg-gray-50">
      {/* navbar */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nuestros-productos" element={<NuestrosProductos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
      {/* footer */}
    </div>
  );
}

export default App;
