import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

new Swiper(".swiper-container", {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {		
		el: '.swiper-pagination',
		
// 		type: 'fraction',
// 		renderFraction: function (currentClass, totalClass){
// 			return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
// 		},


		// scss: swiper-pagination-fraction


		type: 'bullets',
		clickable: true,
		// dynamicBullets: true, 


		// scss: swiper-pagination-bullets
	},



	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true
	// },


	simulateTouch: false,
	// градус при котором поворот
	touchAngle: 90,
	grabCursor: false,


	// slideToClickedSlide: false,


	// hashNavigation: {
	// 	watchState: true,
	// },

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	// mousewheel: {
	// 	sensiitivity: 1,
	// },


	autoHeight: true,

	// сколько элементов в 1ой странице свайпера
	// slidesPerView: 2,

	watchOverflow: true,

	// spaceBetween: 30,
	
	// сколько элементов при прокрутке пропустит
	// slidesPerGroup: 2,

	// centeredSlides: false,
	
	// с какой начнет
	// initialSlide: 0,
	
	// колонка(нужна высота+вычесть spaceBetween)
	// slidesPerColumn: 2,

	// бесконечность
	loop: true,
	// loopedSlides: 0,
	
	
	// freeMode: true,
	
	
	autoplay: {
		delay: 3000,
		stopOnLastSlide: true,
		disableOnInteraction: false,
	},
	
	speed: 800,
	
	// direction: 'vertical',

	effect: 'slide',

	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },

	// плохой режим
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// 	shadow: true,
	// 	shadowOffset: 0,
	// 	shadowScale: 0.5,
	// },

	// effect: 'coverflow',
	// flipEffect: {
	// 	slideShadows: false,
	// 	rotate: 10,
	// 	stretch: 50,
	// },

	// breakpoints: {
	// 	320: {
	// 	},
	// 	480: {
	// 	},
	// 	772: {
	// 	},
	// 	992: {
	// 	}, 
	// },

	// миниатюра
	// thumbs: {
	// 	swiper: {
	// 		el: '.mini-swiper',
	// 		slidesPerView: 4,
	// 	}
	// },


// 	preloadImages: false,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: false,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	nested: true,
// });


// Swiper in swiper
// new Swiper(".image-in", {
// 	pagination: {		
// 		el: '.swiper-pagination',
		
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass){
		// 	return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true,


		// scss: swiper-pagination-bullets
	// },
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	initialSlide: 0,
// 	nested: true,
});