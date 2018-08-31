$(document).ready(function() {
	$('#digg_this').click(function(e) {
		e.preventDefault();
		window.open('http://digg.com/submit?phase=2&url=' + encodeURIComponent(document.location.href),'_blank');
	});
	$('#delicious').click(function(e) {
		e.preventDefault();
		window.open('http://delicious.com/save?v=5&amp;noui&amp;jump=close&amp;url=' + encodeURIComponent(location.href) + '&amp;title='+encodeURIComponent(document.title),'_blank');
	});
	$('#slashdot').click(function(e) {
		e.preventDefault();
		window.open('http://slashdot.org/slashdot-it.pl?op=basic&amp;url=' + encodeURIComponent(location.href),'_blank');
	});
	$('#technorati').click(function(e) {
		e.preventDefault();
		window.open('http://www.technorati.com/faves?add=' + encodeURIComponent(document.location.href),'_blank');
	});
	$('#stumbleupon').click(function(e) {
		e.preventDefault();
		window.open('http://www.stumbleupon.com/submit?url='+encodeURIComponent(location.href),'_blank');
	});
	$('#google_bookmarks').click(function(e) {
		e.preventDefault();
		window.open('http://www.google.com/bookmarks/mark?op=add&hl=en&title=' + encodeURIComponent(document.title) + '&bkmk=' + encodeURIComponent(location.href),'_blank');
	});
});