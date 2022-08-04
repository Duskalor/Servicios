import "./App.css";
import ServiceList from "./components/ServiceList";
import AddService from "../src/components/AddService";
import { Route, Routes, Navigate } from "react-router-dom";
import ModificarService from "./components/ModificarService";

function App() {
  
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/" element={<ServiceList />} />
          <Route path="/create" element={<AddService />} />
          <Route path="/edit/:id" element={<ModificarService />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
