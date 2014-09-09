$(document).ready(function() {


/* click on start game button to display question 1 with submit button */
$('.startGame').on('click', "button", function() {
	$('.startGame').hide();
	$(this).closest('.container').find('.question1').show();
	$(this).closest('.container').find('.submit').show();


})


$('.questionGeneral').on('click', '.submit', function() {
	if($('input:radio:checked').length > 0){
		// go on with script
 	}
 	else{
    	alert("Please select an answer.");
 	}

})








})