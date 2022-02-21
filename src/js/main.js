


window.addEventListener(`resize`, () => {
  location.reload()
}, false);


/*
Loader
*/
const maskLoad = document.querySelector('.loading');
window.addEventListener('load', () => {
  setTimeout(() => {
    maskLoad.classList.add('hide');
  } , 1200);

  setTimeout(
    () => {
      maskLoad.remove();
    }, 1200
  );

  setTimeout(
    () => {

//Slider for Promo Mobile Section
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  rewind: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7500
});


      const escapeSection = document.querySelector('.escape');
      const edgePC = document.querySelector('.edge');
      const edgeMobile1 = document.querySelector('.edge-mobile_1');
      const edgeMobile2 = document.querySelector('.edge-mobile_2');

      function myEscape() {
        if($(window).width() < 992)
        {   
            edgePC.classList.remove('section');
            escapeSection.classList.add('section');
            edgeMobile1.classList.add('section');
            edgeMobile2.classList.add('section');

        }
        else
        {
          escapeSection.classList.remove('section');
          edgePC.classList.add('section');
          edgeMobile1.classList.remove('section');
            edgeMobile2.classList.remove('section');


        }
    }
    
    //вызываем
    myEscape();
    
    //ну и при ресайзе перепроверяем
    $(window).resize(function() {
      myEscape();
    });




// выбираем нужный элемент
const target = document.querySelector('.promo');
const header = document.querySelector('.header');
var changer = 0;
let promo = target.classList;
for (const i of promo) {
if (i == "active") {
  header.classList.remove('header_bg');
}
}


// создаем новый экземпляр наблюдателя
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    changer = mutation.target.classList;
    for (let i  of changer) {
      if (i == "fp-completely") {
        header.classList.remove('header_bg');
      } 
      if (i !== "fp-completely") {
        header.classList.add('header_bg');
      }
    }
  
  });    
  });
  
  // создаем конфигурации для наблюдателя
  const config = { attributes: true, childList: true, characterData: true };
  
  // запускаем механизм наблюдения
  observer.observe(target,  config);
  
  // позже, если надо, прекращаем наблюдение
  // observer.disconnect();





      /*
Animate Words
*/

anime.timeline({loop: false})
.add({
  targets: '.ml15 .word',
  scale: [10,1],
  opacity: [0,1],
  easing: "easeOutCirc",
  duration: 600,
  delay: (el, i) => 800 * i
}).add({
  targets: '.ml15',
  opacity: 1,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

///////

/*
MoveMouse Move BG
*/

var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 9;

function moveBackground() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

$('.promo-bg').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
});

$('.advantages_bg').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
});


window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
/////

/*
ScrollPage Full
*/

new fullpage('#fullpage', {
//options here
autoScrolling:true,
scrollHorizontally: false,
navigation: true,
showActiveTooltip: false,
v2compatible: true
});
////////















//////ABOUT WATCHING/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const targetAbout = document.querySelector('.about');
const titleAbout = document.querySelector('.about__title');
const aboutVideo = document.querySelector('.about-descr__video');
const aboutText = document.querySelector('.about-descr__text');
const aboutIlustrate = document.querySelector('.about-ilustrate');




const targetAboutClasses = targetAbout.classList;
var changerAbout = 0;


// создаем новый экземпляр наблюдателя
const observerAbout = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
  changerAbout =  mutation.target.classList;
  for (let i of changerAbout) {
    if (i == 'active') {
        titleAbout.classList.add('animate__backInDown');
        titleAbout.classList.add('animate__animated');

        aboutVideo.classList.add('animate__fadeInLeft');
        aboutVideo.classList.add('animate__animated');



        aboutText.classList.add('animate__fadeInRight');
        aboutText.classList.add('animate__animated');

        aboutIlustrate.classList.add('animate__fadeInUpBig');
        aboutIlustrate.classList.add('animate__animated');



        break;
    }
    if (i !== 'active') {
        titleAbout.classList.remove('animate__backInDown');
        titleAbout.classList.remove('animate__animated');

        aboutVideo.classList.remove('animate__fadeInLeft');
        aboutVideo.classList.remove('animate__animated');



        aboutText.classList.remove('animate__fadeInRight');
        aboutText.classList.remove('animate__animated');

        aboutIlustrate.classList.remove('animate__fadeInUpBig');
        aboutIlustrate.classList.remove('animate__animated');

    }
  }
});    
});

// создаем конфигурации для наблюдателя
var configAbout = { attributes: true, childList: true, characterData: true };

// запускаем механизм наблюдения
observerAbout.observe(targetAbout,  configAbout);



///////////////////////////////////////////////////////////////////////////////////////////////////////

// выбираем нужный элемент / ADVANTAGES WATCHING
const targetAdvantage = document.querySelector('.advantages');
const advantageItemOne = document.querySelector('.advantages-wrapper__item_1');
const advantageItemTwo = document.querySelector('.advantages-wrapper__item_2');
const advantageItemThree = document.querySelector('.advantages-wrapper__item_3');
const advantageTitle = document.querySelector('.advantages__title');
var changerAdvantage = 0;


// создаем новый экземпляр наблюдателя
var observerAdvantage = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
  changerAdvantage = mutation.target.classList;
  for (let i  of changerAdvantage) {
    if (i == "active") {
      advantageTitle.classList.add('animate__animated');
      advantageTitle.classList.add('animate__fadeInDownBig');

      advantageItemOne.classList.add('animate__delay-1s');
      advantageItemOne.classList.add('animate__lightSpeedInRight');
      advantageItemOne.classList.add('animate__animated');
      advantageItemOne.classList.add('animate__faster');

      

      advantageItemTwo.classList.add('animate__lightSpeedInRight');
      advantageItemTwo.classList.add('animate__animated');
      advantageItemTwo.classList.add('animate__fast');
      advantageItemTwo.classList.add('animate__delay-1s');


      advantageItemThree.classList.add('animate__lightSpeedInRight');
      advantageItemThree.classList.add('animate__animated');
      advantageItemThree.classList.add('animate__slow');
      advantageItemThree.classList.add('animate__delay-1s');


      

      break;
    }

    if (i !== 'active') {
      advantageTitle.classList.remove('animate__animated');
      advantageTitle.classList.remove('animate__fadeInDownBig');

      advantageItemOne.classList.remove('animate__lightSpeedInRight');
      advantageItemOne.classList.remove('animate__animated');
      advantageItemOne.classList.remove('animate__delay-1s');
      advantageItemOne.classList.remove('animate__faster');


      advantageItemTwo.classList.remove('animate__lightSpeedInRight');
      advantageItemTwo.classList.remove('animate__animated');

      advantageItemThree.classList.remove('animate__lightSpeedInRight');
      advantageItemThree.classList.remove('animate__animated');
    }
  }
});    
});

// создаем конфигурации для наблюдателя
var configAdvantage = { attributes: true, childList: true, characterData: true };

// запускаем механизм наблюдения
observerAdvantage.observe(targetAdvantage,  configAdvantage);








//HAMBURGER
const hamburgerElement = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.hamburger-menu_close');
const hamburgerBottom = document.querySelector('.hamburger-menu__bottom');
const hamburgerRights = document.querySelector('.hamburger-menu__copyright');
const hamburgerTop = document.querySelector('.hamburger-menu__top');
const menutag = document.querySelector('.menutag');
const bodyTag = document.querySelector('body');


const navFullPage = document.querySelector('#fp-nav.fp-right');
const navList = document.querySelectorAll('.hamburger-menu nav.list ul li');


hamburgerElement.addEventListener('click', function(){
  hamburgerMenu.classList.add('hamburger-menu_active');
  navFullPage.classList.add('fp-right_none');
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
  navFullPage.classList.remove('fp-right_none');
  navList.forEach(
    function(ele) {
      ele.classList.remove('liOn');
      ele.classList.remove('animate__fadeInUp');
      

    }
  );
  
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

  bodyTag.classList.remove('overflowOff');

});








    }, 500
  );
});






   /**
 VANILA TILT JS
 */

 VanillaTilt.init(document.querySelectorAll(".edge-item"), {
  max: 30,
  speed: 700
});