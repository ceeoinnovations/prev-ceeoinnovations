<script type="text/javascript">

     function copyDivPI(){
          if($( "div" ).hasClass( "pdf")){
          //Alt_CreateHeaderPI();
          console.log("returned to main");
     }
 }

     function Alt_CreateHeaderPI(){
               var loopmydivsPI  = document.getElementById('mycontent').getElementsByClassName('pdf');
               var j;
               for(j=0;j < (loopmydivsPI.length); j++){
                    var retainmePI  = document.getElementsByClassName('pdf')[j];
                    //initialize values from markdown to ter to header
                    var sectionheaderPI = CollectmyHeader(retainmePI);

                    var mylinkarrayPI = retainmePI.getElementsByTagName('a');

                    var largernewdivPI = CreatenewDiv("largerpdfdatasection", "largerpdfsampledatasection");

                    var largerelementPI = document.getElementsByClassName("largerappendherePI")[0];

                    var sectionpdfheader = largernewdivPI.getElementsByClassName('pdfsectiontitle')[0];

                    sectionpdfheader.innerHTML = sectionheaderPI.innerHTML;
                    largerelementPI.appendChild(largernewdivPI);

                    Alt_CreatePdfGrid(j, mylinkarrayPI);
               }

     }
     function Alt_CreatePdfGrid(j, mylinkarrayPI){
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
               var elementPI = AppendNewDiv("appendherePI", newdivPI, j);

               AddInnerHTMLElementtoNewDiv("pdfheader", 0, mylinkarrayPI[i], newdivPI);
               Alt_AddHrefSRCtoNewDiv("mypdf", 0, mylinkarrayPI[i], newdivPI);
               Alt_AddHrefSRCtoNewDiv("click-to-download", 0, mylinkarrayPI[i], newdivPI);

          }
     }
     function Alt_AddHrefSRCtoNewDiv(get_class, at_place, copy_this_data, search_here){
          var copyhere = search_here.getElementsByClassName(get_class)[at_place];
          copyhere.src = copy_this_data.href;
          return copyhere;
     }

     function Alt_CollectallH1(section_to_check){
          var allh1 = section_to_check.getElementsByTagName('h1');
          var allh1 = Alt_EmptyHeaderCheck(allh1,section_to_check);

          return allh1;
     }

     function CollectmyHeader(section_to_check){
          var sectionheaderPI = section_to_check.getElementsByTagName('h1')[0];
          var sectionheaderPI = Alt_yHeaderCheck(sectionheaderPI,section_to_check,"h2");
          var sectionheaderPI = Alt_yHeaderCheck(sectionheaderPI,section_to_check,"h3");
          var sectionheaderPI = Alt_yHeaderCheck(sectionheaderPI,section_to_check,"h4");
          var sectionheaderPI = Alt_yHeaderCheck(sectionheaderPI,section_to_check,"h5");
          var sectionheaderPI = Alt_yHeaderCheck(sectionheaderPI,section_to_check,"h6");
          var sectionheaderPI = Alt_EmptyHeaderCheck(sectionheaderPI,section_to_check);

          return sectionheaderPI;
     }
     function Alt_yHeaderCheck(sectionheaderPI, section_to_check, value_to_check){
          if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
               var sectionheaderPI = section_to_check.getElementsByTagName(value_to_check)[0];
          }
          return sectionheaderPI;
     }
     function Alt_EmptyHeaderCheck(sectionheaderPI, section_to_check){
          if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
               var sectionheaderPI = document.getElementsByClassName("voidvalue")[0];;
          }
          return sectionheaderPI;
     }


</script>

     function copyDivVO(){

          //CreateHeaderVO();
      }

     function CreateHeaderVO(){
               var Myothermark  = document.getElementsByClassName('video-text-overlay')[0];
               var Myother  = document.getElementById('transferhereVO');
               Myother.innerHTML = Myothermark.innerHTML;

               //initialize values from markdown to ter to header
               var list = CheckifVoidandAssignVO("h2", 0, 0);

               var sub = CheckifVoidandAssignVO("h1", 0, 0);

               var para = CheckifPVoidandAssignVO(0);

               //get header
               var sampledatasectionVO  = document.getElementsByClassName('sampledatasectionVO')[0];

               //get elements of header
               var mainheaderVO = sampledatasectionVO.getElementsByClassName('mainheaderVO')[0];


               var subheaderVO = sampledatasectionVO.getElementsByClassName('subheaderVO')[0];


               var myparagraphVO = sampledatasectionVO.getElementsByClassName('myparagraphVO')[0];


               //apply innerHTML of elements
               mainheaderVO.innerHTML = list.innerHTML;

               subheaderVO.innerHTML = sub.innerHTML;

               myparagraphVO.innerHTML = para.innerHTML;

               var myvidlink = Myother.getElementsByTagName("iframe")[0].src;
               sampledatasectionVO.getElementsByClassName("myiframehere")[0].src = myvidlink;


               var loopmydivsVO  = document.getElementById('mycontent').getElementsByClassName('video-text-overlay');
               console.log(loopmydivsVO.length);
               //turn that into a for loop
               var i;
               for(i=0;i < (loopmydivsVO.length); i++){

                    //get value of div
                    var retainmeVO  = document.getElementsByClassName('video-text-overlay')[i];
                    //initialize values from markdown to ter to header

                    var looplistVO = CheckifVoidandAssignVO("h2", 0, i);

                    var loopsub = CheckifVoidandAssignVO("h1", 0, i);

                    var looppara = CheckifPVoidandAssignVO(i);

                    var loopmypiclink = CheckifVidVoidandAssign(0, i);

                    var newdivVO = document.createElement("div");
                    newdivVO.className = "datasection";
                    var elementVO = document.getElementById("appendhereVO");
                    newdivVO.innerHTML = sampledatasectionVO.innerHTML;

                    //assign markdownvalues to new div

                    //document.getElementById("myImg").src = mypiclink;
                    //get elements of header
                    var loopmainheader = newdivVO.getElementsByClassName('mainheaderVO')[0];
                    var loopsubheader = newdivVO.getElementsByClassName('subheaderVO')[0];
                    var loopmyparagraphVO = newdivVO.getElementsByClassName('myparagraphVO')[0];
                    var loopmyvid = newdivVO.getElementsByClassName("myiframehere")[0];
                    //assign new values to header values
                    loopmainheader.innerHTML = looplistVO.innerHTML;
                    loopsubheader.innerHTML = loopsub.innerHTML;
                    loopmyparagraphVO.innerHTML = looppara.innerHTML;
                    loopmyvid.src =loopmypiclink.src;


                    elementVO.appendChild(newdivVO);


               }

               function CheckifVoidandAssignVO(datatype, dataplace, loopplace){
                    var retainmeVO  = document.getElementsByClassName('video-text-overlay')[loopplace];
                    var looplistVO;
                    var setlooplistVO = retainmeVO.getElementsByTagName(datatype)[dataplace];
                    if(typeof(setlooplistVO) == 'undefined' || setlooplistVO == 'null'){
                         looplistVO = document.getElementsByClassName("voidvalue")[0];
                    } else {
                         looplistVO = retainmeVO.getElementsByTagName(datatype)[dataplace];
                    }

                    return looplistVO;
               }

               function CheckifVidVoidandAssign(dataplace, loopplace){

                    var retainmeVO  = document.getElementsByClassName('video-text-overlay')[loopplace];
                    var looplistVO;
                    var setlooplistVO = retainmeVO.getElementsByTagName("iframe")[dataplace];
                    if(typeof(setlooplistVO) == 'undefined' || setlooplistVO == 'null'){
                         looplistVO = document.getElementsByClassName("iframevoidvalue")[0];

                    } else {
                         looplistVO = retainmeVO.getElementsByTagName("iframe")[dataplace];
                    }

                    return looplistVO;
               }

               function CheckifPVoidandAssignVO(loopplace){
                    var retainmeVO  = document.getElementsByClassName('video-text-overlay')[loopplace];
                    var looplistVO;
                    var setlooplistVOpic = retainmeVO.getElementsByTagName("img")[0];

                    if(typeof(setlooplistVOpic) == 'undefined' || setlooplistVO == 'null'){
                    var setlooplistVO = retainmeVO.getElementsByTagName("p")[0];
                    } else {
                    var setlooplistVO = retainmeVO.getElementsByTagName("p")[1];
                    }

                    if(typeof(setlooplistVO) == 'undefined' || setlooplistVO == 'null'){
                         looplistVO = document.getElementsByClassName("voidvalue")[0];
                    } else {
                         looplistVO = setlooplistVO;
                    }

                    return looplistVO;
               }

     }
function copyDivMPT(){
CreateMainHeader();
}

function CreateMainHeader(){
          var MyothermarkMPT  = document.getElementsByClassName('sitetitle')[0];
          var MyotherMPT  = CopyInnerHTMLtoDiv_byId("transferhereMPT", MyothermarkMPT, document);

          //try to collect markdownvalues for the header. If they don't
          //exist assign an emoty value
          var list = CheckifVoidandAssignMPT(0, 0);
          var sub = CheckifVoidandAssignMPT(1, 0);

          //access sampledatasection and change the elements to match markdown values
          var sampledatasectionMPT  = document.getElementsByClassName('sampledatasectionMPT')[0];
          var headerMPT = AddInnerHTMLElementtoNewDiv('headerMPT', 0, list, sampledatasectionMPT);
          var subheaderMPT = AddInnerHTMLElementtoNewDiv('subheaderMPT', 0, sub, sampledatasectionMPT);

          //create an array of all the "sitetitle" divs in the markdown
          var loopmydivsMPT  = document.getElementById('mycontent').getElementsByClassName('sitetitle');
          var i;
          for(i=0;i < (loopmydivsMPT.length); i++){
               var retainmeMPT  = document.getElementsByClassName('sitetitle')[i];
               //initialize values from markdown to ter to header

               var looplist = CheckifVoidandAssignMPT(0, i);

               var loopsub = CheckifVoidandAssignMPT(1, i);

               var newdivMPT = document.createElement("div");
               newdivMPT.className = "datasection";
               var elementMPT = document.getElementById("appendhereMPT");
               newdivMPT.innerHTML = sampledatasectionMPT.innerHTML;

               //assign markdownvalues to new div
               var loopheaderMPT = AddInnerHTMLElementtoNewDiv('headerMPT', 0, looplist, newdivMPT);
               var loopsubheaderMPT = AddInnerHTMLElementtoNewDiv('subheaderMPT', 0, loopsub, newdivMPT);


               elementMPT.appendChild(newdivMPT);


          }
     }

          function CheckifVoidandAssignMPT(dataplace, loopplace){
               var retainmeMPT  = document.getElementsByClassName('sitetitle')[loopplace];
               var looplist;
               var setlooplist = retainmeMPT.getElementsByTagName("*")[dataplace];
               if(typeof(setlooplist) == 'undefined' || setlooplist == 'null'){
                    console.log("element was empty");
                    looplist = document.getElementsByClassName("voidvalue")[0];

               } else {
                    looplist = retainmeMPT.getElementsByTagName("*")[dataplace];
               }

               return looplist;
          }


          function copyDivHT(){
               if($( "div" ).hasClass( "largeheaderimg")){
               //CreateHeader();
               }
           }

          function CreateHeader(){
                    var Myothermark  = document.getElementsByClassName('largeheaderimg')[0];
                    var Myother  = document.getElementById('transferhere');
                    Myother.innerHTML = Myothermark.innerHTML;

                    //initialize values from markdown to ter to header
                    var list = CheckifVoidandAssign("h1", 0, 0);

                    var sub = CheckifVoidandAssign("h2", 0, 0);

                    var para = CheckifPVoidandAssign(0);

                    //get header
                    var sampledatasectionHT  = document.getElementsByClassName('sampledatasectionHT')[0];

                    //get elements of header
                    var mainheaderHT = sampledatasectionHT.getElementsByClassName('mainheaderHT')[0];


                    var subheaderHT = sampledatasectionHT.getElementsByClassName('subheaderHT')[0];


                    var myparagraphHT = sampledatasectionHT.getElementsByClassName('myparagraphHT')[0];


                    //apply innerHTML of elements
                    mainheaderHT.innerHTML = list.innerHTML;

                    subheaderHT.innerHTML = sub.innerHTML;

                    myparagraphHT.innerHTML = para.innerHTML;

                    var mypiclink = Myother.getElementsByTagName("img")[0].src;
                    sampledatasectionHT.getElementsByClassName("myimghereHT")[0].src = mypiclink;


                    var loopmydivs  = document.getElementById('mycontent').getElementsByClassName('largeheaderimg');
                    console.log(loopmydivs.length);
                    //turn that into a for loop
                    var i;
                    for(i=0;i < (loopmydivs.length); i++){

                         //get value of div
                         var retainme  = document.getElementsByClassName('largeheaderimg')[i];
                         //initialize values from markdown to ter to header
                         var newdiv = CreatenewDiv("datasection", "sampledatasectionHT")
                         AppendNewDivbyId("appendhere", newdiv);

                         var looplist = CheckifVoidandAssign("h1", 0, i);

                         var loopsub = CheckifVoidandAssign("h2", 0, i);

                         var looppara = CheckifPVoidandAssign(i);

                         var loopmypiclink = CheckifImgVoidandAssign(0, i);



                         //assign markdownvalues to new div

                         //document.getElementById("myImg").src = mypiclink;
                         //get elements of header
                         var loopmainheader = newdiv.getElementsByClassName('mainheaderHT')[0];
                         var loopsubheader = newdiv.getElementsByClassName('subheaderHT')[0];
                         var loopmyparagraphHT = newdiv.getElementsByClassName('myparagraphHT')[0];
                         var loopmyimage = newdiv.getElementsByClassName("myimghereHT")[0];
                         //assign new values to header values
                         loopmainheader.innerHTML = looplist.innerHTML;
                         loopsubheader.innerHTML = loopsub.innerHTML;
                         loopmyparagraphHT.innerHTML = looppara.innerHTML;
                         loopmyimage.src =loopmypiclink.src;





                    }

                    function CheckifVoidandAssign(datatype, dataplace, loopplace){
                         var retainme  = document.getElementsByClassName('largeheaderimg')[loopplace];
                         var looplist;
                         var setlooplist = retainme.getElementsByTagName(datatype)[dataplace];
                         if(typeof(setlooplist) == 'undefined' || setlooplist == 'null'){
                              looplist = document.getElementsByClassName("voidvalue")[0];

                         } else {
                              looplist = retainme.getElementsByTagName(datatype)[dataplace];
                         }

                         return looplist;
                    }

                    function CheckifImgVoidandAssign(dataplace, loopplace){
                         var retainme  = document.getElementsByClassName('largeheaderimg')[loopplace];
                         var looplist;
                         var setlooplist = retainme.getElementsByTagName("img")[dataplace];
                         if(typeof(setlooplist) == 'undefined' || setlooplist == 'null'){
                              looplist = document.getElementsByClassName("imgvoidvalue")[0];

                         } else {
                              looplist = retainme.getElementsByTagName("img")[dataplace];
                         }

                         return looplist;
                    }

                    function CheckifPVoidandAssign(loopplace){
                         var retainme  = document.getElementsByClassName('largeheaderimg')[loopplace];
                         var looplist;
                         var setlooplistpic = retainme.getElementsByTagName("img")[0];

                         if(typeof(setlooplistpic) == 'undefined' || setlooplist == 'null'){
                         var setlooplist = retainme.getElementsByTagName("p")[0];
                         } else {
                         var setlooplist = retainme.getElementsByTagName("p")[1];
                         }

                         if(typeof(setlooplist) == 'undefined' || setlooplist == 'null'){
                              looplist = document.getElementsByClassName("voidvalue")[0];
                         } else {
                              looplist = setlooplist;
                         }

                         return looplist;
                    }



          }
