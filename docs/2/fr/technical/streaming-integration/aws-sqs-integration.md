---
layout: docs
title: Intégration AWS SQS
description: 
lang: fr
translation_of: docs/2/technical/streaming-integration/aws-sqs-integration.md
translations:
  en: /docs/2/technical/streaming-integration/aws-sqs-integration
  fr: /docs/2/fr/technical/streaming-integration/aws-sqs-integration
toc: true
---

---------------------------------------
{% include image.html url="\assets\img\aws.jpg"  description="aws" %}

#### Sommaire :
1. [Vue d'ensemble](./#1-overview)
2. [Informations nécessaires](./#2-necessary-information)
3. [Architecture de base](./#3-basic-architecture)
4. [Configuration](./#4-set-up)
5. [Sécurité](./#5-security)

---------------------------------------


## 1. Vue d'ensemble
---------------------------------------

L'intégration AWS SQS est une intégration de données en streaming qui pousse les données du Smart Network vers le tenancy AWS d'un client en temps réel. Les données sont généralement disponibles sur une file SQS avec une latence inférieure à la seconde pour garantir que la gestion des événements et l'analyse sont alimentées avec l'état le plus actuel de l'espace mesuré. L'intégration AWS SQS crée un chemin vers le stockage avancé, la visualisation et l'analyse dans l'écosystème AWS Cloud depuis le Microshare Smart Network. 

## 2. Informations nécessaires 
---------------------------------------

Pour configurer l'intégration AWS SQS pour vous, votre contact support aura besoin des identifiants dédiés via fichier .csv ainsi que la valeur URL trouvée dans l'onglet Details de votre file SQS. Plus d'informations sont incluses ci-dessous. 

## 3. Architecture de base
---------------------------------------

L'architecture typique pour les données en streaming dans l'environnement AWS en utilisant l'intégration AWS SQS exploitera soit AWS SNS pour créer une infrastructure publish/subscribe et/ou des fonctions AWS Lambda déclenchées par l'arrivée de nouveaux messages en file.  

### Références d'architecture

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-subscribe-queue-sns-topic.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-subscribe-queue-sns-topic.html)

<br>
[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-lambda-function-trigger.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-lambda-function-trigger.html)

## 4. Configuration
---------------------------------------

### A. Prérequis

<br>
**1.** SQS (1 ou plus) (pour recevoir les enregistrements) 
<br>
**2.** Utilisateur IAM API uniquement – Accessible en externe (pour injecter les enregistrements) 

### B. Configuration SQS

{% include image.html url="\assets\img\aws-sqs\sqs1.png" description="aws sqs 1 " %}

{% include image.html url="\assets\img\aws-sqs\sqs2.png" description="aws sqs 2 " %}

L'intégration AWS SQS prend en charge les types de file Standard et Fifo, mais Fifo est recommandé car il reflète le plus fidèlement la nature ordonnée du flux entrant. Il est possible, mais peu probable, que le volume de données en streaming dépasse le débit pris en charge par les files Fifo. Les files Fifo utilisent la déduplication et le regroupement de messages. La déduplication garantit qu'un seul enregistrement est conservé pour toute clé d'enregistrement Microshare donnée.  

{% include image.html url="\assets\img\aws-sqs\sqs3.png" description="aws sqs 3 " %}

### C. Configuration utilisateur IAM

{% include image.html url="\assets\img\aws-sqs\sqs4.png" description="aws sqs 4 " %}

Nommez l'utilisateur AWS de manière descriptive conformément à vos normes internes. 

Accordez les permissions minimales nécessaires via Group, Custom Policy, ou en attachant des politiques existantes comme l'exigent vos normes internes. Des suggestions pour définir les Permissions sont fournies ci-dessous à titre indicatif. La politique minimale absolue permettrait au nouvel utilisateur d'effectuer les actions SendMessage et SendMessageBatch sur la ressource spécifique (ARN) créée ci-dessus.  

### D. Recommandation de base : Plus rapide, mais moins sécurisé.

{% include image.html url="\assets\img\aws-sqs\sqs5.png" description="aws sqs 5 " %}


{% include image.html url="\assets\img\aws-sqs\sqs6.png" description="aws sqs 6" %}

### E. Recommandation avancée : Plus d'étapes, mais plus sécurisé.


{% include image.html url="\assets\img\aws-sqs\sqs7.png" description="aws sqs 7 " %}


{% include image.html url="\assets\img\aws-sqs\sqs8.png" description="aws sqs 8 " %}

{% highlight java %}
{ 

    "Version": "2012-10-17", 

    "Statement": [ 

        { 

            "Sid": "VisualEditor0", 

            "Effect": "Allow", 

            "Action": [ 

                "sqs:SendMessageBatch", 

                "sqs:SendMessage" 

            ], 

            "Resource": "arn:aws:sqs:us-east-1:3345234625673:dev-microshare-test.fifo" 

        } 

    ] 

} 
{% endhighlight %}

{% include image.html url="\assets\img\aws-sqs\sqs9.png" description="aws sqs 9 " %}

Sur l'écran de succès, utilisez le bouton « Download .csv » pour capturer les identifiants uniques du nouvel utilisateur. Faites attention à stocker et transmettre le fichier résultant de manière sécurisée. Ce sont des identifiants d'accès stockés en texte brut et vulnérables aux fuites. 

Votre contact Service ou Support Microshare aura besoin du fichier .csv. Il est recommandé d'envoyer ces informations de manière sécurisée via un e-mail chiffré GPG ou via une connexion de chat chiffrée utilisant keybase.io.  

### F. Références de configuration

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html)

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html)

## 5. Sécurité
---------------------------------------
Comme pour la plupart des installations AWS, SQS prend en charge l'authentification et l'autorisation à l'aide d'identifiants utilisateur IAM révocables et de politiques d'accès qui permettent au client un contrôle total sur les permissions d'écriture pour la file SQS et identifient positivement l'accès au Smart Network. Les données sont chiffrées sur le réseau par défaut avec SQS et peuvent être configurées pour être chiffrées au repos dans AWS. Étant donné que le Smart Network provient de l'extérieur des réseaux d'entreprise, les restrictions de sécurité réseau sur les opérations d'écriture ne sont pas possibles sur le point de terminaison réseau entrant.  

### Références de sécurité

[https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-security.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-security.html)


 




 
