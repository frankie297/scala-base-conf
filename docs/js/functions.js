// Navbar

$(window).on("load", function () {
    $(window).scroll(function () {
        if ($("#navigation").offset().top > 0) {
            $("#navigation").addClass("navigation-scroll");
        } else {
            $("#navigation").removeClass("navigation-scroll");
        }
    });

    // Function to load GitHub stats, which expects a DOM element with 'stars' as id
    (function loadGitHubStats() {
        var gitHubAPI = "https://api.github.com/repos/bow-swift/bow?callback=?";
        $.getJSON(gitHubAPI).done(function(data) {
            $('#stars').text(data.data.stargazers_count);
        });
    })();
});


// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
