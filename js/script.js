var writeToUsBtn = document.querySelector(".btn-adress");
var modalContactBlock = document.querySelector(".modal-contact-block");
var closeModalBlock = document.querySelector(".close-modal-block");
var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var closeModalMap = document.querySelector(".close-modal-map");
var popupOverlay = document.querySelector(".popup-overlay");
var contactForm = document.querySelector(".contact-form");
var name = document.querySelector("[name=name]");
var email = document.querySelector("[name=email");

	writeToUsBtn.addEventListener("click", function(event) {
		event.preventDefault();
		modalContactBlock.classList.add("modal-contact-block-open");
		popupOverlay.classList.add("popup-overlay-open");
	});
	
	closeModalBlock.addEventListener("click", function(event) {
		event.preventDefault();
		modalContactBlock.classList.remove("modal-contact-block-open");
		popupOverlay.classList.remove("popup-overlay-open");
	});

	contactForm.addEventListener("submit", function(event) {
		if(!name || !email) {
			event.preventDefault();
			alert("ВЫ НЕ ВВЕЛИ ДАННЫЕ");
		}
	});	