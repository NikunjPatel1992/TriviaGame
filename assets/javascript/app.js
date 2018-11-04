
$(document).ready(function () {

    //==============array of question =======
    var myQuestions = [
        {
            question: "What is 20+11?",
            answers: [3, 5, 25, 31],
            correctAnswer: '31',
            name: "first"
        },
        {
            question: "What is 24-7 ?",
            answers: [17, 15, 18, 31],
            correctAnswer: '17',
            name: "second"
        },
        {
            question: "What is 10/2?",
            answers: [3, 5, 115, 114],
            correctAnswer: '5',
            name: "third"
        },
        {
            question: "What is 30/3?",
            answers: [3, 55, 10, 15],
            correctAnswer: '10',
            name: "forth"
        },
        {
            question: "What is 25*3?",
            answers: [85, 55, 75, 65],
            correctAnswer: '75',
            name: "fifth"
        }
    ];

    var labels = ["first", "second", "third", "forth", "fifth"];

    //================ create variable======== 
    var timeLeft = 60;
    var timerId;

    var correctAnswers = 0;
    var wrongAnswers = 0;
    // var unAnswered = 0;

    $("#questionbox").hide();
    $("#submit").hide();
    
    //start button click
    $("#startbtn").on("click", function () {

        $("#screen").hide();
        // $("#questionbox").show();
        $(".timmer").html("Time Remaining : "+timeLeft)
        timeLeft--;
        timerId = setInterval(countdown, 1000);
        questiondesplay();

    });

    //===================Timmer=================   
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            doSomething();
        } else {
            $(".timmer").html("Time Remaining : "+timeLeft)
            timeLeft--;
        }
    }

    //==================== timmer end===============

    //================== question deaplay============

    function questiondesplay() {
        $("#questionbox").show();
        $("#submit").show();
        for (var i = 0; i < myQuestions.length; i++) {
            console.log(myQuestions[i].question);
            console.log("Your correct number" + myQuestions[i].correctAnswer);

            $(".question").append(myQuestions[i].question);
            $(".question").append('<hr /> ');
            for (var j = 0; j < 4; j++) {
                console.log(myQuestions[i].answers[j]);
                $(".question").append('<input type="radio" style="margin-left: 20px;" name="' + myQuestions[i].name + '" " value="' + myQuestions[i].answers[j] + '"/><label for="' + labels[i] + '">' + myQuestions[i].answers[j] + '</label>');
            }
            $(".question").append('<hr /> ');
        }
    }

    //==================submit button=======================

    $("#submit").on("click", function () {
        // alert("Button click")
        gradequize();
        // console.log("correct" + correctAnswers);
        // console.log("wrong " + wrongAnswers);
        // console.log("Not Attend " + unAnswered);

        //====question box hide=====
        $('.questionbox').hide();
        //=== Answer box show ====
        $('#answerScreen').show();
         //=== add correct answer ====
         $('#correct').append(correctAnswers);
         // === add wrong answer ======
         $('#wrong').append(wrongAnswers);
    });

    //===================game Result ================
    function gradequize() {
        for (var i = 0; i < myQuestions.length; i++) {
            if ($('input:radio[name="' + myQuestions[i].name + '"]:checked').val() === myQuestions[i].correctAnswer) {
                correctAnswers++;
                //console.log("Correct Answer " + correctAnswers);
            } else if ($('input:radio[name="' + myQuestions[i].name + '"]:checked').val() != myQuestions[i].correctAnswer) {
                wrongAnswers++;
                //console.log("Wrong Answer " + wrongAnswers);
            }
            // else if ($('input:radio[name="' + myQuestions[i].name + '"]:unchecked').val()){
            //       unAnswered++;
            // };
            
        }
    }

    //=================Time Up==========================
    function doSomething() {
        //alert("Hi");
        gradequize();
        console.log("correct " + correctAnswers);
        console.log("wrong " + wrongAnswers);
        //====question box hide=====
        $('.questionbox').hide();
        //=== Times up box show ====
        $('#timesup').show();
        //=== add correct answer ====
        $('#correcttimesup').append(correctAnswers);
        // === add wrong answer ======
        $('#wrongtimesup').append(wrongAnswers);
        //console.log("Not Attend " + unAnswered);
    }
});