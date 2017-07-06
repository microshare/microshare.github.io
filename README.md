# Microshare Documentation Site

Get started with Microshare, the world's only prebuilt, scalable data management and sharing solution for IoT.

## Contribute to this documentation
This documentation is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages at https://microshare.github.io.

It can be run locally by following the [Jekyll installation](https://jekyllrb.com/docs/installation/) instructions
Run with `bundle exec jekyll serve`

## Writing new articles
The documentation articles are written in [Markdown](https://daringfireball.net/projects/markdown/), and you can find the files in the `docs` folder.

To add a new article, head to [_data/docs.yml](_data/docs.yml) and add the title of the article.
Then create a file with the same title in the desired folder in the [docs](docs) folder.

### Add Images
Use the `_includes/image.html` helper to add images to your content, simply add in your `.md` file:

`{% include image.html url="/assets/img/banner.jpg" description="Banner" %}`

And replace the url with the path to your image (usually in the `/assets/img` folder) and add a description.

If needed, you can set the width of your image with the `width` parameter, for example:
`{% include image.html url="/assets/img/banner.jpg" description="Banner" width="250px" %}`
