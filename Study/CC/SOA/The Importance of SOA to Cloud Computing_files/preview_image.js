$(document).ready(function() {
	//Add link after image
	$('<div class="preview_image_text">See Larger...</div>').insertAfter('img.preview_image');
	
	$('img.preview_image').css({ cursor: 'pointer' }).click(function() {
		add_overlay(this);
	});
	$('.preview_image_text').css({ cursor: 'pointer' }).click(function() {
		add_overlay($(this).prev());
	});
	
	//Reposition + Resize
	$(window).resize(function(e) {
		position_lightbox();
	});
});

function add_overlay(obj) {
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	var top_location = $(document).scrollTop();
	var image = $(obj).attr('src')
	
	//Bound with exit
	$('<div id="overlay"></div>').css({
		opacity: '0',
		top: top_location,
		height: window_height,
	})
		.animate({'opacity': '0.7'}, 'slow')
		.appendTo('body')
		.click('click',remove_lightbox);
	
	$('<div id="image_full"><img src="' + image + '" alt="img" /></div>').appendTo('body').css({
		top: top_location + ((window_height - $('#image_full').outerHeight()) / 2) + 'px',
		height: window_height,
	});
	
	$('<img id="lightbox_exit" src="/system/application/images/exit.png" alt="img" />')
		.bind('click',remove_lightbox)
		.appendTo('#image_full');
	
	$('body').css({ 
		overflowY: 'hidden',
		paddingRight: '17px'
	});
	position_lightbox();
}

function position_lightbox() {
	if ($('#image_full').length != 0) {
		var window_width = window.innerWidth;
		var window_height = window.innerHeight;
		var top_location = $(document).scrollTop();
		
		$('#overlay').css({
			width: window_width,
			height: window_height,
			top: top_location
		});
		
		$('#image_full, #image_full img').css({
			top: top_location + ((window_height - $('#image_full').outerHeight()) / 2) + 'px',
			left: (window_width - $('#image_full').outerWidth()) / 2 + 'px',
			maxWidth: window_width * 0.9 + 'px',
			maxHeight: window_height * 0.9 + 'px',
		});
	}
}

function remove_lightbox() {
	if ($('#image_full').length != 0) {
		$('#image_full').fadeOut('slow',function() {
			$(this).remove();
		});
		$('#overlay').fadeOut('slow',function() {
			$(this).remove();
			$('body').css({ 
				overflowY: 'visible',
				paddingRight: '0px'

			});
		});
	}
}