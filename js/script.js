$(function() {

	$('.social-border').hover(function() {
		$(this).css({
			'background-color': '#D3D3D3',
			'border': 'dotted 2px #777777'
		});
		$(this).animate({'bottom': '+=3px'}, 200);
		$(this).find('i').css('color', '#212121');
	}, function() {
		$(this).css({
			'background-color': 'inherit',
			'border': '2px solid #D3D3D3'
		});
		$(this).animate({'bottom': '-=3px'}, 200);
		$(this).find('i').css('color', 'inherit');
	});

});