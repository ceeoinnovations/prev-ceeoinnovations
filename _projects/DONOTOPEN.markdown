---
layout: post

title: How to Make a Project
description:  short description on how to make a project page
displayimg: sample_folder/cover.jpg
categories: ["DELETE CATEGORIES THAT DON'T APPLY","LabVIEW", "CNC", "Machine"]
authors: ["Milan", "author2"]
featured: false
date: 15-09-2020
linker: https://github.com/ceeoinnovations/ceeoinnovations.github.io/tree/SeptemberTest/_projects
linkname: Github
draft: true
hidden: true
legal:  I solemly swear that I am up to no good.

---


<!--IMAGE_TEXT_OVERLAY creates a image with a text box over it--------------------->
<div class="image_text_overlay" markdown="1">
![Sample_Title](![Sample_Title](sample_folder/cover.jpg)


# Make Your Project Page
## tutorial on how to make your project page

This webpage is a guide on how to create a project page on  CEEOINNOVATIONS portal. Follow along the steps, love with your heart, use your head for everything else (Captain D)

</div>

<!--document creates a grid of documentss--------------------->
<div class="free_write" markdown="1">

Hello friend,

Welcome to the journey!

First things first - Click on the Github link above (under the project name) to go the Github page. Find and <b>duplicate</b> the sample.markdown file. <b>Rename</b> it with suitable name. Create a folder with the same name (not necessary, but very important!!) inside <b>projects_assests folder</b>. Remember markdown file outside projects_assets folder, and project folder inside the projects_assets folder.

As soon as you do this your page should be created on ceeoinnovations.github.io which you can access by going to https://www.ceeoinnovations.github.io/projects/\<projectname\>.html


## Let's begin

Open the markdown file in your favorite text editor. (Caution!! Do not edit the sample file, edit the duplicate file!!)

What you see on the top between --- and ---  is the front matter. Carefully edit the tags. Items like legal, linker, linkname are optional. Use them according to need!

Here are things that you can use!

1. title: Your project tile, this appears on the thumbnail and project page
2. description:  short description (about 15 words ), this appears on thumbnail
3. displayimg: folder_name/image_name.extension, for example MachineControlToolkit/cover.jpeg ,make sure the image is square
4. categories: ["DELETE CATEGORIES THAT DON'T APPLY","LabVIEW", "CNC", "Machine", "SPIKE Prime" , "3D Printing", "EV3/NXT", "Robotics", "Makerspaces"]
5. authors: ["author1", "author2"] (you can have multiple authors)
6. featured: true/false (true if you want it to appear on the featured section, if you want it to feature you should get written consent from Chris)
7. date: 10-26-2020 Published date - this is how the projects are sorted in the All projects section. It has to be in the given format  , otherwise github gets angry!
8. linker: URL to the download/github/google site that you want to include in project page
9. linkname: Text that will act as a hyperlink to your linker's link)
10. draft: true/false (false if you want to publish on the internet) {for preview go to https://ceeoinnovations.github.io/projects/<your_markdown_filename>.html}
11. legal:  put your legal notice here.. if not delete the section

## free_write section

There are different ways you can present your content. Depending on how you want to present you will want to put it in either free_write,  For example this text that you are seeing is in a free_write section. You can write text and put images in this section. I will show you what else is out there in later sections.
Define heading with \#\# . It will put the text in the center with a large font.

## Examples

If you want two images side by side

![Image1](sample_folder/Image1.jpg){:.left}![Image1](sample_folder/Image1.jpg){:.right}

ed condimentum. Praesent a metus vitae eros lacinia sollicitudin.

if you want an image in the center
![Image3](sample_folder/Image2.png)


*Italics*

sodales lacus ultricies quis. Nam egestas eget est nec sagittis.



## Publications

1. Putting 1. creates a list of items
2. and organizes the text as a list
</div>


<div class="document" markdown="1">
[Getting Started](MachineControlToolkit/GettingStarted.pdf)
[UARM SWIFT PRO EXAMPLES](MachineControlToolkit/UARM.pdf)
[CNC MACHINES EXAMPLES](MachineControlToolkit/CNC.pdf)
</div>

<div class="document" markdown="1">
[Poster](MachineControlToolkit/article.pdf)
</div>
