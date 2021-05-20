console.log("JS is running");

const header = document.querySelector('.navbar')

window.onscroll = function(){
var top = window.scrollY;
if (top >= 50){
  header.classList.add('active')
}else{
  header.classList.remove('active');
}
}


$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});
