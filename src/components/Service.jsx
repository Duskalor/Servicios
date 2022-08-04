import React from "react";
import { useDispatch } from "react-redux";
import { del } from "../features/Servicios/ServicioSlice";
export default function Service({ dato }) {
  //console.log(dato);
  const { id, diagnostico, estado } = dato;

  const Dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{diagnostico}</td>
        <td>{estado}</td>
        <td>
          <button>Editar</button>
          <button onClick={() => Dispatch(del(id))}>Eliminar</button>
        </td>
      </tr>
    </tbody>
  );
}
