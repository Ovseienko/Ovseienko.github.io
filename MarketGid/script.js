$(document).ready(function() {
	
	$('form').submit(function(e){
		e.preventDefault();
		var info = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: 'send.php',
			data: info,
			success: function(){
				alert('We received your info! Thank you!');
			}
		}).done(function(){
			$('.form .form-control').each(function(){
				$(this).reset();
			});
		});
	});



});