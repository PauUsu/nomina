import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/layouts/components/pages/Home.jsx";
import Liquidar from "./assets/components/layouts/components/auth/Liquidar.jsx";
import { FormAddEmployee } from "./assets/components/layouts/components/auth/FormAddEmployee.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/liquidar",
    element: <Liquidar />,
  },
  {
    path: "/agregar",
    element: <FormAddEmployee />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
