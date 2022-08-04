import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 400,
    diagnostico: "laptop asus roja",
    estado: "pendiente",
  },
  {
    id: 401,
    diagnostico: "laptop lenovo plomo",
    estado: "entregado",
  },
];
const servicioSlice = createSlice({
  name: "servicio",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
    del: (state, action) => {
      const dato = state.find((state) => state.id === action.payload);
      if (dato) {
        state.splice(state.indexOf(dato), 1);
      }
    },
  },
});

export const AllServicios = (state) => state.servicio;
export const { add, del } = servicioSlice.actions;
export default servicioSlice.reducer;
