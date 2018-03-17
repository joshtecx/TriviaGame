// I DECIDED TO ADD A RESET FUNCTION / BUTTON LATE FRIDAY NIGHT 
// I WAS HAVING AN ISSUE WITH THE TIME RESETTING
// I CAN FIGURE IT OUT WITH A LITTLE MORE WORK
// NEEEEEED SLEEEP
// ==============================================================================================================================



$(document).ready(function(){
    $("#start").on("click", gameStart);
    // $("#restart").on("click", gameReStart);



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
        answer2: "Montgomery Burns ",
        question3: "What is the name of the Springfield Baseball team?",
        options3: ["Atoms ", "Isotopes ", "Protons ", "Electrons "],
        answer3: "Isotopes ",
        question4: "What is the name of the annual Simpsons Halloween episode?",
        options4: ["Shriekshow of Terror ", "Halloween Horror Night ", "Treehouse of Horror ", "Spooky Simpsons "],
        answer4: "Treehouse of Horror ",
        question5: "Which character was NOT voiced by Hank Azaria? ",
        options5: ["Apu ", "Ned Flanders ", "Chief Wiggum ", "Comic Book Guy "],
        answer5: "Ned Flanders "
    };

    var correct = 0;
    var incorrect = 0;
    var countdown= 30;
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
        $("#resultsDisplay").hide();
        $("#restart").hide();
    }

    // REMEMBER TO UNCOMMENT THIS WHEN YOU'RE DONE WITH THE REST OF THE GAME!!!
    beginning();


    // Displpays questions and answers
    function displayQuestion(){
        $("#question1").append(questionAnswer.question1);
        $("#question2").append(questionAnswer.question2);
        $("#question3").append(questionAnswer.question3);
        $("#question4").append(questionAnswer.question4);
        $("#question5").append(questionAnswer.question5);
    }

    displayQuestion();

    // I know, I know DRY....please just bear with me while I figure this out
    // I just want to get it to work before I clean it up
    function displayAnswers(){
        for (var i = 0; i < questionAnswer.options1.length; i++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options1");
            answerBtn.val("submit");
            answerBtn.attr("data-options",questionAnswer.options1[i]);
            answerBtn.text(questionAnswer.options1[i]);
            $("#answers1").append(answerBtn)
        }

        for (var j = 0; j < questionAnswer.options2.length; j++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options2");
            answerBtn.attr("data-options",questionAnswer.options2[j]);
            answerBtn.text(questionAnswer.options2[j]);
            $("#answers2").append(answerBtn)
        }

        for (var k = 0; k < questionAnswer.options3.length; k++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options3");
            answerBtn.attr("data-options",questionAnswer.options3[k]);
            answerBtn.text(questionAnswer.options3[k]);
            $("#answers3").append(answerBtn)
        }

        for (var l = 0; l < questionAnswer.options4.length; l++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options4");
            answerBtn.attr("data-options",questionAnswer.options4[l]);
            answerBtn.text(questionAnswer.options4[l]);
            $("#answers4").append(answerBtn)
        }

        for (var m = 0; m < questionAnswer.options5.length; m++){
            var answerBtn = $("<button>");
            answerBtn.addClass("options5");
            answerBtn.attr("data-options",questionAnswer.options5[m]);
            answerBtn.text(questionAnswer.options5[m]);
            $("#answers5").append(answerBtn)
        }
    }

    displayAnswers();

    // I know, I know DRY....please just bear with me while I figure this out
    // I just want to get it to work before I clean it up

    // gathers user selection and determines if that is correct or incorrect
    $(".options1").click(function() {
        // console.log(this);
        selection = $(this).attr("data-options");
        
        // Player cannot choose more than one answer
        $(".options1").prop("disabled", true);
        if (selection === questionAnswer.answer1){
            correct++;
            console.log("WOOOOHOOO!");
        } else {
            incorrect++;
            console.log("D'OH!");
        }
    });

    $(".options2").click(function() {
        // console.log(this);
        selection = $(this).attr("data-options");
        
        // Player cannot choose more than one answer
        $(".options2").prop("disabled", true);
        if (selection === questionAnswer.answer2){
            correct++;
            console.log("WOOOOHOOO!");
        } else {
            incorrect++;
            console.log("D'OH!");
        }
    });

    $(".options3").click(function() {
        // console.log(this);
        selection = $(this).attr("data-options");
        
        // Player cannot choose more than one answer
        $(".options3").prop("disabled", true);
        if (selection === questionAnswer.answer3){
            correct++;
            console.log("WOOOOHOOO!");
        } else {
            incorrect++;
            console.log("D'OH!");
        }
    });

    $(".options4").click(function() {
        // console.log(this);
        selection = $(this).attr("data-options");
        
        // Player cannot choose more than one answer
        $(".options4").prop("disabled", true);
        if (selection === questionAnswer.answer4){
            correct++;
            console.log("WOOOOHOOO!");
        } else {
            incorrect++;
            console.log("D'OH!");
        }
    });

    $(".options5").click(function() {
        // console.log(this);
        selection = $(this).attr("data-options");
        
        // Player cannot choose more than one answer
        $(".options5").prop("disabled", true);
        if (selection === questionAnswer.answer5){
            correct++;
            console.log("WOOOOHOOO!");
        } else {
            incorrect++;
            console.log("D'OH!");
        }
    });


   

    // Game starts when player clicks start
    function gameStart() {
        console.log('start');
        $("#start").hide();
        $("#restart").hide();
        $("#resultsDisplay").hide();
        $("#clock").show();
        $("#questionDisplay").show();
        intervalId = setInterval(timer, 1000);
    }

    // function gameReStart() {
    //     clearInterval(intervalId);
    //     $("#start").hide();
    //     $("#restart").hide();
    //     $("#resultsDisplay").hide();
    //     $("#clock").show();
    //     $("#questionDisplay").show();
    //     intervalId = setInterval(timer, 1000);
    // }

    // Game ends when player runs out of time
    function gameOver(){
        console.log("stopping");
        $("#clock").hide();
        $("#questionDisplay").hide();
        clearInterval(intervalId);
        // Page reveals the number of questions answered correctly or incorrectly 
        $("#resultsDisplay").show();
        // $("#restart").show();
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
