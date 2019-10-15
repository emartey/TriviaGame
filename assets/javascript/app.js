var everythingSet = {
    questions: [
        {
            question: "What is Goku's Saiyan (original) name?",
            correct: "Kakarot",
            answer1: "Legendary Super Saiyan",
            answer2: "Gohan",
            answer3: "Kakarot",
            answer4: "Raditz"
        },
        {
            question: "How many Dragon Balls need to be collected before wishes can be granted?",
            correct: "7",
            answer1: "7",
            answer2: "6",
            answer3: "9",
            answer4: "3"
        },
        {
            question: "On what planet did Goku first turn Super Saiyan?",
            correct: "Namek",
            answer1: "Mars",
            answer2: "Earth",
            answer3: "Planet Vegeta",
            answer4: "Namek"
        },
        {
            question: "What is the highest power level Super Sayian transformation in the series at this point in time?",
            correct: "Ultra Instinct",
            answer1: "Super Saiyan 3",
            answer2: "Kaioken x100",
            answer3: "Super Saiyan God",
            answer4: "Ultra Instinct"
        },
        {
            question: "What is Vegeta's Saiyan (original) name?",
            correct: "Vegeta",
            answer1: "Vidal",
            answer2: "Vegeta",
            answer3: "Bardock",
            answer4: "Raditz"
        },
        {
            question: "What was the name of Goku's Earth grandfather?",
            correct: "Gohan",
            answer1: "Gohan",
            answer2: "Goku",
            answer3: "Son",
            answer4: "Goten"
        },
        {
            question: "What was the name of the Saiyan home world?",
            correct: "Planet Vegeta",
            answer1: "Saiyana",
            answer2: "Namek",
            answer3: "Planet Vegeta",
            answer4: "Earth"
        },

        {
            question: "Who killed Frieza first?",
            correct: "Future Trunks",
            answer1: "Goku",
            answer2: "Vegeta",
            answer3: "Krillin",
            answer4: "Future Trunks"
        },

        {
            question: "What is the name of the Namekian dragon?",
            correct: "Porunga",
            answer1: "Porunga",
            answer2: "Shenron",
            answer3: "Piccolo",
            answer4: "Mr. Po Po"
        },

        {
            question: "What is the name of the Earth dragon?",
            correct: "Shenron",
            answer1: "Porunga",
            answer2: "Shenron",
            answer3: "Piccolo",
            answer4: "Mr. Po Po"
        },

        {
            question: "Who was the last villian in the Dragon Ball Z series?",
            correct: "Majin Boo",
            answer1: "Frieza",
            answer2: "Cell",
            answer3: "Jiren",
            answer4: "Majin Boo"
        },



        {
            question: "Who was the first person to turn Super Saiyan 2 in Dragon Ball Z?",
            correct: "Gohan",
            answer1: "Goku",
            answer2: "Gohan",
            answer3: "Vegeta",
            answer4: "Yamcha"
        },

        {
            question: "What is Vegeta's daughter's name?",
            correct: "Bulla",
            answer1: "Bulma",
            answer2: "Chi Chi",
            answer3: "Bulla",
            answer4: "Pan"
        },

        {
            question: "What is Goku's signature move?",
            correct: "Kamehameha",
            answer1: "Spirit Bomb",
            answer2: "Destructo Disc",
            answer3: "Final Flash",
            answer4: "Kamehameha"
        },

        {
            question: "Who taught Goku the Kamehameha?",
            correct: "Master Roshi",
            answer1: "King Kai",
            answer2: "Lord Beerus",
            answer3: "Master Roshi",
            answer4: "King Vegeta"
        }
    ],

    gameQuestions: [],

    correct: 0,
    incorrect: 0,
    unanswered: 0,
    remaining: 0,
    correctAnswer: "",
    secondsLeft: 5,
    timer: "",


    startGame: function () {

        $("#start").hide();
        $("#instructions").hide();

        //Sets questions array to this variable and makes readable
        this.gameQuestions = this.questions.concat();

        //Get first question
        this.getQuestion();
        $("#question").show();
        $("#remaining-time").show();

    },

    playAgain: function () {

        this.reset();
        this.startGame();
    },


    reset: function () {
        this.correct = 0;
        this.incorrect = 0;
        this.unanswered = 0;
        $("#results").hide();
        $("#play-again").hide();

    },

    getQuestion: function () {

        //Sets remaining questions variable to length of gameQuestions array
        this.remaining = this.gameQuestions.length;

        //If there are still questions left in round

        if (this.remaining > 10) {

            //Resets seconds left for question
            this.secondsLeft = 7;
            $("#remaining-time").text(this.secondsLeft);

            //Sets the timer interval
            this.timer = setInterval(function () {
                everythingSet.secondsLeft--;
                //Updates timer 
                $("#remaining-time").text(everythingSet.secondsLeft);
                //Checks if player has run out of time
                if (everythingSet.secondsLeft === 0) {
                    everythingSet.unanswered++;
                    everythingSet.incorrect--;
                    //Goes to next question
                    everythingSet.checkAnswer();
                }
            }, 1000);

            //Gets random number for question index
            var random = Math.floor(Math.random() * this.gameQuestions.length);

            //sets variable as question object
            var currentQuestion = this.gameQuestions[random];

            //sets correct answer variable to the correct answer 
            this.correctAnswer = currentQuestion.correct;

            //Reset user answer in Html
            $("#user-answer").empty();


            $("#question").append("<h4>" + currentQuestion.question + "</h4>");
            $("#question").append("<button class='btn btn-info btn-lg' data-answer='" + currentQuestion.answer1 + "'> " + currentQuestion.answer1 + "</button>");
            $("#question").append("<button class='btn btn-info btn-lg' data-answer='" + currentQuestion.answer2 + "'> " + currentQuestion.answer2 + "</button>");
            $("#question").append("<button class='btn btn-info btn-lg' data-answer='" + currentQuestion.answer3 + "'> " + currentQuestion.answer3 + "</button>");
            $("#question").append("<button class='btn btn-info btn-lg' data-answer='" + currentQuestion.answer4 + "'> " + currentQuestion.answer4 + "</button>");
            $(".btn").css('margin', '3%');

            //Keeps current question from being rerun
            this.gameQuestions.splice(random, 1);

        } else {
            //show game results
            this.gameResults();

        }

    },

    checkAnswer: function (answer) {

        //answered correctly
        if (answer === this.correctAnswer) {
            this.correct++;
            $("#question").empty();
            $("#user-answer").html("<p class='text-center'>Correct!</p>");
            $("#user-answer").css('color', 'green');
        }
        //answered incorrectly
        else {
            this.incorrect++;
            $("#question").empty();
            $("#user-answer").html("<p class='text-center'>Wrong Answer!</p>");
            $("#user-answer").css('color', 'red');
        }


        //next question
        setTimeout(function () {
            everythingSet.getQuestion();
        }, 3000)
        console.log(this.checkAnswer)

        //Clears timer interval
        clearInterval(this.timer);
    },

    gameResults: function () {
        clearInterval(this.timer);
        $("#question").hide();
        $("#remaining-time").hide();
        $("#correct").text("CORRECT ANSWERS: " + this.correct);
        $("#incorrect").text("WRONG ANSWERS: " + this.incorrect);
        $("#unanswered").text("UNANSWERED: " + this.unanswered);
        //Reset Question Result Html
        $("#user-answer").empty();
        $("#results").show();
        $("#play-again").show();
    }
}

//Event Listeners
$("#start").on("click", function () {

    everythingSet.startGame();
});

$("#play-again").on("click", function () {

    everythingSet.playAgain();
})

$("#question").on("click", ".btn", function () {

    everythingSet.checkAnswer($(this).attr("data-answer"));
})
















