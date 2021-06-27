window.addEventListener("load", async () => {
	// const fetchPromise = fetch("http://localhost:4000/data")
	// const dataPromise = fetchPromise.then(res => res.json())
	// dataPromise.then(data => console.log(data))

	const res = await fetch("http://localhost:4000/data")
	const data = await res.json()
	
	// axios('localhost').then(data => console.log(data))
	// const data = await axios("http://localhost:4000/data")
	// console.log(data)
	
	// await fetch("http://localhost:4000/data")
	// 	.then(res => res.json())

	console.log(data.length)
	
	let nextArrow = document.querySelector("#nextCarouselArrow")
	let prevArrow = document.querySelector("#prevCarouselArrow")
	let counter = 0
	
	const nextArrowClick = () => {
		// for(var i = 0; i <= data.length)
		if(counter < data.length) {
			nextArrow.classList.remove("limited")
			counter += 1
		} else {
			nextArrow.classList.add("limited")
		}
	}

	const prevArrowClick = () => {
		// for(var i = 0; i <= data.length)
		if(counter > 0) {
			prevArrow.classList.remove("limited")
			counter -= 1
		} else {
			prevArrow.classList.add("limited")
		}
	}

	nextArrow.addEventListener("click", nextArrowClick)
	prevArrow.addEventListener("click", prevArrowClick)
})