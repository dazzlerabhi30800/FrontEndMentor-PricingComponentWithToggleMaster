const toggleButton = document.querySelector('.toggle__button');
const circle = document.querySelector('.circle');

const card1 = document.querySelector("#card1 .price");
const card2 = document.querySelector("#card2 .price");
const card3 = document.querySelector("#card3 .price");

toggleButton.addEventListener('click', () => {
	circle.classList.toggle('active');
	if(circle.classList.contains('active')){
		card1.innerText = "$19.99";
		card2.innerText = "$24.99";
		card3.innerText = "$39.99";
	}
	else {
		card1.innerText = "$199.99";
		card2.innerText = "$249.99";
		card3.innerText = "$399.99";

	}
})
