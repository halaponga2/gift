function nextPage(){
    var door = new Audio();
    door.src = 'sounds/door.mp3';
    door.autoplay=true;
    setTimeout(function(){location.href="pre_music.html"},4000);
}