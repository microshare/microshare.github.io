---
layout: docs
title: Intégration en streaming
description: Quel type d'intégration en streaming ai-je besoin ?
lang: fr
translation_of: docs/2/technical/streaming-integration/overview.md
translations:
  en: /docs/2/technical/streaming-integration/overview
  fr: /docs/2/fr/technical/streaming-integration/overview
toc: true
---
{% include image.html url="/assets/img/thumbnail-3.jpg" description="thumbnail 2" %}

---

## SOMMAIRE :

[Format des données en streaming depuis Microshare](./#streaming-data-format-from-microshare)

[API de streaming depuis Microshare](./#3-streaming-apis-from-microshare) :

- A) [Azure IoT Hub](./#a-azure-iot-hub-integration)
- B) [Azure Event Hub](./#b-azure-event-hub-integration)
- C) [Intégration AWS Kinesis Data Stream](./#c-aws-kinesis-data-stream-integration)
- D) [Intégration AWS SQS](./#d-aws-sqs-integration)
- E) [Intégration Google Pub/Sub](./#e-google-pub-sub-integration)

---

## Format des données en streaming depuis Microshare

---

L'enveloppe de données JSON peut être considérée comme un conteneur autour de la structure de données « obj » qui serait normalement renvoyée par l'API REST. La structure de données « obj » contient les données réelles de l'objet qui a été créé, tandis que l'enveloppe de données contient des métadonnées supplémentaires sur l'objet, telles que le type d'événement, le type d'objet et la source. En enveloppant la structure de données « obj » dans l'enveloppe de données, l'intégration en streaming peut fournir un contexte et des informations supplémentaires sur l'objet qui a été créé. Cela peut être utile pour les applications ou systèmes en aval qui doivent traiter les données et prendre des décisions basées sur les métadonnées fournies dans l'enveloppe de données. Dans l'ensemble, l'enveloppe de données JSON fournit un moyen standardisé de capturer et transmettre les données des intégrations en streaming, facilitant l'intégration avec d'autres systèmes et applications.

Cette enveloppe de données JSON est utilisée pour les intégrations en streaming et contient les éléments JSON suivants :

"event_type": Cette clé spécifie le type d'événement qui s'est produit. Dans ce cas, la valeur est « create », ce qui signifie qu'un nouvel objet a été créé. Les valeurs valides incluent « create », « update », « delete ».

"id": Cette clé contient l'identifiant unique de l'objet qui est diffusé. La valeur est une chaîne de caractères alphanumériques.

"obj": Cette clé contient les données de l'objet qui a été créé. La valeur sera un objet JSON contenant des données.

"obj_type": Cette clé spécifie le type d'objet qui a été créé. Dans ce cas, la valeur est « objs », qui pourrait faire référence à tout type d'objet de données IoT. Les valeurs valides incluent « objs », « devices », « health ».

"recType": Cette clé spécifie le type d'enregistrement de l'objet. La valeur est une chaîne qui identifie le type d'enregistrement.

"source": Cette clé spécifie la source des données. La valeur est une chaîne qui identifie la source des données, dans ce cas, il s'agit de « ShareService ».

Cette enveloppe de données JSON est utilisée pour capturer les données des intégrations en streaming et est généralement utilisée pour envoyer des données à d'autres systèmes ou applications. Les données peuvent être utilisées à diverses fins, telles que l'analyse, les rapports ou la surveillance. L'enveloppe de données JSON est un format flexible et polyvalent qui peut être utilisé pour capturer des données provenant de différents types de sources et peut être facilement intégré avec d'autres systèmes et applications.

<br><br>

## API de streaming depuis Microshare

---

Il existe plusieurs méthodes pour intégrer les données Microshare dans votre propre plateforme avec un flux continu de données en temps réel.
<br>

### Microsoft Azure

<br>

#### A) Intégration Azure IoT Hub

Azure IoT Hub est un service d'ingestion de données en temps réel entièrement géré, simple, sécurisé et évolutif, conçu spécifiquement pour les charges de travail IoT. Diffusez des millions d'événements par seconde depuis n'importe quelle source pour créer des pipelines de données dynamiques et répondre instantanément aux défis métier.
Avec Microshare, vous pouvez simplement injecter vos données dans l'IoT Hub et les combiner avec les flux de données IoT provenant d'autres sources pour créer un pipeline de données unifié.

##### > [Intégration Azure IoT Hub](/docs/2/technical/streaming-integration/azure-iot-hub-integration/)

<br>

#### B) Intégration Azure Event Hub

Azure Event Hub est un service d'ingestion de données en temps réel entièrement géré, simple, sécurisé et évolutif. Diffusez des millions d'événements par seconde depuis n'importe quelle source pour créer des pipelines de données dynamiques et répondre instantanément aux défis métier.
Avec Microshare, vous pouvez simplement injecter vos données dans l'Event Hub et les intégrer avec d'autres outils que vous avez peut-être déjà en place.

##### > [Intégration Azure Event Hub](/docs/2/technical/streaming-integration/azure-event-hub-integration/)

<br>

### Amazon Web Services (AWS)

<br>
#### C) Intégration AWS Kinesis Data Stream

Amazon Kinesis facilite la collecte, le traitement et l'analyse de données en streaming en temps réel pour obtenir rapidement des informations stratégiques et réagir rapidement. Amazon Kinesis offre des capacités essentielles pour traiter les données en streaming à n'importe quelle échelle de manière rentable, ainsi que la possibilité de choisir les outils les mieux adaptés aux besoins de votre application.
Avec Microshare, vous pouvez simplement injecter vos données dans AWS Kinesis Data Stream et les intégrer avec les outils en aval de l'écosystème AWS.

##### > [Intégration AWS Kinesis Data Stream](/docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration/)

<br>

#### D) Intégration AWS SQS

Amazon Simple Queue Service (SQS) est un service de mise en file d'attente de messages entièrement géré qui vous permet de découpler et de faire évoluer les microservices, les systèmes distribués et les applications serverless. SQS élimine la complexité et la surcharge associées à la gestion et à l'exploitation des middleware orientés messages, et permet aux développeurs de se concentrer sur un travail différenciant. Avec SQS, vous pouvez envoyer, stocker et recevoir des messages entre composants logiciels à n'importe quel volume, sans perdre de messages ni exiger que d'autres services soient disponibles.
Avec Microshare, vous pouvez simplement injecter vos données dans le service AWS SQS et les intégrer avec les outils en aval de l'écosystème AWS.

##### > [Intégration AWS SQS](/docs/2/technical/streaming-integration/aws-sqs-integration/)

<br>

### Google Cloud Platform (GCP)

<br>
#### E) Google Pub/Sub

Pub/Sub est un service de messagerie asynchrone qui découple les services qui produisent des événements des services qui les traitent.

Vous pouvez utiliser Pub/Sub comme middleware orienté messages ou pour l'ingestion et la livraison d'événements dans des pipelines d'analyse en streaming.

Google Pub/Sub offre un stockage de messages durable et une livraison de messages en temps réel avec une haute disponibilité et des performances constantes à grande échelle. Pub/Sub peut être utilisé comme middleware orienté messages ou pour l'ingestion et la livraison d'événements dans des pipelines d'analyse en streaming. Pub/Sub offre un stockage de messages durable et une livraison de messages en temps réel avec une haute disponibilité et des performances constantes à grande échelle.
Avec Microshare, vous pouvez simplement injecter vos données dans le service Google Pub/Sub et les intégrer avec les outils en aval de l'écosystème Google.

##### > [Intégration Google Pub/Sub](/docs/2/technical/streaming-integration/google-pub-sub-integration/)

<br>
