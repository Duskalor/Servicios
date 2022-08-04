import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit, AllServicios } from "../features/Servicios/ServicioSlice";
import Estado from "./Estado";
import "./addservice.css";

export default function ModificarService() {
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

  const params = useParams();

  const datos = useSelector(AllServicios);
  // console.log(datos, params);
  const { diagnostico, id, estado } = datos.find(
    (dato) => dato.id == params.id
  );

  const SetDatosAntiguos = (diagnostico, id, estado) => {
    setServiceDato({ ...ServiceDato, [diagnostico]: diagnostico });
    setServiceDato({ ...ServiceDato, [id]: id });
    setServiceDato({ ...ServiceDato, [estado]: estado });
  };
  console.log(ServiceDato);

  useEffect(() => {
    SetDatosAntiguos(diagnostico, id, estado);
  }, []);

  //console.log(diagnostico, id, estado);

  return (
    <div>
      <div className="login-box">
        <h2> MODIFICAR</h2>
        <form>
          <div className="user-box">
            <input
              required
              name="id"
              type="number"
              value={id}
              onChange={DatosXguardar}
            />
            <label>NUMERO DE ORDEN</label>
          </div>

          <div className="user-box">
            <select
              required
              name="estado"
              value={estado}
              onChange={DatosXguardar}
            >
              <option></option>
              <Estado />
            </select>
            <label> ESTADO</label>
          </div>

          <div className="user-box">
            <input
              name="diagnostico"
              type="text"
              value={diagnostico}
              onChange={DatosXguardar}
            />
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
              dispatch(edit(ServiceDato));
              Navigate("/");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Guardar
          </a>
        </form>
      </div>
    </div>
  );
}
