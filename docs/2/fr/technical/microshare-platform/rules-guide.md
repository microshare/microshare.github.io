---
layout: docs
title: Guide des règles
description: Guide complet pour comprendre les règles
lang: fr
translation_of: docs/2/technical/microshare-platform/rules-guide.md
translations:
  en: /docs/2/technical/microshare-platform/rules-guide
  fr: /docs/2/fr/technical/microshare-platform/rules-guide
toc: true
---

{% include image.html url="/assets/img/thumbnail-8.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SOMMAIRE :

1. [Qu'est-ce qu'une règle ?](./#1-quest-ce-qu-une-regle)
2. [Création d'une règle](./#2-creation-d-une-regle)
  - A. [Créer un nom et une description](./#a-creer-un-nom-et-une-description)
  - B. [Identification de l'enregistrement](./#b-identification-de-l-enregistrement)
  - C. [Opérations](./#c-operations)
  - D. [Contexte du propriétaire](./#d-contexte-du-proprietaire)
  - E. [Contexte du demandeur](./#e-contexte-du-demandeur)
3. [Simulation d'une règle](./#3-simulation-d-une-regle)
4. [Bonnes pratiques de partage](./#4-bonnes-pratiques-de-partage)

---------------------------------------

## 1. Qu'est-ce qu'une règle ?
---------------------------------------
Une règle est une expression concrète d'une politique de partage. Elle permet à un propriétaire de données de définir les conditions dans lesquelles une opération demandée sera accordée. Les règles autorisent uniquement le partage. Elles ne l'empêchent pas. Le partage est bloqué par défaut.

## 2. Création d'une règle
---------------------------------------
Les règles peuvent être créées via notre API ou via l'éditeur de règles dans la Composer Console. Pour accéder à l'éditeur de règles, cliquez sur « MANAGE » dans le panneau de navigation supérieur. Un panneau horizontal apparaîtra sur le côté gauche de la page. Sélectionnez le navigateur de panneau « Rules » à gauche pour voir toutes vos règles définies.

{% include image.html url="/assets/img/composer-rule-ruleindex1.jpg" description="Rule Index - Card View" %}

Cliquez sur le bouton « Create » pour accéder à la page « Create Rule ».

### A. Créer un nom et une description

Le reste de ce guide parcourt la page Rules et décrit les différentes fonctions présentes sur cet écran.

L'image ci-dessous indique où l'utilisateur peut saisir le nom et la description de la règle qu'il crée.

{% include image.html url="/assets/img/composer-rule-rulesection1.jpg" description="Rule Section - Labels" %}

Cela attribue un libellé et une description à la règle.

### B. Identification de l'enregistrement

L'image ci-dessous indique où l'utilisateur détermine le Record Type auquel la règle s'applique.

{% include image.html url="/assets/img/composer-rule-rulesection2.jpg" description="Rule Section - Record Identification" %}

La règle autorisera certains utilisateurs à accéder au record type saisi ici.

### C. Opérations

L'image ci-dessous indique où l'utilisateur détermine les opérations activées par la règle :

{% include image.html url="/assets/img/composer-rule-rulesection3.jpg" description="Rule Section - Operations" %}

La règle autorisera certains utilisateurs à exécuter les opérations choisies ici.

### D. Contexte du propriétaire

L'image ci-dessous indique où l'utilisateur détermine qui possède la règle.

{% include image.html url="/assets/img/composer-rule-rulesection4-1.jpg" description="Rule Section - Owner Context" %}

La règle peut appartenir à des utilisateurs spécifiques ou à une organisation. Il y a trois menus déroulants ici :

1. **User** - Défini sur le compte de l'utilisateur qui crée actuellement la règle.
2. **Orgnization** - Défini sur l'organisation de l'utilisateur qui crée actuellement la règle.
3. **APIKey/AppId** - Peut être défini sur « All (*) » pour que toutes les APIKeys associées à l'utilisateur possèdent la règle, ou sur « Specific Value » pour qu'une APIKey spécifique possède la règle.

### E. Contexte du demandeur

L'image ci-dessous indique à qui la règle s'applique :

{% include image.html url="/assets/img/composer-rule-rulesection5.jpg" description="Rule Section - Requestor Context" %}

Le menu déroulant **User** propose trois options :

**1.** All (*) - La règle s'appliquera à tous les utilisateurs

**2.** Exact Match to Owner (=) - La règle s'appliquera uniquement au propriétaire de la règle

**3.** Specific Value - La règle s'appliquera uniquement aux comptes saisis ici

<br>
Le menu déroulant **Organization** propose quatre options : (dans l'exemple, le domaine de mon organisation est « io.myOrg.test »)

**1.** All (*) - La règle s'appliquera à toutes les organisations. Toute organisation y aura accès.

**2.** Exact Match to Owner (=) - La règle s'appliquera uniquement à l'organisation du propriétaire de la règle. Ainsi, si « io.myOrg.test » partage, seules les personnes de « io.myOrg.test » pourront accéder aux éléments.

**3.** Ancestor Organization (~) - La règle s'appliquera à l'organisation ancêtre. Si « io.myOrg.test » partage, toute personne de « io.myOrg.test » peut accéder aux éléments, ainsi que toute personne de l'organisation supérieure ; les personnes de « io.myOrg » peuvent donc accéder aux données.

**4.** Shared Ancestor Organization (&) - Cette règle étend la précédente à d'autres organisations partagées. Cela signifie que si « io.myOrg.test » partage, toute personne de « io.myOrg.test » peut accéder aux éléments, ainsi que toute personne de l'organisation liée ; les personnes de « io.myOrg » peuvent accéder aux données, mais aussi « io.myOrg.dev », une organisation qui partage la même organisation ancêtre.

**5.** Specific Value - La règle s'appliquera uniquement à l'organisation saisie ici.


<br>
Le menu déroulant **APIKey/AppId** propose trois options :

**1.** All (*) - La règle s'appliquera à toutes les APIKeys.

**2.** Exact Math to Owner (=) - La règle s'appliquera uniquement en conjonction avec une clé API appartenant au propriétaire de la règle.

**3.** Specific Value - La règle s'appliquera uniquement à une APIKey saisie ici.

Le menu déroulant **Role** propose trois options :

**1.** All (*) - La règle s'appliquera à tous les rôles.

**2.** Exact Match to Owner (=) - La règle s'appliquera au même rôle que le propriétaire.

**3.** Specific Value - La règle s'appliquera uniquement au rôle saisi ici.

Le menu déroulant **Location** propose deux options :

**1.** All (*) - La règle s'appliquera à tous les rôles.

**2.** Ring-fence Polygon - Ici, un utilisateur peut définir une zone géographique dans laquelle une règle s'appliquera à un utilisateur.

<br>

## 3. Simulation d'une règle
---------------------------------------

La simulation de règle est un bon moyen d'explorer l'impact de différents paramètres sur les résultats d'octroi d'opérations.

Lorsque vous modifiez une règle dans la Composer Console, vous verrez un panneau en bas du formulaire de règle intitulé « Rule Simulation ». L'interaction avec ce panneau ne modifiera pas le contenu de votre règle ; n'hésitez donc pas à expérimenter pour comprendre le fonctionnement de l'outil.

{% include image.html url="/assets/img/composer-rule-rulesimulation1.jpg" description="Rule Simulation Panel" %}

Pour commencer, remplissez la première ligne avec les détails d'un demandeur simulé, y compris l'adresse e-mail, l'identité organisationnelle attendue et le rôle. L'e-mail est le seul champ obligatoire.

Pour ajouter d'autres lignes à votre simulation, cliquez sur le bouton « ADD ». Pour supprimer une ligne, cliquez sur le bouton « X » à côté de la ligne à supprimer.

{% include image.html url="/assets/img/composer-rule-rulesimulation2-1.jpg" description="Rule Simulation Panel" %}

Cliquez sur le bouton « TEST » à tout moment pour voir une simulation de ce que votre règle accorderait pour chaque demandeur de votre liste.

Une fois l'outil utilisé, vos entrées seront enregistrées dans votre enregistrement de préférences utilisateur. Si vous souhaitez récupérer le dernier jeu d'entrées, cliquez sur le lien « Load data from your previous test ». Vous pouvez toujours modifier les entrées.

{% include image.html url="/assets/img/composer-rule-rulesimulation3-1.jpg" description="Rule Simulation Panel" %}

Le résultat du test sera un tableau de vérité montrant le propriétaire (vous) et le demandeur (de votre liste), ainsi que les résultats pour chaque opération régie par la règle. Le tableau de vérité n'affiche que les résultats de la règle actuelle et ne tient pas compte des autres règles qui pourraient être actives dans le système.

Vous pouvez modifier les termes de votre règle et relancer votre simulation à tout moment. L'outil mettra en évidence les différences entre chaque simulation ultérieure pour vous aider à suivre l'impact des modifications apportées aux termes de la règle. Les résultats modifiés apparaîtront en texte rouge.

{% include image.html url="/assets/img/composer-rule-rulesimulation4-1.jpg" description="Rule Simulation Panel" %}

## 4. Bonnes pratiques pour les règles de partage
---------------------------------------

<!--Link to Creating a guest app-->
Lorsque vous décidez de partager des données, il vaut toujours mieux en partager moins que plus. Vous pouvez toujours créer une autre règle qui accorde plus d'accès par la suite si nécessaire.

Définissez quelles parties de vos données sont essentielles et lesquelles sont strictement réservées à vos yeux. Partagez le strict minimum dont les autres ont besoin pour tirer des enseignements de vos capteurs et abstenez-vous de partager les données sensibles. Les données dans la zone grise dépendent de vous pour décider si vous accordez l'accès aux autres. Il peut être préférable de retenir les données de la zone grise et de les publier si plusieurs demandes d'accès suivent.

Si vous souhaitez créer et partager une application qui permet à une personne sans compte Microshare de consulter vos données, suivez le [guide de création d'une Guest App](/docs/2/fr/technical/microshare-platform/creating-guest-app-guide/).

