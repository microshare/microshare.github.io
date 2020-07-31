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
5. [Configuring the Electronic Attendance Records App (Smart Timecard)](./#5-configuring-the-electronic-attendance-records-app)
6. [Configuring the Suite App](./#5-configuring-the-suite-app)
7. [Configuring the Touchfree feedback App](./#6-configuring-the-touchfree-app)
8. [Configuring other components of the Touchfree feedback App](./configuring-other-components-of-the-touchfree-feedback-app)
9. [How to create a guest app](../creating-guest-app-guide)




## 1. Types of Dashboards
---------------------------------------

There are two types of dashboards:
* Dashboards for your trending apps
* Dashboards for your realtime apps. 


Trending apps will graphically represent your data over any period you wish, while realtime apps display the data currently being collected. 



## 2. Prerequisites
---------------------------------------

 1. Configure the client accounts and identities. Differentiate between which accounts will have the ability to own the apps or own the data. 
 2. Create a Push on the network.
 3. Create a [device cluster](./#2-dashboard-configuration) with all the necessary devices with the appropriate recType (e.g.  `io.microshare.motion.unpacked` ). Only devices of the same type may be in a device cluster. For example, motion sensors for room occupancy cannot be in the a desk occupancy device cluster. 
 4. Have the locations of the devices prepared for the tags loc1, loc2 and loc3. 


 **Create Rule If Needed**
 
 ---------------------------------------


 The views used by the generic applications are generic views created by Microshare® and hosted on the account **asset@microshare.io**. 

These views are already shared with all accounts. You can find more information about this in the [view guide](../view-guide).

If a new view is created for the dashboards, it is necessary to follow the following steps:

 * Create [Rules](/docs/2/technical/microshare-platform/rules-guide/) to share the views to everyone through the **assets@microshare.io** account.  
 * The name should be "Share Views with <em>(insert client name)</em>"
 
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
 * `Form to display`: For realtime apps pick <em>Realtime Form SHIP</em>. For Trending Feedback Apps select <em>Trending Feedback Form SHIP</em>. For other Trending apps, choose <em>Trending Form SHIP</em>
 * `Facts`: See next section for specific details
 
 

## 4. App Facts
---------------------------------------
<!---This is where Cole will add the child pages to the JSON examples for the Facts --->

### Tips 

It is best to give the facts in JSON code format. To do so, simply click on the tree button and select code.

{% include image.html url="\assets\img\app-facts-tree.png" width="800" description="Factes Tree" %}

{% include image.html url="\assets\img\app-facts-code.png" width="800" description="Facts Code" %}


### App Facts


##### > [App Example](/docs/2/technical/microshare-platform/app-config-examples/trending-air-quality/)

<br>

### For all apps

Create a new fact by pressing the button above the green arrow and hitting apend. 

{% include image.html url="\assets\img\dashboard-guide-3.png" height="900" width="900" description="Dashboard Guide3" %}

* `appTitle`: Should match the name you provided as the app’s Name (above).
* `navOptions`: This credential should be completed last. Add the links and names of all apps in the client’s account to each app.json so that the client can navigate from one app to another.
* `selectionOptions`: All apps require you to provide the client specific location options in the navOptions field. Use the databoard to generate the JSON in the correct format. Get a token for the account that owns the device cluster(s).
    - head over to [https://databoard.azurewebsites.net/dashboard/0](https://databoard.azurewebsites.net/dashboard/0). 
    - Choose <em>Edit Workspace</em> from the settings menu, then <em>Add Monitor Widget</em> for the relevant clusters, then <em>Lock Workspace</em>, then click on the device monitor to show the list view, then click <em>Download JSON</em>. 
* `dataRecType`: match the target recType of the device cluster.
* `dataContext`: Use the meta tag you chose in the device cluster.
* `queryId`, `queryId1`, `queryId2`, `queryId3`: it is recommended to leave the query settings the same as they are in the example json.
* `footerLogo`, `headerLogo`, `header SecondaryLogo` and `get RecType`: leave untouched unless requested otherwise.

### Realtime Apps
* `viewType`: Use the "desk","room" or "field" option for Realtime Desk Availability app, Realtime Room Availability app and Realtime Value app respectively.  
* For Realtime Value app only, the `fieldName` fact must match the field name from the unpacker and the `fieldUnit` fact is appended to the value as part of the user display. Additionally, if you supplied a `minIdeal` fact, the values BELOW this value will be displayed in red, while if a `maxIdeal` fact is given, the values above will be displayed in red.
* `covertTempToFarenheit`: set to true to convert the data from Celsius to Fahrenheit.


### Trending Apps

#### 1. Optional Parameters:
* `location1`: title of location1 dropdown.
* `location2`: title of location2 dropdown. 
* `location3`: title of location3 dropdown.
* `startOfWorkDay` and `endOfWorkDay`: used to filter out data from outside the workday  <em>OR</em> to shade data from outside the workday.  It is not used in Trending Feedback.
* `debug`: set to true to output debug messages to the consule.
* `useWeekendColorBand`: shade the weekend on charts.
* `colorOfThresholdBand`: shade the ideal range on charts.
* `colorOfOffHoursBand`: shade the off-hours on chart.

#### 2. Feedback Charts: 
* The optional parameter `charts`  an array of the charts to display.
* The `fieldName` determines what kind of chart will be displayed, must be set to "event".
* `title`: include a title for the chart
* `viewType`: set to "feedbackTable" or "feedbackTimeline".
* `handleSmilioData`: set to "true" if and only if you are visualizing legacy Smilio data that has not been translated into the feedback event format. 
* **NOTE** that with the Trending Feedback app, there is an additional step to configure a backboard (or use a standard backboard from the assets account). Please see the section on Touchfree Feedback app for more information. If you are converting a legacy feedback app, you may have to convert the ‘buttons’ section from the legacy app facts into a backboard view in the client’s account. 
* `backboardRecType`: set to “io.microshare.config.backboard” 
* `backboardId` include the ID of the backboard view 
* **NOTE** that the form will use the first backboardRecType and backboardId it finds.  You cannot use a different backboard for the timeline vs table. 


#### 3. Trending Usage and Trending Access Usage (include only one chart):
* `fieldName`: must be "counter".
* `title`: Give a name for the chart.
* `maxMin` and `minMax`: optional parameters which allow you to configure the min and max of the chart when no data is available.

#### 4. Trending Desk Availability (Use only one chart):
* `fieldName`: must be "occupied".
* `title`: Give a name for the chart.
* `maxMin` and `minMax`: optional parameters which allow you to configure the min and max of the chart when no data is available.
* `columns`: can include any or all of the following: “Active Desks”, “Configured Desks”, “Reporting Desks”, “Average Reporting Desks”.
* If “columns” parameter is NOT included, default columns are “Active Desks” and “Configured Desks” .
* If unrecognized column name is included, this is plotted as if it were “Active Desks” - this allows the fulfillment to customize the name of this line.

#### 5. Trending Refrigerator (can include up to two charts):
* `fieldName`: "internal temp" and/or "external temp".
* `convertTempToFahrenheit`: set to true to convert the data from Celsius to Fahrenheit. The default is false.
* `maxMin` and `minMax`: optional parameters which allow you to configure the min and max of the chart when no data is available.

#### 6. Air Quality (up to six charts) and Environment (up to two charts):
* `fieldName` for Air Quality: temp, humidity, co2, voc, pressure and/or illuminance.
* `fieldName` for Environment: temp and/ or humidity.
* Note that the MCF88 device uses different views.  See the accompanying example JSON.

##### <em>**You cannot mix and match**</em> You can only display the values from teh recType and one view or set of views(var1, var2 and var3), so you are limited to the charts that go with each other. 



#### Configuring a Custom Trending Chart
* `fieldName`: unlike the realtime app, the trending apps do require custom views if you add (a) field(s) that is/are not in the examples.  Once you create the views that return the custom fields, then as long as you return the data in the same format as the environment or air_quality views, you will be able to display the custom line graph(s) in your app.  Choose one or more `fieldNames` from your device (cannot be “feedback”, “occupied” or “counter”), return it in your new set of views, and then add charts to your app.json with the new `fieldName(s)`.  
* `title`: include a title for the chart

## 5. Configuring the Electronic Attendance Records App (Smart Timecard)
---------------------------------------
The Electronic Attendance Records App allows you to configure an app to retrieve all staff arrivals from a user specified week and download them into a formatted file (either CSV or xlsx). 

**Create the App**

* `App Type`: Display.
* `Name`: Use the name that the user will see.
* `Parent Tag(s)`: Allows your suite app to be configured within another suite app.
* `Child Tag`: Leave blank.
* `Style Choice`: Showcase.
* `Theme`: https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css 
* `Include`: Leave blank unless specified otherwise.
* `Icon`: Pick the same icon as seen in hte demo suite app in the assets account.
* `Facts to Display`: None
* `Form to Display`: Select <em>Attendance Form SHIP</em>

**Facts for Smart Timecard App**

The example JSON files are provided in the [App Facts Section](./#4-app-facts). The details include:

* `appTitle`: Use the user facing title of the Electronics Attendance Records app.
* `navOptions`: Complete this last. Add the links and names of all apps in the client's account to each app. json so that the client can navigate from one app to another. 
* `selectionOptions`: the client specific location options.
    - Use the Databoard to generate the correct JSON format.
    - Get a token for the account that owns the device cluster(s)
    - Go to [https://databoard.azurewebsites.net/dashboard/0](https://databoard.azurewebsites.net/dashboard/0)
    - Choose <em>Edit Workspace</em> from the settings menu, then <em>Add Monitor Widget</em> for the relevant clusters, then <em>Lock Workspace</em>, then click on the device monitor to show the list view, then click <em>Download JSON</em>. 
* `dataRecType`: Match the target recType of the device cluster.
* `dataContext`: Use the meta tag you chose in the device cluster. 

#### Optional Parameters

* `getRecType`: The recType of the <em>view(s)</em> for the queries
* `queryId`: Leave this out of the facts to use the default query (no data context).
* `debug`: Set to true to output a detailed log message to the console, this is defaulted as false.
* `timezone`:  specify which timezone to use (default is to use browser timezone). It is highly recommended that you configure this in the app facts to the timezone where the data is generated so that the times in the downloaded data make sense AND so that the data does not differ between users in different timezones.  For list of options, [see this page](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
* `locale`: Specify the location for the app, the default us the use the browser location. This affects whether a week starts on a Sunday or Monday, and how the days of the week are displayed in the downloaded file as well as how the date is displayed if you pick a locale specific date format.  For a list of options, [see this page](https://en.wikipedia.org/wiki/Language_localisation).
* `dateFormat`: specifies how to display the date (default is "YYYY-MM-DD"). Could use the locale specific format as "LL" or "L". 
* `date`: preset the selected week (current week is the default) in the YYYY-MM-DD format. If you use a Sunday/ Monday and fail to explicitly set the locale and timezone, then users in different time zones will see the wrong week's worth of data.
* `selectionOptions`: Use in URL parameters to set a single location1. This can allow you to specify that the attendance data from one location be emailed to one set of users and the attendance from another location be emailed to a different set. 
* `autoDownload`: Download the file as soon as the page is loaded, the default is false. 
*`downloadXLSX`: Only relevant when autoDownlaod is true. Whether to autoDownload as an excel sheet (xlsx) or in a csv format.
* `excludeSaturday` and `excludeSunday`: whether to exclude Saturday or Sunday data. (default is false)
* `eventName`: What name to use for each "Hall Effect" in the downloading data. Consider using "staff arrival", "cleaning" or "record". Defaults to "cleaning".

    

## 6. Configuring the Suite App
---------------------------------------
A Suite App allows you to encapsulate multiple apps into a single interface that is more straightforward to configure and navigate than using the sandwich menu in the trending or realtime forms.  It’s easy to set up one or more suite apps that group "child" apps together. 
1. Create a new App:
{% include image.html url="\assets\img\dashboard-guide-4.png" height="900" width="900" description="Dashboard Guide 4" %}

* `App Type`: Suite
* `Name`: Enter the user- facing name for the new application.
* `Parent Tag(s)`: (Optional) this allows suite app to itself be configured within another suite app.
* `Child Tag`: Enter a unique tag that your suite app uses to select its child app, MUST match the parent tag(s) of the child apps.
* `Style Choice`: Showcase.
* `Theme`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include`: Leave blank unless instructed otherwise.
* `Icon`: Select the same as seein in the demo suite app in the assets account.
* `Facts to Display`: None.
* `Form to Display`: pick Suite icon form v2.5.
* `footerLogo`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer.png)
* `headerLogo`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/header.png)
* `sortedApps`: (optional) a list of the app names. Should only be used if the sort order is not alphabetic.

#### Configuring the Child Apps of the Suite App

Remember that “Child Tag” you configured in the Suite App?  Add that to the “Parent Tag(s)” field of the relevant app(s).

Remember to test your Suite App, the child apps should appear as tiles within the Suite App.


## 7. Configuring the Touchfree feedback App 
---------------------------------------
The Touchfree app creates business events tied to specific locations just like the Smilio Feedback solutions. 

### Create a Location Schema (or a Device template)

You will still need to plan out your tagging system even if you are creating a Touchfree app which is not tied to physical devices. If you already have a device template (ie a file already in the proprietary format used to create a device cluster in the Microshare® platform), you can start with that.  Create a spreadsheet with a header row that includes Location1, Location2, Location3, as well as a new DataContext column that describes your tagging system.  Note that you CAN use your existing device templates that can now me imported to create the device cluster in the Microshare® platform.  Let’s call this file, the location schema. 

 **Create a new App with the configurations:**
 
 {% include image.html url="\assets\img\dashboard-guide-5.png" height="900" width="900" description="Dashboard Guide 5" %}

* `App Type`: Display.
* `Parent Tag(s)`: leave blank.
* `Style Choice`: Showcase.
* `Theme`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include`: leave blank unless requested otherwise.
* `Icon`: pick the same icon as seen in the demo suite app in the assets account.
* `Facts to Display`: None.
* `Form to Display`: Select <em>Touchfree Feedback Form SHIP</em>


### Required Facts:
* Example JSON files are provided in the [App Facts Section](./#4-app-facts). 
* `appTitle`: the user facing title of the Touchfree Feedback App. 
* `backboardRule`: an array of rules.  When the Touchfree Feedback app opens, it searches the backboardRules to determine which backboard to display.  The first one that matches is the one it uses.  If it doesn’t find a backboardRule, the app displays an error. The simplest app can use a single backboard rule with only a backboardId in it.  Each rule in the array can include one or more of the following fields:

    - `backboardId`: (required) the ID of the backboard for this rule.
    - `loc1s`: (optional) loc1 must be included in this array in order for this backboard to be selected. 
    - `loc2s`: (optional) loc2 must be included in this array in order for this backboard to be selected. 
    - `loc3s`: (optional) loc3 must be included in this array in order for this backboard to be selected. 
    - `metaTags`: (optional) dataContext must be included in this array in order for this backboard to be selected. 


### Optional Facts:
* `headerLogo`: image to display in the header.
* `footerLogo`: image to display in the footer.
* `headerSecondaryLogo`: Secondary image to display in the header.
* `headerSecondaryLogo`: secondary image to display in the header. 
* `getRecType`: recType of query view used to retrieve summary of today’s submissions. 
* `queryId`: query view used to retrieve summary of today’s submissions. 
* `dataRecType`: recType for share records for events this app creates. Also used for retrieval. 
* `singleClick`: set to true to hide Submit button and submit the event as soon as the user selects an option.
* `hideButtons`: Set this as true if you wish to exlude "staff" button from the Touchfree Feedback application.
    - This allows you to use the **same** backboard view for a Touchfree Feedback App, Smilio robots and the Trending Feefback App.
    - The Touchfree Feedback App shoud **NOT** allow the visitor to generate a staff arrival event.
    - Smilio Robots translate Smilio data into feedback events, including visitor feedback and staff arrival events.
    - The Trending Feedback App should be able to show both the staff arrival and the visitor feedback events.
    - You can also set this to an array of events such as [“good”, “clean”] if you want to exclude particular buttons from the Touchfree Feedback app. 
    
### URL Parameters

these parameters can be specified either as URL parameters or in the facts.  They determine how the business event will be tagged when the user submits a button press.  They can also be used to determine which backboard to display.  For example, a single app can be used by a company to either display “Meeting Room Feedback” backboard using the dataContext=room or a “Toilet Cleanliness” backboard using dataContext=toilet.  Finally, these tags are used to retrieve the summary of today’s submissions. 

* loc1- client specific
* loc2- client specific
* loc3- client specific
* dataContext- client specific 


## 8. Configuring other components of the Touchfree feedback App 
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
The target use case for the Touchfree app is for a visitor to launch the Touchfree Feedback app by scanning a QR-code with their phone. The end user will not have a Microshare® account. To enable this to work: 

Follow the instructions “Instructions - Guest Access” to configure the Touchfree App as a guest app. [Creating a Guest App Guide](/docs/2/technical/microshare-platform/creating-guest-app-guide/)  

You should now have a URL – let's call it the baseURL that can be used to launch your app.  But it does not operate properly as is.  If you navigate to this default URL, you will see warnings that the locations and/or dataContext and/or backboard are not defined.  You need to add URL parameters to the URL to make it work properly.  For example, you can navigate to the example Touchfree app in the assets account by using these URL: 
[https://dapp.microshare.io/guest/](https://dapp.microshare.io/guest/5e77ac483a0000df97452437?loc1=Haverhill&loc2=3rd%20Floor&loc3=C&dataContext=toilet).


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


