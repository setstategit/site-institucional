

// Navmenu
const activeNav = document.querySelector('.active--menu')
const closeNav = document.querySelector('.close--menu')
const menuNav = document.querySelector('nav')

activeNav.addEventListener('click', () => {
	menuNav.classList.add('active')
})

closeNav.addEventListener('click', () => {
	menuNav.classList.remove('active')
})

// Tabmenu
const tabMenu = document.querySelectorAll('.tab-button')
const tabContent = document.querySelectorAll('.tabmenu--content')

tabMenu.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabContent.forEach((content, index) => {
			content.classList.remove('active')
		})
		tabContent[index].classList.add('active')

		tabMenu.forEach((tab) => {
			tab.classList.remove('tab-active')
		})
		tab.classList.add('tab-active')
	})
})
