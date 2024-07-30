// function to open/close nav
function toggleNav(){
  // if nav is open, close it
  if($("nav").is(":visible")){
    $("nav").fadeOut();
    $("button").removeClass("menu");
  }
  // if nav is closed, open it
  else{
    $("button").addClass("menu");
    $("nav").fadeIn().css('display', 'flex');
  }
}

// when clicking + or ☰ button
$("button").click(function(){
  // when clicking ☰ button, open nav
  if($("header").hasClass("open")){
 
  }
  // when clicking + button, open header
  else{
    $("header").addClass("open");
  }
});


let buttonClickedOnce = false; // Flag to track if the button has been clicked once

// Scroll to the next section or back to the top if at the last section
function scrollToNextSection() {
  // Get the current scroll position
  const currentScroll = $(window).scrollTop();

  // Get all sections
  const sections = $("content section").toArray();
  
  // Find the next section
  const nextSection = sections.find((section) => {
    return $(section).offset().top > currentScroll;
  });

  if (nextSection) {
    // Scroll to the next section
    $('html, body').animate({
      scrollTop: $(nextSection).offset().top
    }, 500);
  } else {
    // If at the last section, scroll back to the top
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
}

// When clicking the button
$("button").click(function() {
  if (buttonClickedOnce) {
    scrollToNextSection();
  } else {
    buttonClickedOnce = true; // Set flag to true on the first click
    $("header").addClass("open"); // Optionally handle header open if needed
  }
});

// Refresh button functionality (if still needed)
document.addEventListener('DOMContentLoaded', () => {
  const refreshButton = document.getElementById('refreshButton');

  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      window.scrollTo(0, 0); // Scroll to the top
      location.reload(); // Refresh the page
    });
  }
});


