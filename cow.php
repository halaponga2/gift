<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles/cow.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <div class="field">
        <input type="text" id="check" maxlength="4" placeholder="Введите число"> 
        <button type="submit" id="submit" onclick="check()" >Ответ</button>
        <div id="wrong_length" style="display:none;">Введите 4 символа</div>
    </div>
    <div id="monitor">
        <img src="img/monitor.png" alt="monitor">
        <ol id="list">

        </ol>
    </div>
    
    <script src="js/cow.js"></script>
</body>
</html>