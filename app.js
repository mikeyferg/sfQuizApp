var questionSet = [
	question1 = {
		question : 'What is the name of the famous bridge in San Francisco part?',
		answer1 : 'sdfsdf',
		answer2 : 'sdfds',
		answer3 : 'Golden Gate Bridge',
		answer4 : 'sdfsdf',
		answer5 : 'sfsd'
	},
	question2 = {
		question : 'What is the name of curviest street in the world?',
		answer1 : "sdfsdf",
		answer2 : "Lombard St.",
		answer3 : 'sdfsdfsd',
		answer4 : 'sdfsdf',
		answer5 : 'sfsd'
	},
	question3 = {
		question: 'What corner did the Greatful Dead make famous?',
		answer1 : "Haight & Ashbury",
		answer2 : "sdfds",
		answer3 : 'sdfsdfsd',
		answer4 : 'sdfsdf',
		answer5 : 'sfsd'
	},
	question4 = {
		question: 'What is the tallest building in SF?',
		answer1 : "sdfsdf",
		answer2 : "sdfds",
		answer3 : 'sdfsdfsd',
		answer4 : 'sdfsdf',
		answer5 : 'Transamerica Building'
	},
	question5 = {
		question: 'What famous US prison is located on an island?',
		answer1 : "Alcatraz",
		answer2 : "sdfds",
		answer3 : 'sdfsdfsd',
		answer4 : 'sdfsdf',
		answer5 : 'sfsd'
	}

] 

var correctAnswers = ['Golden Gate Bridge', "Lombard St.", "Haight & Ashbury", "Transamerica Building", "Alcatraz"];

var userScore = 0;

var questionNumber = 0;

var questionNumberDisplay = 1;

$(document).ready(function() {


/* Click funtionality for startNewGame button on endGame screen */
$('.endGame').on('click', 'button', function() {
	
	/* resetting all variables to zero */
	userScore = 0;

	questionNumber = 0;

	questionNumberDisplay = 1;

	/* hiding all unnecessary elements */
	$('.endGame').hide();

	/* display correct for user */
	$(this).closest('.container').find('.correct').hide();
	$(this).closest('.container').find('.incorrect').hide();

	/*display next button */
	$(this).closest('.container').find('.next').hide();

	/* clear check boxes */
	$("input:checked").removeAttr("checked");

	/* displaying questions and answers for number one */
	/* display template for question */
	$(this).closest('.container').find('.questionGeneral').show();
	/* question 1 questions and answers */
	$(this).closest('.container').find('.questionGeneral').find('.question').text(questionSet[questionNumber].question);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer1]').text(questionSet[questionNumber].answer1);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer2]').text(questionSet[questionNumber].answer2);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer3]').text(questionSet[questionNumber].answer3);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer4]').text(questionSet[questionNumber].answer4);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer5]').text(questionSet[questionNumber].answer5);
	
	/* Display submit button */
	$(this).closest('.container').find('.submit').show();

	/* add question number to questionNumber text */
	$(this).closest('.container').find('.questionGeneral').find('.questionNumber').text("Question number " + questionNumberDisplay + '/5');

})
			

/* click on start game button to display question 1 with submit button */
$('.startGame').on('click', "button", function() {
	/* hide intro screen */
	$('.startGame').hide();
	/* display template for question */
	$(this).closest('.container').find('.questionGeneral').show();
	/* question 1 questions and answers */
	$(this).closest('.container').find('.questionGeneral').find('.question').text(questionSet[questionNumber].question);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer1]').text(questionSet[questionNumber].answer1);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer2]').text(questionSet[questionNumber].answer2);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer3]').text(questionSet[questionNumber].answer3);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer4]').text(questionSet[questionNumber].answer4);
	$(this).closest('.container').find('.questionGeneral').find('label[for=answer5]').text(questionSet[questionNumber].answer5);
	/* Display submit button */
	$(this).closest('.container').find('.submit').show();


	/* add question number to questionNumber text */
	$(this).closest('.container').find('.questionGeneral').find('.questionNumber').text("Question number " + questionNumberDisplay + '/5');


})


$('.questionGeneral').on('click', '.submit', function() {
	if($('input[name="question"]:checked').length > 0){
		
	


		/* hide the submit button */
		$(this).hide();

		console.log(questionNumber)
		/* if the user submits the correct answer */
		if($('input[type="radio"]:checked').next('label').text() == correctAnswers[questionNumber]) {
			/* increment user score for correct answer */
			userScore++;

			/* display correct for user */
			$(this).closest('.questionGeneral').find('.correct').show();

			/*display next button */
			$(this).closest('.questionGeneral').find('.next').show();

			/* increment questionNumber to 1 */
			questionNumber ++;

			console.log('correct');
			console.log(userScore);
		}
		else {

			/* display incorrect for user */
			$(this).closest('.questionGeneral').find('.incorrect').show();

			/*display next button */
			$(this).closest('.questionGeneral').find('.next').show();

			/* increment questionNumber to 1 */
			questionNumber ++;

			console.log("wrong!")
		}
 	}

 	else{
    	alert("Please select an answer.");
 	}
 



}) 


$('.next').on('click', 'button', function() {
	if(questionNumber < questionSet.length) {
		console.log('keep going')


		
		/* question 1 questions and answers */
		$(this).closest('.container').find('.questionGeneral').find('.question').text(questionSet[questionNumber].question);
		$(this).closest('.container').find('.questionGeneral').find('label[for=answer1]').text(questionSet[questionNumber].answer1);
		$(this).closest('.container').find('.questionGeneral').find('label[for=answer2]').text(questionSet[questionNumber].answer2);
		$(this).closest('.container').find('.questionGeneral').find('label[for=answer3]').text(questionSet[questionNumber].answer3);
		$(this).closest('.container').find('.questionGeneral').find('label[for=answer4]').text(questionSet[questionNumber].answer4);
		$(this).closest('.container').find('.questionGeneral').find('label[for=answer5]').text(questionSet[questionNumber].answer5);
		
		
		/* hide next button */
		$(this).closest('h2').hide();



		/* hide correct and incorrect buttons */
		$(this).closest('.bottom').find('.correct').hide();
		$(this).closest('.bottom').find('.incorrect').hide();

		/* Display submit button */
		$(this).closest('.container').find('.submit').show();

		/* increment question number*
		questionNumber++; */
		questionNumberDisplay ++;

		console.log(questionNumberDisplay)

		/* clear check boxes */
		$("input:checked").removeAttr("checked");
		/* add question number to questionNumber text */
	$(this).closest('.container').find('.questionGeneral').find('.questionNumber').text(questionNumberDisplay + '/5');
	}

	else {
		console.log('show final score')

		/* hide question section */
		$(this).closest('.questionGeneral').hide();

		$(this).closest('.container').find('.endGame').find('.main').find('h2').text("You score " + userScore + " out of 5!");

		if(userScore == 5) {
			$(this).closest('.container').find('.endGame').find('.top').find('h2').text("You are a local!");
		}
		else if (3 < userScore && userScore < 5 ) {
			$(this).closest('.container').find('.endGame').find('.top').find('h2').text("Are you a transplant?");
		}

		else {
			$(this).closest('.container').find('.endGame').find('.top').find('h2').text("Keep practicing buddy.");
		}

		/* display endGame section */
		$(this).closest('.container').find('.endGame').show();



	}

	

})





})