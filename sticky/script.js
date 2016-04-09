(function stickyHeader() {
	var topBar = document.body.getElementsByClassName('top-bar')[0],
		bottomBar = document.body.getElementsByClassName('bottom-bar')[0],
		initialCoordsTop = topBar.getBoundingClientRect(),
		initialCoordsBottom = bottomBar.getBoundingClientRect();
	window.onscroll = function(){
		if ((document.body.scrollTop > initialCoordsTop.top) || (document.documentElement.scrollTop > initialCoordsTop.top)) {
			topBar.classList.add('fixed');
		}else{
			topBar.classList.remove('fixed');
		};
		if ((document.body.scrollTop > initialCoordsBottom.top) || (document.documentElement.scrollTop > initialCoordsBottom.top)) {
			bottomBar.classList.add('fixed');
		}else{
			bottomBar.classList.remove('fixed');
		};
	};
})();