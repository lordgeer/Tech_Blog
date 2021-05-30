function viewPost() {
    var x, i;
    x = document.querySelectorAll(".card-title");
    console.log("tacotruck");
    for (i = 0; i < x.length; i++) {
      x[i].addEventListener("click", function(target) {
          console.log(target);
        document.location.replace(`/post/${target.path[0].attributes[1].nodeValue}`);
      });
    }
  }
  
  viewPost();