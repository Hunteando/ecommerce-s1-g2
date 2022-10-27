import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { WindowSizeHook } from "../helpers/WindowSizeHook";

function MenuRow({ title, routePath }) {
  const { width } = WindowSizeHook();

  return (
    <div className="px-6 md:mt-10 max-w-5xl mx-auto">
      <div className="flex flex-row justify-between mb-1">
        {width < 768 && (
          <>
            <p className="font-medium text-xl mb-1 uppercase">{title}</p>
            <div className="flex items-center">
              <Link to={`/${routePath}`}>
                <p className="mr-2">Ver todo</p>
              </Link>
              <AiOutlineArrowRight />
            </div>
          </>
        )}
      </div>

      <div>
        <ProductCard routePath={routePath} />
      </div>
    </div>
  );
}
export default MenuRow;
