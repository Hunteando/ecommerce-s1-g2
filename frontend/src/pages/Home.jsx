import Slider from "./../components/Slider";
import ProductsRow from "./../components/ProductsRow";

function Home() {
  return (
    <div>
      <Slider />
      <ProductsRow title="MENÚ" />
      <ProductsRow title="NUESTROS PRODUCTOS" />
      <div className="px-6">
        <p>¡COMPARTÍ EL SABOR DE LAS EMPANADAS CASERAS!</p>
        <p>
          Seguinos en nuestro Instagram para ser el primero en enterarte de nuestras
          promociones.
        </p>
      </div>
    </div>
  );
}
export default Home;
