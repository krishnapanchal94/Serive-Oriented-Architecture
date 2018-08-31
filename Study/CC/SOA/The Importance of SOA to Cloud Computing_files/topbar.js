$(document).ready(function() {
	//TOPBAR
	$('#nav li').hover(function(){ 
		$('ul', this).slideDown(100); 
	}, function(){ 
		$('ul', this).slideUp(100); 
	});

	//Go left Social Media
	position_social_media();
	$(window).resize(function() {
		position_social_media();
	});
	$('#mylist #default').attr('selected', 'selected');
	
	$('#topbar_right #nav a').hover(function() {
		var image = $(this).children('img');
		var src = $(image).attr('src');
		var ext = src.substr(-4,4);
		var newImage = src.replace(ext,'_hover' + ext);
		
		$(image).attr('src',newImage);
	}, function() {
		var image = $(this).children('img');
		var src = $(image).attr('src');
		var newImage = src.replace('_hover','');
		
		$(image).attr('src',newImage);
	
	});
	
	$('#mylist option:not(#default)').click(function() {
		var href = $(this).val();
		window.location.href = href;
	});
	
	var preload = new Array();	
	
	$('#topbar_right #nav a').each(function() {
		var image = $(this).children('img');
		var src = $(image).attr('src');
		var ext = src.substr(-4,4);
		var newImage = src.replace(ext,'_hover' + ext);
		
		preload.push(newImage);
	});
	
	$(preload).preload();

});

//Speeds up hover time for topbar
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

function position_social_media() {
	/*if ($(window).width() < 1330) {
		$('#nav li li').addClass('social_media_right');
		$('#nav ul').each(function() {
			$('li',this).css({ left: -($('li',this).outerWidth() - 22) + 'px' });
		});
	}
	else {
		$('#nav li li').removeClass('social_media_right');
		$('#nav ul li').css({ left: 0 });
	}*/
}