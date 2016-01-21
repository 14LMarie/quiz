$(document).ready(function () {

    var questions = [
    //question 1
        {
            question: 'What NFL football team calls Charlotte home?',
            choices: ['Panthers', 'Seahawks', 'Steelers', 'Packers'],
            correct: 0
   },
    //question 2
        {
            question: 'What NBA team resides in Charlotte?',
            choices: ['Bulls', 'Hornets', 'Cavaliers', 'Heat'],
            correct: 1
    },


    //question 3
        {
            question: 'Charlotte was named after which British Queen?',
            choices: ['Charlotte Diane', 'Charlotte Octavia', 'Charlotte Elizabeth', 'Charlotte Sophia'],
            correct: 3
    },

    //question 4
        {
            question: 'Which mega church was started in Charlotte?',
            choices: ['Elevation', 'Jesus Church', 'United', 'Life Church'],
            correct: 0
    },

    //question 5
        {
            question: 'Charlotte is know for major contributions to which industry?',
            choices: ['Information Technology', 'Textile', 'Finance', 'Marketing'],
            correct: 2
    },
                    //question 6
        {
            question: 'Which amusement park is in Charlotte?',
            choices: ['Carowinds', 'Six Flags', 'Hershey Park', 'Animal Kingdom'],
            correct: 0
    },

                    //question 7
        {
            question: 'The most fabulous art district of Charlotte is?',
            choices: ['Noda', 'Plaza Midwood', 'Southend', 'University'],
            correct: 1
    },

                    //question 8
        {
            question: 'Which city is the largest in North Carolina?',
            choices: ['Raleigh', 'Charlotte', 'Charleston', 'Myrtle Beach'],
            correct: 1
    }

                    ];

    //Variables
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;

    //Hide quiz and result section
    $('.questions').hide();
    $('.results').hide();

    //Start Quiz
    $('#start-button').click(function () {
        $('.results').hide();
        $('.introduction').hide();
        $('.questions').show();
        questionDisplay();
    });

    $('.questions').on('click', '#submit-button', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {
            correctTotal++;
        }


        if ((questionNum + 1) == questionTotal) {
            $('.results').show();
            $('.final-score').text(correctTotal + " out of " + questionTotal);
            $('.questions').hide();
            $('.introduction').hide();
        } else {
            questionNum++;
            questionDisplay();
        }

        if (correctTotal <= 4) {
            $('.score-feedback').text('Try again, Google is your friend.');
        } else if (correctTotal === 8) {
            $('.score-feedback').text('Perfect! Charlotte is awesome!');
        } else {
            $('.score-feedback').text('Well Done!');
        }

    });

    //Load start section from result section
    $('.results').on('click', '#start-again-button', function () {
        $('.questions').hide();
        $('.results').hide();
        $('.introduction').show();
        //reset variables to start quiz again
        questionNum = 0;
        correctTotal = 0;
    });


    //Display Questions
    function questionDisplay() {
        $('.question-count').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('.question-content').text(questions[questionNum].question);
        $('.answer-options').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            $('.answer-options').append("<input type='radio' class='option' name='option' value=" + i + ">" + " " + questions[questionNum].choices[i] + "<br>");
        }
    }


});
