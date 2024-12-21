  
var  dragmenu = function () {

    let slidermenu = document.querySelector(".dvDragMenu");
    let blackslider = document.querySelector(".blackSlider");

    slidermenu.classList.toggle("active");
    blackslider.classList.toggle("active");

};
var removeMenu = function () {
  let blackslider = document.querySelector(".blackSlider");
  let slidermenu = document.querySelector(".dvDragMenu");

  blackslider.addEventListener("click", () => {
    blackslider.classList.remove("active");
    slidermenu.classList.remove("active");
  })

};
var garanty = function () {
  let Garanty = document.querySelector(".dvgaranty");
  Garanty.classList.toggle("active");
};

var rotate=function(){
  const garantyarrow=document.getElementById("garantyarrow");
  garantyarrow.classList.toggle("active");
  };


















  

  // var dropdown = document.getElementsByClassName("dropdown-btn");
  // var i;
  
  // for (i = 0; i < dropdown.length; i++) {
  //   dropdown[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var dropdownContent = this.nextElementSibling;
  //     if (dropdownContent.style.display === "block") {
  //       dropdownContent.style.display = "none";
  //     } else {
  //       dropdownContent.style.display = "block";
  //     }
  //   });
  // }
  function openprofile() {
    document.getElementById("accessbtnid").classList.toggle("show-access");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dv-access-btn')) {
        var dropdowns = document.getElementsByClassName("access");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-access')) {
                openDropdown.classList.remove('show-access');
            }
        }
    }
}

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }






















  