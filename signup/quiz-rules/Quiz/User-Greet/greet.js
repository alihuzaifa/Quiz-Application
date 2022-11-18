var score = document.querySelector(".score");
var getStorage = localStorage.getItem("data");
getStorage = JSON.parse(getStorage);
var lastStorage = getStorage[getStorage.length-1];
var storageScore = lastStorage.score;
score.innerHTML = storageScore;
getStorage = JSON.stringify(getStorage);
localStorage.setItem("data",getStorage);
localStorage.removeItem("checkQuiz");

function backToQuiz(){
    window.location.replace("../../quiz-rules.html")
}