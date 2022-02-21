function reloadPage() {
  window.addEventListener(`resize`, () => {
    location.reload()
  }, false);
  
}





/*
Loader
*/
const bodyTag = document.querySelector('body');
const maskLoad = document.querySelector('.loading');
window.addEventListener('load', () => {
  setTimeout(() => {

    maskLoad.classList.add('hide');
  } , 1200);

  setTimeout(
    () => {
      bodyTag.classList.remove('overflowOff');
      maskLoad.remove();
    }, 1200
  );

  





  /**
 VANILA TILT JS
 */

 VanillaTilt.init(document.querySelectorAll(".items-product"), {
  max: 15,
  speed: 400
});

/*WoW */
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
});


//HAMBURGER
const hamburgerElement = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.hamburger-menu_close');
const hamburgerBottom = document.querySelector('.hamburger-menu__bottom');
const hamburgerRights = document.querySelector('.hamburger-menu__copyright');
const hamburgerTop = document.querySelector('.hamburger-menu__top');
const menutag = document.querySelector('.menutag');



const navList = document.querySelectorAll('.hamburger-menu nav.list ul li');


hamburgerElement.addEventListener('click', function(){
  hamburgerMenu.classList.add('hamburger-menu_active');
  menutag.classList.add('liOnFlex');
  menutag.classList.add('animate__animated');
  menutag.classList.add('animate__slideInLeft');

  hamburgerTop.classList.add('liOnFlex');
  hamburgerTop.classList.add('animate__animated');
  hamburgerTop.classList.add('animate__pulse');
  hamburgerTop.classList.add('animate__fast');
  hamburgerTop.classList.add('animate__infinite');



  hamburgerClose.classList.add('liOn');
  hamburgerClose.classList.add('animate__animated');
  hamburgerClose.classList.add('animate__delay-4s');
  hamburgerClose.classList.add('animate__zoomIn');
  hamburgerClose.classList.add('animate__faster');

  bodyTag.classList.add('overflowOff');







  setTimeout(()=>{
    navList.forEach(
      function(ele, index) {
let animateDelay = 'animate__delay-';
animateDelay = 'animate__delay-' + index + "s";
        ele.classList.add(animateDelay);
        ele.classList.add('animate__fadeInUp');
        ele.classList.add('animate__faster');
        ele.classList.add('liOn');
      }
    );

    hamburgerBottom.classList.add('liOnGrid');
  hamburgerBottom.classList.add('animate__animated');
  hamburgerBottom.classList.add('animate__fadeInUpBig');

  

  hamburgerRights.classList.add('liOn');
  hamburgerRights.classList.add('animate__animated');
  hamburgerRights.classList.add('animate__delay-3s');
  hamburgerRights.classList.add('animate__faster');
  hamburgerRights.classList.add('animate__slideInLeft');

  
  }, 600);




  
  

});

hamburgerClose.addEventListener('click', function(){
  hamburgerMenu.classList.remove('hamburger-menu_active');

  navList.forEach(
    function(ele) {
      ele.classList.remove('liOn');
      ele.classList.remove('animate__fadeInUp');
      

    }
  );
  bodyTag.classList.remove('overflowOff');
  hamburgerBottom.classList.remove('liOnGrid');
  hamburgerBottom.classList.remove('animate__animated');
  hamburgerBottom.classList.remove('animate__fadeInUpBig');

  hamburgerRights.classList.remove('liOn');
  hamburgerRights.classList.remove('animate__animated');
  hamburgerRights.classList.remove('animate__delay-3s');
  hamburgerRights.classList.remove('animate__faster');
  hamburgerRights.classList.remove('animate__slideInLeft');



  menutag.classList.remove('liOnFlex');
  menutag.classList.remove('animate__animated');
  menutag.classList.remove('animate__slideInLeft');

  hamburgerTop.classList.remove('liOnFlex');
  hamburgerTop.classList.remove('animate__animated');
  hamburgerTop.classList.remove('animate__pulse');
  hamburgerTop.classList.remove('animate__fast');
  hamburgerTop.classList.remove('animate__infinite');



  hamburgerClose.classList.remove('liOn');
  hamburgerClose.classList.remove('animate__animated');
  hamburgerClose.classList.remove('animate__delay-4s');
  hamburgerClose.classList.remove('animate__bounceIn');
  hamburgerClose.classList.remove('animate__faster');
});





const itemSection = document.querySelector('.items-section');


if($(window).width() < 992) {
  itemSection.remove();
  reloadPage();

}

reloadPage();

$(document).ready(function(){
  $(".items-mobile__slider").owlCarousel({
    items: 1,
    center: true,
    dots: false,
    nav: true
  });
});





