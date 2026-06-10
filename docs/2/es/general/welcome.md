---
layout: docs
title: Bienvenido
description: >-
  Comienza con Microshare™, la única solución preconfigurada y escalable de
  gestión e intercambio de datos para IoT en el mundo.
lang: es
translation_of: docs/2/general/welcome.md
translations:
  es: /docs/2/es/general/welcome
  fr: /docs/2/fr/general/welcome
  en: /docs/2/general/welcome
toc: true
redirect_from:
  - /docs/2/general/
---
---------------------------------------

{% include image.html url="/assets/img/banner-2.jpg" description="logo de ms" %}

##### RESUMEN : 

1. [Introducción](./#introduction)
2. [Enlaces rápidos](./#quick-links)
3. [Plataforma](./#platform)

---------------------------------------
## Importante

¿Te preguntas si la Consola de Microshare está activa? Consulta su estado en la [página de acceso a la Consola](https://www.microshare.io/management-console-access/) para ver las fechas de lanzamiento de actualizaciones.


Si tienes alguna pregunta que no esté respondida en esta documentación, contacta a `support@microshare.io`.


## Introducción
---------------------------------------

Microshare proporciona Estrategia de Datos como Servicio, permitiendo a nuestros clientes capturar rápidamente información de datos previamente oculta que genera ahorros de costos, métricas de sostenibilidad y oportunidades de negocio. Nuestras soluciones producen datos desde el Día Uno, instaladas a escala rápidamente por personal no técnico y operan de forma independiente de las redes corporativas de TI sensibles. Nuestras soluciones crean un Gemelo Digital de tus activos físicos, proporcionando una imagen completa de su rendimiento, los riesgos que enfrentan en el futuro y los pasos necesarios para obtener el máximo rendimiento de estos activos.

La documentación de Microshare guía a todos los usuarios a través del proceso de uso de las herramientas de Microshare para que puedan aprovechar sus datos.

¿Quieres saber más sobre las soluciones de Microshare? Visita nuestro sitio web en [microshare.io.](https://www.microshare.io/)


## ¿Qué puedo hacer?
---------------------------------------

Como usuario cotidiano, visualizarás tus datos a través de una solución de Microshare. Para comenzar, primero [crea una cuenta](/docs/2/general/quick-start/create-an-account/) y sigue la [guía de acceso a mis aplicaciones](/docs/2/general/quick-start/access-my-apps/). 
¿Quieres ver de qué trata Microshare? **Consulta nuestra [página de demostración en vivo](/docs/2/general/meet-microshare/demo-live/) para ver nuestras soluciones en acción.**

¿Quieres saber más sobre Microshare? La [página ¿Por qué Microshare?](/docs/2/general/meet-microshare/why-microshare/) te mostrará las aplicaciones de las soluciones de Microshare.

## ¿Qué pasa si no soy un Usuario General?
---------------------------------------

Esta documentación incluye guías para otros roles dentro de una solución de Microshare.

¿Eres quien configura una solución de Microshare? Consulta nuestras guías para un [Instalador.](/docs/2/installer/quick-start/overview/)

¿Gestionas los datos de tu empresa o de un cliente? Usa las [guías del Administrador.](/docs/2/admin/admin-management/overview/)

¿Eres un ingeniero o desarrollador que trabaja con el lado técnico de Microshare? Consulta la [sección Técnica.](/docs/2/technical/quick-start/overview/)

## Plataforma
---------------------------------------

{% include image.html url="/assets/img/banner.jpg" description="logo de ms" %}

La plataforma Microshare está compuesta por dos grupos de microservicios que cooperan entre sí: **Microshare Core** y **Microshare Stream**.

Microshare Core combina una arquitectura de lago de datos, una API RESTful simple para permitir la interacción programática con objetos de datos, y un motor de reglas de seguridad contextual para tomar decisiones de política.
La API permite el almacenamiento (mediante POST) y las recuperaciones (mediante GET). El [lago de datos](https://en.wikipedia.org/wiki/Data_lake) almacenará cualquier tipo de datos que pueda serializarse a JSON. Tus datos se almacenan en forma anotada pero sin modificar dentro del lago de datos. Las operaciones de recuperación consideran la política establecida por un propietario de datos antes de conceder o rechazar cualquier operación solicitada.

Microshare Stream proporciona una arquitectura escalable para el enriquecimiento inteligente de datos y el procesamiento de eventos complejos.
Los Robots son microservicios que se pueden configurar para tomar acciones cuando ocurre un evento desencadenante.
Los eventos desencadenantes pueden incluir eventos programados (inicio programado), introducción de nuevos datos e invocación de políticas.
Puedes crear tu propia lógica única escribiendo funciones Javascript dentro de una Configuración de Robot.

Estas dos entidades se agrupan en la plataforma Microshare. Esta es **Microshare Composer**, cuyo interés radica en poder construir diferentes herramientas que puedan trabajar juntas para crear aplicaciones, flujos de trabajo inteligentes y extremadamente eficientes.

Puedes acceder a la plataforma Microshare aquí:

#####   [Producción](https://app.microshare.io/composer)
#####   [Desarrollo](https://dapp.microshare.io/composer)
