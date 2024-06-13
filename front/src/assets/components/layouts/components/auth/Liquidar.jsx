import { Menu } from "../pages/Menu";
import Header from "./Header";
import "./Liquidar.css";
import { useState } from "react";

const Liquidar = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [salario, setSalario] = useState("");
  const [auxilioTransporte, setAuxilioTransporte] = useState("No");
  const [liquidacion, setLiquidacion] = useState(null);

  const calcular = () => {
    const inicio = new Date(fechaInicio);
    const final = new Date(fechaFinal);
    const diferenciaFecha = final - inicio;
    const diasTrabajados = diferenciaFecha / (1000 * 60 * 60 * 24);
    const mesesTrabajados = diasTrabajados / 30;

    const salarioMensual = parseFloat(salario);
    const baseLiquidacion = (salarioMensual / 30) * diasTrabajados;

    const auxilio = auxilioTransporte === "Si" ? 162000 : 0;
    const totalLiquidacion = baseLiquidacion + auxilio * mesesTrabajados;

    setLiquidacion(totalLiquidacion);
  };

  return (
    <section>
      <Header />
      <div className="containerMenuForm menu">
        <Menu />
        <main>
          <div className="titleCalculadora">
            <p className="styleHello"> Calculadora </p>
          </div>
          <form action="" className="formLiquidar">
            <label htmlFor="">
              <span>Fecha inicio del contrato</span>
              <input
                onChange={(e) => setFechaInicio(e.target.value)}
                type="date"
                value={fechaInicio}
              />
            </label>
            <label htmlFor="">
              <span>Fecha final del contrato</span>
              <input
                onChange={(e) => setFechaFinal(e.target.value)}
                type="date"
                value={fechaFinal}
              />
            </label>
            <label htmlFor="">
              <span>Ingrese el salario mensual</span>
              <input
                onChange={(e) => setSalario(e.target.value)}
                type="number"
                value={salario}
              />
            </label>
            <label htmlFor="">
              <span>¿Tiene derecho a auxilio de transporte?</span>
              <select
                onChange={(e) => setAuxilioTransporte(e.target.value)}
                value={auxilioTransporte}
                name=""
                id=""
              >
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </label>
          </form>
          <div className="buttonLiqui">
            <div className="btonSubmit">
              <button onClick={calcular} className="buttonTwo" type="submit">
                <span className="spanTwo">
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
                <span className="lableTwo">Liquidación empleado</span>
              </button>
            </div>
          </div>
          {liquidacion != null && (
            <div className="card">
              <h1>Resumen Liquidación</h1>
              <main>
                <p>Salario del trabajador: ${salario}</p>
                <p>Fecha inicio contrato: {fechaInicio}</p>
                <p>Fecha retiro: {fechaFinal}</p>
                <p>Tiene auxilio de transporte: {auxilioTransporte}</p>
                <p>Valor a liquidar: ${liquidacion.toFixed(2)}</p>
              </main>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Liquidar;
