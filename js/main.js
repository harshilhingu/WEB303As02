// WEB303 Assignment 2


$(document).ready(function(){
	$("#prospect").click(function () {  
		removeDiv();         
        ajaxCall("prospect.html"); 
    });
	$("#convert").click(function () {  
		removeDiv();          
        ajaxCall("convert.html");
         
    });
    $("#retain").click(function () { 
    	removeDiv();              
        ajaxCall("retain.html"); 
    });

    function ajaxCall(filename) {
    	$.ajax({
        	cache:false,
        	url: filename,
        	dataType: "html",
        	success: function(result) {
        		$("#content").empty();
        		$("#content").delay(2000).animate( { "opacity": "show"} , 2000 , "linear");
        		$('#content').append(result);
            },
        	error: function() {
                alert("There is something wrong.Please try again.")   
            }
        });
    }

    function removeDiv() {
    	$("#content").animate( { "opacity": "hide"} , 100 , "linear");
    }

})
