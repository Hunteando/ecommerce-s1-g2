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

//logo
import sage from "../assests/images/sage.png";

function footer() {
  return (
    <>
<<<<<<< HEAD
      <div name="nosotros" className="container">
        <div className="item" id="item1">
          <img className="logo" src={sage} alt="sage" />
          <p className="pay">Medios de pago</p>
          <div className="paymentmethods">

            <img className="bank" src={visa} alt="visa" />
            <img className="bank" src={mastercard} alt="mastercard" />
            <img className="bank" src={american} alt="american" />
            <img className="bank" src={dinersclub} alt="dinersclub" />
          </div>
        </div>
        <div className="item" id="item2">
          <p className="weare">
            nosotros
          </p>
        </div>
        <div className="item" id="item3">
          <p className="social">Redes Sociales</p>
          <a
            href="https://www.instagram.com/masamia.cl/" target="blank">
            <img className="bank" src={instagram} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/masamia.cl" target="blank">
            <img className="socialmedia" src={meta} alt="meta" />
          </a>

          {/* Aquí lo que quieres comentar  
                      <img className="socialmedia" src={nombredelaimagen} alt="nombre de la imagen y/o foto"/>
                      <img className="socialmedia" src={nombredelaimagen} alt="nombre de la imagen y/o foto"/>*/
          }

        </div>
        <div className="item" id="item4">
          <p className="contacto">Contacto</p>
          <img className="bank" src={ubicacion} alt="ubicacion" />
          <h1 className="bank">Temuco,Chile</h1>
          <img className="bank" src={telefono} alt="telefono" />
          <a href="tel:979432938">
            <h1 className="bank">
              +56 979432938
            </h1>
          </a>
          <img className="bank" src={email} alt="email" />
          <h1 className="bank">sinaisb1610@gmail.com</h1>

=======
      <div className="container">
        <div className="item" id="item1">
          <img className="logo" src={sage} alt="sage" />

          <p className="pay">Medios de pago</p>

          <div className="paymentmethods">
            <img className="bank" src={visa} alt="visa" />
            <img className="bank" src={mastercard} alt="mastercard" />
            <img className="bank" src={american} alt="american" />
            <img className="bank" src={dinersclub} alt="dinersclub" />
          </div>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
          <div className="col-span-2">&nbsp;</div>
          <div className="col-span-2">&nbsp;</div>
        </div>

        <div className="flex flex-col-reverse ...">
          <div>
            <p className="weare">nosotros</p>

            <p className="social">Redes Sociales</p>

            <a href="https://www.instagram.com/masamia.cl/">
              <img className="bank" src={instagram} alt="instagram" />
            </a>

            <a href="https://www.facebook.com/masamia.cl">
              <img className="socialmedia" src={meta} alt="meta" />
            </a>

            {/* Aquí lo que quieres comentar  
                      <img className="socialmedia" src={nombredelaimagen} alt="nombre de la imagen y/o foto"/>
                      <img className="socialmedia" src={nombredelaimagen} alt="nombre de la imagen y/o foto"/>*/}
            <div>
              <img className="bank" src={ubicacion} alt="ubicacion" />
            </div>

            <div>
              <h1 className="bank">Temuco,Chile</h1>
            </div>

            <div>
              <img className="bank" src={telefono} alt="telefono" />
              <a href="tel:979432938">
                <h1 className="bank">+56 979432938</h1>
              </a>
            </div>

            <div>
              <img className="bank" src={email} alt="email" />
              <h1 className="bank">sinaisb1610@gmail.com</h1>
            </div>
          </div>
>>>>>>> b03cfbef25e3c6e832dccb6fcfcb8d3baf9ad9cb
        </div>
      </div>
    </>
  );
}

export default footer;
