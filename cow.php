<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles/cow.css">
</head>
<body>
    <div class="field">
        <input type="text" id="check" maxlength="4"> 
        <button type="submit" id="submit" onclick="check()" >кек</button>
        <div id="wrong_length" style="display:none;">Введите 4 символа</div>
    </div>
    <div class="monitor">
        <img src="img/monitor.png" alt="monitor">
        <ol id="list">

        </ol>
    </div>
    
    <script src="js/cow.js"></script>
</body>
</html>