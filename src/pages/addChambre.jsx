import { useEffect, useRef } from "react";
import ChambresListe from "../data/chambreList";
import swal from "sweetalert";


export default function AddChambre() {
  const numero = useRef(null);
  const prix = useRef(null);
  const type = useRef(null);
  const { setChambres , chambres } = ChambresListe();

  
  useEffect(() => {
    const maxNumero = chambres?.reduce((max, chambre) => (chambre.numero > max ? chambre.numero : max), -Infinity);

    numero.current.value = parseInt(maxNumero)+1
  }, [chambres]);
  
  const handleClick = () => {
    let formData = {
      numero: parseInt(numero.current.value),
      prix: prix.current.value,
      type: type.current.value,
      image: type.current.value + ".jpg",
      reserve: false,
    };
  
    setChambres((prev) => [...prev, formData]);
 prix.current.value = "",
    type.current.value = ""
    swal("ERROR", "la chambre est bien ajoutz", "success");
  };
  return (
    <div className="h-full  mt-24 mx-auto w-1/2">
      <form>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
            readOnly
              type="text"
              name="numero"
              id="numero"
              ref={numero}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="numero"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Numero du chambre
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="prix"
              id="prix"
              ref={prix}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="prix"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prix
            </label>
          </div>
        </div>

        <div className="">
          <label htmlFor="type" className="block mb-2 text-sm font-medium">
            Chambre type
          </label>
          <select
            id="type"
            ref={type}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>simple</option>
            <option>double</option>
            <option>suite</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        
      </form>
    </div>
  );
}
