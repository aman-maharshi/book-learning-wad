var main = function () {
	"use strict";
	var url = "https://learnwebcode.github.io/json-example/animals-1.json";
	var url1 = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
	$.getJSON(url1 , function(temp){
		//console.log(temp);
		temp.items.forEach(function(photo){
			//console.log(photo.media.m);
			//creating a new jquery element to hold the image
			var $img = $("<img>");
			$img.attr("src", photo.media.m);
			$("main .photos").append($img);
		})
	})
}
$(document).ready(main);
