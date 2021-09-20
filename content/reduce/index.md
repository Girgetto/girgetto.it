---
title: Reduce
date: "2020-06-22"
description: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
img: https://images.unsplash.com/photo-1531736275454-adc48d079ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80
type: post
---

![image](https://images.unsplash.com/photo-1531736275454-adc48d079ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80)

<sub><sup>Photo by [Martin Adams](https://unsplash.com/@martinadams) on Unsplash<sub><sup>

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

## Syntax ✏️

```js
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

## Accumulate numbers

We can calculate a sum of numbers in an array

```js
const cb = (acc, val) => acc + val;

const sum = [1, 1].reduce(cb);
```

## Accumulate characters in a string

We can accumulate characters in an array to create a string

```js
const cb = (acc, val) => acc + val;

const animals = ["🐈", "🦮"].reduce(cb);
```

## Accumulate object's properties

We have to take a pizza orders, we'll store them in our `order` variable

```js
let order = [
  { name: "Prosciutto e Funghi", quantity: 1 },
  { name: "Margherita", quantity: 1 },
  { name: "Diavola", quantity: 1 },
  { name: "Margherita", quantity: 2 },
  { name: "Prosciutto e Funghi", quantity: 1 },
  { name: "Capricciosa", quantity: 5 },
];
```

We notice that someone has choose the same pizza many times 😱,
but thanks to our reduce method we can accumulate it:

```js
let pizzas = order.reduce((acc, pizza) => {
  if (acc[pizza.name]) {
    acc[pizza.name] += pizza.quantity;
  } else {
    acc[pizza.name] = pizza.quantity;
  }
  return acc;
}, {});
```

Now our `pizzas` variable is an object, with the property being the name of the pizza
with the corresponding value which is the quantity

## Is the initial value important?

YES, in some cases, examples:

```js
let maxCallback = (acc, cur) => Math.max(acc.x, cur.x);

// reduce without initialValue
[{ x: 2 }, { x: 22 }, { x: 42 }].reduce(maxCallback); // NaN
[{ x: 2 }, { x: 22 }].reduce(maxCallback); // 22
[{ x: 2 }].reduce(maxCallback); // { x: 2 }
[].reduce(maxCallback); // TypeError
```
