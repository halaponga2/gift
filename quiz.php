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
    if (!isset($_GET['cdtnjd'])){ echo '
    <h1>РЕБУС 1</h1>
    <div class="images">
        <img src="img/snake.jpg" alt="snake">
        <img src="img/traheya.jpg" alt="traheya">
        <img src="img/japan.jpg" alt="japan">
        <img src="img/letov.jpg" alt="letov"></div>
        <p id="farsi">کتاب انحطاط غرب</p>
        <div class="field">
            <input type="text" id="check"> 
            <button type="submit" id="submit" onclick="nextPage()">Ответ</button>
        </div>
        <div id="answerstatus" style="display: none;">Неверно!</div>
        ';}
        else echo '
            <h1>Ответ</h1>
            <img class="answer" src="img/psixo.jpg" alt="svetov">'    ;
            
?>
        <script src="js/quiz.js"></script>
</body>
</html>