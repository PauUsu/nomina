import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { conDatabase } from "../../../database/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2"

const Login = () => {
  // esta funcion es para almacenar el objeto con los usuarios
  const [user, setUsers] = useState([]);

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  async function getUser() {
    let collectionUser = collection(conDatabase, "user");

    let datos = await getDocs(collectionUser);

    console.log(datos.docs.map((doc) => ({ ...doc.data() })));
    setUsers(datos.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getUser();
  }, []);

  const buscarUsuario = () => {
    let estado = user.some(
      (use) => use.usuario === usuario && use.contrasena === contrasena
    );
    return estado;
  };

  let redireccion = useNavigate();

  // if (getUsuario === "Paula" && getContrasena === "123456") {
  //   console.log("correcto");
  // }

  function inicioSesion() {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Bienvenido",
        text: "Será direccionado al Menú",
        icon: "success"
    })
      // console.log("bienvenido...");
      redireccion("/home");
    } else {
      // console.log("error de autenticación");
      Swal.fire({
        title: "Error",
        text: "Usuario y contraseña incorrecto",
        icon: "Error"
    })
    }
  }

  return (
    <div className="containerLogin">
      <div className="styleUser">
        <p className="colorText"> Usuario </p>
        <input
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
          placeholder="Usuario"
          type="text"
          name="user"
          className="inputsLogin"
        />
      </div>
      <div className="stylePass">
        <p className="colorText"> Contraseña </p>
        <input
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Contrasena"
          type="password"
          name="pass"
          className="inputsLogin"
        />
      </div>
      <div className="BotonesLogin">
        <a href=""> Olvidaste tu contraseña? </a>
        <input
          onClick={inicioSesion}
          type="button"
          value="Ingresar "
          className="styleButtonLogin"
        />
      </div>
    </div>
  );
};

export default Login;
