/*Creates a Playlist Page Dynamically From a Markdown File
* Allison Moore
* 6/27/20
*/
function CreatePlaylistMain(){
     console.log("Create Playlist");
     var mydls = CollectAllDivs();

}

/*CollectAllDivs
 *Collect an Array of all the divs in the Markdown file
* And return that Array
*/
function CollectAllDivs(){
     var mycontent = document.getElementById("mycontent");
     var mydls = mycontent.getElementsByTagName("dl");
     for (var i = 0; i < mydls.length; i++){
          CreatePlaylistSection(mydls[i]);
     }
     return mydls;
}
 /* Create Sections by Div
 * loops though the divs and creates sections in order to be appended
 * to the main document based on div name
 * UPDATE AS NEW SECTIONS ARE MADE
 */
 function CreatePlaylistSection(mydl){
/*       let simplediv = document.createElement("div");
      simplediv.className = "playlist_section";
      var playlist_sec_format = document.getElementById(sample_playlist_section);
      simplediv.innerHTML = playlist_sec_format.innerHTML;
      var mydts = mydl.getElementsByTagName("dt");
     for(var i = 0; i < mydts.length; i++){
           console.log(mydts[i].innerHTML);
           if(mydts[i].innerHTML == "title"){
               // mydts.nextSibling;
          } else if(mydts[i].innerHTML == "placematpic"){

          } else if (mydts[i].innerHTML == "gallery"){

          } else if (mydts[i].innerHTML == "description"){

           } else {

           }
      }*/
}
