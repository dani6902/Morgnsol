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
    800:{
      items: 2,
      nav: false
    },
    1200:{
      items: 3,
      nav: false
    }
  }
});

const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);
