import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 400,
    text: "laptop asus roja",
    estado: "pendiente",
  },
  {
    id: 401,
    text: "laptop lenovo plomo",
    estado: "entregado",
  },
];
const servicioSlice = createSlice({
  name: "servicio",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const AllServicios = (state) => state.servicio;
export const { add } = servicioSlice.actions;
export default servicioSlice.reducer;
