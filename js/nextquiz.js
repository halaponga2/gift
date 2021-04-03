function nextPage (){
    var audio = new Audio();
    
    if (document.getElementById('check').value.toUpperCase()=="ПОНАСЕНКОВ"){
        audio.src="sounds/right.mp3";
        audio.autoplay=true;
        document.getElementById('answerstatus').innerHTML = "Верно!";
        document.getElementById('answerstatus').style.color="green";
        document.getElementById('answerstatus').style.display = 'block';
        setTimeout(function(){document.getElementById('answerstatus').style.display = 'none';},3000);
        setTimeout(function(){location.href="?gjyfctyrjd=1"},3000);}
    else{
        audio.src="sounds/fail.mp3";
        document.getElementById('answerstatus').innerHTML = "Неверно!";
        document.getElementById('answerstatus').style.display = 'block';
        document.getElementById('answerstatus').style.color="red";
        audio.autoplay=true;
        setTimeout(function(){document.getElementById('answerstatus').style.display = 'none';},3000);
    }
}

window.onload = function() {
    document.addEventListener('keyup',function(event){
        if (event.key=="Enter"){
            nextPage();
        }
    });
    var url = window.location.href;
    if(url.indexOf('gjyfctyrjd') != -1){
        setTimeout(function(){location.href="anotherquiz.php"},2000);
    }
  };

