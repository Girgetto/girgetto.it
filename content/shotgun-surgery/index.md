---
title: Shotgun surgery
date: "2019-11-22"
description: Shotgun Surgery refers to when a single change is made to multiple classes simultaneously.
type: post
---

Shotgun Surgery refers to when a single change is made to multiple classes simultaneously.

> How can I recognize it?

When you are changing different parts of your code for just one functionality that could by a **shotgun surgery**.

We are going to make an example with javascript functional programming

```js
const bankAccount = {
  amount: 10,
}

const transfer = toSend => {
  if (bankAccount.amount <= 0) {
    console.log("Minimum balance should be over 0")
  }

  bankAccount.amount -= toSend
  console.log(`Your balance is ${bankAccount.amount} €`)
}

const checkYourBalance = () => {
  if (bankAccount.amount <= 0) {
    console.log("amount should be over 0")
  }

  console.log(`Your balance is ${bankAccount.amount} €`)
}
```

In this example if we need to change the condition we will need to modified the code twice, we can avoid it by insert the condition in a function.

```js
const isUnderBudget = () => bankAccount.amount <= 0
```

There is another part of the code that could be move to only one method

```js
console.log(`Your balance is ${bankAccount.amount} €`)
```

This function could be a function property of the object bankAccount and obtain this code

```js
const bankAccount = {
  amount: 10,
  getBalance: () => console.log(`Your balance is ${bankAccount.amount} $`),
}

const isUnderBudget = () => bankAccount.amount <= 0

const transfer = toSend => {
  if (isUnderBudget()) {
    console.log("Minimum balance should be over 0")
  }

  bankAccount.amount -= toSend
  bankAccount.getBalance()
}

const checkYourBalance = () => {
  if (isUnderBudget()) {
    console.log("amount should be over 0")
  }
  bankAccount.getBalance()
}
```

Now if we need to make a simple change in one method we only do once,

_Warning_: this refactor is not always the best solution, because it could create a [Divergent change](https://refactoring.guru/smells/divergent-change)
