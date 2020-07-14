About Team Members
==================

## Structure of the Member Files

Naming convention of the files determines the order in which they display in the "Team" section.

Each file consists of a block of "Liquid" template syntax at the top, bracketed 
by three hyphens. Here is where variables and meta data are stored for the member. 
It consists of:

+ layout: What template to use. These should all point to the "team" layout
+ title: Person't proper name to display
+ permalink: URL to find their member bio at. Start these with "team/"
+ position: Their official job title
+ img: Name of their bio image. Do not include the full path. All images are 
  assumed to be stored in "assets/team/"
+ website: Optional. Personal website URL
+ linkedin: Optional. Personal Linkedin profile URL
+ twitter: Optional. Personal Twitter profile URL.
+ github: Optional. Personal Github profile URL.
+ Content: Whatever falls below the last three hyphens is considered the content
  of the page. HTML is expected. 


## Edit an Existing member

To change any of the Members meta data, edit the items explained above. To edit 
their bio, the content section of the member file is where to do that. 


## Create a New member

Duplicate an existing member file and edit its parts. Don't forget to add a photo
for them to the "team" folder in "assets" and rename the file to something appropriate. 

The name of the file is independent of the information we display, so the naming 
convention can be whatever you need. 
