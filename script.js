function sidebarCollapse() {
  var v = document.getElementById("check");
  let height = screen.height;
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
function navbarCollapse(a){
  if(a==1){
    var v=document.getElementById("nav-check");
    if(v.checked){
      document.getElementById("nav-650-650").style.top="0px";
      document.getElementById("nav-650-650").style.zIndex="1";
    }
    else if(!v.checked){
      document.getElementById("nav-650-650").style.top="-290px";
      document.getElementById("nav-650-650").style.zIndex="0";
    }
  }
  else{
    document.getElementById("nav-check").checked = false;
    document.getElementById("nav-650-650").style.top="-290px";
    document.getElementById("nav-650-650").style.zIndex="0";
  }
}