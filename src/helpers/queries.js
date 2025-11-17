// src/helpers/queries.js

// 👇 Acá va la URL base de tu backend
// Cuando lo tengas en Vercel, cambiás esto por tu URL:
// ej: https://paleta-colores-backend.vercel.app/api/colores
const API_COLORES =
  import.meta.env.VITE_API_COLORES || "http://localhost:3000/api/colores";

// -------------------------
// Obtener todos los colores
// -------------------------
export const obtenerColores = async () => {
  try {
    const respuesta = await fetch(API_COLORES);

    if (!respuesta.ok) {
      throw new Error("Error al obtener los colores");
    }

    const datos = await respuesta.json();
    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.error("Error en obtenerColores:", error);
    return []; // para que tu ListaColores no reviente
  }
};

// -------------------------
// Crear un color nuevo
// -------------------------
export const crearColor = async (color) => {
  try {
    const respuesta = await fetch(API_COLORES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(color),
    });

    if (!respuesta.ok) {
      const errorData = await respuesta.json().catch(() => ({}));
      return {
        error: true,
        mensaje: errorData.mensaje || "No se pudo crear el color",
      };
    }

    const datos = await respuesta.json();
    return datos; // en tu form solo preguntas resp && !resp.error
  } catch (error) {
    console.error("Error en crearColor:", error);
    return { error: true, mensaje: "Error de red al crear el color" };
  }
};

// -------------------------
// Borrar un color por ID
// -------------------------
export const borrarColor = async (id) => {
  try {
    const respuesta = await fetch(`${API_COLORES}/${id}`, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      const errorData = await respuesta.json().catch(() => ({}));
      console.error(
        "Error al borrar color:",
        errorData.mensaje || respuesta.statusText
      );
      return { error: true };
    }

    return { error: false };
  } catch (error) {
    console.error("Error en borrarColor:", error);
    return { error: true };
  }
};

// -------------------------
// Editar un color por ID
// -------------------------
export const editarColor = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${API_COLORES}/${id}`, {
      method: "PUT", // si tu backend usa PATCH, cambialo acá
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    if (!respuesta.ok) {
      const errorData = await respuesta.json().catch(() => ({}));
      console.error(
        "Error al editar color:",
        errorData.mensaje || respuesta.statusText
      );
      return { error: true };
    }

    const datos = await respuesta.json();
    return { error: false, datos };
  } catch (error) {
    console.error("Error en editarColor:", error);
    return { error: true };
  }
};
