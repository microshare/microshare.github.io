---
layout: docs
title: Partager des données importantes avec GPG.
lang: fr
translation_of: docs/2/technical/quick-start/share-secured-data-with-gpg.md
translations:
  en: /docs/2/technical/quick-start/share-secured-data-with-gpg
  fr: /docs/2/fr/technical/quick-start/share-secured-data-with-gpg
toc: true
---


{% include image.html url="/assets/img/thumbnail-6.jpg" height="1000" width="1000" description="thumbnail 2" %}


**Installation de l'outil GPG, création d'une nouvelle paire de clés, importation de la clé publique Microshare et chiffrement d'un fichier à envoyer en pièce jointe (pour Windows)** 


---------------------------------------

## Installation de GPG4Win (outil GPG) 
---------------------------------------

1) Accédez au site de téléchargement de GPG4Win et téléchargez la version complète de l'application. Au 05/03/2021, la version complète est Gpg4win v3.1.15 

 

2) Enregistrez le package de téléchargement et ouvrez-le. Si le Contrôle de compte d'utilisateur est activé, cliquez sur Yes lorsque le message d'avertissement s'affiche. L'installateur affiche une boîte de dialogue de préférence de langue. 

 

3) Utilisez le menu déroulant pour sélectionner votre langue préférée et cliquez sur OK. La fenêtre GPG4Win Setup s'affiche. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_0.png" height="500" width="500" %}

4) Cliquez sur next

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_1.png" height="500" width="500" %}

5) Choisissez les composants que vous souhaitez installer conformément à l'image ci-dessous. Assurez-vous que les composants Kleopatra, GpgOL, GpgEX et Browser Integration sont cochés. Décochez la case GPA si elle est déjà sélectionnée. Puis cliquez sur Next >. L'écran Choose Install Location s'affiche 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_2.png" height="500" width="500" %}

6) Choisissez l'emplacement d'installation par défaut ou cliquez sur Browse… pour rechercher un dossier de destination alternatif. Après avoir sélectionné le dossier approprié, cliquez sur Install. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_3.png" height="500" width="500" %}

7) Lorsque l'installation est terminée, cliquez sur Next >. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_4.png" height="500" width="500" %}

8) Si vous êtes invité à redémarrer votre ordinateur, sélectionnez « Reboot now » et cliquez sur Finish. Si vous n'êtes pas invité à redémarrer, sélectionnez "Run Kleoplatra" et cliquez sur Finish.  

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_5.png" height="500" width="500" %}

{% include image.html url="/assets/img/gpg_encrypton/Installing_GPG_step_8b.png" height="500" width="500" %}

## Créer une nouvelle paire de clés 
---------------------------------------

1) Ouvrez l'application Kleopatra que vous venez d'installer. Cliquez sur File, puis dans le menu déroulant cliquez sur New Key Pair. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_6.png" height="500" width="500" %}

2) Cliquez sur Create a personal OpenPGP key pair. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_7.png" height="500" width="500" %}

3) Entrez le nom souhaité dans le champ Name: et votre adresse e-mail souhaitée dans le champ EMail:. Puis cliquez sur Create. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_8.png" height="500" width="500" %}

4) Puis cliquez sur Finish. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_9.png" height="500" width="500" %}

5) Votre nom et vos informations e-mail apparaissent maintenant dans l'onglet My Certificates. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_10.png" height="500" width="500" %}

## Importer la clé publique de Microshare  
---------------------------------------
 
1) Cliquez sur Lookup on Server. Une boîte de dialogue Certificate Import Result s'affiche. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_11.png" height="500" width="500" %}

2) Tapez services@microshare.io dans la section « Find: », puis cliquez sur Search. 
 
{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_12.png" height="500" width="500" %}

3) Sélectionnez le nom Timothy Panagos (For Exchange of Secure Creds), puis cliquez sur Import. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_13.png" height="500" width="500" %}

4) Si la boîte de dialogue Certificate Import Results apparaît, cliquez sur OK.

{% include image.html url="/assets/img/gpg_encrypton/Importing_Public_Key_step_3a.png" height="500" width="500" %}

4b) Si une boîte de dialogue intitulée "You have imported a new certificate (public key) - Kleopatra" apparaît, cliquez sur Yes. Une nouvelle boîte de dialogue apparaît, sélectionnez votre paire de clés créée dans le menu déroulant et cliquez sur Certify. 

{% include image.html url="/assets/img/gpg_encrypton/Importing_Public_Key_step_3b.png" height="500" width="500" %}

{% include image.html url="/assets/img/gpg_encrypton/Importing_Public_Key_step_3c.png" height="500" width="500" %}

5) Le certificat apparaît maintenant dans les onglets Imported Certificates et All Certificates 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_14.png" height="500" width="500" %}

 
## Chiffrer un fichier à envoyer en pièce jointe à services@microshare.io 
---------------------------------------
 
1) Assurez-vous d'abord d'avoir terminé les étapes des sections Créer une nouvelle paire de clés et Importer la clé publique de Microshare de ce document.   


2) Ouvrez le composant Kleopatra. Cliquez sur Sign/Encrypt. 
 
{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_15.png" height="500" width="500" %}

3) Sélectionnez un ou plusieurs fichiers à Sign/encrypt et cliquez sur Open.

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_16.png" height="500" width="500" %}

4) Assurez-vous que les cases « Sign as: » et « Encrypt for me: » sont cochées et que votre adresse e-mail est sélectionnée dans les champs respectifs. Cochez la case « Encrypt for others ». Commencez à taper services@microshare.io et sélectionnez l'option intitulée « Timothy Panagos (For Exchange of Secure Creds) services@microshare.io ». Dans la section Output de la boîte de dialogue, sélectionnez où vous souhaitez enregistrer le fichier une fois chiffré, puis cliquez sur Sign/Encrypt.  


{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_17.png" height="500" width="500" %}

5) Une boîte de dialogue de résultats s'affiche, cliquez sur Finish. 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_18.png" height="500" width="500" %}

6) La version chiffrée du fichier est maintenant disponible à l'emplacement sélectionné. Ce fichier chiffré peut maintenant être envoyé par e-mail en pièce jointe sécurisée. (IMPORTANT : Voir les notes supplémentaires ci-dessous pour les détails sur le choix du type de fichier approprié) 

{% include image.html url="/assets/img/gpg_encrypton/gpg_encryption_19.png" height="500" width="500" %}
 
---------------------------------------

**Notes importantes supplémentaires :** 

Les fichiers envoyés en pièce jointe ne peuvent pas être traités avec certaines extensions de fichier. Assurez-vous que l'extension du fichier a été modifiée en « .gpg » lors de l'envoi en pièce jointe par e-mail. Veuillez inclure dans l'e-mail l'extension de fichier d'origine afin qu'elle puisse être rétablie après réception.    
