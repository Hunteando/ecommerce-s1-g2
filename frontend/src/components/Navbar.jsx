import { useState } from "react";
import { Link } from 'react-scroll'
import Logo from '../assests/images/logo.png'
import "../css/modal.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav name='navbar' className="w-full bg-[#eec697] sticky top-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-5">
        <div>

          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <img src={Logo} alt="Logo Image" className="w-[45px] md:w-[60px] lg:w-[60px] " />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div class="items-center justify-center pb-6 md:pb-0 md:pt-1 md:flex">
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input class="placeholder:italic placeholder:text-slate-300 block bg-white w-full h-8 border border-slate-500 rounded-md pl-10 pr-60 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="¿Que desea buscar?" type="text" name="search" />
              </div>
            </div>

            <ul className="items-center justify-center space-y-7 md:flex md:space-x-11 md:space-y-0 md:pt-3">
              <li className="text-[#1c1917] hover:text-[#7c2d12] ">
                <a href="#">Inicio</a>
              </li>
              <li className="text-[#1c1917] hover:text-[#7c2d12]">
                <Link to="home" smooth={true} duration={500}>
                  <a href="#">Productos</a>
                </Link>
              </li>

              <li className="text-[#1c1917] hover:text-[#7c2d12]">
                <Link to="home" smooth={true} duration={500}>
                  <a href="#">Menú</a>
                </Link>

              </li>

              <li className="text-[#1c1917] hover:text-[#7c2d12]">
                <Link to="nosotros" smooth={true} duration={500}>
                  <a href="#">Nosotros</a>
                </Link>
              </li>
              <li className="text-[#1c1917] hover:text-[#7c2d12]">
                <Link to="contact" smooth={true} duration={500}>
                  <a href="#">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden flex flex-row items-center pt-[-20px] md:flex">
          <a href="">
            <svg class="w-10 h-6 text-[#362e29] hover:text-[#7c2d12]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </a>
          <button for="btn-modal" className="lbl-modal">
            <svg className="w-6 h-6 text-[#362e29] hover:text-[#7c2d12] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>

      </div>
    </nav >
  );
}
