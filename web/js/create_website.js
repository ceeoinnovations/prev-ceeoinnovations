/*Creates a Website Page Dynamically From a Markdown File
* Allison Moore
* 6/27/20
*/
function CreateWebMain(){
     console.log("Create Web");
     var mydivs = CollectAllDivs();
     CreateSectionsByDiv(mydivs);
}

/*CollectAllDivs
 *Collect an Array of all the divs in the Markdown file
* And return that Array
*/
function CollectAllDivs(){
     var mycontent = document.getElementById("mycontent");
     var mydivs =  mycontent.getElementsByTagName("div");
     return mydivs;
}
 /* Create Sections by Div
 * loops though the divs and creates sections in order to be appended
 * to the main document based on div name
 * UPDATE AS NEW SECTIONS ARE MADE
 */
 function CreateSectionsByDiv(mydivs){
      for (var i = 0; i < mydivs.length; i++){
           if ( mydivs[i].classList.contains("site_title")){
                CreateSiteTitle(mydivs[i]);


           } else if ( mydivs[i].classList.contains("image_text_overlay")){
                CreateHeaderImg(mydivs[i]);
           }else if ( mydivs[i].classList.contains("document")){
               CreateDocuments(mydivs[i]);

          } else if ( mydivs[i].classList.contains("video_text_overlay")){
                 CreateHeaderVideo(mydivs[i]);
          }    else if ( mydivs[i].classList.contains("free_write")){
                 CreateFreeWrite(mydivs[i]);
          } else if (mydivs[i].classList.contains("link_grid")){
                 //CreateLinks(mydivs[i]);
          }
          else {
                console.log("Div does not have a valid value");
           }

           mydivs[i].className += (" USEDDIV");
           let divvals = mydivs[i].getElementsByTagName('*');
           for(let i = 0; i < divvals.length;i++){
                divvals[i].className += (" USEDDIV");
          }

      }

       CreateSimpleSite();
}
//CreateSimpleSite==============================================================
function CreateSimpleSite(){
     var mycontent = document.getElementById("mycontent");
     let contentvals = mycontent.getElementsByTagName('*');
     let simplediv = document.createElement("div");

     for(let i = 0; i < contentvals.length;i++){
          if(!(contentvals[i]).classList.contains('USEDDIV')) {
               simplediv.append(contentvals[i]);
          }

     }
     console.log("simplediv.innerHTML");
     console.log(simplediv.innerHTML);

     if(simplediv.innerHTML){
          CreateFreeWrite(simplediv);
     }
}

//CREATELINKS==================================================================
function CreateLinks(mydivsi){
               //initialize values from markdown to ter to header
               var sectionheader = CollectmyLinkHeader(mydivsi);

               var mylinkimgarray = mydivsi.getElementsByTagName('img');
               var mylinkarray = mydivsi.getElementsByTagName('a');
               var mylinkparray = mydivsi.getElementsByTagName('p');



               var largernewdivPI = CreatenewDiv("largerdatasection", "largerpdfsampledatasection");

               var largerelementPI = document.getElementById("myappendcontent");

               var sectionpdfheader = largernewdivPI.getElementsByClassName('pdfsectiontitle')[0];

               sectionpdfheader.innerHTML = sectionheaderPI.innerHTML;

               //Create new div that copies append here to append pdfs to
               //var pdfcontain = CreatenewDiv("sampleappendherePI row mb-5 no-gutters","sampleappendherePI");

               var pdfcontain = document.createElement("div");
               pdfcontain.className = "sampleappendherePI row mb-5 no-gutters";
               pdfcontain = CreatePdfGrid(pdfcontain, mydivsi, mylinkarrayPI);

               //create new div that copies all
               largernewdivPI.getElementsByClassName("sampleappendherePI")[0].innerHTML = pdfcontain.innerHTML;

               //Create a third div that copies rows into full section
               var myoverall = document.getElementsByClassName("collectthispdfsection")[0];

               var finalpdfdiv = CreatenewDiv("pdfdatasection page-section clearfix","collectthispdfsection");

               var myfinalappend = finalpdfdiv.getElementsByClassName("largerappendherePI")[0];
               myfinalappend.innerHTML = largernewdivPI.innerHTML;

               //reassignme = pdfcontain;
               //largernewdivPI.getElementsByClassName("sampleappendherePI")[0].innerHTML = reassignme.innerHTML;
               largerelementPI.append(finalpdfdiv);
}

function CreatePdfGrid(pdfcontain, mydivsi, mylinkarrayPI){
     var i;
     for(i=0;i < (mylinkarrayPI.length); i++){
          //creating a new div with a class name that copies the innerhtml of another div
          if (mylinkarrayPI.length%4==0){
               var newdivPI = CreatenewDiv("col-sm-3 col-md-3 col-lg-3 pdfdatasection", "pdfsampledatasection");
          } else if(mylinkarrayPI.length%3==0){
               var newdivPI = CreatenewDiv("col-sm-4 col-md-4 col-lg-4 pdfdatasection", "pdfsampledatasection");
          } else if(mylinkarrayPI.length%2==0){
               var newdivPI = CreatenewDiv("col-sm-6 col-md-6 col-lg-6 pdfdatasection", "pdfsampledatasection");
          }else if(mylinkarrayPI.length==1){
               var newdivPI = CreatenewDiv("col-sm col-md col-lg pdfdatasection", "pdfsampledatasection");
          } else{
               var newdivPI = CreatenewDiv("col-sm-4 col-md-4 col-lg-4 pdfdatasection", "pdfsampledatasection");
          }

          //copy elements from markdown to new div
          var copythis = document.getElementsByClassName("pdfsampledatasection")[0];
          newdivPI.innerHTML = copythis.innerHTML;

          //copy title to pdfheader
          var mypdftitle = mylinkarrayPI[i].innerHTML;
          newdivPI.getElementsByClassName("pdfheader")[0].innerHTML =mypdftitle;
          //copy link to button and iframe
          AddHrefSRCtoNewDiv_Prepend("mypdf", 0, mylinkarrayPI[i], newdivPI);
          AddHreftoNewDiv_Prepend("click-to-download", 0, mylinkarrayPI[i], newdivPI);

          //Create new div that copies append here to append content to
          pdfcontain.append(newdivPI);

     }
     return pdfcontain;
}

function CollectmyLinkHeader(section_to_check){
     var sectionheaderPI = section_to_check.getElementsByTagName('h1')[0];
     var sectionheaderPI = LinkEmptyHeaderCheck(sectionheaderPI,section_to_check);

     return sectionheaderPI;
}

function LinkEmptyHeaderCheck(sectionheaderPI, section_to_check){
     if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
          var sectionheaderPI = document.getElementsByClassName("voidvalue")[0];;
     }
     return sectionheaderPI;
}
function AddHrefSRCtoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.src = copy_this_data.href;
     return copyhere;
}
function AddHreftoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.href = copy_this_data.href;
     return copyhere;
}

function AddHrefSRCtoNewDiv_Prepend(get_class, at_place, copy_this_data, search_here){
     let copyhere = search_here.getElementsByClassName(get_class)[at_place];

         if (!(is_url(copy_this_data.href)) || copy_this_data.href.indexOf("/ceeoinnovations") >= 0 ){
           //   if(!(copy_this_data.href.contains("project_assets")){
             $(copy_this_data).attr('href' , "project_assets/" + $(copy_this_data).attr('href'));
       // }
      }
     copyhere.src = copy_this_data.href;
     return copyhere;
}
//reffed from Ashish Kumar's work here https://www.quora.com/What-is-the-best-way-to-validate-for-a-URL-in-JavaScript
function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}


//CREATEFREEWRITE==============================================================
/*CreateFreeWrite
* Create and allocate a free_write section
* collects all markdown and just slaps it in there
*
*/

function CreateFreeWrite(mydivsi){


     var sampledatasection= document.getElementsByClassName('sample_free_write_content_container_container')[0];

     //make and append a copy of sample data section
     var newdiv = document.createElement("div");
     newdiv.className = "page-section";

     newdiv.innerHTML = sampledatasection.innerHTML;


     newdiv.getElementsByClassName('free_write_content')[0].innerHTML = mydivsi.innerHTML;

     var myimages = newdiv.getElementsByTagName("img");
     for (var i = 0; i < myimages.length; i++){

              if (!(is_url(myimages[i].src)) || myimages[i].src.indexOf("/ceeoinnovations") >= 0)
              {
          $(myimages[i]).attr('src' , "project_assets/" + $(myimages[i]).attr('src'));
               }
          $(myimages[i]).attr('class' , "imgOnly");

     }

     $('.free_write_content p').each(function(i){          // For each paragraph
    if ( ($(this).find('img').length) &&     // If there's an image
         (!$.trim($(this).text()).length))   // and there's no text
    {
         if($(this).find('img').length > 1){
            $(this).addClass('p_imgOnly');
       } else{
              $(this).addClass('lonely_p_imgOnly p_imgOnly');
       }

    }

});

     var p_arr=  document.getElementsByClassName('p_imgOnly');

     for(let i=0;i < (p_arr.length); i++){

          let img_arr = p_arr[i].getElementsByTagName("img");

          for(let j = 0; j < img_arr.length; j++){

          if (img_arr.length%4==0){
               $(img_arr[j]).attr('class' , "imgOnly");
          } else if(img_arr.length%3==0){
               $(img_arr[j]).attr('class' , "imgOnly");
          } else if(img_arr.length%2==0){
               $(img_arr[j]).attr('class' , "imgOnly");
          }else if(img_arr.length<=1){
               $(img_arr[j]).attr('class' , "imgOnly");
          } else{
               $(img_arr[j]).attr('class' , "imgOnly");
          }
     }


     }
     //append content to "appendhere"
     var append_div_here = document.getElementById("myappendcontent");

     append_div_here.appendChild(newdiv);

}

//CREATE VIDEO WITH TEXT=======================================================

/*CreateVideoHeader
* Create and allocate a header video section
* collects image link, sub header, header, and description, if existing
*
*/
function CreateHeaderVideo(mydivsi){
     let testlink = mydivsi.getElementsByTagName('a');
     if(testlink.length > 0){
     if(!(testlink[0].href.includes("--- paste ")) ){
          if(testlink[0].href.includes("https://youtu.be")){
                YouTubeCreateHeaderVideo(mydivsi);
          }
          }
     }
}
/*CreateVideoHeader
* Create and allocate a header video section
* collects image link, sub header, header, and description, if existing
*
*/
function YouTubeCreateHeaderVideo(mydivsi){
     //collect the template for header img
     let hastext = true;
     var sampledatasection  = document.getElementsByClassName('sampledatasectionVO')[0];
     var no_text_sampledatasection  = document.getElementsByClassName('no_text_sampledatasectionVO')[0];


     var h1void =  CheckifVoid_Gen("h1", 0, mydivsi);
     var h2void = CheckifVoid_Gen("h2", 0, mydivsi);
     var pvoid = CheckifVoid_P_Gen(mydivsi);

     if((h1void) && (h2void) && (pvoid) ){
          hastext = false;

     }


     if(hastext){
          //collect tag elements from div
          var myh1 = CheckifVoidandAssign_Gen("h1", 0, mydivsi);
          var myh2 = CheckifVoidandAssign_Gen("h2", 0, mydivsi);
          var myp = CheckifVoidandAssign_P_Gen(mydivsi);
     }

     var mypicturelink = CheckifVoidandAssign_Gen("a", 0, mydivsi);
     var my_youtube_code = mypicturelink.href.replace('https://youtu.be/', '');
     var my_youtube_description = mypicturelink.innerHTML;


     //create new div and copy sample data
     let newdiv = document.createElement("div");
     let mynewiframe;
     let mainheader;
     let subheader;
     let myparagraph;

     if(hastext){
     newdiv.innerHTML = sampledatasection.innerHTML;
          //get sections of old div
          mainheader = newdiv.getElementsByClassName('mainheaderVO')[0];
          subheader = newdiv.getElementsByClassName('subheaderVO')[0];
          myparagraph = newdiv.getElementsByClassName('myparagraphVO')[0];
          mynewiframe = newdiv.getElementsByClassName('myiframehere')[0];

          //reassign with markdown values
          mainheader.innerHTML = myh2.innerHTML;
          subheader.innerHTML = myh1.innerHTML;
          myparagraph.innerHTML = myp.innerHTML;
     } else{
          newdiv.innerHTML = no_text_sampledatasection.innerHTML;

          mynewiframe = newdiv.getElementsByClassName('myiframehere')[0];


     }

     //getinnerhtml of newsrcdoc
     var newsrcdoc = document.getElementById('newsrcdoc');
     var newsrcdoc_a = newsrcdoc.getElementsByTagName("a")[0];
     var newsrcdoc_img = newsrcdoc.getElementsByTagName("img")[0];

     //mypicturelink
     var myfullpicturelink = document.createElement("p");
     myfullpicturelink.innerHTML = my_youtube_code;
     $(myfullpicturelink).prepend("https://www.youtube.com/embed/");
     $(myfullpicturelink).append("?autoplay=1");

     //myimglink
     var myfullimglink = document.createElement("p");
     myfullimglink.innerHTML = my_youtube_code;
     $(myfullimglink).prepend("https://img.youtube.com/vi/");
     $(myfullimglink).append("/hqdefault.jpg");

     //correctedlinks
     newsrcdoc_a.href = myfullpicturelink.innerHTML;
     newsrcdoc_img.src = myfullimglink.innerHTML;
     newsrcdoc_img.alt = my_youtube_description;

     newsrcdoc.setAttribute("srcdoc", "demoValue");
     mynewiframe.srcdoc = newsrcdoc.innerHTML;

     //append copy to append image_text_overlay
     var append_div_here = document.getElementById("myappendcontent");
     append_div_here.appendChild(newdiv);


}

//CREATE PDF=======================================================
function CreateDocuments(mydivsi){
               //initialize values from markdown to ter to header
               var sectionheaderPI = CollectmyHeader(mydivsi);

               var mylinkarrayPI = mydivsi.getElementsByTagName('a');

               var largernewdivPI = CreatenewDiv("largerpdfdatasection", "largerpdfsampledatasection");

               var largerelementPI = document.getElementById("myappendcontent");

               var sectionpdfheader = largernewdivPI.getElementsByClassName('pdfsectiontitle')[0];

               sectionpdfheader.innerHTML = sectionheaderPI.innerHTML;

               //Create new div that copies append here to append pdfs to
               //var pdfcontain = CreatenewDiv("sampleappendherePI row mb-5 no-gutters","sampleappendherePI");
               var pdfcontain = document.createElement("div");
               pdfcontain.className = "sampleappendherePI row mb-5 no-gutters";
               pdfcontain = CreatePdfGrid(pdfcontain, mydivsi, mylinkarrayPI);

               //create new div that copies all
               largernewdivPI.getElementsByClassName("sampleappendherePI")[0].innerHTML = pdfcontain.innerHTML;

               //Create a third div that copies rows into full section
               var myoverall = document.getElementsByClassName("collectthispdfsection")[0];

               var finalpdfdiv = CreatenewDiv("pdfdatasection page-section clearfix","collectthispdfsection");

               var myfinalappend = finalpdfdiv.getElementsByClassName("largerappendherePI")[0];
               myfinalappend.innerHTML = largernewdivPI.innerHTML;

               //reassignme = pdfcontain;
               //largernewdivPI.getElementsByClassName("sampleappendherePI")[0].innerHTML = reassignme.innerHTML;
               largerelementPI.append(finalpdfdiv);
}

function CreatePdfGrid(pdfcontain, mydivsi, mylinkarrayPI){
     var i;
     for(i=0;i < (mylinkarrayPI.length); i++){
          //creating a new div with a class name that copies the innerhtml of another div
          if (mylinkarrayPI.length%4==0){
               var newdivPI = CreatenewDiv("col-sm-3 col-md-3 col-lg-3 pdfdatasection", "pdfsampledatasection");
          } else if(mylinkarrayPI.length%3==0){
               var newdivPI = CreatenewDiv("col-sm-4 col-md-4 col-lg-4 pdfdatasection", "pdfsampledatasection");
          } else if(mylinkarrayPI.length%2==0){
               var newdivPI = CreatenewDiv("col-sm-6 col-md-6 col-lg-6 pdfdatasection", "pdfsampledatasection");
          }else if(mylinkarrayPI.length==1){
               var newdivPI = CreatenewDiv("col-sm col-md col-lg pdfdatasection", "pdfsampledatasection");
          } else{
               var newdivPI = CreatenewDiv("col-sm-4 col-md-4 col-lg-4 pdfdatasection", "pdfsampledatasection");
          }

          //copy elements from markdown to new div
          var copythis = document.getElementsByClassName("pdfsampledatasection")[0];
          newdivPI.innerHTML = copythis.innerHTML;

          //copy title to pdfheader
          var mypdftitle = mylinkarrayPI[i].innerHTML;
          newdivPI.getElementsByClassName("pdfheader")[0].innerHTML =mypdftitle;
          //copy link to button and iframe
          AddHrefSRCtoNewDiv_Prepend("mypdf", 0, mylinkarrayPI[i], newdivPI);
          AddHreftoNewDiv_Prepend("click-to-download", 0, mylinkarrayPI[i], newdivPI);

          //Create new div that copies append here to append content to
          pdfcontain.append(newdivPI);

     }
     return pdfcontain;
}

function CollectmyHeader(section_to_check){
     var sectionheaderPI = section_to_check.getElementsByTagName('h1')[0];
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h2");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h3");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h4");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h5");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h6");
     var sectionheaderPI = EmptyHeaderCheck(sectionheaderPI,section_to_check);

     return sectionheaderPI;
}
function HeaderCheck(sectionheaderPI, section_to_check, value_to_check){
     if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
          var sectionheaderPI = section_to_check.getElementsByTagName(value_to_check)[0];
     }
     return sectionheaderPI;
}
function EmptyHeaderCheck(sectionheaderPI, section_to_check){
     if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
          var sectionheaderPI = document.getElementsByClassName("voidvalue")[0];;
     }
     return sectionheaderPI;
}
function AddHrefSRCtoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.src = copy_this_data.href;
     return copyhere;
}
function AddHreftoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.href = copy_this_data.href;
     return copyhere;
}

function AddHrefSRCtoNewDiv_Prepend(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
   // $(copy_this_data).attr('href' , "../project_assets/" + $(copy_this_data).attr('href'));
    if (!(is_url(copy_this_data.href)) || copy_this_data.href.indexOf("/ceeoinnovations") >= 0   ){
         $(copy_this_data).attr('href' , "project_assets/" + $(copy_this_data).attr('href'));

    }
;
     copyhere.src = copy_this_data.href;
     copyhere.href = copy_this_data.href;
     return copyhere;
}
function AddHreftoNewDiv_Prepend(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];

    if (!(is_url(copy_this_data.href)) || copy_this_data.href.indexOf("/ceeoinnovations") >= 0 ){
         $(copy_this_data).attr('href' , "project_assets/" + $(copy_this_data).attr('href'));

    }
     copyhere.src = copy_this_data.href;
     copyhere.href = copy_this_data.href;
     return copyhere;
}



//CREATE HEADER IMAGE=======================================================
/*CreateHeaderImg
* Create and allocate a header image section
* collects image link, sub header, header, and description, if existing
*
*/
function CreateHeaderImg(mydivsi){
     //collect the template for header img
     var hastext = true;
     var sampledatasection  = document.getElementsByClassName('sampledatasectionHT')[0];
     var no_text_sampledatasection  = document.getElementsByClassName('no_text_sampledatasectionHT')[0];


     var h1void =  CheckifVoid_Gen("h1", 0, mydivsi);
     var h2void = CheckifVoid_Gen("h2", 0, mydivsi);
     var pvoid = CheckifVoid_P_Gen(mydivsi);

     if((h1void) && (h2void) && (pvoid) ){
          console.log("has text false");
          hastext = false;
     }

     if(hastext){
     //collect tag elements from div
          var myh1 = CheckifVoidandAssign_Gen("h1", 0, mydivsi);
          var myh2 = CheckifVoidandAssign_Gen("h2", 0, mydivsi);
          var myp = CheckifVoidandAssign_P_Gen(mydivsi);
     }

     var myimg = CheckifVoidandAssign_Img_Gen(0, mydivsi);
     if (!(is_url(myimg.src)) || myimg.src.indexOf("/ceeoinnovations") >= 0 ){
          myimg.src.replace(/\s/g, '%20')
         $(myimg).attr('src' , "project_assets/" + $(myimg).attr('src'));
     }

     //create new div and copy sample data--------------------------------
     var newdivHT = document.createElement("div");
     newdivHT.className = "page-section";

     var mainheader;
     var subheader;
     var myparagraph;
     var mynewimg;

    if(hastext){
          newdivHT.innerHTML = sampledatasection.innerHTML;

          //get sections of old div
          mainheader = newdivHT.getElementsByClassName('mainheaderHT')[0];
          subheader = newdivHT.getElementsByClassName('subheaderHT')[0];
          myparagraph = newdivHT.getElementsByClassName('myparagraphHT')[0];
          mynewimg = newdivHT.getElementsByClassName('myimghereHT')[0];

          //reassign with markdown values
          mainheader.innerHTML = myh2.innerHTML;
          subheader.innerHTML = myh1.innerHTML;
          myparagraph.innerHTML = myp.innerHTML;

     }else{
        newdivHT.innerHTML = no_text_sampledatasection.innerHTML;
     }


     mynewimg = newdivHT.getElementsByClassName('myimghereHT')[0];
     mynewimg.src = myimg.src;

     var append_div_here = document.getElementById("myappendcontent");

     console.log(newdivHT.innerHTML);

     append_div_here.appendChild(newdivHT);

     console.log(append_div_here.innerHTML);
}
//CREATE SITE TITLE(S)=======================================================

/* Createsite_title
* Create and allocate a site title element
* Iterates though all markdown elements in the site title div
* and appends
*/
function CreateSiteTitle(mydivsi){
     //try to collect markdownvalues for the header. If they don't
     //exist assign an emoty value
     var headerarray=  mydivsi.getElementsByTagName("*");
     for (var j = 0; j < (headerarray.length); j++){
          var list = CheckifVoidandAssign_Gen("*",j, mydivsi);


          var sampledatasectionMPT  = document.getElementsByClassName('sampledatasectionMPT')[0];
          var newspan = document.createElement("span");
          var sectionformat  = document.getElementsByClassName('headerMPT')[0];

          newspan.innerHTML = list.innerHTML;
          newspan.className = document.getElementById("headerMPT").className;
          newspan.setAttribute("id", "headerMPT");

          var append_span_here = document.getElementById("titleheader");
          append_span_here.appendChild(newspan);
     }

     //make and append a copy of sample data section
     var newdiv = document.createElement("div");
     newdiv.innerHTML = sampledatasectionMPT.innerHTML;
     newdiv.className = "sitetitle datasection sitetitledatasection";
     var append_div_here = document.getElementById("myappendcontent");
     append_div_here.appendChild(newdiv);

}
