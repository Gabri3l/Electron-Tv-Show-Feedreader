'use strict';

$('#add-show').on('click', function () {
	$('#add-show-modal').show();
	$('#new-show-title').focus();
});

$(".modal-close").on('click', function() {
	$('#add-show-modal').hide();
	$('#remove-show-modal').hide();
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
	$('#remove-show-title').focus();
});

$('#delete-show').on('click', function (event) {
	event.preventDefault();

	// Get input title from user
	var showTitle = $('#remove-show-title').val();
	var shows = '';
	if ($('#show-list').val() !== '') {
		shows = $('#show-list').val().split(', ');
		var showIndex = $.inArray(showTitle, shows);
		// If show is in list remove it otherwise throw error
		if (showIndex > -1) {
			shows.splice(showIndex, 1);
		} else {
			console.log('error, show is not in list');
		}
	}

	// Empty show list and refill it with new show list with removed item
	$('#show-list').val('');
	var showList = '';
	shows.forEach(function (show) {
		showList += show + ', ';
	});
	$('#show-list').val(showList.slice(0, -2));

	$('#remove-show-title').val('');
	$('#remove-show-modal').hide();
});

$('#remove-all-shows').on('click', function () {
	$('#show-list').val('');
});

$('#start').on('click', function() {

	$.ajax({
        'url': 'https://eztv.ag/ezrss.xml',
        'method': 'GET',
        'dataType': 'xml'
    }).done(function(data){
		for( var i=0; i<data.firstChild.children[0].children.length; i++) {
			var item = data.firstChild.children[0].children[i];
			if (item.tagName === 'item') {
				var title = item.getElementsByTagName('title')[0].textContent;
				var magnetLink = item.getElementsByTagName('magnetURI')[0].textContent;
			}
		};
    }).fail(function(e){
        console.log(e);
   });

});