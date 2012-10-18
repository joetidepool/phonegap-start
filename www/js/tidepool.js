var testImages = [];
var currentImage0 = 0;
var currentImage1 = 1;

(function ($) {
	$(document).ready(function () {	
										
		    $.support.cors = true;
		    $.mobile.allowCrossDomainPages = true;			    
		    $.post(servicesAPI + "/tidepoolAPI/json/test.ajax", 
		    		{id:'ouch'}, 
		    		function(item) {		    			
		    			$("#test").html(item.id);
		    		}).error(function(jqXHR, textStatus, errorThrown) { 
		    				alert("error: " + jqXHR + " " + textStatus + " " + errorThrown); 
		    		}); 
		
	
		    
		    
		    $('#assesment').click(function() {		    	
		    	$.post(servicesAPI + "/tidepoolAPI/json/items.ajax", 
			    		{sessionId:'1'}, 
			    		function(items) {		    						    			
			    			
			    			function updateImages() {
			    				
			    				$('#testImage0').attr('src', 'https://s3.amazonaws.com/' +  testImages[currentImage0].bucket_name + "/" + testImages[currentImage0].folder_name + "/" + testImages[currentImage0].picture_id);
				    			$('#testImage1').attr('src', 'https://s3.amazonaws.com/' +  testImages[currentImage1].bucket_name + "/" + testImages[currentImage1].folder_name + "/" + testImages[currentImage1].picture_id);
			    			}
			    			
			    			var i = 0;
			    			$.each(items, function(index, value) {
			    				testImages[i] = value;
			    				i++;
			    			});
			    			
			    			updateImages();
			    			
			    			$('#testImage0Link').click(function() {
			    				
			    				//TODO: Log event
			    				
			    				if (currentImage0 == testImages.length - 1) {
			    					return true;
			    				}
			    				
			    				currentImage0 = currentImage1 + 1;
			    				currentImage1 = currentImage0 + 1;
			    				updateImages();
			    				
			    				return false;
			    				
			    			});
			    			
			    			$('#testImage1Link').click(function() {
			    				
			    				if (currentImage0 == testImages.length - 1) {
			    					return true;
			    				}
			    				
			    				currentImage0 = currentImage1 + 1;
			    				currentImage1 = currentImage0 + 1;
			    				updateImages();
			    				
			    				return false;
			    			});
			    						    			
			    		}).error(function(jqXHR, textStatus, errorThrown) { 
			    				alert("error: " + jqXHR + " " + textStatus + " " + errorThrown); 
			    		}); 
		    	
		    	
		    });
		    
	});
	
	
	
})(jQuery);


