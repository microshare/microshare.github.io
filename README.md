# Microshare Documentation Site

Get started with Microshare, the world's only prebuilt, scalable data management and sharing solution for IoT.

# Contribute to this documentation

There is many ways to contribute to this documentation. 

````
Branch Name : 
if personal edits : yourname-topic
if related to a JIRA ticket : #ticketNumber-topic
````

#### /!\ Only one topic of modification per Branch (per Pull Request)/!\


## 1. Add your own changes on github.
---------------------------------------
Follow this tutorial https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository.

/!\ The pages are using the [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) format. Please take a look before you change anything.

Please make sure to create a Pull Request aka PR with the maximum information about the changes you did. 

Then the PR will be check and validate by one of the member of the dev team. You can also send a message to jbardin@microshare.io, julienbardin on KeyBase to accelerate the process. 

## 2. Create an Issue
--------------------------------------- 

If you think something needs to be changed, but you don't have the knowledge, or you think someone is in a better position to make those changes. Simply create an issue in GitHub, and contact jbardin@microshare.io.
https://docs.github.com/en/enterprise/2.15/user/articles/creating-an-issue


## 3. Run it locally and add your changes.
--------------------------------------- 
You may need https://desktop.github.com/ for a faster way to manage branches. 

Please create your branch to push the changes and then do a PR with your changes.

All the information to run the app simply on your desktop are under there.

### Running environment
This documentation is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages at https://microshare.github.io.

### Writing new articles - create new pages
The documentation articles are written in [Markdown](https://daringfireball.net/projects/markdown/), and you can find the files in the `docs` folder. Documents are arranged according to version. You will usually wish to contribute to the highest numbered version. 

A Markdown editor is recommended for easiest contribution. Many Markdown editors will provide a WYSIWYG representation so you can ignore the details of Markdown notation.

To add a new article, head to [_data/docs.yml](_data/docs.yml) and add the title of the article.
Then create a file with the same title in the desired folder in the [docs](docs) folder.

#### Add Images
Use the `_includes/image.html` helper to add images to your content, simply add in your `.md` file:

`{% include image.html url="/assets/img/banner.jpg" description="Banner" %}`

And replace the url with the path to your image (usually in the `/assets/img` folder) and add a description.

If needed, you can set the width of your image with the `width` parameter, for example:

`{% include image.html url="/assets/img/banner.jpg" description="Banner" width="250px" %}`

#### Add Code Snippets
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

### Running the site locally
It is not necessary to run the site locally in order to contribute updates to the documents, but it may be useful for larger contributions.

Clone this repo to your local disk. Open a terminal and cd into the repo directory.


### Prerequisites

[Ruby](https://www.ruby-lang.org/en/) and [Rubygems](https://rubygems.org/) are needed in order to build the web site.

Install [bundler](https://bundler.io/)

    gem install bundler

### Build

In order to build and serve the web site locally, run :

    bundle install
    bundle exec jekyll serve
    
Once Jekyll is running, visit the site at http://localhost:4000

For complete instructions on how to run Jekyll locally, refer to [Jekyll Installation](https://jekyllrb.com/docs/installation/) and [Jekyll Quick Start](https://jekyllrb.com/docs/) documents.
