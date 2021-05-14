// sales promotion slider
function closeSalesPromotion(){
    document.getElementById("sales-promotion").style.display="none";
    document.getElementById("main").style.top="50px"
    document.getElementById("footer").style.top="50px"
}

// display navigation menu
function displayNavigationMenu(){
  document.getElementById("nav").style.maxHeight="600px";
  document.getElementById("btn-open-nav-menu").style.display="none";
  document.getElementById("btn-close-nav-menu").style.display="block";
}

// hide navigation menu
function hideNavigationMenu(){
  document.getElementById("nav").style.maxHeight="50px";
  document.getElementById("btn-open-nav-menu").style.display="block";
  document.getElementById("btn-close-nav-menu").style.display="none";
}

// display navigation menu
function displayCategoryMenu(){
  document.getElementById("nav-category-inner-container").style.maxHeight="160px";
  document.getElementById("btn-product-category").style.display="none";
  document.getElementById("btn-close-product-category").style.display="block";
}

// hide navigation menu
function hideCategoryMenu(){
  document.getElementById("nav-category-inner-container").style.maxHeight="0";
  document.getElementById("btn-close-product-category").style.display="none";
  document.getElementById("btn-product-category").style.display="block";
}

//introduction carousel
var counter = 2;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
},8000);

//close modal login container
function openLoginContainer(){
  document.getElementById("modal-container").style.display="block";
  document.querySelector("body").style.overflow="hidden";
}

//close modal login container
function closeLoginContainer(){
  document.getElementById("modal-container").style.display="none";
  document.querySelector("body").style.overflow="auto";
}


function myFunction() {
  if (mobile.matches) { // If media query matches
  } 
  else
  if(desktop.matches) {
    // document.querySelectorAll('*').removeAttribute('style');
    var target = document.querySelectorAll('*:not(#sales-promotion,#main,#footer,#modal-container,body)');
    Array.prototype.forEach.call(target, function(element){
        element.removeAttribute('style');
    });
  }
}
var mobile = window.matchMedia("(max-width: 64em)")
var desktop = window.matchMedia("(min-width: 64.063em)")
myFunction(mobile,desktop) // Call listener function at run time
mobile.addListener(myFunction) // Attach listener function on state changes
desktop.addListener(myFunction) // Attach listener function on state changes