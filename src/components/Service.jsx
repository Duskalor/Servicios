import React from "react";

export default function Service({ dato }) {
  //console.log(dato);
  const { id, text, estado } = dato;
  return (
    <div>
      <h2>id :{id}</h2>
      <p>text :{text}</p>
      <h3>estado :{estado}</h3>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
}
