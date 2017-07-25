---
layout: docs
title: Data Ingestion
description: Guide to Data Ingestion
group: getting-started
toc: true
---

## To aggregate your data from different sources
Microshare.io is here to help you aggregate and use your data from several sources, especially IoT platforms.  
Below are several way to move your data to the microshare.io data lake. Find your usage.  

## Upload data manually
For data in your own Database, or from a open data project.
Upload your data manually by using a POST /share call.  
No bulk upload yet.  

## Set up a websocket Robo
For [Orange Live Objects](https://liveobjects.orange-business.com/), [The Things Network](https://console.thethingsnetwork.org/), or a Sagemcom private gateway.  
You can't do it yourself quite just yet, but you'll be able to have a robo listening to a websocket and save the data to a share for you.  
This is the config:  
<the config>  
<WHAT ABOUT MQTT. Works the same way?>

## Set up a scheduled Robo to pull data
For [Orange Live Objects](https://liveobjects.orange-business.com/), [Bouygues Telecom Objenious](https://spot.objenious.com/login), [Sierra AirVantage](https://airvantage.net/#offers), or [Cumulocity](https://www.cumulocity.com/).  
You can't do that yet either, but you'll be able to have a robo trigger on a regular basis (every x seconds/minutes/days). Use that to read your data in a REST platform from a GET call.  
You'll have to parse the result and save it to a share in the robo too.  
This is the config:  
<the config>  

## Set up your platform to post the data
For [Actility ThingsPark](https://partners.thingpark.com/en/dashboard) or a Kerlink private gateway.
Some platforms an be configured to POST data. Configure them to do a POST /share/<recType> call.  

## What's next?
Once your data is loaded in the data lake, you'll want to get it ready to be used in Dashboards and Applications. Build your multisteps worflow with a [data-pipeline](/data-pipelines) to parse, transform and format your data automatically.  