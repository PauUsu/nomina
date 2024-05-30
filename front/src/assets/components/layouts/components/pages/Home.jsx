// import { useNavigate } from "react-router-dom"
// import { BrowserRouter as  Route } from "react-router-dom";
import "./Home.css";
import Header from "../auth/Header";
import { Menu } from "./Menu";
// import { FormAddEmployee } from "../auth/FormAddEmployee";
// import Liquidar from "../auth/Liquidar";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="containerMenuForm menu">
        <Menu />
      </div>
      <div>
        {/* <Route path="/agregar" element={<FormAddEmployee />} /> */}
        {/* <Route path="/liquidar" element={<Liquidar />} /> */}
      </div>
    </div>
  );
};

export default Home;
