/*Creates a Website Page Dynamically From a Markdown File
* Allison Moore
* 6/27/20
*/

function CreateVideoMain(){
     console.log("Create Videos");
     //await CreateWebMain();
     var mydivs = CollectAllVideoDivs();
     CreateSectionsByVideoDiv(mydivs);
}


SimpleJekyllSearch({
searchInput: document.getElementById('secretsearch'),
resultsContainer: document.getElementById('results-container'),
json: '/search.json'
});


var buttons = document.getElementsByClass("myButton");
(for j = 0; j < buttons.length; j++){
buttons[j].addEventListener("click", ButtonAssigner(buttons(j) ) );
 }

function ButtonAssigner(button) {
document.getElementById("secretsearch").innerHTML = button.innerHTML;
}

/*CollectAllDivs
 *Collect an Array of all the divs in the Markdown file
* And return that Array
*/
function CollectAllVideoDivs(){
     var mycontent = document.getElementById("mycontent");
     var mydivs =  mycontent.getElementsByTagName("div");
     return mydivs;
}
 /* Create Sections by Div
 * loops though the divs and creates sections in order to be appended
 * to the main document based on div name
 * UPDATE AS NEW SECTIONS ARE MADE
 */
 function CreateSectionsByVideoDiv(mydivs){
      for (var i = 0; i < mydivs.length; i++){
           if ( mydivs[i].classList.contains("video_text_overlay")){
                Video_CreateHeaderVideo(mydivs[i]);
           }

      }
}

//CREATE VIDEO WITH TEXT=======================================================
/*CreateVideoHeader
* Create and allocate a header video section
* collects image link, sub header, header, and description, if existing
*
*/
function Video_CreateHeaderVideo(mydivsi){
     //collect the template for header img
     var sampledatasection  = document.getElementsByClassName('sampledatasectionVO')[0];


     //collect tag elements from div
     var myh1 = CheckifVoidandAssign_Gen("h1", 0, mydivsi);
     var myh2 = CheckifVoidandAssign_Gen("h2", 0, mydivsi);
     var myp = CheckifVoidandAssign_P_Gen(mydivsi);
     var myiframe = CheckifVoidandAssign_Vid_Gen(0, mydivsi);

     //create new div and copy sample data
     var newdiv = document.createElement("div");
     newdiv.innerHTML = sampledatasection.innerHTML;

     //get sections of old div
     var mainheader = newdiv.getElementsByClassName('mainheaderVO')[0];
     var subheader = newdiv.getElementsByClassName('subheaderVO')[0];
     var myparagraph = newdiv.getElementsByClassName('myparagraphVO')[0];
     var mynewiframe = newdiv.getElementsByClassName('myiframehere')[0];

     //reassign with markdown values
     mainheader.innerHTML = myh2.innerHTML;
     subheader.innerHTML = myh1.innerHTML;
     myparagraph.innerHTML = myp.innerHTML;
     mynewiframe.src = myiframe.src;


     //append copy to append image_text_overlay
     var append_div_here = document.getElementById("myappendcontent");
     append_div_here.appendChild(newdiv);


}
