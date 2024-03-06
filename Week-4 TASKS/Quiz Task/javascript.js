
function calculate() {
    var score = 0;
    var answers = {
        capital: "paris",
        planet: "Mars",
        mammal: "bluewhale",
    };
    
    for (var question in answers) {
        var useranswer = document.querySelector(`input[name=${question}]:checked`);
        if (useranswer && useranswer.value === answers[question])
         {
            score++;
        }
    }
    
    var quizform = document.getElementById("quizform");
    quizform.style.display = "none";
    
    var result = document.getElementById("quizresult");
    if (score === 3) {
        result.innerHTML = `<h2>Your Quiz Result</h2><p>Congratulations! You got all questions correct. Your score: ${score}/3</p>`;
    } else {
        result.innerHTML = `<h2>Your Quiz Result</h2><p>Well done! You scored ${score}/3. Keep practicing!</p>`;
    }
}
