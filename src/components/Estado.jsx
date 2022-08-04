import React from "react";

const estados = [
  {
    id: 1,
    estado: "pendiente",
  },
  {
    id: 2,
    estado: "entregado",
  },
];
export default function Estado() {
  return (
    <>
      {estados.map((estado) => {
        return (
          <option value={estado.estado} key={estado.id}>
            <h3>{estado.estado}</h3>
          </option>
        );
      })}
    </>
  );
}
