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


function copyColor(el) {
  var copyTextarea = el.childNodes[1]

  copyTextarea.focus();
  copyTextarea.select()

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    alert('Farve kopiret');
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}

$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0:{
      items: 1,
      nav: false
    },
    850:{
      items: 2,
      nav: false
    },
    1000:{
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
