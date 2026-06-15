---
layout: docs
title: Kerlink Wanesy Management Center (WMC)
description: Envoi de données vers le Microshare Smart Network via le Kerlink Wanesy Management Center
lang: fr
translation_of: docs/2/installer/quick-start/kerlink-wmc.md
translations:
  en: /docs/2/installer/quick-start/kerlink-wmc
  fr: /docs/2/fr/installer/quick-start/kerlink-wmc
toc: true
---

---------------------------------------
Sur cette page, nous expliquons comment configurer votre instance Kerlink pour qu'elle fonctionne avec Microshare dans le cas d'usage du contact tracing. Cela fonctionne pour tous les cas d'usage Microshare.

## Sommaire

1. [Créer un nouveau Customer](./#1-create-a-new-customer)
2. [Créer une nouvelle Push Configuration pour Microshare](./#2-create-a-new-push-configuration-for-microshare)
3. [Créer un nouveau cluster (pour Microshare Contact Tracing)](./#3-create-a-new-cluster-for-microshare-contact-tracing)
4. [Déclarer les appareils (Wave)](./#4-declare-the-wave-devices)

Instructions :

## Prérequis. Connexion à votre instance WMC
Une fois vos appareils portables et marqueurs de localisation installés dans vos locaux, vous êtes prêt à commencer à envoyer des données vers le Microshare Smart Network™.

Pour ce faire, vous devrez d'abord vous connecter à l'interface Kerlink Wanesy Management Center [WMC] avec les identifiants fournis par Microshare.

---------------------------------------
<br>


## 1. Créer un nouveau Customer
---------------------------------------

Créez un nouveau Customer « Microshare » : Administration > Customers> +

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCustomer.png" description="Banner" %}



## 2. Créer une nouvelle Push Configuration pour Microshare
---------------------------------------

Créez une nouvelle Push Configuration pour Microshare : Administration > Clusters>  Push Configurations

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreatePush.png" description="Banner" %}

````
Customer: Microshare 

Name: Microshare Contact Tracing Push Config1 

Type: HTTP 

Message detail level: Payload 

- Click NEXT
````
<br>


**Insérez l'URL de connexion :**
Contactez Fulfillment@microshare.io pour obtenir les détails du point de terminaison URL et saisissez-les sur cet écran
>>> [ex. https://api.microshare.io/share/io.microshare.contact.packed /token/1234567890]

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreatePush2.png" description="Banner" %}

- Click NEXT

**Cliquez simplement sur NEXT sur l'écran suivant, aucune modification nécessaire :** (SSL)

{% include image.html url="/assets/img/wanesy/WanesyAdmin_SSL.png" description="Banner" %}


**Cliquez sur VALIDATE sur l'écran suivant, aucune modification nécessaire :** Custom Headers

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CustomHeaders.png" description="Banner" %}




## 3. Créer un nouveau cluster pour Microshare Contact Tracing
---------------------------------------

Créez un nouveau cluster pour Microshare Contact Tracing : Administration > Clusters > +
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCluster.png" description="Banner" %}
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCluster2.png" description="Banner" %}
```
Customer: Microshare  

Name: Microshare Contact Tracing 

Push: ENABLE 

Push Configuration: select “Microshare Contact Tracing Push 1” 

- Click VALIDATE
```



## 4. Déclarer les appareils Wave

Déclarez les appareils Wave : Administration > End Devices > +

Dans le menu déroulant Cluster, sélectionnez le cluster que vous venez de créer
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice.png" description="Banner" %}

```
Profile: Static 

Class: A 

Region: choose the regional parameters for your region 

LoRaWAN MAC version: 1.0.2 

Regional parameters revision: B

- Click NEXT
```

**Insérez le Device ID pertinent**

Le Device EUI, l'Application EUI et les clés d'application sont disponibles auprès de Kerlink ou Microshare
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice2.png" description="Banner" %}

- Click NEXT


**Cliquez sur NEXT sur l'écran suivant, aucune modification nécessaire (sauf instruction contraire spécifique) :** LoRaWAN RF Parameters

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice3.png" description="Banner" %}


**Sélectionnez « Inherited » sur l'écran suivant :** Geolocation

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice4.png" description="Banner" %}
```
- Click VALIDATE
Repeat this process for all the Wave devices or use the csv upload to carry out a mass device declaration
```


**5. Branchez maintenant le ou les Wave dans une zone couverte par une passerelle Kerlink connectée à la même instance Kerlink WMC (la passerelle doit être assignée au customer « Microshare » OU être configurée sur « PUBLIC »).**


Vérifiez que le Wave rejoint correctement le réseau et envoie des uplinks



---------------------------------------
##### Contactez l'équipe Fulfillment de Microshare (Fulfillment@microshare.io) pour confirmer
