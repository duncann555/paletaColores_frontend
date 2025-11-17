import { Card, Button } from "react-bootstrap";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { borrarColor, editarColor } from "../helpers/queries";

const ItemColor = ({ color, onCambioColores }) => {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Borrar color?",
      text: color.nombre,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d63031",
      cancelButtonColor: "#636e72",
      confirmButtonText: "Sí, borrar",
    });

    if (result.isConfirmed) {
      await borrarColor(color._id);
      onCambioColores && onCambioColores();
    }
  };

  const handleEdit = async () => {
    const { value: nombreNuevo } = await Swal.fire({
      title: "Editar nombre",
      input: "text",
      inputLabel: "Nuevo nombre",
      inputValue: color.nombre,
      showCancelButton: true,
    });

    if (!nombreNuevo) return;

    const { value: valorNuevo } = await Swal.fire({
      title: "Editar color",
      input: "text",
      inputLabel: "Nuevo HEX o RGB",
      inputValue: color.valor,
      showCancelButton: true,
    });

    if (!valorNuevo) return;

    const datosActualizados = {
      nombre: nombreNuevo,
      valor: valorNuevo,
    };

    await editarColor(color._id, datosActualizados);
    onCambioColores && onCambioColores();
  };

  return (
    <Card className="card-color">
      <div
        className="color-preview"
        style={{ background: color.valor || "#555" }}
      ></div>

      <Card.Body>
        <h5 className="mb-1">Color: {color.nombre}</h5>
        <p className="text-muted mb-3">Hex: {color.valor}</p>

        <div className="d-flex gap-2">
          <Button size="sm" className="btn-edit" onClick={handleEdit}>
            <FaEdit className="me-1" /> Editar
          </Button>
          <Button size="sm" className="btn-delete" onClick={handleDelete}>
            <FaTrashAlt className="me-1" /> Borrar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
