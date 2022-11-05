import image1 from "../assests/images/image1.jpg";
import { WindowSizeHook } from "../helpers/WindowSizeHook";
import { Link } from "react-router-dom";

function RowProductCard({ routePath }) {
  const { width } = WindowSizeHook();

  return routePath === "menu" ? (
    <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 justify-items-center">
      <div className="rounded overflow-hidden shadow-lg">
        <Link to="/category/veganas">
          <img src={image1} alt="Mountain" />
          <div className="py-2 bg-gray-300 w-full">
            <p className="text-center font-medium	text-sm">VEGANAS</p>
          </div>
        </Link>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <Link to="/category/clasicas">
          <img src={image1} alt="Mountain" />
          <div className="py-2 bg-gray-300 w-full">
            <p className="text-center font-medium	text-sm">CLÁSICAS</p>
          </div>
        </Link>
      </div>
      {width > 768 && (
        <div className="rounded overflow-hidden shadow-lg">
          <Link to="/nuestros-productos">
            <img src={image1} alt="Mountain" />
            <div className="py-2 bg-gray-300 w-full">
              <p className="text-center font-medium text-sm">NUESTROS PRODUCTOS</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 justify-items-center">
      <div className="rounded overflow-hidden shadow-lg">
        <Link to="/nuestros-productos">
          <img src={image1} alt="Mountain" />
          <div className="py-2 bg-gray-300 w-full">
            <p className="text-center font-medium	 text-sm">Masas Caseras</p>
            <p className="text-center font-medium	text-sm">$60</p>
          </div>
        </Link>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <Link to="/nuestros-productos">
          <img src={image1} alt="Mountain" />
          <div className="py-2 bg-gray-300 w-full">
            <p className="text-center font-medium	 text-sm">Molde</p>
            <p className="text-center font-medium	 text-sm">$89</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default RowProductCard;
