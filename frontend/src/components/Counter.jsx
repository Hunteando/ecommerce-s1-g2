import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


function Counter({ stock, onAdd, initial = 1 }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-2">
      <div className="flex justify-center items-center mb-1 ">
        <button
          className="pb-1 px-3 border-solid border-r-0 border border-gray-500"
          onClick={decrease}
        >
          <p>-</p>
        </button>
        <h1 className="pb-1 px-6 border-solid border-r-0 border border-gray-500">
          {count}
        </h1>
        <button
          className="pb-1 flex h-auto align-center px-3 border-solid border border-gray-500"
          onClick={increase}
        >
          <p>+</p>
        </button>
      </div>
      <button
        className="w-full flex items-center justify-center py-2 bg-gray-400"
        onClick={() => onAdd(count)}
      >
        <FaShoppingCart className="mr-2" />
        Añadir al carrito
      </button>
    </div>
  );
}
export default Counter;
