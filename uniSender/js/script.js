$(document).ready(function(){

	$('#category, #name, #type').each(function () {
		$(this).change(function(){
			if(($('#name').val() !== '') && ($('#category').val() !== '') && ($('#type').val() !== '')){
				$('.send').prop('disabled',false);
			}else{
				$('.send').prop('disabled',true);
			}
		});
	});
	$('.buttons .btn').click(function(){
		$('.buttons .btn:first-of-type').removeClass('active');
		$(this).addClass('active');
		$('.hidden-input').attr('value', $('.active').text());
	});
	$("#report-form").submit(function(e) { 
			e.preventDefault();
			var data = $(this).serialize(); 
			$.ajax({
			type: "POST", 
			url: "send.php",
			async: false,
			data: data,
			beforeSend: function(){
				$('.loading-icon').show(0).delay(400).hide(0);
			},
			success: function() {
				$('.tooltip-span').css('opacity', '.8');
			   }
			}).done(function(){
				setTimeout(function(){
					$('.tooltip-span').fadeOut(600);
				},800);
				$('.btn-group button').removeClass('active')
				$('.default-active').addClass('active');
				$('#name, #category, #type').val('');
				$('.send').prop('disabled',true);
			});
	});  
	
});