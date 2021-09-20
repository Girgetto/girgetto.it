---
title: Nombres de variables no comunicativas
date: "2020-01-15"
description: Casos de nombres no comunicativos
img: https://images.unsplash.com/photo-1592296429945-93008c7e5a59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80
type: post
---

![image](https://images.unsplash.com/photo-1592296429945-93008c7e5a59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80)

<sub><sup>Photo by [okeykat](https://unsplash.com/@okeykat) on Unsplash<sub><sup>

Veamos algunos casos de nombre poco comunicativo.

## Use meaningful and pronounceable variable names

Utilice nombres de variables significativos y pronunciables

MALO ❌

```js
const yyyymmdstr = () => moment().format("YYYY/MM/DD")
```

BUENO ✅

```js
const currentDate = moment().format("YYYY/MM/DD")
```

## Utilice nombres que se puedan buscar

Dar a las constantes nombres que especifiquen lo que son.

MALO ❌

```js
const timer = () => setTimeout(blastOff, 86400000) //what's 86400000???
```

BUENO ✅

```js
const timer = () => {
  const MILLISECONDS_IN_A_DAY = 86400000
  setTimeout(blastOff, MILLISECONDS_IN_A_DAY)
}
```

## Usa variables explicativas

Es importante que el código que escribimos sea legible y se pueda buscar. Al no nombrar variables que terminan siendo significativas para comprender nuestro programa, lastimamos a nuestros lectores. Haga que sus nombres se puedan buscar.

MALO ❌

```js
const getAddress = () => {
  const address = "My house, Madrid 95014"
  const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
  saveCityZipCode(
    address.match(cityZipCodeRegex)[1],
    address.match(cityZipCodeRegex)[2]
  )
}
```

BUENO ✅

```js
const address = () => {
  const address = "One Infinite Loop, Cupertino 95014"
  const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
  const [, city, zipCode] = address.match(cityZipCodeRegex) || []
  saveCityZipCode(city, zipCode)
}
```

## Evite el mapeo mental

Explícito es mejor que implícito, por ejemplo, no use solo letras cuando esté iterando un array.

BAD ❌

```js
const location = () => {
  const locations = ["Austin", "New York", "San Francisco"]
  locations.forEach(l => {
    doStuff()
    doSomeOtherStuff()
    // ...
    // ...
    // ...
    // Wait, what is `l` for again?
    dispatch(l)
  })
}
```

BUENO ✅

```js
const locations = () => {
  const locations = ["Austin", "New York", "San Francisco"]
  locations.forEach(location => {
    doStuff()
    doSomeOtherStuff()
    // ...
    // ...
    // ...
    dispatch(location)
  })
}
```

## Dar nombre útil a las funciones

Cuando declaras funciones, intenta desacelerar con nombres descriptivos

MALO ❌

```js
const p = (a, b) => sqrt(pow(a, 2) + pow(b, 2))

const f = n =>
  [...Array(n)].reduce(
    (a, _, i) => a.concat(i > 1 ? a[i - 1] + a[i - 2] : i),
    []
  )
```

BUENO ✅

```js
const pythagorasTheorem = (cathetus1, cathetus2) =>
  sqrt(pow(cathetus1, 2) + pow(cathetus2, 2))

const fibonacci = fibonacciLength =>
  [...Array(fibonacciLength)].reduce(
    (accumulator, _, index) =>
      accumulator.concat(
        index > 1 ? accumulator[index - 1] + accumulator[index - 2] : index
      ),
    []
  )
```
