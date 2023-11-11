/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const ChambresListe = () => {
  const [chambres, setChambres] = useState([
    // {
    //       numero: 1,
    //       type: "simple",
    //       prix: 150,
    //       image: "simple.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 2,
    //       type: "double",
    //       prix: 300,
    //       image: "double.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 3,
    //       type: "suite",
    //       prix: 600,
    //       image: "suite.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 4,
    //       type: "double",
    //       prix: 300,
    //       image: "double.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 5,
    //       type: "simple",
    //       prix: 150,
    //       image: "simple.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 6,
    //       type: "suite",
    //       prix: 600,
    //       image: "suite.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 7,
    //       type: "simple",
    //       prix: 150,
    //       image: "simple.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 8,
    //       type: "double",
    //       prix: 300,
    //       image: "double.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 9,
    //       type: "suite",
    //       prix: 600,
    //       image: "suite.jpg",
    //       reserve: false
    //     },
    //     {
    //       numero: 10,
    //       type: "double",
    //       prix: 300,
    //       image: "double.jpg",
    //       reserve: false
    //     }
  ]);
  const changeReserveStatus = (numero, newStatus) => {
    return chambres.map(chambre => {
      if (chambre.numero === numero) {
        return { ...chambre, reserve: newStatus };
      }
      return chambre;
    });
  };


  useEffect(() => {
    const storedChambres = JSON.parse(localStorage.getItem("chambres"));
    if (storedChambres && storedChambres.length > 0  ) {
      setChambres(storedChambres);
    }else {
      console.log("no chambre exist")
    }
  }, []);

 
  useEffect(() => {
   if(chambres?.length > 0) {
    localStorage.setItem("chambres", JSON.stringify(chambres));
   }
  }, [chambres]);
  return { changeReserveStatus , chambres, setChambres  };
};

export default ChambresListe;

// test data


//  let exemple =  [
//   
// ]
