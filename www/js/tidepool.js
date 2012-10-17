(function ($) {
	$(document).ready(function () {	
							
			$.support.cors = true;
		    $.mobile.allowCrossDomainPages = true;			    
		    $.post("http://127.0.0.1:8080/tidepoolAPI/json/test.ajax", 
		    		{id:'ouch'}, 
		    		function(item) {		    			
		    			$("#test").html(item.id);
		    		}).error(function(jqXHR, textStatus, errorThrown) { 
		    				alert("error: " + jqXHR + " " + textStatus + " " + errorThrown); 
		    		}); 
		
		    
		    
		    
	});
})(jQuery);