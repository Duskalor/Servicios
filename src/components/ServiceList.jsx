import Service from "./Service";
import { useSelector } from "react-redux";
import { AllServicios } from "../features/Servicios/ServicioSlice";
import { Link } from "react-router-dom";
import "./serviceList.css";

export default function ServiceList() {
  const Datos = useSelector(AllServicios);

  //console.log(ServiceDato);
  return (
    <div>
      <div>
        <nav>
          {/* <Link to="/">Service List</Link> */}
          <Link to="/create">Create New</Link>
        </nav>
      </div>
      <hr />
      <div className="header">Servicios</div>

      <div>
        <table className="purpleRed">
          <thead>
            <tr>
              <th>ID</th>
              <th>Diagnostico</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>

          {Datos.map((dato, id) => {
            return <Service dato={dato} key={id} />;
          })}
        </table>
      </div>
    </div>
  );
}
