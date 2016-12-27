var main = function() {
	"use strict";

  	var addCommentFromInputBox = function () {
    	if($(".comment-input input").val() !== "") {
  			var $new_comment = $("<p>").text($(".comment-input input").val());
        //for fadeIn to work we've to hide the element first
        $new_comment.hide();
    		$(".comments").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val("");
      }
    };
  	$(".comment-input button").on("click", function(event) {
    	addCommentFromInputBox();
  	});
    $(".comment-input input").on("keypress", function(event) {
    	if (event.keyCode === 13) {
      	addCommentFromInputBox();
      }
    });
    // clear button functionality
    $(".clear-button").on("click", function(event) {
    	$(".comments").find("*").not(".first-p").remove();
    })

};
$(document).ready(main);
