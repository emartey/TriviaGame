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
}



//===========================================================================================================================


// FUNCTIONS //







//===========================================================================================================================

// START GAME //
