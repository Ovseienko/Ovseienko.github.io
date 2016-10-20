(function lotteryFunction(){
	
	var nameInput = document.getElementById('name');
	var	surnameInput = document.getElementById('surname');
	var	emailInput = document.getElementById('email');
	var	phoneInput = document.getElementById('phone');
	var	winnerName = document.getElementsByClassName('winner-name')[0];
	var	choseWinner = document.getElementsByClassName('chose-winner-btn')[0];
	var	errorMsg =  document.getElementsByClassName('error-message')[0];
	var	submitBtn = document.getElementsByClassName('submit-btn')[0];
	var tableBody = document.querySelector('.participants-table tbody');
	var winnersArray = [];
	
	var validateEmail = function(val){
			var expr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!expr.test(val)) {
				emailInput.classList.add('error');
				errorMsg.innerHTML = "Your email is not valid";
				return false;
			}
			return true;
	};

	
	var validatePhoneNumber = function(val){
		if (val) {
			var expr = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
			if (!expr.test(val)) {
				phoneInput.classList.add('error');
				errorMsg.innerHTML = "Your phone number must contain from 10 to 12 digits";
				return false;
			}
		}
		return true;
	};
	
	var validateForm = function(){
		
		var required = [nameInput, surnameInput, emailInput];
		
		for(var i = 0; i < required.length; i++){
			if(!(required[i].value)){
					required[i].classList.add('error');
					errorMsg.classList.add('show');
					errorMsg.innerHTML = "Please fill all required fields!";
			}
		}
		function ifErrorDetected(el){
			return !(el.classList.contains('error'));
		}
		
		return required.every(ifErrorDetected);
		
	};

	var clearForm = function(){
		winnerName.innerHTML="";
		var highlighted = document.getElementsByClassName('highlight')[0];
		if(highlighted !== undefined){
			highlighted.classList.remove('highlight');
		}
	};
	
	this.removeErrorClass = function(){

		nameInput.onkeyup = function(){
			this.classList.remove('error');
		};
		surnameInput.onkeyup = function(){
			this.classList.remove('error');
		};
		emailInput.onkeyup = function(){
			this.classList.remove('error');
		};
		phoneInput.onkeyup = function(){
			this.classList.remove('error');
		};
		
	};


	this.submitForm = function(){
		submitBtn.onclick = function(event){
			event.preventDefault();
			
			var name = nameInput.value,
				surname = surnameInput.value,
				email = emailInput.value,
				phone = document.getElementById('phone').value,
				birthday = document.getElementById('birthday').value;
			
			errorMsg.innerHTML = '';

			if (validateForm() && validateEmail(email) && validatePhoneNumber(phone)) {
				var tr = document.createElement('tr');
				
				errorMsg.classList.remove('show');
				tr.innerHTML = '<tr><td>' + name + '</td><td>' + surname + '</td><td>' + email + '</td><td>' + phone + '</td><td>' + birthday + '</td></tr>';
				tableBody.appendChild(tr);	
				winnersArray.push(tr);

				var inputs = document.querySelectorAll('.form input');
				for(var i=0; i < inputs.length; i++ ){
					inputs[i].value = '';
				}
			}
			
		};	
	};

	this.selectWinner = function(){

		choseWinner.onclick = function(event){
			event.preventDefault();

			clearForm();

			var random = winnersArray[Math.floor(Math.random() * winnersArray.length)];

			if (random == undefined) {
				winnerName.innerHTML = "Can't chose yet! No participants in lottery"
			}else{
				random.classList.add('highlight');
				var randomName = document.querySelector('.highlight td:first-of-type').innerHTML;
				winnerName.innerHTML = randomName;
			}	
		};

	};
	
	this.removeErrorClass();
	this.submitForm();
	this.selectWinner();
	
})();

