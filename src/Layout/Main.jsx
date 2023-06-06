import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
