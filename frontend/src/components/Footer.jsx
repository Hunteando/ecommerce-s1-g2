import "../css/footer.css";

//imagenes bancos:
import visa from "../assests/images/visa.png";
import mastercard from "../assests/images/mastercard.png";
import american from "../assests/images/american.png";
import dinersclub from "../assests/images/dinersclub.png";

// Redes sociales:
import instagram from "../assests/images/instagram.png";
import meta from "../assests/images/meta.png";

//contacto:
import ubicacion from "../assests/images/ubicacion.png";
import telefono from "../assests/images/telefono.png";
import email from "../assests/images/email.png";

//componente watsapp
import Whatsapp from "../components/Whatsapp";

//logo
import massamiacl from "../assests/images/massamiacl.png";

function footer() {
  return (
    <>
    <footer className="content-center mx-auto py-12 bg-white-200 p-2  ">

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">

        <div className="mb-5">

       <Whatsapp/> 

      </div>

      <div className="mb-5 inline space-x-1">
        <div className=" content-center">
            <blockque className=" absolute relative p-8 content-center ">
                    <img className=" w-20" src={ massamiacl } alt=" massamiacl " />
                </blockque>
        </div>

      <span className="inline text-center text-2x1 pb-4 text-black-100 font-bold">
              Medios de pago    
          </span>

          <blockquote className="flex space-x-1 static top-50px right-50px left-50px inline-block p-10px">
            <img  src={visa} alt="visa" />

            <img  src={mastercard} alt="mastercard" />

            <img  src={american} alt="american" />
          
            <img  src={dinersclub} alt="dinersclub" />
          </blockquote>            
      </div>

      <div className="mb-5 inline ">

        <div className="space-x-1">
          <p className="inline font-medium text-black-100">nosotros</p>

                    <p className="font-bold">Redes Sociales</p>

                    <a href="https://www.instagram.com/masamia.cl/">
                      <img className="inline w-8" src={instagram} alt="instagram" />
                    </a>

                    <a href="https://www.facebook.com/masamia.cl">
                      <img className=" inline w-8 static" src={meta} alt="meta" />
                    </a>   
          </div>

          <div>&nbsp;</div>
                    
        <div className="space-x-1">  
       
          <img className="inline" src={ubicacion} alt="ubicacion" />
          <h1 className="inline" >Temuco,Chile</h1>
        </div>
              
        <div className="space-x-1">              
             <img className="inline" src={telefono} alt="telefono" />
          <a href="tel:979432938">
            <h1 className="inline">+56 979432938</h1>
          </a>
        </div>
          
        <div className="space-x-1">
          <img className="inline" src={email} alt="email" />
          <h1 className="inline">sinaisb1610@gmail.com</h1>
        </div>
      
      </div>

      </div>
    </footer>
  
    </>
  );
}

export default footer;