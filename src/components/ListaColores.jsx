import { useEffect, useState } from "react";
import { obtenerColores } from "../helpers/queries";
import ItemColor from "./ItemColor";

const ListaColores = ({ recargar, onCambioColores }) => {
  const [colores, setColores] = useState([]);

  const cargarColores = async () => {
    const datos = await obtenerColores();
    if (Array.isArray(datos)) {
      setColores(datos);
    } else {
      setColores([]);
    }
  };

  useEffect(() => {
    cargarColores();
  }, [recargar]);

  return (
    <div className="mt-2 lista-colores">
      <h2 className="mb-3">Lista de colores</h2>
      <p className="text-muted mb-3">
        Estos son los colores guardados en la base de datos.
      </p>

      <div className="d-flex flex-wrap gap-3">
        {colores.length === 0 ? (
          <p className="text-secondary">Todavía no hay colores cargados.</p>
        ) : (
          colores.map((color) => (
            <ItemColor
              key={color._id}
              color={color}
              onCambioColores={onCambioColores}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaColores;
