---
layout: docs
title: Contribuer
description: Comment contribuer à la documentation Microshare
lang: fr
translation_of: docs/2/other-pages/contributing.md
translations:
  en: /docs/2/other-pages/contributing
  fr: /docs/2/fr/other-pages/contributing
toc: true
---


Vous trouverez le dépôt ici : [Documentation Microshare]({{ site.repo }}).

La documentation est construite avec [Jekyll](https://jekyllrb.com/) et hébergée sur GitHub Pages à [Microshare github](https://microshare.github.io/)

Elle peut être exécutée localement en suivant les [instructions d'installation de Jekyll](https://jekyllrb.com/docs/installation/).
Lancez avec

 ```bundle exec jekyll serve```

## Rédiger de nouveaux articles
La documentation est rédigée en [Markdown](https://daringfireball.net/projects/markdown/) ; les fichiers se trouvent dans le dossier `docs`.

Pour ajouter un nouvel article, ouvrez `_data/docs.yml` et ajoutez le titre de l'article.
Créez ensuite un fichier portant le même titre dans le dossier souhaité du répertoire `docs`.

### Ajouter des images
Utilisez l'assistant `_includes/image.html` pour ajouter des images à votre contenu :

`{% include image.html url="/assets/img/banner.jpg" description="Banner" %}`

Remplacez l'url par le chemin de votre image (généralement dans le dossier `/assets/img`) et ajoutez une description.

Si nécessaire, vous pouvez définir la largeur de l'image avec le paramètre `width`, par exemple :

`{% include image.html url="/assets/img/banner.jpg" description="Banner" width="250px" %}`

### Ajouter des extraits de code
La coloration syntaxique des extraits de code est prise en charge via [Rouge](http://rouge.jneen.net/).
Pour inclure un extrait de code, utilisez la balise dédiée ci-dessous :

```
{% highlight http %}
  POST /share/:recType HTTP/1.1
  Host: api.microshare.io
  Content-Type: application/json
  Authorization: Bearer {{token}}
  {
    "hello": "world"
  }
{% endhighlight %}
```

Une liste des balises et langages pris en charge est disponible sur [List of supported languages and lexers](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers)
