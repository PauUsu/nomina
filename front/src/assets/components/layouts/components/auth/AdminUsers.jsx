import "./AdminUsers.css";
import React, { useEffect, useState } from "react";
import { conDatabase } from "../../../database/firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { Menu } from "../pages/Menu";
import { Link } from "react-router-dom";
import Header from "./Header";

const AdminUsers = () => {
  const [user, setUsers] = useState([]);
  async function getUser() {
    let collectionUsers = collection(conDatabase, "user");
    let resultado = await getDocs(collectionUsers);
    console.log(resultado.docs);
    setUsers(resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
  }
  useEffect(() => {
    getUser();
  }, []);

  function eliminarUsuario(id) {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmar(id);
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado",
          icon: "success",
        });
      }
    });
  }

  async function confirmar(id) {
    let deleteUser = doc(conDatabase, "user", id);
    await deleteDoc(deleteUser);
    getUser();
  }

  return (
    <section>
      <Header />
      <div className="containerMenuForm menu">
        <Menu />
        <main className="fondo scroll-1">
          <div className="contenedorCard">
            {user.map((element) => (
              <section key={element.id} className="contenedorSection">
                <div className="cookie-card">
                  <span className="cookie-title">
                    🍪 {element.nombres} {element.apellidos}
                  </span>
                  <div className="cookie-description">
                    <p>
                      <b>Tipo de documento: </b>
                      {element.tipodocumento}
                    </p>
                    <p>
                      <b>Número de documento:</b> {element.numerodocumento}
                    </p>
                  </div>
                  <div className="cookie-description">
                    <p>
                      <b>Área: </b>
                      {element.area}
                    </p>
                    <p>
                      <b>Fecha de ingreso:</b> {element.fechaingreso}
                    </p>
                  </div>
                  <div className="cookie-description">
                    <p>
                      <b>Cargo: </b>
                      {element.cargo}
                    </p>
                    <p>
                      <b>Tipo salario: </b> {element.tiposalario}
                    </p>
                  </div>

                  <div className="cookie-description">
                    <p>
                      <b>Tipo contrato: </b> {element.tipocontrato}
                    </p>
                    <p>
                      <b>Salario: </b>
                      {element.valorsalario}
                    </p>
                  </div>

                  <div className="cookie-description">
                    <p>
                      <b>Tiene deducciones?: </b>
                      {element.deducciones}
                    </p>
                    <p>
                      <b>Valor deducción: </b>
                      {element.valordeducciones}
                    </p>
                  </div>

                  <div className="cookie-description">
                    <p>
                      <b>Tipo de deducción: </b>
                      {element.tipodeduccion}
                    </p>
                    <p>
                      <b>Empleado activo: </b>
                      {element.empleadoactivo}
                    </p>
                  </div>

                  <div className="contenedorBtns">
                    <div className="card-button-wrapper">
                      <button className="card-button secondary">
                        <Link className="link" to={"/editar/" + element.id}>Editar</Link>
                        </button>
                      <button className="card-button primary" onClick={() => eliminarUsuario(element.id)}>Eliminar</button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default AdminUsers;
