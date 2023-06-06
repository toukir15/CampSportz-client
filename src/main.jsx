import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import Container from "./components/Container";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
