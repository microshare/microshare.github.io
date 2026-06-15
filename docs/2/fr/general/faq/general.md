---
layout: docs
title: FAQ générale
description: Une question sans réponse ici ? N'hésitez pas à nous contacter à `support@microshare.io` !
lang: fr
translation_of: docs/2/general/faq/general.md
translations:
  en: /docs/2/general/faq/general
  fr: /docs/2/fr/general/faq/general
toc: true
---
{% include image.html url="https://www.microshare.io/wp-content/uploads/2017/06/microshare-data-page.png" description="topMicroshare" %}

{% capture title %}
Quelle terminologie dois-je connaître pour comprendre comment Microshare est déployé et utilisé pour résoudre des problèmes métier ?
{% endcapture %}

{% capture content %}

* [Glossaire Microshare](../quick-start/glossary.md)
* [Terminologie métier étendue](./business-terms.md)
* [Terminologie technique IoT étendue](./technical-terms.md)

{% endcapture %}

{% capture title %}
Je n'ai pas configuré mon mot de passe dans le délai de 15 minutes. Que dois-je faire ?
{% endcapture %}

{% capture content %}
Si vous ne configurez pas votre mot de passe dans le délai d'expiration de 15 minutes, rendez-vous sur <a href="https://app.microshare.io">https://app.microshare.io</a> pour la Production et <a href="https://dapp.microshare.io">https://dapp.microshare.io</a> pour le Dev, puis cliquez sur le lien « Forgot Password? » pour réinitialiser votre mot de passe. Vous devrez définir votre mot de passe dans les 15 minutes suivant le clic sur le lien ou générer un nouvel e-mail.
{% endcapture %}

{% include accordion.html title=title content=content key="pw_15min" %}

{% capture title %}
Quelles sont les exigences minimales pour le mot de passe lors de la création ou de la réinitialisation de mon compte ?
{% endcapture %}

{% capture content %}
Microshare recommande aux utilisateurs de créer des mots de passe uniques et difficiles à deviner pour protéger leur compte contre les attaques par mot de passe.
<br><br>
Votre mot de passe de compte doit :
<br><br>
Inclure au moins un chiffre
<br>
Inclure au moins un de ces caractères spéciaux !@#$%^&*
<br>
Inclure au moins une lettre majuscule
<br>
Inclure au moins une lettre minuscule
<br>
Comporter au moins 12 caractères
<br>
<br>
Bonnes pratiques de stockage des mots de passe :
<br>
« Mais c'est compliqué ! » On comprend.
<br>
Microshare recommande d'utiliser un logiciel de gestion de mots de passe qui peut suggérer et stocker en toute sécurité vos mots de passe sur tous vos appareils.
<br>
Les gestionnaires de mots de passe intégrés aux navigateurs sont généralement considérés comme moins sécurisés qu'un gestionnaire indépendant et autonome.
<br>
Une fois configuré, les utilisateurs n'ont qu'un seul mot de passe épique à mémoriser pour protéger le gestionnaire lui-même.
<br>
Sérieusement, mémorisez ce mot de passe. Vous pouvez le faire. Ne l'écrivez pas, ne le mettez pas dans un fichier Word et ne le photographiez pas. Les pirates connaissent ces astuces.
{% endcapture %}

{% include accordion.html title=title content=content key="access_acount" %}

{% capture title %}
Pourquoi ne puis-je voir aucun tableau de bord ?
{% endcapture %}

{% capture content %}
Si vous ne voyez aucun tableau de bord, vous utilisez la mauvaise identité et vous devrez en changer. Pour changer d'identité :
<br><br>
<b>1.</b> Accédez et connectez-vous à l'écran Console sur <a href="https://app.microshare.io">https://app.microshare.io</a> pour la Production et <a href="https://dapp.microshare.io">https://dapp.microshare.io</a> pour le Dev
<br><br>
<b>2.</b> Cliquez sur l'icône de personne en haut à droite de l'écran Console.
<br><br>
{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="Photo de profil" %}
<br><br>
<b>3.</b> Sélectionnez l'identité à laquelle vous souhaitez accéder.
<br><br>
<b>4.</b> Consultez les applications sous votre identité.
{% endcapture %}

{% include accordion.html title=title content=content key="switch_identity" %}

{% capture title %}
Je vois les tableaux de bord, mais j'ai du mal à afficher des données. Que dois-je faire ?
{% endcapture %}

{% capture content %}
1. Si vous rencontrez un message d'erreur **« Great Scott! »**, cela signifie que vous êtes connecté à la mauvaise identité pour les applications auxquelles vous essayez d'accéder. Pour changer d'identité, suivez ces étapes :
    1. Accédez et connectez-vous à l'écran Console sur [https://app.microshare.io](https://app.microshare.io) pour la Production et [https://dapp.microshare.io](https://dapp.microshare.io) pour le Développement.
    2. Cliquez sur l'icône de personne en haut à droite de l'écran Console.
    3. Sélectionnez l'identité à laquelle vous souhaitez accéder.
    4. Consultez les applications associées à l'identité choisie.
    5. Cliquez sur l'application appropriée pour accéder au tableau de bord.

2. Si vous ne voyez pas les données dans le tableau de bord lui-même, essayez ce qui suit :
    1. Déconnectez-vous puis reconnectez-vous à l'écran Console sur [https://app.microshare.io](https://app.microshare.io) pour la Production ou [https://dapp.microshare.io](https://dapp.microshare.io) pour le Développement.
    2. Vérifiez la plage de dates et les filtres appliqués dans le tableau de bord. Assurez-vous qu'ils sont correctement configurés pour afficher les données souhaitées.
    3. Actualisez le tableau de bord pour voir si les données se chargent correctement.

3. Si vous rencontrez toujours des problèmes après ces étapes, confirmez que votre compte utilisateur dispose des autorisations nécessaires pour accéder aux données et les consulter en contactant le support Microshare à [support@microshare.io](mailto:support@microshare.io) pour une assistance supplémentaire.
{% endcapture %}

{% include accordion.html title=title content=content key="data_dashboard" %}

{% capture title %}
Comment accéder à mon compte Microshare ?
{% endcapture %}

{% capture content %}
Si vous n'avez pas encore créé de compte Microshare, suivez ces instructions — <a href="https://auth.microshare.io/portal/signup">Créer un compte Microshare</a>
<br><br>
Si vous avez un compte et ne parvenez pas à vous connecter, essayez de réinitialiser votre mot de passe ici — <a href="https://auth.microshare.io/portal/forgotpassword">Réinitialiser votre mot de passe</a>
<br><br>
Si vous ne parvenez toujours pas à accéder à votre compte, contactez notre équipe support à support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="access_acount" %}

{% capture title %}
Comment passer d'une identité à l'autre ?
{% endcapture %}

{% capture content %}
Si vous avez reçu un e-mail de Microshare vous informant qu'une nouvelle identité a été partagée avec vous, ou si vous ne savez pas comment changer d'identité, suivez ce lien pour les instructions — <a href="https://docs.microshare.io/docs/2/technical/microshare-platform-advanced/identity-guide/#1-switching-identities">Changer d'identité</a>
<br><br>
Si vous n'avez pas reçu cet e-mail (vérifiez votre dossier Courrier indésirable) et pensez devoir avoir accès à une identité, contactez l'administrateur de votre compte.
<br><br>
Si vous ne parvenez toujours pas à accéder à l'identité, contactez notre équipe support 24h/24 à support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="switching_identities" %}

{% capture title %}
Pourquoi ne puis-je pas me connecter à mon compte Microshare ?
{% endcapture %}

{% capture content %}
1. Assurez-vous d'utiliser **Google Chrome**, **Mozilla Firefox** ou **Apple Safari** comme navigateur web. N'utilisez pas **Internet Explorer**, qui n'est pas pris en charge.

2. **Microshare** fonctionne dans deux environnements : l'environnement de développement et l'environnement de production. Chacun a ses caractéristiques et répond à des besoins différents.
    - **Développement** : [dapp.microshare.io](https://dapp.microshare.io)
    - **Production** : [app.microshare.io](https://app.microshare.io)
    
   Assurez-vous d'utiliser le lien approprié pour vous connecter à votre compte.

3. Vérifiez que vous utilisez l'adresse e-mail et le mot de passe corrects associés à votre compte. Contrôlez les éventuelles fautes de frappe.

4. Videz le cache et les cookies de votre navigateur, ou essayez d'accéder à votre compte depuis un autre navigateur ou appareil.

5. Si vous avez oublié votre mot de passe, utilisez l'option « Forgot Password » sur la page de connexion pour le réinitialiser.

   Votre mot de passe de compte doit :
   - Inclure au moins un chiffre
   - Inclure au moins un de ces caractères spéciaux !@#$%^&*
   - Inclure au moins une lettre majuscule
   - Inclure au moins une lettre minuscule
   - Comporter au moins 12 caractères

Si les étapes ci-dessus ne résolvent pas le problème, contactez notre équipe support à [support@microshare.io](mailto:support@microshare.io).

<br><br>
Si ce n'est pas le problème, contactez notre équipe support à support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="unable_login" %}

{% capture title %}
Comment ajouter ou supprimer des utilisateurs d'un compte ?
{% endcapture %}

{% capture content %}
Contactez notre équipe support à support@microshare.io.
{% endcapture %}

{% include accordion.html title=title content=content key="delete_user" %}

{% capture title %}
Que faire si je ne sais pas où une passerelle est installée ?
{% endcapture %}

{% capture content %}
Microshare ne conserve pas les emplacements d'installation des passerelles sur le site. Consultez vos collègues, votre superviseur ou la personne responsable de l'installation et de la gestion des passerelles au sein de votre organisation.
{% endcapture %}

{% include accordion.html title=title content=content key="gateway_location" %}

{% capture title %}
Je reçois constamment des notifications de passerelle hors ligne. Que dois-je faire ?
{% endcapture %}

{% capture content %}
1. Vérifiez la connexion physique de la passerelle pour vous assurer qu'elle est correctement branchée à l'alimentation et au réseau.
2. Vérifiez s'il y a des problèmes ou des pannes réseau dans la zone qui pourraient affecter la connexion de la passerelle.
3. Confirmez que la passerelle est à portée du réseau auquel elle tente de se connecter.
4. Redémarrez la passerelle et observez si le problème persiste.
5. Si le problème continue après ces étapes, contactez le support Microshare à [support@microshare.io](mailto:support@microshare.io) pour une assistance supplémentaire.
{% endcapture %}

{% include accordion.html title=title content=content key="gateway_notification" %}

{% capture title %}
Je ne reçois aucune notification ni alerte
{% endcapture %}

{% capture content %}
1. Vérifiez avec votre superviseur que votre e-mail est configuré pour recevoir les notifications et alertes.
2. Si votre e-mail est correctement configuré et que vous ne recevez toujours pas de notifications, contactez le support Microshare à [support@microshare.io](mailto:support@microshare.io).
{% endcapture %}

{% include accordion.html title=title content=content key="alerts_notification" %}

{% capture title %}
Comment utiliser l'API de Microshare ?
{% endcapture %}

{% capture content %}
Pour obtenir vos données via l'API, suivez ce lien vers notre documentation technique — <a href="https://docs.microshare.io/docs/2/technical/api/quick-start/">Utiliser l'API Microshare</a>
{% endcapture %}

{% include accordion.html title=title content=content key="microshare_api" %}

{% capture title %}
Quels sont les rec types standard à interroger ?
{% endcapture %}

{% capture content %}
Si vous ne savez pas quel rec type interroger, suivez ce lien vers <a href="https://docs.microshare.io/docs/2/technical/data-format/microshare-standards/#f-unpacker">la liste des rec types standard</a>. Si votre solution ne figure pas dans cette liste, contactez notre équipe support à support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="rec_types" %}

{% capture title %}
Comment puis-je diffuser des données depuis Microshare ?
{% endcapture %}

{% capture content %}
Pour des informations sur les intégrations de streaming, consultez notre documentation technique — <a href="https://docs.microshare.io/docs/2/technical/streaming-integration/overview/#b-azure-event-hub-integration">Intégrations streaming</a>
{% endcapture %}

{% include accordion.html title=title content=content key="data_streaming" %}

{% capture title %}
Pourquoi ne reçois-je pas de données dans mon flux ?
{% endcapture %}

{% capture content %}
Contactez notre équipe support à support@microshare.io.
{% endcapture %}

{% include accordion.html title=title content=content key="data_stream" %}

{% capture title %}
Que faire si je ne parviens pas à voir de données sur la plateforme Microshare ?
{% endcapture %}

{% capture content %}
Si vous ne parvenez pas à voir de données sur la plateforme Microshare, vérifiez que vous utilisez la bonne identité. Des informations à ce sujet sont disponibles ici — <a href="https://docs.microshare.io/docs/2/general/quick-start/access-my-apps/">Changer d'identité</a>
<br><br>
Si vous n'avez pas accès à une identité à laquelle vous pensez avoir droit, contactez notre équipe support à support@microshare.io
<br><br>
Si vous ne parvenez toujours pas à afficher de données, contactez notre équipe support à support@microshare.io
{% endcapture %}

{% include accordion.html title=title content=content key="datastream_identities" %}

{% capture title %}
Que faire s'il me manque des données ?
{% endcapture %}

{% capture content %}
Si vous constatez des données manquantes dans le tableau de bord :
1. Déconnectez-vous puis reconnectez-vous à l'écran Console sur [https://app.microshare.io](https://app.microshare.io) pour la Production ou [https://dapp.microshare.io](https://dapp.microshare.io) pour le Développement.
2. Essayez d'accéder au tableau de bord et vérifiez si vous voyez les données.
Si les étapes ci-dessus ne résolvent pas le problème, contactez notre équipe support à [support@microshare.io](mailto:support@microshare.io).
Si vous constatez des données manquantes dans le flux, contactez notre équipe support à [support@microshare.io](mailto:support@microshare.io).
{% endcapture %}

{% include accordion.html title=title content=content key="missing_data" %}

---
