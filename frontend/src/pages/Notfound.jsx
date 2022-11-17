
import paginanoencontrada from "../assests/images/paginanoencontrada.jpg";

function Notfound() {
  return (
    <>
    <div className="flex justify-center">
      <div>
      <img src={paginanoencontrada} className="bg-origin-content p-4 border-4 border-dashed"/>
      </div>
    </div>
    </>
  );
}

export default Notfound;