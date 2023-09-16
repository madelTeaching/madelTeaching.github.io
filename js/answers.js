// Add event listeners to show answer buttons
const showAnswerButtons = document.querySelectorAll('.show-answer');
const answer = document.querySelector(".answer");
const giffy = document.querySelector(".giffy");
const giffyEnd = document.querySelector(".giffyEnd");
const answerText = document.querySelector(".answerText");

showAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add a class to start the rocket animation
        answer.classList.add("show");

        // After 3 seconds, show the explosion and hide the rocket
        setTimeout(() => {
            giffy.style.display = "none";
            giffyEnd.style.display = "block";

            // After another .8 seconds, hide the explosion and show the answer
            setTimeout(() => {
                giffyEnd.style.display = "none";
                answerText.style.display = "block";
            }, 800);
        }, 3000);
    });
});
