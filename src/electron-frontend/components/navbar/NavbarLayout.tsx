import "./navbar.css";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function NavbarLayout() {
  return (
    <div className="row">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
