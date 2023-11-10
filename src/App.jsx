/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Layout from "./layout";
import ListeChambrePage from "./pages/ListeChambrePage";
import ChambreDetail from "./pages/chambreDetail";
import Reserver from "./pages/Reserver";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="ListeChambre" element={<ListeChambrePage />} />
              <Route path="ListeChambre/chambre/:id" element={<ChambreDetail />}/>
              <Route path="Reserver/:id" element={<Reserver />}/>
              <Route path="Reserver" element={<Reserver />}/>
          </Route>
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
