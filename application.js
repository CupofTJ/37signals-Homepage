$(document).ready(function() {
	$('.box').hover( function() {
		$(this).find('.product').toggle();
		$('.collab').toggleClass('hidden');
	});
});