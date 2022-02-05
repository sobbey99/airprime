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
  navigationTooltips: ['Главная', 'Что такое рекуператор?'],
	showActiveTooltip: false,
});