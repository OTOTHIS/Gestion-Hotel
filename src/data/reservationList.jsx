/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import ChambresListe from "./chambreList";

const ReservationList = () => {
  const [reservation, SetReservation] = useState([]);
  const { changeReserveStatus } = ChambresListe();
  // Load data from local storage on component mount
  useEffect(() => {
    const storedreservation = JSON.parse(localStorage.getItem("reservations"));
    if (storedreservation && storedreservation.length !== 0) {
      SetReservation(storedreservation);
    }
  }, []);


  useEffect(() => {
    const currentDate = new Date().toISOString();

    const latestReservations = {};

    reservation.forEach((reservation) => {
      const currentNumero = reservation.numero;

      if (
        !latestReservations[currentNumero] ||
        new Date(reservation.fin) >
          new Date(latestReservations[currentNumero].fin)
      ) {
        latestReservations[currentNumero] = reservation;
      }
    });

    const updatedReservations = Object.values(latestReservations).filter(
      (reservation) => new Date(reservation.fin) < new Date(currentDate)
    );

    if (updatedReservations.length === 0) {
      console.log("No reservation ends now");
    } else {
     
      updatedReservations.forEach((item) =>
        changeReserveStatus(item.numero, false)
      );
      SetReservation(updatedReservations)
   
    }
  }, [reservation, changeReserveStatus]);




  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservation));
  }, [reservation]);
  return { reservation, SetReservation };
};

export default ReservationList;
