function nextPage(){
    var door = new Audio();
    door.src = 'sounds/door.mp3';
    door.autoplay=true;
    setTimeout(function(){location.href="pre_quiz.html"},4000);
}