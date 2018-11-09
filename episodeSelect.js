
	var numbers = 0;

	$("#set1").click(function(){
		numbers = 1;
		sets();
	})
	
	$("#set2").click(function(){
		numbers = 11;
		sets();
	})
	
	$("#set3").click(function(){
		numbers = 21;
		sets();
	})
	
	$("#set4").click(function(){
		numbers = 31;
		sets();
	})
	
	$("#set5").click(function(){
		numbers = 41;
		sets();
	})
	
	$("#set6").click(function(){
		numbers = 51;
		sets();
	})
	
	$("#set7").click(function(){
		numbers = 61;
		sets();
	})
	
	$("#set8").click(function(){
		numbers = 71;
		sets();
	})
	
	function sets(){
	 $("#1").html(numbers);
		numbers++;
	 $("#2").html(numbers);
		numbers++;
	 $("#3").html(numbers);
		numbers++;
	 $("#4").html(numbers);
		numbers++;
	 $("#5").html(numbers);
		numbers++;
	 $("#6").html(numbers);
		numbers++;
	 $("#7").html(numbers);
		numbers++;
	 $("#8").html(numbers);
		numbers++;
	 $("#9").html(numbers);
		numbers++;
	 $("#10").html(numbers);
		numbers++;
	}
	