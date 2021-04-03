<!DOCTYPE html>

<html lang="ru">
    
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles/quiz.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    
</head>
<body>
    <?php 
    if (!isset($_GET['gjyfctyrjd'])){ echo '
    <h1>РЕБУС 2</h1>
    <div class="images">
        <img src="img/dirizher.jpg" alt="dirizher">
        <img src="img/napoleon.jpg" alt="napoleon">
        <img src="img/narciss.jpg" alt="narciss">
        <img src="img/gru.jpg" alt="gru"></div>
        <div class="field">
            <input type="text" id="check"> 
            <button type="submit" id="submit" onclick="nextPage()">кек</button>
        </div>
        <div id="answerstatus" style="display: none;">Неверно!</div>';}
        else echo '
            <h1>Ответ</h1>
            <img class="answer" src="img/nazi.jpg" alt="ponasenkov">'    ;
            
?>
        <script src="js/nextquiz.js"></script>
</body>
</html>