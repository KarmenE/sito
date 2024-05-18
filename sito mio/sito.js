
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Cambia immagine ogni 3 secondi
}

window.onload = showSlides;


document.addEventListener("DOMContentLoaded", function() {
    var sponsors = document.querySelectorAll('.sponsor');
    var index = 0;

    function slide() {
        sponsors[index].style.display = 'none';
        index = (index + 1) % sponsors.length;
        sponsors[index].style.display = 'block';
    }

    setInterval(slide, 3000); // Change slide every 3 seconds
});


window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
  }