import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "./ProductCard";

function ProductsRow({ title }) {
  return (
    <div className="px-6">
      <div className="flex flex-row justify-between mb-1">
        <p className="font-medium text-xl mb-1 uppercase">{title}</p>
        <div className="flex items-center">
          <p className="mr-2">Ver todo</p>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div>
        <ProductCard />
      </div>
    </div>
  );
}
export default ProductsRow;
