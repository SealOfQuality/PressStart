
	var total = 0;
	
	$( ".whole" ).css("display","none");
	$( ".whole" ).css("display","block");
	$( ".product" ).css("width","75%");
	$( ".product" ).css("margin-left","10%");

	$( "#allSelect" ).click(function() {
			
		$( ".whole" ).css("display","block");
	});
	
		$( "#shirtSelect" ).click(function() {
			
			$( ".whole" ).css("display","none");
			
			$( ".shirt" ).css("display","block");
		});
		
		$( "#glassesSelect" ).click(function() {
			
			$( ".whole" ).css("display","none");
			
			$( ".glasses" ).css("display","block");
		});
		
		$( "#extraSelect" ).click(function() {
			
			$( ".whole" ).css("display","none");
			
			$( ".extra" ).css("display","block");
		});
		
		$( "#foodSelect" ).click(function() {
			
			$( ".whole" ).css("display","none");
			
			$( ".food" ).css("display","block");
		});
	
	
	$( ".item > .dropbtn" ).click(function() {
		total = total + parseInt($(this).val());
		alert("$" + $(this).val());
	})
	
	$( ".item > .cartbtn" ).click(function() {
		total = total + parseInt($(this).val());
		alert("$" + total);
	})