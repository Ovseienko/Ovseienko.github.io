	function showPrices(){

		var optimizationPrices = document.body.querySelector('.optimization-prices');
		var borderBlock = document.body.getElementsByClassName('services-block')[1];
		var optimizationPricesForMob = document.body.querySelector('.optimization-prices.for-mob');

	if(window.innerWidth >= 769){

		if (borderBlock.classList.contains('show-border')) {
		optimizationPrices.style.cssText = "right:0%;opacity:0;z-index:-10; ";
		borderBlock.classList.remove('show-border');
		}else{
		optimizationPrices.style.cssText = "right:50%;opacity:1;z-index:10; ";
		borderBlock.classList.add('show-border');
		};

	}else{
		console.log(optimizationPricesForMob.style.display);
		if (optimizationPricesForMob.style.display == 'none' || optimizationPricesForMob.style.display == "") {
			optimizationPricesForMob.style.display = 'block';
		}else{
			optimizationPricesForMob.style.display = 'none';
		};
	}
		
	}
	function showPrices(){

		var optimizationPrices = document.body.querySelector('.optimization-prices');
		var borderBlock = document.body.getElementsByClassName('services-block')[1];
		var optimizationPricesForMob = document.body.querySelector('.optimization-prices.for-mob');

	if(window.innerWidth >= 769){

		if (borderBlock.classList.contains('show-border')) {
		optimizationPrices.style.cssText = "right:0%;opacity:0;z-index:-10; ";
		borderBlock.classList.remove('show-border');
		}else{
		optimizationPrices.style.cssText = "right:50%;opacity:1;z-index:10; ";
		borderBlock.classList.add('show-border');
		};

	}else{
		console.log(optimizationPricesForMob.style.display);
		if (optimizationPricesForMob.style.display == 'none' || optimizationPricesForMob.style.display == "") {
			optimizationPricesForMob.style.display = 'block';
		}else{
			optimizationPricesForMob.style.display = 'none';
		};
	}
		
	}

	 showList = function(){

		var select = document.body.getElementsByClassName('select')[0];
		if(select.style.display == "none" || select.style.display == ""){
			select.style.display = "block";

		}else{
			select.style.display = "none";
		}

	}



	 showList = function(){

		var select = document.body.getElementsByClassName('select')[0];
		if(select.style.display == "none" || select.style.display == ""){
			select.style.display = "block";

		}else{
			select.style.display = "none";
		}

	}