var access = false;
function navigate(){
  if(access == false){
  document.getElementById('navbar').style.left="-200px";
  access = true;
}
  else if (access == true) {
  document.getElementById('navbar').style.left="0px";
  access = false;
}
}
