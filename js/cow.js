function check (){
    var guess_value=document.getElementById('check').value;
    document.getElementById('check').value="";
    if (guess_value.length<4){ 
        document.getElementById('wrong_length').style.display="block";
        alert(answer_array);
    }
    else{
        document.getElementById('wrong_length').style.display="none";
        if (amount<9){
            var cows=0;
            var bulls=0;
            var guess_array=guess_value.split("");
            for (var i=0; i<4;i++){
                for (var j=0; j<4;j++){
                    if (guess_array[i]==answer_array[j]){
                        if (i==j){
                            bulls++;
                        }
                        else{cows++;}
                    }
                }
            }
            if (bulls==4){
                for (var i=0;i<amount;i++){
                    var elem = document.querySelector("li");
                    document.getElementById('list').removeChild(elem);
                    }
                    var win_picture = document.createElement('div');
                    win_picture.innerHTML="\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠉⠁⠄⠄⠄⠄⠈⠉⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣇⠄⠄⠄⢀⣀⣀⣀⠄⠄⠄⠄⠄⢀⣀⣀⣀⡀⠄⠄⢠⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⡄⠄⣼⣿⣿⣿⣿⣷⠄⠄⠄⢀⣿⣿⣿⣿⣿⠄⠄⣼⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⠄⠹⣿⣿⣿⣿⠏⣰⣿⣷⡀⢿⣿⣿⣿⡿⠄⢸⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⠄⠄⠉⠛⠛⠁⢠⣿⣿⣿⣷⠄⠙⠛⠋⠄⠄⢸⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣄⣀⡀⠄⠄⠄⠈⠛⠋⠙⠋⠄⠄⠄⠄⣀⣀⣸⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣀⡄⠄⢀⡀⣀⠄⠄⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣧⣿⣿⣟⣿⢸⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠸⡏⠿⢿⡿⣿⠛⠏⢿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄⠈⠁⠄⠄⠄⣠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⡇⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢻⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⠁⠄⠄⠄⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠃⠄⠄⠸⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣧⣤⣶⣶⣶⣦⣄⠈⠙⠿⣿⣿⣿⡿⠟⠋⢁⣀⣀⣀⠄⢠⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠄⠉⠁⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢉⣠⣴⣶⣶⣤⣌⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿<br>\
                    ⣿⣿⣿⣿⣿⣿⡿⠟⢋⣡⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣈⠙⠻⢿⣿⣿⣿⣿<br>\
                    ⠟⠛⠛⠛⠋⣁⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠄⠄⠄⣨<br>\
                    ⣷⡄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⣼⣿<br>\
                    ⣿⣿⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>";
                    document.getElementById('list').style.lineHeight='1em';
                    document.getElementById('list').appendChild(win_picture);
                    document.getElementById('check').setAttribute('disabled','disabled');
                    document.getElementById('submit').setAttribute('disabled','disabled');
                    audio.src="sounds/cow_win.mp3";
                    audio.autoplay=true;
                    setTimeout(function(){location.href="pre_music.html"},3000);
            }
            else{
            audio.src="sounds/cow_answer.mp3";
            audio.autoplay=true;
            var elem = document.createElement("li");
            setTimeout(function(){elem.innerHTML=guess_value+"\tБыков: "+bulls+"\tКоров: "+cows},2000);
            document.getElementById('list').appendChild(elem);
            amount++;}}
        else{ for (var i=0;i<9;i++){
            var elem = document.querySelector("li");
            document.getElementById('list').removeChild(elem);
            
        }
        elem = document.createElement("li");
        elem.innerHTML="Вы исчерпали количество попыток.<a href='' onclick:'location.reload(true);' id:'reload'>Начать сначала</a>";
        document.getElementById('list').appendChild(elem);
        document.getElementById('check').setAttribute('disabled','disabled');
        document.getElementById('submit').setAttribute('disabled','disabled')
        }
    }
    }
function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

window.onload = function () {
    amount=0;
    audio = new Audio();
    answer_array = [];
    while (answer_array.length < 4){
        var num = randomInteger(0,9);
        if (answer_array.indexOf(num) == -1){
            answer_array.push(num);
        }
    }
    document.addEventListener('keyup',function(event){
        if (event.key=="Enter"){
            check();
        }
    });
}
