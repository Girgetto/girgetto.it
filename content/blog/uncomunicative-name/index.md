---
title: Uncommunicative name
date: "2020-01-15"
description: Case of uncommunicative names
---

Let's see same cases of uncommunicative name

## Use meaningful and pronounceable variable names

Try to find descriptive names for variable names

BAD ❌

```js
const yyyymmdstr = () => moment().format("YYYY/MM/DD")
```

GOOD ✅

```js
const currentDate = moment().format("YYYY/MM/DD")
```

## Use searchable names

Give to constants name that specify what they are.

BAD ❌

```js
const timer = () => setTimeout(blastOff, 86400000) //what's 86400000???
```

GOOD ✅

```js
const timer = () => {
  const MILLISECONDS_IN_A_DAY = 86400000
  setTimeout(blastOff, MILLISECONDS_IN_A_DAY)
}
```

## Use explanatory variables

It's important that the code we do write is readable and searchable. By not naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable.

BAD ❌

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

GOOD ✅

```js
const address = () => {
  const address = "One Infinite Loop, Cupertino 95014"
  const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
  const [, city, zipCode] = address.match(cityZipCodeRegex) || []
  saveCityZipCode(city, zipCode)
}
```

## Avoid Mental Mapping

Explicit is better than implicit, for example don't use just letters when your are iterating a an array 

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

GOOD ✅

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

## Give usefully name to functions

When you declare functions try to decelerate with descriptive names 

BAD ❌

```js
const p = (a, b) => sqrt(pow(a, 2) + pow(b, 2))

const f = n =>
  [...Array(n)].reduce(
    (a, _, i) => a.concat(i > 1 ? a[i - 1] + a[i - 2] : i),
    []
  )
```

GOOD ✅

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
