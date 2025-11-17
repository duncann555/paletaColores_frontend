🎨 PALETA DE COLORES – FRONTEND (React + Vite)

Aplicación web para crear, visualizar, editar y eliminar colores, conectada a un backend real en Node + Express + MongoDB Atlas.
Permite trabajar con colores por nombre, HEX o RGB, mostrando una vista previa en tiempo real.

Proyecto ideal para practicar CRUD, consumo de APIs, formularios con validación y arquitectura limpia en React.

🚀 DEMO ONLINE

🔗 Frontend (Netlify):
👉 https://jade-horse-e618c9.netlify.app/

🔗 Backend (Vercel):
👉 https://paleta-colores-backend-sigma.vercel.app/

🧩 FUNCIONALIDADES

✔ Crear colores desde:

Nombre predefinido (rojo, azul, verde…)

Código HEX válido (#AABBCC)

Código RGB válido (rgb(120, 200, 255))

✔ Vista previa en vivo mientras escribís
✔ Listado dinámico de colores obtenidos desde MongoDB
✔ Edición del color (nombre + valor) con SweetAlert2
✔ Eliminación con confirmación
✔ Navegación con React Router
✔ Diseño con Bootstrap + CSS custom
✔ Manejo de formularios con React Hook Form
✔ Recarga automática sin refrescar la página

🛠 TECNOLOGÍAS
Frontend

React

Vite

React Router DOM

React Hook Form

Bootstrap + React-Bootstrap

SweetAlert2

Fetch API con helpers

Backend

(Consumido desde el frontend)

Node.js

Express.js

MongoDB Atlas

Mongoose

Vercel (deploy)

📁 ESTRUCTURA DEL PROYECTO
src/
 ├── components/
 │    ├── FormColor.jsx
 │    ├── ListaColores.jsx
 │    ├── ItemColor.jsx
 │    ├── Menu.jsx
 │    └── Footer.jsx
 ├── helpers/
 │    └── queries.js
 ├── styles/
 │    └── App.css
 ├── App.jsx
 └── main.jsx

🧠 LÓGICA PRINCIPAL

🔄 Recarga sin refrescar

App.jsx maneja un estado que fuerza a recargar los datos cuando ocurre un cambio:

const [recargar, setRecargar] = useState(false);
const manejarCambioColores = () => setRecargar(prev => !prev);


Cada vez que se crea, edita o borra un color → se vuelve a pedir la lista desde la API.

🧪 Validación dual: HEX + RGB

FormColor.jsx permite ingresar HEX, RGB o elegir un nombre predefinido.

Regex usados:

HEX: ^#([0-9a-fA-F]{6})$

RGB: ^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$

🧱 CRUD Completo (helpers)

queries.js organiza todas las solicitudes HTTP:

GET obtenerColores()

POST crearColor()

PUT editarColor()

DELETE borrarColor()

Esto mantiene al frontend limpio y modular.

▶️ CÓMO CORRERLO LOCALMENTE

1️⃣ Instalar dependencias:

npm install


2️⃣ Ejecutar en modo desarrollo:

npm run dev


Abrir en el navegador:
👉 http://localhost:5173/

🌐 CONFIGURAR API

Editar helpers/queries.js y poner tu backend real:

const URL = "https://paleta-colores-backend-sigma.vercel.app/api/colores";

📦 BUILD PARA PRODUCCIÓN
npm run build


Archivos listos en /dist.

🧑‍💻 AUTOR

Seba Flomenbaum
Estudiante de Ciberseguridad & Full-Stack Developer.
GitHub: https://github.com/duncann555