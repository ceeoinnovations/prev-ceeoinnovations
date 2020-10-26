---
layout: post

title: How to Make a Project Page
description:  short description on how to make a project page
displayimg: sample_folder/cover.jpg
categories: ["DELETE CATEGORIES THAT DON'T APPLY","LabVIEW", "CNC", "Machine"]
authors: ["Milan", "author2"]
featured: false
date: 10-26-2020
linker: https://www.google.com
linkname: GOOGLE
draft: true
legal:  I solemly swear that I am up to no good.
---


<!--IMAGE_TEXT_OVERLAY creates a image with a text box over it--------------------->
<div class="image_text_overlay" markdown="1">
![Sample_Title](![Sample_Title](sample_folder/cover.jpg)


# Make Your Project Page
## tutorial on how to make your project page

This webpage is a guide on how to create project page on  CEEOINNOVATIONS portal. Follow along the steps, love with your heart, use your head for everything else (Captain D)

</div>

<!--document creates a grid of documentss--------------------->
<div class="free_write" markdown="1">

---

Dear Reader,

Welcome to the journey!

First things first - Duplicate the sample.markdown file. Rename it with suitable name. Create a folder with same name (not necessary, but very important!!) inside projects_assests folder. Remember markdown file outside projects_assets folder, and project folder inside the projects_assets folder.

As soon as you do this your page should be created which you can access by going to https://www.ceeoinnovations.github.io/projects/<projectname>.html


## Let's begin

Open the markdown file in your favorite text editor. (Caution!! Do not edit the sample file, edit the duplicate file!!)

You will see the following on the top. It is the front matter. Carefully edit the tags. Items like legal, linker, linkname are optional. Use them according to need!

---
layout: post

1. title: Your project tile, this appears on the thumbnail and project page
2. description:  short description (about 15 words ), this appears on thumbnail
3. displayimg: folder_name/image_name.extension, for example MachineControlToolkit/cover.jpeg ,make sure the image is square
4. categories: ["DELETE CATEGORIES THAT DON'T APPLY","LabVIEW", "CNC", "Machine"]
5. authors: ["author1", "author2"] (you can have multiple authors)
6. featured: false (true if you want it to appear on the featured section)
7. date: 7-09-2020 (date of publish - this is how the projects are sorted on the All projects section)
8. linker: https://drive.google.com/file/d/121SOGopm3A8Asyn82Torgmb0_WXdoahU/view?usp=sharing (url to the download/github/google site that you want to include in project page)
9. linkname: DOWNLOAD (text that will act as a hyperlink to your linker's link)
10. draft: true (false if you want to publish on the internet) {for preview go to https://ceeoinnovations.github.io/projects/<your_markdown_filename>.html}
11. legal:  {put your legal notice here.. if not delete the section}

---

## your_heading

Define heading with \#\# . It will put the text in the center with a large font.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla vitae nulla blandit luctus vel et orci. Quisque dapibus ipsum justo, vitae commodo nisl suscipit nec. Integer accumsan mollis purus, sed suscipit ante consequat vitae. Quisque ac gravida ipsum. Fusce nec sapien sit amet nibh vestibulum elementum. Cras tellus nunc, ultricies at egestas at, interdum in mauris. Pellentesque porta quis urna in vehicula. Integer sed lobortis orci, eu efficitur justo. Etiam tincidunt eu est sed condimentum. Praesent a metus vitae eros lacinia sollicitudin.

Donec tempus mauris lorem, eget congue arcu pharetra vel. Proin finibus tortor massa, eget tincidunt lacus vulputate posuere. Nam sit amet condimentum mi, at fermentum nibh. Phasellus tempor urna vulputate, vulputate purus non, consequat lorem. Suspendisse malesuada mattis mi elementum eleifend. Pellentesque quis varius mi, eget iaculis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Pellentesque luctus mi ipsum, eget consequat erat pulvinar vel. Phasellus imperdiet faucibus augue, id viverra orci cursus eu. Fusce fermentum arcu id nibh volutpat efficitur. Vestibulum enim metus, interdum sit amet sodales sed, tincidunt sed erat. Nulla in venenatis sem, nec bibendum nunc. Etiam tincidunt ex eu enim dictum aliquet. Donec et nibh dolor. Curabitur ac magna pellentesque, dignissim sapien non, ultrices turpis. Donec vestibulum rhoncus purus at interdum. Cras a feugiat leo, nec viverra odio.

.


## Examples

Donec nec erat eu dolor ornare suscipit. Maecenas consequat feugiat lectus, a sodales odio porttitor non. Praesent non nisi ac metus rhoncus lacinia. Sed sed magna a neque posuere gravida. Praesent tristique diam gravida leo fermentum, vel suscipit sapien rutrum. Aenean feugiat nibh vel lorem volutpat porta. Suspendisse venenatis, nibh eget hendrerit sodales, ante nisi sodales diam, feugiat consectetur libero nulla a purus. Mauris eu purus finibus urna tristique aliquet sit amet suscipit nisl. Proin viverra suscipit magna sed consequat. Vestibulum efficitur eu velit eget tincidunt. Aliquam congue mauris a dolor maximus, in ornare risus convallis. Pellentesque accumsan nibh quis iaculis mattis. Nullam lorem lorem, dapibus id magna id, ultrices scelerisque odio. Ut consequat pulvinar nunc vel fermentum. Curabitur tempor, purus nec volutpat congue, felis dui iaculis quam, eu vestibulum erat massa at nisl

If you want two images side by side
![Image1](sample_folder/Image1.jpg){:.left}![Image2](sample_folder/Image2.jpg){:.right}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla vitae nulla blandit luctus vel et orci. Quisque dapibus ipsum justo, vitae commodo nisl suscipit nec. Integer accumsan mollis purus, sed suscipit ante consequat vitae. Quisque ac gravida ipsum. Fusce nec sapien sit amet nibh vestibulum elementum. Cras tellus nunc, ultricies at egestas at, interdum in mauris. Pellentesque porta quis urna in vehicula. Integer sed lobortis orci, eu efficitur justo. Etiam tincidunt eu est sed condimentum. Praesent a metus vitae eros lacinia sollicitudin.

if you want an image in the center
![Image3](sample_folder/Image3.png)

Donec tempus mauris lorem, eget congue arcu pharetra vel. Proin finibus tortor massa, eget tincidunt lacus vulputate posuere. Nam sit amet condimentum mi, at fermentum nibh. Phasellus tempor urna vulputate, vulputate purus non, consequat lorem. Suspendisse malesuada mattis mi elementum eleifend. Pellentesque quis varius mi, eget iaculis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

*Italics*

In eget urna euismod, convallis augue sit amet, interdum lectus. Nulla egestas augue sed tortor convallis, eget pretium nulla aliquet. Donec a massa ac quam consequat molestie eu ut lacus. Duis ultrices pulvinar nisl quis mattis. Aliquam nec porta nunc. Quisque tincidunt est a mollis vulputate. Vestibulum porta diam id neque porta, in ullamcorper odio blandit. Duis quis nunc ex. Nulla imperdiet, metus nec eleifend vulputate, sapien augue varius diam, ut fermentum dolor urna vestibulum nulla. Ut sit amet suscipit urna. Phasellus commodo volutpat enim, bibendum euismod ligula volutpat elementum. Morbi convallis, nisl id condimentum tincidunt, neque turpis sagittis arcu, at euismod orci enim sed dui. Quisque egestas, est ac suscipit varius, risus ante blandit lectus, sit amet tristique ex velit eget enim. Nunc dignissim sem vitae quam viverra, ut accumsan enim vestibulum. Vivamus auctor faucibus dolor, sit amet sodales lacus ultricies quis. Nam egestas eget est nec sagittis.



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
