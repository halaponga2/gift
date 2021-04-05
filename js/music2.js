


var si1 = new Audio();
si1.src = 'sounds/si1.mp3';
var doo = new Audio();
doo.src = 'sounds/do.mp3';
var re = new Audio();
re.src = 'sounds/re.mp3';
var mi = new Audio();
mi.src = 'sounds/mi.mp3';
var fa = new Audio();
fa.src = 'sounds/fa.mp3';
var sol = new Audio();
sol.src = 'sounds/sol.mp3';
var la = new Audio();
la.src = 'sounds/la.mp3';
var si2 = new Audio();
si2.src = 'sounds/si2.mp3';
var answer_song= new Audio();
answer_song.src = 'sounds/song2.mp3'
var anwer='2266776';

var guess ='';

var active=0

function si1_click(){
    guess = guess+'1';
    si1.currentTime = 0;
    si1.play();
    check();
}
function doo_click(){
    guess = guess+'2';
    doo.currentTime = 0;
    doo.play();
    check();
}
function re_click(){
    guess = guess+'3';
    re.currentTime = 0;
    re.play();
    check();
}
function mi_click(){
    guess = guess+'4';
    mi.currentTime = 0;
    mi.play();
    check();
}
function fa_click(){
    guess = guess+'5';
    fa.currentTime = 0;
    fa.play();
    check();
}
function sol_click(){
    guess = guess+'6';
    sol.currentTime = 0;
    sol.play();
    check();
}
function la_click(){
    guess = guess+'7';
    la.currentTime = 0;
    la.play();
    check();
}
function si2_click(){
    guess = guess+'8';
    si2.currentTime = 0;
    si2.play();
    check();
}

function check(){
if (guess.indexOf('2266776')!=-1){
    document.getElementById('correct').style.display="block";
    answer_song.play();
    setTimeout(function(){location.href="music3.html"},5000);
    guess="0";
}}

function hint(){
    if (active == 0){
        var hint1 = document.createElement('p');
        var answer_button = document.createElement('p');
        hint1.innerHTML = 'Песня "Twinkle, Twinkle Little Star"';
        answer_button.innerHTML = "<a href='' onclick='answer(); return false;'>Ответ</a>";
        document.getElementById('hint').appendChild(hint1);
        document.getElementById('hint').appendChild(answer_button);
        active++;}
}

function answer(){
    if (active==1){
        var hint2 = document.createElement('p');
        hint2.innerHTML = 'До, До, Соль, Соль, Ля, Ля, Соль';
        document.getElementById('hint').appendChild(hint2);
        active++;
    }
}