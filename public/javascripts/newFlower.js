// validate that fields hold data before allowing submission
// need validation & then call them at submit.

$(document).ready(function(){

	$("#saveNewFlower").click(function(){
		// check that we have data
		var haveName = IsPresent($("#newFlowerName").val());
		var haveColor = IsPresent($("#newFlowerColor").val());
		// alert(haveName + ", " + haveColor);
		// if there is at least a flower name and flower color, submit the form.  otherwise:
		if (!(haveName && haveColor)) 
		{
			alert("You must have at least a name and a color for your flower.");
			return false;
		}

	});

})

function IsPresent(input){
	// let's trim our input so we don't load up with leading/trailing space
	// and also don't allow entries that are only spaces
	input = jQuery.trim(input);
	//alert("*" + input + "*");
	if (input != undefined && input != "") return true;
	else return false;
}