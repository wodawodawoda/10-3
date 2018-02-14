$(function() {
	var carouselList = $('#carousel ul');
	var backward = $('#backward');
	var forward = $('#forward');
	var counter = 0;
	var control = document.getElementsByClassName('control-item');

	control[counter].style.background = '#00F';

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({ marginLeft: 0 });
		counter++;
		if (counter == 5) {
			counter = 0;
		}
		control[counter].style.background = '#00F';
		if (counter === 0) {
			control[control.length - 1].style.background = "#FFF";
		} else {
			control[counter - 1].style.background = "#FFF";
		}
		
	}

	function moveBack() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({ marginLeft: -400 });
		counter--;
		if (counter < 0) {
			counter = 4;
		}
		control[counter].style.background = '#00F';
		if (counter == control.length - 1) {
			control[0].style.background = "#FFF";
		} else {
			control[counter + 1].style.background = "#FFF";
		}
	}

	function changeSlide() {
		carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);
	}

	forward.click(changeSlide);
	backward.click(function() {
		moveBack();
		carouselList.animate({ 'marginLeft': 0 }, 500);
	});
	// setInterval(changeSlide, 2000);

});