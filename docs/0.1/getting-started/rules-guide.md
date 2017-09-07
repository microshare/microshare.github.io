---
layout: docs
title: Rules Guide
description: Comprehensive guide to understand rules
group: getting-started
toc: true
---

## What's a rule? 

## How do I use them?

## What can I do with them?

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