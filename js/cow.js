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
            var elem = document.createElement("li");
            elem.innerHTML=guess_value+"\tБыков: "+bulls+"\tКоров: "+cows;
            document.getElementById('list').appendChild(elem);
            amount++;}
        else{
            var elem = document.createElement("p");
            elem.innerHTML="Ходы закончились";
            document.getElementById('monitor').appendChild(elem);
        }
    }
    }
function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

window.onload = function () {
    amount=0;
    answer_array = [];
    while (answer_array.length < 4){
        var num = randomInteger(0,9);
        if (answer_array.indexOf(num) == -1){
            answer_array.push(num);
        }
    }
}