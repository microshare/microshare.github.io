---
layout: docs
title: Rules Guide
description: Comprehensive guide to understand rules
group: getting-started
toc: true
---

## What is a Rule? 

A Rule is a concrete expression of a sharing policy. It allows a data Owner to set the conditions in which a requested Operation will be Granted. Rules only allow sharing. Rules do not prevent sharing. Sharing is blocked by default.

## Creating a Rule
Rules can be created via API or through the Rule editor in the Composer Console. To get the the Rule editor, click "MANAGE" in the upper navigation panel. A horizontal panel will appear on the left-side of the page. Select the "Rules" panel navigator on the left to see a view of all of your defined Rules. 

{% include image.html url="/assets/img/composer-rule-ruleindex1.jpg" description="Rule Index - Card View" %}

Click the "Create" button to create a new Rule for your owned data. 

### Labels

{% include image.html url="/assets/img/composer-rule-rulesection1.jpg" description="Rule Section - Labels" %}

### Record Identification

{% include image.html url="/assets/img/composer-rule-rulesection2.jpg" description="Rule Section - Record Identification" %}

### Operations

{% include image.html url="/assets/img/composer-rule-rulesection3.jpg" description="Rule Section - Operations" %}

### Owner Context

{% include image.html url="/assets/img/composer-rule-rulesection4.jpg" description="Rule Section - Owner Context" %}

### Requestor Context

{% include image.html url="/assets/img/composer-rule-rulesection5.jpg" description="Rule Section - Requestor Context" %}

## What can I do with them?

You can share your data with other people and control the access of that data by other people using the Rules. Rules allow you to share your data with specific people or a group of people.

You can provide other people specific rights to your data, for example, only read access to your data, or read & write access to your data, etc.

## How do they work?

## Simulating a Rule

Rule Simulation is a good way to explore the impact of different settings on Operation Grant outcomes.

When you are editing a Rule in the Composer Console, you will see a panel at the bottom of the Rule form labelled "Rule Simulation". Interacting with this panel will not change the content of your Rule so feel free to play-around to get the feel of how the tool works.

{% include image.html url="/assets/img/composer-rule-rulesimulation1.jpg" description="Rule Simulation Panel" %}

To start fill-in the first row with the details for a simulated Requestor including email address, expected organizational identity, and role. Email is the only required field.

To add more rows to your simulation, click the "ADD" button. To remove a row, click the "X" button next to the row that you wish to remove.

{% include image.html url="/assets/img/composer-rule-rulesimulation2.jpg" description="Rule Simulation Panel" %}

Click on the "TEST" button at any time to see a simulation of what your Rule would grant for each of the Requestors in your list.

Once you have used the tool, your entries will be saved in your user preferences record. If you want to retrieve the last set of entries, click the link labeled "Load data from your previous test". You can always edit the entries.

{% include image.html url="/assets/img/composer-rule-rulesimulation3.jpg" description="Rule Simulation Panel" %}

The result of the test will be a truth table showing the Owner (you) and Requestor (from your list) and the results for each Operation governed by the Rule. The truth table only shows the results of the current Rule and does not take into account other Rules that may be active in the system.

You can change the terms of your Rule and rerun your Simulation at any time. The tool will highlight difference between each subsequent simulation to help you track the impact of changes you are making to the Rule terms. Changed outcomes will be in Red text.

{% include image.html url="/assets/img/composer-rule-rulesimulation4.jpg" description="Rule Simulation Panel" %}

Running the simulation does not affect the system in any way. So feel free to run it as often as you would like. 