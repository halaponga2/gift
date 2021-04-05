function nextPage(){
    var audio = new Audio();
    if (document.getElementById('check').value.toUpperCase()=="ЛЮБОВЬ И НЕНАВИСТЬ"){
        audio.src="sounds/right.mp3";
        audio.autoplay=true;
        document.getElementById('correct').innerHTML = "Верно!";
        document.getElementById('correct').style.display="block";
        setTimeout(function(){location.href="../img/code.png"},3000);}
    else{
        audio.src="sounds/fail.mp3";
        document.getElementById('correct').innerHTML = "Неверно!";
        document.getElementById('correct').style.display = 'block';
        document.getElementById('correct').style.color="red";
        audio.autoplay=true;
        setTimeout(function(){document.getElementById('correct').style.display = 'none';},3000);
    }
}