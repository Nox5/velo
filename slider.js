class Slider {

	constructor() {
		this.photos=["images/map.png",
		"images/nom.png",
		"images/signature.png"];
		this.labels=["Choisissez la station de votre choix ",
		"Inscrivez votre nom, prénom puis validez ",
		"Signez et allez récupérer votre vélo à la station choisie ! "];
		this.changeSlide = 0;
		this.tableau = this.photos.length;
		this.boutonDroit = document.getElementById('droite').addEventListener('click',(e)=>{this.suivant()},false);
		this.boutonGauche = document.getElementById('gauche').addEventListener('click',(e)=>{this.precedent()},false);
		this.boutonPause = document.getElementById('pause').addEventListener('click',(e)=>{this.pauseSlide()},false);
		this.boutonPlay = document.getElementById('play').addEventListener('click',(e)=>{this.play()},false);
		this.maVariable = 3;
		this.play();
	}	


	play(){
		if(this.sliderActive === true) {
			return;
		}
		this.maVariable = setInterval((e)=>{this.suivant()},5000);
		this.sliderActive = true;
	}


	pauseSlide(){
		if(this.sliderActive === false) {
			return;
		}
		clearInterval(this.maVariable);
		this.maVariable = null;
		this.sliderActive = false;
	}


	suivant(){
		this.tableau[this.changeSlide]
		this.changeSlide += 1;
		this.changeSlide = this.changeSlide % (this.tableau);
		document.getElementById('images').setAttribute("src", this.photos[this.changeSlide]);
		document.getElementById('text').innerHTML=this.labels[this.changeSlide];
	}


	precedent(){
		this.tableau[this.changeSlide]
		this.changeSlide -=1;
		if(this.changeSlide < 0) {
			this.changeSlide = this.tableau - 1;
		}
		document.getElementById('images').setAttribute("src", this.photos[this.changeSlide]);
		document.getElementById('text').innerHTML=this.labels[this.changeSlide]; 
	}
}


let slider = document.getElementById('images');
slider.addEventListener('mouseenter', function (){
	caroussel1.pauseSlide();
});


slider.addEventListener('mouseleave', function (){
	caroussel1.play();
});


window.addEventListener("keydown", function (e) {
	if ($("input").is(":focus")) {
		return;
	}
	if (e.key === 'ArrowRight') {
		caroussel1.suivant();
	} else if (e.key === 'ArrowLeft') {
		caroussel1.precedent();
	} else if (e.key === ' ') {
		if (caroussel1.sliderActiv) {
			caroussel1.pauseSlide();
		} else {
			caroussel1.play();
		}
	}
	e.preventDefault();
});