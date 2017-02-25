$(document).ready(function(){

	$("#mail").keyup(function(){

		var email = $("#mail").val().search("@");
		
	if(email<0)
	{
		$("#e").text("error");
	}
	else{
		$("#e").text("");
	}

	});


	// name field


	
	$("#First, #Last").keyup(function(){

 var first = $("#First").val();
 var last = $("#Last").val();
		
 	 $("#full").val( first  +  last );



	});
 	
	// name field end
	// password checker

$(document).ready(function() {
  $("#password2").keyup(validate);
});


function validate() {
  var password1 = $("#password1").val();
  var password2 = $("#password2").val();

    
 
    if(password1 == password2) {
       $("#validate-status").text("valid");        
    }
    else {
        $("#validate-status").text("invalid");  
    }
    
}

	// password checker

// gander
	
	$(".omale").draggable({
		stack: ".omale",
		revert : "valid"
	});



	$(".chuu").droppable({
		accept :"#m",
		drop: function(){
			alert("SUCCESS !");
		}
	});


// gander




	
});
