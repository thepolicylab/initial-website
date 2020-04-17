---
layout: page
---

Initial website for The Policy Lab
==================================

An intro website for _The Policy Lab_ at Brown University, May 2019. Static 
HTML generated from [Jekyll](https://jekyllrb.com/) with [SASS](https://sass-lang.com/), 
[Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/), 
and [Autoprefixer](https://github.com/vwochnik/jekyll-autoprefixer).


## Built on Grey Matter from Oomph

[Grey Matter](https://github.com/oomphinc/oomph-grey-matter) is a boilerplate for 
stand-alone Jekyll projects. Inspired by [Distillery](https://github.com/thinkshout/distillery/tree/master/)
(and now heavily updated/modified), built and served with Jekyll, leveraging 
Oomph Scaffold custom code and *Bootstrap 4*.


## Getting started
To get up and running:


### Install dependencies
Navigate to the project folder in your Terminal, then install Bundler if you do
not already have it installed:

```sh
// Check to see if Bundler is installed:
$ which bundler

// If no response, install it:
$ gem install bundler

// Once installed (or if previously installed), run inside this project:
$ bundle install
```

The project dependencies should now be installed.

+Note: you may need to run the installers using the `$ sudo` command depending on
the permissions of your computer.


### Run the Local server and SASS compiler
From the project root, run: 

```sh
$ jekyll serve
```

The server is available in your browser at `http://localhost:4060/`. 


#### Run or Build the site from a Different URL

If the compiled file URLs need to have a different root path, change the `baseurl`
value in  `_config.yml` and restart the server. The web url will change as well,
i.e. `http://localhost:4060/[path]`. When you upload the sites content to a server,
all URLs will be prefixed with `/[path]`.

Without changing the `config.yml` file, one may run a build command with an optional 
`--baseurl` parameter like so:

```sh
$ jekyll build --baseurl '/custom/path/'
```

Files uploaded from the `_site` folder will be prefixed with `/custom/path/` in their URLs.


### Project Structure

```js
config.yml          // project set up and variables for base URL path
_includes           // HTML partials
-- footer.html
-- head.html
-- header.html
-- navigation.html
---- etc...
_layouts            // HTML templates
-- default.html     // Base tempalte
_plugins            // RB files for Jekyll plugins
_sass               // The gold
_site               // Rendered static HTML (not under version control)
assets              // Static assets
-- css
---- main.scss      // Jekyll pipeline converts this to CSS on render
-- img
-- js
feed.xml            // Sample file type XML
Gemfile             // Project dependency manager
Gemfile.lock
index.html          // Site content front page
etc...
```

### Jekyll Standard Usage

Any folder prefixed with an underscore is used as a build folder only, it is not
compiled and rendered. An `assets` folder (unprefixed) will be included in the
site build. Additional files that should be excluded from the build should be
added to `_config.yml`.

Use `_includes` for repetitive elements like headers, footer, nav, etc…

Use `_layouts` to control larger templates. Jekyll ships with an example page and
a post. Variables use a {% raw %}`{% double brace %}`{% endraw %} syntax, and
refer to simple text declarations at the top of page files. 

`default.html` is the base template and includes calls for a header and footer.

Page files live at the site root. All rendered HTML and assets go into the `_site`
folder by default, from which they are served in your browser. Pages can also be
nested in folders but this structure is not required for the site render. The
Liquid `permalink` value will determine where a rendered page lives in the URL
structure.

More in depth Jekyll instructions here from [JekyllRB](https://jekyllrb.com/).

### Markdown

Markdown is supported and may be used inside files with a `.md` extension. 
[A markdown syntax usage guide](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md).
Daring Fireball has a really great [online converter](http://daringfireball.net/projects/markdown/dingus)
if you need troubleshooting help.

## Updates

Keep Ruby Gems and the Gemfile up to date. 

```sh
bundle update jekyll
```

Let this command run. All dependencies for the latest stable Jekyll release will
be updated and the `Gemfile.lock` will be updated as well. Update any very old
dependency versions in the Gemfile at your discretion.

Commit the `Gemfile.lock` to version control if updates are made.
