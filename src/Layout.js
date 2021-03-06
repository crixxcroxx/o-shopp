import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {

  return (
    <div className="app">
      <Navbar />

      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
}