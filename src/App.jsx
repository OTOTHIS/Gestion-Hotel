/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Layout from "./layout";
import ListeChambrePage from "./pages/ListeChambrePage";
import ChambreDetail from "./pages/chambreDetail";
import Reserver from "./pages/Reserver";
import ListReservationPage from "./pages/ListReservationPage";
import AddChambre from "./pages/addChambre";
import ChambreDisponible from "./pages/chambreDisponible";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          ListReservationPage
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="ListeChambre" element={<ListeChambrePage />} />
            <Route
              path="ListeChambre/chambre/:id"
              element={<ChambreDetail />}
            />
            <Route path="Reserver/:id" element={<Reserver />} />
            <Route path="Reserver" element={<Reserver />} />
            <Route
              path="listeDeReservation"
              element={<ListReservationPage />}
            />
            <Route path="addChambre" element={<AddChambre />} />
            <Route path="ChambreDisponible" element={<ChambreDisponible />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
