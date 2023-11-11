import { Link, useParams } from "react-router-dom";
import ChambresListe from "../data/chambreList";
import Loading from "../partials/loading";

export default function ChambreDetail() {
  const { id } = useParams();
  const { chambres } = ChambresListe();

  const chambre = chambres.filter((item) => item.numero === parseInt(id))[0];
  if (!chambre) { 
    return <Loading />
  }
  return (

   
    <section className="text-gray-600 body-font mt-5 overflow-hidden">
         
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={`/chambres/${chambre.image}`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {chambre.type}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {"Chambre " + chambre.type}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600 ml-3">
                  {Math.floor(Math.random() * 100)} Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                {id}
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>

            <div className="flex mt-11">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${chambre.prix}
              </span>
              <Link className="flex ml-auto" to={"../Reserver/"+chambre.numero}>
                <button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Reserver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
