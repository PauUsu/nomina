import './FormAddEmployee.css'

const FormAddEmployee = () => {
  return (
    <div className="containerFormAdd">
      <div className="containerAddEmploy styleAddEmploy">
        <img src="public/addUser.png" alt="addImg" className="styleImgAdd" />
        <p className="styleLetterAdd"> Agregar empleado </p>
      </div>
      <div className="containerAddEmploy styleform">
        {/* Formulario con nuevos estilos */}
        <form className="form">
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Nombres</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Apellidos</span>
            </label>
          </div>
          <label htmlFor="">
            <select name="" id="" className="stylesSelects">
              <option value=""> Seleccione una opción</option>
              <option value=""> Cédula de ciudadanía </option>
              <option value=""> Cédula de extranjería </option>
              <option value=""> Tarjeta de identidad </option>
            </select>
            <span>Tipo de documento</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span> Número de documento</span>
          </label>

          <label htmlFor="">
            <select name="" id="" className="stylesSelects">
              <option value="">Seleccione una opción</option>
              <option value=""> Talento humano </option>
              <option value=""> Centro costos y nómina </option>
              <option value=""> Tecnología </option>
              <option value=""> Docentes </option>
            </select>
            <span>Área</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Cargo del colaborador</span>
          </label>

          <label>
            <input className="input" type="date" placeholder="" required="" />
            <span>Fecha de ingreso</span>
          </label>

          <div className="flex">
            <label htmlFor="">
              <select name="" id=""  className="stylesSelects">
                <option value="">Seleccione una opción</option>
                <option value=""> Por horas </option>
                <option value=""> Salario fijo </option>
              </select>
              <span>Tipo de salario</span>
            </label>

            <label htmlFor="">
              <select name="" id=""  className="stylesSelects">
                <option value="">Seleccione una opción</option>
                <option value=""> Termino indefinido </option>
                <option value=""> Termino fijo </option>
              </select>
              <span>Tipo de contrato</span>
            </label>
          </div>

          <label>
            <input className="input" type="number" placeholder="" required="" />
            <span>Salario</span>
          </label>

          <label htmlFor="">
            <select name="" id=""  className="stylesSelects">
              <option value="">Seleccione una opción</option>
              <option value=""> Si </option>
              <option value=""> No </option>
            </select>
            <span>¿Tiene alguna deducción?</span>
          </label>

          <label htmlFor="">
            <select name="" id=""  className="stylesSelects">
              <option value="">Seleccione una opción</option>
              <option value=""> Libranza fondo de empleados </option>
              <option value=""> Libranza Bancolombia </option>
              <option value=""> Póliza salud </option>
              <option value=""> N/A </option>
            </select>
            <span>Seleccione el tipo de deducción </span>
          </label>

          <label>
            <input className="input" type="number" placeholder="" required="" />
            <span>Digite el valor de la deducción</span>
          </label>

          <label htmlFor="">
          <select name="" id=""  className="stylesSelects">
              <option value="">Seleccione una opción</option>
              <option value=""> Si </option>
              <option value=""> No </option>
            </select>
            <span>¿Es un empleado ACTIVO?</span>
          </label>

          <div className="btonSubmit">
            <button className="submit">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { FormAddEmployee };
