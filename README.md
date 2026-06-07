# Pokédex React

Aplicación web interactiva con estética de Pokédex clásica. Consulta Pokémon, explora la lista paginada y escucha la música del juego mientras navegas.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.11-5A29E4)
![PokéAPI](https://img.shields.io/badge/API-PokéAPI-EF5350)

## Características

- **Interfaz tipo Pokédex** con diseño retro en rojo y pantalla verde.
- **Listado de Pokémon** obtenido desde [PokéAPI](https://pokeapi.co/), con paginación mediante el botón *Siguiente*.
- **Búsqueda por número** (por ejemplo, `25` para Pikachu).
- **Vista detallada** al pulsar *Imagen*: sprite del Pokémon y descripción en español.
- **Música de fondo** del juego con botón para pausar o reanudar.

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| [React 19](https://react.dev/) | Interfaz de usuario |
| [Create React App](https://create-react-app.dev/) | Configuración y scripts del proyecto |
| [Axios](https://axios-http.com/) | Peticiones HTTP a la API |
| CSS personalizado | Estilos de la Pokédex |

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/pokemon.git
cd pokemon
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Ejecuta la app en modo desarrollo |
| `npm run build` | Genera la versión optimizada para producción en `/build` |
| `npm test` | Ejecuta las pruebas con Jest y React Testing Library |
| `npm run eject` | Expone la configuración de CRA (irreversible) |

## Estructura del proyecto

```
pokemon/
├── public/              # Archivos estáticos (HTML, favicon, manifest)
├── src/
│   ├── assets/          # Recursos multimedia (música de fondo)
│   ├── componentes/
│   │   └── Lista.js     # Componente principal de la Pokédex
│   ├── App.js           # Punto de entrada de la aplicación
│   ├── App.css          # Estilos de la interfaz
│   └── index.js         # Renderizado de React
├── package.json
└── README.md
```

## API utilizada

Los datos provienen de **[PokéAPI](https://pokeapi.co/)**, una API REST pública y gratuita:

- `GET /api/v2/pokemon` — Listado paginado de Pokémon
- `GET /api/v2/pokemon/{id o nombre}` — Datos e imagen de un Pokémon
- `GET /api/v2/pokemon-species/{nombre}` — Descripción en distintos idiomas

No se requiere API key ni configuración adicional.

## Uso

1. Al cargar la app verás los primeros Pokémon de la lista.
2. Escribe un **número** en el campo de búsqueda para ver la imagen de ese Pokémon.
3. Pulsa **Imagen** junto a un nombre para ver su sprite y descripción en español.
4. Usa **Siguiente** para cargar más Pokémon en la lista.
5. Controla la **música de fondo** con el botón amarillo en la parte superior.

## Despliegue

Para generar una build de producción:

```bash
npm run build
```

Los archivos resultantes en la carpeta `build/` pueden desplegarse en servicios como [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).

## Aviso legal

Este proyecto es un **proyecto educativo y de fan** sin fines comerciales. Pokémon y sus assets (incluida la música) son propiedad de [The Pokémon Company](https://www.pokemon.com/) y [Nintendo](https://www.nintendo.com/). PokéAPI es un proyecto independiente no afiliado oficialmente.

## Licencia

Código del proyecto: uso libre para aprendizaje y portfolio. Respeta los derechos de autor de Pokémon al publicar o distribuir el repositorio.
