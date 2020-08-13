---
layout: docs
title: Configuring Touchfree Feedback™ App
description: A Dashboard Guide Child Page
group: advanced
toc: true
---

---------------------------------------
The Touchfree Feedback™ app creates business events tied to specific locations just like the Smilio Feedback solutions.

#### Summary:
1. [Making the Touchfree Feedback™ App](./#1-making-the-touchfree-feedback-app)
- A. [Create a Location Schema](./#a-create-a-location-schema-or-a-device-template)
- B. [Required Fact](./#b-required-facts)
- C. [Optional Facts](./#c-optional-facts)
- D. [URL Parameters](./#d-url-parameters)
2. [Configuring other components of the Touchfree Feedback™ App](./#configuring-other-components-of-the-touchfree-feedback-app)
- A. [Backboard View](./#a-backboard-view)
- B. [Guest App](./#b-guest-app)
- C. [Backboard Template](./#c-backboard-template)

## 1. Making the Touchfree Feedback™ App
---------------------------------------
### A. Create a Location Schema (or a Device template)
---------------------------------------

You will still need to plan out your tagging system even if you are creating a Touchfree Feedback™ app which is not tied to physical devices. If you already have a device template (ie a file already in the proprietary format used to create a device cluster in the Microshare® platform), you can start with that.  Create a spreadsheet with a header row that includes Location1, Location2, Location3, as well as a new DataContext column that describes your tagging system.  Note that you CAN use your existing device templates that can now me imported to create the device cluster in the Microshare® platform.  Let’s call this file, the location schema. 

 **Create a new App with the configurations:**
 
 {% include image.html url="\assets\img\dashboard-guide-5.png" height="900" width="900" description="Dashboard Guide 5" %}

* `App Type`: Display.
* `Parent Tag(s)`: leave blank.
* `Style Choice`: Showcase.
* `Theme`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include`: leave blank unless requested otherwise.
* `Icon`: pick the same icon as seen in the demo suite app in the assets account.
* `Facts to Display`: None.
* `Form to Display`: Select <em>Touchfree Feedback™ Form SHIP</em>


### B. Required Facts:
---------------------------------------
* Example JSON files are provided in the [App Facts Section.](/docs/2/technical/microshare-platform/app-config-examples/trending-air-quality/) 


{% include image.html url="\assets\img\dashboard-guide-3.png" description="Dashboard Guide 4" %}

{% include image.html url="\assets\img\app-facts-tree.png" description="Dashboard Guide 4" %}


* `appTitle`: the user facing title of the Touchfree Feedback™ App. 
* `backboardRule`: an array of rules.  When the Touchfree Feedback™ app opens, it searches the backboardRules to determine which backboard to display.  The first one that matches is the one it uses.  If it doesn’t find a backboardRule, the app displays an error. The simplest app can use a single backboard rule with only a backboardId in it.  Each rule in the array can include one or more of the following fields:

    - `backboardId`: (required) the ID of the backboard for this rule.
    - `loc1s`: (optional) loc1 must be included in this array in order for this backboard to be selected. 
    - `loc2s`: (optional) loc2 must be included in this array in order for this backboard to be selected. 
    - `loc3s`: (optional) loc3 must be included in this array in order for this backboard to be selected. 
    - `metaTags`: (optional) dataContext must be included in this array in order for this backboard to be selected. 


### C. Optional Facts:
---------------------------------------
* `headerLogo`: image to display in the header.
* `footerLogo`: image to display in the footer.
* `headerSecondaryLogo`: Secondary image to display in the header.
* `headerSecondaryLogo`: secondary image to display in the header. 
* `getRecType`: recType of query view used to retrieve summary of today’s submissions. 
* `queryId`: query view used to retrieve summary of today’s submissions. 
* `dataRecType`: recType for share records for events this app creates. Also used for retrieval. 
* `singleClick`: set to true to hide Submit button and submit the event as soon as the user selects an option.
* `hideButtons`: Set this as true if you wish to exlude "staff" button from the Touchfree Feedback™ application.
    - This allows you to use the **same** backboard view for a Touchfree Feedback™ App, Smilio robots and the Trending Feedback App.
    - The Touchfree Feedback™ App shoud **NOT** allow the visitor to generate a staff arrival event.
    - Smilio Robots translate Smilio data into feedback events, including visitor feedback and staff arrival events.
    - The Trending Feedback App should be able to show both the staff arrival and the visitor feedback events.
    - You can also set this to an array of events such as [“good”, “clean”] if you want to exclude particular buttons from the Touchfree Feedback™ app. 
    
### D. URL Parameters
---------------------------------------
These parameters can be specified either as URL parameters or in the facts.  They determine how the business event will be tagged when the user submits a button press.  They can also be used to determine which backboard to display.  For example, a single app can be used by a company to either display “Meeting Room Feedback” backboard using the dataContext=room or a “Toilet Cleanliness” backboard using dataContext=toilet.  Finally, these tags are used to retrieve the summary of today’s submissions. 

* loc1- client specific
* loc2- client specific
* loc3- client specific
* dataContext- client specific



<br>
## 2. Configuring other components of the Touchfree Feedback™ App
---------------------------------------

### A. Backboard View
---------------------------------------
The backboard is configured as a Static JSON view in the Microshare® platform.  Use the recType io.microshare.config.backboard for this view. 

Examples of the format of this view can be found in the Example Touchfree Configuration folder.  Description is as follows: 
* `id` - (UNUSED) you can put whatever you want here to remind you what/who this backboard is for.  The underlying system does not look at this field 
* `en` - represents the backboard for the English language.  Since English is the default language, all backboards MUST include an “en” field and can optionally include other languages as well

Under each 2-character language code, include the followinf REQUIRED subfeild
* `question`: the question to display at the top of the Touchfree Feedback™ App
* `buttons`: an array of the buttons to display
* `event`: a single word which is hte ID of the event
* `label`: a user-facing label for the button corresponding tot his event. Make sure this is consistent between the backboard and the Touchfree Feedback™ App
* `smilioEvent`: a key used to lookup which backboard event corresponds to a given Smilio event.  This is used in the Smilio robots, not Touchfree Feedback™ App

### B. Guest App
---------------------------------------
The target use case for the Touchfree Feedback™ app is for a visitor to launch the app by scanning a QR-code with their phone. The end user will not have a Microshare® account. To enable this to work: 

Follow the instructions “Instructions - Guest Access” to configure the Touchfree Feedback™ App as a guest app. [Creating a Guest App Guide.](/docs/2/technical/microshare-platform/creating-guest-app-guide/)  

You should now have a URL – let's call it the baseURL that can be used to launch your app.  But it does not operate properly as is.  If you navigate to this default URL, you will see warnings that the locations and/or dataContext and/or backboard are not defined.  You need to add URL parameters to the URL to make it work properly.  For example, you can navigate to the example Touchfree Feedback™ app in the assets account by using these URL: 
[https://dapp.microshare.io/guest/ .](https://dapp.microshare.io/guest/5e77ac483a0000df97452437?loc1=Haverhill&loc2=3rd%20Floor&loc3=C&dataContext=toilet).


### C. Backboard Template
---------------------------------------
Microshare® needs to supply customers with physical backboards that can be printed out and mounted on the wall.  End users can use their smart phone to scan a QR code on this physical backboard to bring up the Touchfree Feedback™ app on their phone.  To produce these physical backboards, follow the steps below: 
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

* For a working example file, see backboardTemplate.numbers in the Example Touchfree Feedback™ Configuration folder
4. Export this spreadsheet to a CSV file that can be imported into InDesign
5. Obtain an Indesign background template from Mark and then use the CSV file you generated as a data source for a data merge 
* You should include `Location1`, `Location2`, `Location3`, and `#TouchfreeURL` as fields in the template

[Data Merge Tutorial](https://redokun.com/blog/data-merge-indesign)
and 
[Adding QR codes with Data Merge.](https://www.tech4pub.com/2015/02/03/indesign-cc-tip-adding-qr-codes-with-data-merge/ )