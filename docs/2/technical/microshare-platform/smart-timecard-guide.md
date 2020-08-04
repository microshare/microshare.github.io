---
layout: docs
title: Configuring the Electronic Attendance Records App (Smart Timecard)
description: A Dashboard Guide Child Page
group: advanced
toc: true
---

---------------------------------------

The Electronic Attendance Records App allows you to configure an app to retrieve all staff arrivals from a user specified week and download them into a formatted file (either CSV or xlsx). 

## 1. Create the App

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

## 2. Facts for Smart Timecard App

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

## 3. Optional Parameters

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
