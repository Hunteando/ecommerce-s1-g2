import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        className="bg-purple text-[#4b433e] text-sm px-1 py-1 outline:none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="w-6 h-6 hover:text-#primario "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </Button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                <div className="grid grid-cols-2 gap-4 ...">
                  <div className="place-self-auto self-start ">
                    <h2 className=" mt-3 text-3xl font-bold tracking-tight text-gray-900 indent-8">
                      Iniciar sesión
                    </h2>
                  </div>
                  <div className="place-items-right  flex justify-end">
                    <button
                      className="text-black-500  font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </button>
                  </div>
                </div>

                <div className="grid grid-flow-row-dense  grid-rows-2 ...">
                  _________________________________________________________________
                </div>

                <input type="hidden" name="remember" defaultValue="true" />

                <div className="grid gap-x-8 gap-y-4  flex justify-center ">

                  {/*metodo GET para pedir peticion al Backend*/}
                  <form action="/" method="GET">

                  <div>
                    <label htmlFor="email" className="sr-only" >
                      Email address
                    </label>

                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block  appearance-none rounded rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="password" className="sr-only" for="password">
                      Password
                    </label>

                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block  appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-min justify-center rounded-md border border-transparent bg-[#C96C26] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2; transition ease-in-out delay-150 bg-[#C96C26] hover:-translate-y-1 hover:scale-110  duration-300 ..."
                    >
                      Ingresar
                    </button>
                  </div>
                  
                  <br />
                  
                  <div>
                    <Link
                      to="/olvide"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Olvide contraseña?
                    </Link>
                  </div>
                  </form>
                </div>

                <div className="flex justify-between ...">
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
