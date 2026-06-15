---
layout: docs
title: Technologie LoRaWAN
description: Qu'est-ce que LoRaWAN ?
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-technology.md
translations:
  en: /docs/2/technical/lorawan/lorawan-technology
  fr: /docs/2/fr/technical/lorawan/lorawan-technology
toc: true
---




{% include image.html url="/assets/img/LoRaWan/LoRaWan01.png" description="LoRaWan Technology" %}

<br>
Toutes les informations de cette page sont tirées de [ce document](https://lora-alliance.org/sites/default/files/2018-04/what-is-lorawan.pdf) hébergé sur le [site web de la LoRa Alliance](https://lora-alliance.org).

---------------------------------------

##### SOMMAIRE :

1. [Introduction](./#1-requirements)
    - A. [Qu'est-ce que LoRa®](./#2-sign-in)
    - B. [Longue portée (LoRa®)](./#2-sign-in)
2. [Où s'inscrit le LPWAN ?](./#3-access-to-device-cluster)
    - A. [Facteurs importants du LPWAN](./#4-add-a-device)
3. [Qu'est-ce que LoRaWAN™](./#4-add-a-device)
    - A. [Architecture réseau](./#5-change-a-device)
    - B. [Durée de vie de la batterie](./#5-change-a-device)
    - C. [Capacité réseau](./#5-change-a-device)
    - D. [Classes d'appareils — tous les nœuds ne se valent pas](./#5-change-a-device)
    - E. [Sécurité](./#5-change-a-device)
4. [Résumé régional LoRaWAN™](./#5-change-a-device)
    - A. [LoRaWAN™ pour l'Europe](./#5-change-a-device)
    - B. [LoRaWAN™ pour l'Amérique du Nord](./#5-change-a-device)
    - C. [Mode hybride LoRaWAN™ pour l'Amérique du Nord](./#5-change-a-device)
5. [Comparaison des options technologiques LPWAN](./#6-delete-a-device)
6. [Coût LPWAN vs systèmes hérités](./#6-delete-a-device)



## 1. Introduction
---------------------------------------

L'objectif de ce document est de fournir une vue d'ensemble technique introductive de
LoRa® et LoRaWAN™. Les réseaux Low–Power, Wide-Area (LPWAN) devraient prendre en charge une part importante des milliards d'appareils prévus pour l'Internet des
objets (IoT). LoRaWAN™ est conçu dès l'origine pour optimiser les LPWAN
en termes de durée de vie des batteries, de capacité, de portée et de coût. Un résumé de la spécification LoRaWAN™
pour les différentes régions sera présenté, ainsi qu'une comparaison de haut niveau
des différentes technologies en concurrence dans l'espace LPWAN.

### A. Qu'est-ce que LoRa®

LoRa® est la couche physique ou la modulation sans fil utilisée pour créer le lien de communication longue
portée. De nombreux systèmes sans fil hérités utilisent la modulation par déplacement de fréquence
(FSK) comme couche physique, car c'est une modulation très efficace
pour atteindre une faible consommation d'énergie. LoRa® repose sur la modulation par étalement de spectre à balayage de fréquence (chirp spread spectrum),
qui conserve les mêmes caractéristiques de faible consommation que la modulation FSK
mais augmente considérablement la portée de communication. L'étalement de spectre à balayage de fréquence
est utilisé depuis des décennies dans les communications militaires et spatiales en raison des longues
distances de communication réalisables et de sa robustesse face aux interférences, mais
LoRa® est la première implémentation à faible coût à usage commercial.

### B. Longue portée (LoRa®)

{% include image.html url="/assets/img/LoRaWan/LoRaWan02.png" description="LoRaWan Technology" %}

L'avantage de LoRa® réside dans
la capacité longue portée
de la technologie. Une seule passerelle ou
station de base peut couvrir des villes entières
ou des centaines de kilomètres carrés. La portée dépend fortement
de l'environnement
ou des obstacles sur un site donné,
mais LoRa® et LoRaWAN™ offrent un budget de liaison supérieur à celui de toute autre
technologie de communication normalisée. Le budget de liaison, généralement exprimé en décibels
(dB), est le facteur principal pour déterminer la portée dans un environnement donné. Ci-dessous
figurent les cartes de couverture du réseau Proximus déployé en Belgique. Avec une
quantité minimale d'infrastructure, des pays entiers peuvent facilement être couverts.


## 2. Où s'inscrit le LPWAN ?
---------------------------------------
Une seule technologie ne peut pas couvrir toutes les applications et volumes prévus pour l'IoT.
Le WiFi et le BTLE sont des normes largement adoptées et conviennent très bien aux applications liées à la
communication entre appareils personnels. La technologie cellulaire est idéale pour les
applications nécessitant un débit de données élevé et disposant d'une source d'alimentation. Le LPWAN offre
une autonomie de batterie de plusieurs années et est conçu pour les capteurs et les applications qui doivent
envoyer de petites quantités de données sur de longues distances quelques fois par heure depuis des environnements variés.

{% include image.html url="/assets/img/LoRaWan/LoRaWan03.png" description="LoRaWan Technology" %}

### A. Facteurs importants du LPWAN

Les facteurs les plus critiques d'un LPWAN sont :
•	 Architecture réseau
•	 Portée de communication
•	 Durée de vie de la batterie ou faible consommation
•	 Robustesse face aux interférences
•	 Capacité réseau (nombre maximal de nœuds dans un réseau)
•	 Sécurité réseau
•	 Communication unidirectionnelle vs bidirectionnelle
•	 Variété des applications prises en charge

{% include image.html url="/assets/img/LoRaWan/LoRaWan04.png" description="LoRaWan Technology" %}


## 3. Qu'est-ce que LoRaWAN™
---------------------------------------

LoRaWAN™ définit le protocole de communication et l'architecture système du
réseau, tandis que la couche physique LoRa® permet le lien de communication longue portée.
Le protocole et l'architecture réseau ont la plus grande influence sur la
durée de vie des batteries d'un nœud, la capacité réseau, la qualité de service, la sécurité
et la variété des applications prises en charge par le réseau.

{% include image.html url="/assets/img/LoRaWan/LoRaWan05.png" description="LoRaWan Technology" %}

### A. Architecture réseau

De nombreux réseaux déployés utilisent une architecture en maillage. Dans un réseau
maillé, les nœuds finaux individuels retransmettent les informations d'autres nœuds pour
augmenter la portée de communication et la taille des cellules du réseau. Bien que cela augmente
la portée, cela ajoute aussi de la complexité, réduit la capacité réseau et diminue la durée de vie des batteries, car les nœuds reçoivent et retransmettent des informations d'autres nœuds qui leur sont probablement
sans intérêt. L'architecture en étoile longue portée est la plus adaptée pour préserver
la durée de vie des batteries lorsqu'une connectivité longue portée peut être obtenue.

{% include image.html url="/assets/img/LoRaWan/LoRaWan06.png" description="LoRaWan Technology" %}

Dans un réseau LoRaWAN™, les nœuds ne sont pas associés à une passerelle spécifique. Au lieu de cela,
les données transmises par un nœud sont généralement reçues par plusieurs passerelles. Chaque
passerelle transmet le paquet reçu du nœud final vers le serveur réseau
dans le cloud via une liaison de retour (cellulaire, Ethernet, satellite ou Wi-Fi).
L'intelligence et la complexité sont déportées vers le serveur réseau, qui gère
le réseau, filtre les paquets reçus en double, effectue les contrôles de sécurité,
planifie les acquittements via la passerelle optimale et applique le débit de données adaptatif, etc. Si un nœud est mobile ou en déplacement, aucun transfert n'est nécessaire d'une passerelle
à l'autre, ce qui est une fonctionnalité essentielle pour les applications de suivi d'actifs — un secteur d'application majeur
de l'IoT.

### B. Durée de vie de la batterie

Les nœuds d'un réseau LoRaWAN™ sont asynchrones et communiquent lorsqu'ils
ont des données prêtes à envoyer, que ce soit de manière événementielle ou planifiée. Ce type de protocole est
généralement appelé méthode Aloha. Dans un réseau maillé ou avec un réseau synchrone,
comme le cellulaire, les nœuds doivent fréquemment se « réveiller » pour se synchroniser avec
le réseau et vérifier les messages. Cette synchronisation consomme beaucoup
d'énergie et est le principal facteur de réduction de la durée de vie des batteries. Dans une récente
étude et comparaison réalisée par la GSMA des différentes technologies adressant l'espace
LPWAN, LoRaWAN™ a montré un avantage de 3 à 5 fois par rapport à toutes les autres
options technologiques.

### C. Capacité réseau

Pour rendre viable un réseau en étoile longue portée, la passerelle doit avoir une très grande
capacité ou la capacité de recevoir des messages d'un très grand volume de nœuds. Une forte
capacité réseau dans un réseau LoRaWAN™ est obtenue grâce au débit de données adaptatif
et à l'utilisation d'un émetteur-récepteur multicanal multi-modem dans la passerelle afin que
des messages simultanés sur plusieurs canaux puissent être reçus. Les facteurs critiques
affectant la capacité sont le nombre de canaux simultanés, le débit de données (temps d'émission), la
longueur de la charge utile et la fréquence d'émission des nœuds. Étant donné que LoRa® est une modulation basée sur l'étalement de spectre, les signaux sont pratiquement orthogonaux les uns aux autres lorsque différents
facteurs d'étalement sont utilisés. Lorsque le facteur d'étalement change, le débit de données effectif
change également. La passerelle tire parti de cette propriété en pouvant recevoir
plusieurs débits de données différents sur le même canal en même temps. Si un nœud a un
bon lien et est proche d'une passerelle, il n'a aucune raison d'utiliser toujours le débit de données le plus bas
et d'occuper le spectre disponible plus longtemps que nécessaire. En augmentant le
débit de données, le temps d'émission est réduit, libérant plus d'espace potentiel pour
que d'autres nœuds transmettent. Le débit de données adaptatif optimise également la durée de vie des batteries d'un
nœud. Pour que le débit de données adaptatif fonctionne, une liaison montante et descendante symétrique
est requise avec une capacité descendante suffisante. Ces fonctionnalités permettent à un réseau LoRaWAN™
d'avoir une très haute capacité et de le rendre évolutif. Un réseau peut
être déployé avec une quantité minimale d'infrastructure, et au fur et à mesure que la capacité est nécessaire,
davantage de passerelles peuvent être ajoutées, augmentant les débits de données, réduisant l'écoute croisée
vers d'autres passerelles et augmentant la capacité d'un facteur 6 à 8. Les autres alternatives LPWAN
n'ont pas l'évolutivité de LoRaWAN™ en raison de compromis technologiques
qui limitent la capacité descendante ou rendent la portée descendante asymétrique par rapport à la
portée montante.

### D. Classes d'appareils — tous les nœuds ne se valent pas

Les appareils finaux servent différentes applications et ont des exigences différentes. Afin
d'optimiser une variété de profils d'applications finales, LoRaWAN™ utilise différentes classes d'appareils. Les classes d'appareils font un compromis entre la latence de communication descendante du réseau
et la durée de vie des batteries. Dans une application de type contrôle ou actionneur, la latence de communication descendante
est un facteur important.

{% include image.html url="/assets/img/LoRaWan/LoRaWan07.png" description="LoRaWan Technology" %}

Appareils finaux bidirectionnels (Classe A) : les appareils finaux de Classe A permettent des communications
bidirectionnelles dans lesquelles chaque transmission montante d'un appareil final est suivie de deux
courtes fenêtres de réception descendante. Le créneau de transmission planifié par l'appareil final
est basé sur ses propres besoins de communication avec une légère variation basée sur une base de temps
aléatoire (protocole de type ALOHA). Ce fonctionnement de Classe A est le système d'appareil final le plus économe en énergie
pour les applications qui ne nécessitent une communication descendante du
serveur que peu de temps après qu'un appareil final a envoyé une transmission montante. Les communications descendantes
du serveur à tout autre moment devront attendre la prochaine
transmission montante planifiée.
Appareils finaux bidirectionnels avec créneaux de réception planifiés (Classe B) : en plus des
fenêtres de réception aléatoires de Classe A, les appareils de Classe B ouvrent des fenêtres de réception supplémentaires
à des moments planifiés. Pour que l'appareil final ouvre sa fenêtre de réception à l'heure
planifiée, il reçoit une balise synchronisée dans le temps de la passerelle. Cela
permet au serveur de savoir quand l'appareil final écoute.
Appareils finaux bidirectionnels avec créneaux de réception maximaux (Classe C) : les appareils finaux de Classe
C ont des fenêtres de réception presque continuellement ouvertes, fermées uniquement lors de la transmission.

### E. Sécurité

Il est extrêmement important pour tout LPWAN d'intégrer la sécurité. LoRaWAN™
utilise deux couches de sécurité : une pour le réseau et une pour l'application.
La sécurité réseau garantit l'authenticité du nœud dans le réseau, tandis que la
couche de sécurité applicative garantit que l'opérateur réseau n'a pas accès aux
données applicatives de l'utilisateur final. Le chiffrement AES est utilisé avec l'échange de clés utilisant
un identifiant IEEE EUI64.
Il y a des compromis dans chaque choix technologique, mais les fonctionnalités LoRaWAN™
en matière d'architecture réseau, de classes d'appareils, de sécurité, d'évolutivité de capacité et
d'optimisation pour la mobilité couvrent la plus large variété d'applications IoT potentielles.

## 4. Résumé régional LoRaWAN™
---------------------------------------

La spécification LoRaWAN™ varie légèrement d'une région à l'autre en fonction des
différentes allocations spectrales régionales et des exigences réglementaires. La
spécification LoRaWAN™ pour l'Europe et l'Amérique du Nord est définie, mais d'autres
régions sont encore en cours de définition par le comité technique. Rejoindre la LoRa® Alliance
en tant que membre contributeur et participer au comité technique peut avoir
des avantages significatifs pour les entreprises ciblant des solutions pour le marché asiatique.

{% include image.html url="/assets/img/LoRaWan/LoRaWan08.png" description="LoRaWan Technology" %}

### A. LoRaWAN™ pour l'Europe

LoRaWAN™ définit dix canaux, dont huit à débit de données multiple de 250 bps à
5,5 kbps, un canal LoRa® à haut débit unique à 11 kbps et un canal FSK unique
à 50 kbps. La puissance de sortie maximale autorisée par l'ETSI en Europe est de +14 dBm, à
l'exception de la bande G3 qui autorise +27 dBm. Il existe des restrictions de cycle de service
sous l'ETSI mais aucune limitation de durée maximale de transmission ou d'occupation de canal.

### B. LoRaWAN™ pour l'Amérique du Nord

La bande ISM pour l'Amérique du Nord va de 902 à 928 MHz. LoRaWAN™ définit 64
canaux montants de 125 kHz de 902,3 à 914,9 MHz par incréments de 200 kHz. Il y a
huit canaux montants supplémentaires de 500 kHz par incréments de 1,6 MHz de 903 MHz à
914,9 MHz. Les huit canaux descendants sont de 500 kHz de large, de 923,3 MHz
à 927,5 MHz. La puissance de sortie maximale dans la bande 902-928 MHz en Amérique du Nord est de
+30 dBm, mais pour la plupart des appareils +20 dBm est suffisant. Sous la FCC, il n'y a pas de limitations de cycle de service, mais il y a une durée maximale d'occupation de 400 ms par canal.

{% include image.html url="/assets/img/LoRaWan/LoRaWan09.png" description="LoRaWan Technology" %}


### C. Mode hybride LoRaWAN™ pour l'Amérique du Nord

La plupart des gens connaissent les exigences de saut de fréquence de la FCC, qui
exigent que plus de 50 canaux soient utilisés de manière égale dans la bande ISM. LoRaWAN™
est défini avec plus de 50 canaux pour tirer parti du spectre disponible
et permettre une puissance de sortie maximale.
La modulation LoRa® est qualifiée de technique de modulation numérique, elle est donc exemptée de
devoir se conformer à toutes les exigences de saut de fréquence spécifiées par la FCC
en mode hybride de fonctionnement. En mode hybride, la puissance de sortie maximale est
limitée à +21 dBm et seul un sous-ensemble de huit canaux sur les 64 canaux montants
est utilisé en mode hybride.

Extrait de la FCC :
« A hybrid system uses both digital modulation and frequency hopping techniques at
the same time on the same carrier. As shown in Section 15.247(f), a hybrid system
must comply with the power density standard of 8 dBm in any 3 kHz band when the
frequency hopping function is turned off. The transmission also must comply with a
0.4 second / channel maximum dwell time when the hopping function is turned on.
There is no requirement for this type of hybrid system to comply with the 500 kHz
minimum bandwidth normally associated with a DTS transmission; and, there is no
minimum number of hopping channels associated with this type of hybrid system. »

## 5. Comparaison des options technologiques LPWAN
---------------------------------------
Il y a beaucoup d'activité dans le secteur IoT comparant les options LPWAN tant d'un point de vue
technique que du modèle économique. Les réseaux LPWAN
sont déployés maintenant car il existe un solide argument commercial pour soutenir un déploiement immédiat,
et le coût de déploiement du réseau dans les bandes non licenciées nécessite beaucoup
moins de capital qu'une simple mise à niveau logicielle 3G. Les questions auxquelles il faut répondre
pour comparer les différentes technologies LPWAN sont :
• Flexibilité pour cibler une grande variété d'applications
• Le protocole de communication est-il sécurisé ?
• Aspects techniques — portée, capacité, communication bidirectionnelle, robustesse face aux
interférences
• Coût de déploiement du réseau, coût du BOM des nœuds finaux, coût de la batterie
 (principal contributeur au BOM)
• Écosystème de fournisseurs de solutions pour des modèles économiques flexibles
• Disponibilité de produits finaux pour assurer le ROI du déploiement réseau
• Solidité de l'écosystème pour assurer la qualité et la longévité de la solution

{% include image.html url="/assets/img/LoRaWan/LoRaWan10.png" description="LoRaWan Technology" %}

## 6. Coût LPWAN vs systèmes hérités
---------------------------------------
LoRaWAN™ permet des économies significatives sur le déploiement et l'infrastructure
requise par rapport aux systèmes existants. L'analyse ci-dessous est réalisée par Talkpool,
qui possède une expérience significative dans le déploiement de solutions basées sur WMBus et LoRa®.

{% include image.html url="/assets/img/LoRaWan/LoRaWan11.png" description="LoRaWan Technology" %}

{% include image.html url="/assets/img/LoRaWan/LoRaWan12.png" description="LoRaWan Technology" %}


