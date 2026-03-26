# Invity

Base inicial escalable para `React + Vite + TypeScript + Firebase`.

Compatible con `Node 18.20+`.

## Stack

- React con Vite
- TypeScript en modo estricto
- React Router para crecimiento por rutas
- Firebase Hosting
- Firebase Firestore

## Estructura

```text
src/
  app/          # Composicion principal y providers globales
  components/   # Componentes compartidos de UI
  config/       # Variables de entorno y configuracion
  features/     # Modulos de negocio por dominio
  hooks/        # Hooks reutilizables
  layouts/      # Layouts de pagina
  pages/        # Pantallas base
  routes/       # Definicion de rutas
  services/     # Integraciones externas como Firebase
  styles/       # Estilos globales
  types/        # Tipos compartidos
  utils/        # Helpers puros
```

## Primeros pasos

1. Instala dependencias con `npm install`.
2. Crea tu archivo `.env` usando `.env.example`.
3. Reemplaza el project id en `.firebaserc`.
4. Ejecuta `npm run dev`.

## Variables de entorno

Estas variables ya estan contempladas:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

## Firebase

- `firebase.json` ya incluye rewrite para SPA.
- `firestore.rules` comienza cerrado por seguridad.
- `src/services/firebase/client.ts` centraliza la inicializacion.

## Siguiente paso recomendado

Crear el primer modulo de negocio dentro de `src/features`, por ejemplo:

- `auth`
- `events`
- `invitations`
- `dashboard`
