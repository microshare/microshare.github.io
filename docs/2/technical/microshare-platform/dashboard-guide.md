---
layout: docs
title: Dashboard Guide
description: Understanding your Apps
toc: true
---



##### SUMMARY : 

1. [Types of Dashboards](./#1-types-of-dashboards)
2. [Prerequisites](./#2-prerequisites)
3. [Dashboard Configuration](./#3-dashboard-configuration)
4. [App Facts](./#4-app-facts)
5. [Configuring the Suite App](./#5-configuring-the-suite-app)
6. [Configuring the Touchfree feedback App](./#6-configuring-the-touchfree-app)
7. [Configuring other components of the Touchfree feedback App](./configuring-other-components-of-the-touchfree-feedback-app)
8. [How to create a guest app](../creating-guest-app-guide)




## 1. Types of Dashboards
---------------------------------------

There are two types of dashboards:
* Dashboards for your trending apps
* Dashboards for your realtime apps. 


Trending apps will graphically represent your data over any period you wish, while realtime apps display the data currently being collected. 



## 2. Prerequisites
---------------------------------------

 1. Configure the client accounts and identities and differentiate between which accounts will have the ability to own the apps or own the data. 
 2. Create a Push on the network.
 3. Create a [device cluster](./#2-dashboard-configuration) with all the necessary devices with the appropriate recType (e.g.  `io.microshare.motion.unpacked` ).


 **Create Rule If Needed**
 
 ---------------------------------------


 The views used by the generic applications are generic views created by Microshare® and hosted on the account **asset@microshare.io**. 

These views are normally already shared with all accounts and you can find more information about this in the [view guide](../view-guide).

If a new view is created for the dashboards it is necessary to follow the following steps:

 * Create [Rules](/docs/2/technical/microshare-platform/rules-guide/) to share the views to everyone through the **assets@microshare.io** account.  
 
 {% include image.html url="\assets\img\dashboard-guide-1.png" height="900" width="900" description="Dashboard Guide1" %}
 
 * Check ON Active, underlined in blue. 
 * Use the Record Type: io.microshare.fm.master.agg underlined in red.
 * Check ON Operations: Read, Query, and Execute underlined in green.
 

 
## 3. Dashboard Configuration
---------------------------------------

 
#### Create a New App with the configuration:
 
 {% include image.html url="\assets\img\dashboard-guide-2.png" height="900" width="900" description="Dashboard Guide 2" %}
 

 * `App Type`: Display
 * `Parent Tag(s)`: Leave Blank
 * `Style Choice`: Showcase
 * `Theme`: https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css 
 * `Include`: Leave Blank unless requested otherwise
 * `Facts to display`: None 
 * `Form to display`: For realtime apps, pick Realtime Form v2.5 and pick Trending Form v2.6 for trending apps 
 * `Facts`: See next section for specific details
 
 

## 4. App Facts
---------------------------------------

### Tips 

In order to make the best use of the facts, it is possible to modify their presentation in JSON code form. To do so, simply click on the tree button and choose code.

{% include image.html url="\assets\img\app-facts-tree.png" width="800" description="Factes Tree" %}

{% include image.html url="\assets\img\app-facts-code.png" width="800" description="Facts Code" %}


### Github Facts Apps


##### > [Comming Soon]()

<br>

### For all apps

Create a new fact by pressing the button above the green arrow and hitting apend. 

{% include image.html url="\assets\img\dashboard-guide-3.png" height="900" width="900" description="Dashboard Guide3" %}

* `appTitle`: Should match the name you provided as the app’s Name (above)
* `navOptions`: This credential should be completed last. Add the links and names of all apps in the client’s account to each app.json so that the client can navigate from one app to another
* `selectionOptions`: All apps require you to provide the client specific location options in the navOptions field. Use the databoard to generate the JSON in the correct format. Get a token for the account that owns the device cluster(s) and head over to [https://databoard.azurewebsites.net/dashboard/0](https://databoard.azurewebsites.net/dashboard/0). Choose Edit Workspace from the settings menu, then Add Monitor Widget for the relevant clusters, then Lock Workspace, then click on the device monitor to show the list view, then click Download JSON. 
* `dataRecType`: math the target recType of the device cluster
* `dataContext`: Use the meta tag you chose in the device cluster
* `queryId`, `queryId1`, `queryId2`, `queryId3`: it is recommended to leave the query settings the same as they are in the example json
* `footerLogo`, `headerLogo`, `header SecondaryLogo` and `get RecType`: leave untouched unless requested otherwise

### Realtime Apps
* `viewType`: Use the "desk","room" or "field" option for Realtime Desk Availability app, Realtime Room Availability app and Realtime Value app respectively.  
* For Realtime Value app only, the `fieldName` fact must match the field name from the unpacker and the `feildUnit` fact is appended to the value as part of the user display. Additionally, if you supplied a `minIdeal` fact, the values BELOW this value will be displayed in red, while if a `maxIdeal` fact is given, the values above will be displayed in red
* `covertTempToFarenheit`: set to true to convert the data from Celsius to Fahrenheit

### Trending Apps

#### 1. Optional Parameters:
* `location1`: title of location1 dropdown 
* `location2`: title of location2 dropdown 
* `location3`: title of location3 dropdown
* `startOfWorkDay` and `endOfWorkDay`: used to filter out data from outside the workday  OR to shade data from outside the workday.  It is not used in Trending Feedback
* `debug`: set to true to output debug messages to the consule
* `useWeekendColorBand`: shade the weekend on charts
* `colorOfThresholdBand`: shade the ideal range on charts
* `colorOfOffHoursBand`: shade the off-hours on charts

#### 2. Feedback Charts: 
* The `fieldName` determines what kind of chart will be displayed, must be set to "feedback"
* `buttons`: the label dact can be set to anything, set the hide fact to true for buttons that you do not need

#### 3. Trending Usage and Trending Access Usage (include only one chart):
* `fieldName`: must be "counter"
* `title`: Give a name for the chart
* `maxMin` and `minMax`: optional parameters which allow you to configure the min and max of the chart when no data is available

#### 4. Trending Desk Availability (Use only one chart):
* `fieldName`: must be "occupied"
* `title`: Give a name for the chart
* `maxMin` and `minMax`: optional parameters which allow you to configure the min and max of the chart when no data is available
* `columns`: can include any or all of the following: “Active Desks”, “Configured Desks”, “Reporting Desks”, “Average Reporting Desks”
* If “columns” parameter is NOT included, default columns are “Active Desks” and “Configured Desks” 
* If unrecognized column name is included, this is plotted as if it were “Active Desks” - this allows the fulfillment to customize the name of this line 

#### 5. Trending Refrigerator (can include up to two charts):
* `fieldName`: "internal temp" and/or "external temp"
* `convertTempToFahrenheit`: set to true to convert the data from Celsius to Fahrenheit
* `maxMin` and `minMax`: optional parameters which allow you to configure the min and max of the chart when no data is available

#### 6. Air Quality (up to six charts) and Environment (up to two charts):
* `fieldName` for Air Quality: temp, humidity, co2, voc, pressure and/or illuminance
* `fieldName` for Environment: temp and/ or humidity

## 5. Configuring the Suite App
---------------------------------------
A Suite App allows you to encapsulate multiple apps into a single interface that is more straightforward to configure and navigate than using the sandwich menu in the trending or realtime forms.  It’s easy to set up one or more suite apps that group "child" apps together. 
1. Create a new App:
{% include image.html url="\assets\img\dashboard-guide-4.png" height="900" width="900" description="Dashboard Guide 4" %}

* `App Type`: Suite
* `Name`: Enter the user- facing name for the new application
* `Parent Tag(s)`: (Optional) this allows suite app to itself be configured within another suite app
* `Child Tag`: Enter a unique tag that your suite app uses to select its child app, MUST match the parent tag(s) of the child apps
* `Style Choice`: showcase
* `Theme`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include`: Leave blank unless instructed otherwise
* `Icon`: Select the same as seein in the demo suite app in the assets account
* `Facts to Display`: None
* `Form to Display`: pick Suite icon form v2.5
* `footerLogo`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer.png)
* `headerLogo`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/header.png)
* `sortedApps`: (optional) a list of the app names. Should only be used if the sort order is not alphabetic

To Configure the Child Apps of the Suite App add the child tag in the suite tag to the parent tag(s) feild of the relevant app(s).



## 6. Configuring the Touchfree feedback App 
---------------------------------------
The Touchfree app creates business events tied to specific locations just like the Smilio Feedback solutions. 

### Create a Location Schema (or a Device template)

You will still need to plan out your tagging system even if you are creating a Touchfree app which is not tied to physical devices. If you already have a device template (ie a file already in the proprietary format used to create a device cluster in the Microshare® platform), you can start with that.  Create a spreadsheet with a header row that includes Location1, Location2, Location3, as well as a new DataContext column that describes your tagging system.  Note that you CAN use your existing device templates that can now me imported to create the device cluster in the Microshare® platform.  Let’s call this file, the location schema. 

 **Create a new App with the configurations:**
 
 {% include image.html url="\assets\img\dashboard-guide-5.png" height="900" width="900" description="Dashboard Guide 5" %}

* `App Type`: Display
* `Parent Tag(s)`: leave blank
* `Style Choice`: showcase
* `Theme`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include`: leave blank unless requested otherwise
* `Icon`: pick the same icon as seen in the demo suite app in the assets account 
* `Facts to Display`: None 
* `Form to Display`: pick Touchfree Feedback Form v2.6 

### Required Facts:
* the user facing title of the Touchfree Feedback App
* backboardRule: an array of rules.  When the touchfree feedback app opens, it searches the backboardRules to determine which backboard to display.  The first one that matches is the one it uses.  If it doesn’t find a backboardRule, the app displays an error. The simplest app can use a single backboard rule with only a backboardId in it.  Each rule in the array can include one or more of the following fields:

* `backboardId`: (required) the ID of the backboard for this rule 
* `loc1s`: (optional) loc1 must be included in this array in order for this backboard to be selected 
* `loc2s`: (optional) loc2 must be included in this array in order for this backboard to be selected 
* `loc3s`: (optional) loc3 must be included in this array in order for this backboard to be selected 
* `metaTags`: (optional) dataContext must be included in this array in order for this backboard to be selected 


### Optional Facts:
* `headerLogo`: image to display in the header  
* `footerLogo`: image to display in the footer 
* `headerSecondaryLogo`: secondary image to display in the header 
* `getRecType`: recType of query view used to retrieve summary of today’s submissions 
* `queryId`: query view used to retrieve summary of today’s submissions 
* `dataRecType`: recType for share records for events this app creates  
* `singleClick`: set to true to hide Submit button and submit the event as soon as the user selects an option

## 7. Configuring other components of the Touchfree feedback App 
---------------------------------------

### Backboard View
The backboard is configured as a Static JSON view in the Microshare platform.  Use the recType io.microshare.config.backboard for this view. 

Examples of the format of this view can be found in the Example Touchfree Configuration folder.  Description is as follows: 
* `id` - (UNUSED) you can put whatever you want here to remind you what/who this backboard is for.  The underlying system does not look at this field 
* `en` - represents the backboard for the English language.  Since English is the default language, all backboards MUST include an “en” field and can optionally include other languages as well

Under each 2-character language code, include the followinf REQUIRED subfeild
* `question`: the question to display at the top of the Touchfree App
* `buttons`: an array of the buttons to display
* `event`: a single word which is hte ID of the event
* `label`: a user-facing label for the button corresponding tot his event. Make sure this is consistent between the backboard and the Touchfree App
* `smilioEvent`: a key used to lookup which backboard event corresponds to a given Smilio event.  This is used in the Smilio robots, not Touchfree App

### Guest App
The target use case for the Touchfree app is for a visitor to a location to launch the Touchfree Feedback app by scanning a QR-code with their phone.  The end user will not have a Microshare® account.  To enable this to work: 

Follow the instructions “Instructions - Guest Access” to configure the Touchfree App as a guest app.   

You should now have a URL – let's call it the baseURL that can be used to launch your app.  But it does not operate properly as is.  If you navigate to this default URL, you will see warnings that the locations and/or dataContext and/or backboard are not defined.  You need to add URL parameters to the URL to make it work properly.  For example, you can navigate to the example Touchfree app in the assets account by using these URL: 
[https://dapp.microshare.io/guest/](https://dapp.microshare.io/guest/5e77ac483a0000df97452437?loc1=Haverhill&loc2=3rd%20Floor&loc3=C&dataContext=toilet) 

You can learn more on how to create any type of Guest Access App through our [Creating a Guest App Guide](/docs/2/technical/microshare-platform/creating-guest-app-guide/)

### Backboard Template
Microshare® needs to supply customers with physical backboards that can be printed out and mounted on the wall.  End users can use their smart phone to scan a QR code on this physical backboard to bring up the Touchfree app on their phone.  To produce these physical backboards, follow the steps below: 
1. Open the Location Schema
2. Create a new column BaseURL
* paste the guest app URL you create above down through all the rows in the column
3. Create a new column:
* Create a macro or formula which combines the three location tags, the dataContext tag and the baseURL into the correct format that InDesign will recognize in order to generate a QR code image in the backboard template
* IMPORTANT – the InDesign software package requires the following specific syntax in order to generate the QR code correctly: 

You MUST prepend the pound sign to the name of the column AND You MUST prepend URL: to the url itself 
* Desired format of result: 

`URL:<baseURL>?loc1=<loc1>&loc2=<loc2>&loc3=<loc3>&dataContext=<dataContext>`
    
* Example Macro:

`CONCATENATE("URL:", I2,"?loc1=", E2, "&loc2=",F2 , "&loc3=", G2  ,"&dataContext=",H2  )` 

* [Example Results](https://dapp.microshare.io/apps/view/5e3ac77d2b00004cee94a8ae?loc1=Haverhill&loc2=1st%20Floor&loc3=Male&dataContext=toilet)

* Note that your macro may vary depending on how many other columns your location schema contains and which spreadsheet you use (Numbers vs Excel) 

* For a working example file, see backboardTemplate.numbers in the Example Touchfree Configuration folder
4. Export this spreadsheet to a CSV file that can be imported into InDesign
5. Obtain an Indesign background template from Mark and then use the CSV file you generated as a data source for a data merge 
* You should include `Location1`, `Location2`, `Location3`, and `#TouchfreeURL` as fields in the template

[Data Merge Tutorial](https://redokun.com/blog/data-merge-indesign)
and 
[Adding QR codes with Data Merge](https://www.tech4pub.com/2015/02/03/indesign-cc-tip-adding-qr-codes-with-data-merge/ )





