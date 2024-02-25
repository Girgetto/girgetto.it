---
title: Como subir una aplicación backend y frontend a Fly.io y Vercel
date: "2023-07-13"
description: Pasos necesarios para poder subir una aplicación backend a fly.io y una aplicación frontend in vercel.
type: post
lang: es
img: https://i.postimg.cc/766kYgTP/image.png
---
## Desplegando el Backend en Fly.io

### Paso 1: Crear una Cuenta en Fly.io
Primero, necesitarás registrarte en [Fly.io](https://fly.io/).

### Paso 2: Instalar Flyctl
Instala la herramienta de línea de comandos `flyctl` siguiendo las instrucciones disponibles en la [documentación oficial de Fly.io](https://fly.io/docs/hands-on/install-flyctl/).

### Paso 3: Configuración de la Base de Datos
Para crear un servicio para tu base de datos, ejecuta el siguiente comando en tu terminal, reemplazando `DATABASE_NAME` con el nombre deseado para tu base de datos:

```
fly pg create --name DATABASE_NAME --region cdg
```

### Paso 4 y 5: Despliegue de la Aplicación
Despliega tu aplicación en Fly.io utilizando el comando:

```
fly deploy
```

### Paso 6: Configuración de Variables de Entorno
Adjunta tu base de datos al servicio con el siguiente comando, reemplazando `NOMBRE_DE_BBDD` con el nombre de tu base de datos:

```
fly pg attach NOMBRE_DE_BBDD
```

#### Consideraciones Importantes para el Backend:

- **Configuración de la Base de Datos**: En el archivo `db.js`, asegúrate de utilizar la variable de entorno `DATABASE_URL` para la conexión:

  ```js
  const SLONIK_URL = process.env.DATABASE_URL;
  ```

- **Configuración de CORS**: En `cors.js`, añade las URLs permitidas (whitelist), incluyendo la URL de tu frontend, por ejemplo:

  ```js
  const whitelist = [
    "http://localhost:3000",
    "https://deploy-example.vercel.app",
  ];
  ```

- **Creación de Tablas en la Base de Datos**: Asegúrate de haber creado las tablas necesarias en tu base de datos ejecutando:

  ```
  fly postgres connect -a DDBB_NAME
  ```

## Desplegando el Frontend en Vercel

### Paso 1: Crear una Cuenta en Vercel
Regístrate en [Vercel](https://vercel.com/).

### Paso 2: Instalar Vercel CLI
Descarga e instala la interfaz de línea de comandos de Vercel desde [aquí](https://vercel.com/download).

### Paso 3 y 4: Despliegue de la Aplicación
Para desplegar tu aplicación en Vercel, ejecuta:

```
vercel
```

Y para el despliegue en producción, utiliza:

```
vercel --prod
```

#### Consideraciones Importantes para el Frontend:

- **Configuración de Variables de Entorno**: En tu archivo `.env`, define la URL de tu backend, por ejemplo:

  ```js
  const VITE_API_URL = "https://deploy-example.fly.dev";
  ```

- **Uso de Axios**: Al crear una instancia de Axios, recuerda utilizar la variable de entorno para la URL base:

  ```js
  baseURL: import.meta.env.VITE_API_URL,
  ```
