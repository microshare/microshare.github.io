---
layout: docs
title: How To Configure Product Line Robots
toc: true
---

## Warning

One of the guiding principles of good robot configuration is to guard against overly global rules that operate on arbitrary data that might happen to be shared with the robot&#39;s owner. It&#39;s probably a good practice to use loc1s and/or metaTags to &quot;white list&quot; the data and restrict the robot to only process the share records it&#39;s interested in.

## Value Monitor Robot

### Overview

The _Value Monitor_ robot can be configured to watch the value of a specific field in new share records created in a recType. If the value is greater than a specified maxValue OR less than a specified minValue OR matches one of a set of values, then a notification can be sent. Notice that if you do not specify a maxValue, minValue, or values parameter, then the alert will be sent regardless of the value of a field.

The robot can be configured to &#39;throttle&#39; the messages so they are sent less frequently. It can also be configured to send to different user(s) (or not at all) depending on the time of the day or day of the week or location or metaTags.

Note – due to design decisions, this robot is optimized for configuration that says:

&quot;if a _value_ is OUTSIDE a range, then send an alert&quot;

&quot;if the _time_ that this share record happened was WITHIN a time range, then send an alert&quot;

If you want to configure a robot to send an alert when a _value_ is WITHIN a range or when the _time_ is OUTSIDE a time period, it is possible but requires two rules.

### Create Robot Specific Configuration View in Client Account

In the account where the robot will be authorized, create a new _view_ to hold the _custom_ settings which will be specific to the client

  - **Name** - enter &quot;\_\_\_ Value Monitor Config&quot; where \_\_\_ is the name of the thing you are monitoring
  - **Record Type** - io.microshare.config.robot
  - **Static JSON** - see the example json files in the accompanying folder and/or the next section for more details
    - **notificationRules** – required
    - **notificationLists** – required
    - **defaultNotificationRule** – optional
- **Static JSON**
  - **notificationLists** – (required) one or more lists of addresses keyed by a listName:

`"<listName>": ["email:email1@company1.com", "email:email2@company2.com", …]`

    - Supported formats are email, sms, or can also be a reference to another list. For example

`"management":["email:manager@company.com", "sms:+16175555555"],`

`"cleaningStaff": ["email:custodian@company.com", "sms:+19785555555", "list:management"]`

  - **notificationRules** - (required) An ordered list of rules which filter the share records and send out notifications if given criteria are met. Once a matching rule is found, the notifications for that rule are sent and no further rules are processed. Each rule has one or more of the following fields:
    - Fields which filter the share records
      - **loc1s** – (optional) the loc1 of the share record must be included in this array in order for it to match the rule
      - **loc2s** - (optional) the loc2 of the share record must be included in this array in order for it to match the rule
      - **loc3s** - (optional) the loc3 of the share record must be included in this array in order for it to match the rule
      - **metaTags** - (optional) the metaTags of the share record must include at least one of the elements in this array in order for it to match the rule
      - **devEUIs** - (optional) the devEUI of the share record must be included in this array in order for it to match the rule
      - **fieldName** - (required if and only if _minValue_, _maxValue_, or _values_ is present) the name of the field in the share record if the share records will be filtered by value
        - **maxValue** – if the value of the field is greater than this, then it matches the rule
        - **minValue** – if the value of the field is less than this, then it matches the rule
        - **values** – if the value of the field is contained within this list of values, then it matches the rule.
        - Note that _maxValue_ and _minValue_ can be used in the same rule, but _values_ should NOT be used with _minValue_ or _maxValue_.
      - **days** - (optional) the day of the week (in English) that the share record was created must be included in this array in order for it to match the rule. If this is present, _timezone_ should be included and set to the local timezone where the data is being generated.For example:
        - [&quot;Saturday&quot;, &quot;Sunday&quot;]
      - **startTime** - (optional) the share record must be created _after_ this time in order for it to match the rule. If this is present, _timezone_ should be included and set to the local timezone where the data is being generated. For example
        - 9:00
        - 9
        - are both considered to be 9:00 AM
      - **endTime** - (optional) the share record must be created _before_ this time in order for it to match the rule. If this is present, _timezone_ should be included and set to the local timezone where the data is being generated. For example
        - 17:00
        - 17
        - Are both considered to be 5:00 PM
      - **timezone** - (used if _days_, _startTime_, or _endTime_ is present) the timezone (in _tz_ format) used to determine the local time when the original payload should be considered to have occurred.
        - See [https://en.wikipedia.org/wiki/Tz\_database](https://en.wikipedia.org/wiki/Tz_database) for a list of timezones in tz fomat
    - **maxFrequencyInMinutes** – (optional) throttles the emails (keyed on location tags) so that once an email is sent regarding this location, another one will not be sent _for this location_ for at least this number of minutes
    - **clientListName** – (required) the name of the email list to send client emails
    - **supportListName** – (optional) the name of the email list to send support emails.
      - Support emails include all same information sent to the clients except the org name is prepended to the subject line and some additional debugging information is appended to the body
    - **subject** – (required) a pseudo template string used to generate the subject of the email message
      - JavaScript can be inserted into the string that will be eval&#39;d when the message is ready to be sent.
      - Anything typed within $&lt; &gt; will be eval&#39;d. If a variable exists in the code with that name, it will be evaluated. Examples include
        - loc1, loc2, loc3
        - Any member field of the rule (must be prepended with &#39;rule.&#39;) such as rule.minValue, rule.maxValue, etc
        - Any member field or subfield of the share record (must be prepended with &#39;data.&#39;), such as data.temp
        - Examples:
          - &quot;Temperature Alert occurred in $&lt;loc1&gt;, $&lt;loc2&gt;, $&lt;loc2&gt;&quot;
          - &quot;Temperature Reading of $&lt;data.temp&gt; exceeded maximum threshold of $&lt;rule.maxValue&gt;&quot;
      - This is very similar to the HTML6 template string feature EXCEPT I had to change to use angle brackets instead of curly braces because true template strings are already eval&#39;d when the config view is retrieved.
    - **body** – (required) a pseudo template string used to generate the body of the email or SMS message. Same rules apply as for _subject_ (see above)
  - **defaultNotificationRule** – (optional) - same settings as for any notification rule. These settings are applied first to each rule, then the individual settings are applied. Example usage – setup the default rule with most of the settings (such as subject, body, fieldName, maxValue, minValue, metaTags, etc), then use the individual notificationRules to:
    - Alert different people based on the day of the week.
    - Alert different people based on loc1.
    - Alert different people based on the value of the event ie &quot;good&quot; goes to an empty list, &quot;leak&quot; goes to facilities, and everything else goes to custodian.
    - If you have only one rule, the defaultNotification rule is not necessary

### Create Robot in Client Account

Create the robot in the &#39;right&#39; account/ identity and authorize it with an account/ identity that has access to the data that needs to be monitored.

- Using a GitHub client
  - Check out the Smart Office Masters repository
  - Find the robot in the robots/value\_monitor folder
    - robot.value\_monitor.js
  - Paste the ID of the client specific configuration view (you created in the previous step) into the &quot;configViewID&quot; variable at the top of the file.
- In the Microshare platform, log in to the client&#39;s account.
  - For each robot above, copy the contents of the corresponding file in GitHub, then create a new Robot in the client account:
    - **Name** -
      - \_\_\_\_ Monitor Robot, v2.10
      - Where \_\_\_ is the name of the field you are monitoring (&quot;Temperature&quot;, etc)
    - **Description** -
    - **Active** - ON
    - **Record Type** - MUST match the target recType of the device cluster
    - **Permission Scopes**
      - Leave as is - turn ON _Share Read_, _Share Query_, _Share Execute_
    - **Script** - paste in the script from the respective GitHub file

#### Now test it!

## Rate Monitor Robot

### Overview

The _Rate Monitor_ robot is a more generic version of the legacy &quot;Motion Robot&quot; which monitors the rate of motions reported by one or more sensors and notifies users when a high rate is detected. The Rate Monitor robot is configured to monitor an arbitrary _fieldName_ in new share records created in a recType. For example, set the _fieldName_ to device.count if you are implementing the legacy functionality with the Tracknet motion sensor. If the value changes by more than _rateThreshold_ in _thresholdDurationInMinutes_ minutes, then the threshold has been exceeded, and the rest of the notification rules are applied. Emails are throttled so that they are not sent more often than _maxFrequencyInMinutes_ minutes per device. Similarly to the Value Monitor robot, you can configure the Rate Monitor robot to notify certain people at certain times, or for certain locations, or for specific device ids, etc. using the notificationRules.

One implementation anomoly to note is that the robot only tracks the rates for share records that match at least one of the notification rules. Suppose the client wants to be notified if someone walks around the office after 9:00 PM (aka 21:00). Suppose your rateRule is:

&quot;rateThreshold&quot;: 30,

&quot;fieldName&quot;: &quot;device.count&quot;,

&quot;maxFrequencyInMinutes&quot;: 120,

&quot;thresholdDurationInMinutes&quot;: 60

If you have a single notificationRule with a startTime of 21:00, that&#39;s the time the robot starts tracking the readings. Consider the following example:

| Time | Value | Rate | Result |
| --- | --- | --- | --- |
| 20:45 | 1000 | NA | Before startTime so ignored |
| 21:15 | 1030 | NA | Value recorded |
| 21:45 | 1041 | 1041 – 1030 = 11 | Threshold NOT exceeded |
| 22:14 | 1051 | 1051 – 1030 = 21 | Threshold NOT exceeded |
| 22:16 | 1062 | 1062 – 1041 = 21 | Reading at 21:15 is more than 60 minutes ago, so it&#39;s discarded. Rate in last 60 minutes is still 21. Threshold NOT exceeded |
| 22:44 | 1071 | 1071 – 1041 = 30 | Threshold exceeded! Notifications sent |
| 22:59 | 1106 | 1106 – 1051 = 55 | Threshold exceeded! Notifications are throttled since last email went out only 15 minutes earlier (less than 120 minutes ago). Notifications NOT sent. |

Perhaps unexpectedly, adding another rule might change the outcome of the first rule. If you configure a rule to email a notification to the front desk from 6:00 PM (18:00) to 9:00 PM and then still have the next rule to page the security team from 9:00 PM to midnight, then the reading at 20:45 would match a rule and thus it would be recorded and not ignored. Then the reading at 21:15 of 1030 would show a rate of 30 and would trigger the notification at that time.

### Create Robot Specific Configuration View in Client Account

In the account where the robot will be authorized, create a new _view_ to hold the _custom_ settings which will be specific to the client

  - **Name** - enter &quot;\_\_\_ Rate Monitor Config&quot; where \_\_\_ is the name of the thing you are monitoring ie &quot;Motion&quot;
  - **Record Type** - io.microshare.config.robot
  - **Static JSON** - see the example json files in the accompanying folder and/or the next section for more details
    - **fieldName** – required
    - **rateRule** – required
    - **notificationRules** – required
    - **notificationLists** – required
- **Static JSON**
  - **rateRule -**
    - **fieldName** – (required) which field in the share record to monitor? Reference subfields using dot notation such as &quot;_device.count&quot;_.
    - **rateThreshold** – (required) how much the field has to change (during the duration) in order for the threshold to be met
    - **thresholdDurationInMinutes** – (required) the duration of the time period to measure the rate.
    - **maxFrequencyInMinutes** – (optional) throttles the emails (keyed on device ID) so that once an email is sent regarding this device id, another one will not be sent _for this device id_ for at least this number of minutes. Note that this is different from the value monitor, which keys by location.
  - **notificationLists** – (required) same as for Value Monitor robot
  - **notificationRules** - (required) An ordered list of rules which filter the share records and send out notifications if given criteria are met. Once a matching rule is found, the notifications for that rule are sent and no further rules are processed. The notificationRules for the Rate Monitor robot are the same as for the Value Monitor robot EXCEPT that _fieldName_, _minValue_, _maxValue_, and _values_ are not used. Each rule can have one or more of the following fields:
    - Fields which filter the share records
      - **loc1s** – (optional) the loc1 of the share record must be included in this array in order for it to match the rule
      - **loc2s** - (optional) the loc2 of the share record must be included in this array in order for it to match the rule
      - **loc3s** - (optional) the loc3 of the share record must be included in this array in order for it to match the rule
      - **metaTags** - (optional) the metaTags of the share record must include at least one of the elements in this array in order for it to match the rule
      - **devEUIs** - (optional) the devEUI of the share record must be included in this array in order for it to match the rule
      - **days** - (optional) the day of the week (in English) that the share record was created must be included in this array in order for it to match the rule. If this is present, _timezone_ should be included and set to the local timezone where the data is being generated.For example:
        - [&quot;Saturday&quot;, &quot;Sunday&quot;]
      - **startTime** - (optional) the share record must be created _after_ this time in order for it to match the rule. If this is present, _timezone_ should be included and set to the local timezone where the data is being generated. For example
        - 9:00
        - 9
        - are both considered to be 9:00 AM
      - **endTime** - (optional) the share record must be created _before_ this time in order for it to match the rule. If this is present, _timezone_ should be included and set to the local timezone where the data is being generated. For example
        - 17:00
        - 17
        - Are both considered to be 5:00 PM
      - **timezone** - (used if _days_, _startTime_, or _endTime_ is present) the timezone (in _tz_ format) used to determine the local time when the original payload should be considered to have occurred.
        - See [https://en.wikipedia.org/wiki/Tz\_database](https://en.wikipedia.org/wiki/Tz_database) for a list of timezones in tz fomat
    - **clientListName** – (required) the name of the email list to send client emails
    - **supportListName** – (optional) the name of the email list to send support emails.
      - Support emails include all same information sent to the clients except the org name is prepended to the subject line and some additional debugging information is appended to the body
    - **subject** – (required) a pseudo template string used to generate the subject of the email message
      - JavaScript can be inserted into the string that will be eval&#39;d when the message is ready to be sent.
      - Anything typed within $&lt; &gt; will be eval&#39;d. If a variable exists in the code with that name, it will be evaluated. Examples include
        - loc1, loc2, loc3
        - Any member field of the rule (must be prepended with &#39;rule.&#39;) such as rule.minValue, rule.maxValue, etc
        - Any member field or subfield of the share record (must be prepended with &#39;data.&#39;), such as data.temp
        - Examples:
          - &quot;Temperature Alert occurred in $&lt;loc1&gt;, $&lt;loc2&gt;, $&lt;loc2&gt;&quot;
          - &quot;Temperature Reading of $&lt;data.temp&gt; exceeded maximum threshold of $&lt;rule.maxValue&gt;&quot;
      - This is very similar to the HTML6 template string feature EXCEPT I had to change to use angle brackets instead of curly braces because true template strings are already eval&#39;d when the config view is retrieved.
    - **body** – (required) a pseudo template string used to generate the body of the email or SMS message. Same rules apply as for _subject_ (see above).

### Create Robot in Client Account

Create the robot in the &#39;right&#39; account / identity and authorize it with an account / identity that has access to the data that needs to be monitored.

- Using a GitHub client
  - Check out the Smart Office Masters repository
  - Find the robot in the robots/rate\_monitor folder
    - robot.rate\_monitor.js
  - Paste the ID of the client specific configuration view (you created in the previous step) into the &quot;configViewID&quot; variable at the top of the file.
- In the Microshare platform, log in to the client&#39;s account.
  - For each robot above, copy the contents of the corresponding file in GitHub, then create a new Robot in the client account:
    - **Name** -
      - \_\_\_\_ Rate Monitor Robot, v2.10
      - Where \_\_\_ is the name of the field you are monitoring (&quot;Motion&quot;, etc)
    - **Description** -
    - **Active** - ON
    - **Record Type** - MUST match the target recType of the device cluster
    - **Permission Scopes**
      - Leave as is - turn ON _Share Read_, _Share Query_, _Share Execute_
    - **Script** - paste in the script from the respective GitHub file

#### Now test it!

## Scheduled Notification Robot

### Overview

The _Scheduled Notification_ robot is used to send notifications (emails or SMS messages) on a scheduled basis. Currently the only use case for this is as an accompaniment to the &quot;Electronic Attendance Records&quot; app. The robot is configured to send a weekly email to the client, who can then click the link in the email to download the weekly &quot;Electronic Attendance Records&quot;.

### Create Robot Specific Configuration View in Client Account

In the account where the robot will be authorized, create a new _view_ to hold the _custom_ settings which will be specific to the client

  - **Name** - enter &quot;\_\_\_ Value Monitor Config&quot; where \_\_\_ is the name of the thing you are monitoring
  - **Record Type** - io.microshare.config.robot
  - **Static JSON** – also see the example json files
    - **notificationRule** – required
      - **subject** – same as above
      - **body** – same as above
        - &quot;allowed&quot; variables are _now_, _notificationRule_, and _url_
      - **timezone** – used to output a &#39;date&#39; field in the url params
      - **addresses** – a list of email and sms addresses. Note that unlike with the other robots, you cannot include a reference to a list of emails (ie &#39;list:myList&#39; is never valid) since this is effectively a single notification, there are not lists to refer to.
      - **url** – used to initialize a url variable
      - _Optional Parameters_
        - Any additional arguments you include in the notification rule will be appended as url parameters to the end of the url (for example, if you include &quot;fieldName&quot;: &quot;fieldName&quot;, then the url will become \&lt;url\&gt;?fieldName=fieldValue). If the url is for the &quot;Electronic Attendance Records&quot; application, then you can include any or all of the arguments valid for this app, such as autoDownload, downloadXLSX, excludeSaturday, excludeSunday, and eventName.

This robot is optimized to send an email with a url in it. The code will build this url automatically including adding the additional arguments you give it in the notificationRule to the end of the url as url parameters. But, you must include the url in the body in order for it to be included in the notification. That is NOT done automatically. Note that the &#39;date&#39; argument IS added as a URL parameter automatically to the end of the url as a convenience.

For example:

&quot;body&quot;: &quot;Click this link to download your report.&lt;br&gt;&lt;br&gt;&lt;a href=&quot;$&lt;url&gt;&quot;&gt;Weekly Attendance Report&lt;/a&gt;.&quot;,

### Create Robot in Client Account

Create the robot in the &#39;right&#39; account / identity and authorize it with an account / identity that has access to the data that needs to be monitored.

- Using a GitHub client
  - Check out the Smart Office Masters repository
  - Find the robot in the robots/scheduled\_notification folder
    - robot.scheduled\_notification.js
  - Paste the ID of the client specific configuration view (you created in the previous step) into the &quot;configViewID&quot; variable at the top of the file.
- In the Microshare platform, log in to the client&#39;s account.
  - For each robot above, copy the contents of the corresponding file in GitHub, then create a new Robot in the client account:
    - **Name** - (example)
      - \_\_\_\_ Scheduled Notification Robot, v2.10
      - Where \_\_\_ is the name of the app you are monitoring (&quot;Attendance&quot;, etc)
    - **Description** -
    - **Active** - ON
    - **Record Type** - not applicable
    - **Permission Scopes**
      - Leave as is - turn ON _Share Read_, _Share Query_, _Share Execute_
    - **Script** - paste in the script from the respective GitHub file

#### Now test it!

## Smilio Robots

### Overview

The Smilio device sends payloads which report the total counts of button presses for each button on the device since the last time the device was reset. Let&#39;s call this single payload _device data_. Unfortunately, the device data alone does NOT report which button was actually pressed – one must compare the current payload with the previous payload to figure that out. If we do this, we can generate a new shareRecord with the button press information – let&#39;s call this a _device event_. The device event does not report what the meaning of the button was when the user pressed it – such as &quot;Low soap&quot;. If we look this up and use it to generate a new shareRecord, let&#39;s call this a _business event_.

- Smilio Robot 1 – listens for a _device data_ share record (generated by the Smilio unpacker) on the unpackedRecType, compares it to most recent device data, and generates (zero, one or more) _device events_ – creating a new shareRecord with different fields than the old one - and saving it/them to a composite recType – &lt;unpackedRecType&gt;.event
- Smilio Robot 2 – listens for a _device event_ share record on the &lt;unpackedRecType&gt;.event recType and translates it to a _business event_ - ie a new shareRec in a new composite recType – &lt;unpackedRecType&gt;.event.meta
- Smilio Robot 3 – NOTE THIS IS DEPRECATED – please use the Value Monitor Robot instead

### Prerequisites for New or Existing Installs

- Read the requirements or SOW
  - Which apps are you making with which devices, etc?
- Configure the client accounts and identities.
  - Make sure you understand which account/identity will own the data. The robots you create should be authorized in the account and identity that is supposed to own the data. You may need to create share rules (as specified by the SOW) to share the new recTypes with other groups in the organization.

### Create Share Rules in Assets Account

**NOTE SKIP THIS STEP FOR NOW – WE ARE SHARING THE VIEWS GLOBALLY IN THE SHORT TERM**

Share the common views with the client. The robots require access to two different common views owned by the assets account.

- Log into the assets account ([assets@microshare.io](mailto:assets@microshare.io) in the default identity) and create two share rules to share the views to the customer organization. FYI, the account which authorizes the robots is the specific one that needs access to the common views, so a more specific share rule than the ones specified below would also work.
  - **Active** - Check ON
  - **Resource Type** - View
  - **Operations** - _Read, Query_, and _Execute_
  - **Organization** - pick _Specific Value_, then type in the customer organization
  - For 1st share rule
    - **Name** – enter &quot;Share Query Views with \_\_\_&quot; where \_\_\_ is the client organization
    - **Record Type** - io.microshare.query
  - For 2nd share rule
    - **Name** – enter &quot;Share Config Views with \_\_\_&quot; where \_\_\_ is the client organization
    - **Record Type** - io.microshare.config

### Create Client Specific Smilio Configuration in Client Account

- In the account where the robots will be authorized, create a new _view_ to hold the _custom_ settings which will be specific to the client
  - **Name** - enter &quot;\_\_\_ Smilio Config&quot; where \_\_\_ is the client organization
  - **Record Type** - io.microshare.config
  - **Static JSON** - see the example json files in the accompanying folder and/or the next section for more details
    - **latestSmilioReadings** - required by Smilio Robot 1
    - **backboardRules** – required by Smilio Robot 2
    - **emailLists** – required by Smilio Robot 3
    - **emailRules** – required by Smilio Robot 3
- **Static JSON**
  - **latestSmilioReadings**
    - **backDays** – how many days back to search for &#39;most recent&#39; reading from each Smilio device
    - **viewRecType** – io.microshare.query (recType of query view used to search for latest readings)
    - **viewID** – 5e54746146e0fb00284a8229 (ID of query view used to search for latest readings)
    - **loc1s** – array of strings used as a &#39;white list&#39; to filter in the shareRecs the robot will handle. This is NOT optional as this is only filtering mechanism in use by this robot.
  - **backboardRules** - backboard rules are a list. When Smilio Robot 2 is triggered by a device event shareRecord, the robot searches the backboardRules to find a backboard for the shareRecord. The first backboardRule in the backboardRules list that matches is the one it uses. If it doesn&#39;t find a backboardRule, the robot exits WITHOUT creating a new _business event_ shareRecord. Skipping records that do not have a matching backboardRule is normal functionality and is not considered an error.
    - **backboardRectype** – (required - please use _io.microshare.config.backboard_) the recType used to look up the backboard config view
    - **backboardId** – (required) the id of the config view for the target backboard

NOTE – the format of the backboard config view changed in version 2.7 of the product line. Examples of the format of this view can be found in the _Example Touchfree Configuration_ folder. For detailed instructions, see the _Backboard View_ section of the &quot;Instructions – Apps&quot; document.

- **loc1s** – (optional) the loc1 of the share record must be included in this array in order for it to match the rule
- **loc2s** - (optional) the loc2 of the share record must be included in this array in order for it to match the rule
- **loc3s** - (optional) the loc3 of the share record must be included in this array in order for it to match the rule
- **metaTags** - (optional) the metaTags of the share record must include at least one of the elements in this array in order for it to match the rule
- **events** - (optional) the event of the share record must be included in this array in order for it to match the rule
- **devEUIs** - (optional) the devEUI of the share record must be included in this array in order for it to match the rule
- **days** - (optional) the day of the week (in English) that the share record was created must be included in this array in order for it to match the rule. For example:
- [&quot;Saturday&quot;, &quot;Sunday&quot;]
- **timezone** - (required if and only if _days_ is present) the timezone used to determine in which day the GMT time of the original payload should be considered to have occurred.
- **language** - (optional) the language used to generate the label in the generated business event. If no language is provided here or if the target language is not found in the backboard, then the language is defaulted to &#39;en&#39; for English. Use the two character language code from the ISO 639-1 standard. See [https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
- **emailLists** – one or more lists of emails keyed by an emailListName:

`"<emailListName>": ["email1@company1.com", "email2@company2.com", …]`

  - **emailRules** -
    - **clientEmailListName** – the name of the email list to send client emails
    - **supportEmailListName** – the name of the email list to send support emails.
      - Support emails include all same information sent to the clients except the org name is prepended to the subject line and some additional debugging information is appended to the body
    - (same options as noted above in backboardRules)
- Once you have created your client specific configuration view, save it, then copy its ID to your clipboard.

#### Tips / Tricks for Client Specific Configuration

Re-use the same Support Email List

Save yourself configuration hassle by configuring each rule to use the same email list for the supportEmailListName.

Configure a &#39;Black List&#39;

Suppose the client wants to establish some criteria where they do NOT want any email such as from the &#39;Great job&#39; events from the 5 button Smilio. Then they want a complex schedule of emails for all other events. Instead of trying to come up with the exhaustive list of &#39;all the other events&#39; and adding this to each rule to screen out the &#39;Great job&#39; events, use a &#39;black list&#39; approach. Filter out the &#39;black list&#39; events first and configure them to send email to an empty email list. For example configure a rule like this to be the FIRST rule in the emailRules:

{% highlight java %}
{

&quot;events&quot;: [&quot;good&quot;],

&quot;clientEmailListName&quot;: &quot;noEmail&quot;,

&quot;supportEmailListName&quot;: &quot; noEmail &quot;

}

{% endhighlight %}
And configure an empty email list in the emailLists

`"noEmail": []`

The end result is that no email will ever be sent regarding a &#39;Good Job&#39; event no matter what the rest of the emailRules say.

### Create Robots in Client Account

Create the three Smilio Robots and authenticate them with the account / identity that is supposed to own the client&#39;s data.

- Using a GitHub client
  - Check out the Smart Office Masters repository
  - Find the three robot files in the robots/smilio folder
    - robot.smilio\_1\_devevent.js
    - robot.smilio\_2\_busevent.js
    - robot.smilio\_3\_alert.js
  - Paste the ID of the client specific configuration view (you created in the previous step) into the &quot;configViewID&quot; variable at the top of each file.
- In the Microshare platform, log in to the client&#39;s account.
  - For each robot above, copy the contents of the corresponding file in GitHub, then create a new Robot in the client account:
    - **Name** -
      - (for smilio\_1\_devevent) Smilio Robot 1, v2.7
      - (for smilio\_2\_busevent) Smilio Robot 2, v2.7
      - (for smilio\_3\_alert) Smilio Robot 3, v2.7
    - **Description** -
    - **Active** - ON
    - **Record Type** -
      - (for smilio\_1\_devevent) io.microshare.feedback.unpacked
        - MUST match the target recType of the device cluster
      - (for smilio\_2\_busevent) io.microshare.feedback.unpacked.event
        - First part of recType must match recType above
      - (for smilio\_3\_alert) io.microshare.feedback.unpacked.event.meta
        - First part of recType must match recType above
    - **Permission Scopes**
      - Turn ON _Share Read_, _Share Query_, _Share Write_
    - **Script** - paste in the script from the respective GitHub file
    - Be sure to authorize the robots as the account / identity that is supposed to own the data

#### Now test it!

- Once the Smilio(s) are producing data, use Postman or a simple testView to look at the share records from each recType respectively to make sure the data is coming through as expected.
- Make sure you receive the support emails as expected.
  - Subject line should start with client organization
  - Make sure the label and the event are both as expected and match the backboard that is physically in use at the client site
- If you make any changes to the Smilio Config View, you must toggle the robots OFF, then ON again. Yes, you should do all three to make sure you are testing exactly what you configured.