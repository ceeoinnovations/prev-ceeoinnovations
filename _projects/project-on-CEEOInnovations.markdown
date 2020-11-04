---
layout: post

displayimg: inno_instruct/small_background.jpg
title: Creating a Project on CEEO Innovations
description: Learn how to make a "project" post on CEEO Innovations
categories: ["Lesson Plans", "Documentation Instructions"]
authors: ["Allison Moore"]
featured: false
draft: true
hidden: true
---

<div class="image_text_overlay" markdown="1">
![my header image](project_assets/inno_instruct/tuftsceeo.jpg)
# Learn to make a post
## CEEO innovations is a hub for the the CEEO's work
CEEO innovations is a “hub” for all the cool projects going on at the CEEO. “Projects” pages on the site like the one you will make
will let visitors learn about specific projects going  at the CEEO.
*Think of your page as an “advertisement” or summary of your project.*
</div>

<div class="free_write" markdown="1">
# Before you start documenting...
## make sure you have
- A few sentences or paragraphs of content summarizing the project
- At least 2-5 images (give them easy to type names) saved to a folder on your computer
- *This includes a “display” ideally cropped 2:3*

### Optional but recommended:
- Any relevant documents or pdfs
- Any relevant videos
- Links to related sites so people can learn more about the project

</div>
<!--document creates a grid of documents--------------------->
<div class="document" markdown="1">
# Guides on how to use CEEOInnovations
<!--[Sample-File,markdown](https://docs.google.com/document/d/1cwkEwnAnes05EWzl1L0POl9HGGlA0k_IfE2rlowTxFs/edit?usp=sharing)-->
["Cheatsheet" For documenting](inno_instruct/cheatsheet.pdf)
[Presentation slides with lesson on documenting](https://docs.google.com/presentation/d/e/2PACX-1vQuVgfNrRipSOYAHUVL6Y9ZKi2BMW7wI95fPlgpEIaGu6yQpx-1VEYMOJpOCQ8sqcJCkL5O3a0ZDf7N/embed?start=false&loop=false&delayms=3000)
[Guide to Markdown and Divs](https://docs.google.com/presentation/d/e/2PACX-1vRYPC-Jo3iU7rD1_seS9CQZFMbwctRxy_XQWQ-WJGz8waFeZH0QQwa66DYzZXbPtFb3f65SbYsrJVN0/embed?start=false&loop=false&delayms=3000)
</div>

<div class="free_write" markdown="1">

# Summary: Creating a Page
### Below is a summary of the documentation steps, the next few sections will go into more detail on each step

1. Use **Drag and Drop** to upload a folder of images and documents for your page to **project_assets** on [github](https://github.com/ceeoinnovations/ceeoinnovations.github.io)
2. Copy this file [**SAMPLE-FILE.markdown**](https://github.com/ceeoinnovations/ceeoinnovations.github.io/blob/gh-pages/_projects/SAMPLE-FILE.markdown) or the sample file in [github](https://github.com/ceeoinnovations/ceeoinnovations.github.io/blob/gh-pages/_projects/SAMPLE-FILE.markdown) to make a new file for your page. Title your new file with the PROJECT-NAME.markdown
3. **Customize the Frontmatter** the first few lines of the file between "---" dividers decide the title of your project and other important information. **DO NOT change layout:post.**
4. **Document** your project in [Markdown](https://www.markdownguide.org/basic-syntax/) (HTML shorthand) and use div elements to display your content more aesthetically.
     -**For more guidance on this step, see the below "Customizing sections"**
5. **Upload** your "PROJECT-NAME.markdown" file to the **_projects** folder on the CEEOInnovations github and check that it looks how you want it to by refreshing the site. Github takes a few minutes to update, you can make this faster by using incognito).
6. Done!

</div>

<div class="video_text_overlay" markdown="1">
[Step 1](https://youtu.be/tVpvP5be968)
# Step 1: Upload Assets
## Upload a file of pictures and documents for your project to github
Uploading the images and documents you want to display on your site locally to github can
prevent broken links later on and lets you easily include pictures and documents.
</div>

<div class="video_text_overlay" markdown="1">
[Step 2](https://youtu.be/hSam9aVLy5A)
# Step 2. Copy Sample File
## Copy the sample file from either Google Docs or Github
Create a copy of [**SAMPLE-FILE.markdown**](https://github.com/ceeoinnovations/ceeoinnovations.github.io/blob/gh-pages/_projects/SAMPLE-FILE.markdown) from either
[Google Docs](https://docs.google.com/document/d/1cwkEwnAnes05EWzl1L0POl9HGGlA0k_IfE2rlowTxFs/edit?usp=sharing)
or [github](https://github.com/ceeoinnovations/ceeoinnovations.github.io/blob/gh-pages/_projects/SAMPLE-FILE.markdown).
</div>

<div class="free_write" markdown="1">
## Step 3: Customize the Frontmatter

The "Frontmatter" is the first few lines of a markdown file. It provides key information about how
your project is displayed.

#### It will look like this:

```
---
layout: post

title: YOUR SITE title
description: description of your site
displayimg: IMAGEFOLDERNAME/IMGNAME
categories: ["DELETE CATEGORIES THAT DON'T APPLY","Spike Prime", "Lesson Plans", "Makerspaces", "Robotics", "Ev3/NXT", "3D Printing", "Tech"]
authors: ["YOUR NAME", "NAME OF OTHER COLLABORATOR"]
date: dd-mm-yyyy
legal: ENTER ANY LEGAL TEXT FOR YOUR CONTENT HERE
featured: false
---
```

The "frontmatter" must be the very first few lines of your file and is case sensitive. Do not change "layout:post" because that determines the styling for your page,
other frontmatter elements can be changed to influence how your project is displayed.

- **"title:"** determines the title of your project. This will be displayed on top of your post and on the main page.
- **"description"** a one sentence description of your project that will appear on the home page of the site.
- **"displayimg"** determines what picture is show on the homepage for your project.
     - Crop your picture 3:2
     - link to a picture stored in a local github folder using "Image_folder_name/Img_name" from Step 1 (replacing with your own image folder name and image name)
- **"categories"** determines what tags apply to your search item
     - the listed categories are buttons on the search page, if you leave one on the list your project will be searchable under that category
          - for example, a project with the categories "[Lesson Plans", "Makerspaces", "Robotics"]" will be searchable under the Lesson Plans, Makerspaces, and Robotics Categories
          - you can also specify unique categories that won't appear as buttons but will make your project searchable under that keyword.
               - for example, a project with the categories  "[Lesson Plans", "Greenhouses", "Peanut Butter"] will be searchable under all of those terms but only the *button* for "Lesson Plans will appear on the site
- **"authors"** is a list of authors or contributors that worked on the projects
     - Fill out the list with each author who worked on the project
          - a project with one author would have an authors list that looks like "authors: ["Jane Doe"]"
          - a project with five authors would have an authors list that looks like "authors: ["Jane Doe", "John Doe", "Brad Pitt", "Angelina Jolie", "Meredith Portsmith"]"
     - If you would like your project authors to have a picture and position listed with their name. You can make an author profile for them [here](www.thest.computer).
          - Otherwise the site will show a filler profile with the authors name and a generic picture.
- **date** the format for this display is "dd-mm-yyyy." It is fairly important to get this syntax right since Jekyll will throw an error otherwise.
     - **If you don't see your project page updating on the main site check to see if this syntax is right and in the order "dd-mm-yyyy"**. You can also delete this element if you believe a date does not apply to your project. Projects on the homepage are sorted by date.  
- **legal** use this field to have any legal text that might pertain to your project appear on the bottom of the project page.
- **featured** determines if your project will appear on the "featured projects" section of the homepage
     - set "true" if you want your project to appear featured and "false" otherwise.
</div>

<div class="video_text_overlay" markdown="1">
[Step 3](https://youtu.be/6DCVCFkU2mk)
# Step 3. Customize the Frontmatter
## Frontmatter provides key information about your page
Create a copy of [**SAMPLE-FILE.markdown**](https://github.com/ceeoinnovations/ceeoinnovations.github.io/blob/gh-pages/_projects/SAMPLE-FILE.markdown) and customize the frontmatter with the title, description, image, authors, and categories for your site.
</div>

<div class="free_write" markdown="1">
#  Step 4: Writing up your documentation
## Part 1: Markdown

CEEO Innovations uses a combination of Markdown and "div" elements to create your project page.
Markdown is a shorthand version of HTML (the coding language used on websites), whereas "div" elements are a method for styling your page so that different parts of your page can have different appearences.  
Markdown is a "short hand" way of writing html that makes it easy to create web pages.
Your CEEOInnovations page will be written in markdown.

You can either make your page in straight markdown, or use the "div" elements described in the next section to make your markdown look even better If you write your page in straight Markdown, everything on your page will appear in a single "text" section (like this one).

Most of the components on this site are made using the **header, subheader, image, and link** attributes, however Markdown offers a wide variety of styling options shown in
the pictured table. These styling options can be used with "free write" div sections of webpages (like this one!)
![Markdown Table 1](inno_instruct/markdown2.png)
![Markdown Table 2](inno_instruct/markdown3.png)

### Complete documentation for markdown can be found [here](https://www.markdownguide.org/basic-syntax/).

## Example using just markdown

It is suggested you combine Markdown with "div" elements to achieve a better look and feel for your site however you can also use straight markdown on your page.
A file with **ONLY** Markdown would look something like the below:

~~~
---
layout: post

Title: Toaster (Only Markdown)
Description: An project post about toaters only using Markdown
displayimg: super_toaster/toast.png
categories: ["Tech"]
authors: ["Allison Moore"]
---
# Meet the "Super Toaster"

This is a project post created only using only Markdown and no text so it has
all of it's text in one block.

## Here are some facts about toasters
- Toasters run on **electricity**
- The first pop up toaster was invented by Charles Strite in 1921
- The original toaster was invented in 1893 by Albert Marsh

Here is some code to run your toaster:

```
int toaster(bool toast){
     if (toast){
          return 6;
     } else {
          return 7;
     }
}
```

To learn more about toasters, click [here](https://quickservant.com/weird-facts-about-toasters/).
This is a picture of a toaster:

![toaster pic](super_toaster/download.jpg)

You can also include photos from the internet (although this is risky since photo links can break):

![toaster pic](https://i1.wp.com/dealsfinders.blog/wp-content/uploads/2020/04/4-Slice-Toaster-Stainless-Steel-Toaster.jpg?fit=474%2C463&ssl=1)
~~~

The above code would produce a result that looks like:
![Markdown Table 2](inno_instruct/Picture1.png)

##### If you use ***only*** Markdown you will not be able to use div elements. It is instead suggestted you encase straight Markdown in a "free_write" div (see next tutorial).
</div>

<div class="video_text_overlay" markdown="1">
[Step 4](https://youtu.be/uiotevW4nS0)
# Step 4, Part 1. Overview of Markdown
## Project pages are written in Markdown syntex
Project pages on CEEO Innovations are written using the Markdown[here](https://www.markdownguide.org/basic-syntax/) syntax language.
</div>


<div class="free_write" markdown="1">
#  Step 4: Writing up your documentation
## Part 2: "div" elements

"div" elements are a container that can be added to around your Markdown to customize parts of a page. This means that you can add multiple sections, large photos, embedded videos, and embedded documents to your site.
This can let your page seem more complicated and interesting than is possible with straight Markdown.


![divexample0](inno_instruct/newdiv0.png)

This and other projects pages on this site on structed into "sections" with different designs.
This isn't normally possible with markdown, however using "div" elements we can create subsections
**Divs are the "building blocks" of a CEEOInnovations project page.**


![Markdown Table 2](inno_instruct/newdiv1.png)

Divs can be repeated and ordered in any order.

If you don't want to use a certain section of a div (such as a title or subtitle) you can just delete it!


Below is the format for a div section, it goes around your markdown content to decide how it is formatted.

```
<div class=”DIV_NAME” markdown="1">
 ------MARKDOWN CONTENT---------
</div>
```

Currently, the possible div sections have the class names "image_text_overlay", "video_text_overlay",  "document", and "free_write." Each has a unique name and serves a specific purpose. "free_write" will probably be the most useful section and is similar to writing straight Markdown

</div>
<div class="video_text_overlay" markdown="1">
[Step 4](https://youtu.be/tnQWpgtw7bc)
# Step 4, Part 2. "div" Element Overview
## div elements let us customize Markdown syntax
Div elements allow us to divide our page into sections and include different types of media.
</div>

<div class="free_write" markdown="1">
## Image_Text_Overlay
### Step 4, Part 2: "div" elements

"image_text_overlay" lets you format a picture as a large image with a text overlay, or simply as a large image.

The code for a sample full image_text_overlay" element is:
```
<div class="image_text_overlay" markdown="1">
![TITLE OF IMAGE](super_toaster/toast.png)
# Culinary Innovation
## Buy a toaster today!
Getting a toaster will let you toast bagels, bread, and more!
</div>
```

The above code will be produce the following:  

</div>

<div class="image_text_overlay" markdown="1">
![TITLE OF IMAGE](super_toaster/toast.png)
# Culinary Innovation
## Buy a toaster today!
Getting a toaster will let you toast bagels, bread, and more!
</div>

<div class="free_write" markdown="1">
In the "image text overlay", a markdown image tag, a markdown image header (h1), a markdown image subheader (h2), and a markdown paragraph element are used.
**Any of these elements can be deleted if it makes sense to. The "image_text_overlay" div or any of the divs can be used as many times as you want.**

#### For example, below is an "image_text_overlay" with only an image element and no text.
```
<div class="image_text_overlay" markdown="1">
![TITLE OF IMAGE](super_toaster/toast.png)
</div>
```
</div>

<div class="image_text_overlay" markdown="1">
![TITLE OF IMAGE](super_toaster/toast.png)
</div>


<div class="free_write" markdown="1">
## Video_Text_Overlay
### Step 4, Part 2: "div" elements

"video_text_overlay" is exactly the same as the "image_text_overlay" except with a **video** instead of an image and a **link tag** instead of in image tag.

```
<div class="video_text_overlay" markdown="1">
[TITLE OF VIDEO](https://youtu.be/rJQpyIIV3-s)
# Culinary Innovation
## Buy a toaster today!
Getting a toaster will let you toast bagels, bread, and more!
</div>
```
This will produce the below content:
</div>

<div class="video_text_overlay" markdown="1">
[TITLE OF VIDEO](https://youtu.be/rJQpyIIV3-s)
# Culinary Innovation
## Buy a toaster today!
Getting a toaster will let you toast bagels, bread, and more!
</div>

<div class="free_write" markdown="1">
Notice here that a "link tag" rather than an "image tag" is used.
```
a Link tag in markdown has NO "!" in front of it
[TITLE OF VIDEO](https://youtu.be/rJQpyIIV3-s)

an image tag in markdown has "!" in front of it
![TITLE OF IMAGE](super_toaster/toast.png)
```

A markdown *link* tag, a markdown image header (h1), a markdown image subheader (h2), and a markdown paragraph element are used in "video_text_overlay".
**Like with "image_text_overlay" any of the elements in the "video_text_overlay" can be deleted and the div element can be used as many times as you want.**

#### **IMPORTANT** When copying videos for CEEO Innovations you must copy the 'youtu.be" link found by clicking the share button on a video *not* the normal URL.
Video link do not currently work with content not hosted on youtube.
 ![sitetitle](inno_instruct/youtubelink.png)

</div>


<div class="free_write" markdown="1">
## "document"
### Step 4, Part 2: "div" elements

"document" is a bit different than the "video_text_overlay" options. A document section will look something like this:
```
<div class="document" markdown="1">
# TITLE OF SECTION
[TITLE OF document](PROJECTFOLDERNAME/NAME OF documemt FILE)
[TITLE OF document](PROJECTFOLDERENAME/NAME OFdocument FILE)
<!-- insert as many links here as you want to dynamically create a grid of pdfs-->
</div>
```
More specifically, a document section has a title and then as many documents as you want to be displayed will appear in a grid.
For example, this would be a document element with 4 sections.
```
<div class="document" markdown="1">
<div class="document" markdown="1">
# Supporting documentation on toasters
[My toaster presentation](https://docs.google.com/presentation/d/e/2PACX-1vTlmRtMDPiP_WeGrlIRKweX8AXdHrdZ6HcywLKfCoNCt9p1xEZabXoS3ATo3GDrzfVx3e1r7efBDI94/embed?start=false&loop=false&delayms=3000)
[the history of toasters](super_toaster/HistoryofToasts.pdf)
[Famous toasts](super_toaster/Toasts.pdf)
[my favorite toast recipe](https://docs.google.com/document/d/e/2PACX-1vRcww35kO7gkwEeVnbF9EyTGGwtcTVxLnthjtfBPzu8NpeDvlXTKODWNxcv-I8Ahtca1RK2MiiLy9A5/pub?embedded=true)
</div>
```
This will produce the below content:
</div>

<div class="document" markdown="1">
# Supporting documentation on toasters
[My toaster presentation](https://docs.google.com/presentation/d/e/2PACX-1vTlmRtMDPiP_WeGrlIRKweX8AXdHrdZ6HcywLKfCoNCt9p1xEZabXoS3ATo3GDrzfVx3e1r7efBDI94/embed?start=false&loop=false&delayms=3000)
[the history of toasters](super_toaster/HistoryofToasts.pdf)
[Famous toasts](super_toaster/Toasts.pdf)
[my favorite toast recipe](https://docs.google.com/document/d/e/2PACX-1vRcww35kO7gkwEeVnbF9EyTGGwtcTVxLnthjtfBPzu8NpeDvlXTKODWNxcv-I8Ahtca1RK2MiiLy9A5/pub?embedded=true)
</div>

<div class="free_write" markdown="1">
 "document" elements can hold almost everything but not everything will "look good" they are best used for for powerpoints, pdfs, or occasionally large poster images
     - Technically, websites can also be embedded in "document" elements but often will look poorly formatted
          - many websites like github also block their pages from appearing in iframe elements.
     - A guide on how to add google slides presentations is linked here.
</div>




<div class="free_write" markdown="1">
## 5. "free_write"

"free_write" can be filled with whatever markdown you want. It is a unstructed section that will display any markdown you write in it in a white section box like this one.
It is essentially the same as writing plain Markdown, however if you are using other divs you may have to write in a "free_write" section instead.
"free_write" sections also let you have groups on your page instead of  a wall of text.


For example, this is one sample free_write:

```
<div class="free_write" markdown="1">
# Do big headers
### or little headers [or links](www.paperbots.com)
or paragraphs

- or
- bulleted
- lists

\`\`\`
void This_Is_A_Code_Block(int max_strength){
     for (int i = 0; i < max_strength; i++){
          Declare_it_using_backticks();
     }
}

\`\`\`
</div>

 ```
It uses some more complicated markdown like bullet lists, sub-subheaders and code blocks. It will produce the following output:
![sitetitle](inno_instruct/freewrite2.png)

### No two "free_write sections look alike because they can be filled with anything

This is a different "free_write" code block:

```
<div class="free_write" markdown="1">
# What can I find on [legoengineering.com](http://www.legoengineering.com/)
![Robots and kids](legoengineering/challenge1.jpg)
- Help getting started with EV3, Spike Prime, and WeDo robotics in the classroom
- Lesson Plans and ideas for Engineering Design plans
- Support using Lego Robotics software and integrating it with other programs
- A community of teacher and educators interested in engineering
</div>
```
It uses lists, images, headers, and links. It will produce the following result:
![sitetitle](inno_instruct/free_write.png)

</div>

<div class="video_text_overlay" markdown="1">
[Step 1](https://youtu.be/tVpvP5be968)
# Step 5: Upload your project
## Test out your project and try to upload!
Upload your project and see how it looks. You may still have to debug and fix some links.
Go on incognito mode to have the github site reload with your project faster.
</div>


<div class="document" markdown="1">
# Give us feedback!
[Feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRlhwdR0he9QnfO2dxrysiTQ55V6Vg-IaPlC6ydG0pJ4a3EA/viewform?embedded=true)
</div>
