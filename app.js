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

$('#remove-show').on('click', function() {
	$('#remove-show-modal').show();
});

$('#delete-show-modal').on('click', function () {
	event.preventDefault();
	var showTitle = $('#remove-show-title').val();
	var shows = $('#show-list').split(', ');
	if ($('#show-list').val()) {
		$('#show-list').append(', ' + showTitle.trim());
	}else {
		$('#show-list').append(showTitle.trim());
	}
	$('#new-show-title').val('');
	$('#add-show-modal').hide();
});

$('#remove-all-shows').on('click', function () {
	$('#show-list').val('');
});