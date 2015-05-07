$(document).ready(getposts);
function getposts(){
    $.getJSON('entries.json', function(data) {
		$.each(data.entries, function(key, val) {
				console.log(val.date);
				console.log(val.text);
				$("#blog").append("<p>" + val.text + "</p>");
				$("#blog").append("<p>"+ val.date+ "</p>");
				
				// 
        });
	});
}