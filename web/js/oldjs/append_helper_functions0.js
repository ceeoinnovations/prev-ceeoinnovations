function AppendNewDiv(append_here, newdiv, place_in_loop){
     var element = document.getElementsByClassName(append_here)[place_in_loop];
     element.appendChild(newdiv);
     return element;
}
function AppendNewDivbyId(append_here, newdiv){
     var element = document.getElementById(append_here);
     element.appendChild(newdiv);
     return element;
}
function CreatenewDiv(new_class_name, get_class_with_data){
     var newdiv = document.createElement("div");
     newdiv.className = new_class_name;
     var sampledatasection = document.getElementsByClassName(get_class_with_data)[0];
     newdiv.innerHTML = sampledatasection.innerHTML;
     return newdiv;
}

function AddInnerHTMLElementtoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.innerHTML = copy_this_data.innerHTML;
     return copyhere;
}

function CopyInnerHTMLtoDiv_byId(get_Id, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_Id);
     copyhere.innerHTML = copy_this_data.innerHTML;
     return copyhere;
}

/* CheckifVoidandAssign_Gen
*  collects a given element  of a given type from a div and checks if it is void
* if it is void returns an empty voidvalue
* else returns the value of the given markdown element
*/
function CheckifVoidandAssign_Gen(datatype,dataplace, mydivsi){
     var setlooplist = mydivsi.getElementsByTagName(datatype)[dataplace];
     if(typeof(setlooplist) == 'undefined' || setlooplist == 'null'){
          console.log("element was empty");
          looplist = document.getElementsByClassName("voidvalue")[0];

     } else {
          looplist = mydivsi.getElementsByTagName(datatype)[dataplace];
     }

     return looplist;
}

/* CheckifVoidandAssign_P_Gen
* Images and Paragraphs seem to get confused by getElementbyTag
* If an image exists, the function assumes the second p is the text
* returns p value
*/
function CheckifVoidandAssign_P_Gen(mydivsi){
     var looplistVO;
     var setlooplistVOpic = mydivsi.getElementsByTagName("img")[0];

     if(typeof(setlooplistVOpic) == 'undefined' || setlooplistVO == 'null'){
          var setlooplistVO = mydivsi.getElementsByTagName("p")[0];
     } else {
          var setlooplistVO = mydivsi.getElementsByTagName("p")[1];
     }

     if(typeof(setlooplistVO) == 'undefined' || setlooplistVO == 'null'){
          looplistVO = document.getElementsByClassName("voidvalue")[0];
     } else {
          looplistVO = setlooplistVO;
     }

     return looplistVO;
}

/* NOT DONE  CheckifVoidandAssign_LoopingP_Gen
* Images and Paragraphs seem to get confused by getElementbyTag
* Collects all elements in div, if it runs into an image before a div when
*looping lets second image value to 0
* returns p value
*/
function CheckifVoidandAssign_LoopingP_Gen(loopplace, mydivsi){
     var looplistVO;
     var allel = mydivsi.getElementsByTagName("*");

     for (var i = 0; i < allel.length; i++ ) {
          if(allel[i].tagName == "img"){

          }

     }
     if(typeof(setlooplistVOpic) == 'undefined' || setlooplistVO == 'null'){
          var setlooplistVO = mydivsi.getElementsByTagName("p")[0];
     } else {
          var setlooplistVO = mydivsi.getElementsByTagName("p")[1];
     }

     if(typeof(setlooplistVO) == 'undefined' || setlooplistVO == 'null'){
          looplistVO = document.getElementsByClassName("voidvalue")[0];
     } else {
          looplistVO = setlooplistVO;
     }

     return looplistVO;
}

/* CheckifVoidandAssign_Img_Gen
* Checks if Image Value is void
* REturns image if it exists or a void value
*/
function CheckifVoidandAssign_Img_Gen(dataplace, mydivsi){
     var setlooplist = mydivsi.getElementsByTagName("img")[dataplace];
     if(typeof(setlooplist) == 'undefined' || setlooplist == 'null'){
          looplist = document.getElementsByClassName("imgvoidvalue")[0];

     } else {
          looplist = mydivsi.getElementsByTagName("img")[dataplace];
     }

     return looplist;
}
/* CheckifVoidandAssign_Vid
* Checks if Vid Value is void
* REturns image if it exists or a void value
*/
function CheckifVoidandAssign_Vid_Gen(dataplace, mydivsi){
     var looplistVO;
     var setlooplistVO = mydivsi.getElementsByTagName("iframe")[dataplace];
     if(typeof(setlooplistVO) == 'undefined' || setlooplistVO == 'null'){
          looplistVO = document.getElementsByClassName("iframevoidvalue")[0];

     } else {
          looplistVO = mydivsi.getElementsByTagName("iframe")[dataplace];
     }

     return looplistVO;
}
