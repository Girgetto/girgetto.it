---
title: "Systemic: solución milagrosa para desarrollar microservicios perfectos en Node.JS"
date: "2020-11-27"
description: Systemic no es un framework, es un biblioteca que se encarga de crear un árbol de dependencias conectando las diferentes piezas de las que está hecho su código.
img: https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1pbmltYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60
type: post
---

![image](https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1pbmltYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)

<sub><sup>Photo by [Lukas Blazek](https://unsplash.com/@goumbik) on Unsplash<sub><sup>

# Que es Systemic?

Para comprender qué es Systemic, debemos comprender qué significan las inyecciones de dependencia. La inyección de dependencia (DI) es una técnica en la que un objeto recibe otros objetos de los que depende. Estos otros objetos se denominan dependencias. Los marcos y bibliotecas de inyección de dependencias modernos nos brindan la posibilidad de pasar dependencias como parámetros o referencias.

**_"Systemic es una biblioteca de inyección de dependencia mínima para NodeJS"_**

Systemic no es un framework, es una biblioteca que se encarga de crear un árbol de dependencias conectando las diferentes piezas de las que está hecho su código. Systemic no te obliga a definir las cosas de una determinada manera y no te dice cómo codificar tus piezas de software, lo que hace es fomentar un crecimiento orgánico de una aplicación durante su desarrollo promoviendo el uso de las prácticas definidas en [twelve-factor app methodology](https://12factor.net/).

# Systemic y trenes
En Guidesmiths estamos acostumbrados a aprovechar lo Systemic para desarrollar nuestros microservicios. Imaginemos nuestro microservicio como un valor de envío de tren para el cliente, luego podemos decidir aportar valor de una de las dos formas siguientes:

1. Malo: podemos enviar nuestro código y sus funcionalidades todos juntos dentro de un gran vagón único

2. Good - Podemos enviar nuestro código y sus funcionalidades intentando dividirlos lo máximo posible según la responsabilidad que tengan

Con el primer acercamiento pondríamos en un vagón todas las herramientas (pasajeros) que estemos usando (express, mongo, rabbit MQ, etc…), ahora imaginamos que queremos cambiar, modificar, mover cualquiera de los pasajeros que tengamos en ese vagón. Entraríamos y veríamos muchos pasajeros juntos, ¡y tendremos que revisar asiento por asiento para encontrar los pasajeros que estamos buscando!

![no-systemic-train](https://dev-to-uploads.s3.amazonaws.com/i/9i8kmll0a82zmqigz4mj.jpg)

Con el segundo enfoque, colocaríamos a todos los pasajeros relacionados con la responsabilidad en un vagón específico, por lo que agregarlos, modificarlos o eliminarlos sería más fácil. Systemic nos ayudará mucho a hacer esto.

![systemic-train](https://dev-to-uploads.s3.amazonaws.com/i/10jh2qgind4vbtssutyk.jpg)

¿Que necesitamos hacer? Comencemos con los 4 conceptos principales de Systemic

1. System  -  Nuestro tren
2. Runners  - Nuestra locomotora
3. Components  - Los vagones del tren
4. Dependencies  -  La que uno los vagones

# System
Un servicio basado en Systemic es un sistema en el que todos sus componentes y dependencias estarán en su lugar y listos para ser utilizados.

Un manifiesto de sistema es la forma sistémica de definir qué es el sistema y de qué componentes está compuesto.

Para agregar un componente solo necesita usar el método `.add ()` como este:

*Documentation [here](https://guidesmiths.github.io/systemic/#/?id=define-the-system)*

Cuando inicia el sistema, systemic itera a través de todos los componentes, iniciándolos en el orden derivado del gráfico de dependencia con `await system.start ()`.

Cuando detiene el sistema `await system.stop ()`, systemic itera a través de todos los componentes deteniéndolos en el orden inverso.

# Runner

A runner es una función simple que ejecuta la función de arranque de nuestro sistema, es como una locomotora que da energía para arrancar el tren.

*Documentation code [here](https://guidesmiths.github.io/systemic/#/?id=runners)*

También puede utilizar corredores ya creados:

- [Service Runner](https://github.com/guidesmiths/systemic-service-runner)
- [Domain Runner](https://github.com/guidesmiths/systemic-domain-runner)

# Components

Un componente de nuestro sistema no es más que un subsistema que debe estructurarse como una función que devuelve un objeto con dos funciones de propiedad asíncronas para iniciarlo y detenerlo, como si todos los coaches estuvieran disponibles para ser iniciados y detenidos cuando lo necesiten.

*Documentation [here](https://guidesmiths.github.io/systemic/#/?id=components)*

# Dependencies

¿Qué pasa si necesitamos pasar información entre vagones?

Como hemos hecho para el sistema principal tenemos que definir un manifiesto para cada uno de sus subsistemas (componentes) con el fin de especificar quién depende de quién, es aquí donde tenemos que usar el método `.dependsOn ()` justo después del Método `.add ()`.

Podemos pasar como argumento a ese método la cadena que representa el nombre del componente del que dependemos.

Luego, en el momento de inicio, el componente recibirá el objeto de dependencia completo del componente conectado a él en el método `.dependsOn ()`.

Intentemos explicar esto con un ejemplo:

*Documentation [here](https://guidesmiths.github.io/systemic/#/?id=dependencies)*

En este ejemplo, en la función de inicio del componente mongo se inyectará una propiedad que es el objeto devuelto por la función de inicio del componente de configuración. Esta es la forma en que los componentes pueden depender entre sí.

![complete-train](https://dev-to-uploads.s3.amazonaws.com/i/2bukl6rn8hey0de5ubfh.jpg)

Este es un sistema básico representado como un tren.

Y si quiero:
- Envuelva los componentes juntos → [Bootstraping-components](https://guidesmiths.github.io/systemic/#/?id=bootstraping-components)
- Aliasing a coach → [mapping-dependencies](https://guidesmiths.github.io/systemic/#/?id=mapping-dependencies)
- Inyectar solo una subparte de un componente → [scoped-dependencies](https://guidesmiths.github.io/systemic/#/?id=scoped-dependencies)
- Anular un vagón → [overriding components](https://guidesmiths.github.io/systemic/#/?id=overriding-components)
- Remover un vagón → [removing-components](https://guidesmiths.github.io/systemic/#/?id=removing-components)
- Incluir una vagón de otro tren → [including-components-from-another-system](https://guidesmiths.github.io/systemic/#/?id=including-components-from-another-system)
- Crear un grupo → [grouping-components](https://guidesmiths.github.io/systemic/#/?id=grouping-components)

# El ecosistema Systemic
Es posible que una gran cantidad de componentes que se pueden usar con systemic ya se hayan creado y enviado como paquetes npm como: [systemic-rabbitmq](https://www.npmjs.com/package/systemic-rabbitmq) or [systemic-mongodb](https://www.npmjs.com/package/systemic-mongodb)

# Yo systemic
Systemic tiene su propia [yeoman generator](https://github.com/guidesmiths/generator-systemic) para acelerar la creación de un nuevo proyecto listo para ser completado con su propia lógica empresarial. Creará un sistema con un montón de capacidades listas para ser utilizadas como componentes, configuración, documentos, prueba, archivos de docker, archivos de eslint. Como esto [codesandbox](https://codesandbox.io/s/zen-thunder-0uuqj?file=/index.js).

Si necesita ver un ejemplo con alguna lógica de negocios ya implementada, puede usar el comando `--showcase` y ver un ejemplo de palabra real.

# Conclusiones
Esto fue solo una pequeña charla sobre lo que systemic es capaz de hacer, en un escenario del mundo real podemos imaginar una aplicación basada en Systemic como una especie de enorme sistema de trenes, donde cada tren, autocar y pasajero puede comunicarse, compartir información, comenzar o deténgase cuando lo necesiten.

Puede haber algunos inconvenientes, Systemic puede no funcionar de la forma en que está acostumbrado a organizar su código y su ecosistema aún puede perder algo. Es por eso que escribí este artículo, quería hacerle saber que Systemic está ahí fuera y que podemos cultivarlo juntos.

Otros recursos:
¿Cómo puede llegar su tren al [88Mph](https://matteodipaolo.github.io/Reaching88MphWithSystemic/#/) de [Matteo Di Paolantonio](https://dev.to/matteodipaolo)🚆
