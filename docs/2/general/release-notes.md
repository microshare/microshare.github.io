---
layout: pdf_viewer
title: Release Notes
description: Take a look at our latest updates
pdf: /assets/pdf/release-notes.pdf
---

---------------------------------------
---------------------------------------

## Release Notes for December 11, 2025

**New Features**

Platform
- Composer Device Cluster now supports expanded DevEUI formatting such as is used for Tactacam devices. 
- Updated Pest wizard app facts for the Metrics app to include Explain buttons by default. 
- Pluggable LLM API Endpoint for unifying Smart Features. 
- Photo and image upload capability for Mobile Apps. 
– Added support for Amazon-specific Content-Types to RestfulAPIServices to support Tactacam authentication. 
– Composer “Cards” view: Users are now able to filter by multiple values.

EverSmart
- Added support for merging gateway alert handling into "regular" routing / settings. 
- The Metrics app can now be configured to visualize data from the following Hagleitner devices: sanitizer, soap, handtowel, toiletpaper. 

**Feature Enhancements**

Platform
- Added a new pest bundler: io.microshare.event.alert.gateway. 
- Updated the Pest gateway usecase from GATEWAY to SC05GW. 
– Added a rectype and robot for the new bundler: io.microshare.event.alert.adhoc. 
- Alert support for Tactacam Reveal series trail cameras. 
- Unpacking support for Pescle Lite series cameras. 
- We now allow dynamic values for incidents from alert data. 
- Trained machine learning models using aggregated event data. 
- Unpacking support for Tactacam Reveal series trail cameras.

EverSmart
- Established the correct pattern for manual Tactacam setup:
    * Need to create a proper DC with both custom device type (Tactacam Reveal)/network server (Tactacam API)/usecase SC08.
    * Add bundler robot for recType io.microshare.event.alert.gateway.
- Routing:
    * Now always includes "Create Work" as button.
    * Switched "map" to be a tab.
- EverSmart: Now hides "Field" selector when there is only a single option. 
- Events Overview page (previously known as Alerts Overview) no longer includes an extraneous "Device Maintenance" box or extraneous "Show All" / "Hide All" buttons in graphs on page. 
- Alert rodent data is now visualized as event "counts" not "events" 
- Increased incident retrieval limit in asset view to expand list size in Routing app and ReactM. 
- All Device Health dashboards now include three additional fields to help with reporting which gateways are forwarding packets:
    * Gateway Count
    * Gateway LRR-IDs (only visible when “Show advanced fields” is ON in the Settings)
    * Gateway Base Station Name (only visible when “Show advanced fields” is ON in the Settings)
- Explain button has styling to match EverSmart skin. Now allows Print and Download as PDF. Improved AI prompting to emphasize graph/chart descriptions to supplement the data analysis.
- EverSmart: Terminology and other UI changes 
    * "incident" should be called “ticket” 
    * “todo” is now “task”
    * The “Kanban” tab should now be labeled the “Tickets" tab
    * “alerts” should now be called “events” and the word “alert” should be used to mean notification
    * “event” is the activity from the sensor OR the output from "Create Work" button
    * "Roster" should now be called “Route”
    * Removed the "Time" dropdown and default to the timezone of the data
    * Removed the "Refresh" button 
- If the user logged into one org manages to open a dashboard that belongs to a different org, then the error message will now show the user-facing label of the org instead of the org name. 
– Added a method to prevent data from different sensors from mixing in the data retrievals for the Device Health dashboard. 
– Gateway Health: We now auto-resolve an incident when a "reconnect" alert is received. 
– Routing: Introduced visualization for closed tickets, including per-location views and historical ticket context within ticket details. 
– Routing: Added incident notes support with improved UI for viewing incident notes in the routing app. 
– Routing: Various improvements to the Origin Stats feature including:
    * Renamed the feature from “Origin Stats” to Alerts Per Location.
    * Added inline help on fields to explain the data in the charts/dashboards.
    * Completed a re-write of the related online documentation to make it clearer and easier to understand. This includes the purpose of the features, how to use the features and the information in the charts.
    * Charts – update field names, axis descriptions, labels etc to make it easier to understand from a user’s perspective. 
- Metrics: We now allow the user to pick the UTC vs data time vs "ago" on the  Latest or Realtime page. 
– Routing: Added completion status display for updated Todos from react-m in the routing app. 

**Bug Fixes**

Platform
- Relaxed the BaseEventHandler checking for fport/fcnt to support Agents that are not LoRaWAN based. 
- Introduction of the solution field in the filtering for the notifier. A notification rule from a solution shouldn't impact an other solution from now on.
- Devices: Fixed an issue that resulted in a greyed-out screen when clicking “Edit Multiowner Attribution”.
- Addressed a problem where a Device Cluster change appeared saved, even when the Back button was clicked instead of the Save button.

EverSmart
- Trending and Heatmap: Fixed an issue with the Trending and Heatmap Buttons not working on the first load of the page.
- Fixed an issue where extra rodent events sometimes got inserted into data.
- Settings App: Downloading now reliably includes label for "Locations" column.
- After a user has been deleted via the Settings app, tickets assigned to the deleted user should still show the deleted user's email address in the Routing app.

React-M
- Fixed an issue with Roster listings showing as empty in React-M.

**Additional Resources**

- n/a

**Ops**

- n/a

---------------------------------------
---------------------------------------

## Release Notes for October 29, 2025

**New Features**

- n/a 

**Feature Enhancements**

Platform 
- The unpacked data and device health data now includes more device cluster meta data in the data.meta.dc field, including the device type, configured usecase, originating device cluster id and recType. 
– Added “Kill trap” monitoring to recognize when a rodent does not leave a box. 
- Incidents handle bundling in a better way to avoid cross solution bundling. 
- The pictures taken by the Tacticam are now available in the Routing app, inside your incidents. 
- The images from Tacticam cameras are now available in the Insights emails.

**Bug Fixes**

Platform
- Fixed an issue where UK SMS recipients received messages from our US number instead of our UK number. 
- Patched an issue where the Smilio agent was not producing business events due to change to placement of backboard in shareRec.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for October 8, 2025

**New Features**

Platform
- Created an app to produce AI generated insights using customer data. 

**Feature Enhancements**

Platform 
- The "insight" and "report" fields are now passed from the Bridger to the Notifier, enabling richer notification templates.
- We now use a process "deep" variable to put a lock on the update of an Incident to avoid stuck Incidents. 
- Added the capability to send "insight" notification (insight email) through the Notifier. 
- Updated tests to handle Profiles with multiple push tokens.

**Bug Fixes**

React-M
- Incidents are now updated based on any roster change. 
- Enhanced flow for “Mark all tasks complete” and “Complete the incident” in the same flow. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for September 18, 2025

**New Features**

React-M
- A Reset Password feature has been added to the React-M login screen. 

**Feature Enhancements**

Platform 
- Incident and notification events now include more timing details at the completion level and location data for better tracking and analysis. 
- Device Clusters now include GPS info in the CSV extract.
- The backend of the incident system will now transform any input email into lowercase to avoid uppercase characters causing issues in the downstream use of the incident system.

Deploy-M
- Upgraded DeployM to Android API Level 35.
 
**Bug Fixes**

React-M
- Fixed the ReactM 400 Error when completing a task.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for August 27, 2025

**New Features**

Platform
- Added support for bundling gateway incidents and configuring notifications. 

**Feature Enhancements**

Platform 
- Composer Device Clusters now show and map with marker realignment capability. 
- We now capture geolocation using our standardized data format and provide it inside the incident data. This will help our different products to access the geolocation of these incidents. 
- Added new Pest and workflow assets for Pest 2.1. 

EverSmart Pest
- Metrics: The Explain This modal dialog has been added and made more engaging, available upon custom config. 
– Settings: In Settings users with pending invites now show as “(pending)”. 
- Routing: improved handling of upper cases email addresses as assignee. 
– Metrics, Settings: Improved display of bold fonts. 

React-M
- Revamped user experience for easier access to priority vs routine tasks. Released a new feature to mark all tasks complete in one go. Added new incidents details helpful for the users such as priority number from low to high priority.
 
**Bug Fixes**

Platform
- Fixed an issue where the Gateway Agent only produced a disconnect alert for the FIRST unpacked record it processed for a device. 
- Fixed the use of parameters in the Views page. 

EverSmart Pest
- Metrics: EverSmart Incident - Age in Minutes is no longer empty when an incident is closed and now displays calculations based on how long all relevant incidents were open. 

**Additional Resources**

Documentation
- Updated screenshots in Settings Help file doc that showed "Rodent" instead of "Pest".
- Updated Rodent ES > Alerts > Help > Eversmart Rodent Dashboard User Guide - that referenced "Rodent" in the document title, etc. instead of Pest.

**Ops**

- Fixed Robot Pod restart.


---------------------------------------
---------------------------------------

## Release Notes for August 6, 2025

**New Features**

EverSmart Pest
- Settings, Routing: Added the capability to add a data source to the Settings/Routing app through app facts.

**Feature Enhancements**

Platform 
- Incident time-escalation is now optional via the bundler config under config.escalation.active true/false.
- Added support for bundling gateway incidents and configuring notifications.
- Added the geolocation of origin alerts in the incident data.

EverSmart Pest
- Metrics: Improved the fields displayed for EverSmart "Incidents": 
   - Show incident priority (relative or absolute) in "all" of the incident dashboards. 
   - Revised the ordering of the stages to make it clearer how things are meant to flow. 
- Metrics: Added the following capabilities to the Tables in EverSmart: 
   - Pagination for tables with more than 10 rows. 
   - Ability to collapse/hide whole table. 
   - Added a Search bar. 
- Metrics: Changed the word "device" on the Overview for gateways to "gateway". 
- Settings: Clarified help text in Settings > My Profile > Language > Edit.  
- Metrics: EverSmart left navigation pane is now collapsible. 
- Settings: Updated the Settings app styling for users / rules to make active ones more visually distinguishable.

React-M
- ReactM now provides split priority queues: 
   - Incidents can be nominal, low, medium or high priority. 
   - It allows split views for Critical and Routine tasks. 
   - It allows configurable split levels eg. Critical >= medium.
 
Deploy-M
- Added a password reset feature to Deploy-M. 

**Bug Fixes**

EverSmart
- Routing, Settings: The Routing/Settings sticky toolbar now behaves properly on small screens. 
- Metrics: When there are distinct taglabel sets referenced in one app, we now ensure each one displays correctly.

React-M
-  The Complete logic flow now fully resolves the ticket. 

Deploy-M 
- Fixed a possible crash in the QR Code Scanner.

Wizard/Composer
-  The use of parameter in the View page has been fixed.
 
**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for August 5, 2025

**New Features**

Platform 
- Created an agent to produce alerts for disconnected gateways. 
- Added time zone annotation for GPS enabled data.

EverSmart
- An AI-powered “Explain” button is available for configuration for  EverSmart dashboards.

**Feature Enhancements**

Platform 
- Geolocation is now passed along the streaming pipeline from packed to unpacked and in the proper format. 
- Create a data frame ready for machine learning ingestion for Rodent false positives. 
- API now allows regex .* in patterns for the persistance.collection configurations.  
- "Breadcrumbs" for the originating records for a given record in the pipeline are now output in a standard way to an array - the "sources" field.  This was completed for agents, snapshots, and incidents. 
- Remove the notification threshold and title (incident/notification) and notification body from incidents. 
- Add a "test only" option to the View page so it doesn't need to save the view to test it. 

EverSmart
- The toolbar at the top of Routing (Kanban) and EverSmart is now “sticky”. 
- The Origin Stats button within the ticket details page now shows aggregated origin data so that origin data is more easily readable by the user. 
- Added a locale/language preference to Settings > Profile. 
- Rodent now uses solution “Pest” throughout the architecture and documentation. 
- Admins are now able to remove a user’s access from the org via the Settings app. 
- Added the ability to view Gateway Health and connectivity in Device Health or Metrics as configured via the App Facts. 
- Incidents is now the first folder in the Metrics Dashboard. 
- Parent Tags for dashboards have been updated. 

**Bug Fixes**

Platform 
- Addressed an issue where Search in Device Cluster by DevEUI was not working. 
- Resolved an error when running a match/fetch query in Views.

EverSmart
- Various fixes and improvements including: 
   - Fixed suggested tags missing in Routing - ticket title on Kanban board AND in Ticket Details and the EverSmart - table at top of the Trending view. 
   - Routing > Filter by Location > Locations are no longer collapsed by default. 
   - Resolved an issue with some “malformed” tickets in unexpected formats.  
   - Fixed the Save filter in the Incident Manager. 
- Admin role and "isAdmin" should now work the same to invite/edit/query users in the Settings > Users table. 
- Various small fixes including: 
   - Move "Maps" tab from Metrics to Device Health. 
   - Removed Open Incident Status and Closed Incident Status in "incident". 
   - Added help file for gateway health. 
   - Generated inline help for gateway and incident fields. 
   - Changed rules for currently logged-in user - does not update rules on “My Profile”. 
- Settings app no longer shows empty "Notification Sensitivity" in Rule Editor when solution is set to "pest". 
 
**Additional Resources**

Web Documentation
- Documentation for the Quick Start > Create an Account topic has been updated.

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for June 26, 2025

**New Features**

- n/a 

**Feature Enhancements**

Platform 
- Pest Incident Templates for email, SMS and push notifications are now available in English, Norwegian Bokmål, French and Spanish language formats.
- We’ve improved the tagging of incident tags based on their bundling level.
- We’ve changed the origin alert tags to device/global in the incident.
- More alert details are now provided in the incident notifications.
- The isAdmin = admin logic now applies to the API via the Policy Fabric.
- Added Smart management of thresholds and the capture of timing of threshold milestones, so the timing of when a threshold has been reached is visible in the incident share record.
- Created a pipeline to generate gateway health records that can be consumed by EverSmart Device Health.

Deploy-M / React-M 
- ReactM and DeployM have been upgraded to Expo 53.
- Added Tactacam scan and picture to Depoy-M.
- Added a password reset feature to Deploy-M. 

**Bug Fixes**

Platform 
- Addressed an issue with Smilio history not getting re-read when an agent was restarted.
- Fixed an issue where several Device Cluster could unexpectedly appear to be shared with the user.
- Network decode for MachineQ work-around empty string for numeric fields

Deploy-M / React-M
- Fixed a crash in the Deploy-M QR code scanner.
 
**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for June 5, 2025

**New Features**

- n/a 

**Feature Enhancements**

Platform 
- The Invite to the platform timeout has been extended to 1 week. 
- We’ve moved the Incident system into a plugin-based system to improve performance. 
- We’ve moved the Priority Management system into a plugin-based system to improve performance. 
- We’ve moved the Notification Send portion of the Incident Workflow system into a plugin-based system to improve performance. 
- Notification events are now sent upon the auto-resolve and on the staff-resolve of an Incident. 
- Consolidated the notification formats for invites, password resets, and new account welcome emails. 
- For EverSmart Clean, to better understand the level of activity in a washroom, we’ve added a Tag to allow users to state the number of stalls within a washroom. 

**Bug Fixes**

Platform 
- Fixed a difficult to reproduce issue in Rodent with time out errors that caused an indication of a connectivity problem in IoT Monitor. 
- Fixed an issue where adding new users via the Settings app did not preserve their roles.
 
**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for May 15, 2025

**New Features**

EverSmart 
- Added support for "suggested tags" feature to Routing / ReactM.  “Suggested tags” are a new feature where DeployM can “suggest” tags for certain tag levels for certain use cases. 

**Feature Enhancements**

Platform 
- Auto-resolve or Staff-resolve is now a config parameter of the bundler. 
- Clean 2.1 Notifications are upgraded for both Incidents and Alerts covering email, sms, and ReactM push notifications with more detail. 
- Notifier templates now align with auth invite/reset/welcome emails. 
- Moved the incident priority management system into a plugin. 
- Duration for invitations is extended to 1 week, duration for password resets is extended to 1 day.

EverSmart 
- Renamed default label for 4th tag from "Asset" to "Placement". 
- Fix so that the "root" account no longer shows up on every incident in the Routing app and now only human “assignees” should be visible in the Routing app. 
- Improvements to user handling "no name" users.  In places where “FirstName LastName” is displayed, then the user_id should be displayed. In places where “FirstName LastName <user_id>” is displayed, then the user_id should be displayed.  
- Users can now download a log of staff arrivals from EverSmart.  This is recording the arrival of staff to resolve issues or inspect washrooms. 
- An Overview page has been added to the Routing app. 
- Updated styling of the Routing app to match more the Eversmart and Settings app styling. 
- The "name" field for configs generated by Settings is now more meaningful. 
- Updated the Settings app to use a typeable character to delineate the "locations path" so that a user can type in the whole path on the Test Notifications and Create Work pages. 
- UI updated to simplify EverSmart Works and roll into EverSmart Clean as a new section called Incidents. 
- Various improvements to the UI and layout of the Routing app.

React-M 
- Replaced the labels in ReactM to say incident and not tasks nor todos nor tickets.  

**Bug Fixes**

Platform 
- Fixed issue with new user invited by admin getting error upon accepting invite. 
- Investigated cause and improved handling of “stuck” incidents. 
- Fixed an issue with the Create Account page in Microshare where the “special character“ checkbox was incorrectly checked off by using just a number and then the create account button would not enable. 
- Addressed a problem with Agents logging STOPPED when not required to do so. 
- Fixed a bug with Agent data being unpacked but not transformed. 
- Fixed a bug with adding and removing devices. 
- Addressed an issue with the drop menu UI for Organization, etc. being cut-off in the Manage view.
 
EverSmart 
- Switching from relative to custom time duration now processes Data Loss properly. 
- Fixed font for EverSmart Clean > Feedback > Trending > Feedback Summary > Feedback Summary > Feedback Percentage column which was much larger than for other columns in the table.

ReactM 
- Fixed a refresh token issue where users were seeing an error when they visit the app again after a long period of time.

DeployM
- Fixed an issue with the scanner showing a white box when tapping Rescan and navigating to the scanner screen. 

**Additional Resources**

Documentation 
- Various updates to documentation, help files and tutorials have been made for EverSmart Clean. 

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for April 3, 2025

**New Features**

- n/a 

**Feature Enhancements**

Platform
- Various general and Haglietner-specific Unpacker Improvements have been implemented.
- Updated API share POST to allow name/desc setting in body.
- Created a Lib Decoder for Kerlink Cockpit Gateway Status records.
- Created a Network Server Decoder for Kerlink Cockpit Gateway Health format.
- Updated bootstrap & jquery lib versions in composer & app-svc.

Wizard
- Update Wizard and Composer so "Network Provider" is set to "Actility ThingPark". 

**Bug Fixes**

Platform
- Fix made to better handle Roster updates.
- Fixed an issue with the Organization menu when on the Manage pages.
- Fixed a problem with Manage > App > Facts not being saved on creation or update.
- Fixed and issue with Manage > Rules not saving scopes.

Deploy-M v2.4.165
- Fixed an issue in Deploy-M where a user would find a specific device, then tap on the device and it would bring up a different device instead.
- Scanning a QR Code on Hagleitner Sensors in Deploy-M now displays the correct DevEUI. 
- Multiple bug fixes and enhancements including:
  -  Fixed the faulty Remove Device button
  -  Addressed the Configuration Warning error when Editing a tag
  -  Added the ability to Switch to the Dev server by LONG Press on the Microshare Inc. copyright on the login page 

**Additional Resources**

Documentation
- Various new and updated documents have been added to the public documentation area on the website for Tab Motion and Open/Shut Sensors, Skiply Clock-E devices and iFemtocell Gateway hardware.

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for March 13, 2025

**New Features**

- n/a 

**Feature Enhancements**

Platform
- "CC Admin on Create User" email template improved to specify the user account that the email link will activate.
- Outbound POST calls from a robot can now set 'Content-Type'. 

Wizard
- Added a leading space to the front of the name in the Eversmart Clean wizard to force the Suite App to prioritize the EverSmart Clean app. 

**Bug Fixes**

Platform
- Fixed an issue with legacy v1 unpackers pods running branch v1-unpacker feeding from records created by ingest into obj_packed topic.

EverSmart
- Fixed Rodent Overview page to show current week's data properly when there are no alerts.
- Fixed error with Settings > My Profile > Add Myself as User button.

**Additional Resources**

Documentation
- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for February 20, 2025

**New Features**

- n/a 

**Feature Enhancements**

Platform
- Improved the displayed message for bad guest links.

EverSmart
- In-line help has been added to all of the column headers in multiple EverSmart Dashboards.
- The Device Health "Issues" column is now “iconified” and display icons such as “wrench” for unconfigured devices that a user can click to see a dialog with more info on each issue.
- The Device Health - Data Loss Column has been improved to help users better understand the information being provided and reduce the anxiety and concern users are experiencing when viewing the data.
- The Device Health - Overview page - Basic View has had the number of columns shown to users reduced to mitigate any possible customer confusion and unnecessary concern.
- EverSmart now displays "category" bands on graphs.
- Various Touch Free Feedback Improvements including use of injected token window.accessToken, use of injected backboard ID, converting from using loc1, loc2,… to using an array, Output alert event AND meta event, update header to display the EverSmart header, upgraded Jquery to the latest and added support for SR01 vs SF01 - now both are supported. 

**Bug Fixes**

Platform
- Support has been added for Touch Free Feedback to the App-Svc codebase.

EverSmart
- Improved the battery consumption level values being used for the Skiply Clock-E devices in EverSmart.
- Improved the battery consumption level values being used for the Tabs Open/Close sensors in EverSmart.
- Improved the battery consumption level values being used for the Skiply Smilio-S devices in EverSmart.

**Additional Resources**

Documentation
- Add links to in product documentation files to doc site.
- EverSmart Release Notes: Solution needed to have in-product Release Notes point to online Release Notes to have a single point of truth and maintenance. 

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for February 5, 2025

**New Features**

- n/a 

**Feature Enhancements**

React-M v1.1.41
- Background Loading & Caching – Tasks now load and cache in the background, reducing loading times and improving app responsiveness.
- Automatic Task Refresh on Notification – When a new notification arrives, React-M will now automatically refresh tasks to ensure users always see the latest updates.
- Email & Password Validation on Submission – Prevents UI glitches by checking the validity of email-password combinations upon submission, reducing issues with keyboard behavior while typing.

**Bug Fixes**

React-M v1.1.41
- Optimized app performance with background caching, reducing lag and improving efficiency.
- Fixed an issue where invalid email-password combinations could cause UI inconsistencies during login.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for January 30, 2025

**New Features**

- n/a 

**Feature Enhancements**

Smart Office Masters
- The Trending and Realtime forms have been updated to use Window.accessToken now provided by the App service.  

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for December 18, 2024

**New Features**

- n/a 

**Feature Enhancements**

EverSmart 
- The Device Health > Battery “Voltage” now displays the last voltage reading to be the average over last 24 hours.

**Bug Fixes**

EverSmart
- In the Settings app, uploading users now also updates the role of existing users if needed.
- The table on the Smilio Device Health Trending page is now filled in properly when any state variable is selected for Today.  Each row should show one category as 100% and the other categories as 0%.
- Voltage and Battery Health now match up on the Device Health Overview page. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for November 27, 2024

**New Features**

- n/a 

**Feature Enhancements**

Platform
- The Wizard has been updated to set the use case of gateway for all rodent solutions to GATEWAY.  This will allow DeployM to show gateway specific tag labels. 

EverSmart 
- Settings App: New Rules should default to listen for incident alerts - event: "incident_start".   
  - New notification rules are now created by default to notify the user when an "Incident" is "Created".  This means that the first time an alert (like a rodent presence prediction) occurs, the user is notified, but they will not be notified for subsequent alerts at that same location until the incident is resolved (for example, times out). 
  - Grouping multiple alerts into a single incident (where it results in a single notification) is called "bundling".  The user can instead opt to be notified when individual alerts occur by choosing "Rodent Alert" instead. 
  - In the past, users could ONLY listen for the creation of the bundled incident. This type of notification rule used to be shown in the Settings app as "Rodent Alert".  Now that we differentiate between listening to the bundled "incident" vs listening for individual alerts, we have updated the meaning of "Rodent Alert" to mean getting notified for individual alerts.  This means that in order to achieve the same functionality that our users previously experienced, we have updated all existing "Rodent Alert" rules to "Incident Created" rules.
- Routing App: After performing an action on an incident, the loading spinner is now displayed only on the incident and the rest of the Routing app remains usable while the action gets processed in the background.
- Settings App: Added an option to Settings for an Admin to be CC’d on user invitation/creation for single and bulk invites to the platform.

**Bug Fixes**

Platform
- SMS exceptions no longer cause other notifications to fail.

**Additional Resources**

- EverSmart Rodent online help has been updated.

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for November 7, 2024

**New Features**

- n/a 

**Feature Enhancements**

Platform
- The User Creation API now allows the creation of an admin email to be CC'd on invitation emails. 
- Our /config endpoint now interprets “rules” consistently based on a combination of input of solution-type, alert-type, event-type, and locations array, factoring both asset account product default rules and at least one organizational override config record. 
- The Manage > Configs section now supports a JSON editor for creating, reading, updating, and deleting records. 

EverSmart 
- Settings dashboard > Test Notifications tab has been removed pending a redesign of the feature.    

**Bug Fixes**

Platform
- Under the Manage > Devices > Registered Devices section, we now indicate the sort order of the Device ID and Location Tags columns. 
- When clicking Cancel after editing in Manage > Devices > Registered Devices, changes are properly discarded as expected. 
- Text for long Org names displayed on cards under Manage > Apps no longer overrun the boundary of the cards. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for October 17, 2024

**New Features**

Platform
- An unpacker for the Xibu Hagleitner level sensor has been created.
- The Xibu Hagleitner Paper Towel Sensor has completed the development certification process.

**Feature Enhancements**

Platform
- The processes API has been enhanced to retrieve all details within a Task.

EverSmart
- The Exit to Console menu item is only displayed to Microshare users and admins.   
  - By default, Exit to Console should now be available for: 
    - users whose email ends with @microshare.io 
    - users whose email begins with “ms_admin@” 
    - users whose email begins with “root@” 
    - users whose isAdmin is true 
    - users whose roles contains “admin” 
  - If hideExitToConsoleForAdmin is set to true, then Exit to Console should ONLY be available for:  
    - users whose email ends with “@microshare.io” 
    - users whose email begins with “ms_admin@” 
    - users whose email begins with “root@”

   
- In the UI, in the “Summary” tiles on the Overview page and in Device Health, we have updated the description/naming of un-twinned devices to better reflect their status.
  - Un-twinned devices are no longer classed as “Unhealthy” by default. The devices are now described as “Unconfigured”. This will aid new users in understanding the information being displayed to them.   
  - Only devices with issues e.g. low battery will now be described as Unhealthy. 
  - These were the devices previously set-up with the "dummy" devEUI 00-00-00-00-00-00 (aka “unconfigured devices”). See in-app Help document for more details. 

**Bug Fixes**

Platform
- Identities in the Composer > Switch Org dropdown are now listed alphabetically.
- When viewing the Composer > Forms > Info slide-out (i), the Owner, Imported By, and Created By fields are now filled in.
- The Composer > App Update screen now displays the standard Update App surround and shows the app id with Copy-to-Clipboard enabled.
- Composer > Keys auth access for an account no longer incorrectly persists across a user signing out and signing back in as a different user.
- The Device Cluster > Quick Update loading icon now appears when expected.
- When clicking the Composer > Device Cluster > Network > Create button only a single call is made now.  This improvement has been made in order to reduce the load on the server and time on the browser to populate the drop-down.
- The API has been updated to automatically remove trailing spaces in all location tags (e.g. Loc1, Loc2, Loc3, Loc4) for devices in a Device Cluster.

EverSmart
- When refreshing an EverSmart app within the Suite app, the active page is now preserved.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for September 26, 2024

**New Features**

- n/a

**Feature Enhancements**

Platform
- Console > Devices > Device IDs now persist when being edited.

EverSmart
- Suite App > Exit to Console redirects to console only in appropriate context – i.e. user is not a rodent user without Admin privileges.
- In the Settings app you can now pick if a new user is an Admin, Pro or Lite user. 
Important Note!!!: There is a request to have multiple Admins.  At this point the above features related to this are incomplete, so please avoid using them for now.    

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

---------------------------------------

## Release Notes for September 5, 2024

**New Features**

- n/a

**Feature Enhancements**

Platform
- Composer Search functionality is no longer case sensitive.
- Console allows escape from forced suite app start.
- Rule Editor now has "Configs", “Profiles” and “Streams” in the "RESOURCE TYPE" dropdown.
- When deleting a device in a Device Cluster, the prompt upon clicking Delete now includes the device tags.
- The search functionality of Composer has been updated and expanded with the ability to search on the Dev EUI.
- The Device Cluster CSV upload format no longer requires only semi-colons and now accepts comma delimited CSV files as well.

EverSmart
- Implemented a bulk user upload feature in the Settings app to assist in adding large numbers of users.

DeployM 
- The “Scan a real device” prompt message in Deploy-M has been updated to “! Scan a physical device’s QR code” this is intended to assist users in understanding the next action to take when starting to use Deploy-M.  
- The QR code icon has been updated to a camera icon to make it clearer that this starting point for a new user to begin at. 
– Deploy-M’s Search functionality now has the ability to search on the the data, such as a name, used in a tag field. So, for a User they could now search on a site name e.g. Gianni’s or Pizzeria to more quickly find the correct device in a device cluster. 
- There is now a warning when deleting a device in Deploy-M. 
- Improved the "purpose" string used to ask the user permission to access location data. 
- Improved usability and styling to give an improved look and feel 
– Deploy-M now provides a pre-populated list of suggestions for tag values where appropriate. This provides suggested terminology for users to select when tagging a device in the field and will hopefully deliver more consistency in tagging descriptions.  

**Bug Fixes**

Platform
- Device Cluster Downloads now support leading zeros in tags.

DeployM
- Users can now clearly see any Configuration tag in DeployM as it is being typed. 
- It’s now easier to view, scroll and select from the Language selection list in DeployM on iPhone. 
- Fixed issue when editing the tags out of order (for example - editing tag 3 before tag 1) where the “new tag” would incorrectly become the first tag instead of the third tag.  

**Additional Resources**

EULA
- Our EULA has been updated.

**Ops**

- n/a


---------------------------------------

## Release Notes for August 15, 2024

**New Features**

- n/a

**Feature Enhancements**

- n/a 

**Bug Fixes**

Platform
- Upon Device Cluster re-authorization, fields (except for password) are now pre-populated based on the currently logged-in user.
- Manage navigation menu is hidden unless a user is an admin or a Microshare employee.
- Fixes outstanding security patches for various CVEs for 3rd party libraries.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for July 24, 2024

**New Features**

- n/a

**Feature Enhancements**

Platform
- We've added api.microshare.io to support /Link API to GET/POST/PUT/DELETE that supports the ability for apps to be shared with unauthenticated guests.  We’ve deprecated app.microshare.io /links2 endpoints which have been used to accomplish the same thing functionally.
- Web documentation: the Postman API Examples for Links, Apps, Icons and Forms has been updated.

EverSmart
- Saved Filters are now available for a user across all devices and browsers. 

**Bug Fixes**

Platform
- Pagination has been implemented for Devices, Robots, Views and Rules to address lag and/or crashes when updating 1500+ Device Clusters at a time.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for May 23, 2024

**New Features**

- n/a

**Feature Enhancements**

EverSmart
- EverSmart now persists the value of the Time range filter, except when the duration is larger than 14 days.
- The “IoT Monitor” button in the EverSmart Alert - Rodent Control Overview page has been renamed to “Device Health”.
- Individual users can now save custom filter settings in the EverSmart dashboards.  See the “Saved Filters” option in the user interface. 

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for April 11, 2024

**New Features**

- n/a

**Feature Enhancements**

- n/a

**Bug Fixes**

DeployM
- The default number of Gateways and Devices for a new Rodent instance in DeployM has been updated to be 2 Gateways and 12 Devices.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for March 20, 2024

**New Features**

- n/a

**Feature Enhancements**

EverSmart
- A magnet swipe/touch against a Smilio A device is recognized as a button push and is associated with the service request button push. The magnet touch closes the incident / event.

**Bug Fixes**

DeployM
- Resolved issue with DeployM sometimes reverting the DevEUI for a previously updated device within a Device Cluster. 
- Fixed a stability issue related to tapping the map icon in DeployM on Android devices. 
- Addressed a problem on Android devices with entering data for tag 4 on Gateways. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------


## Release Notes for February 7, 2024

**New Features**

- n/a

**Feature Enhancements**

Suite App

- The tab name and icon of a user’s browser page updates to display the current application as users switch between applications in the Suite App.

EverSmart

- EverSmart now displays the same icon in the upper right corner of the dashboard interface as is displayed on the apps list. This creates a more consistent app branding style.

DeployM

- The “Use development/training server” button has been moved from the sign-in screen to the Settings page.

EverSmart and DeployM

- Labels (aka headings) for the location tags displayed in the EverSmart dashboard now align with the labels as displayed in DeployM. If the labels changed unexpectedly in this new release, please contact support@microshare.io.

**Bug Fixes**

- Moving from Suite App to any app and then clicking Back in browser immediately returns the user to the Suite App as expected.
- The operators for the Traffic data field in EverSmart Clean have been updated and now include sum, average, max, sumMean, and sumMax. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------


## Release Notes for December 14, 2023

**New Features**

Data

- Our systems now annotate sensor GPS data (if available from a device) to the data stream.

Manage > Devices

- All asset types now include ownership details in the info panel.  Simply select a Device Cluster and click the “i” Info button.  Ownership information then appears in the slide-out panel on the right side of the screen. 

**Feature Enhancements**

- n/a

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------


## Release Notes for November 20, 2023

**New Features**

The following changes have been completed to allow EverSmart Alert to meet demands for a “push button” service request. This solution is an MVP and is at an Alpha status.

- EverSmart Alert now supports One-Button alarm sources. Initially, this will be with Smilio A devices, but other hardware devices are being looked at and could be considered based on the use case.
- Any of our Smilio A devices can now be configured as a 1-button device with support for Service Requests (Push Button requests).

IoT Monitor

- We now show the faults from the Indoor Foot Traffic devices on the Overview page. This provides better visibility/awareness so that end users can more easily find and address hardware issues reported by these sensors.

**Feature Enhancements**

IoT Monitor

- Device Health no longer reports devices as “Unhealthy” when they are not visible in the UI.
- Change how IoT monitor interprets device health from Smilio A devices.
- To ensure IoT Monitor correctly shows healthy devices as healthy, Intermittency is no longer used as a metric for these devices when determining device health. We now handle Smilio device health as a special use case.
- Poor Signal to Noise ratio is no longer a primary metric for device health as some amount of weak connectivity is expected in real-world environments.

- Other minor improvements in EverSmart include:
  - Renamed field “Missing Records” as “Data Loss”
  - Renamed field “Total Records” as “Expected Records”
  - Added “Realtime” tab

Platform Authorization

- A show/eye icon has been added to the password input field on login so that end users may now choose to unmask their password when typing it.
- To improve the login screen, the Organization (Optional) field is no longer displayed on the log-in screen.
- Login UI now displays which "special characters" are allowed and properly allows/disallows special characters as indicated.

Suite App

- We've added a new menu item in the "hamburger" menu of the Suite App. "Exit to Console" is an advanced menu item that now appears at the bottom of the menu. Users can click on this link to exit directly to the Microshare Management Console with all of the usual advanced features. To return to the Suite App sandbox, users can either use the "back" functionality in their browser, or they can click on the "Dashboard" item in the top menu bar, or they can click back on the Suite App icon.

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a

  
