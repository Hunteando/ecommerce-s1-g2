import walink from "../assests/images/arrow-left-solid.svg";

import { Input } from "@material-tailwind/react";


//componente Link de react:
import { Link } from "react-router-dom";

export default function Olvide() {
  return (
    <>
    <div class="min-[320px]:text-center max-[600px]:bg-sky-300 h-56 grid grid-cols-3 gap-4 content-around ...">
    
      <div>
        <Link to="/">
          <img className="h-10 w-10" src={walink} alt="walink"/>
        </Link>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div className="w-72">
        <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
             required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="correo electronico registrado"
        />
        <button
              type="submit"
              className="group relative flex w-min justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2; transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
            > 
               enviar
            </button>
      </div>
      <div>&nbsp;</div>
    </div>

    </>
  );
}