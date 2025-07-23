<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin_style.css">
    <title>Активные заказы - Porsche 911 Posters</title>
</head>
<body>
    <h1>Активные заказы</h1>
    
    <div class="orders-container">
        <table class="orders-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Поколение</th>
                    <th>Имя</th>
                    <th>Телефон</th>
                    <th>Комментарий</th>
                    <th>Дата заказа</th>
                </tr>
            </thead>
            <tbody>
                <?php require_once 'fetch_orders.php'; ?>
            </tbody>
        </table>
    </div>
    
    <a href="Main.html" class="floating-home-button" title="На главную"></a>
    <footer>
        <i>© 2025 | tg: @mr19XRI92H</i>
    </footer>
</body>
</html>