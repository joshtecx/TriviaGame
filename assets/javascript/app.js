// This code will run as soon as the page loads
// window.onload = function() {
    
//     $("#answers1").on("click", selectAnswer);

// };

$(document).ready(function(){
    $("#start").on("click", gameStart);
    // Global Variables
    // ===============================================================================

    // Multiple choice quiz 
    // questions and answers...
    var questionAnswer = {
        question1: "Who created the Simpsons?",
        options1: ["Matt Groening ", "Mike Judge ", "Trey Parker ", "Matt Stone "],
        answer1: "Matt Groening ",
        question2: "Who is Homer's boss?",
        options2: ["Lenny Leonard ", "Carl Carlson ", "Waylon Smithers ", "Montgomery Burns "],
        answer2: "Montgomery Burns "
    };

    var correct = 0;
    var incorrect = 0;
    var countdown= 60;
    var intervalId;
    var clockRunning = false;
    var selection;
   
    // ===============================================================================
    // Functions
    // ===============================================================================



    // the beginning screen
    function beginning(){
        $("#clock").hide();
        $("#questionDisplay").hide();
    }

    // REMEMBER TO UNCOMMENT THIS WHEN YOU'RE DONE WITH THE REST OF THE GAME!!!
    // beginning();


    // Displpays questions and answers
    function displayQuestion(){
        $("#question1").append(questionAnswer.question1);
        $("#question2").append(questionAnswer.question2);

    }

    displayQuestion();

    // I know, I know DRY....please just bear with me while I figure this out
    // I just want to get it to work before I clean it up
    function displayAnswers(){
        for (var i = 0; i < questionAnswer.options1.length; i++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options");
            answerBtn.attr("data-options",questionAnswer.options1[i]);
            answerBtn.text(questionAnswer.options1[i]);
            $("#answers1").append(answerBtn)
        }

        for (var j = 0; j < questionAnswer.options2.length; j++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options");
            answerBtn.attr("data-options",questionAnswer.options2[j]);
            answerBtn.text(questionAnswer.options2[j]);
            $("#answers2").append(answerBtn)
        }
    }

    displayAnswers();

    // gathers user selection and determines if that is correct or incorrect
    $(".options").click(function() {
        console.log(this);
        selection = $(this).attr("data-options");
        
        if (selection === questionAnswer.answer1 || selection === questionAnswer.answer2){
            correct++;
            console.log("WOOOOHOOO!");
        } else {
            incorrect++;
            console.log("D'OH!");
        }
    });

   
    // Player cannot choose more than one answer

    // Game starts when player clicks start
    function gameStart() {
        console.log('start');
        $("#start").hide();
        $("#clock").show();
        $("#questionDisplay").show();
        intervalId = setInterval(timer, 1000);
    }

    // Game ends when player runs out of time
    function gameOver(){
        console.log("stopping");
        $("#clock").hide();
        $("#questionDisplay").hide();
        clearInterval(intervalId);
        // Page reveals the number of questions answered correctly or incorrectly 
        $("#correct").text("You got " + correct + " correct!");
        $("#incorrect").text("You got " + incorrect + " incorrect!");
    }

    // ===============================================================================
    // Timer funtions
    // ===============================================================================

    // Player has limited time to finish the quiz
    function timer() {
        // decrement countdown by 1
        countdown--;

        // if countdown timer equals zero, game ends
        if (countdown === 0){
            gameOver();
        }

        // Get the current time. 
        var converted = timeConverter(countdown);
        console.log(converted);

        // Display the current time
        $("#clock").text(converted);
    }


    // I borrowed this from the stopwatch activity. 
    function timeConverter (t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
        seconds = "0" + seconds;
        }

        if (minutes === 0) {
        minutes = "00";
        }

        else if (minutes < 10) {
        minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
});
