import Slider from "./../components/Slider";
import ProductsRow from "../components/NuestrosProductosRow";
import Contact from "./../components/Contact";
import MenuRow from "./../components/MenuRow";
import image2 from "../assests/images/image1.jpg";

function Home() {
  return (
    <div>
      <Slider />
      <MenuRow title="MENÚ" routePath="menu" />
      <ProductsRow title="NUESTROS PRODUCTOS" routePath="nuestros-productos" />
      <div className="px-6 text-center">
        <p className="font-medium">¡COMPARTÍ EL SABOR DE LAS EMPANADAS CASERAS!</p>
        <p>
          Seguinos en nuestro Instagram para ser el primero en enterarte de nuestras
          promociones.
        </p>
        <div className="flex flex-row justify-center mt-6 gap-4 mb-6 ">
          <div className="rounded  overflow-hidden ">
            <img src={image2} alt="Mountain" className="w-32 md:w-44" />
          </div>
          <div className="rounded overflow-hidden ">
            <img src={image2} alt="Mountain" className="w-32 md:w-44" />
          </div>
          <div className="rounded overflow-hidden ">
            <img src={image2} alt="Mountain" className="w-32 md:w-44" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
export default Home;
