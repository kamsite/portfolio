const breakpoint = 50;

// get the browser's font size (default is 16, unless changed by user)
let rootFont = window.getComputedStyle(document.body).getPropertyValue('font-size');

// extract the number from the returned string (e.g. "16px" becomes 16)
rootFont = +rootFont.substring(0, 2);


window.onresize = function() {
  
  if(window.innerWidth > breakpoint * rootFont) {
    $('#left').show();
  } else {
    $('#left').hide();
  }
}

$('.hamburger').click(function(){
  $('#left').slideToggle('fast');
})

