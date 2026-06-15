---
layout: docs
title: Gestion des utilisateurs
description: Gérer les utilisateurs dans une identité Microshare
lang: fr
translation_of: docs/2/admin/admin-management/user-management.md
translations:
  en: /docs/2/admin/admin-management/user-management
  fr: /docs/2/fr/admin/admin-management/user-management
redirect_from:
  - /docs/2/fr/admin/admin-management/
toc: true
---

---------------------------------------

{% include image.html url="\assets\img\banner-2.jpg"  description="logo ms" %}

##### SOMMAIRE :

1. [Supprimer des utilisateurs existants](./#supprimer-des-utilisateurs-existants)
2. [Désactiver/activer des comptes utilisateur existants](./#desactiveractiver-des-comptes-utilisateur-existants)
3. [Attribuer un rôle utilisateur](./#attribuer-un-role-utilisateur)
4. [Retirer un rôle utilisateur](./#retirer-un-role-utilisateur)

---------------------------------------

<br>


### Accorder l'accès client via Microshare à l'identité
---------------------------------------

Si vous êtes l'administrateur d'une identité, vous pourrez y ajouter des personnes. Pour mieux comprendre la gestion de l'accès pour d'autres comptes, consultez [Administrateur d'identité.](../../../../../identity-admin/)


### Supprimer des utilisateurs existants
---------------------------------------

Si vous êtes l'administrateur d'une identité, vous pourrez en retirer des personnes si nécessaire. Pour mieux comprendre les identités, consultez notre [guide d'identité.](../../../technical/microshare-platform-advanced/identity-guide/)

**1.** Pour gérer l'accès des utilisateurs, connectez-vous d'abord à Microshare.

<br>
**2.** Rendez-vous dans l'onglet Manage. Cliquez ensuite sur l'onglet Keys.

<br>
{% include image.html url="/assets/img/admin/identity_0.png" description="Bannière" %}

<br>
**3.** Passez ensuite à l'onglet Organization.

<br>
{% include image.html url="/assets/img/admin/identity_1.png" description="Bannière" %}

<br>
**4.** Si vous êtes l'administrateur d'une identité, le bouton users apparaîtra à côté de celle-ci. Comme indiqué ci-dessus, le compte est administrateur de `External Identity` et non de `Microshare Default`. Cliquez sur users à côté de l'identité dont vous souhaitez retirer un utilisateur.

<br>
**5.** Repérez l'utilisateur à retirer de l'identité dans la liste affichée. Cliquez sur le bouton Remove à droite de l'utilisateur concerné.

<br>
{% include image.html url="/assets/img/admin/identity_2.png" description="Bannière" %}

<br>
**6.** Répétez pour les autres utilisateurs si nécessaire.



### Désactiver/activer des comptes utilisateur existants
---------------------------------------

Si vous êtes l'administrateur d'une identité, vous pourrez désactiver ou activer des comptes utilisateur dans cette identité si nécessaire.

**1.** Suivez les étapes 1 à 4 de la section Supprimer des utilisateurs existants ci-dessus.

<br>
**2.** Repérez l'utilisateur à désactiver ou activer dans la liste affichée. Si un utilisateur est actuellement activé, un bouton Disable apparaît à côté de son nom. S'il est désactivé, un bouton Enable apparaît. Selon le cas, cliquez sur Disable ou Enable à droite de l'utilisateur concerné.

<br>
{% include image.html url="/assets/img/admin/Managing_Users_Enable_Disable1.jpg" description="Bannière" %}

<br>
**3.** Répétez pour les autres utilisateurs si nécessaire.



### Attribuer un rôle utilisateur
---------------------------------------

Si vous êtes l'administrateur d'une identité, vous pourrez attribuer des rôles aux utilisateurs de cette identité si nécessaire.

**1.** Suivez les étapes 1 à 4 de la section Supprimer des utilisateurs existants ci-dessus.

<br>
**2.** Repérez l'utilisateur auquel vous souhaitez attribuer un rôle. Dans la colonne Roles, saisissez le rôle souhaité dans la zone de texte, à côté de l'utilisateur concerné. Cliquez ensuite sur le bouton update situé juste en dessous.

<br>
{% include image.html url="/assets/img/admin/Managing_Users_Roles1.jpg" description="Bannière" %}

<br>
**Note :** Actuellement, la fonctionnalité Roles n'est pas largement utilisée pour les services Microshare. À l'avenir, cette fonctionnalité sera davantage exploitée.



### Retirer un rôle utilisateur
---------------------------------------

Si vous êtes l'administrateur d'une identité, vous pourrez retirer des rôles aux utilisateurs de cette identité si nécessaire.

**1.** Suivez les étapes 1 à 4 de la section Supprimer des utilisateurs existants ci-dessus.

<br>
**2.** Repérez l'utilisateur dont vous souhaitez retirer un rôle. Dans la colonne Roles, sélectionnez et supprimez le rôle présent dans la zone de texte, à côté de l'utilisateur concerné. Cliquez ensuite sur le bouton update situé juste en dessous.

<br>
{% include image.html url="/assets/img/admin/Managing_Users_Roles1.jpg" description="Bannière" %}
