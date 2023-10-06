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
<br>
<br>
Password Storage Best Practices:
<br>
'But that sounds hard!' We get it.
<br>
Microshare recommends using password management software that can automatically suggest and then securely store your passwords across all of your devices.
<br>
Native browser-based password managers are typically considered less secure than an independent, stand-alone password manager.
<br>
Once set, users only need to remember one truly epic password to protect the password manager itself.
<br>
Seriously, commit that password to memory. You can do it. Don't write it down, stick it in a Word file, or take a picture. Hackers know these tricks.
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
1. If you encounter a **"Great Scott!"** error message, it means you are logged into the wrong identity for the apps you are trying to access. To switch identities, follow these steps:
    1. Navigate and log in to the Console screen at [https://app.microshare.io](https://app.microshare.io) for Production and [https://dapp.microshare.io](https://dapp.microshare.io) for Development.
    2. Click on the person icon in the top right corner of the Console screen.
    3. Select the identity you want to access.
    4. View the apps associated with your chosen identity.
    5. Click on the appropriate app to access the dashboard.

2. If you cannot see the data within the dashboard itself, try the following:
    1. Log off and log back in to the Console screen at [https://app.microshare.io](https://app.microshare.io) for Production or [https://dapp.microshare.io](https://dapp.microshare.io) for Development.
    2. Check the date range and filters applied in the Dashboard. Make sure they are set correctly to display the desired data.
    3. Refresh the Dashboard to see if the data loads correctly.

3. If you are still experiencing issues after following these steps, confirm that your user account has the necessary permissions to access and view the data by contacting Microshare Support at [support@microshare.io](mailto:support@microshare.io) for further assistance.
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
1. Please ensure you are using **Google Chrome**, **Mozilla Firefox**, or **Apple Safari** as your web browser. Do not use **Internet Explorer**, as it is not supported.

2. **Microshare** operates in two environments: the development environment and the production environment. Each has its own characteristics and serves different purposes.
    - **Development**: [dapp.microshare.io](https://dapp.microshare.io)
    - **Production**: [app.microshare.io](https://app.microshare.io)
    
   Please make sure that you are using the appropriate link to log in to your account.

3. Ensure you are using the correct email address and password associated with your account. Double-check for any typos or errors.

4. Clear your browser's cache and cookies or try accessing your account using a different browser or device.

5. If you have forgotten your password, use the "Forgot Password" option on the login page to reset it.

   Your account password must:
   - Include at least one number
   - Include at least one of these special characters !@#$%^&*
   - Include at least one uppercase letter
   - Include at least one lowercase letter
   - Be at least 12 characters in length

If the above steps do not resolve the issue, please contact our support team at [support@microshare.io](mailto:support@microshare.io).

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
Kindly reach out to our support team at support@microshare.io.
{% endcapture %}

{% include accordion.html title=title content=content key="delete_user" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
What do I do if I do not know where a gateway is installed?
{% endcapture %}

{% capture content %}
Microshare does not maintain records of gateway installation locations at the site. Consult with your team members, supervisor, or the person responsible for installing and managing the gateways within your organization.
{% endcapture %}

{% include accordion.html title=title content=content key="gateway_location" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
I keep receiving gateway offline notification, what should I do?
{% endcapture %}

{% capture content %}
1. Check the physical connection of the gateway to ensure it is properly connected to the power source and the network.
2. Verify if there are any network issues or outages in the area that might be affecting the gateway's connection.
3. Confirm that the gateway is within the range of the network it is trying to connect to.
4. Restart the gateway and observe if the issue persists.
5. If the problem continues after following the above steps, contact Microshare Support at [support@microshare.io](mailto:support@microshare.io) for further assistance.
{% endcapture %}

{% include accordion.html title=title content=content key="gateway_notification" %}

<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
I am not receiving any notifications/alerts
{% endcapture %}

{% capture content %}
1. Verify with your supervisor that your email is configured to receive notifications/alerts.
2. If your email is set up correctly and you are still not receiving notifications, contact Microshare Support at [support@microshare.io](mailto:support@microshare.io).
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
Kindly reach out to our support team at support@microshare.io.
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
If you see missing data in the dashboard then:
1. Log off and log back in to the Console screen at [https://app.microshare.io](https://app.microshare.io) for Production or [https://dapp.microshare.io](https://dapp.microshare.io) for Development.
2. Try accessing the dashboard and check if you see the data.
If the above steps do not resolve the issue, please contact our support team at [support@microshare.io](mailto:support@microshare.io).
If you see missing data in the stream, then kindly reach out to our support team at [support@microshare.io](mailto:support@microshare.io).
{% endcapture %}

{% include accordion.html title=title content=content key="missing_data" %}

---
