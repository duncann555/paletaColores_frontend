import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import FormColor from "./components/FormColor";
import ListaColores from "./components/ListaColores";

function App() {
  const [recargar, setRecargar] = useState(false);

  const manejarCambioColores = () => {
    setRecargar((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Menu />

      <div className="page-container d-flex gap-4 flex-wrap flex-md-nowrap page-container">
        <div className="panel-form position-relative">
          <FormColor onColorCreado={manejarCambioColores} />
        </div>

        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <ListaColores
                  recargar={recargar}
                  onCambioColores={manejarCambioColores}
                />
              }
            />
            <Route
              path="/crear"
              element={
                <ListaColores
                  recargar={recargar}
                  onCambioColores={manejarCambioColores}
                />
              }
            />
            <Route
              path="/sobre"
              element={
                <div>
                  <h2>Sobre este proyecto</h2>
                  <p>
                    Este ejercicio conecta un backend en Node + MongoDB con un
                    frontend en React para administrar una paleta de colores.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
