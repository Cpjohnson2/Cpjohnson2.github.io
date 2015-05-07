$(document).ready(getposts);
function getposts(){
    $.getJSON('entries.json', function(data) {
		$.each(data.entries, function(key, val) {
				console.log(val);
        });
	});
}