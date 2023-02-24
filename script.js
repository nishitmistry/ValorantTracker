function sidebarCollapse() {

  var v = document.getElementById("check");
  var height = screen.height;
  if (height < 650) {
    if (v.checked) {
      document.getElementById("sidebar").style.left = "0px";
    }
    else if (!v.checked) {
      document.getElementById("sidebar").style.left = "-550px";
    }
  }
  else {
    if (v.checked) {
      document.getElementById("sidebar").style.left = "0px";
    }
    else if (!v.checked) {
      document.getElementById("sidebar").style.left = "-145px";
    }
  }


}