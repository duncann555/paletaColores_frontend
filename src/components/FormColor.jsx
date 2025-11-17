import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearColor } from "../helpers/queries";

const coloresPredefinidos = {
  rojo: "#FF0000",
  azul: "#0000FF",
  verde: "#008000",
  amarillo: "#FFFF00",
  naranja: "#FFA500",
  violeta: "#8A2BE2",
  purpura: "#800080",
  rosa: "#FFC0CB",
  celeste: "#87CEEB",
  turquesa: "#40E0D0",
  bordo: "#800000",
  marron: "#8B4513",
  chocolate: "#7B3F00",
  beige: "#F5F5DC",
  crema: "#FFFDD0",
  gris: "#808080",
  negro: "#000000",
  blanco: "#FFFFFF",
  salmon: "#FA8072",
  coral: "#FF7F50",
  fucsia: "#FF00FF",
  magenta: "#FF00FF",
  cian: "#00FFFF",
  lila: "#C8A2C8",
  dorado: "#FFD700"
};



const FormColor = ({ onColorCreado }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      nombre: "",
      hexInput: "",
      rgbInput: "",
    },
  });

  const nombrePreview =
    coloresPredefinidos[watch("nombre")?.toLowerCase()] || "";
  const preview =
    watch("hexInput") || watch("rgbInput") || nombrePreview || "#555";

  const onSubmit = async (data) => {
    let valorFinal = "";

    if (data.hexInput) {
      valorFinal = data.hexInput;
    }
    else if (data.rgbInput) {
      valorFinal = data.rgbInput;
    }
    else {
      const nombreLower = data.nombre.toLowerCase();

      if (coloresPredefinidos[nombreLower]) {
        valorFinal = coloresPredefinidos[nombreLower];
      } else {
        valorFinal = "#555";
      }
    }

    const resp = await crearColor({
      nombre: data.nombre,
      valor: valorFinal,
    });

    if (resp && !resp.error) {
      Swal.fire("Listo", "Color creado correctamente", "success");
      reset({ nombre: "", hexInput: "", rgbInput: "" });
      onColorCreado && onColorCreado();
    } else {
      Swal.fire("Error", "No se pudo crear el color", "error");
    }
  };

  return (
    <div>
      <h3 className="mb-3 text-light">Administrar colores</h3>

      <div
        className="mb-3"
        style={{
          width: "100%",
          height: "120px",
          borderRadius: "12px",
          background: preview,
          border: "2px solid rgba(255,255,255,0.3)",
        }}
      ></div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {}
        <Form.Group className="mb-3">
          <Form.Label>Nombre del color *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            })}
          />
          {errors.nombre && (
            <small className="text-danger">{errors.nombre.message}</small>
          )}
        </Form.Group>

        {/* HEX */}
        <Form.Group className="mb-3">
          <Form.Label>Código HEX (ej: #FF00AA)</Form.Label>
          <Form.Control
            type="text"
            placeholder="#A29BFE"
            {...register("hexInput", {
              pattern: {
                value: /^#([0-9a-fA-F]{6})$/,
                message: "HEX inválido",
              },
            })}
          />
          {errors.hexInput && (
            <small className="text-danger">{errors.hexInput.message}</small>
          )}
        </Form.Group>

        <p className="text-light text-center">— o —</p>

        {/* RGB */}
        <Form.Group className="mb-3">
          <Form.Label>Código RGB (ej: rgb(120, 200, 255))</Form.Label>
          <Form.Control
            type="text"
            placeholder="rgb(100, 150, 200)"
            {...register("rgbInput", {
              pattern: {
                value: /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/,
                message: "RGB inválido",
              },
            })}
          />
          {errors.rgbInput && (
            <small className="text-danger">{errors.rgbInput.message}</small>
          )}
        </Form.Group>

        <Button type="submit" className="btn-crear">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default FormColor;
