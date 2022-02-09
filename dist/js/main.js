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
//SVG 1
const edgeImg1 = document.querySelector('.edge-item__img_1');
const edgeSvg1El1 = document.querySelector('.edge-svg1_el1');
const edgeSvg1El2 = document.querySelector('.edge-svg1_el2');
const edgeSvg1El3 = document.querySelector('.edge-svg1_el3');
const edgeSvg1El4 = document.querySelector('.edge-svg1_el4');
const edgeSvg1El5 = document.querySelector('.edge-svg1_el5');
const edgeSvg1El6 = document.querySelector('.edge-svg1_el6');

//SVG 2
const edgeImg2 = document.querySelector('.edge-item__img_2');
const edgeSvg2El1 = document.querySelector('.edge-svg2_el1');
const edgeSvg2El2 = document.querySelector('.edge-svg2_el2');
const edgeSvg2El3 = document.querySelector('.edge-svg2_el3');
const edgeSvg2El4 = document.querySelector('.edge-svg2_el4');
const edgeSvg2El5 = document.querySelector('.edge-svg2_el5');
const edgeSvg2El6 = document.querySelector('.edge-svg2_el6');
const edgeSvg2El7 = document.querySelector('.edge-svg2_el7');
const edgeSvg2El8 = document.querySelector('.edge-svg2_el8');
const edgeSvg2El9 = document.querySelector('.edge-svg2_el9');

//SVG 3
const edgeImg3 = document.querySelector('.edge-item__img_3');
const edgeSvg3El1 = document.querySelector('.edge-svg3_el1');
const edgeSvg3El2 = document.querySelector('.edge-svg3_el2');
const edgeSvg3El3 = document.querySelector('.edge-svg3_el3');
const edgeSvg3El4 = document.querySelector('.edge-svg3_el4');
const edgeSvg3El5 = document.querySelector('.edge-svg3_el5');
const edgeSvg3El6 = document.querySelector('.edge-svg3_el6');
const edgeSvg3El7 = document.querySelector('.edge-svg3_el7');


//SVG 4
const edgeImg4 = document.querySelector('.edge-item__img_4');
const edgeSvg4El1 = document.querySelector('.edge-svg4_el1');

//SVG 5
const edgeImg5 = document.querySelector('.edge-item__img_5');
const edgeSvg5El1 = document.querySelector('.edge-svg5_el1');

//SVG 6
const edgeImg6 = document.querySelector('.edge-item__img_6');
const edgeSvg6El1 = document.querySelector('.edge-svg6_el1');
const edgeSvg6El2 = document.querySelector('.edge-svg6_el2');
const edgeSvg6El3 = document.querySelector('.edge-svg6_el3');


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
            edgeSvg1El1.classList.add('svg-elem-1');
            edgeSvg1El2.classList.add('svg-elem-2');
            edgeSvg1El3.classList.add('svg-elem-3');
            edgeSvg1El4.classList.add('svg-elem-4');
            edgeSvg1El5.classList.add('svg-elem-5');
            edgeSvg1El6.classList.add('svg-elem-6');

              //ANIMATE SVG 2
            edgeImg2.classList.add('edge-item__img_2-activated');
            edgeSvg2El1.classList.add('svg-elem-1');
            edgeSvg2El2.classList.add('svg-elem-2');
            edgeSvg2El3.classList.add('svg-elem-3');
            edgeSvg2El4.classList.add('svg-elem-4');
            edgeSvg2El5.classList.add('svg-elem-5');
            edgeSvg2El6.classList.add('svg-elem-6');
            edgeSvg2El7.classList.add('svg-elem-7');
            edgeSvg2El8.classList.add('svg-elem-8');
            edgeSvg2El9.classList.add('svg-elem-9');

            //ANIMATE SVG 3
            edgeImg3.classList.add('edge-item__img_3-activated');
            edgeSvg3El1.classList.add('svg-elem-1');
            edgeSvg3El2.classList.add('svg-elem-2');
            edgeSvg3El3.classList.add('svg-elem-3');
            edgeSvg3El4.classList.add('svg-elem-4');
            edgeSvg3El5.classList.add('svg-elem-5');
            edgeSvg3El6.classList.add('svg-elem-6');
            edgeSvg3El7.classList.add('svg-elem-7');

            //ANIMATE SVG 4
            edgeImg4.classList.add('edge-item__img_4-activated');
            edgeSvg4El1.classList.add('svg-elem-1');

            //ANIMATE SVG 5
            edgeImg5.classList.add('edge-item__img_5-activated');
            edgeSvg5El1.classList.add('svg-elem-1');

              //ANIMATE SVG 6
              edgeImg6.classList.add('edge-item__img_6-activated');
              edgeSvg6El1.classList.add('svg-elem-1');
              edgeSvg6El2.classList.add('svg-elem-2');
              edgeSvg6El3.classList.add('svg-elem-3');

            

            }, 1100);
            break;
            



         
          
        }

        if (i !== "active") {
          edgeItem.classList.remove('animate__animated');
            edgeItem.classList.remove('animate__delay-1s');
            edgeItem.classList.remove('animate__bounceIn');

            setTimeout( () => {
              //SVG 1
            edgeImg1.classList.remove('edge-item__img_1-activated');
            edgeSvg1El1.classList.remove('svg-elem-1');
            edgeSvg1El2.classList.remove('svg-elem-2');
            edgeSvg1El3.classList.remove('svg-elem-3');
            edgeSvg1El4.classList.remove('svg-elem-4');
            edgeSvg1El5.classList.remove('svg-elem-5');
            edgeSvg1El6.classList.remove('svg-elem-6');

            //SVG 2
            edgeImg2.classList.remove('edge-item__img_2-activated');
            edgeSvg2El1.classList.remove('svg-elem-1');
            edgeSvg2El2.classList.remove('svg-elem-2');
            edgeSvg2El3.classList.remove('svg-elem-3');
            edgeSvg2El4.classList.remove('svg-elem-4');
            edgeSvg2El5.classList.remove('svg-elem-5');
            edgeSvg2El6.classList.remove('svg-elem-6');
            edgeSvg2El7.classList.remove('svg-elem-7');
            edgeSvg2El8.classList.remove('svg-elem-8');
            edgeSvg2El9.classList.remove('svg-elem-9');

            //SVG 3
            edgeImg3.classList.remove('edge-item__img_3-activated');
            edgeSvg3El1.classList.remove('svg-elem-1');
            edgeSvg3El2.classList.remove('svg-elem-2');
            edgeSvg3El3.classList.remove('svg-elem-3');
            edgeSvg3El4.classList.remove('svg-elem-4');
            edgeSvg3El5.classList.remove('svg-elem-5');
            edgeSvg3El6.classList.remove('svg-elem-6');
            edgeSvg3El7.classList.remove('svg-elem-7');

            //SVG 4
            edgeImg4.classList.remove('edge-item__img_4-activated');
            edgeSvg4El1.classList.remove('svg-elem-1');

 //SVG 5
 edgeImg5.classList.remove('edge-item__img_5-activated');
 edgeSvg5El1.classList.remove('svg-elem-1');

   //SVG 6
   edgeImg6.classList.remove('edge-item__img_6-activated');
   edgeSvg6El1.classList.remove('svg-elem-1');
   edgeSvg6El2.classList.remove('svg-elem-2');
   edgeSvg6El3.classList.remove('svg-elem-3');

            }, 1000)
        }
    }
  });    
});
 
// создаем конфигурации для наблюдателя
var configEdge = { attributes: true, childList: true, characterData: true };
 
// запускаем механизм наблюдения
observerEdge.observe(targetEdge,  configEdge);


   /**
 VANILA TILT JS
 */

 VanillaTilt.init(document.querySelectorAll(".edge-item"), {
  max: 30,
  speed: 700
});