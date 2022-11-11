import { BrowserRouter, Routes, Route } from "react-router-dom";

//componentes:
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";

//subpaginas:
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NuestrosProductos from "./pages/NuestrosProductos";
import Nosotros from "./pages/Nosotros";
import AgregarProducto from "./pages/AgregarProducto";
import EditarProducto from "./pages/EditarProducto";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:menuType" element={<Menu />} />
          <Route path="/nuestros-productos" element={<NuestrosProductos />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/editar-producto" element={<EditarProducto />} />
          <Route path="/editar-producto" element={<EditarProducto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
      {/* footer */}

      
    {/* watsapp */}
      <Whatsapp/>
    </div>
  );
}

export default App;
