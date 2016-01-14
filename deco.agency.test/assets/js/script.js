function showPrices(){

		var optimizationPrices = document.body.querySelector('.optimization-prices');
		var borderBlock = document.body.getElementsByClassName('services-block')[1];
		var optimizationPricesForMob = document.body.querySelector('.optimization-prices.for-mob');

	if(window.innerWidth >= 769){
		if (borderBlock.classList.contains('show-border')) {
		optimizationPrices.classList.remove('show-optimization');
		borderBlock.classList.remove('show-border');
		}else{
		optimizationPrices.classList.add('show-optimization');
		borderBlock.classList.add('show-border');
		};
	}else{
		if (optimizationPricesForMob.classList.contains('display')) {
			optimizationPricesForMob.classList.remove('display');
		}else{
			optimizationPricesForMob.classList.add('display');
		};
	}
		
}

showList = function(){
		var select = document.body.getElementsByClassName('select')[0];
		if(select.classList.contains('display-select')){
			select.classList.remove('display-select');
		}else{
			select.classList.add('display-select');
		}
}

