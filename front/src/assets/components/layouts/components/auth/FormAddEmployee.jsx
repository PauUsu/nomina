import "./FormAddEmployee.css";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { conDatabase } from "../../../database/firebaseConfig";
import Swal from "sweetalert2";
import { Menu } from "../pages/Menu";

import "../pages/Menu.css";
import Header from "./Header";

const FormAddEmployee = () => {
  const [user, setUsers] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipodocumento, setTipodocumento] = useState("");
  const [numerodocumento, setNumerodocumento] = useState("");
  const [area, setArea] = useState("");
  const [cargo, setCargo] = useState("");
  const [fechaingreso, setFechaingreso] = useState("");
  const [tiposalario, setTiposalario] = useState("");
  const [tipocontrato, setTipocontrato] = useState("");
  const [valorsalario, setValorsalario] = useState("");
  const [deducciones, setDeducciones] = useState("");
  const [tipodeduccion, setTipodeduccion] = useState("");
  const [valordeducciones, setValordeducciones] = useState("");
  const [empleadoactivo, setEmpleadoactivo] = useState("");
  let redireccion = useNavigate();

  async function getUser() {
    let collectionUser = collection(conDatabase, "user");
    let datos = await getDocs(collectionUser);
    setUsers(datos.docs.map((doc) => ({ ...doc.data() })));
    console.log(datos.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getUser();
  }, []);

  const buscarUsuario = () => {
    let estado = user.some((use) => use.usuario === usuario);
    return estado;
  };

  function confirmar() {
    Swal.fire({
      title: "Esta seguro que quiere registrarlo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        // Aqui se llama la funcion de crear Empleado
        crearEmpleado();
        Swal.fire({
          title: "Exitoso",
          text: "Se ha registrado correctamente el empleado",
          icon: "success",
        });
        redireccion("/agregar");
      }
    });
  }

  async function crearEmpleado() {
    let nuevoEmpleado = {
      usuario,
      contrasena,
      nombres,
      apellidos,
      tipodocumento,
      numerodocumento,
      area,
      cargo,
      fechaingreso,
      tiposalario,
      tipocontrato,
      valorsalario,
      deducciones,
      tipodeduccion,
      valordeducciones,
      empleadoactivo,
    };
    let collectionEmpleado = collection(conDatabase, "user");
    await addDoc(collectionEmpleado, nuevoEmpleado);
    console.log(nuevoEmpleado);
  }

  const registrarEmpleado = (event) => {
    event.preventDefault();
    if (!buscarUsuario()) {
      confirmar();
    } else {
      Swal.fire({
        title: "Error",
        text: "Empleado ya existe en la base de datos",
        icon: "error",
      });
    }
  };

  return (
    <section>
      <Header />
      <div className="containerMenuForm menu">
        <Menu />
        <main>
          <div className="containerFormAdd">
            <div className="containerAddEmploy styleAddEmploy">
              <p className="styleLetterAdd"> Módulo agregar </p>
            </div>
            <div className="containerAddEmploy styleform">
              {/* Formulario con nuevos estilos */}
              <form className="form" onSubmit={registrarEmpleado}>
                <div className="flex">
                  <label>
                    <input
                      onChange={(e) => setUsuario(e.target.value)}
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                    <span>Nombre de usuario</span>
                  </label>
                  <label>
                    <input
                      onChange={(e) => setContrasena(e.target.value)}
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                    <span>Contraseña</span>
                  </label>
                  <label>
                    <input
                      onChange={(e) => setNombres(e.target.value)}
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                    <span>Nombres</span>
                  </label>
                  <label>
                    <input
                      onChange={(e) => setApellidos(e.target.value)}
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                    />
                    <span>Apellidos</span>
                  </label>
                </div>
                <label htmlFor="">
                  <select
                    onChange={(e) => setTipodocumento(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                  >
                    <option value=""> Seleccione una opción</option>
                    <option value="Cédula de ciudadanía"> Cédula de ciudadanía </option>
                    <option value="Cédula de extranjería"> Cédula de extranjería </option>
                    <option value="Tarjeta de identidad"> Tarjeta de identidad </option>
                  </select>
                  <span>Tipo de documento</span>
                </label>

                <label>
                  <input
                    onChange={(e) => setNumerodocumento(e.target.value)}
                    className="input"
                    type="text"
                    placeholder=""
                    required=""
                  />
                  <span> Número de documento</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setArea(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Talento humano"> Talento humano </option>
                    <option value="Centro costos y nómina"> Centro costos y nómina </option>
                    <option value="Tecnología"> Tecnología </option>
                    <option value="Docentes"> Docentes </option>
                  </select>
                  <span>Área</span>
                </label>

                <label>
                  <input
                    onChange={(e) => setCargo(e.target.value)}
                    className="input"
                    type="text"
                    placeholder=""
                    required=""
                  />
                  <span>Cargo del colaborador</span>
                </label>

                <label>
                  <input
                    onChange={(e) => setFechaingreso(e.target.value)}
                    className="input"
                    type="date"
                    placeholder=""
                    required=""
                  />
                  <span>Fecha de ingreso</span>
                </label>

                <div className="flex">
                  <label htmlFor="">
                    <select
                      onChange={(e) => setTiposalario(e.target.value)}
                      name=""
                      id=""
                      className="stylesSelects"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Por horas"> Por horas </option>
                      <option value="Salario fijo"> Salario fijo </option>
                    </select>
                    <span>Tipo de salario</span>
                  </label>

                  <label htmlFor="">
                    <select
                      onChange={(e) => setTipocontrato(e.target.value)}
                      name=""
                      id=""
                      className="stylesSelects"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Termino indefinido"> Termino indefinido </option>
                      <option value="Termino fijo"> Termino fijo </option>
                    </select>
                    <span>Tipo de contrato</span>
                  </label>
                </div>

                <label>
                  <input
                    onChange={(e) => setValorsalario(e.target.value)}
                    className="input"
                    type="number"
                    placeholder=""
                    required=""
                  />
                  <span>Salario</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setDeducciones(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Si"> Si </option>
                    <option value="No"> No </option>
                  </select>
                  <span>¿Tiene alguna deducción?</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setTipodeduccion(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Libranza fondo de empleados"> Libranza fondo de empleados </option>
                    <option value="Libranza Bancolombia"> Libranza Bancolombia </option>
                    <option value="Póliza salud"> Póliza salud </option>
                    <option value="N/A"> N/A </option>
                  </select>
                  <span>Seleccione el tipo de deducción </span>
                </label>

                <label>
                  <input
                    onChange={(e) => setValordeducciones(e.target.value)}
                    className="input"
                    type="number"
                    placeholder=""
                    required=""
                  />
                  <span>Digite el valor de la deducción</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setEmpleadoactivo(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Si"> Si </option>
                    <option value="No"> No </option>
                  </select>
                  <span>¿Es un empleado ACTIVO?</span>
                </label>
                <div className="btonSubmit">
                  <button className="button" type="submit">
                    <span className="span">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 23 21"
                        height="21"
                        width="23"
                        className="svg-icon"
                      >
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2"
                          stroke="black"
                          d="M1.97742 19.7776C4.45061 17.1544 7.80838 15.5423 11.5068 15.5423C15.2053 15.5423 18.5631 17.1544 21.0362 19.7776M16.2715 6.54229C16.2715 9.17377 14.1383 11.307 11.5068 11.307C8.87535 11.307 6.74212 9.17377 6.74212 6.54229C6.74212 3.91082 8.87535 1.77759 11.5068 1.77759C14.1383 1.77759 16.2715 3.91082 16.2715 6.54229Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="lable">Agregar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export { FormAddEmployee };
