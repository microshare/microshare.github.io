---
layout: docs
title: Intégration AWS Kinesis Data Stream
description: 
lang: fr
translation_of: docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration.md
translations:
  en: /docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration
  fr: /docs/2/fr/technical/streaming-integration/aws-kinesis-data-stream-integration
toc: true
---


---------------------------------------
{% include image.html url="\assets\img\aws.jpg"  description="aws" %}

##### SOMMAIRE : 

1. [Vue d'ensemble](./#1-overview)
2. [Configuration](./#2-setup)
3. [Prérequis](./#3-requirements)
4. [Configuration Kinesis Data Stream](./#4-kinesis-data-stream-setup)
5. [Configuration utilisateur IAM](./#5-iam-user-setup)
6. [Rôle IAM – Accès interne par Firehose [Facultatif]](./#6-iam-role--internal-access-by-firehose-optional)
7. [Kinesis Data Firehose [Facultatif]](./#7-kinesis-data-firehose-optional)
8. [Références de configuration](./#8-setup-references)
8. [Sécurité](./#9-security)


---------------------------------------



## 1. Vue d'ensemble
---------------------------------------

L'intégration AWS Kinesis Data Stream est une intégration de données en streaming qui pousse les données du Smart Network vers le tenancy AWS d'un client en temps réel. Les données sont généralement disponibles sur un Kinesis Data Stream avec une latence inférieure à la seconde pour garantir que la gestion des événements et l'analyse sont alimentées avec l'état le plus actuel de l'espace mesuré. L'intégration AWS Kinesis Data Stream crée un chemin vers le stockage avancé, la visualisation et l'analyse dans l'écosystème AWS Cloud depuis le Microshare Smart Network. 


## 2. Configuration
---------------------------------------

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image001.png" width="800" description="aws kinesis" %}

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image002.png" width="800" description="aws kinesis" %}

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image003.png" width="800" description="aws kinesis" %}

## 3. Prérequis
---------------------------------------

* A.     Kinesis Data Stream (1 ou plus) (pour recevoir les enregistrements)
* B.     Utilisateur IAM API uniquement – Accessible en externe (pour injecter les enregistrements)
* C.     Rôle IAM – Usage interne uniquement (pour lire et transférer les enregistrements)
* D.     Kinesis Data Firehose (1 ou plus) (pour transférer et stocker les enregistrements)

 

## 4. Configuration Kinesis Data Stream
---------------------------------------

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image004.png" width="800" description="aws kinesis" %}


La configuration AWS Kinesis Data Stream ne nécessite qu'une estimation du nombre de shards ouverts pris en charge par le Data Stream. Le Shard Estimator peut être utile pour calculer les besoins en volume. Une taille moyenne d'enregistrement pour le Microshare Smart Network est de 1024 octets (1k), bien que votre cas d'utilisation puisse nécessiter des tailles d'enregistrement plus grandes.

 

## 5. Configuration utilisateur IAM
---------------------------------------
 
{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image005.png" width="800" description="aws kinesis" %}


Nommez l'utilisateur AWS de manière descriptive conformément à vos normes internes.

Accordez les permissions minimales nécessaires via Group, Custom Policy, ou en attachant des politiques existantes comme l'exigent vos normes internes. Des suggestions pour définir les Permissions sont fournies ci-dessous à titre indicatif. La politique minimale absolue permettrait au nouvel utilisateur d'effectuer les actions PutRecord et PutRecords sur la ressource spécifique créée ci-dessus.

 

**Recommandation de base : Plus rapide, mais moins sécurisé.**

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image006.png" width="800" description="aws kinesis" %}


**Recommandation avancée : Plus d'étapes, mais plus sécurisé.**

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image007.png" width="800" description="aws kinesis" %}

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image008.png" width="800" description="aws kinesis" %}
 
`Copiez et collez simplement :`

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "kinesis:PutRecord",
                "kinesis:PutRecords"
            ],
            "Resource": "arn:aws:kinesis:*:373439459043:stream/*"
        }
    ]
}
```
 
{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image009.png" width="800" description="aws kinesis" %}
 

Sur l'écran de succès, utilisez le bouton « Download .csv » pour capturer les identifiants uniques du nouvel utilisateur. Faites attention à stocker et transmettre le fichier résultant de manière sécurisée. Ce sont des identifiants d'accès stockés en texte brut et vulnérables aux fuites.

Votre contact Service ou Support Microshare aura besoin du fichier .csv. Il est recommandé d'envoyer ces informations de manière sécurisée via un e-mail chiffré GPG ou via une connexion de chat chiffrée utilisant keybase.io.

 

## 6. Rôle IAM – Accès interne par Firehose [Facultatif]
---------------------------------------

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image010.png" width="800" description="aws kinesis" %}

Ce rôle sera accordé à l'AWS Kinesis Data Firehose qui sera créé à l'étape suivante. Il doit être séparé de la politique utilisée pour accorder l'accès à l'utilisateur accessible en externe à l'étape ci-dessus. Ce rôle aura besoin d'accès aux ressources Kinesis Data Stream et aux ressources du système cible. Dans l'exemple ci-dessus, le Rôle accorde l'accès à AmazonS3. Ce rôle peut bénéficier de restrictions plus strictes conformément à vos politiques et normes internes.

## 7. Kinesis Data Firehose [Facultatif]
---------------------------------------

L'installation Kinesis Data Firehose est le moyen le plus simple de déplacer les données depuis le Kinesis Data Stream. La consommation directe du Kinesis Data Stream est couverte dans la documentation Amazon et dépasse le cadre de ce document.

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image011.png" width="800" description="aws kinesis" %}



Fournissez un nom unique pour votre instance Data Firehose. Il peut être pratique d'utiliser le même nom que celui utilisé à l'étape A avec la destination source ajoutée. (ex. your-unique-stream-name => your-unique-stream-name-to-s3) Choisissez une nomenclature conforme à vos politiques internes.

Sélectionnez le bouton radio et sélectionnez le nom du Data Stream dans le menu déroulant pour indiquer que la source sera le Kinesis Data Stream créé aux étapes ci-dessus.

{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image012.png" width="800" description="aws kinesis" %}

 

Les sélections par défaut sont sûres pour la conversion d'enregistrements. Cependant, si une transformation de données est requise dans votre architecture de traitement de données, des fonctions de conversion d'enregistrements peuvent être fournies pour modifier les données au fur et à mesure qu'elles passent du Data Stream au point de stockage par le Data Firehose. Cela sera généralement requis lorsque les données doivent s'adapter à un format de données existant ou optimisé dans un point de terminaison tel qu'Elastic Search avec un schéma plus défini.


{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image013.png" width="800" description="aws kinesis" %}

 

.

La section Select Destination montre les options disponibles en standard pour le Kinesis Data Firehose. Sélectionnez un point de stockage qui correspond à votre architecture analytique. Vous pouvez configurer plusieurs instances Kinesis Data Firehose pour un seul Kinesis Data Stream afin d'envoyer les données en temps réel vers plus d'un point de terminaison simultanément. Le choix le plus simple pour démarrer sera de sélectionner S3.

Les valeurs par défaut sont sûres à sélectionner pour la plupart de ces paramètres pour S3. Vous devez soit sélectionner soit « Create new » pour allouer un bucket pour la livraison des données déchiffrées du Data Stream.


{% include image.html url="\assets\img\aws-kinesis-data-stream-integration\image014.png" width="800" description="aws kinesis" %}



Les valeurs par défaut sont sûres à sélectionner pour la plupart de ces paramètres. Dans la section Permissions, cliquez sur le bouton « Create new or choose ». Dans la boîte de dialogue qui s'affiche, sélectionnez le Rôle IAM que vous avez créé à l'étape ci-dessus et cliquez sur le bouton « Allow ». Fournissez des tags pour faciliter l'identification des capacités conformément à vos procédures internes.

La dernière étape demandera une révision. Cliquez sur create pour procéder au provisionnement des ressources.

## 8. Références de configuration
---------------------------------------

[https://docs.aws.amazon.com/streams/latest/dev/introduction.html](https://docs.aws.amazon.com/streams/latest/dev/introduction.html)

[https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html)

 

## 9. Sécurité
---------------------------------------

Comme pour la plupart des installations AWS, Kinesis prend en charge l'authentification et l'autorisation à l'aide d'identifiants utilisateur IAM révocables et de politiques d'accès qui permettent au client un contrôle total sur les permissions d'écriture pour le Data Stream et identifient positivement l'accès au Smart Network. Les données sont chiffrées sur le réseau et au repos par défaut avec les Data Streams. Étant donné que le Smart Network provient de l'extérieur des réseaux d'entreprise, les restrictions de sécurité réseau sur les opérations d'écriture ne sont pas possibles sur le point de terminaison réseau entrant.

 

#### Références de sécurité

[https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html](https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html)

[https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html)


 
