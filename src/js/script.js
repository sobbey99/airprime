







/*
Loader
*/
const maskLoad = document.querySelector('.loading');
window.addEventListener('load', () => {
  maskLoad.classList.add('hide');
  setTimeout(
    () => {
      maskLoad.remove();
    }, 600
  );
});

//HAMBURGER
const hamburgerElement = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerElement.addEventListener('click', function(){
hamburgerMenu.classList.add('hamburger-menu_active');
});




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