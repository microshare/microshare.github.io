---
layout: docs
title: Share important data with GPG.
toc: true
---


{% include image.html url="/assets/img/thumbnail-6.jpg" height="1000" width="1000" description="thumbnail 2" %}


**Installing the GPG Tool, Creating a New Key Pair, Importing the Microshare Public Key, and Encrypting a File to be Sent as an Attachment (for Windows)** 


---------------------------------------

## Installing GPG4Win (GPG tool) 
---------------------------------------

1) Navigate to the GPG4Win download site and download the full version of the application. As of 03/05/2021, the full version is Gpg4win v3.1.15 

 

2) Save the download package and open it. If you have User Account Control enabled, click Yes when the warning message displays. The Installer displays a Language Preference dialog box. 

 

3) Use the dropdown the select your language preference and click OK. The GPG4Win Setup window displays. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_0.png" height="500" width="500" %}

4) Click next

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_1.png" height="500" width="500" %}

5) Choose the components you would like to install in accordance with the picture below. Ensure the Kleopatra, GpgOL, GpgEX, and Browser Integration components are checked. Deselect the GPA box if already selected. Then click Next >. The Choose Install Location screen displays 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_2.png" height="500" width="500" %}

6) Choose the default install location or click Browse… to look for an alternative destination folder. After selecting the appropriate folder click Install. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_3.png" height="500" width="500" %}

7) When the installation is complete, click Next >. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_4.png" height="500" width="500" %}

8) If prompted to restart your computer, select “Reboot now” and click Finish. If not prompted to restart your computer, select "Run Kleoplatra" and click Finish.  

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_5.png" height="500" width="500" %}

{% include image.html url="/assets/img/gpg_encrypton/Installing_GPG_step_8b.png" height="500" width="500" %}

## Creating New Key Pair 
---------------------------------------

1) Open the Kleopatra app just installed. Click File, in the drop-down menu click New Key Pair. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_6.png" height="500" width="500" %}

2) Click Create a personal OpenPGP key pair. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_7.png" height="500" width="500" %}

3) Enter your desired name in the Name: field and enter your desired email address in the EMail: field. Then click Create. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_8.png" height="500" width="500" %}

4) Then click Finish. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_9.png" height="500" width="500" %}

5) Your name and email information will now appear in the My Certificates tab. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_10.png" height="500" width="500" %}

## Importing Microshare’s Public Key  
---------------------------------------
 
1) Click Lookup on Server.  A Certificate Import Result dialog box displays. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_11.png" height="500" width="500" %}

2) Type services@microshare.io in the “Find:” section, then click Search. 
 
{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_12.png" height="500" width="500" %}

3) Select the name Timothy Panagos (For Exchange of Secure Creds), then click Import. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_13.png" height="500" width="500" %}

4) If the Certificate Import Results dialog box appears, click OK.

{% include image.html url="/assets/img/gpg_encrypton/Importing_Public_Key_step_3a.png" height="500" width="500" %}

4b) If a dialog box titled "You have imported a new certificate (public key) - Kleopatra" appears, click Yes. A new diaolog box appears, select your created key pair in the drop down menu and click Certify. 

{% include image.html url="/assets/img/gpg_encrypton/Importing_Public_Key_step_3b.png" height="500" width="500" %}

{% include image.html url="/assets/img/gpg_encrypton/Importing_Public_Key_step_3c.png" height="500" width="500" %}

5) The certificate now appears in the Imported Certificates and All Certificates tabs 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_14.png" height="500" width="500" %}

 
## Encrypting a file to be sent as an attachment to services@microshare.io 
---------------------------------------
 
1) First ensure the steps in Creating a New Key Pair and Importing Microshare’s Public Key sections of this document have been completed.   


2) Open the Kleopatra component. Click Sign/Encrypt. 
 
{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_15.png" height="500" width="500" %}

3) Select one or more files to Sign/encrypt and click Open.

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_16.png" height="500" width="500" %}

4) Ensure the “Sign as:” and “Encrypt for me:” boxes are checked and that your email address is selected in the respective fields. Select the “Encrypt for others” box. Begin typing services@microshare.io, and select the option labeled “Timothy Panagos (For Exchange of Secure Creds) services@microshare.io”.  In the Output section of the dialog box, select where you would like to save the file when it had been encrypted, then click Sign/Encrypt.  


{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_17.png" height="500" width="500" %}

5) A results dialog box will be displayed, click Finish. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_18.png" height="500" width="500" %}

6) The encrypted version of the file is now available in the selected location. This encrypted file can now be sent with an email as a secure attachment.  (IMPORTANT: See additional notes below for details on proper file type selection) 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_19.png" height="500" width="500" %}
 
---------------------------------------

**Additional Important Notes:** 

Files being sent as an attachment cannot be processed with certain file extensions.  Ensure the file extension has been changed to ".gpg" when being sent as an email attachment. Please include in the email the original file extension so it can be changed back to the original extension after being received.    
