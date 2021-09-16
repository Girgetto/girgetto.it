---
title: "Systemic: the silver bullet to develop perfect microservices in Node.JS."
date: "2020-11-27"
description: Systemic introduction
---

# What is Systemic?

In order to understand what Systemic is we need to understand what dependency injections means. Dependency injection (DI) is a technique in which an object receives other objects that it depends on. These other objects are called dependencies. Modern dependency injection frameworks and libraries provide us the possibility to pass dependencies as parameters or references.

**_"Systemic is a minimal dependency injection library for NodeJS"_**

Systemic is not a framework, it's a lean and un-opinionated library that takes care of creating a dependency tree wiring together the different pieces your code is made of. Systemic does not force you to define things in a certain way and does not tell you how to code your software pieces, what it does is foster an organic growth of an app during its development promoting the usage of the practices defined in [twelve-factor app methodology](https://12factor.net/).

# Systemic and trains
We at Guidesmiths are used to taking advantage of systemic in order to develop our microservices. Let's imagine our microservice as a train shipping value to the customer, we can then decide to bring value in one of the following two ways:

1. Bad - We can ship our code and its functionalities all together within a unique big coach

2. Good - We can ship our code and its functionalities trying to split them as much as possible according to the responsibility they have

With the first approach we would put in one coach all the tools (passengers) that we are using (express, mongo, rabbit MQ, etc…), now imagine we want to change, modify, move any of the passengers that we have into that coach. We would enter and see a lot of passengers together, and we'll need to check seat by seat to find the passengers which we are looking for!

![no-systemic-train](https://dev-to-uploads.s3.amazonaws.com/i/9i8kmll0a82zmqigz4mj.jpg)

With the second approach we would put all the responsibility-related passengers in a specific coach so adding, modifying or removing them would be easier. Systemic will help us a lot in doing this.

![systemic-train](https://dev-to-uploads.s3.amazonaws.com/i/10jh2qgind4vbtssutyk.jpg)

What do we need to do? Let's start with the Systemic's 4 main concepts

1. System - Our train
2. Runners - Our locomotive
3. Components - The train's coaches
4. Dependencies - The unions between coaches

# System
A Systemic based service is a system where all your components and dependencies will be in place and ready to be used.

A system manifest is the Systemic way of defining what the system is and of which components it is made of.

To add a component you need only to use the `.add()` method like this:

*Documentation [here](https://guidesmiths.github.io/systemic/#/?id=define-the-system)*

When you start the system, systemic iterates through all the components, starting them in the order derived from the dependency graph with `await system.start()`.

When you stop the system `await system.stop()`, systemic iterates through all the components stopping them in the reverse order.

# Runner

A runner is a simple function which executes the start function of our system, it's like a locomotive which gives power to start the train

*Documentation code [here](https://guidesmiths.github.io/systemic/#/?id=runners)*

You can also use runners already created:

- [Service Runner](https://github.com/guidesmiths/systemic-service-runner)
- [Domain Runner](https://github.com/guidesmiths/systemic-domain-runner)

# Components

A component in our system is nothing more than a subsystem that must be structured as a function returning an object with two asynchronous property functions to start and stop it, like if all the coaches are available to be started and stopped whenever they need.

*Documentation [here](https://guidesmiths.github.io/systemic/#/?id=components)*

# Dependencies

What happens if we need to pass information between coaches?

As we have done for the main system we have to define a manifest for each one of its subsystems (components) in order to specify who depends on whom, it's here where we have to use the `.dependsOn()` method right after the `.add()` method.

We can pass as an argument to that method the string representing the name of the component we depend on.

Then at the start up time the component will receive the full dependency object of the component wired to it in the `.dependsOn()` method.

Let's try to explain this with an example:

*Documentation [here](https://guidesmiths.github.io/systemic/#/?id=dependencies)*

In this example in the start function of the mongo component will be injected a property which is the object returned from the start function of the config component. This is the way in which components can rely on each other.

![complete-train](https://dev-to-uploads.s3.amazonaws.com/i/2bukl6rn8hey0de5ubfh.jpg)

This is a basic system represented as a train

And what about if I want to:
- Wrap components together → [Bootstraping-components](https://guidesmiths.github.io/systemic/#/?id=bootstraping-components)
- Aliasing a coach → [mapping-dependencies](https://guidesmiths.github.io/systemic/#/?id=mapping-dependencies)
- Injecting only a sub part of a component → [scoped-dependencies](https://guidesmiths.github.io/systemic/#/?id=scoped-dependencies)
- Override a coach → [overriding components](https://guidesmiths.github.io/systemic/#/?id=overriding-components)
- Remove a coach → [removing-components](https://guidesmiths.github.io/systemic/#/?id=removing-components)
- Include a coach from another train → [including-components-from-another-system](https://guidesmiths.github.io/systemic/#/?id=including-components-from-another-system)
- Create a group → [grouping-components](https://guidesmiths.github.io/systemic/#/?id=grouping-components)

# The systemic ecosystem
A lot of components that can be use with systemic may be already created and shipped as npm packages like: [systemic-rabbitmq](https://www.npmjs.com/package/systemic-rabbitmq) or [systemic-mongodb](https://www.npmjs.com/package/systemic-mongodb)

# Yo systemic
Systemic has its own [yeoman generator](https://github.com/guidesmiths/generator-systemic) to speed up the creation of a new project ready to be filled in with your own business logic. It will create a system with a bunch of ready to be used capabilities like components, config, docs, test, docker's files, eslint's files. Like this [codesandbox](https://codesandbox.io/s/zen-thunder-0uuqj?file=/index.js).

If you need to see an example with some business logic already in place you can use the flag `--showcase` and check a real-word example.

# Conclusions
This was just a little chat about what systemic is capable of, in a real-world scenario we can imagine a Systemic based application to be like some kind of huge train system, where each train, coach and passenger can communicate, share information start or stop whenever they need.

There may be some downside, Systemic may not work in the way you are used to organizing your code and its ecosystem may still miss something. That's why I wrote this article, I wanted to let you know Systemic is out there, and we can grow it together.

Other resources:
How your train can reach the [88Mph](https://matteodipaolo.github.io/Reaching88MphWithSystemic/#/) by [Matteo Di Paolantonio](https://dev.to/matteodipaolo)🚆
