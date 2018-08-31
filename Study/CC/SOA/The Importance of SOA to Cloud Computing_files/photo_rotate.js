$(document).ready(function() {
	//Check hom many there are
	
	var $i = 0;
	var class_me = 'photo_rotate_ball';
	var effect_time = 500;
	
	$('#photo_rotate li').each(function() {
		$i++;
		
		var class_me = ($i == 1 ? 'photo_rotate_ball current' : 'photo_rotate_ball');
		
		$('<span class="' + class_me + '" id="photo_rotate_ball_' + $i + '">&nbsp;</span>').appendTo('#photo_rotate_trigger');
		
	});
	
	timer(effect_time);
	
	$('.photo_rotate_ball').click(function() {
		if ($(this).attr('class') != 'photo_rotate_ball current') {
			
			clearInterval(photo_rotate_clock);
			
			var $current = $(this).index('.photo_rotate_ball') + 1;
			//alert($current);
			
			$('#photo_rotate_trigger .current').removeClass('current');
			$('#photo_rotate_ball_' + $current).addClass('current');
			
			$('#photo_rotate .current').stop(true,true).fadeOut(effect_time).removeClass('current');
			$('#photo_rotate_' + $current).stop(true,true).addClass('current').hide().fadeIn(effect_time);
			
			timer(effect_time);
		}
	});
	
	//$(document).blur(alert('hulu'));
	
});

function timer(effect_time) {
	photo_rotate_clock = setInterval(function() {
		var $number = $('#photo_rotate li').length;
		var $current = $('.current').index('#photo_rotate li') + 1;
		
		if ($number > $current && $current != 0) {
			//Keep the forward motion
			$('#photo_rotate_trigger .current').removeClass('current').next().addClass('current');
			$('#photo_rotate .current').stop(true,true).fadeOut(effect_time).removeClass('current').next().addClass('current').hide().fadeIn(effect_time);
		}
		else {
			//Loop to beginning
			$('#photo_rotate_trigger .current').removeClass('current');
			$('#photo_rotate .current').stop(true,true).fadeOut(effect_time).removeClass('current');
			$('#photo_rotate_trigger span:first').addClass('current');
			$('#photo_rotate li:first').stop(true,true).fadeIn(effect_time).addClass('current');
		}
		//Loop the old whore
	}, 5000);
}