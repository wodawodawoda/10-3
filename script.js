$(function() {
	var carouselList = $('#carousel ul');
	var backward = $('#backward');
	var forward = $('#forward');
	var counter = 0;
	var control = document.getElementsByClassName('control-item');
	var animationTime = 500;
	var counterColorSelected = '#00F';
	var counterColorEmpty = '#FFF';
	var imgWidth = 400;


	control[counter].style.background = counterColorSelected;

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({ marginLeft: 0 });
		counter++;
		if (counter == control.length) {
			counter = 0;
		}
		control[counter].style.background = counterColorSelected;
		if (counter === 0) {
			control[control.length - 1].style.background = counterColorEmpty;
		} else {
			control[counter - 1].style.background = counterColorEmpty;
		}
		
	}

	function moveBack() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({ marginLeft: - imgWidth });
		counter--;
		if (counter < 0) {
			counter = control.length - 1;
		}
		control[counter].style.background = counterColorSelected;
		if (counter == control.length - 1) {
			control[0].style.background = counterColorEmpty;
		} else {
			control[counter + 1].style.background = counterColorEmpty;
		}
	}

	function changeSlide() {
		carouselList.animate({ 'marginLeft': - imgWidth }, animationTime, moveFirstSlide);
	}

	forward.click(changeSlide);
	backward.click(function() {
		moveBack();
		carouselList.animate({ 'marginLeft': 0 }, animationTime);
	});
	// setInterval(changeSlide, 2000);

});