<?php
// Настройки подключения к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "praktika";

// Создаем подключение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем подключение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получаем данные из формы
$generation = $_POST['generation'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

// Подготавливаем SQL запрос
$stmt = $conn->prepare("INSERT INTO poster_orders (generation, name, phone, comment, order_date) VALUES (?, ?, ?, ?, NOW())");
$stmt->bind_param("ssss", $generation, $name, $phone, $comment);

// Выполняем запрос
if ($stmt->execute()) {
    // Перенаправляем на страницу благодарности
    header("Location: thank_you.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

// Закрываем соединение
$stmt->close();
$conn->close();
?>