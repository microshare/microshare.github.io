---
layout: docs
title: React-M User Guide
description: Get started with React-M™, the world's only data-triggered Incident management system.
toc: true
---

---------------------------------------

{% include image.html url="/assets/img/banner-2.jpg"  description="ms logo" %}

##### SUMMARY : 

1. [Introduction](./#introduction)


2. [Log in to React-M](./#log-in-to-react-m)


3. [Select Roster](./#select-roster)


4. [Task Actions](./#task-actions)


5. [Log Out](./#log-out)


6. [Appendix]

    A. [Change Language](./#change-language)

    B. [Account Setup](./#account-setup)
---------------------------------------

If you have any questions that are unanswered in this documentation, contact `jbardin@microshare.io`.


## Introduction
---------------------------------------

Microshare provides Data Strategy as a Service, enabling our clients to quickly capture previously hidden data insights that produce cost savings, sustainability metrics and business opportunities. Our solutions produce data on Day One, installed at scale quickly by non-technical staff and operate separate from sensitive corporate IT networks. Our solutions create a Digital Twin of your physical assets, providing comprehensive picture of their performance, the risks they face going forward, and the steps required to produce maximum returns from these assets.

React-M is a tool created by Microshare to bring reactivity to your team. Move from data analysis to action. From the data collected through your Microshare solution (feedback, motion, environment...) you can set up triggers and alerts to set up actions. 

You can definitely create email/text message notifications, but we created React-M for better management of TODOs. In one location you get all your TODOs, and you can claim and act on them. You know the **locations and requirements, you know what to do and when**. 

Through this User Guide, we will drive you through how to get the app working and how to use it. 

Want to learn more about Microshare solutions, check out our website at [microshare.io.](https://www.microshare.io/)


## Log in to React-m
---------------------------------------

1. First, download the app, from the respective store depending on your device operating system:
	iOS: [APPLE STORE](https://apps.apple.com/lk/app/react-m/id1600368531?platform=iphone)
	Android: [GOOGLE PLAY STORE](https://play.google.com/store/apps/details?id=io.microshare.reactm&pli=1)
	
	{% include image.html url="/assets/img/react-m/ReactMDemo.png"  description="react-m app store" %}
	
2. Locate the app on your phone and open it:
	{% include image.html url="/assets/img/react-m/LocateApp.png"  description="Locate App" %}
	
3. Type in your credentials and click login:
	{% include image.html url="/assets/img/react-m/Login.png"  description="Login Page" %}

4. Once you login, you will get a prompt asking you to save your credentials. 
	If you want to save your credentials locally, click yes.
	
	{% include image.html url="/assets/img/react-m/StoreCreds.png"  description="Store Credentials" %}
	
	If you click yes, your credentials are stored on your device, securely. When you are logged out and you want to log back in, you can skip the step of typing your username and password and log back in with a single click.
	
	{% include image.html url="/assets/img/react-m/SavedCreds.png"  description="Saved Creds" %}
	
	When you log in with your saved credentials, you will get a prompt to log in with your device's local authentication method. (for ex. Face ID, Fingerpring, PIN, Password, etc.)

5. Once you log in, you will see the Incidents list section.
	{% include image.html url="/assets/img/react-m/home.png"  description="home" %}

## Select Roster

A Roster is a Shared list of locations that stores all the Incidents related to these locations. By signing up to a Roster, you can see and resolve only the Incidents associated to the locations in the roster.

1. In the app, go to the “About” section:
	{% include image.html url="/assets/img/react-m/ListToAbout.png"  description="List Section to About Section" %}

2. In the about section, click the “Select Roster” button.
	{% include image.html url="/assets/img/react-m/About.png"  description="About" %}

3. Then, select the desired roster by scrolling down or searching for the roster
	{% include image.html url="/assets/img/react-m/RosterList.png"  description="Roster List" %}
	
	Then, navigate back to the Incidents section to see the Incidents in that roster.

4. If there aren’t any Incidents in the roster, you will see this screen:
	{% include image.html url="/assets/img/react-m/NoIncidentsScreen.png"  description="No Incidents Screen" %}
	
	In this case, wait for the supervisor or the React-M system to assign some tasks to the roster you have selected. The tasks are refreshed every 30 seconds. You can also click “Reload” to manually check for any new tasks.

5. Finally, if there are some tasks assigned to the roster, this is how they will look:
	{% include image.html url="/assets/img/react-m/IncidentList.png"  description="Incidents List" %}
	
	Notice that these tasks are “Not assigned”. This means that they are assigned to the roster and are ready to be claimed by you.

6. If a task is assigned to you specifically (for instance when a supervisor assigns a task to your account), then it will look like this:
	{% include image.html url="/assets/img/react-m/AssignedIncident.png"  description="Assigned Incident List" %}

## Task Actions

1. In the task list, click on an Incident to see more details about it
	{% include image.html url="/assets/img/react-m/IncidentDetails.png"  description="Incident Details" %}
	
	You will see a list of tasks to complete in this incident. If you are ready to start this incident, click start

2. Once you click start, you are navigated back to the incident list screen. Wait for the incident to load.
	{% include image.html url="/assets/img/react-m/LoadingIncident.png"  description="Incident Loading" %}

3. Once the task is loaded, you will see the task state to be “In Progress”:
	{% include image.html url="/assets/img/react-m/IncidentInProgress.png"  description="Incident in Progress" %}

4. Finally, when you perform all the tasks mentioned in the incident and are finished with the incident, click on the incident and click the complete button:
	{% include image.html url="/assets/img/react-m/IncidentComplete.png"  description="Incident Complete" %}

5. You are navigated to a question section. Answer all the questions that follow. (Note. These questions are configured by the supervisor.)
	{% include image.html url="/assets/img/react-m/QuestionScreen.png"  description="Incident in Progress" %}
	Once you answer all the questions, you are navigated back to the Incidents section where you will find the rest of the incidents (either assigned to the roster or assigned to you).

## Log Out
Once you are done with incidents assigned to the roster or to you, go to the about section first and select “No Roster” so you won’t receive notifications or incidents later. This also allows your supervisor to know that you are no longer occupying the Roster. Then log out of the app and close it.

1. Go to the about section and click the “Change Roster” button.
	{% include image.html url="/assets/img/react-m/ChangeRoster.png"  description="Change Roster" %}

2. Then, Select the “No Roster” option at the very top of the scroll list.
	{% include image.html url="/assets/img/react-m/NoRoster.png"  description="No Roster" %}

3. Then, go back to the Incidents section and log out by clicking the log out button at the top of the Incidents Section:
	{% include image.html url="/assets/img/react-m/LogOut.png"  description="Log Out" %}

4. You will get a log out confirmation dialogue box. Select logout to log out of the app.
	{% include image.html url="/assets/img/react-m/LogOutConfirmation.png"  description="Log out confirmation" %}

## Appendix
#### a) Change Language

To Change the Language of the app, go to the About Section and click the drop-down menu for select language:
	{% include image.html url="/assets/img/react-m/ChangeLanguage.png"  description="Change Language" %}

Then, select one of the supported languages that you want. Currently, React-M supports English, German and French.
	{% include image.html url="/assets/img/react-m/LanguageList.png"  description="Language List" %}

### b) Account Setup

1. When your supervisor registers your email-id to the organisation, you will get a welcome email from microshare.
2. Find and open the “Welcome to Microshare” email.
3. Click on the “Microshare User Account Activation” Link
	{% include image.html url="/assets/img/react-m/WelcomeEmail.png"  description="Welcome Email" %}
	If the link has expired, Check with your supervisor
4. Enter your user details and choose a secure password. Then click “Finalize Account”
	{% include image.html url="/assets/img/react-m/UserDetails.jpg"  description="User Details" %}
	Your account has been setup and now you are ready to start using React-M









 
