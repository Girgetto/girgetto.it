---
title: Como subir una aplicación backend y frontend a Fly.io y Vercel
date: "2023-07-13"
description: Pasos necesarios para poder subir una aplicación backend a fly.io y una aplicación frontend in vercel.
type: post
lang: es
---

# Despliegue

## Back

1. Registrarse en [https://fly.io/](fly.io)
2. Instalar flyctl https://fly.io/docs/hands-on/install-flyctl/
3. Crear un servicio para la BBDD con este script:

```sh
fly pg create --name DATABASE_NAME --region cdg
```

4. Crear un servicio para la aplicación con este script:

```sh
fly deploy
```

5. Vamos a subir la aplicación a fly.io

```sh
fly deploy
```

5. Vamos a inserir la variable de entorno en fly.io

```sh
fly pg attach NOMBRE_DE_BBDD
```

### Poner atención a los siguientes puntos:

- en el `db.js` acordarse de poner la variable de entorno `DATABASE_URL` ej.

```js
const SLONIK_URL = process.env.DATABASE_URL;
```

- en el `cors.js` añadir en la whitelist la url del front ej.

```js
const whitelist = [
  "http://localhost:3000",
  "https://deploy-example.vercel.app",
];
```

- de haber creado las tablas en la BBDD

```sh
fly postgres connect -a DDBB_NAME
```

## Front

1. Registrarse en [https://vercel.com/](vercel.com)
2. Instalar vercel https://vercel.com/download
3. Crear un servicio para la aplicación con este script:

```sh
vercel
```

4. Vamos a subir la aplicación a vercel

```sh
vercel --prod
```
### Poner atención a los siguientes puntos:

- en el `.env` acordarse de poner la url del back ej.

```js
const VITE_API_URL = "https://deploy-example.fly.dev";
```

- en el axios create acordarse de la variable de entorno

```js
baseURL: import.meta.env.VITE_API_URL,
```
