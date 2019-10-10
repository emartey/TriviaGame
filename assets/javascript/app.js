// GLOBAL VARIABLES //

var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',
    // questions options and answers data
    questions: {
        q1: "What is Goku's Saiyan (original) name?",
        q2: 'On what planet did Goku first turn Super Saiyan?',
        q3: 'How many Dragon Balls need to be collected before wishes can be granted?',
        q4: 'What is the highest power level Super Sayian transformation in the series at this point in time?',
        q5: "What is Vegeta's Saiyan (original) name?",
        q6: "What was the name of Goku's Earth grandfather?",
        q7: "What was the name of the Saiyan home world?",
        q8: "Who killed Frieza first?",
        q9: "What is the name of the Namekian dragon?",
        q10: "What is the name of the Earth dragon?",
        q11: "Who was the last villian in the Dragon Ball Z series?",
        q12: "What move is the villian, Boo, finished off with?",
        q13: "What is Vegeta's daughter's name?",
        q14: "What is Goku's signature move?",
        q15: "Who trained Lord Beerus?"
    },
    options: {
        q1: ['Raditz', 'Legendary Super Saiyan', 'Gohan', 'Kakarot'],
        q2: ['Mars', 'Earth', 'Namek', 'Planet Vegeta'],
        q3: ['5', '6', '9', '7'],
        q4: ['Super Saiyan 3', 'Kaioken x100', 'Super Saiyan Blue', 'Ultra Instinct'],
        q5: ['Vidal', 'Vegeta', 'Raditz', 'Bardock'],
        q6: ['Gohan', 'Master Roshi', 'Lord Beerus', 'Piccolo'],
        q7: ['Saiyana', 'Namek', 'Earth', 'Planet Vegeta'],
        q8: ['Goku', 'Vegeta', 'Future Trunks', 'Krillin'],
        q9: ['Shenron', 'Piccolo', 'Namek', 'Porunga'],
        q10: ['Porunga', 'Earth', 'Shenron', 'Yamcha'],
        q11: ['Frieza', 'Majin Boo', 'Cell', 'Jiren'],
        q12: ['Kamehameha', 'Dragon Fist', 'Destructo Disk', 'Spirit Bomb'],
        q13: ['Bulma', 'Chi Chi', 'Pan', 'Bulla'],
        q14: ['Final Flash', 'Kamehameha', 'Spirit Bomb', 'Destructo Disc'],
        q15: ['Jiren', 'Piccolo', 'King Vegeta', 'Whis']
    },
    answers: {
        q1: 'Kakarot',
        q2: 'Namek',
        q3: '7',
        q4: 'Ultra Instinct',
        q5: 'Vegeta',
        q6: 'Gohan',
        q7: 'Planet Vegeta',
        q8: 'Future Trunks',
        q9: 'Porunga',
        q10: 'Shenron',
        q11: 'Majin Boo',
        q12: 'Spirit Bomb',
        q13: 'Bulla',
        q14: 'Kamehameha',
        q15: 'Whis'
    },
};


var messages = {
    correct: "Correct!",
    incorrect: "Incorrect!",
    endTime: "Time Is Up!",
    finished: "Game Over",
};



//===========================================================================================================================


// FUNCTIONS //
$(document).ready(function () {

    // event listeners
    $("#start").show();
    $("#remaining-time").hide();
    $("#start").on('click', startGame);
    $("#options").hide();
    $('#instructions').show();
    $('.game').hide()



});

var startGame = function () {
    // restarting game results
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);

    // show game section
    $('.game').show();

    // hide instructions
    $('#instructions').hide()

    //  empty last results
    $('#results').html('');

    // show timer
    $('#timer').text(trivia.timer);

    // remove start button
    $('#start').hide();

    $('#remaining-time').show();

    // ask first question
    nextQuestion();

};
// method to loop through and display questions and options 
var nextQuestion = function () {

    // set timer to 20 seconds each question


    $('#timer').text(trivia.timer);

    // to prevent timer speed up
    if (!trivia.timerOn) {
        trivia.timerId = setInterval(timerRunning, 1000);
    };

    // gets all the questions then indexes the current questions
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('.game').text(questionContent);

    // an array of all the user options for the current question
    var questionOptions = function () {
        Object.values(trivia.options)[trivia.currentSet];

        // creates all the trivia guess options in the html
        $.each(questionOptions, function (index, key) {
            $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
        })
    }
}
// Timer 
var timerRunning = function () {
    // if timer still has time left and there are still questions left to ask
    if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
        $('#timer').text(trivia.timer);
        trivia.timer--;
        if (trivia.timer === 4) {
            $('#timer').addClass('last-seconds');
        }
    }
    // the time has run out and increment unanswered, run result
    else if (trivia.timer === -1) {
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
    }
    // if all the questions have been shown end the game, show results
    else if (trivia.currentSet === Object.keys(trivia.questions).length) {

        // adds results of game (correct, incorrect, unanswered) to the page
        $('#results')
            .html('<h3>Thank you for playing!</h3>' +
                '<p>Correct: ' + trivia.correct + '</p>' +
                '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                '<p>Unaswered: ' + trivia.unanswered + '</p>' +
                '<p>Please play again!</p>');

        // hide game sction
        $('#game').hide();

        // show start button to begin a new game
        $('#start').show();
    }

};
// method to evaluate the option clicked
var guessChecker = function () {

    // timer ID for gameResult setTimeout
    var resultId;

    // the answer to the current question being asked
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

    // if the text of the option picked matches the answer of the current question, increment correct
    if ($(this).text() === currentAnswer) {
        // turn button green for correct
        $(this).addClass('btn-success').removeClass('btn-info');

        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
    }
    // else the user picked the wrong option, increment incorrect
    else {
        // turn button clicked red for incorrect
        $(this).addClass('btn-danger').removeClass('btn-info');

        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Better luck next time! ' + currentAnswer + '</h3>');
    }

}
// method to remove previous question results and options
var guessResult = function () {

    // increment to next question set
    trivia.currentSet++;

    // remove the options and results
    $('.option').remove();
    $('#results h3').remove();

    // begin next question
    trivia.nextQuestion();

}







//===========================================================================================================================

// START GAME //
startGame();