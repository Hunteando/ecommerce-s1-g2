import Counter from "./Counter";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

// Chequear si el admin inició sesión y en base a eso mostrar o no iconos
// de eliminar o editar

function CardProduct({ data }) {
  const stock = data.stock;
  const [isConnected, setIsConnected] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="w-40 relative">
      {isConnected ? (
        <div className="icons absolute text-white flex mt-1 mr-1 right-0 gap-2">
          <MdDelete size={20} />
          <Link to="/editar-producto">
            <MdModeEditOutline size={20} />
          </Link>
        </div>
      ) : (
        <div className="icons absolute right-0 text-white flex m-3 gap-2">
          {showIngredients ? (
            <BsFillEyeSlashFill
              size={20}
              className="text-black z-10"
              onClick={() => setShowIngredients(!showIngredients)}
            />
          ) : (
            <BsFillEyeFill
              size={20}
              className="text-black z-10"
              onClick={() => setShowIngredients(!showIngredients)}
            />
          )}
        </div>
      )}

      {showIngredients && (
        <div className="absolute top-0 left-0 right-0 bottom-0 p-3 bg-#FBD1A1 text-#231E1A flex flex-col items-center justify-center">
          <h4 className="text-sm font-medium mb-4">Ingredientes</h4>
          <p className="text-xs text-center">{data.ingredients}</p>
        </div>
      )}

      <div className="w-full rounded-lg shadow-md lg:max-w-sm">
        <img
          className="object-cover w-40 h-28 rounded-t"
          src={data.image}
          alt="product"
        />
        <div className="py-2 text-center bg-#secundario/[.47]">
          <h4 className="text-sm font-medium uppercase text-#231E1A">{data.name}</h4>
          <p className="mb-1 font-bold text-#231E1A">${data.price}</p>
          <Counter stock={stock} />
        </div>
      </div>
    </div>
  );
}
export default CardProduct;
