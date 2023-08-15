---
layout: docs
title: General FAQ
description: Have a question not answered here? Do not hesitate to contact us at `support@microshare.io`!
toc: true
---
{% include image.html url="https://www.microshare.io/wp-content/uploads/2017/06/microshare-data-page.png" description="topMicroshare" %}

{% capture title %}
What terminology should I know to understand how Microshare is deployed and used to solve business problem?
{% endcapture %}

{% capture content %}

* [Microshare Glossary](../quick-start/glossary.md)
* [Extended Business Terminology](./business-terms.md)
* [Extended IOT Technology Terminology](./technical-terms.md)

{% endcapture %}

{% capture title %}
I did not set up my password within the 15-minute window, What do I do?
{% endcapture %}

{% capture content %}
If you do not set up your password within the 15-minute expiration window, navigate to <a href="https://app.microshare.io">https://app.microshare.io</a> for Production and <a href="https://dapp.microshare.io">https://dapp.microshare.io</a> for Dev and click on the “Forgot Password?” link to reset your password.  You will need to set up your password within 15 minutes of clicking on the link or generate a new email.
{% endcapture %}

{% include accordion.html title=title content=content key="pw_15min" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
What are the minimum password requirements when creating or resetting my account password?
{% endcapture %}

{% capture content %}
Microshare recommends that users create a unique and difficult to guess passwords to help protect their Microshare account from password-based attacks.
<br><br>
Your account password must:
<br><br>
Include at least one number
<br>
Include at least one of these special characters !@#$%^&*
<br>
Include at least one uppercase letter
<br>
Include at least one lowercase letter
<br>
Be at least 12 characters in length
{% endcapture %}

{% include accordion.html title=title content=content key="access_acount" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
Why can't I see any Dashboards?
{% endcapture %}

{% capture content %}
If you cannot see any Dashboards, you are using the improper identity and you will need to switch identities. To switch identities you must:
<br><br>
<b>1.</b> Navigate and log into the Console screen at <a href="https://app.microshare.io">https://app.microshare.io</a> for Production and <a href="https://dapp.microshare.io">https://dapp.microshare.io</a>
<br><br>
<b>2.</b>Click on the person icon in the top right corner of the Console screen.
<br><br>
{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="Profile Pic" %}
<br><br>
<b>3.</b> Select the identity you want to access.
<br><br>
<b>4.</b> View the apps under your identity.
{% endcapture %}

{% include accordion.html title=title content=content key="switch_identity" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
I can see the Dashboards, but I am having trouble seeing any data. What do I do?
{% endcapture %}

{% capture content %}
If you can see the Dashboards but are having trouble seeing any data, log out and then log back into the app.
{% endcapture %}

{% include accordion.html title=title content=content key="data_dashboard" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
How do I access my Microshare account?
{% endcapture %}

{% capture content %}
If you have not created a Microshare account, please follow these instructions - <a href="https://auth.microshare.io/portal/signup">Create a Microshare account</a>
<br><br>
If you have an account and are unable to login, please try resetting your password here - <a href="https://auth.microshare.io/portal/forgotpassword">Reset your Password</a>
<br><br>
If you are still unable to access your account, please contact our  support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="access_acount" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
How do I switch between identities?
{% endcapture %}

{% capture content %}
If you have received an email from Microshare informing you that a new identity has been shared with you, or you do not know how to switch between identities. Please follow this link for instructions on switching between identities - <a href="https://docs.microshare.io/docs/2/technical/microshare-platform-advanced/identity-guide/#1-switching-identities">Switching Identities</a>
<br><br>
If you have not received this email (please check your Junk Folder) and believe you should have access to an identity. Please contact the administrator for your account.
<br><br>
If you are still unable to access the identity, please contact our 24hr support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="switching_identities" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
Why am I unable to log into my Microshare account?
{% endcapture %}

{% capture content %}
Please make sure you are using Google Chrome, Mozilla Firefox or Apple Safari.  Please do not use Internet Explorer as it is not supported.
<br><br>
If the above is not the issue, then please contact our support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="unable_login" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
How do I add/delete users from an account?
{% endcapture %}

{% capture content %}
If you are the Administrator and would like to have users added/removed from an identity please contact our support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="delete_user" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
What do I do if I do not know where a gateway is installed?
{% endcapture %}

{% capture content %}
If you do not know where the gateway has been installed, please contact our support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="gateway_location" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
I keep receiving gateway offline notification, what should I do?
{% endcapture %}

{% capture content %}
If you’re frequently receiving gateway offline notifications, please contact our support team about moving the errant gateway to a more reliable location.
{% endcapture %}

{% include accordion.html title=title content=content key="gateway_notification" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
I am not receiving any notifications/alerts
{% endcapture %}

{% capture content %}
If you are not receiving notification/alerts that have been set up please contact your account administrator.
{% endcapture %}

{% include accordion.html title=title content=content key="alerts_notification" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
How do I use Microshare’s API?
{% endcapture %}

{% capture content %}
To get your data via the API, please follow this link to our technical documentation - <a href="https://docs.microshare.io/docs/2/technical/api/quick-start/">Using the Microshare API</a>
{% endcapture %}

{% include accordion.html title=title content=content key="microshare_api" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
What are the standard rec types to query?
{% endcapture %}

{% capture content %}
If you are unsure which rec type to query, please follow this link to  – <a href="https://docs.microshare.io/docs/2/technical/data-format/microshare-standards/#f-unpacker">the list of standard rec types</a>. If your solution is not included in this list, please contact our support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="rec_types" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
How can I stream data from Microshare?
{% endcapture %}

{% capture content %}
For information on streaming integrations, please see our technical documentation - <a href="https://docs.microshare.io/docs/2/technical/streaming-integration/overview/#b-azure-event-hub-integration">Streaming Integrations</a>
{% endcapture %}

{% include accordion.html title=title content=content key="data_streaming" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
Why am I not receiving data in my stream?
{% endcapture %}

{% capture content %}
If you have streaming set up, however are unable to see data, please contact our support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="data_stream" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
What do I do if I am unable to see data on the Microshare platform?
{% endcapture %}

{% capture content %}
If you are unable to see data on the Microshare platform, please check that you are using the correct identity, information on how to do this can be found here  - <a href="https://docs.microshare.io/docs/2/general/quick-start/access-my-apps/">Switching Identities</a>
<br><br>
If you do not have access to an identity which you think you should, please contact our Support team at support@microsahare.io
<br><br>
If you are still unable to view any data, please contact our support team at support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="datastream_identities" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
What do I do if there I am missing data?
{% endcapture %}

{% capture content %}
If you are missing data for a set period of time, please contact support@microshare.io
<br><br>
If you are unable to find the appropriate dashboards, Please click either “Dashboard” in the menu along the top, or the Microshare logo in the top left corner
{% endcapture %}

{% include accordion.html title=title content=content key="missing_data" %}

---
