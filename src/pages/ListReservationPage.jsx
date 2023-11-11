
import swal from "sweetalert";
import ReservationList from "../data/reservationList";
import { formatedDate } from "../partials/functions";
import ChambresListe from "../data/chambreList";


export default function ListReservationPage() {
  const { reservation , SetReservation } = ReservationList();
 const {changeReserveStatus , setChambres} = ChambresListe()


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            {reservation.length > 0 ? (
              Object.keys(reservation[0]).map((key, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {key === "numero" ? "numero de chamber" : key}
                </th>
              ))
            ) : (
              <th scope="col" className="px-6 py-3">
                No keys available
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {reservation.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-white  even:bg-gray-50 text-black border-b"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                {item.Fullname}
              </th>
              <td className="px-6 py-4">{item.numero}</td>
              <td className="px-6 py-4">{formatedDate(item.debut)}</td>
              <td className="px-6 py-4">{formatedDate(item.fin)}</td>
              <td className="px-6 py-4">
                <button onClick={()=>swal({
                    title: "Are you sure?",
                    text: "To delete this reservation",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {

                        const updatedReservation = reservation.filter((reser) => reser?.numero !== item.numero );
                        SetReservation(updatedReservation);
                        changeReserveStatus(parseInt(item.numero) , false)
                        setChambres(changeReserveStatus(parseInt(item.numero) , false))
                      swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    } else {
                        
                      swal("Your imaginary file is safe!");
                    }
                  }) 
                }>
                    delete
                </button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
