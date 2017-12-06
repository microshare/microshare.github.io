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
Rules can be created via our API or through the Rule editor in the Composer Console. To get the the Rule editor, click "MANAGE" in the upper navigation panel. A horizontal panel will appear on the left-side of the page. Select the "Rules" panel navigator on the left to see a view of all of your defined Rules. 

{% include image.html url="/assets/img/composer-rule-ruleindex1.jpg" description="Rule Index - Card View" %}

Click the "Create" button to navigate to the "Create Rule" page. 

### Create a name and description

The rest of this guide will work down the Rules page and describe the various functions found on this screen

The image below displays where the user can input the respective name and description of the rule they are making.

{% include image.html url="/assets/img/composer-rule-rulesection1.jpg" description="Rule Section - Labels" %}

This ascribes a label and description to the Rule

### Record Identification

The image below displays where the user will determine what Record Type the Rule applies to

{% include image.html url="/assets/img/composer-rule-rulesection2.jpg" description="Rule Section - Record Identification" %}

The Rule will allow select users to access the Record type input here

### Operations

The image below displays where the user will determine what Operations are enabled by the Rule

{% include image.html url="/assets/img/composer-rule-rulesection3.jpg" description="Rule Section - Operations" %}

The Rule will allow select users to execute the Operations chosen here

### Owner Context

The image below displays where the user will determine who owns the Rule

{% include image.html url="/assets/img/composer-rule-rulesection4.jpg" description="Rule Section - Owner Context" %}

The rule can be owned by a specific users or to an organization. There are three dropdowns here:

1. **User** - Set to the account of the user currently making the Rule
2. **Orgnization** - Set to the organization of the user currently making the Rule
3. **APIKey/AppId** - Can be set to "All (*)" to let all APIKeys associated with the user to own the Rule or "Specific Value" to allow a specific APIKey to own the Rule

### Requestor Context

The image below displays where the user will determine whom the Rule applies to 

{% include image.html url="/assets/img/composer-rule-rulesection5.jpg" description="Rule Section - Requestor Context" %}

The **User** dropdown has three options:

1. All (*) - This will make the Rule apply to all users
2. Exact Match to Owner (=) - This will make the Rule apply only to the owner of the Rule
3. Specific Value - This will make the rule apply only to accounts entered here

The **Organization** dropdown has four options:

1. All (*) - This will make the Rule apply to all organizations
2. Shared Ancestor Organization (&) - This will make the Rule apply to the Shared Ancestor Organization
3. Ancestor Organization (~) - This will make the Rule apply to the Ancestor Organization
4. Exact Match to Owner (=) - This will make the Rule only apply to the organization of the owner of the Rule
5. Specific Value - This will make the rule apply only to the organization entered here

The **APIKey/AppId** dropdown has three options:

1. All (*) - This will make the Rule apply to all APIKeys 
2. Exact Math to Owner (=) - This will make the Rule only apply in conjunction with an API key belonging to the owner of the Rule
3. Specific Value - This will make the rule apply only to an APIKey entered here

The **Role** dropdown has three options:

1. All (*) - This will make the Rule apply to all Roles
2. Exact Match to Owner (=) - This will make the Rule apply to the same Role as the Owner
3. Specific Value - This will make the Rule apply only to the Role entered here 

The **Location** dropdown has two options:

1. All (*) - This will make the Rule apply to all Roles
2. Ring-fence Polygon - Here a user can set a geographical area in which a Rule will apply to a user

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