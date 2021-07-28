---
layout: post

title: Machine Control Toolkit for LabVIEW
description:  a software library for LabVIEW that enables users to control digital fabrication machines that interpret G-Code.
displayimg: MachineControlToolkit/cover.jpeg
categories: ["DELETE CATEGORIES THAT DON'T APPLY","LabVIEW", "CNC", "Machine"]
authors: ["Sara Willner-Giwerc", "Matthew Mueller"]
featured: false
date: 7-09-2020
linker: https://drive.google.com/file/d/121SOGopm3A8Asyn82Torgmb0_WXdoahU/view?usp=sharing
linkname: DOWNLOAD
draft: false

---


<!--IMAGE_TEXT_OVERLAY creates a image with a text box over it--------------------->
<div class="image_text_overlay" markdown="1">
![MachineControlToolkit](![machine](MachineControlToolkit/cover.jpeg)
# Machine Control Toolkit for LabVIEW

The Machine Control Toolkit is a software library for LabVIEW that enables users to control digital fabrication machines that interpret G-Code. The toolkit breaks down standard G-Code commands into VIs that users can easily manipulate to generate G-Code toolpaths and design their own machine control interfaces.
</div>

<!--document creates a grid of documentss--------------------->
<div class="free_write" markdown="1">



## Overview


Currently, digital fabrication tools (such as CNC machines, 3D printers, and Laser Cutters) are trapped inside a black box. Each machine has a default software that it comes with, and interfaces with only that software. However, at the heart of how all of these tools work is something called G-Code. G-Code consists of simple commands and coordinates that tell the machine where to go and what to do. By harnessing the simplicity of G-Code and the modularity of LabVIEW, the machine control toolkit breaks down the black box and enables users to connect their digital fabrication tools to other platforms and devices.

The goal of the toolkit is to provide an entry-point for beginning makers to learn about G-Code, while also enabling advanced makers to control their digital fabrication tools in a new way! Currently, the toolkit only supports the Grbl CNC firmware and the uArm Swift Pro. The goal for future releases is to support more machine firmwares and expand the VI library to include controls for standard laser cutters and 3D printers.



## How it works

The Machine Control Toolkit transforms standard G-Code commands into LabVIEW VIs. Users can specify inputs, such as position, feedrate, spindle speed, etc, and the VIs will return the G-Code string to perform the desired action.

![Image1](MachineControlToolkit/Image1.png){:.left}![Image2](MachineControlToolkit/Image2.png){:.right}

Machines are connected via USB to the computer running the machine control code, and serial communication is used to connect to, read from, write to, and disconnect from a machine. The machine control VIs can be placed in a buffer setup (which comes part of the toolkit), to create custom interfaces to control a fabrication machine. This structure allows users to place a set of controls on their front panel, which when changed cause the appropriate commands to be sent to the machine.


![Image3](MachineControlToolkit/Image3.png)

Users can also use the Vis in the Machine Control Toolkit to create G-Code programs to then fabricate. The text to G-Code feature allows users to simply type in text, and the VI will generate the G-Code to fabricate that text. The images below show the simple programs for a CNC machine and the uArm Swift Pro, which generate the G-Code necessary to fabricate the phrase "Tufts CEEO". These screenshots also show the preview G-Code feature of the toolkit, which lets users see what their file will look like before fabricating it.

*CNC Machine Example:*

![Image4](MachineControlToolkit/Image4.png){:.left}![Image5](MachineControlToolkit/Image5.png){:.right}


*uArm Swift Pro Example:*

![Image6](MachineControlToolkit/Image6.png){:.left}![Image7](MachineControlToolkit/Image7.png){:.right}


Users can then send arrays of G-Code commands, or entire G-Code files, to their fabrication machine using a VI from the toolkit.

![Image8](MachineControlToolkit/Image8.png)

Combining all these features with the extensive existing set of VIs in LabVIEW, users can create not only control their machines, but also connect their machines to external devices and platforms to experience making in a whole new way.

## Download
Download the Machine Control Toolkit for LabVIEW ([here](https://drive.google.com/file/d/121SOGopm3A8Asyn82Torgmb0_WXdoahU/view?usp=sharing)). Unzip and place the folder titled "Machine Control Toolkit" in your National Instruments user.lib folder, and the toolkit will appear in your user library palette.

This toolkit was designed for LabVIEW 2016 and is no longer being actively supported. Contact the Tufts Center for Engineering Education and Outreach (ceeo@tufts.edu) to share examples of what you're using the toolkit for.

## Publications

1. Wilner-Giwerc, S., Mueller, M. (October 2017). “LabVIEW Machine Control Toolkit Demo”. Demo at FabLearn Conference 2017, Stanford, CA.
</div>


<div class="document" markdown="1">
[Getting Started](MachineControlToolkit/GettingStarted.pdf)
[UARM SWIFT PRO EXAMPLES](MachineControlToolkit/UARM.pdf)
[CNC MACHINES EXAMPLES](MachineControlToolkit/CNC.pdf)
</div>

<div class="document" markdown="1">
[Poster](MachineControlToolkit/article.pdf)
</div>
