import React from "react";
import { useDispatch } from "react-redux";
import { del } from "../features/Servicios/ServicioSlice";
export default function Service({ dato }) {
  //console.log(dato);
  const { id, diagnostico, estado } = dato;

  const Dispatch = useDispatch();
  return (
    <div>
      <h2>id :{id}</h2>
      <p>diagnostico :{diagnostico}</p>
      <h3>estado :{estado}</h3>
      <button>Editar</button>
      <button onClick={() => Dispatch(del(id))}>Eliminar</button>
    </div>
  );
}
