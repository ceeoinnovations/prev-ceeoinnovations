---
layout: post

title: Machine Control Toolkit for LabVIEW
description:  a software library for LabVIEW that enables users to control digital fabrication machines that interpret G-Code.
displayimg: MachineControlToolkit/cover.png
categories: ["DELETE CATEGORIES THAT DON'T APPLY","LabVIEW", "CNC", "Machine"]
authors: ["Sara Willner-Giwerc"]
featured: false
date: 7-09-2020

---


<!--IMAGE_TEXT_OVERLAY creates a image with a text box over it--------------------->
<div class="image_text_overlay" markdown="1">
![MachineControlToolkit](![machine](MachineControlToolkit/cover.png)
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

*insert image here*

Machines are connected via USB to the computer running the machine control code, and serial communication is used to connect to, read from, write to, and disconnect from a machine. The machine control VIs can be placed in a buffer setup (which comes part of the toolkit), to create custom interfaces to control a fabrication machine. This structure allows users to place a set of controls on their front panel, which when changed cause the appropriate commands to be sent to the machine.
*insert image here*
Users can also use the Vis in the Machine Control Toolkit to create G-Code programs to then fabricate. The text to G-Code feature allows users to simply type in text, and the VI will generate the G-Code to fabricate that text. The images below show the simple programs for a CNC machine and the uArm Swift Pro, which generate the G-Code necessary to fabricate the phrase "Tufts CEEO". These screenshots also show the preview G-Code feature of the toolkit, which lets users see what their file will look like before fabricating it.
*insert examples here*
Users can then send arrays of G-Code commands, or entire G-Code files, to their fabrication machine using a VI from the toolkit.
*insert image here*
Combining all these features with the extensive existing set of VIs in LabVIEW, users can create not only control their machines, but also connect their machines to external devices and platforms to experience making in a whole new way.
The smart brick houses all of the system's intelligence in a LEGO Compatible 3D printed casing with a laser-cut bottom. To enable students to easily turn on and off the smart brick, the battery wires are routed through two neodymium magnets. A small magnetic bumper with two magnets connected by a wire acts as a switch to turn on and off the bricks. The Grove sensors are all attached to laser-cut acrylic LEGO mounts, which allows students to easily integrate them directly into their LEGO creations.

</div>
<div class="document" markdown="1">
[Getting Started](MachineControlToolkit/GettingStarted.pdf)
</div>

|![schematic](SymbIOTics/LabVIEW.png){:.half}|
|:--:|
| *SymbIOTics LabVIEW Palette and Example Dashboard* |  <br/><br/><br/><br/>

Students can control their actuators, monitor sensor values, and write rules for their system using the drag and drop dashboard interface on LabVIEW. Since the SymbIOTics system is designed for students ages 7 and up, coding interface is made as simple as possible. Students simply select the Grove sensor or actuator module they want to add to the dashboard from the SymbIOTics palette, and drop it onto their dashboard. From there they can move the object around and change different controls as desired. All user-controlled components of the interface are either drop-down menus, clickable buttons, or numeric controls, eliminating the need for students to write text-based code. Students can also drag and drop “Rules” modules onto their dashboard, which allows them to create a correlation between a sensor and an actuator.


## Tests

|||
|:----:|:----:|
|![zoo1](SymbIOTics/zoo1.jpg){:.medium}|![zoo2](SymbIOTics/zoo2.jpg){:.medium}|<br/><br/>


||
|                    :----:|
|                             *Example Zoo Exhibits Built With SymbIOTics System*| <br/><br/><br/><br/>

The system was tested in a 2nd grade coding classroom. Students were challenged to build an Internet of Things zoo. After incorporating sensors and actuators into their own zoo exhibits, they began to leverage the power of a network of devices to build dashboards that enabled a zoo keeper to access information about all of the zoo exhibits in the class. The results showed that second grade students were easily able to understand the main idea behind the Internet of Things and use the benefits of connected devices to build more complex systems than they would have been able to build without an internet connection. Of the fourteen students who tested the platform, every student successfully built their own IoT artifact, and eleven students were able build their own IoT system as well as interact with their classmates’ systems in a meaningful way. The solution diversity and important peer-to-peer discussions sparked by the use of the new platform illustrated both the technical viability of the new technology and the important learning outcomes generated by enabling students to create their own smart connected products.


*The SymbIOTics system is a work in progress.*

## Publications

1. [Willner-Giwerc, S., Rogers, C., & Wendell, K. (2020). The SymbIOTics System: Designing an Internet of Things Platform for Elementary School Students. *International Journal of Designs for Learning, 11(2)*, 64-79. https://doi.org/10.14434/ijdl.v11i2.26719](https://scholarworks.iu.edu/journals/index.php/ijdl/article/view/26719)

</div>
<div class="document" markdown="1">
[Pubications](SymbIOTics/article.pdf)
</div>
