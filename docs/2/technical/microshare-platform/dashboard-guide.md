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
5. [Advanced App Configurations](./#advanced-app-configurations)




## 1. Types of Dashboards
---------------------------------------

The two most common types of dashboards are:
* Dashboards for your trending apps.
* Dashboards for your realtime apps. 


Trending apps will graphically represent your data over any period you wish, while realtime apps display the data currently being collected. 



## 2. Prerequisites
---------------------------------------

 1. Configure the client accounts and identities. Differentiate between which accounts will have the ability to own the apps or own the data. 
 2. Create a Push on the network.
 3. Create a [device cluster](./#2-dashboard-configuration) with all the necessary devices with the appropriate recType (e.g.  `io.microshare.motion.unpacked` ). Only devices of the same type may be in a device cluster. For example, motion sensors for room occupancy cannot be in the a desk occupancy device cluster. 
 4. Have the locations of the devices prepared for the tags loc1, loc2 and loc3. 
 5. [**<!> Create a Rule if needed.<!>**](/docs/2/technical/microshare-platform/create-rule)

 
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
{% include image.html url="\assets\img\dashboard-guide-6.png"  description="Dashboard Guide3" %}
    - Choose <em>Edit Workspace</em> from the settings menu, then <em>Add Monitor Widget</em> for the relevant clusters, then <em>Lock Workspace</em>, then click on the device monitor to show the list view, then click <em>Download JSON</em>. 
    
{% include image.html url="\assets\img\dashboard-guide-7.png"  description="Dashboard Guide3" %}
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

# Advanced App Configurations
---------------------------------------

The following are guides for configuring specific types of apps:

<br>
##### [Electronic Attendance Records App (Smart Timecard)](/docs/2/technical/microshare-platform/smart-timecard-guide)

<br>
##### [Suite App](/docs/2/technical/microshare-platform/suite-app-guide)

<br>
##### [Touchfree Feedback™ App](/docs/2/technical/microshare-platform/touchfree-feedback-guide)

 {% include image.html url="\assets\img\microshare-logo.png" description="logo" %}
