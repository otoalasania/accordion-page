const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", () => {
        question[i].classList.toggle("open");
        answer[i].classList.toggle("collapse");
    });

}