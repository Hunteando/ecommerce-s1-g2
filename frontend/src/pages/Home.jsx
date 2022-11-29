// componentes

// componente navbar
import Navbar from "../components/Navbar";

import Slider from "../components/Slider";

import ProductsRow from "../components/NuestrosProductosRow";

import Contact from "../components/Contact";

import MenuRow from "../components/MenuRow";

//componente watsapp
import Whatsapp from "../components/Whatsapp";

//Footer
import Footer from "../components/Footer";

//imagenes
import image2 from "../assests/images/image1.jpg";

function Home() {
  return (
<<<<<<< HEAD
    <div name="home">

      {/* <div>
        <Modal />
      </div> */}

=======
    <div>
      <Navbar />
>>>>>>> b03cfbef25e3c6e832dccb6fcfcb8d3baf9ad9cb
      <Slider />
      <MenuRow title="MENÚ" routePath="menu" />
      <ProductsRow title="NUESTROS PRODUCTOS" routePath="nuestros-productos" />
<<<<<<< HEAD

      <div className="md:h-[400px] px-6 text-center">
=======
      <div className="px-6 text-center">
>>>>>>> b03cfbef25e3c6e832dccb6fcfcb8d3baf9ad9cb
        <p className="font-medium uppercase md:font-bold md:text-[32px]">
          ¡COMPARTE EL SABOR DE LAS EMPANADAS CASERAS!
        </p>
        <p className="font-normal md:text-2xl">
          Síguenos en nuestro Instagram para ser el primero en enterarte de nuestras
          promociones.
        </p>
        <div className="flex flex-row justify-center mt-6 gap-4 mb-6 ">
          <div className="rounded  overflow-hidden ">
            <img
              src={image2}
              alt="Mountain"
              className="w-32 md:w-40 md:h-40 object-cover"
            />
          </div>
          <div className="rounded overflow-hidden ">
            <img
              src={image2}
              alt="Mountain"
              className="w-32 md:w-40 md:h-40 object-cover"
            />
          </div>
          <div className="rounded overflow-hidden ">
            <img
              src={image2}
              alt="Mountain"
              className="w-32 md:w-40 md:h-40 object-cover"
            />
          </div>
        </div>
      </div>
      <Contact />
      <Whatsapp />
      <Footer />
    </div>
  );
}
export default Home;
