---
title: Como resolver el Fizz Buzz con JavaScript con un bucle for
date: "2022-05-04"
description: Este problema consiste en recorrer un array de números, si el número es un múltiplo de 3 tenemos que remplazarlo con la palabra `FIZZ`, si un múltiplo de 5 con la palabra `BUZZ` y si es un múltiplo de 3 y 5 con `FIZZ BUZZ`.
type: post
lang: es
---

# Intro

Este problema consiste en recorrer un array de números, si el número es un múltiplo de 3 tenemos que remplazarlo con la palabra `FIZZ`, si un múltiplo de 5 con la palabra `BUZZ` y si es un múltiplo de 3 y 5 con `FIZZ BUZZ`.

Ej. 1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, FIZZ, BUZZ, 11, FIZZ, 13, 14, FIZZ BUZZ, ... 

Primero de todo tenemos que conocer el operador de resto (%), este operador nos permite calcular la resta de una división. 

ej. 3 % 2 es 1 y 3 % 3 es 0.

# Crear bucle for

Como primera cosa creamos un bucle for que itere 15 veces y a cada iteración hacemos un console.log del contador

```js
for (i = 1; i < 16; i++) {
  console.log(i)
}
```

# Primera condición

Ahora podemos implementar una condición como `i % 3 ===  0` y si la condición es verdadera hacemos un `console.log('FIZZ')` 

```js
for (i = 1; i < 16; i++) {
  if (i % 3 === 0) {
    console.log('FIZZ');
  }

  console.log(i)
}
```

Si nos fijamos en los números en consola podemos ver que ahora en todos los números divisibles por 3 tenemos la Palabra FIZZ, 

OUTPUT

1, 2, FIZZ, 3,  4, BUZZ, FIZZ, 6, ...

⚠️ pero tenemos un problema, también estamos imprimiendo los números divisibles por 3, para evitar eso podemos incrementar el contador en el momento que entra en la condición con `i++`:

```js
for (i = 1; i < 16; i++) {
  if (i % 3 === 0) {
    console.log('FIZZ');
    i++
  }

  console.log(i)
}
```

# Segunda condición

lo mismo haremos con el 5 para imprimir BUZZ

```js
for (i = 1; i < 16; i++) {
  if (i % 3 === 0) {
    console.log('FIZZ');
    i++
  }
  
  if (i % 5 === 0) {
    console.log('BUZZ');
    i++
  }

  console.log(i)
}
```

# Tercera condición

Para el FIZZ BUZZ tenemos que utilizar el operador `&&` para comprobar que las dos condiciones sean verdaderas y tiene que ser la primara condición! ⚠️

```js
for (i = 1; i < 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZ BUZZ');
    i++
  }
  
  if (i % 3 === 0) {
    console.log('FIZZ');
    i++
  }
  
  if (i % 5 === 0) {
    console.log('BUZZ');
    i++
  }

  console.log(i)
}
```
