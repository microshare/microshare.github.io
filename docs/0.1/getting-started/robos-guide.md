---
layout: docs
title: Robos Guide
description: Comprehensive guide to understand robos
group: getting-started
toc: true
---

## What's a robo?
A robo is a piece of your automatic pipeline that transforms, improves and creates new [microshares™](/microshares-guide) from your data. A chain of robos is capable of preparing your data to be easily consumed in [Dashboards](/dashboards) and Applications.   
Robos run in parallel to the data lake by reacting to new microshares being created, and being able to read and write them in your behalf.  

//TODO drawing of an example of robos communicating with the data lake

Each step of your data pipeline will and should create new data in the lake. Embrace it, there is no such thing as too much data with microshare.io. This builds multiple access points to your Dahsboards and Applications, as well as an automated audit trail.    

## What can I do with them?
1. Data ingestion
Listening and pulling incoming data.  
2. Data parsing
3. Data transformation
4. Data formatting (caching for dashboards)
5. External services triggers
Ultimately, they write data in the lake. 

## How do I use them?
### Accessing the UI
server, composer, robos, create, update

### Basic code (main function and import)

### Triggered vs scheduled

### Testing
Important: the write doesn't really happen in a test so don't worry about polluting your data


## How do they work?
Behind the scene, each robo is an Akka Agent loaded with its ECMAScript 6 compatible script.  
Our Java Stream-Service is able to set up, start, and stop Agents; and leverages the Oracle Nashorn JavaScript engine to compile the ES6 scripts.  
The Java libraries accessed by the robos point to to the adequate Service to read and write in the data lake.  


LINK TABLE ?