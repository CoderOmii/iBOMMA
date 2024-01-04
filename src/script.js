function shownav(){
    document.getElementById("nav").style.display="inline";
    document.getElementById("option").style.display="none";
    document.getElementById("back").style.display="block";
    document.getElementById("search2").style.display="none";
    document.getElementById("glass").style.display="block";
    document.getElementById("backs").style.display="none";
}
function hidenav(){
    document.getElementById("nav").style.display="none";
    document.getElementById("option").style.display="block";
    document.getElementById("back").style.display="none";
}
function showsearchbar(){
    document.getElementById("search2").style.display="block";
    document.getElementById("glass").style.display="none";
    document.getElementById("backs").style.display="block";
    document.getElementById("nav").style.display="none";
    document.getElementById("option").style.display="block";
    document.getElementById("back").style.display="none";
}
function hidesearchbar(){
    document.getElementById("search2").style.display="none";
    document.getElementById("glass").style.display="block";
    document.getElementById("backs").style.display="none";
}

function showvideo() {
    document.querySelector('.video').style.display = "flex";
  }
  function hidevideo() {
    document.querySelector('.video').style.display = "none";
  }