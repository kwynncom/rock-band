function bioReveal() {
  document.getElementById("bioBanner").style.width = "1200px";
  document.getElementById("expander").style.left = "1150px";
  document.getElementById("expander").style.transform = "none";
  document.getElementById("expander").style.width = "40px";
  document.getElementById("expander").style.borderLeft = "40px solid #fff";
  document.getElementById("expander").style.boxShadow = "-40px 0 0 #2a398a";
  document.getElementById("bioText").style.display = "inline-block";
}

function bioHide() {
  document.getElementById("bioBanner").style.width = "700px";
  document.getElementById("expander").style.left = "690px";
  document.getElementById("expander").style.width = "50px";
  document.getElementById("expander").style.boxShadow = "-50px 0 0 #2a398a";
  document.getElementById("expander").style.borderBottomRightRadius = "0px";
  document.getElementById("expander").style.borderLeft = "50px solid #fff";
  document.getElementById("expander").style.transform = "skew(20deg)";
  document.getElementById("bioText").style.display = "none";
}

function bioTextReveal() {
  document.getElementById("bioText").style.opacity = "1";
}

function bioTextHide() {
  document.getElementById("bioText").style.opacity = "0";
}
