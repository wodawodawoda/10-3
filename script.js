var carouselList = $('#carousel ul');
var	backward = $('#backward');
var	forward = $('#forward');
var counter = 0;
var	control = document.getElementsByClassName('control-item');
$(function() {

	function moveFirstSlide () {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
		counter++;
		console.log(counter);
		if (counter % control.length !== 0) {
			control[counter % control.length - 1].style.background = '#FFF'
		} else {
			control[control.length - 1].style.background = '#FFF'
		}
		control[counter % control.length].style.background = '#00F'

	}

	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}

	setInterval(changeSlide, 1000);

});
