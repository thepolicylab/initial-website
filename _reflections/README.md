About Reflections
==================

## Structure of the Reflection Files

Naming convention of the files determines the order in which they display in the "Team" section.

Each file consists of a block of "Liquid" template syntax at the top, bracketed 
by three hyphens. Here is where variables and meta data are stored for the member. 
It consists of:

+ layout: What template to use. These should all point to the "reflection" layout
+ title: Title of the article
+ img: Optional. If provided, will be displayed as "hero" image above the title. Do not include the full 
  path. All images are assumed to be stored in "assets/img/reflections/"
+ authors: Any number of author names in an array (brackets). These strings must match the "title" 
  variable from markdown documents in the _team directory in order to create a link to that team member's profile page.
+ date: Date the Reflection. This is used for sorting.
+ Content: Whatever falls below the last three hyphens is considered the content
  of the page. HTML is expected. 


## Edit an Existing Reflection

To change any of the Reflection meta data, edit the items explained above. To edit 
the Reflection, the content section of the Reflection file is where to do that. 


## Create a New Reflection

Duplicate an existing Reflection file and edit its parts. If desired, don't forget to add a photo
for them to the "reflection" folder in "assets" and rename the file to something appropriate. 

The name of the file is independent of the information we display, so the naming 
convention can be whatever you need. 
