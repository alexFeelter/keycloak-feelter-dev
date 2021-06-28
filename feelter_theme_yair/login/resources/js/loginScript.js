window.addEventListener("load", async () => {
	const res = await fetch("http://localhost:4000/data")
	const data = await res.json()

	let nextArrow = document.querySelector("#nextCarouselArrow")
	let prevArrow = document.querySelector("#prevCarouselArrow")
	let counter = 0

	const carouselProd = document.querySelector(".carouselProdContainer")
	const carouselProdWidth = carouselProd.offsetWidth
	
	const nextArrowClick = () => {
		carouselProd.scrollTo({ left: carouselProdWidth + carouselProd.scrollLeft, behavior: 'smooth' })
		if (counter < data.length - 1) {
			counter += 1
		}
		
		if(counter < data.length - 1) {
			prevArrow.classList.add("active")
		} else {
			nextArrow.classList.remove("active")
		}
	}

	const prevArrowClick = () => {
		carouselProd.scrollTo({ left: carouselProd.scrollLeft - carouselProdWidth, behavior: 'smooth' })
		if (counter > 0) {
			counter -= 1
		}
		
		if(counter > 0) {
			nextArrow.classList.add("active")
		} else {
			prevArrow.classList.remove("active")
		}
	}

	nextArrow.addEventListener("click", nextArrowClick)
	prevArrow.addEventListener("click", prevArrowClick)
})