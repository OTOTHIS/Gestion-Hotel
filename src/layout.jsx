import { Outlet } from "react-router-dom";
import NavBar from "./partials/Nav";

export default function Layout() {
  return (
    <div className="bg-white">
      <NavBar />
      <Outlet />
    </div>
  );
}
