// Swipper
const swiperClients = new Swiper('.swipe--clients', {
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 'auto',
			spaceBetween: 16,
			centeredSlides: true,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 32,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 'auto',
			spaceBetween: 40,
		},
	},
	loop: true,

	autoplay: {
		delay: 4000,
	},
})

const swiperTabMenu = new Swiper('.tabmenu--header', {
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 8,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 32,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 'auto',
			spaceBetween: 40,
		},

		960: {
			slidesPerView: 'auto',
			spaceBetween: 40,
			enabled: false,
		},
	},
	loop: false,
	autoplay: false,
})
