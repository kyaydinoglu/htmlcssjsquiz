function result() {
    var score = 0; // Reset the score for each quiz attempt
    var Grade = ' ';

    var Q1_ans = 'C';
    var Q2_ans = 'C';
    var Q3_ans = 'B';
    var Q4_ans = 'A';
    var Q5_ans = 'B';

    var Q1 = document.quiz.Q1.value;
    var Q2 = document.quiz.Q2.value;
    var Q3 = document.quiz.Q3.value;
    var Q4 = document.quiz.Q4.value;
    var Q5 = document.quiz.Q5.value;

    // Code for checking answers and updating the score
    if (Q1 === Q1_ans) {
        score += 2;
    }

    // Repeat the above for Q2, Q3, Q4, Q5

    switch (score) {
        case 10:
            Grade = 'A';
            break;
        case 8:
            Grade = 'B';
            break;
        case 6:
            Grade = 'C';
            break;
        case 4:
            Grade = 'D';
            break;
        case 2:
            Grade = 'E';
            break;
        default:
            Grade = 'F';
            break;
    }

    var mymodal = $('#myModal');
    mymodal.find('.modal-body').text("Result is\n" + "Your score is " + score + "/10" + "\n" + "Your Grade is : " + Grade);
    mymodal.modal('show');
}
