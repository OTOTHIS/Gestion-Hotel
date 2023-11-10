

import { Link } from "react-router-dom";
import ChambresListe from "../data/chambreList";
import Loading from "../partials/loading";




  export default function ListeChambrePage() {
    const {chambres} = ChambresListe();
  //  const {Liste , setListe} = useState([])
  //  const deleteItem = (id) => {
  // console.log(id)
  // const filtredItem = chambres.filter(chambre => chambre.numero !== id )
  //   console.log(filtredItem)
  // setChambres(filtredItem)
    
  //  }

  if (!chambres) { 
    return <Loading />
  }

    return (
      <div className="bg-white m-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Liste des chambres </h2>
      
                  
      
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {chambres?.map((chambre) => (
              <div key={chambre.numero} className="group relative">
              <Link className="block" to={`chambre/${chambre.numero}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`./chambres/${chambre.image}`}
                    alt={chambre.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700 capitalize">
                    {chambre.type }
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{chambre.numero}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{chambre.prix   + " " + chambre.reserve} MAD</p>
                </div>
               {/* <button onClick={()=> deleteItem(chambre.numero)}> delete</button> */}
               </Link>
              </div>
       
            ))}
          </div>
      

        </div>
      </div>
    )
  }
  