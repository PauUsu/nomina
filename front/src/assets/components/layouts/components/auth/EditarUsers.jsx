import "./FormAddEmployee.css";
import React, { useEffect, useState } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
import { useNavigate, Link, useParams } from "react-router-dom";
import { conDatabase } from "../../../database/firebaseConfig";
import Swal from "sweetalert2";
import { Menu } from "../pages/Menu";
import "../pages/Menu.css";
import AdminUsers from "./AdminUsers";
import Header from "./Header";

const EditarUsers = () => {
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
  let { id } = useParams();

  async function getUserId(id) {
    let datosEditar = await getDoc(doc(conDatabase, "user", id));
    console.log(datosEditar);
    setUsuario(datosEditar.data().usuario);
    setContrasena(datosEditar.data().contrasena);
    setNombres(datosEditar.data().nombres);
    setApellidos(datosEditar.data().apellidos);
    setTipodocumento(datosEditar.data().tipodocumento);
    setNumerodocumento(datosEditar.data().numerodocumento);
    setArea(datosEditar.data().area);
    setCargo(datosEditar.data().cargo);
    setFechaingreso(datosEditar.data().fechaingreso);
    setTiposalario(datosEditar.data().tiposalario);
    setTipocontrato(datosEditar.data().tipocontrato);
    setValorsalario(datosEditar.data().valorsalario);
    setDeducciones(datosEditar.data().deducciones);
    setTipodeduccion(datosEditar.data().tipodeduccion);
    setValordeducciones(datosEditar.data().valordeducciones);
    setEmpleadoactivo(datosEditar.data().empleadoactivo);
  }

  useEffect(() => {
    getUserId(id);
  }, []);

  async function editarEmpleado() {
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
    let enviarEmpleado = doc(conDatabase, "user", id);
    await updateDoc(enviarEmpleado, nuevoEmpleado);
    console.log(nuevoEmpleado);
  }

  return (
    <section>
      <Header />
      <div className="containerMenuForm menu">
        <Menu />
        <main>
          <div className="containerFormAdd">
            <div className="containerAddEmploy styleAddEmploy">
              <p className="styleLetterAdd"> Editar empleado </p>
            </div>
            <div className="containerAddEmploy styleform">
              {/* Formulario con nuevos estilos */}
              <form className="form" onSubmit={editarEmpleado}>
                <div className="flex">
                  <label>
                    <input
                      onChange={(e) => setUsuario(e.target.value)}
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                      value={usuario}
                    />
                    <span>Nombre Usuario</span>
                  </label>
                  <label>
                    <input
                      onChange={(e) => setContrasena(e.target.value)}
                      className="input"
                      type="text"
                      placeholder=""
                      required=""
                      value={contrasena}
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
                      value={nombres}
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
                      value={apellidos}
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
                    value={tipodocumento}
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
                    value={numerodocumento}
                  />
                  <span> Número de documento</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setArea(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                    value={area}
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
                    value={cargo}
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
                    value={fechaingreso}
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
                      value={tiposalario}
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
                      value={tipocontrato}
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
                    value={valorsalario}
                  />
                  <span>Salario</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setDeducciones(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                    value={deducciones}
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
                    value={tipodeduccion}
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
                    value={valordeducciones}
                  />
                  <span>Digite el valor de la deducción</span>
                </label>

                <label htmlFor="">
                  <select
                    onChange={(e) => setEmpleadoactivo(e.target.value)}
                    name=""
                    id=""
                    className="stylesSelects"
                    value={empleadoactivo}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Si"> Si </option>
                    <option value="No"> No </option>
                  </select>
                  <span>¿Es un empleado ACTIVO?</span>
                </label>

                <div className="contenedorBtns">
                  <div className="card-button-wrapper">
                    <button  className="card-button secondary" type="submit" onClick={editarEmpleado}>
                      Editar
                    </button>
                    <button className="card-button primary">
                      <Link to={"/administrar-usuarios"}> Cancelar </Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export { EditarUsers };
