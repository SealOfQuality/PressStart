
		var priority = 5;
		var character = false;
		var reset = 0;
		var check = $(this);
		var check2 = $(this);
		var details = $(this);
		var names = ["Kofi", "Jmaine", "Erica", "Jackmove", "Alex", "Guest"];
		var descriptions = [".one", ".two", ".three", ".four", ".five", ".six"];
		
		var nameValue = 100;
		
	
		function shiftBack(){
			$("#kofi").css("left", "5%");
			$("#jmain").css("left", "20%");
			$("#erica").css("left", "35%");
			$("#jackmove").css("left", "50%");
			$("#alex").css("left", "65%");
			$("#guest").css("left", "80%");
		}
		
		function value(){
		
			if(check2.attr("id") == "kofi"){
				nameValue = 0;
				}
			if(check2.attr("id") == "jmain"){
				nameValue = 1;
				}
			if(check2.attr("id") == "erica"){
				nameValue = 2;
				}
			if(check2.attr("id") == "jackmove"){
				nameValue = 3;
				}
			if(check2.attr("id") == "alex"){
				nameValue = 4;
				}
			if(check2.attr("id") == "guest"){
				nameValue = 5;
				}
				details = $(descriptions[nameValue]);
			$(".bio").html(names[nameValue]);;
		}

		$(".clone").hover(function(){
			$(this).css("z-index", priority);
			priority = priority + 5;
		}
		)
		
		$(".clone").hover(function(){
			$(".clone").css("background-color", "transparent");
			$(".clone").css("border-style", "none");
		}
		)

		$("#kofi").hover(function(){
			$("#kofi").css("background-color", "red");	
			$("#kofi").css("border-style", "inset");	
		}
		)
		
		$("#jmain").hover(function(){
			$("#jmain").css("background-color", "yellow");
			$("#jmain").css("border-style", "inset");
		}
		)
		
		$("#erica").hover(function(){
			$("#erica").css("background-color", "purple");
			$("#erica").css("border-style", "inset");

		}
		)
		
		$("#jackmove").hover(function(){
			$("#jackmove").css("background-color", "blue");
			$("#jackmove").css("border-style", "inset");
		}
		)
		
		$("#alex").hover(function(){
			$("#alex").css("background-color", "green");
			$("#alex").css("border-style", "inset");
		}
		)
		
		$("#guest").hover(function(){
			$("#guest").css("border-style", "inset");
		}
		)
	
	
		$(".clone").click(function(){
		check = $(this);
		check2 = check;
		value();
		
		reset = check.position().left;

			$(".clone").fadeOut("slow", function(){
				check.css("left", "45%");
				$(".backButton").css("display", "block");
				check.fadeIn(function(){
				check.animate({left:"10%"}, 1000 );
				$(".bio").fadeIn(2000, "swing");
				details.fadeIn(1500, "swing");
				check = $("backButton");
				});
			});

		}
		)
		
		$(".backButton").click(function(){
			$(".bio").fadeOut();
			details.fadeOut();
			$(".backButton").css("display", "none");
			check2.fadeOut(function(){
			shiftBack();
			$(".clone").fadeIn();
			});

		})
	