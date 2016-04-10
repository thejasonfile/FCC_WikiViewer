function autocomplete(request) {
	url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+request.term+'&limit=10&namespace=0&format=json&callback=?'
	$.getJSON(url, function (data) {
	 	$("#resultList").html("");
	 	for(var i = 0; i < data[1].length; i++) {
			$("#resultList").append(
				"<a href='"+data[3][i]+"' target='_blank'><div class='searchresult'><h4>"+data[1][i]+"</h4><p>"+data[2][i]+"</p></div></a>"
			)
			
		}	 
    });
}

$( "#search" ).autocomplete({
	source: autocomplete,
    autoFocus:true,
});
