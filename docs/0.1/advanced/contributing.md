---
layout: docs
title: Contributing
description: Contributing to this documentation
group: advanced
toc: true
---

## Contribute to this documentation
You can find the repository here: [Microshare Documentation]({{ site.repo }}).

This documentation is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages at https://microshare.github.io.

It can be run locally by following the [Jekyll installation](https://jekyllrb.com/docs/installation/) instructions.
Run with `bundle exec jekyll serve`.

## Writing new articles
The documentation articles are written in [Markdown](https://daringfireball.net/projects/markdown/), and you can find the files in the `docs` folder.

To add a new article, head to `_data/docs.yml` and add the title of the article.
Then create a file with the same title in the desired folder in the `docs` folder.

### Add images
Use the `_includes/image.html` helper to add images to your content, simply :

`{% include image.html url="/assets/img/banner.jpg" description="Banner" %}`

And replace the url with the path to your image (usually in the `/assets/img` folder) and add a description.

If needed, you can set the width of your image with the `width` parameter, for example:

`{% include image.html url="/assets/img/banner.jpg" description="Banner" width="250px" %}`

### Add Code Snippets
Syntax highlighting of code snippets is supported using [Rouge](http://rouge.jneen.net/).
To include a code snippet, just use the dedicated tag as below:

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

A list of tags and supported languages is available at [List of supported languages and lexers](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers)
