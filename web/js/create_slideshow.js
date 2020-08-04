/*Create Slideshow
* Allison Moore
* 7/23/20
*/


function CreateCaroMain(){
     var myslidecontainer = document.getElementsByClassName("sample_caro")[0];
     var myslides = myslidecontainer.getElementsByClassName('mysamplecaro');
     var carousel = document.getElementsByClassName('caro');

     var newslidecontain = document.getElementsByClassName('carousel')[0];
     for(let i = 0; i < myslides.length; i++){
          var newslide = document.createElement("div");
          newslide.className = "carousel-cell";
          newslide.innerHTML = myslides[i].innerHTML;



          newslidecontain.append(newslide);

     }

     //carousel[0].append(newslidecontain);

     //CreateSmallCaroMain();
}

function CreateSmallCaroMain(){
     let myslidecontainer = document.getElementsByClassName("sample_caro")[0];
     let myslides = myslidecontainer.getElementsByClassName('mysamplecaro');
     let carousel = document.getElementsByClassName('caroSMALL');

     let newslidecontain = document.createElement("div");
     newslidecontain.className = "carousel js-flickity";

     for(let i = 0; i < myslides.length; i++){
          let newslide = document.createElement("div");
          newslide.className = "carousel-cell";
          newslide.innerHTML = myslides[i].innerHTML;

          newslidecontain.append(newslide);
     }

     carousel[0].append(newslidecontain);
}
