/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DateNow, formatedDate } from "../partials/functions";

const ReservationList = () => {
  const [reservation, SetReservation] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedreservation = JSON.parse(localStorage.getItem("reservations"));
    if ( storedreservation && storedreservation.length !== 0  ) {
        SetReservation(storedreservation);
    }
  }, []);






  // Save data to local storage whenever reservation changes
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservation));
  }, [reservation]);
  return { reservation, SetReservation };
};

export default ReservationList;

