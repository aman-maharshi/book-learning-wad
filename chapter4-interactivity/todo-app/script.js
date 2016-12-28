/* Upto page 140*/
var main = function() {
	"use strict";

    var toDoImportant = [
  	"Study TOC for 30 min",
    "Commit code to GitHub",
    "Complete the Interactivity chapter"
  ];
  var toDoUrgent = [
  	"Write the Q4 Deliverables",
    "Complete the BGV form and Uploads the necessary docs",
  ];


  $(".tabs a span").toArray().forEach(function(element){
  	$(element).on("click", function(){
    	// adding css functionality to tabs
    	$(".tabs a span").removeClass("active");
    	$(element).addClass("active");
      $("main .content").empty();

      // loading contents for the first two tabs from their respective arrays
      if($(element).parent().is(":nth-child(1)")) {
  			toDoImportant.forEach(function(todo){
    			$(".content").append($("<li>").text(todo));
    		})
  		}
      if($(element).parent().is(":nth-child(2)")) {
  			toDoUrgent.forEach(function(todo){
    			$(".content").append($("<li>").text(todo));
    		})
  		}

      // adding contents of the add tab
      if($(element).parent().is(":nth-child(3)")) {
  			$(".content").append($('<div class="comment-input"><input type="text" placeholder="To Do"><br><button class="important"><span>Important</span></button><button class="urgent"><span>Urgent</span></button></div>'));
        $(".comment-input button.important").on("click", function(event) {
    			var $new_task = $("<li>").text($(".comment-input input").val());
          var new_task_string = $new_task.text();
          toDoImportant.push(new_task_string);
       		$(".tabs a:nth-child(1) span").trigger("click");
          //$(".content").append($new_task);
  			});
        $(".comment-input button.urgent").on("click", function(event) {
    			var $new_task = $("<li>").text($(".comment-input input").val());
          var new_task_string = $new_task.text();
          toDoUrgent.push(new_task_string);
       		$(".tabs a:nth-child(2) span").trigger("click");
          //$(".content").append($new_task);
  			});
  		}
      return false;
    })
  })
  //triggering a fake click to show the toDoImportant contents even if nothing is clicked by the user at first - when the page loads for the first time
  $(".tabs a:first-child span").trigger("click");
}
$(document).ready(main);
