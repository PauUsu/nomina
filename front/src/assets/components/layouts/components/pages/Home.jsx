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
        <div className="containerInfoLogin">
            <p className="styleHello"> Bienvenido al Centro de Costos y Nómina</p>
            <img src="public/infoLogin.jpg" alt="empleados" className="styleImgLogin" />
        </div>
      </div>
    </div>
  );
};

export default Home;
