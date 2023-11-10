import { useRef } from "react";
import ReservationList from "../data/reservationList";
import ChambresListe from "../data/chambreList";
import swal from "sweetalert";

export default function Reserver() {
  const { SetReservation } = ReservationList();
  const { chambres, changeReserveStatus, setChambres } = ChambresListe();

  const fullName = useRef("");
  const id = useRef("");
  const debut = useRef("");
  const fin = useRef("");

  const fullNameVal = fullName.current.value;
  const idVal = id.current.value;
  const debutVal = debut.current.value;
  const finVal = fin.current.value;

  const handleClick = () => {
    if (
      fullNameVal === "" ||
      idVal === "" ||
      debutVal === "" ||
      finVal === ""
    ) {
      swal("ERROR", "Les Champs est vide", "error");
    }

    const ancienVal = chambres.filter(
      (item) => item.numero === parseInt(idVal)
    )[0];

    if (ancienVal && ancienVal.length === -1 && ancienVal.length === 0) {
      swal("ERROR", "Ce numéro de chambre n'existe pas", "error");
      return false;
    } else if ( ancienVal) {
     
      swal("Changer la chambre", "Cette chambre a été réservée", "error");
      return false;
    }
     else {
      // eslint-disable-next-line no-unused-vars
      setChambres((prevChambres) => changeReserveStatus(parseInt(idVal), true));
      const payload = {
        fullName: fullNameVal,
        numero: idVal,
        debut: debutVal,
        fin: finVal,
      };

      SetReservation((prev) => {
        if (Array.isArray(prev)) {
          return [...prev, payload];
        } else {
          return [payload];
        }
      });
      fullName.current.value = "";
      id.current.value= "";
      debut.current.value= "";
      fin.current.value= "";
      swal("Good job!", "La reservation est bien ajouté!", "success");
    }
  };

  return (
    <div className="mt-28 w-1/2 mx-auto">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nom & Prenom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name=" Fullname"
                    id="Fullname"
                    ref={fullName}
                    required
                    placeholder="Full name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Numero de chambre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="chambreNum"
                    id="chambreNum"
                    ref={id}
                    required
                    placeholder=" Numero de chambre"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5 mx-auto  text-center">
              <div className="w-1/3 mx-8">
                <label
                  htmlFor="debut-date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date du debut
                </label>
                <div className="mt-2">
                  <input
                    type="datetime-local"
                    name="debut-date"
                    id="debut-date"
                    ref={debut}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="w-1/3">
                <label
                  htmlFor="findate"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date du Fin
                </label>
                <div className="mt-2">
                  <input
                    type="datetime-local"
                    name="findate"
                    id="findate"
                    ref={fin}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
