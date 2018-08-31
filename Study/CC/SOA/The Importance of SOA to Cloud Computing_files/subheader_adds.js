$(document).ready(function() {
	
	$('.subheader_add').removeClass('first_show');
	
	$('#subheader_adds').each(function() {
		var items = $('.subheader_add', this);
		var item = Math.floor(Math.random() * items.length);
		$(items[item]).addClass('first_show');
	});

	setTimeout(subheaderAdds, 4000);

});

function subheaderAdds() {
	var current = $('#subheader_adds .first_show');
	var items = $('.subheader_add:not(.first_show)');
	var item = Math.floor(Math.random() * items.length);
	var next = $(items[item]); //current.next().length ? current.next() : current.parent().children(':first');
	current.fadeOut(700).removeClass('first_show');
	next.fadeIn(700).addClass('first_show');
	setTimeout(subheaderAdds, 4000);  
} 
