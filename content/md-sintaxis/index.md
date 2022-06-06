---
title: Sintaxis útiles para escribir en un Markdown 📝
date: "2020-06-22"
description: Consejos para escribir README en markdown
img:
type: post
lang: es
---

Para los encabezados utiliza las almohadilla (#), la cantidad determina el tamaño.

# Primer Encabezado

## Segundo Encabezado

### Tercer Encabezado

Utiliza los backticks (`) para escribir comandos o códigos.

`let sum = 5 + 5`

Con los asteriscos (*) puedes escribir texto en negrita, si pones uno al principio y al final del texto dos por escribir texto en cursiva, lo mismo si usas guion bajo (_), con tres asteriscos puedes combinar las dos cosas.

*Negrita* `*Negrita*` o `_Negrita_`

**Cursiva** `**Cursiva**` o `__cursiva__`

***Negrita y Cursiva*** `***Negrita y Cursiva***`

Utiliza dos tildes (~) al principio y al final para tachar el texto.

~~Texto tachado~~ `~~Texto tachado~~`

Con el símbolo de mayor (>) puedes escribir una cita.

- Esta es una cita `> Esta es una cita`

Acuérdate que en un .md puedes utilizar etiquetas de HTML como por ejemplo el tag <details> y <summary> para crear un widget de revelación.

<details>
  <summary>
    List
  </summary>

- primero
- segundo
- tercero

</details>