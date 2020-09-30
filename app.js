function byid(id)   { return document.getElementById(id); }
function qsa (s )   { return document.querySelectorAll(s); }
function qs  (s )   { return document.querySelector   (s); }
function cree(type) { return document.createElement(type); }

window.onload = function() {
	const bio0 = qs('[data-type="bioBanner"]');
	byid('bandMembers').append(bio0.cloneNode(1));
}


function bioReveal() {

	qsa('[data-type="bioBanner"]').forEach(
		function(ele) {
			ele.className = 'bioBannerReveal';
		}
	);

//  byid("bioBanner").className = 'bioBannerReveal';
  byid("expander" ).className = "expanderBioReveal";
  byid('bioText'  ).className = 'bioRevealText';
}

function bioHide() {

// byid('bioBanner').className = 'bioHideBanner';
// byid('expander' ).className = 'hideExpander';

/*
 document.getElementById("bioBanner").style.width = "700px";
  document.getElementById("expander").style.left = "690px";
  document.getElementById("expander").style.width = "50px";
  document.getElementById("expander").style.boxShadow = "-50px 0 0 #2a398a";
  document.getElementById("expander").style.borderBottomRightRadius = "0px";
  document.getElementById("expander").style.borderLeft = "50px solid #fff";
  document.getElementById("expander").style.transform = "skew(20deg)";
  document.getElementById("bioText").style.display = "none"; */
}

function bioTextReveal() {
  document.getElementById("bioText").style.opacity = "1";
}

function bioTextHide() {
  document.getElementById("bioText").style.opacity = "0";
}
