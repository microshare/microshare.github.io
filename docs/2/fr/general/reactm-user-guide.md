---
layout: docs
title: Guide utilisateur React-M
description: Démarrez avec React-M™, le seul système de gestion d'incidents déclenché par les données au monde.
lang: fr
translation_of: docs/2/general/reactm-user-guide.md
translations:
  en: /docs/2/general/reactm-user-guide
  fr: /docs/2/fr/general/reactm-user-guide
toc: true
---

---------------------------------------

{% include image.html url="/assets/img/banner-2.jpg"  description="logo ms" %}

##### SOMMAIRE :

1. [Introduction](./#introduction)


2. [Se connecter à React-M](./#se-connecter-a-react-m)


3. [Sélectionner un roster](./#selectionner-un-roster)


4. [Actions sur les tâches](./#actions-sur-les-taches)


5. [Se déconnecter](./#se-deconnecter)


6. [Annexe]

    A. [Changer de langue](./#changer-de-langue)

    B. [Configuration du compte](./#configuration-du-compte)
---------------------------------------

Si vous avez des questions auxquelles cette documentation ne répond pas, contactez `jbardin@microshare.io`.


## Introduction
---------------------------------------

Microshare fournit une stratégie de données en tant que service, permettant à nos clients de capturer rapidement des informations jusque-là cachées, qui génèrent des économies de coûts, des indicateurs de durabilité et des opportunités commerciales. Nos solutions produisent des données dès le premier jour, installées à grande échelle rapidement par du personnel non technique et fonctionnent indépendamment des réseaux informatiques sensibles des entreprises. Nos solutions créent un jumeau numérique de vos actifs physiques, offrant une vue complète de leurs performances, des risques auxquels ils sont confrontés et des mesures nécessaires pour en tirer le meilleur rendement.

React-M est un outil créé par Microshare pour collecter des données provenant de capteurs et de sources externes et créer des incidents survenant dans votre organisation que vous pouvez gérer, suivre et traiter.

React-M a été développé pour la gestion des incidents, en remplacement des systèmes de notification par e-mail traditionnels. Les utilisateurs peuvent accéder à tous les incidents qui leur sont assignés en un seul endroit, les réclamer et agir dessus. Cette application rationalise la communication entre les superviseurs et les techniciens et permet un suivi et une gestion plus fluides des incidents.

Ce guide utilisateur vous accompagne dans les étapes pour faire fonctionner l'application et en tirer le meilleur parti.

Vous souhaitez en savoir plus sur les solutions Microshare ? Consultez notre site sur [microshare.io.](https://www.microshare.io/)


## Se connecter à React-M
---------------------------------------

1. Tout d'abord, téléchargez l'application depuis le store correspondant à votre système d'exploitation :
	iOS : [APPLE STORE](https://apps.apple.com/lk/app/react-m/id1600368531?platform=iphone)
	Android : [GOOGLE PLAY STORE](https://play.google.com/store/apps/details?id=io.microshare.reactm&pli=1)
	
	{% include image.html url="/assets/img/react-m/ReactMDemo.png" height="500" description="react-m app store" %}
	
2. Localisez l'application sur votre téléphone et ouvrez-la :
   
	{% include image.html url="/assets/img/react-m/LocateApp.png" height="500"  description="Localiser l'application" %}
	
3. Saisissez vos identifiants et cliquez sur login :

	{% include image.html url="/assets/img/react-m/Login.png" height="500"  description="Page de connexion" %}

4. Une fois connecté, une invite vous demandera d'enregistrer vos identifiants.
	Si vous souhaitez les enregistrer localement, cliquez sur yes.
	
	{% include image.html url="/assets/img/react-m/StoreCreds.png" height="500"  description="Enregistrer les identifiants" %}
	
	Si vous cliquez sur yes, vos identifiants sont stockés de manière sécurisée sur votre appareil. Lorsque vous vous déconnectez et souhaitez vous reconnecter, vous pouvez éviter de resaisir votre nom d'utilisateur et votre mot de passe et vous reconnecter en un clic.
	
	{% include image.html url="/assets/img/react-m/SavedCreds.png" height="500"  description="Identifiants enregistrés" %}
	
	Lorsque vous vous connectez avec vos identifiants enregistrés, une invite vous demandera de vous authentifier avec la méthode locale de votre appareil (par ex. Face ID, empreinte digitale, code PIN, mot de passe, etc.).

5. Une fois connecté, vous verrez la section liste des incidents.

   
	{% include image.html url="/assets/img/react-m/home.png" height="500"  description="accueil" %}

## Sélectionner un roster

Un roster est une liste partagée d'emplacements qui regroupe tous les incidents liés à ces emplacements. En vous inscrivant à un roster, vous pouvez voir et résoudre uniquement les incidents associés aux emplacements de ce roster.

1. Dans l'application, accédez à la section « About » :


	{% include image.html url="/assets/img/react-m/ListToAbout.png" height="500"  description="De la liste vers About" %}

2. Dans la section About, cliquez sur le bouton « Select Roster ».


	{% include image.html url="/assets/img/react-m/About.png" height="500"  description="About" %}

3. Sélectionnez ensuite le roster souhaité en faisant défiler ou en le recherchant


	{% include image.html url="/assets/img/react-m/RosterList.png" height="500"  description="Liste des rosters" %}
	
	Revenez ensuite à la section Incidents pour voir les incidents de ce roster.

4. S'il n'y a aucun incident dans le roster, vous verrez cet écran :


	{% include image.html url="/assets/img/react-m/NoIncidentsScreen.png" height="500"  description="Écran sans incident" %}
	
	Dans ce cas, attendez que le superviseur ou le système React-M assigne des tâches au roster sélectionné. Les tâches sont actualisées toutes les 30 secondes. Vous pouvez aussi cliquer sur « Reload » pour vérifier manuellement les nouvelles tâches.

5. Enfin, si des tâches sont assignées au roster, voici à quoi elles ressemblent :


	{% include image.html url="/assets/img/react-m/IncidentList.png" height="500"  description="Liste des incidents" %}
	
	Notez que ces tâches sont « Not assigned ». Cela signifie qu'elles sont assignées au roster et prêtes à être réclamées par vous.

6. Si une tâche vous est assignée spécifiquement (par exemple lorsqu'un superviseur vous l'attribue), elle apparaîtra ainsi :


	{% include image.html url="/assets/img/react-m/AssignedIncident.png" height="500"   description="Incident assigné" %}

## Actions sur les tâches

1. Dans la liste des tâches, cliquez sur un incident pour voir plus de détails


	{% include image.html url="/assets/img/react-m/IncidentDetails.png" height="500"  description="Détails de l'incident" %}
	
	Vous verrez une liste de tâches à accomplir dans cet incident. Si vous êtes prêt à commencer, cliquez sur start

2. Une fois que vous cliquez sur start, vous revenez à l'écran de liste des incidents. Attendez que l'incident se charge.


	{% include image.html url="/assets/img/react-m/LoadingIncident.png" height="500"  description="Chargement de l'incident" %}

3. Une fois la tâche chargée, son état sera « In Progress » :


	{% include image.html url="/assets/img/react-m/IncidentInProgress.png" height="500"  description="Incident en cours" %}

4. Enfin, lorsque vous avez effectué toutes les tâches de l'incident et que vous avez terminé, cliquez sur l'incident puis sur le bouton complete :
	{% include image.html url="/assets/img/react-m/IncidentComplete.png" height="500"  description="Incident terminé" %}

5. Vous accédez à une section de questions. Répondez à toutes les questions qui suivent. (Note : ces questions sont configurées par le superviseur.)


	{% include image.html url="/assets/img/react-m/QuestionScreen.png" height="500"  description="Incident en cours" %}


	Une fois toutes les questions répondues, vous revenez à la section Incidents où vous trouverez les autres incidents (assignés au roster ou à vous).

## Se déconnecter
Une fois les incidents du roster ou ceux qui vous sont assignés terminés, accédez d'abord à la section About et sélectionnez « No Roster » pour ne plus recevoir de notifications ou d'incidents par la suite. Cela permet aussi à votre superviseur de savoir que vous n'occupez plus le roster. Déconnectez-vous ensuite de l'application et fermez-la.

1. Accédez à la section About et cliquez sur le bouton « Change Roster ».


	{% include image.html url="/assets/img/react-m/ChangeRoster.png" height="500"  description="Changer de roster" %}

2. Sélectionnez ensuite l'option « No Roster » tout en haut de la liste.


	{% include image.html url="/assets/img/react-m/NoRoster.png" height="500"  description="Aucun roster" %}

3. Revenez à la section Incidents et déconnectez-vous en cliquant sur le bouton log out en haut de la section Incidents :


	{% include image.html url="/assets/img/react-m/LogOut.png" height="500"  description="Déconnexion" %}

4. Une boîte de dialogue de confirmation s'affiche. Sélectionnez logout pour quitter l'application.


	{% include image.html url="/assets/img/react-m/LogOutConfirmation.png" height="500"  description="Confirmation de déconnexion" %}

## Annexe
#### a) Changer de langue


Pour changer la langue de l'application, accédez à la section About et cliquez sur le menu déroulant select language :


	{% include image.html url="/assets/img/react-m/ChangeLanguage.png" height="500"  description="Changer de langue" %}

Sélectionnez ensuite l'une des langues prises en charge. Actuellement, React-M prend en charge l'anglais, l'allemand et le français.

	{% include image.html url="/assets/img/react-m/LanguageList.png" height="500"  description="Liste des langues" %}

### b) Configuration du compte

1. Lorsque votre superviseur enregistre votre adresse e-mail dans l'organisation, vous recevrez un e-mail de bienvenue de Microshare.
2. Trouvez et ouvrez l'e-mail « Welcome to Microshare ».
3. Cliquez sur le lien « Microshare User Account Activation »


	{% include image.html url="/assets/img/react-m/WelcomeEmail.png" height="500"  description="E-mail de bienvenue" %}


	Si le lien a expiré, contactez votre superviseur
4. Saisissez vos informations utilisateur et choisissez un mot de passe sécurisé. Cliquez ensuite sur « Finalize Account »


	{% include image.html url="/assets/img/react-m/UserDetails.jpg" height="500"  description="Détails utilisateur" %}


	Votre compte est configuré et vous pouvez maintenant commencer à utiliser React-M






 
