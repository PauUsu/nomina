import './Menu.css'
import { Link } from "react-router-dom";

const Menu = () => {

  
  return (
    <div className="containerMenu">
      <div className="containerAdmon">
        <img src="public/ajustes.png" alt="" className="styleAjustes"/>
        <p className="styleTittleAdmon"> Administración 
            empleados </p>
      </div>
      <div className="containerList">
        <ul>
          <li>  <Link to={'/agregar'}>Agregar empleado</Link> </li>
          <li> Editar empleado </li>
          <li> <Link to={'/liquidar'}>Liquidación empleados</Link> </li>
          <li> Administración usuarios </li>
        </ul>
      </div>
    </div>
  );
};

export { Menu };
