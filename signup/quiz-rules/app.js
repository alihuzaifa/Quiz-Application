function checkQuiz(checkAns){
    var sentItem = checkAns.innerHTML;
    localStorage.setItem("checkQuiz",sentItem);
    window.location.replace("quiz/quiz.html")
}