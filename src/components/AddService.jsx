import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../features/Servicios/ServicioSlice";
import Estado from "./Estado";
import "./addservice.css";

export default function AddService() {
  const dispatch = useDispatch();
  const [ServiceDato, setServiceDato] = useState({
    id: "",
    diagnostico: "",
    estado: "",
  });
  const Navigate = useNavigate();
  const DatosXguardar = (e) => {
    console.log(e.target.name, e.target.value);
    setServiceDato({ ...ServiceDato, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login-box">
        <h2> Agregar Nuevo</h2>
        <form>
          <div className="user-box">
            <input required name="id" type="number" onChange={DatosXguardar} />
            <label>NUMERO DE ORDEN</label>
          </div>

          <div className="user-box">
            <select required name="estado" onChange={DatosXguardar}>
              <option></option>
              <Estado />
            </select>
            <label> ESTADO</label>
          </div>

          <div className="user-box">
            <input name="diagnostico" type="text" onChange={DatosXguardar} />
            <label>DIAGNOSTICO</label>
          </div>
          {/* <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(add(ServiceDato));
              Navigate("/");
            }}
          >
            Agregar
          </button> */}

          <a
            onClick={(e) => {
              e.preventDefault();
              dispatch(add(ServiceDato));
              Navigate("/");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            GUARDAR
          </a>
        </form>
      </div>
    </div>
  );
}
