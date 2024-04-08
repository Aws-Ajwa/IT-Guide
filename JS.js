
 $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    infinite: true,
    pauseOnHover: true,
    dots: true,
  });
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 