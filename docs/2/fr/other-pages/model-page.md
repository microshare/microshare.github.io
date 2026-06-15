---
layout: docs
title: Page modèle de la documentation Microshare™
description: Sert de référence que toutes les autres pages devraient suivre
lang: fr
translation_of: docs/2/other-pages/model-page.md
translations:
  en: /docs/2/other-pages/model-page
  fr: /docs/2/fr/other-pages/model-page
toc: true
---


## Sommaire
---------------------------------------

La page doit toujours commencer par un aperçu de son contenu, quelle que soit sa taille. Cela facilite la navigation et réduit le délai avant que l'utilisateur obtienne sa réponse.

1. [La liste sera au format numéroté](./#formatage-general)
2. [Chaque point aura un lien rapide](./#autres-standards)


## Formatage général
---------------------------------------
Chaque section doit être intitulée en en-tête 2 (c'est-à-dire ## en markdown). Chaque section doit être précédée d'un saut de ligne avant l'en-tête pour marquer visuellement la fin du sujet précédent. Le saut de ligne doit apparaître directement sous la dernière ligne de la section, sans espace supplémentaire.

### Sous-section

Si la section comporte une sous-section, donnez-lui un titre en en-tête 3 (c'est-à-dire ### en markdown).


## Listes à puces versus listes numérotées
---------------------------------------

Une liste numérotée doit être utilisée lorsque :
<br>
**1.** Il y a des étapes et l'utilisateur doit suivre les informations de manière séquentielle.
<br>
**2.** La liste numérotée doit être en gras avec des sauts de ligne entre les éléments pour des raisons esthétiques.


- Une liste à puces doit être utilisée si :
* Les informations ne suivent pas un ordre strict et sont plus libres.
* Vous pouvez utiliser * ou - en markdown pour une puce.
    - Si la liste comporte de nombreux niveaux imbriqués

Les deux types de listes doivent se terminer par un point.

<br>
##### Les sections doivent être numérotées ou à puces de la même manière. Si l'ordre des sections est critique [comme une feuille de route](/docs/2/technical/quick-start/basic-dev-roadmap/), les sections doivent être numérotées. Sinon, si les sujets peuvent être consultés dans un ordre libre, les sections n'ont pas besoin d'être numérotées.




## Autres standards
---------------------------------------

<br> Microshare™ ne doit être utilisé que dans le titre de la page ; dans le corps de la documentation, utilisez Microshare.

<br>
Les `emails` ou `objets` doivent être présentés sous cette forme.

<br>
[Les liens doivent être faciles à suivre](https://microshare.github.io).

<br>
[Les sections mentionnées](./#listes-a-puces-versus-listes-numerotees) doivent être liées.

<br>
{% include image.html url="\assets\img\model-page-1.png" description="page modèle 1" %}

{% highlight java %}

{
  "All JSON": "Should be given in this format",

},

{% endhighlight %}

<br>

| Tous les tableaux | Doivent être présentés           |
|-------------------|----------------------------------|
| Dans ce format    | à l'aide d'un convertisseur en ligne |



