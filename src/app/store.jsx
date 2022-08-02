import { configureStore } from "@reduxjs/toolkit";
import ServicioReducer from "../features/Servicios/ServicioSlice";

export const store = configureStore({
  reducer: {
    servicio: ServicioReducer,
  },
});
