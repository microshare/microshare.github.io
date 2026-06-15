---
layout: docs
title: Guide des clusters d'appareils
description: Regrouper les données de vos appareils
lang: fr
translation_of: docs/2/technical/microshare-platform/device-cluster-guide.md
translations:
  en: /docs/2/technical/microshare-platform/device-cluster-guide
  fr: /docs/2/fr/technical/microshare-platform/device-cluster-guide
toc: true
---


{% include image.html url="/assets/img/thumbnail-9.jpg" height="900" width="900" description="thumbnail 2" %}

<br>
---------------------------------------

##### SOMMAIRE :

1. [Introduction](./#1-introduction-qu-est-ce-qu-un-cluster-d-appareils)
2. [Création d'un cluster d'appareils](./#2-creation-d-un-cluster-d-appareils)
3. [Création d'un cluster d'appareils par import CSV](./#3-creation-d-un-cluster-d-appareils-par-import-csv)
4. [Définir le bon RecType](./#4-definir-le-bon-rectype)
5. [Mise à jour d'un cluster d'appareils](./#5-mise-a-jour-d-un-cluster-d-appareils)
6. [Réautorisation d'un cluster d'appareils](./#6-reautorisation-d-un-cluster-d-appareils)

---------------------------------------

## 1. Introduction : Qu'est-ce qu'un cluster d'appareils ?
---------------------------------------

Un cluster d'appareils est un groupe de capteurs, le plus souvent des capteurs situés dans la même zone, dont les données sont combinées et affichées ensemble lorsqu'ils sont configurés dans votre tableau de bord. C'est particulièrement pratique pour observer la zone, et pas seulement les données d'un seul capteur. Par exemple, observer l'occupation de tous les bureaux du bureau au cours de la journée de travail, plutôt que celle d'un seul bureau. Il est important de noter que tous les appareils d'un cluster doivent être du même modèle de capteur.

#### À quoi ressemble le processus de cluster d'appareils ?

Les données de vos capteurs sont envoyées via un signal « LoRa » vers votre passerelle LoRaWAN. La passerelle envoie les données via WiFi ou signal cellulaire vers son réseau correspondant, puis vers le réseau Microshare sous le nom du recType source. Le programme de cluster d'appareils prend les données du recType source et les pousse dans le data lake Microshare sous le nom du recType cible. Ensuite, les données passent par la fonction de décodage correspondant au type de votre appareil. Après cela, le programme POST vos données dans un format exploitable vers l'API Microshare afin qu'elles puissent être représentées sur votre tableau de bord ou votre application.

## 2. Création d'un cluster d'appareils
---------------------------------------
Un cluster d'appareils peut être créé via [l'application Deploy-M](/docs/2/installer/deploy-m/download-the-app/), ou sur un ordinateur en suivant ce tutoriel.

Rendez-vous sur la page développeur [dapp.microshare.io](https://dapp.microshare.io/) et connectez-vous. Si vous n'avez pas encore de compte, [vous pouvez en créer un ici](/docs/2/fr/general/quick-start/create-an-account/). Accédez à l'onglet Manage en haut à droite. Ensuite, cliquez sur l'onglet devices dans le panneau de gauche.

{% include image.html url="\assets\img\device-cluster-image-1.png" height="900" width="900" description="Device CLuster 1" %}

Cliquez sur le bouton Create avec l'icône de clé. Cela vous mènera à la page suivante :

{% include image.html url="\assets\img\device-cluster-image-2.png" height="900" width="900" description="Device CLuster 2" %}

**1.** Donnez un nom pour identifier votre cluster d'appareils selon votre entreprise, le type de capteurs, la zone où ils se trouvent, etc.

<br>
**2.** Donnez une brève description précisant le cluster d'appareils.

<br>
**3.** Assurez-vous que votre cluster est activé. Vérifiez que la case indiquée par une flèche verte est cochée.

<br>
**4.** Les record types sont marqués par les flèches bleues. Le source record type est l'origine des données du cluster d'appareils. Le target record type est le nom sous lequel les données de vos clusters d'appareils seront stockées. La convention de nommage fonctionne de sorte que la première partie du rectype indique qui a défini la convention. Par exemple, si Comcast possédait le record type, son source record type serait com.comcast.environment. Le libellé unpacked du target rectype indique que les données ont été déchiffrées, ce qui est très important lorsque vous appelez le rectype pour l'afficher dans votre tableau de bord. Pour l'instant, Microshare est la seule source de nommage des rectypes clients, mais la possibilité pour les clients de créer leurs propres conventions de nommage existe.


##### <!> Veuillez suivre les [bonnes pratiques RecType](./#4-definir-le-bon-rectype) ! <!>


**5.** Souligné en orange, la case device manufacturer. Cliquez sur le menu déroulant et sélectionnez le type d'appareil de votre cluster. La sélection du modèle remplira automatiquement la case <em>Device Payload Unpacker</em>.

<br>
**6.** Souligné en violet, la catégorie de métadonnées de localisation. Saisissez des balises décrivant l'emplacement du cluster d'appareils pour faciliter l'identification des appareils par la suite ; il s'agit d'une localisation générale pour tous les appareils du cluster. Voici un exemple de ce que cela devrait être :
* *Europe,United Kingdom,London,5 Merchant Square,desk*

La structure est donc la suivante :

`continent` **/** `country` **/** `city` **/** `address` **/** `usecase`

{% include image.html url="\assets\img\device-cluster-image-3.png" height="900" width="900" description="Device Cluster 3" %}

<br>
**7.** Souligné en jaune, l'endroit où les performances de votre cluster seront affichées en graphique lorsque vous ajouterez vos appareils au cluster à l'étape suivante.

<br>
**8.** Pour ajouter des appareils au cluster d'appareils, cliquez sur le bouton add souligné en rouge.
* 	Saisissez l'EUI ou l'ID de l'appareil. Vous pouvez trouver l'EUI ou l'ID de votre appareil [ici](/docs/2/installer/quick-start/faq-about-installations/).
* 	Ajoutez les balises décrivant l'emplacement de l'appareil. Par exemple, incluez des balises pour la ville, le bâtiment, la pièce et la zone de la pièce.
* 	Répétez ces étapes pour tous les appareils que vous souhaitez ajouter au cluster.

<br>
**9.** Souligné en bleu-vert, votre fournisseur de réseau. Cliquez sur le menu déroulant et sélectionnez le réseau approprié.


###### <!> Les étapes suivantes ne sont pas souvent utilisées ; ne les suivez que si vous utilisez LoRa OTAA <!>

<br>
**10.**	Souligné en vert, une case à cocher LoRa OTAA. OTAA signifie Over the Air Authentication. Il s'agit d'une passerelle avec une sécurité des données renforcée. Si vous prévoyez d'utiliser ce service pour votre cluster d'appareils, cochez cette case. Ne suivez les étapes suivantes que si vous utilisez LoRa OTAA.
<br>
{% include image.html url="\assets\img\device-cluster-image-4.png" height="900" width="900" description="Device Cluster 4" %}
**11.**	Fournissez votre account token dans la case soulignée en bleu. Cela peut être fait via l'API ; un tutoriel est disponible [ici](/docs/2/technical/api/quick-start/).

<br>
**12.**	Cliquez sur le menu déroulant souligné en violet pour le plan de fréquence LoRa de votre région. Si vous ne connaissez pas le plan de fréquence de votre région, vous pouvez utiliser [cette page](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html).

<br>
**13.**	Sélectionnez votre version LoRaWAN soulignée en orange.

<br>
**14.**	Saisissez votre server joinEUI souligné en vert pour compléter les informations nécessaires à l'utilisation de LoRa OTAA.

#### Que faire ensuite ?

Une fois votre cluster d'appareils créé, vous pouvez créer un tableau de bord pour consulter les données de vos clusters en suivant le tutoriel du [guide du tableau de bord](/docs/2/fr/technical/microshare-platform/dashboard-guide/). Vous pouvez également apprendre à mettre à jour votre cluster d'appareils dans la section suivante.

Vous pouvez aussi apprendre à créer des règles et des vues pour gérer qui peut voir les données de votre cluster d'appareils en suivant les guides de la documentation de la plateforme Microshare.

## 3. Création d'un cluster d'appareils par import CSV
---------------------------------------

Lisez d'abord la section précédente pour comprendre tous les paramètres à configurer pour créer un DC. Une fois que vous comprenez tous les paramètres, vous pourrez utiliser l'import CSV pour gagner du temps.

Téléchargez d'abord le modèle de tableau XLSX [ici](/assets/xlsx/DC_Upload_Template.xlsx).

Ouvrez-le ensuite.

Vous devriez obtenir un tableau comme celui-ci :

{% include image.html url="\assets\img\upload_dc/upload_dc_0.png" height="900" width="900" description="Upload DC" %}

Pour les étapes suivantes, vous n'aurez besoin de remplir que les colonnes « DevEUI », « location 1 », « location 2 » et « location 3 ». La colonne « location 4 » est une colonne supplémentaire.

Le DEV EUI est une chaîne hexadécimale de 16 caractères ; vous pouvez conserver ou non les tirets.

Location 1 correspond généralement au bâtiment.
Location 2 correspond généralement à l'étage.
Location 3 correspond généralement à la pièce.

Remplissez ensuite votre tableau avec vos appareils :

{% include image.html url="\assets\img\upload_dc/upload_dc_1.png" height="900" width="900" description="Upload DC" %}

##### Une fois terminé, enregistrez votre fichier au format **CSV** en utilisant le séparateur « **;** ».

{% include image.html url="\assets\img\upload_dc/upload_dc_2.png" height="300" width="300" description="Upload DC" %}

Une fois le fichier prêt, faites-le simplement glisser-déposer sur le bouton « UPLOAD » de la page Cluster.

{% include image.html url="\assets\img\upload_dc/upload_dc_3.png" height="900" width="900" description="Upload DC" %}

Vos appareils sont immédiatement ajoutés à votre DC ; il ne vous reste plus qu'à compléter les paramètres et votre DC est prêt !

{% include image.html url="\assets\img\upload_dc/upload_dc_4.png" height="900" width="900" description="Upload DC" %}

## 4. Définir le bon RecType
---------------------------------------

Pour garantir un système fonctionnel, il est important de suivre les instructions pour utiliser le bon recType.

Le modèle est :

`<reverse DNS of model owner>.<data domain tag>.<data state/stage>`



Les formats d'appareils seront détenus par io.microshare car nos Data Domain Modules (DDM) définissent les modèles JSON standard pour les domaines donnés.



Ex. :

    io.microshare.motion.packed => io.microshare.motion.unpacked

---------------------------------------

###### <!>Il est possible que le recType packed correspondant soit différent, bien que ce ne soit pas recommandé, si l'organisation est ancienne ou plus représentative. Mais il est nécessaire que le recType unpacked suive les bonnes pratiques. <!>

---------------------------------------

**Exemples**



En utilisant les conventions standard pour différents types de données :

* io.microshare.motion.unpacked

* io.microshare.feedback.unpacked

* io.microshare.environment.unpacked

* io.microshare.gps.unpacked

* io.microshare.alarm.unpacked



Des recTypes communs permettront une plus grande cohérence pour le traitement en aval des pipelines. Les données partageant un recType doivent avoir des formats JSON communs et peuvent tirer parti d'étapes de traitement communes. Des recTypes communs créeront une cohérence dans les applications produit et les produits d'analyse en aval en éliminant le besoin d'ajustements de code et de configuration.



Le moteur de règles filtre automatiquement les enregistrements ayant le même recType qui sont possédés (et non partagés), rendant l'inclusion du contexte organisationnel dans le recType inutile.



Les balises doivent être utilisées pour distinguer les informations contextuelles utilisées pour filtrer les données parmi des données aux balises similaires. Une bonne pratique de balisage est importante pour permettre le fonctionnement de recTypes cohérents.



La propriété/le client est déjà indiquée séparément dans les enregistrements via le segment « owner » de l'enregistrement. Un contexte de propriétaire supplémentaire peut être fourni via des balises.



##### Appareils

Voici un tableau des unpackers avec les champs qu'ils génèrent et les domaines auxquels ils peuvent correspondre :


| Unpacker                          | Fields                                                             | Domain(s)               |
| --------------------------------- | ------------------------------------------------------------------ | ----------------------- |
| ch.parametric.counter.PCR1LR      | motions\_since\_transmit                                           | motion                  |
| cn.winext.smoke.AN102C            | alarm, smokiness, temperature, humidity, haziness                  | alarm  environment      |
| cn.winext.gas.AN302               | alarm, gas                                                         | alarm  environment      |
| cn.winext.sos.AN301               | alarm                                                              | alarm                   |
| com.adeunis.motion.ARF8276A       | motions\_since\_reset                                              | motion                  |
| com.adeunis.temperature.ARF8180   | temperature                                                        | environment             |
| com.bosch.parking.TPS110          | presence                                                           | motion                  |
| com.brighterbins.level.V00001     | distance, temperature                                              | distance  environment   |
| com.brighterbins.level.V00001     | fill, temperature                                                  | environment, ??         |
| com.gemteks.tracker.WSMS116       | presence, gps                                                      | motion, gps             |
| com.mcf88.environment.LW12VOC     | iso\_time, temperature, humidity, pressure, illuminance, voc       | environment             |
| com.netvox.environment.R711       | temperature, humidity                                              | environment             |
| com.netvox.leak.R311W             | alarm                                                              | alarm                   |
| com.netvox.motion.RB11E           | temperature, illuminance, presence                                 | environment             |
| com.netvox.panic.RB02I            | alarm                                                              | alarm                   |
| com.netvox.security.R311A         | closed                                                             | ??                      |
| com.netvox.smoke.RA02A            | alarm                                                              | alarm                   |
| com.risinghf.environment.RHF1S001 | temperature, humidity                                              | environment             |
| eu.skiply.button.SmilioAction     | swipe, pushes\_since\_reset                                        | feedback                |
| io.tracknet.healthy.TBHV100       | temperature, humidity, co2, voc                                    | environment             |
| io.tracknet.leak.TBWT100          | leak, temperature, humidity                                        | environment, ??         |
| io.tracknet.light.TBAM100         | temperature, illuminance                                           | environment             |
| io.tracknet.motion.TMBS100        | presence, temperature, motions\_since\_reset                       | motion  environment,    |
| io.tracknet.security.TBDW100      | closed, temperature, motions\_since\_reset                         | environment  motion, ?? |
| io.tracknet.sound.TBSL100         | temperature, loudness                                              | environment, ??         |
| se.elsys.environment.ERSCO2       | temperature, humidity, illuminance, motions\_since\_transmit, co2  | environment  motion     |
| se.elsys.motion.ERSEye            | temperature, humidity, illuminance                                 | environment             |

Voici une liste de nos applications produit avec les données de domaine requises :

| App                       | recType                 |                                                         |
| ------------------------- | ----------------------- | ------------------------------------------------------- |
| air\_quality              | environment, airquality | Used to be airquality, now moving to environment        |
| attendance                |                         |                                                         |
| available\_desks          | motion                  |                                                         |
| available\_meeting\_rooms | motion                  |                                                         |
| environment               | environment             |                                                         |
| feedback\_3               | feedback                |                                                         |
| feedback\_5               | feedback                |                                                         |
| floorplan                 | occupancy, environment  | Uses both IF floorplan displays occupancy AND temp data |
| motion                    | motion                  |                                                         |
| occupancy                 | motion                  |                                                         |
| occupancy\_meeting\_rooms | motion                  |                                                         |
| refrigerator              | environment             |                                                         |



## 5. Mise à jour d'un cluster d'appareils
---------------------------------------

Pour mettre à jour votre cluster d'appareils, rendez-vous simplement sur la page du cluster d'appareils, puis cliquez sur update. Vous pourrez modifier les informations de votre cluster d'appareils et de vos appareils.

Attention :
* Vous ne pourrez pas modifier les rectypes
* Ne réutilisez pas un ancien cluster d'appareils pour un nouveau type d'appareil. Il vaut mieux créer un nouveau cluster d'appareils à cet effet.

Vous pouvez simplement mettre à jour votre cluster d'appareils et cela fonctionnera.

Si vous avez l'impression que vos modifications n'ont pas été prises en compte, cliquez sur re-authorize sur la page de mise à jour.

## 6. Réautorisation d'un cluster d'appareils
---------------------------------------

Avec Microshare, vous avez la possibilité de réautoriser un cluster d'appareils ; vous pouvez faire la même chose avec un robot.

Que signifie réautoriser ?

Pour le comprendre, il est nécessaire de comprendre le principe de [l'identité](../../microshare-platform-advanced/identity-guide). Et la propriété liée aux règles de partage.

La réautorisation vous permettra de réassocier la propriété d'un cluster d'appareils. Lorsque vous cliquez sur ce bouton, Microshare prendra le compte sous lequel vous êtes connecté, ainsi que l'identité sur laquelle vous vous trouvez actuellement, et réautorisera la propriété et l'identité du cluster d'appareils.

C'est particulièrement utile lorsque le cluster d'appareils a été créé sous la mauvaise identité. En effet, nous recommandons généralement de le créer sous l'identité par défaut Microshare.

Attention : changer la propriété des données peut également avoir un impact sur le partage des données si les règles de partage ne correspondent plus.


 
