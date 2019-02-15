# Initial website

An intro website for _the Center for Civic Futures_, February 2019. 
Static HTML/CSS/PNG/SVG files. 

## Render SCSS locally

Dependencies:
* SASS 3.7.2

Watch for changes and render on the fly: 
```
$ sass --watch style.scss:style --style compressed
```

This is a static build with no on-server Gulp/Brunch processes, so the rendered CSS
will be stored in the repo. It will be minified for compression’s sake. 
