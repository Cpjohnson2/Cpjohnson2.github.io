$(document).ready(getposts);
function getposts(){
    $.getJSON('entries.json', function(data) {
		$.each(data.entries, function(key, val) {
				console.log(val.date);
				console.log(val.text);
				$(#"blog").append("<div id ='"+ key + "'>");
				$("#blog").append("<p>"+ val.date + "</p>");
					$("#blog").append("<p>" + val.text + "</p>");
					$(#"blog").append("</div>");
				// 
        });
	});
}

