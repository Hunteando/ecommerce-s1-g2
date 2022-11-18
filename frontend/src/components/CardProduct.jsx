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
        <div className="icons absolute text-white flex mt-1 mr-1 right-0 gap-2">
          {showIngredients ? (
            <BsFillEyeFill
              size={20}
              className="text-black"
              onClick={() => setShowIngredients(!showIngredients)}
            />
          ) : (
            <BsFillEyeSlashFill
              size={20}
              className="text-black"
              onClick={() => setShowIngredients(!showIngredients)}
            />
          )}
        </div>
      )}

      <div className="w-full rounded-lg shadow-md lg:max-w-sm">
        <img
          className="object-cover w-40 h-28 rounded-t"
          src={data.image}
          alt="product"
        />
        <div className="pt-2 text-center">
          <h4 className="text-sm font-medium uppercase text-blue-600">{data.name}</h4>
          <p className="mb-2 font-bold">${data.price}</p>
          <Counter stock={stock} />
        </div>
      </div>
    </div>
  );
}
export default CardProduct;
