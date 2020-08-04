---
layout: post

displayimg: inno_instruct/small_background.jpg
title: SIMPLE for Documenting on CEEO Innovations
description: CEEO innovations is a “hub” for all the cool projects going on at the CEEO.
categories: ["Lesson Plans"]
authors: ["Allison Moore"]
---

![my header image](inno_instruct/tuftsceeo.jpg)



w


# The CEEO Portfolio

## CEEO innovations is a hub for the CEEO's work
CEEO innovations is a “hub” for all the cool projects going on at the CEEO. “Projects” pages on the site like the one you will make
will let visitors learn about specific projects going  at the CEEO.
*Think of your page as an “advertisement” or summary of your project.*

# Before you start documenting...
## make sure you have
- A few sentences or paragraphs of content summarizing the project
- At least 2-5 images (give them easy to type names) saved to a folder on your computer
- *This includes a “display” ideally cropped 2:3*
### Optional but recommended:
- Any relevant documents or pdfs
- Any relevant videos
- Links to related sites so people can learn more about the project



# Creating a Page
1. Use **Drag and Drop** to upload a folder of images and documents for your page to **project_assets** on [github](https://github.com/amoore449/ceeoinnovations)
2. Copy this file [**SAMPLE-FILE.markdown**](https://docs.google.com/document/d/1cwkEwnAnes05EWzl1L0POl9HGGlA0k_IfE2rlowTxFs/edit?usp=sharing) to make a new file for your page. Title your new file with the PROJECT-NAME.markdown.
3. **Customize** the sample file with divs and markdown to display the content you want.
     -the first few lines of the file between the  "---" are called "front matter." Fill out your
     project title and description, choose categories, and the link to your display image.
     -**DO NOT change layout:post**
4. **Upload** your "PROJECT-NAME.markdown" file to the **project_assets** folder on the CEEOInnovations github and check that it looks how you want it to by refreshing the site. Github takes a few minutes to update, you can make this faster by using incognito).
5. Done!


# Guides on how to use CEEOInnovations
<!--[Sample-File,markdown](https://docs.google.com/document/d/1cwkEwnAnes05EWzl1L0POl9HGGlA0k_IfE2rlowTxFs/edit?usp=sharing)-->
["Cheatsheet" For documenting](inno_instruct/cheatsheet.pdf)
[Presentation slides with lesson on documenting](https://docs.google.com/presentation/d/e/2PACX-1vQuVgfNrRipSOYAHUVL6Y9ZKi2BMW7wI95fPlgpEIaGu6yQpx-1VEYMOJpOCQ8sqcJCkL5O3a0ZDf7N/embed?start=false&loop=false&delayms=3000)
[Guide to Markdown and Divs](https://docs.google.com/presentation/d/e/2PACX-1vRYPC-Jo3iU7rD1_seS9CQZFMbwctRxy_XQWQ-WJGz8waFeZH0QQwa66DYzZXbPtFb3f65SbYsrJVN0/embed?start=false&loop=false&delayms=3000)

# Markdown Basics
## CEEO Innovations is made using a modified version of Markdown

Markdown is a "short hand" way of writing html that makes it easy to create web pages.
Most of the components on this site are made using the **header, subheader, image, and link** attributes, however Markdown offers a wide variety of styling options shown in
the pictured table. These styling options can be used with "free write" div sections of webpages (like this one!)
![Markdown Table 1](inno_instruct/markdown2.png)
![Markdown Table 2](inno_instruct/markdown3.png)

Complete documentation for markdown can be found [here](https://www.markdownguide.org/basic-syntax/).

# Divs on CEEO Innovations
## Divs allow us to customize parts of our page

![divexample0](inno_instruct/divexample0.png)

This and other projects pages on this site on structed into "sections" with different designs. This isn't normally possible with markdown, however using "div" elements we can get these cool sub sections. **Divs are the "building blocks" of a CEEOInnovations project page.**


![Markdown Table 2](inno_instruct/divexample1.png)

Divs can be repeated and ordered in any order. If you don't want to use a certain section of a div (such as a title or subtitle) you can just delete it!

### This is the format for a div element

```
<div class=”DIV_NAME” markdown="1">
 ------DIV CONTENT---------
</div>
```

Where "DIV_NAME" can be one of **five** possible sections. Each of these sections has unique formatting and capabilities.
1. site_title
2. image_text_overlay
3. video_text_overlay
4. document
5. free_write

## 1. "site_title"

Site title provides a "heading" for a projects page

The code for a sample "site_title" div is below:

```
<div class=”site_title” markdown="1">
 # PaperBots
 # Multiple
 # Lines
 </div>
 ```
This will produce:

![sitetitle](inno_instruct/sitetitle.jpg)


## 2. "image_text_overlaye"

image_text_overlay provides a large image with a title, subtitle, and description overlayed on it.


The code for a sample "image_text_overlay" div is below:

```
<div class="image_text_overlay" markdown="1">
![Link to my pic](paper-bots/headimagerobot.jpg)
## An Inexpensive Option for Engineering Education
# Accessible Robotics
PaperBots provide a low cost method of
creating educational robots for any age.
</div>
 ```
This will produce:

![imagehead](inno_instruct/imagetext.png)

## 3. "video_text_overlay"

video_text_overlay provides a large video with a title, subtitle, and description overlayed on it.

#### **IMPORTANT** When copying videos for CEEO Innovations you must copy the 'youtu.be" link found by clicking the share button on a video *not* the normal URL.

 ![sitetitle](inno_instruct/youtubelink.png)

The code for a sample "video_text_overlay" div is below:
```
<div class="image_text_overlay" markdown="1">
![Link to my pic](paper-bots/headimagerobot.jpg)
## An Inexpensive Option for Engineering Education
# Accessible Robotics
PaperBots provide a low cost method of
creating educational robots for any age.
</div>
 ```
 This will produce:

 ![sitetitle](inno_instruct/paperbot.png)


## 4. "document"

"document" lets you create a grid or a single instance of either local hosted or external "documents" these can be pdfs, presentations, images, website previews, etc.
To embed a google presentation, copy the "embed" link within the iframe embed option but only the embed link.


The code for a sample "document" div is below:

```
<div class="document" markdown="1">
# PAPER CUTOUTS
[Pull Up Man Lesson Plan](paper-bots/Pull-Up-Man-Lesson-Plan.pdf)
[HexaBot Lesson Plan](paper-bots/HexaBot-Lesson-Plan.pdf)
[HexaBot Lesson Plan](paper-bots/PUMan_Cutout.pdf)
[PaperBots Site](https://www.paperbots.org/)
</div>
 ```
 This will produce:

 ![sitetitle](inno_instruct/iframe.png)


 ## 5. "free_write"

"free_write" can be filled with whatever markdown you want. It is a unstructed section that will display any markdown you write in it in a white section box like this one.


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


# Give us feedback!
[Feedback form](https://docs.google.com/forms/d/e/1FAIpQLSfa-MQgvEgZVkgYA_vNH_Gq_ybG0fT5YhXLeveJVmmDm9_8jA/viewform?embedded=true)
