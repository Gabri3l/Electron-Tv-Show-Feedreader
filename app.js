'use strict';

$('#add-show').on('click', function () {
	$('#add-show-modal').show();
});

$(".modal-close").on('click', function() {
	$('#add-show-modal').hide();
});

$('#add-new-show').on('click', function (event) {
	event.preventDefault();
	var showTitle = $('#new-show-title').val();
	if ($('#show-list').val()) {
		$('#show-list').append(', ' + showTitle.trim());
	}else {
		$('#show-list').append(showTitle.trim());
	}
	$('#new-show-title').val('');
	$('#add-show-modal').hide();
});

$('#remove-show').on('click', function () {
	console.log('remove show');
});

$('#remove-all-shows').on('click', function () {
	$('#show-list').val('');
});