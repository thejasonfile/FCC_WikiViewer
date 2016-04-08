// $(document).ready(function(){

// 	function wikiSearch() {
// 		console.log('running search')
// 		$("#resultList").html("");
// 		var term = $("input").val();
// 		console.log(term);
// 		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&prop=pageimages&format=json&search=" + term + "&suggest=1&callback=?"
// 		console.log(url);
// 		$.getJSON(url, dataLoop);
// 	}

// 	function dataLoop(data){
// 		console.log(data);
// 		for(var i = 0; i < data[1].length; i++) {
// 			$("#resultList").append("<li><a href='" + data[3][i] + "' target='_blank'>" + data[1][i] + " : " + data[2][i] + "</a></li>");
// 		}
// 	}

// 	//event handlers
// 	$('button').on('click', wikiSearch);
// });

function wikiSearch() {
	$.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
            'action': "opensearch",
            'format': "json",
            'search': $("#search").val(),
            'prop': "pageimages"
        },
        success: dataLoop
	})
};

function dataLoop(data){
	$("#search").val("");
	$("#resultList").html("");
	for(var i = 0; i < data[1].length; i++) {
		$("#resultList").append("<li><a href='" + data[3][i] + "' target='_blank'>" + data[1][i] + " : " + data[2][i] + "</a></li>");
	}
}

$('button').on('click', wikiSearch);
$("input").keypress(function(event) {
	if(event.which === 13) {
		wikiSearch();
	};
});