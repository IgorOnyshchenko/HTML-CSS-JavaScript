$(document).ready(function() {
	var toAdd = 'abc'
    $('#button').click( function() {
			toAdd = $("input[name=checkListItem]").val();
			$('.list').append('<div class="item">'+toAdd+'</div>');
			
			$('.item').click( function() {
				$(this).remove();
			});
        });
});

