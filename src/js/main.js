






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

  setTimeout(
    () => {
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
navigationTooltips: ['Главная', 'Что такое рекуператор?', 'Преимущества', 'Выгода', 'Каталог', 'Монтаж', 'Связаться'],
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

      advantageItemOne.classList.add('animate__delay-0s');
      advantageItemOne.classList.add('animate__lightSpeedInRight');
      advantageItemOne.classList.add('animate__animated');

      advantageItemTwo.classList.add('animate__delay-1s');
      advantageItemTwo.classList.add('animate__lightSpeedInRight');
      advantageItemTwo.classList.add('animate__animated');

      advantageItemThree.classList.add('animate__delay-2s');
      advantageItemThree.classList.add('animate__lightSpeedInRight');
      advantageItemThree.classList.add('animate__animated');
      

      break;
    }

    if (i !== 'active') {
      advantageTitle.classList.remove('animate__animated');
      advantageTitle.classList.remove('animate__fadeInDownBig');

      advantageItemOne.classList.remove('animate__lightSpeedInRight');
      advantageItemOne.classList.remove('animate__animated');
      advantageItemOne.classList.remove('animate__delay-0s');

      advantageItemTwo.classList.remove('animate__delay-1s');
      advantageItemTwo.classList.remove('animate__lightSpeedInRight');
      advantageItemTwo.classList.remove('animate__animated');

      advantageItemThree.classList.remove('animate__delay-2s');
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





// EDGE WATCHING ! выбираем нужный элемент
const targetEdge = document.querySelector('.edge');
const edgeItem = document.querySelector('.edge__wrapper');



var edgeChanger = 0;


// создаем новый экземпляр наблюдателя
var observerEdge = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
  edgeChanger = mutation.target.classList;
  for (let i of edgeChanger) {
      if (i == 'active') {
          edgeItem.classList.add('animate__animated');
          edgeItem.classList.add('animate__delay-1s');
          edgeItem.classList.add('animate__bounceIn');

          setTimeout(() => {
            //ANIMATE SVG 1
            edgeImg1.classList.add('edge-item__img_1-activated');

          }, 1100);
          break;
          

        
      }

      if (i !== "active") {
        edgeItem.classList.remove('animate__animated');
          edgeItem.classList.remove('animate__delay-1s');
          edgeItem.classList.remove('animate__bounceIn');
      }
  }
});    
});

// создаем конфигурации для наблюдателя
var configEdge = { attributes: true, childList: true, characterData: true };

// запускаем механизм наблюдения
observerEdge.observe(targetEdge,  configEdge);

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