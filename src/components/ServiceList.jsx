import React, { useState } from "react";
import Estado from "./Estado";
import Service from "./Service";
import { useSelector, useDispatch } from "react-redux";
import { add, AllServicios } from "../features/Servicios/ServicioSlice";
export default function ServiceList() {
  const Datos = useSelector(AllServicios);
  const dispatch = useDispatch();
  const [ServiceDato, setServiceDato] = useState({
    id: "",
    diagnostico: "",
    estado: "",
  });

  const DatosXguardar = (e) => {
    console.log(e.target.name, e.target.value);
    setServiceDato({ ...ServiceDato, [e.target.name]: e.target.value });
  };
  console.log(ServiceDato);

  return (
    <div>
      <div>
        <h1> Agregar Nuevo</h1>
        <form>
          <label>ingresar id:</label>
          <input name="id" type="number" onChange={DatosXguardar} />
          <label>Escoger estado:</label>
          <select name="estado" id="estado" onChange={DatosXguardar}>
            <option></option>
            <Estado />
          </select>
          <label>Diagnostico:</label>
          <input name="diagnostico" type="text" onChange={DatosXguardar} />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(add(ServiceDato));
            }}
          >
            Agregar
          </button>
        </form>
      </div>
      <hr />
      <div>
        {Datos.map((dato, id) => {
          return <Service dato={dato} key={id} />;
        })}
      </div>
    </div>
  );
}
