<?php
header('Content-Type: text/html; charset=utf-8');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "praktika";


$conn = mysqli_connect($servername, $username,$password,$dbname);
$sql = "SELECT * FROM poster_orders ORDER BY order_date DESC";
$result=mysqli_query($conn, $sql);
   
    if (($result) > 0) {
        while ($rows=mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>".$rows[0]."</td>";
            echo "<td>".$rows[1]."</td>";
            echo "<td>".$rows[2]."</td>";
            echo "<td>".$rows[3]."</td>";
            echo "<td>".$rows[4]."</td>";
            echo "<td>".$rows[5]."</td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='6'>Нет активных заказов</td></tr>";
    }

$conn = null;
?>