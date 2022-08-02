import React, { useState } from "react";
import Estado from "./Estado";
import Service from "./Service";
import { useSelector } from "react-redux";
import { AllServicios } from "../features/Servicios/ServicioSlice";
export default function ServiceList() {
  const Datos = useSelector(AllServicios);
  const [ServiceDato, setServiceDato] = useState({
    id: "",
    text: "",
    estado: "",
  });

  const DatosXguardar = (e) => {
    // console.log(e.target.name, e.target.value);
    setServiceDato({
      [e.target.name]: e.target.value,
    });
  };

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
          <label>Text:</label>
          <input name="text" type="text" onChange={DatosXguardar} />
          <button>Agregar</button>
        </form>
      </div>
      <hr />
      <div>
        {Datos.map((dato) => {
          return <Service dato={dato} key={dato.id} />;
        })}
      </div>
    </div>
  );
}
