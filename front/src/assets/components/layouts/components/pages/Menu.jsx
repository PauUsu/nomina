import './Menu.css'
import { Link } from "react-router-dom";

const Menu = () => {  
  return (
    <div className="containerMenu">
      <div className="containerAdmon">
        <img src="public/ajustes.png" alt="" className="styleAjustes"/>
        <p className="styleTittleAdmon"> Módulo
            empleados </p>
      </div>
      <div className="containerList">
        <ul>
          <li>  <Link to={'/agregar'}>Agregar empleado</Link> </li>
          <li> <Link to={'/liquidar'}>Liquidación empleado</Link> </li>
          <li> <Link to={"/administrar-usuarios"}>Administración empleados</Link> </li>
          <li> <Link to={"/"}>Cerrar sesión</Link> </li>
        </ul>
      </div>
    </div>
  );
};

export { Menu };
