# Capítulo 1 : vite y react

## Crear la estructura de un proyecto de react con vite

1. Ejecutar `npm create vite@latest` en la terminal.
2. Ingresar `proyecto-react` como `Project Name`.
3. Seleccionar `React`.
4. Seleccionar `Javascript + SWC`.

## package.json

Es un archivo que contiene:

1. La configuración del proyecto.
2. Los scripts que se pueden ejecutar con node:

- `npm run dev` corre el proyecto de React en un servidor local, de la misma forma que lo hacia el Live Server.
- `npm run build` compila el proyecto de React para generar los archivos: HTML, CSS, y JS. Los mismos, se utilizan para levantar el sitio web.

3. Las depencencias necesarias para poder ejecutar el `npm run build`.
4. Las depencencias necesarias para poder ejecutar el `npm run dev`.

## Instalar las dependencias

Las mismas, se instalan dentro del directorio `node_modules`.

1. Ejecutar `npm install`.

## jsx

La sintaxis jsx es propia de la biblioteca react, y combina etiquetas HTML con código JS dentro de un mismo archivo.