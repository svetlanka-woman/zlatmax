/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-block__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-block__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			// autoHeight: true,
			speed: 800,
			parallax: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			pagination: {
				el: '.control-main-block__dotts',
				clickable: true,
				type: 'bullets'
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				init: function () { 
					const fractionAll = document.querySelector('.fraction-control__all');
					fractionAll.innerHTML = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)').length;
				},
				slideChange: function(swiper) {
					const fractionCurrent = document.querySelector('.fraction-control__current'),
								currentIndex = swiper.realIndex + 1;
					fractionCurrent.innerHTML = currentIndex < 10 ? `0${currentIndex}` : currentIndex;
				}
			}
		});
	}
	if (document.querySelector('.products-slider__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.products-slider__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// autoHeight: true,
			speed: 800,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			pagination: {
				el: '.products-slider__dotts',
				clickable: true,
				type: 'bullets'
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				490: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				680: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				890: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {
				
			}
		});
	}
	if (document.querySelector('.new-products__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.new-products__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 28,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// autoHeight: true,
			speed: 800,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			
			*/

			// Пагинация
			pagination: {
				el: '.new-products__dotts',
				clickable: true,
				type: 'bullets'
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				490: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				641: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				800: {
					slidesPerView: 1.5,
					spaceBetween: 24
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 28,
				},
				1300: {
					slidesPerView: 3,
					spaceBetween: 28,
				},
			},

			// События
			on: {
				
			}
		});
	}	
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});