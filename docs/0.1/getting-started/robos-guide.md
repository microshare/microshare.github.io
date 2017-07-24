---
layout: docs
title: Robos Guide
description: Comprehensive guide to understand robos
group: getting-started
toc: true
---

# What are robos?
Pipeline/workflow agents for incoming data.  
They run parallel to the data lake: listen to the data lake, write to the data lake.  
Best practice: several robos chaining their recTypes, one for each action, that is your data pipeline.  
<Example plus drawing here>  
Each step is saved in the data lake, and reusable later. No such thing as too much data with microshare.  
To use with rules.  
Your biggest issue building a pipeline will be to choose the recTypes.  

# What can I do with them?
1. Data ingestion
Listening and pulling incoming data.  
2. Data parsing
3. Data transformation
4. Data formatting (caching for dashboards)
5. External services triggers
Ultimately, they write data in the lake. 

# How do they work?
Behind the scene each robo is an Akka Agent loaded with an ECMAScript 6 compatible script.  
Our Java Service leverages the Oracle Nashorn JavaScript engine to compile the ES6 scripts.
