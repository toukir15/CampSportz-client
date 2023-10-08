import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function Main() {
  const { isNight } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className={`${isNight ? "text-white" : ""}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
