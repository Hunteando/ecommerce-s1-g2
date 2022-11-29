import paginanoencontrada from "../assests/images/paginanoencontrada.jpg";

// componente navbar
import Navbar from "../components/Navbar";

function Notfound() {
<<<<<<< HEAD
    return (
        <div>
            <img src={paginanoencontrada} />
        </div>
    );
=======
  return (
    <>
      <Navbar />

      <div className="flex justify-center">
        <div>
          <img className=" p-4 border-4 border-none" src={paginanoencontrada} />
        </div>
      </div>
    </>
  );
>>>>>>> b03cfbef25e3c6e832dccb6fcfcb8d3baf9ad9cb
}

export default Notfound;
