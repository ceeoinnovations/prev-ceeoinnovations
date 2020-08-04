function mySearchFunction() {
  var searchform = document.getElementById("search-container");
  var searchtext = document.getElementById("searchinput").value;
  searchtext = searchtext.toLowerCase();
  //console.log(document.getElementById("searchinput").value);
  //gatherallprojects
 let allprojects= document.getElementsByClassName("projectsegment");

  //for each projects
  for(let i = 0; i < allprojects.length; i++){
       let projecttags = allprojects[i].getElementsByClassName("hidden-tags")[0];
       projecttags = projecttags.innerHTML.toLowerCase();
       if(projecttags.includes(searchtext)){
            $(allprojects[i]).css({"display": "inline"});
       } else {
            $(allprojects[i]).css({"display": "none"});
       }

   }

}

function DisplayAllProjects() {
     let allmyprojects= document.getElementsByClassName("projectsegment");
     for(let i = 0; i < allmyprojects.length; i++){
          $(allmyprojects[i]).css({"display": "inline"});
     }

}

function ButtonStart(buttonelement){
     console.log("ButtonStart");
     console.log(buttonelement.innerHTML);

    if(buttonelement.getElementsByTagName("h6")[0].innerHTML!= "All"){
        ButtonAssigner(buttonelement);
    } else {
         DisplayAllProjects();
    }
}
function ButtonAssigner(button) {
     console.log(button.getElementsByTagName("h6")[0].innerHTML);

     let buttontext = button.getElementsByTagName("h6")[0].innerHTML.toLowerCase();
     let allprojects= document.getElementsByClassName("projectsegment");

     //for each projects
     for(let i = 0; i < allprojects.length; i++){
          let projecttags = allprojects[i].getElementsByClassName("hidden-tags")[0];
          projecttags = projecttags.innerHTML.toLowerCase();
          if(projecttags.includes(buttontext)){
               $(allprojects[i]).css({"display": "inline"});
          } else {
               $(allprojects[i]).css({"display": "none"});
          }

      }
}
