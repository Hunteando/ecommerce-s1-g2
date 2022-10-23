import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="px-6 flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
      <div className="text-left">
        <h2 className="font-medium text-xl mb-1 uppercase">Contacto</h2>
        <p className="leading-5">¿Necesitás hablar con nosotros?</p>
        <p className="leading-5">Compartinos tu consulta, opinión y/o sugerencia. </p>
      </div>

      <main className="w-full  mt-5 overflow-hidden  sm:max-w-md sm:rounded-lg">
        <form onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 undefined">
              Tu nombre
            </label>
            <div className=" flex flex-col items-start">
              <input
                onChange={onMutate}
                type="text"
                id="name"
                required
                className="bg-slate-200 block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 undefined">
              Correo electrónico
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={onMutate}
                type="email"
                id="email"
                required
                className="bg-slate-200 block block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 undefined">
              Celular
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={onMutate}
                type="number"
                id="phone"
                required
                className="bg-slate-200 block block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 undefined">
              Mensaje
            </label>
            <div className="flex flex-col items-start">
              <textarea
                onChange={onMutate}
                type="text"
                id="message"
                required
                className="min-h-40	 bg-slate-200 block block w-full mt-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="bg-slate-500 inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
export default Contact;
