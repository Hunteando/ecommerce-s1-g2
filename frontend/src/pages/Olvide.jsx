import { Input } from "@material-tailwind/react";

export default function Olvide() {
  return (
    <div class="h-56 grid grid-cols-3 gap-4 content-around ...">
      <div>
        
            devolver
        
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
      </div>
      <div>&nbsp;</div>
    </div>
  );
}